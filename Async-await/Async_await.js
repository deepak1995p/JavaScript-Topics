// Async  functions always return a Promise. If the function throws an error, 
// the Promise will be rejected. If the function returns a value, the Promise will be resolved.

let getData=function(message){
    return new Promise(function(resolve,reject){
        resolve("abhinav is saying "+message+"! You want more?");
    });
}
let getMoreData=function(message){
    return new Promise(function(resolve,reject){
        resolve("Rahul is saying "+message+"! You want more??");
    });
}
let getSomeMoreData=function(message){
    return new Promise(function(resolve,reject){
        resolve("Gagan is saying "+message+"! You want more??");
    });
}
let get_SomeMore=function(message){
    return new Promise(function(resolve,reject){
        resolve("Nirmal is saying "+message+"! GOODBYE!!!");
    });
}

async function data(){
    try{
        const fromResolve1 = await getData("Hi!");
        console.log(fromResolve1);

        const fromResolve2 = await getData("Hello!");
        console.log(fromResolve2);

        const fromResolve3 = await getData("Kidaan!");
        console.log(fromResolve3);

        const fromResolve4 = await getData("Chad di kala");
        console.log(fromResolve4);
    }
    catch(err){
        console.log(err);
    }
}
data();