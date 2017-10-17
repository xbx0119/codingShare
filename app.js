const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const router = require('./routers');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public/dist'))

app.use(views(__dirname + '/public/dist', {
  extension: 'ejs'
}))

// CORS
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(router.routes(), router.allowedMethods())

app.use(async (ctx) => {
  ctx.redirect('/');
})

// error-handling
app.on('error', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});



module.exports = app
