/*Given an array of positive integers (the weights of the people), return a new array/tuple
 of two integers, where the first one is the total weight of team 1, and the second one is
  the total weight of team 2.*/

  function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        sum1 += array[i];
      } else {
        sum2 += array[i];
      }
    }
        
    return [sum1, sum2];
  }
