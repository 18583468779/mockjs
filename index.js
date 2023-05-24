const Koa = require('koa');
const Router = require('koa-router');

const mockList = require('./mock/index');
const app = new Koa();
const router = new Router();

//模拟请求时间
const getData = (fn)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res =  fn()
            resolve(res)
        },1000)
    })
}


//注册 mock 路由
mockList.forEach(item =>{
    const {url,method,response} = item;
    router[method](url,async ctx => {
        const res = await getData(response)
        ctx.body = res
    })
})

app.use(router.routes());
app.listen(3001,()=>{
    console.log('服务器运行成功，端口3001！')
})