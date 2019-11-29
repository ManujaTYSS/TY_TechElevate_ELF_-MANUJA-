let employeeData = new Promise(function(resolve,reject){
    const employee =[
        {
            name: 'manu',
            age: 21
        },
        {
            name: 'thanu',
            age: 22
        },
        {
            name: 'rakshi',
            age: 23
        }
    ];
    if(10>10){
        reject('failed');
    }else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
    // console.log('employeeData =' , data);
    // if we provide + then object will instead of data hence we use ,(comma) gor concatination
    return data; // data will return to another then block
}).catch((error)=>{
    console.log('Caught block = ' , error);
}).then(function(data1){
    console.log('this is then block2' , data1);
});

