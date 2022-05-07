const users = [
  {
    "id": 0,
    "firstname": "frank",
    "lastname": "musa",
    "othername": "othuke",
    "email": "frank@gmail.com",
    "phonenumber": "07012345666",
    "password": "1234",
    "role": "admin",
    "isadmin": true,
  },
  {
    "id": 1,
    "firstname": "bright",
    "lastname": "ali",
    "othername": "peter",
    "email": "bright@gmail.com",
    "phonenumber": "08123456789",
    "password": "456",
    "role": "user",
    "isadmin": false,
  }
]
const party = [
  {
    "id": 0,
    "name": "PDP",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "logo"
  },
  {
    "id": 1,
    "name": "APC",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "logo"
  },
  {
    "id": 2,
    "name": "ACCORD",
    "hqAddress": "Abuja Nigeria",
    "logoUrl": "logo"
  }
]
const offices = [
  {
    "id": 0,
    "type": "Local Government",
    "name": "chairman"
  },
  {
    "id": 1,
    "type": "Federal",
    "name": "President"
  }
]
const candidates = []
const vote = []
const petition = []

export { users, party, offices, candidates, vote, petition }