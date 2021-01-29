const workerData=require('workerData') 
const gm = require('gm')
const parentPort = require('parentPort.worker_threads')
gm(workerData.source)
