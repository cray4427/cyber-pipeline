import request from 'supertest'
import app from '../app.js'
import { describe, it, beforeEach, beforeAll, expect} from 'vitest'
import 'dotenv/config'
import db from '../configs/db.js'
import Ajv from 'ajv'
import jwt from 'jsonwebtoken'
import { Console } from 'winston/lib/winston/transports/index.js'

// Set up environment variables
process.env.FORCE_AUTH = 'true'
let NotAdmin = {
  id: 3,
  eid: 'test-student',
  name: 'Test Student',
  token: null
}

//Creates a mock user
let adminUser = {
  id: 1,
  eid:'test-admin',
  name:'Test Administrator',
  is_admin: true,
  token: null,
  }

const login = async (adminUser) => {
  const agent = request.agent(app)
  return agent
    .get('/auth/login?eid=' + encodeURIComponent(adminUser.eid))
    .then(() => {
      return agent
        .get('/auth/token')
        .expect(200)
        .then((res) => {
          return res.body.token
        })
    })
  }
  

  beforeAll(async () => {
    db.migrate.latest()
    db.seed.run()
  })
  
  beforeEach(async () => {
   // adminUser.token = await login(adminUser)
    //NotAdmin.token = await login(NotAdmin)
  })

  //Tests that get requests return a list of all cohorts
  const getAllCohorts = (adminUser) => {
    it('should list all cohorts', (done) => {
      request(app)
        .get('/api/v1/cohorts/')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .expect(200)
        .end((err,res) => {
          if(err) {return done(err)}
          expect(res.body).toBeInstanceOf(Array)
          expect(res.body.length).toBe(3)
        })
    })
  }
  

  //Tests that all cohorts' schema are correct
  const getAllCohortsSchemaMatch = (adminUser) => {
  it('all cohorts should match schema', (done) => {
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'name'
        ],
        properties: {
          id: { type: 'integer' },
          name: { type: 'string', minLength: 1, maxLength: 255 },
          teachers: {type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'integer'},
                name: { type: 'string'},
                notes: { type: 'string'}
              }
            }
          }
        },
      },
      additionalProperties: false,
    }
    const ajv = new Ajv()
    const validate = ajv.compile(schema)
    request(app)
      .get('/api/v1/cohorts/')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        const isValid = validate(res.body)
        expect(isValid).toBe(true)
        done()
      })
        
  })
}
//Tests that put requests work
const putCohort = (adminUser) => {
  it('should create a cohort', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
    const newcohort = {
      id: '2',
      name: 'test cohort',
      notes: 'PACK granted funded cohort',
      teachers: [t]
    }
    request(app)
      .put('/api/v1/cohorts')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .send({
        cohort: newcohort,
      })
      .expect(200)
      .end((err, res) => {
        if (err) {return done(err)}
        done()
      })
      request(app)
      .get('/api/v1/cohorts/')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .expect(200)
      .end((err, res) => {
        if (err) {return done(err)}
        
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(2)
        done()
      })
  })
}


//Tests whta put requests ignore any additional properties 
const addCohortIgnoresAdditionalProperties = (adminUser) => {
  it('should ignore additional properties on new cohort', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
    const newcohort = {
      id: '1',
      name: 'Spring 2023',
      notes: 'PACK granted funded cohort',
      extraProperty: 'This should be ignored',
      teachers: [t]
    }
    request(app)
      .put('/api/v1/cohorts')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .send({ adminUser: newcohort })
      .end((err, res) => {
        if (err) return done(err)
      .expect(201)
        request(app)
          .get('/api/v1/cohort/')
          .set('Authorization', `Bearer ${adminUser.token}`)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
              expect(res.body).toBeInstanceOf(Array)
            expect(res.body.length).toBe(5)
            const addeduser = res.body.find((u) => u.name === newuser.name)
            addeduser.should.not.have.property('extraProperty')
            addeduser.roles[0].should.not.have.property('extraProperty')
            done()
          })
      })
  })
}

