const Mock  = require('mockjs');
const Random = Mock.Random;




function createQuestionList (num=12){
    const list = Array.from({length:num}).map(item => {
        return {
            _id:Random.id(),
            title: Random.ctitle(),
            isStar: Random.boolean(),
            isPublished: Random.boolean(),
            answerCount: Random.natural(),
            createdAt: Random.date(),
            isDeleted:false
        }
    });
    return list;
}

module.exports = createQuestionList