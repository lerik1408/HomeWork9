const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router');
const serve = require('koa-static');
// const sass = require('node-sass');

const app = new Koa();
const router = new Router();

app.use(views(path.join(__dirname, '/app/template'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));

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
