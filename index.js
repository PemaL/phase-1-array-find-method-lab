
  function superbowlWin(arr){
      const foundItem = arr.find( ({ name })=>  name === 'W' );
      if(foundItem){
          return foundItem.year;
      }else{
          return undefined;
      }
  }
  

 