//Tests that put requests don't allow cohorts of the same name
const addCohortFailsOnDuplicateName = (adminUser) => {
  it('should fail on duplicate name', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
    const newcohort = {
      id: '1',
      name: 'Spring 2023',
      notes: 'PACK granted funded cohort',
      teachers: [t]
    }
    request(app)
      .put('/api/v1/cohorts')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .send({ adminUser: newcohort })
      .expect(422)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}

//Tests that put requests don't work if the name is missing
const addCohortFailsOnMissingName = (adminUser) => {
  it('should fail on missing properties', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
    const newcohort_noname = {
      id: '1',
      notes: 'PACK granted funded cohort',
      teachers: [t]
    }
    request(app)
      .put('/api/v1/cohorts')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .send({ adminUser: newcohort_noname })
      .expect(422)
      .end((err) => {
        if (err) return done(err)
        const t = {id:'1', name:'Teacher', notes:'Joined on time'}
        const newcohort_noid = {
          notes: 'PACK granted funded cohort',
          teachers: [t]
        }
        request(app)
          .put('/api/v1/cohorts')
          .set('Authorization', `Bearer ${adminUser.token}`)
          .send({ adminUser: newcohort_noid })
          .expect(422)
          .end((err) => {
            if (err) return done(err)
            done()
        })
      })
    })
  }

  //Tests if post requests work
  const updateCohort = (adminUser) => {
    it('should update a cohort', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
    const newcohort = {
      id: '1',
      notes: 'test',
      teachers: [t]
    }
      request(app)
        .post('/api/v1/cohorts/' + newcohort.id)
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({ adminUser: newcohort })
        .end((err, res) => {
          if (err) return done(err)
          .expect(200)
          request(app)
            .get('/api/v1/cohorts/' + newcohort.id)
            .set('Authorization', `Bearer ${adminUser.token}`)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err)
              expect(res.body).toBeInstanceOf(Array)
              expect(res.body.length).toBe(2)
              const addedCohort = res.body.find((u) => u.id === newcohort.id)
              expect(addedCohort).toBe(newcohort)
              done()
            })
        })
    })
  }
  //Tests that post requests ignore any additional properties
  const updateCohortIgnoresAdditionalProperties = (adminUser) => {
    it('should ignore additional properties on updated user', (done) => {
      const t = {id:'1', name:'Teacher', notes:'Joined on time'}
      const newcohort = {
        id: '1',
        name: 'Spring 2023',
        notes: 'PACK granted funded cohort',
        extraProperty: 'This should be ignored',
        teachers: [t]
      }
      request(app)
        .post('/api/v1/cohorts')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({ adminUser: newcohort })
        .end((err, res) => {
          if (err) return done(err)
          .expect(200)
          request(app)
            .get('/api/v1/cohorts')
            .set('Authorization', `Bearer ${adminUser.token}`)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err)
              expect(res.body).toBeInstanceOf(Array)
              expect(res.body.length).toBe(2)
              const addedCohort = res.body.find((u) => u.id == newcohort.id)
              expect(addedCohort).not.toHaveProperty('extraProperty')
              expect(addedCohort).toHaveProperty('name')
              expect(addedCohort.name).toBe('Spring 2023')
              expect(addedCohort).not.toHaveProperty('extraProperty')
              done()
            })
        })
    })
  }

  //Tests that post requests fail if the name is missing
  const updateCohortFailsOnMissingName = (adminUser) => {
    it('should fail on missing properties', (done) => {
      const t = {id:'1', name:'Teacher', notes:'Joined on time'}
      const newcohort_noname = {
        id: '1',
        notes: 'PACK granted funded cohort',
        teachers: [t]
      }
      request(app)
        .post('/api/v1/cohorts' + newcohort_noname.id)
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({ adminUser: newcohort_noname })
        .expect(422)
        .end((err) => {
          if (err) return done(err)
          done()            
        })
    })
}

//Tests that post requests fail if the id is invalid
const updateCohortFailsOnInvalidName = (adminUser) => {
  it('should fail on invalid name', (done) => {
    const t = {id:'1', name:'Teacher', notes:'Joined on time'}
      const newcohort = {
        id: '',
        name: 'Invalid Name',
        notes: 'PACK granted funded cohort',
        teachers: [t]
      }
    request(app)
      .post('/api/v1/cohorts' + newcohort.id)
      .set('Authorization', `Bearer ${adminUser.token}`)
      .send({ adminUser: newcohort })
      .expect(422)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}


const deleteCohort = (adminUser) => {
  it('should delete a cohort', (done) => {
    request(app)
      .delete('/api/v1/cohorts/2')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err)
        request(app)
          .get('/api/v1/cohorts/')
          .set('Authorization', `Bearer ${adminUser.token}`)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toBeInstanceOf(Array)
            expect(res.body.length).toBe(1)
            const deletedcohort = res.body.find((u) => u.id === 2)
            assert.isUndefined(deletedcohort)
            done()
          })
      })
  })
}

const deleteCohortFailsOnInvalidId = (adminUser) => {
  it('should fail on invalid name', (done) => {
    request(app)
      .delete('/api/v1/cohorts/999')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .expect(422)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}



//Test that get requests only work for users with admin role
const getAllCohortsRequiresAdminRole = (NotAdmin) => {
  it('should require the admin role', (done) => {
    request(app)
      .get('/api/v1/cohorts')
      .set('Authorization', `Bearer ${NotAdmin.token}`)
      .expect(403)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}

//Tests that put requests only work for users with admin role
const putCohortRequiresAdminRole = (NotAdmin) => {
  it('should require the admin role', (done) => {
    request(app)
      .put('/api/v1/cohorts')
      .set('Authorization', `Bearer ${NotAdmin.token}`)
      .expect(403)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}

//Tests that post requests are only allowed for users with admin role
const postCohortRequiresAdminRole = (NotAdmin => {
  it('should require the admin role', (done) => {
    request(app)
      .post('/api/v1/cohorts')
      .set('Authorization', `Bearer ${NotAdmin.token}`)
      .expect(403)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})


const deleteCohortRequiresAdminRole = (adminUser) => {
  it('should require the admin role', (done) => {
    request(app)
      .delete('/api/v1/cohorts/2')
      .set('Authorization', `Bearer ${adminUser.token}`)
      .expect(403)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
}

  describe('GET /', () => {
    getAllCohorts(adminUser)
    getAllCohortsSchemaMatch(adminUser)
    getAllCohortsRequiresAdminRole(NotAdmin)
  })

  describe('PUT /', () => {
    putCohort(adminUser)
    addCohortIgnoresAdditionalProperties(adminUser)
    putCohortRequiresAdminRole(adminUser)
    addCohortFailsOnDuplicateName(adminUser)
    addCohortFailsOnMissingName(adminUser)
  })


  describe('POST /{id}', () => {
    updateCohort(adminUser)
    updateCohortIgnoresAdditionalProperties(adminUser)
    updateCohortFailsOnMissingName(adminUser)
    updateCohortFailsOnInvalidName(adminUser)
    postCohortRequiresAdminRole(adminUser)
  })

  describe('DELETE /{id}', () => {
    deleteCohort(adminUser)
    deleteCohortFailsOnInvalidId(adminUser)
    deleteCohortRequiresAdminRole(adminUser)
  })