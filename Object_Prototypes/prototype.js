let points = {
    x: 20,
    y: 30,
};
let points3D ={
    z: 40,
    __proto__: points,
};
console.log('x:' +points3D.x +' , '+ 'y:' +points3D.y + ' , z:' +points3D.z);
