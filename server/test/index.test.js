import request from 'supertest'
import app from '../app.js'
import { describe, it, beforeEach, beforeAll} from 'vitest'
import 'dotenv/config'
import db from '../configs/db.js'

// Set up environment variables
process.env.FORCE_AUTH = 'true'

let NoIDUser = {
    eid:'test-admin',
    name:'Test Administrator',
    created_by: 'test-admin',
    updated_by: 'test-admin',
    is_admin: true,
    token: 'test-token',
    }

let InvalidUser = {
  eid:'test-admin',
  id: 9999999,
  name:'Test Administrator',
  created_by: 'test-admin',
  updated_by: 'test-admin',
  is_admin: true,
  token: 'test-token',
}

let AdminUser = {
    id: 1,
    eid: 'test-admin',
    name: 'Test Administrator',
    token: 'test-token'
}

beforeAll(async () => {
    db.migrate.latest()
})
      
beforeEach(async () => {
    db.seed.run()
    //adminUser.token = await login(adminUser)
})

const getIndexReturnsEmptyDataOnNoId = (NoIDUser) => {
    it('should return empty data', (done) => {
      request(app)
        .get('/')
        .set('Authorization', `Bearer ${NoIDUser.token}`)
        .expect(200)
        .end((err, res) => {
        if (err) {return done(err)}
         expect(res.body).to.deep.equal({ data: {}})
         done(err)
        })
    })
  }

  const getSessionDestroyedOnInvalidUser = (InvalidUser) => {
    it('should destroy session', (done) => {
      request(app)
        .get('/')
        .set('Authorization', `Bearer ${InvalidUser.token}`)
        .expect(401)
        .end((err, res) => {
          if (err) {return done(err)}
           done(err)
          })
        })
    }
  
    const getCorrectDataOnValidAdminUser = (AdminUser) => {
      it('should return empty data', (done) => {
        request(app)
          .get('/')
          .set('Authorization', `Bearer ${AdminUser.token}`)
          .expect(200)
          .end((err, res) => {
          if (err) {return done(err)}
           expect(res.body).to.deep.equal({ 
            data: {
              id: 1,
              eid: 'test-admin',
              name: 'Test Administrator',
              admin: true 
           }})
           done(err)
          })
      })
    }
   
  


  describe('GET /', () => {
    getIndexReturnsEmptyDataOnNoId(NoIDUser)
    getSessionDestroyedOnInvalidUser(InvalidUser)
    getCorrectDataOnValidAdminUser(AdminUser)
  })