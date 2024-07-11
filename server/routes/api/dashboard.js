/**
 * @swagger
 * tags:
 *   name: Dashboards
 *   description: Dashboards API
 */

// Load Libraries
const express = require('express')
const router = express.Router()

// Load Middleware
const adminOnly = require('../../middlewares/admin-only')

// Load Models
const Cohort = require('../../models/cohort')
const Course = require('../../models/course')

/**
 * @swagger
 * /api/v1/dashboard/cohorts:
 *   get:
 *     summary: <admin> cohort dashboard
 *     tags: [Dashboards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: cohort dashboard
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/cohort/status', adminOnly, async function (req, res, next) {
  let cohorts = await Cohort.query().select(
    'cohorts.id',
    'cohorts.name',
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.status', '0')
      .as('new'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.status', '1')
      .as('active'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.status', '2')
      .as('inactive'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.status', '3')
      .as('complete')
  )
  res.json(cohorts)
})

router.get('/cohort/pdstatus', adminOnly, async function (req, res, next) {
  let cohorts = await Cohort.query().select(
    'cohorts.id',
    'cohorts.name',
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.pd_status', '0')
      .as('new'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.pd_status', '1')
      .as('active'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.pd_status', '2')
      .as('inactive'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.pd_status', '3')
      .as('complete')
  )
  res.json(cohorts)
})

router.get('/cohort/certstatus', adminOnly, async function (req, res, next) {
  let cohorts = await Cohort.query().select(
    'cohorts.id',
    'cohorts.name',
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.cert_status', '0')
      .as('new'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.cert_status', '1')
      .as('active'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.cert_status', '2')
      .as('inactive'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.cert_status', '3')
      .as('complete')
  )
  res.json(cohorts)
})

router.get('/cohort/msstatus', adminOnly, async function (req, res, next) {
  let cohorts = await Cohort.query().select(
    'cohorts.id',
    'cohorts.name',
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.ms_status', '0')
      .as('new'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.ms_status', '1')
      .as('active'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.ms_status', '2')
      .as('inactive'),
    Cohort.relatedQuery('teachers_raw')
      .count()
      .where('teachers_raw.ms_status', '3')
      .as('complete')
  )
  res.json(cohorts)
})

router.get('/course/grade', adminOnly, async function (req, res, next) {
  let courses = await Course.query().select(
    'courses.id',
    'courses.name',
    Course.relatedQuery('teachers_raw')
      .count()
      .where('teacher_courses.status', 0)
      .as('enrolled'),
    Course.relatedQuery('teachers_raw')
      .count()
      .where('teacher_courses.status', 1)
      .as('pass'),
    Course.relatedQuery('teachers_raw')
      .count()
      .where('teacher_courses.status', 2)
      .as('incomplete'),
    Course.relatedQuery('teachers_raw')
      .count()
      .where('teacher_courses.status', 3)
      .as('fail'),
    Course.relatedQuery('teachers_raw')
      .count()
      .where('teacher_courses.status', 4)
      .as('withdrawn')
  )
  res.json(courses)
})

module.exports = router