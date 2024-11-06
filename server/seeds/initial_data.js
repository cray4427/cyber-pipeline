/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  var then = new Date(now)
  then.setMinutes(then.getMinutes() - 5)

  //#region TESTING DATA -- FIELDS CREATION

    //#region Fake Users
    const numUsers = 50

    const fakeFN = [
      "James", "Mary", "Michael", "Patricia", "Robert", "Jennifer", "John", "Linda", "David", "Elizabeth", "William", "Barbara", 
      "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", 
      "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Paul", "Ashley", "Steven", "Dorothy", "Andrew", "Kimberly", 
      "Kenneth", "Emily", "George", "Donna", "Joshua", "Michelle", "Kevin", "Carol", "Brian", "Amanda", "Edward", "Melissa", 
      "Ronald", "Deborah", "Timothy", "Stephanie", "Jason", "Laura", "Larry", "Rebecca", "Frank", "Sharon", "Eric", "Cynthia", 
      "Raymond", "Kathleen", "Gerald", "Virginia", "Bobby", "Helen", "Walter", "Debra", "Patrick", "Marie", "Peter", "Harry", 
      "Teresa", "Douglas", "Henry", "Gloria", "Carl", "Kelly", "Arthur", "Judy", "Ryan", "Marilyn", "Roger", "Catherine", "Joe", 
      "Christine", "Albert", "Janet", "Jonathan", "Frances", "Justin", "Ann", "Terry", "Jacqueline", "Gary", "Ruth", "Brandon", 
      "Alice", "Billy", "Joan", "Bruce", "Theresa", "Willie", "Rose", "Jordan", "Aaron", "Kathryn", "Adam", "Louise", "Zachary", 
      "Sara", "Lawrence", "Anne", "Nicholas", "Roy", "Wanda", "Benjamin", "Bonnie", "Samuel", "Julia", "Ruby", "Norma", "Dennis", 
      "Paula", "Diane", "Wayne", "Heather", "Jesse", "Eva", "Alan", "Debbie", "Phillip", "April", "Leslie", "Johnny", "Lillian", 
      "Victor", "Joanne", "Martin", "Emma", "Lori", "Alexander", "Carrie", "Tina", "Martha", "Shirley", "Jerry", "Kathy", "Jeremy", 
      "Austin", "Pauline", "Chris", "Ethel", "Bryan", "Lorraine", "Lynn", "Loretta", "Marion", "Katie"
    ]

    const fakeLN = [
      "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee",
      "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker",
      "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards",
      "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper",
      "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "Watson", "Brooks", "Kelly", "Sanders",
      "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes",
      "Flores", "Washington", "Butler", "Simmons", "Foster", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes",
      "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher",
      "Ellis", "Harrison", "Gibson", "Mcdonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson",
      "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon",
      "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols",
      "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne",
      "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart",
      "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence",
      "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr"
    ]

    const initialUsers = [
      { id: 1, eid: "test-admin", name: 'Test Administrator', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
      { id: 2, eid: "russfeld", name: 'Russell Feldhausen', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
      { id: 3, eid: "test-student", name: 'Test Student', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
      { id: 4, eid: "weeser", name: 'Joshua Weese', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
      { id: 5, eid: "nhbean", name: 'Nathan Bean', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    ]

    function getRandomName() {
      const fN = fakeFN[Math.floor(Math.random() * fakeFN.length)]
      const lN = fakeLN[Math.floor(Math.random() * fakeLN.length)]
      return [fN, lN]
    }

    for (let i = 6; i <= numUsers; i++) {
      const local_name = getRandomName()
      const local_eid = ['fake', local_name[1], i.toString()].join('-')
      initialUsers.push({ id: i, eid: local_eid, name: `${local_name.join(' ')}`, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' })
    }
    //#endregion
    //#region Fake Districts
  
    //#endregion
  //#endregion

  //#region REAL DATA -- FIELDS CREATION
    //#region Roles
    const initialRoles = [
      { id: 1, name: 'admin', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
      { id: 2, name: 'user', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' }
    ]
    //#endregion
  //#endregion

  // Users
  await knex('users').del()
  await knex('users').insert(initialUsers)

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