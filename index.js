const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const Router = require('koa-router');

const router = new Router();

app.use(views(__dirname + '/views', {extension: 'hbs' ,map:{'hbs':'handlebars'}}));

router.get('/', async (ctx,next)=>await ctx.render('home'))

app.use(router.middleware())

app.listen(3002);
