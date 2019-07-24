const User = require('./models/user');

function parceName(body) {
  const firstName = body.name.split(' ')[0];
  const lastName = body.name.split(' ')[1];
  const result = {
    firstName,
    lastName,
  };
  return result;
}

exports.homePage = async (ctx) => {
  await ctx.render('index.njk');
};
exports.siginInPage = async (ctx) => {
  await ctx.render('siginIn.njk', {
    title: 'Sigin In',
  });
};
exports.passwordRecoveryPage = async (ctx) => {
  await ctx.render('passwordRecovery.njk', {
    title: 'passwordRecovery',
  });
};
exports.passwordRecovery1Page = async (ctx) => {
  await ctx.render('passwordRecovery1.njk', {
    title: 'passwordRecovery1',
  });
};
exports.passwordRecovery2Page = async (ctx) => {
  await ctx.render('passwordRecovery2.njk', {
    title: 'passwordRecovery2',
  });
};
exports.siginUpPage = async (ctx) => {
  await ctx.render('siginUp.njk', {
    title: 'Sigin Up',
  });
};
exports.siginUp1Page = async (ctx) => {
  await ctx.render('siginUp1.njk', {
    title: 'Sigin Up 1',
  });
};
exports.siginUp2Page = async (ctx) => {
  await ctx.render('siginUp2.njk', {
    title: 'Sigin Up 2',
  });
};
exports.messengerPage = async (ctx) => {
  await ctx.render('messenger.njk', {
    title: 'Messenger',
    users: [{
      name: 'Miranda Hops', status: 'Excepteur sint occaecatar…', time: '9:32', img: './img/messenger/fr1.png', mute: true,
    }, {
      name: 'Barry Callebaut', status: 'Nemo enim ipsam volupta…', time: '22:01', img: './img/messenger/fr2.png',
    }, {
      name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '19:15', img: './img/messenger/fr3.png', active: true,
    }, {
      name: 'Michael Kors', status: 'To take a trivial example…', time: '13:49', img: './img/messenger/fr4.png',
    }, {
      name: 'Johny Cash', status: 'Great explorer of the truth…', time: '10:25', img: './img/messenger/fr5.png',
    }, {
      name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '9:32', img: './img/messenger/fr6.png',
    }],
    messageAnother: [{ img: './img/messenger/fr3.png', text: 'On the other hand, we denounce with righteous indignation!', time: '01:14' }, { img: './img/messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' }, { img: './img/messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' }],
    messageUser: [{ text: 'Which is the same as saying?', time: '01:38' }, { text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' }, { text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' }],
  });
};
exports.accInfoPage = async (ctx) => {
  await ctx.render('accInfo.njk', {
    title: 'Account information',
  });
};
exports.personInfoPage = async (ctx) => {
  const user = await User.findById('5d382da96ca5802ac0a06b06');
  const fullName = parceName(user);
  await ctx.render('personInfo.njk', {
    title: 'Person information',
    people: user,
    fullName,
  });
};
exports.searchPage = async (ctx) => {
  const allPeople = await User.find({});
  const amountPage = await Math.ceil(allPeople.length / 6);
  const fixedSampling = await User.find({}).limit(6);
  await ctx.render('search.njk', {
    title: 'Search',
    people: fixedSampling,
    amountPage,
  });
};
exports.searchIdPage = async (ctx) => {
  const allPeople = await User.find({});
  const amountPage = await Math.ceil(allPeople.length / 6);
  const id = await ctx.params.searchId;
  const fixedSampling = await User.find({}).limit(6).skip((id - 1) * 6);
  await ctx.render('search.njk', {
    title: 'Search',
    people: fixedSampling,
    amountPage,
  });
};
exports.createProfile = async (ctx) => {
  const { body } = ctx.request;
  const user = new User({
    name: body.name,
    img: body.img,
    gender: body.gender,
    phone: body.phone,
    company: body.company,
    rating: body.rating,
    country: body.country,
    skills: body.skills,
    price: body.price,
  });
  await user.save();
  ctx.body = {
    create: true,
  };
};
exports.deleteProfile = async (ctx) => {
  await User.findByIdAndDelete(ctx.params.profileId);
  ctx.body = {
    remove: true,
  };
};
exports.singleProfile = async (ctx) => {
  const people = await User.findById(ctx.params.profileId);
  const fullName = parceName(people);
  await ctx.render('personInfo.njk', {
    title: 'Search',
    people,
    fullName,
  });
};
exports.updateProfile = async (ctx) => {
  const { body } = ctx.request;
  const updateKey = {};
  Object.keys(body).forEach((key) => {
    if (body[key] !== '') {
      updateKey[key] = body[key];
    }
  });
  await User.findByIdAndUpdate(ctx.params.profileId, updateKey);
  ctx.body = {
    update: true,
  };
};
