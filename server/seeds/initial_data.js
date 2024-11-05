/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  var then = new Date(now)
  then.setMinutes(then.getMinutes() - 5)

  // Users
  await knex('users').del();
  const users = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    eid: `user${i + 1}`,
    name: `User ${i + 1}`,
    created_at: now,
    updated_at: now,
    created_by: 'test-admin',
    updated_by: 'test-admin',
  }));
  await knex('users').insert(users);

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
   await knex('user_roles').del();
   const userRoles = users.map((user, index) => ({
     user_id: user.id,
     role_id: index % 3 === 0 ? 1 : 2, // Assign every 3rd user as an admin
     created_at: now,
     updated_at: now,
     created_by: 'test-admin',
     updated_by: 'test-admin',
   }));
   await knex('user_roles').insert(userRoles);

  // Districts
  await knex('districts').del();
  const districts = [
    { id: 1, usd: '380', name: 'Vermillion', url: 'https://www.usd380.com/', locale: 43, notes: 'Vermillion notes' },
    { id: 2, usd: '501', name: 'Topeka', url: 'https://www.topekapublicschools.net/', locale: 12, notes: 'Topeka notes' },
    { id: 3, usd: '233', name: 'Olathe', url: 'https://www.olatheschools.org/', locale: 21, notes: 'Olathe notes' },
    { id: 4, usd: '259', name: 'Wichita', url: 'https://www.usd259.org/', locale: 11, notes: 'Wichita notes' },
    { id: 5, usd: '305', name: 'Salina', url: 'https://www.usd305.com/', locale: 41, notes: 'Salina notes' },
    { id: 6, usd: '373', name: 'Newton', url: 'https://www.usd373.org/', locale: 42, notes: 'Newton notes' },
    { id: 7, usd: '501', name: 'Topeka Rural', url: 'https://www.topekarural.org/', locale: 31, notes: 'Topeka Rural notes' },
    { id: 8, usd: '512', name: 'Shawnee Mission', url: 'https://www.smsd.org/', locale: 22, notes: 'Shawnee Mission notes' },
    { id: 9, usd: '497', name: 'Lawrence', url: 'https://www.usd497.org/', locale: 13, notes: 'Lawrence notes' },
    { id: 10, usd: '453', name: 'Leavenworth', url: 'https://www.usd453.org/', locale: 23, notes: 'Leavenworth notes' },
    { id: 11, usd: '323', name: 'Perry', url: 'https://www.usd323.com/', locale: 42, notes: 'Perry notes' },
    { id: 12, usd: '434', name: 'Santa Fe Trail', url: 'https://www.usd434.com/', locale: 41, notes: 'Santa Fe Trail notes' },
    { id: 13, usd: '372', name: 'Silver Lake', url: 'https://www.usd372.com/', locale: 33, notes: 'Silver Lake notes' },
    { id: 14, usd: '345', name: 'Seaman', url: 'https://www.usd345.com/', locale: 31, notes: 'Seaman notes' },
    { id: 15, usd: '230', name: 'Spring Hill', url: 'https://www.usd230.com/', locale: 22, notes: 'Spring Hill notes' },
  ];
  await knex('districts').insert(districts.map((district, i) => ({
    ...district,
    id: i + 1,
    created_at: now,
    updated_at: now,
    created_by: 'test-admin',
    updated_by: 'test-admin',
  })));
  
  // Teachers
  await knex('teachers').del();
  const teachers = [
    { id: 1, name: 'Russell Feldhausen', email: 'russfeld_2166@yahoo.com', eid: 'russfeld', wid: '835203884', status: 1, pd_status: 1, cert_status: 1, ms_status: 1, grade_level: 'high school 9-12', notes: 'Russell notes' },
    { id: 2, name: 'Joshua Weese', email: 'weeser@ksu.edu', eid: 'weeser', wid: '123456789', status: 0, pd_status: 0, cert_status: 0, ms_status: 0, grade_level: 'middle school 6-8', notes: 'Joshua notes' },
    { id: 3, name: 'Nathan Bean', email: 'nhbean@k-state.edu', eid: 'nhbean', wid: '987654321', status: 1, pd_status: 1, cert_status: 1, ms_status: 1, grade_level: 'elementary school K-5', notes: 'Update grade level' },
  ];
  await knex('teachers').insert(teachers.map((teacher, i) => ({
      ...teacher,
      id: i + 1,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    })));

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
  await knex('courses').del();
  const courses = [
    { id: 1, name: 'CC 710 S23', notes: 'First offering under new CC 710 heading' },
    { id: 2, name: 'CC 711 F23', notes: 'Fall 2023 course' },
    { id: 3, name: 'CC 712 S24', notes: 'Spring 2024 course' },
    { id: 4, name: 'CC 713 F24', notes: 'Fall 2024 course' },
    { id: 5, name: 'CC 714 S25', notes: 'Spring 2025 course' },
  ];
  await knex('courses').insert(courses.map((course, i) => ({
    ...course,
    created_at: now,
    updated_at: now,
    created_by: 'test-admin',
    updated_by: 'test-admin',
  })));

// Teacher Courses (teachers enrolled in multiple courses)
await knex('teacher_courses').del();
const teacherCourses = [
  { teacher_id: 1, course_id: 1, status: '1', notes: 'Teacher 1 in Course 1', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 1, course_id: 2, status: '2', notes: 'Teacher 1 in Course 2', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 1, course_id: 3, status: '1', notes: 'Teacher 1 in Course 3', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 2, course_id: 1, status: '1', notes: 'Teacher 2 in Course 1', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 2, course_id: 4, status: '2', notes: 'Teacher 2 in Course 4', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 3, course_id: 3, status: '1', notes: 'Teacher 3 in Course 3', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 3, course_id: 5, status: '1', notes: 'Teacher 3 in Course 5', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  { teacher_id: 2, course_id: 5, status: '2', notes: 'Teacher 2 in Course 5', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
];
await knex('teacher_courses').insert(teacherCourses);

}