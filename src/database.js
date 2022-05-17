import bcrypt from "bcrypt"

const users = [
  {
    "id": 0,
    "firstname": "frank",
    "lastname": "musa",
    "othername": "othuke",
    "email": "frank@gmail.com",
    "phonenumber": "07012345666",
    "password": bcrypt.hashSync("Maureen$09", 12),
    "password2": "",
    'passportUrl': '',
    "role": "user",
    "isAdmin": 'isAdmin',

  },
  {
    "id": 1,
    "firstname": "bright",
    "lastname": "ali",  
    "othername": "peter",
    "email": "bright@gmail.com",
    "phonenumber": "08123456789",
    "password": bcrypt.hashSync("345678", 12),
    "password2": "",
    "role": "user",
    'passportUrl': '',
    "isAdmin": false,
  },
  {
    "id": 2,
    "firstname": "Nana",
    "lastname": "Adams",
    "othername": "lawal",
    "email": "nana@gmail.com",
    "phonenumber": "08123456789",
    "password": bcrypt.hashSync("Uzezi$09", 12),
    "password2": "",
    "role": "politician",
    'passportUrl': '',
    "isAdmin": false,
  }
]
const party = [
  {
    "id": 0,
    "name": 'APDA',
    "hqAddress": 'Lagos State',
    "logoUrl": 'https://storage.googleapis.com/thisday-846548948316-wp-data/wp-media/2019/03/9b5f573d-apda-logo.jpg'
  },
  {
    "id": 1,
    "name": "APC",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/2/23/All_Progressives_Congress_logo.png"
  },
  {
    "id": 2,
    "name": "ACCORD",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWb5BpPnkwCq0JNutUxIHLnitw4mcwkdAeMkhvFc-hBU_MZgQ4DfW3_GLhX3FdopXRn8&usqp=CAU"
  },
  {
    "id": 3,
    "name": "ACCORD",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWb5BpPnkwCq0JNutUxIHLnitw4mcwkdAeMkhvFc-hBU_MZgQ4DfW3_GLhX3FdopXRn8&usqp=CAU"
  }
]
const offices = [
  {
    "id": 0,
    "type": "Local Government",
    "name": "chairman",
    "logoUrl": "https://pbs.twimg.com/profile_images/1140876879076954112/-1Whe02-_400x400.jpg"
  },
  {
    "id": 1,
    "type": "Federal",        
    "name": "President",
    "logoUrl": "https://citybusinessnews.com/wp-content/uploads/2021/11/Nigeria-Presidency.jpeg"
  },
  {
    "id": 2,
    "type": "Federal",
    "name": "Senate",
    "logoUrl": "https://straightnews.ng/wp-content/uploads/2019/12/unnamed3.jpg"
  }
]
const candidates = [
  {
    "id": 0,
    "office": 46,
    "party": 2,
    "candidate": 1, 
    'logoUrl':'https://nigerianguide.com.ng/wp-content/uploads/2020/05/Top-10-Richest-Politicians-in-Nigeria.jpg'
  },
  {
    "id": 1,
    "office": 45,
    "party": 1,
    "candidate": 0,
    'logoUrl': 'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/02/richest-politician-in-nigeria.jpeg'
  }
]
const votes = [
  {
    "id": 0,
    "createdOn": Date.now(),
    "createdBy": 'req.user.id',
    "office": '45',
    "candidate": 1,
    'logoUrl': 'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/02/richest-politician-in-nigeria.jpeg'
  },
  {
    "id": 1,
    "createdOn": Date.now(),
    "createdBy": 'req.user.id',
    "office": 46,
    "candidate": 0,
    'logoUrl': 'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/02/richest-politician-in-nigeria.jpeg'
  }
]
const petitions = [
  {
    "id": 0,
    "createdOn": Date.now(),
    "createdBy": 34,
    "office": 45,
    "body": "hello",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizs6bujGkYYP_gB9Z0VOckarORmVihNNAZVYHi12A-7wbYeaUzxlsqbBBQyXZLZ2Bzvk&usqp=CAU"
  },
  {
    "id": 1,
    "createdOn": Date.now(),
    "createdBy": 35,
    "office": 46,
    "body": "world",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizs6bujGkYYP_gB9Z0VOckarORmVihNNAZVYHi12A-7wbYeaUzxlsqbBBQyXZLZ2Bzvk&usqp=CAU"
  }
]

export { users, party, offices, candidates, votes, petitions }