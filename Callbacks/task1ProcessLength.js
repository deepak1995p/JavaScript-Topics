var a=['hi', 3,5,'raj', 'hardik'];
function processLength(b,callback){
  c=a.length;
  console.log(c);
  callback(c);
}
function result(res){
  console.log('the length of the array ' +res);
}
processLength(a,result);
