const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

router.post('/login', async(ctx, next) => {
	var data = ctx.request.body;
	console.log(data)
	if(data.user == 'user' && data.passwd == '123456') {
		ctx.body = "true";
		ctx.cookies.set("user", data.user)
	}else {
		ctx.body = 'false';
	}
})

router.get('/user', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/join', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router;
