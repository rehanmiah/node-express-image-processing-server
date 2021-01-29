const gm = require('gm');
const {parentPort, workerData} = reguire('worker_threads');

gm(workerData.source);