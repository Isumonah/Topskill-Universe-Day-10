let input = document.getElementById("input")
let submit = document.getElementById("submit")
let numbers = document.getElementById("numbers")
let remove = document.getElementById("get")
let mean = document.getElementById("mean")
let myMode = document.getElementById("mode")

let myArray = []


submit.addEventListener("click", function(){
  if(myArray.length === 5){
    alert("You can only choose 5 numbers")
  }
  else if(myArray.length === 4){
    myArray.push(input.value)
  numbers.innerHTML += input.value
   input.value = "" ;
  }
  else{
  myArray.push(input.value)
  numbers.innerHTML += input.value + ", "
    input.value = "";
  }
})

  get.addEventListener("click", function(){
    let sum = 0
    for(let i = 0; i < myArray.length; i++){
    sum += parseInt(myArray[i])  
    }
    
    mean.innerHTML +=sum/myArray.length
    
      let mode = {};
      let highest = 0;
      let count = 0;

      for (let i = 0; i < myArray.length; i++){
        let element = myArray[i];

        if(mode[element]){
          mode[element]++;
        }
        else{
          mode[element] = 1;
        }
        if(count < mode[element]){
          highest = element;
          count = mode[element];
          
        }
      } 
      myMode.innerHTML += highest
    
})


