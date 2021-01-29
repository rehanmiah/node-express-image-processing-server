const gm = require('gm');
const {parentPort, workerData} =require('worker_threads');

worker_threads.gm(workerData.source,resizeWorker.js);