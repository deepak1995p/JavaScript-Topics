function makeRequest(location){
    return new Promise(function(resolve,reject){
        console.log("making request to "+location);
        if(location==='google'){
            resolve('Google says Hi!');
        }
        else{
            reject('We can only talk to google');
        }
    });
}
function processRequest(response){
    return new Promise(function(resolve,reject){
        console.log("Processing response");
        resolve("Extra info "+response);
    });
}
async function doWork(){
    try{
     const response=await makeRequest('google');
     console.log("Response received");
     const processedResponse=await processRequest(response);
     console.log(processedResponse);
         }
    catch (err)
    {
         console.log(err);
    };
}     
doWork();
