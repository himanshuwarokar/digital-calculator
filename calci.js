const buttons = document.querySelectorAll('button');
const input = document.querySelector('.input');

let string = "";
buttons.forEach((b)=> {
  b.addEventListener('click',function(e){
    if(e.target.innerHTML == "="){
        string = eval(string);
        input.innerHTML= string;
    }else if(e.target.innerHTML == "AC"){
        string = "";
        input.innerHTML= string;
    }else if(e.target.innerHTML == "DL"){
       string = string.substring(0,string.length-1);
       input.innerHTML = string;
    }else{
    string += e.target.textContent;
    input.innerHTML = string;}
  })  
});