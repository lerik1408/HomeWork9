const id = require('pow-mongodb-fixtures').createObjectId;

exports.users = [
  {
    _id: id(),
    name: 'name 1',
    img: '/img/search/people5.png',
    gender: 'Mr',
    phone: 'dawdw',
    company: 'Microsoft',
    rating: 'bronze',
    country: 'UA',
    skills: 'Java',
    price: '1000 USD',
  },
//   {
//     _id: id(),
//     name: 'name 2',
//     img: '/img/search/people3.png',
//     gender: 'Ms',
//     phone: '924651445',
//     company: 'DB2',
//     rating: 'bronze',
//     country: 'RUS',
//     skills: 'C++',
//     price: '800 USD',
//   },
];
