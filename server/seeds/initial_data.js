/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
  var then = new Date(now)
  then.setMinutes(then.getMinutes() - 5)

  //#region INITIALIZE DATA -- FIELDS CREATION
  //#region Districts
  //#endregion { id: 1, usd: '}
  //#endregion


  //#region ADD TESTING DATA -- FIELDS CREATION
  const numUsers = 165      // MAX --> 200
  const numDistricts = 5   // MAX --> 

  //#region Users
  const initialUsers = [
    { id: 1, eid: "test-admin", name: 'Test Administrator', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { id: 2, eid: "russfeld", name: 'Russell Feldhausen', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { id: 3, eid: "test-student", name: 'Test Student', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { id: 4, eid: "weeser", name: 'Joshua Weese', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { id: 5, eid: "nhbean", name: 'Nathan Bean', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  ]
  const firstUsersLength = initialUsers.length+1
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
    "Austin", "Pauline", "Chris", "Ethel", "Bryan", "Lorraine", "Lynn", "Loretta", "Marion", "Katie", "Dana", "Maureen", "Geraldine",
    "Tracy", "Peggy", "Gladys", "Holly", "Jo", "Eleanor", "Janice", "Sherry", "Doris", "Olivia", "Florence", "Jean", "Carla",
    "Vicki", "Tanya", "Regina", "Charlene", "Vivian", "Sylvia", "Marjorie", "Hilda", "Jill", "Kristin", "Veronica", "Jennie",
    "Nora", "Margie", "Nina", "Cassandra", "Leah", "Penny", "Kay", "Priscilla", "Naomi", "Carole", "Brandy", "Olga", "Billie",
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
    "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr",
    "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston"
  ]

  function getName(index) {
    const fN = fakeFN[index] 
    const lN = fakeLN[index]
    return [fN, lN]
  }

  for (let i=0; i < Math.min(numUsers, fakeFN.length, fakeLN.length); i++) {
    const local_name = getName(i)
    const local_eid = [local_name[1], i.toString()].join('-')
    initialUsers.push({ 
      id: i+firstUsersLength, 
      eid: local_eid, 
      name: `${local_name.join(' ')}`, 
      created_at: now, updated_at: now, 
      created_by: 'test-admin', updated_by: 'test-admin' })
  }
  //#endregion
  //#region Roles
  const initialRoles = [
    { id: 1, name: 'admin', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { id: 2, name: 'user', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' }
  ]
  //#endregion
  //#region User Roles
  const initialUserRoles = [
    { user_id: 1, role_id: 1, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { user_id: 2, role_id: 1, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { user_id: 3, role_id: 2, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { user_id: 4, role_id: 1, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
    { user_id: 5, role_id: 1, created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin' },
  ]

  for (let i=0; i < Math.min(numUsers, fakeFN.length, fakeLN.length); i++) {
    const num = i+firstUsersLength
    const local_user_id = num.toString();
    initialUserRoles.push(
    { 
      user_id: local_user_id, 
      role_id: '2', 
      created_at: now, updated_at: now, 
      created_by: 'test-admin', updated_by: 'test-admin' 
    })
  }
  //#endregion
  //#region All Districts
  const usdNames = [
    'Erie-Galesburg', 'Cimarron-Ensign', 'Cheylin', 'Rawlins County', 'Western Plains', 
    'Rock Hills', 'Washington County Schools', 'Republic County', 'Thunder Ridge Schools', 
    'Doniphan West Schools', 'Central Plains', 'Prairie Hills', 'Riverside', 'Nemaha Central',
    'Greeley County Schools', 'Turner-Kansas City', 'Piper-Kansas City', 'Bonner Springs',
    'Bluestem', 'Remington-Whitewater', 'Fort Leavenworth', 'Trego', 'Moscow Public Schools',
    'Hugoton Public Schools', 'Norton Community Schools', 'Northern Valley', 'Ulysses', 'Lakin',
    'Deerfield', 'Rolla', 'Elkhart', 'Minneola', 'Ashland', 'Barnes', 'Clifton-Clyde', 'Fowler',
    'Meade', 'Unified School District 227', 'Blue Valley', 'Spring Hill', 'Gardner Edgerton',
    'De Soto', 'Olathe', 'Fort Scott', 'Uniontown', 'Smith Center', 'North Ottawa County',
    'Twin Valley', 'Wallace County Schools', 'Weskan',
    'Lebo-Waverly', 'Burlington', 'LeRoy-Gridley', 'Northeast', 'Cherokee', 'Girard', 
    'Frontenac Public Schools', 'Pittsburg', 'North Lyon County', 'Southern Lyon County', 
    'Emporia', 'Barber County North', 'South Barber', 'Marmaton Valley USD 256', 'Iola', 
    'Humboldt', 'Wichita', 'Derby', 'Haysville', 'Valley Center Public Schools', 'Mulvane', 
    'Clearwater', 'Goddard', 'Maize', 'Renwick', 'Cheney', 'Palco', 'Plainville', 'Stockton', 
    'Waconda', 'Beloit', 'Oakley', 'Triplains', 'Graham County', 'West Elk', 'Elk Valley', 
    'Chase County', 'Cedar Vale', 'Chautauqua County Community', 'West Franklin', 
    'Central Heights', 'Wellsville', 'Ottawa',
    'Grinnell Public Schools', 'Wheatland', 'Quinter Public Schools', 'Oberlin', 
    'St. Francis Community Schools', 'Lincoln', 'Sylvan Grove', 'Comanche County', 
    'Ness City', 'Salina', 'Southeast of Saline', 'Ell-Saline', 'Hutchinson Public Schools', 
    'Nickerson', 'Fairfield', 'Pretty Prairie', 'Haven Public Schools', 'Buhler', 
    'Brewster', 'Colby Public Schools', 'Golden Plains', 'Wamego', 'Kaw Valley', 
    'Onaga-Havensville-Wheaton', 'Rock Creek', 'Phillipsburg', 'Logan', 'Ellsworth', 
    'Wabaunsee', 'Mission Valley', 'Kingman-Norwich', 'Cunningham', 'Concordia', 
    'Southern Cloud', 'North Jackson', 'Holton', 'Royal Valley', 'Valley Falls',
    'Jefferson County North', 'Jefferson West', 'Oskaloosa Public Schools', 'McLouth', 
    'Perry Public Schools', 'Pleasanton', 'Seaman', 'Jayhawk', 'Kinsley-Offerle', 
    'Baldwin City', 'Stafford', 'St John-Hudson', 'Macksville', 'Goodland', 'Wellington', 
    'Ellinwood Public Schools', 'Conway Springs', 'Belle Plaine', 'Oxford', 
    'Argonia Public Schools', 'Caldwell', 'Chaparral Schools', 'Prairie View', 
    'Holcomb', 'Marysville', 'Garnett', 'Woodson', 'Osawatomie', 'Unified School District 368', 
    'Burrton', 'Montezuma', 'Silver Lake', 'Newton', 'Sublette', 'Circle', 'Sterling', 
    'Atchison County', 'Riley County', 'Clay County', 'Vermillion', 'Spearville',
    'Pratt', 'Manhattan-Ogden', 'Blue Valley', 'Andover', 'Madison-Virgil', 'Altoona-Midway', 
    'Ellis', 'Eureka', 'Hamilton', 'Osborne County', 'Solomon', 'Rose Hill Public Schools', 
    'LaCrosse', 'Douglass Public Schools', 'Centre', 'Peabody-Burns', 'Paradise', 
    'Smoky Valley', 'Chase-Raymond', 'Augusta', 'Otis-Bison', 'Riverton', 'Lyons', 
    'Russell County', 'Marion-Florence', 'Atchison Public Schools', 'Durham-Hillsboro-Lehigh', 
    'Goessel', 'Hoxie Community Schools', 'Chanute Public Schools', 'Hiawatha', 'Louisburg',
    'Morris County', 'McPherson', 'Canton-Galva', 'Osage City', 'Lyndon', 'Kiowa County', 
    'Moundridge', 'Pike Valley', 'Great Bend', 'Troy Public Schools', 'South Brown County', 
    'Hoisington', 'Victoria', 'Santa Fe Trail', 'Abilene', 'Caney Valley', 'Auburn-Washburn', 
    'Skyline Schools', 'Sedgwick Public Schools', 'Halstead', 'Dodge City', 'Little River', 
    'Coffeyville', 'Independence', 'Cherryvale', 'Inman', 'Easton', 'Shawnee Heights', 
    'Stanton County', 'Leavenworth', 'Burlingame Public School',
    'Marais Des Cygnes Valley', 'Garden City', 'Basehor-Linwood', 'Bucklin', 'Hesston', 
    'Neodesha', 'Central', 'Udall', 'Tonganoxie', 'Winfield', 'Scott County', 'Leoti', 
    'Healy Public Schools', 'Lansing', 'Arkansas City', 'Dexter', 'Chapman', 'Haviland', 
    'Geary County Schools', 'Copeland', 'Ingalls', 'Crest', 'Liberal', 'Rural Vista', 
    'Dighton', 'Kismet-Plains', 'Fredonia', 'Herington', 'Hays', 'El Dorado', 'Eudora', 
    'Flinthills', 'Columbus', 'Syracuse', 'Fort Larned', 'Pawnee Heights', 'Lawrence', 
    'Valley Heights', 'Galena', 'Kansas City', 'Topeka Public Schools', 'Lewis', 'Parsons', 
    'Oswego', 'Chetopa-St. Paul', 'Labette County', 'Satanta', 'Baxter Springs', 
    'South Haven', 'Attica', 'Shawnee Mission'
  ];

  const usdNumbers = [
    '101', '102', '103', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114',
    '115', '200', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212',
    '214', '215', '216', '217', '218', '219', '220', '223', '224', '225', '226', '227', '229',
    '230', '231', '232', '233', '234', '235', '237', '239', '240', '241', '242', '243', '244',
    '245', '246', '247', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257',
    '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270',
    '271', '272', '273', '274', '275', '281', '282', '283', '284', '285', '286', '287', '288',
    '289', '290', '291', '292', '293', '294', '297', '298', '299', '300', '303', '305', '306',
    '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '320', '321', '322',
    '323', '325', '326', '327', '329', '330', '331', '332', '333', '334', '335', '336', '337',
    '338', '339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '349', '350',
    '351', '352', '353', '355', '356', '357', '358', '359', '360', '361', '362', '363', '364',
    '365', '366', '367', '368', '369', '371', '372', '373', '374', '375', '376', '377', '378',
    '379', '380', '381', '382', '383', '384', '385', '386', '387', '388', '389', '390', '392',
    '393', '394', '395', '396', '397', '398', '399', '400', '401', '402', '403', '404', '405',
    '407', '408', '409', '410', '411', '412', '413', '415', '416', '417', '418', '419', '420',
    '421', '422', '423', '426', '428', '429', '430', '431', '432', '434', '435', '436', '437',
    '438', '439', '440', '443', '444', '445', '446', '447', '448', '449', '450', '452', '453',
    '454', '456', '457', '458', '459', '460', '461', '462', '463', '464', '465', '466', '467',
    '468', '469', '470', '471', '473', '474', '475', '476', '477', '479', '480', '481', '482',
    '483', '484', '487', '489', '490', '491', '492', '493', '494', '495', '496', '497', '498',
    '499', '500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '511', '512'
  ];

  // Not accurate
  const usdLocales = {
    '101': 33, '102': 21, '103': 31, '105': 11, '106': 13, '107': 32, 
    '108': 43, '109': 31, '110': 12, '111': 22, '112': 23, '113': 13, '114': 23, 
    '115': 42, '200': 23, '202': 22, '203': 32, '204': 21, '205': 32, '206': 42, 
    '207': 33, '208': 13, '209': 23, '210': 22, '211': 42, '212': 41, '214': 41, 
    '215': 13, '216': 32, '217': 43, '218': 13, '219': 23, '220': 31, '223': 33, 
    '224': 22, '225': 42, '226': 11, '227': 32, '229': 21, '230': 32, '231': 32, 
    '232': 32, '233': 33, '234': 41, '235': 21, '237': 32, '239': 43, '240': 42, 
    '241': 13, '242': 31, '243': 22, '244': 33, '245': 31, '246': 23, '247': 31, 
    '248': 33, '249': 12, '250': 11, '251': 21, '252': 31, '253': 11, '254': 12, 
    '255': 43, '256': 43, '257': 42, '258': 22, '259': 32, '260': 32, '261': 13, 
    '262': 33, '263': 41, '264': 23, '265': 21, '266': 22, '267': 23, '268': 22, 
    '269': 11, '270': 11, '271': 12, '272': 21, '273': 31, '274': 11, '275': 33, 
    '281': 31, '282': 33, '283': 43, '284': 22, '285': 13, '286': 31, '287': 11, 
    '288': 31, '289': 13, '290': 31, '291': 13, '292': 12, '293': 41, '294': 22, 
    '297': 43, '298': 11, '299': 41, '300': 13, '303': 41, '305': 42, '306': 32, 
    '307': 23, '308': 43, '309': 32, '310': 32, '311': 23, '312': 13, '313': 43, 
    '314': 22, '315': 22, '316': 33, '320': 43, '321': 12, '322': 42, '323': 11, 
    '325': 33, '326': 32, '327': 23, '329': 42, '330': 42, '331': 32, '332': 42, 
    '333': 31, '334': 31, '335': 41, '336': 22, '337': 13, '338': 23, '339': 33, 
    '340': 42, '341': 23, '342': 23, '343': 21, '344': 13, '345': 13, '346': 23, 
    '347': 32, '348': 12, '349': 42, '350': 33, '351': 33, '352': 33, '353': 12, 
    '355': 11, '356': 11, '357': 42, '358': 32, '359': 32, '360': 22, '361': 41, 
    '362': 42, '363': 22, '364': 12, '365': 21, '366': 43, '367': 33, '368': 21, 
    '369': 23, '371': 43, '372': 21, '373': 42, '374': 33, '375': 32, '376': 22, 
    '377': 22, '378': 23, '379': 23, '380': 13, '381': 23, '382': 42, '383': 32, 
    '384': 32, '385': 11, '386': 33, '387': 31, '388': 12, '389': 13, '390': 42, 
    '392': 12, '393': 13, '394': 42, '395': 23, '396': 31, '397': 41, '398': 12, 
    '399': 42, '400': 43, '401': 41, '402': 33, '403': 12, '404': 43, '405': 13, 
    '407': 43, '408': 12, '409': 11, '410': 32, '411': 21, '412': 43, '413': 42, 
    '415': 21, '416': 12, '417': 12, '418': 42, '419': 31, '420': 32, '421': 33, 
    '422': 13, '423': 21, '426': 22, '428': 33, '429': 32, '430': 41, '431': 23, 
    '432': 33, '434': 22, '435': 31, '436': 41, '437': 11, '438': 22, '439': 43, 
    '440': 31, '443': 21, '444': 33, '445': 41, '446': 23, '447': 22, '448': 21, 
    '449': 43, '450': 33, '452': 21, '453': 33, '454': 22, '456': 43, '457': 23, 
    '458': 31, '459': 41, '460': 11, '461': 13, '462': 11, '463': 41, '464': 13, 
    '465': 23, '466': 43, '467': 31, '468': 23, '469': 43, '470': 13, '471': 13, 
    '473': 12, '474': 33, '475': 41, '476': 41, '477': 21, '479': 23, '480': 12, 
    '481': 21, '482': 13, '483': 21, '484': 11, '487': 42, '489': 31, '490': 41, 
    '491': 12, '492': 31, '493': 32, '494': 23, '495': 12, '496': 42, '497': 32, 
    '498': 13, '499': 11, '500': 43, '501': 32, '502': 21, '503': 32, '504': 41, 
    '505': 23, '506': 33, '507': 11, '508': 32, '509': 21, '511': 31, '512': 43
  };

  const initialDistricts = [
    { id: 1, usd: '380', name: 'Vermillion', url: 'https://www.usd380.com/', locale: 43, notes: 'Vermillion notes', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin', },
    { id: 2, usd: '501', name: 'Topeka', url: 'https://www.topekapublicschools.net/', locale: 12, notes: 'Topeka notes', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin', },
    { id: 3, usd: '233', name: 'Olathe', url: 'https://www.olatheschools.org/', locale: 21, notes: 'Olathe notes', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin', },
    { id: 4, usd: '259', name: 'Wichita', url: 'https://www.usd259.org/', locale: 11, notes: 'Wichita notes', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin', },
    { id: 5, usd: '103', name: 'Cheylin', url: 'https://www.cheylin.org/', locale: 11, notes: 'Cheylin notes', created_at: now, updated_at: now, created_by: 'test-admin', updated_by: 'test-admin', },
  ]
  const firstDistrictsLength = initialDistricts.length

  const initialAllDistricts = []

  for (let i = 0; i < Math.min(numDistricts, usdNames.length, usdNumbers.length); i++) {
    const local_name = usdNames[i];
    const local_usd = usdNumbers[i];
    
    initialAllDistricts.push ({
      id:  initialDistricts.length + 1,
      usd: local_usd.toString(),
      name: local_name.toString(),
      url: `https://${local_name.replace(/ /g, '').toLowerCase()}.org/`,
      locale: usdLocales[local_usd],
      notes: `${local_name} notes`,
      created_at: now,
      updated_at: now,
      created_by: 'test-admin',
      updated_by: 'test-admin',
    });
  }
  //#endregion
  //#region Districts
  for (let i = 0; i < Math.min(numDistricts, usdNumbers.length); i++) {
    const local_usd2 = initialAllDistricts[i].usd;
    const local_name2 = initialAllDistricts[i].name;
    const local_locale = initialAllDistricts[i].locale;
    const local_url = initialAllDistricts[i].url;

    if (initialDistricts => (initialDistricts.usd === local_usd2)) {
      continue;
    }
    else {
      initialDistricts.push({
        id: firstDistrictsLength + i + 1,
        usd: local_usd2,
        name: local_name2,
        url: local_url,
        locale: local_locale,
        notes: `${local_name2} notes`,
        created_at: now,
        updated_at: now,
        created_by: 'test-admin',
        updated_by: 'test-admin',
      })
    }
  }
  //#endregion
  //#region Teachers

  //#endregion
  //#region Teacher Districts

  //#endregion
  //#region Cohorts

  //#endregion
  //#region Courses

  //#endregion
  //#region Teacher Cohorts

  //#endregion 
  //#region Teacher Courses

  //#endregion
  //#region User Teachers

  //#endregion

  
  //#endregion
  //#endregion

  // Users
  await knex('users').del()
  await knex('users').insert(initialUsers)
  // Roles
  await knex('roles').del()
  await knex('roles').insert(initialRoles)
  // User Roles
  await knex('user_roles').del()
  await knex('user_roles').insert(initialUserRoles)
  // Districts
  await knex('districts').del()
  await knex('districts').insert(initialDistricts)
  //#region OG District Data  
  /*[
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
  ])*/
 //#endregion
  // All Districts
  await knex('all_districts').del()
  await knex('all_districts').insert(initialAllDistricts)

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
