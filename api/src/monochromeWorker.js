const gm = require('gm');
const {parentPort, workerData} = require('worker_threads');

gm(workerData.source)
.monochrome()
.write(workerData.destination, (error) => {
    if error throw write();
    parentPort.postMessage({monochrome: true})
});

