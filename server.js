const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router');
const serve = require('koa-serve');

const app = new Koa();
const router =new Router();


app.use(views(path.join(__dirname, '/app/template'),{
    extension :'njk',
    map: {
      njk: 'nunjucks'
    }
  }));

app.use(serve('./public'));

router.use('/', require('./app/router').routes())
app.use(router.routes());
app.listen(3000);











// app.use(async (ctx) => {
//     await ctx.render('siginIn',{
//         user: "Jhon",
//     });
// });