import request from 'supertest'
import app from '../app.js'
import { describe, it, beforeEach, beforeAll, expect} from 'vitest'
import 'dotenv/config'
import db from '../configs/db.js'
import Ajv from 'ajv'

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
    adminUser.token = await login(adminUser)
})
        
beforeEach(async () => {
    adminUser.token = await login(adminUser)
})

const shouldSendEmailWithValidEmailFormat = (adminUser) => {
    it('should successfully send an email', async ()=> {
      const res = await request(app)
        .post('/api/v1/emails')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({
              to: "test@gmail.com",
              subject: "test subject",
              text: "test email",
              html: "html"
          })
        .expect(200)
        expect(res.body.success).toBe(true)
        expect(res.body.message).toBe('Email sent successfully')

    })
  }

  const shouldNotSendEmailWithMissingTo = (adminUser) => {
    it('should successfully send an email', async ()=> {
      const res = await request(app)
        .post('/api/v1/emails')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({
              subject: "test subject",
              text: "test email",
              html: "html"
          })
        .expect(500)
        expect(res.body.success).toBe(false)
        expect(res.body.message).toBe('Failed to send email')

    })
  }
/*
  const shouldNotSendEmailWithMissingSubject = (adminUser) => {
    it('should successfully send an email', async ()=> {
      const res = await request(app)
        .post('/api/v1/emails')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({
              to: "test@gmail.com",
              text: "test email",
              html: "html"
          })
        .expect(500)
        expect(res.body.success).toBe(false)
        expect(res.body.message).toBe('Failed to send email')

    })
  }

  const shouldNotSendEmailWithMissingText = (adminUser) => {
    it('should successfully send an email', async ()=> {
      const res = await request(app)
        .post('/api/v1/emails')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({
              to: "test@gmail.com",
              subject: "test subject",
              html: "html"
          })
        .expect(500)
        expect(res.body.success).toBe(false)
        expect(res.body.message).toBe('Failed to send email')

    })
  }

const shouldNotSendEmailWithMissingHtml = (adminUser) => {
    it('should successfully send an email', async ()=> {
      const res = await request(app)
        .post('/api/v1/emails')
        .set('Authorization', `Bearer ${adminUser.token}`)
        .send({
              to: "test@gmail.com",
              subject: "test subject",
              text: "test text"
          })
        .expect(500)
        expect(res.body.success).toBe(false)
        expect(res.body.message).toBe('Failed to send email')

    })
  }
*/

  describe('POST /', () => {
    shouldSendEmailWithValidEmailFormat(adminUser)
    shouldNotSendEmailWithMissingTo(adminUser)
    /*
    shouldNotSendEmailWithMissingSubject(adminUser)
    shouldNotSendEmailWithMissingText(adminUser)
    shouldNotSendEmailWithMissingHtml(adminUser)
    */
  })