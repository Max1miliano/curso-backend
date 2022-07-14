import moment from 'moment';

const http = require('http');

const server = http.createServer((request,response)=>{
    let currentHour = new Date().getHours();
    if(currentHour>=6&&currentHour<=12) response.end("Buenisimos dias");
    if(currentHour>=13&&currentHour<=19) response.end("Buenos tardes");
    if(currentHour>=20||currentHour<=5) response.end("Buenas nochecitas");
})

const connectedServer = server.listen(8080,()=>{
    console.log("Listening on PORT 3000")
})

// let today = moment();
// let birthday = moment('1995-10-31');


// console.log(`Hoy es  ${today.format('DD/MM/YYYY')}`)

// console.log(`Desde mi nacimiento han pasado ${today.diff(birthday,'days')} días`);
// console.log(`Desde mi nacimiento han pasado ${today.diff(birthday,'years')} años`);