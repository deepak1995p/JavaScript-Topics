
// var arr=['Deepak','patel','Abhinav','Sunny','Gagan'];

function processLastItem(b,callback){
  
  c=b[b.length-1];
  callback(c);
} 
function result(res){
  console.log('The last item of the string '+res);
}
processLastItem(['Deepak','patel','Abhinav','Sunny','Gagan'],result);