const Mock  = require('mockjs');
const Random = Mock.Random;




function createQuestionList (option){
    const {num=12,isStar=Random.boolean(),isDeleted = false} = option;

    const list = Array.from({length:num}).map(item => {
        return {
            _id:Random.id(),
            title: Random.ctitle(),
            isStar: isStar,
            isPublished: Random.boolean(),
            answerCount: Random.natural(),
            createdAt: Random.date(),
            isDeleted:isDeleted
        }
    });
    return list;
}

module.exports = createQuestionList