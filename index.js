// var figlet = require("figlet");
// figlet("Kayung", function(err, data){
//     if(err){
//         console.log("SomeThing went wrong..");
//         console.dir(err);
//         return ;
//     }
//     console.log(data);
// })

// const schedule = require('node-schedule');
// const rule = new schedule.RecurrenceRule();
// rule.minute = 29;
// const job = schedule.scheduleJob(rule, function(){
//     console.log('The answer to life, the universe, and everything!');
// });



const express = require('express')
var cors = require('cors')
const app = express()//server가 실행이 되서 이게 들어가서 app 
const port = 3000

app.use(cors())
//server에 cors를 사용하겠다, 조건 설정 가능 

app.get('/', (req, res) => {
    res.send('Hello World!') // 응답을 보냄
})

app.get('/video', (req, res) => {
    res.send('<a href="https://www.youtube.com/watch?v=Tt_tKhhhJqY">조코딩 강의 보러가기</a>')
})

app.get('/user/:id', (req, res) => {
    const p = req.params;
    console.log(p.id);
    const q = req.query;
    console.log(q.age);

    res.send({ 'id': p.id })
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    
    if(name == "dog"){
        res.send({'sound' : '멍멍'})
    } else if(name == "cat"){
        res.send({'sound' : '미야옹'})
    } else if(name == "pig"){
        res.send({'sound' : 'HoneyHoney'})
    } else {
        res.send({'sound' : 'unknown'})
    }

    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})