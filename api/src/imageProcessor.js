const { response } = require('express');
const path = require('path');
const {worker, isMainThread} = require('worker_threads');

const pathToResizeWorker = path.resolve('__dirname', 'resizeWorker.js');
const pathToMonochromeWorker = path.resolve('__dirname', 'monochromeWorker.js');
const food = uploadPathResolver(filename => {
    path.resolve('__dirname', '../uploads', filname)
} );

const image = imageProcessor(filename =>  {
    
    const sourePath = uploadPathResolver(filename)
    const resizedDestination = uploadPathResolver('resized-'(filename))
    const monochromeDestination = uploadPathResolver('monochrome-'(filename))

    new Promise((resolve, reject) => {
        if (isMainThread)
        {}
         else
         {
         reject(new Error('not on main thread'))
         }
         resolve()
    } )


 });
//export module.exports;