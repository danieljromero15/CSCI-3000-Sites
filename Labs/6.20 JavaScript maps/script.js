function calcWordFrequencies() {
   let list = prompt("Enter a list of words.");
   list = list.split(" ");
   let listMap = new Map();

   list.forEach((listElement) => {
       if(listMap.has(listElement)){
           listMap.set(listElement, listMap.get(listElement) + 1);
       }else{
           listMap.set(listElement, 1);
       }
   });

   for(let mapElement of listMap){
       console.log(mapElement[0] + " " + mapElement[1]);
   }
}

/*window.onload = function (event){
    calcWordFrequencies();
}*/