var arr=['foo','bar'];
function processContains(el,array,callback){
  if(array.includes(el)){
    callback(null,'Nice!');
  }
  else{
    callback('"'+'sad'+'"');
  }
}
function result(err,res){
  if(err){
    console.log(err);
  }
  else{
    console.log(res);
  }
}
processContains('foo',arr,result);
processContains('lady gaga',arr,result);
