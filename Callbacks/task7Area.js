function area(a, b){
      console.log(`area of rectangle:-       ${a * b}`);
    }
    {
      function perimeter(a, b){
        console.log(`perimeter of rectangle:-  ${2 * (a + b)}`);
      }
      }
      function callback(n1, n2, call){
        call(n1, n2);
      }
      callback(5, 9, area);
      callback(5, 9, perimeter);