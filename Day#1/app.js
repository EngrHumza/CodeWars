const binaryArrayToNumber = arr => {
    arr.reverse();
    let decimal = 0;;
    arr.forEach((num,i)=> {
      let a= Math.pow(2,i);
      decimal += num*a;
    })


    //One Line Method
    // decimal=parseInt(arr.join(''), 2); 
    
    return decimal;
  }

console.log(binaryArrayToNumber([0,0,0,1])); 