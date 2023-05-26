const Mock = require('mockjs');
const createQuestionList = require('../data/data')
const Random = Mock.Random;


module.exports = [
    {
        url:'/api/question/:id',
        method:'get',
        response(){
            return {
                errno:0,
                data:{
                    id:Random.id(),
                    title:Random.ctitle()
                }
                // errno:123,
                // msg:'错误'
            }
        }

    },
    {
        //创建问卷
        url:'/api/question',
        method:'post',
        response(){
            return {
                errno:0,
                data:{
                    id:Random.id(),
            
                }
            }
        }

    },
    {
               //获取（查询）问卷
               url:'/api/question',
               method:'get',
               response(ctx){
                const {url = ''} = ctx;
                const isStar = url.indexOf('isStar=true') >=0;
                const isDeleted = url.indexOf('isDeleted=true')  >=0;
                   return {
                       errno:0,
                       data:{
                           list:createQuestionList({num:12,isStar,isDeleted}),
                           total:20 
                       }
                   }
               }
    }
]