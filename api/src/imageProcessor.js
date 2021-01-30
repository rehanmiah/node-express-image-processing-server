const path = require('path');
const {Worker, isMainThread} = require('worker_threads');

const pathToResizeWorker = path.resolve(__dirname, 'resizeWorker.js');
const pathToMonochromeWorker = path.resolve(__dirname, 'monochromeWorker.js');

const uploadPathResolver = (filename) => {
    return path.resolve(__dirname, '../uploads', filename)
} ;

  
const imageProcessor = (filename =>  {
    
    const sourcePath = uploadPathResolver(filename)
    const resizedDestination = uploadPathResolver('resized-'+filename)
    const monochromeDestination = uploadPathResolver('monochrome-'+filename)

    const resizeWorkerFinished = false;
    return new Promise((resolve, reject) => {
        if (isMainThread)
        {

    
            try {
                resizeWorker.on('message',(message) => {
                    resizedWorkerFinished = true;
                    resizedWorkerFinished.resolve()
                });
                const resizeWorker = new Worker(pathToResizeWorker, {
                  workerData: {
                    source: sourcePath,
                    destination: resizedDestination,
                  },
                });
                const monochromeWorker= new Worker(pathToMonochromeWorker, {
                    workerData:
                    {source:sourcePath,
                        destination:monochromeDestination,
                    },
                });
            }
            catch(errror){
                reject(error);
            }

        }
         else
         {
         reject(new Error('not on main thread'))
         }
    }) 


 });
module.exports = imageProcessor;