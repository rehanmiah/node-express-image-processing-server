const gm = require('gm');
const {parentPort, workerData} =require('worker_threads');

gm(workerData.source)
.resize(100,100)
.write('workerData.destination',(request,response)=>{})