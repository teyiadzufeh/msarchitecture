function dummyCharge() { 
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("Success");
        }, 100);
    });
}


dummyCharge().then().catch((error) => {
    console.log(error.name + ' ' + error.message);
} ) 