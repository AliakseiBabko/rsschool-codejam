function make(...n){
    let arrayOfValues = n;
    function f(...b) {
      if (typeof b[0] === 'function') {
          return sum(arrayOfValues);
          }
          arrayOfValues.push(...b);
      return f;
    }  
    return f;
  }
  function sum(values) {
      return values.reduce((accumulator, currentValue) => accumulator + currentValue - 1);
  }