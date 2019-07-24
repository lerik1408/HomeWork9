const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router');
const serve = require('koa-static');
const body = require('koa-body');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
// mongoose.connect('mongodb+srv://lerik1408:Okf123fu@cluster0-osbtr.gcp.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });


const app = new Koa();
const router = new Router();

app.use(body({
  multipart: true,
}));

app.use(views(path.join(__dirname, '/app/template'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const errors = [];
    Object.keys(err.errors).forEach((key) => {
      if (err.errors[key].kind === 'Number') {
        errors.push(`The cell ${key} must be a number.`);
      } else if (err.errors[key].kind === 'unique') {
        errors.push(`The field ${key} is already taken by this value. Please enter another value`);
      } else {
        errors.push(err.errors[key].message);
      }
    });
    ctx.status = 500;
    ctx.body = {
      error: errors,
    };
  }
});
app.use(serve(path.join(__dirname, '/app/public')));
router.use('/', require('./app/router').routes());


app.use(router.routes());
const PORT = process.env.PORT || 3000;
app.listen(PORT);


// app.use(async (ctx) => {
//     await ctx.render('siginIn',{
//         user: "Jhon",
//     });
// });
