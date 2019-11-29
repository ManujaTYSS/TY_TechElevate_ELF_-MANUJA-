let resultData = new Promise(function(resolve,reject){
    if(10>10){
        reject('failed');
    }else{
        resolve('success');
    }
});
resultData.then((data)=>{
    console.log('Then block =' +data);
}).catch((error)=>{
    console.log('Caught block = ' +error);
});