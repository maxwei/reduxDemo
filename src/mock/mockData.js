var Mock = require('mockjs');

Mock.mock(
    'http://mock.test.com',
    'get',
    {
        name: 'weilong',
        sex: 'male'
    }
)