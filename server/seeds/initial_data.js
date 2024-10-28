/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  var then = new Date(now)
  then.setMinutes(then.getMinutes() - 5)

  // Users
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      eid: 'test-admin',
      name: 'Test Administrator',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 2,
      eid: 'russfeld',
      name: 'Russell Feldhausen',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 3,
      eid: 'test-student',
      name: 'Test Student',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },

  ])

  // Roles
  await knex('roles').del()
  await knex('roles').insert([
    {
      id: 1,
      name: 'admin',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 2,
      name: 'user',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
  ])

  // User Roles
  await knex('user_roles').del()
  await knex('user_roles').insert([
    {
      user_id: '1',
      role_id: '1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '2',
      role_id: '1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '3',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '4',
      role_id: '1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '5',
      role_id: '1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '6',
      role_id: '1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '7',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '8',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '9',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '10',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '11',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '12',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '13',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '14',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '15',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '16',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '17',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '18',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '19',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      user_id: '20',
      role_id: '2',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },    
  ])

  // Districts
  await knex('districts').del()
  await knex('districts').insert([
    {
      id: 1,
      usd: '380',
      name: 'Vermillion',
      url: 'https://www.usd380.com/',
      locale: 43,
      notes: 'Vermillion notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 2,
      usd: '501',
      name: 'Topeka',
      url: 'https://www.topekapublicschools.net/',
      locale: 12,
      notes: 'Topeka notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 3,
      usd: '233',
      name: 'Olathe',
      url: 'https://www.olatheschools.org/',
      locale: 21,
      notes: 'Olathe notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 4,
      usd: '259',
      name: 'Wichita',
      url: 'https://www.usd259.org/',
      locale: 11,
      notes: 'Wichita notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 5,
      usd: '202',
      name: 'Turner',
      url: 'https://www.turnerusd202.org/',
      locale: 32,
      notes: 'Turner notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 6,
      usd: '512',
      name: 'Shawnee Mission',
      url: 'https://www.smsd.org/',
      locale: 22,
      notes: 'Shawnee Mission notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 7,
      usd: '308',
      name: 'Hutchinson',
      url: 'https://www.usd308.com/',
      locale: 33,
      notes: 'Hutchinson notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 8,
      usd: '290',
      name: 'Ottawa',
      url: 'https://www.usd290.org/',
      locale: 44,
      notes: 'Ottawa notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 9,
      usd: '500',
      name: 'Kansas City',
      url: 'https://kckps.org/',
      locale: 12,
      notes: 'Kansas City notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 10,
      usd: '437',
      name: 'Auburn-Washburn',
      url: 'https://www.usd437.net/',
      locale: 23,
      notes: 'Auburn-Washburn notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 11,
      usd: '229',
      name: 'Blue Valley',
      url: 'https://www.bluevalleyk12.org/',
      locale: 24,
      notes: 'Blue Valley notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 12,
      usd: '230',
      name: 'Spring Hill',
      url: 'https://www.usd230.org/',
      locale: 34,
      notes: 'Spring Hill notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    }
  ])
  

  // Teachers
  await knex('teachers').del()
  await knex('teachers').insert([
    {
      id: 1,
      name: 'Russell Feldhausen',
      email: 'russfeld_2166@yahoo.com',
      eid: 'russfeld',
      wid: '835203884',
      status: 1,
      pd_status: 1,
      cert_status: 1,
      ms_status: 1,
      grade_level: 'high school 9-12',
      notes: 'Russell notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 2,
      name: 'Joshua Weese',
      email: 'weeser@ksu.edu',
      eid: 'weeser',
      wid: '123456789',
      status: 0,
      pd_status: 0,
      cert_status: 0,
      ms_status: 0,
      grade_level: 'middle school 6-8',
      notes: 'Joshua notes',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 3,
      name: 'Nathan Bean',
      email: 'nhbean@k-state.edu',
      eid: 'nhbean',
      wid: '987654321',
      status: 1,
      pd_status: 1,
      cert_status: 1,
      ms_status: 1,
      grade_level: 'elementary school K-5',
      notes: 'Update grade level',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
  ])

  // Teacher Districts
  await knex('teacher_districts').del()
  await knex('teacher_districts').insert([
    {
      teacher_id: '1',
      district_id: '2',
      notes: 'Teacher 1 in District 2',
      primary: false,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      teacher_id: '2',
      district_id: '1',
      notes: 'Teacher 2 in District 1',
      primary: true,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      teacher_id: '1',
      district_id: '1',
      notes: 'Teacher 1 in District 1',
      primary: true,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      teacher_id: '3',
      district_id: '3',
      notes: 'Teacher 3 in District 3',
      primary: true,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    }
  ])

  // Cohocrts
  await knex('cohorts').del()
  await knex('cohorts').insert([
    {
      id: 1,
      name: 'Spring 2023',
      notes: 'PACK grant funded cohort',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 2,
      name: 'Fall 2024',
      notes: 'Fall 2024 Test Cohort',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      id: 3,
      name: 'Spring 2025',
      notes: 'Spring 2025 Test Cohort',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin'
    }
  ])

  // Teacher Cohorts
  await knex('teacher_cohorts').del()
  await knex('teacher_cohorts').insert([
    {
      teacher_id: '1',
      cohort_id: '1',
      notes: 'Teacher 1 in Cohort 1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      teacher_id: '2',
      cohort_id: '1',
      notes: 'Teacher 2 in Cohort 1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
  ])

  // Courses
  await knex('courses').del()
  await knex('courses').insert([
    {
      id: 1,
      name: 'CC 710 S23',
      notes: 'First offering under new CC 710 heading',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
  ])

  // Teacher Courses
  await knex('teacher_courses').del()
  await knex('teacher_courses').insert([
    {
      teacher_id: '1',
      course_id: '1',
      status: '1',
      notes: 'Teacher 1 in Course 1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
    {
      teacher_id: '2',
      course_id: '1',
      status: '2',
      notes: 'Teacher 2 in Course 1',
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    },
  ])
}
