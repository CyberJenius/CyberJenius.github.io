const names = ["Christopher J. Grieco II    ", "C.J.Grieco"];

let i = 0;
let timer;

function deleter(){
  let name = names[i].split("");
  console.log(name);
  var del = function(){
    if (name.length > 0){
      name.pop();
      document.getElementById("name").innerHTML = name.join("");
    } else {
      if (name.length > (i)){
        i++;
      } else {
        i = 0;
      };
      setTimeout(typer(), 3000);
      return false;
    };
    timer = setTimeout(del, 200);
  };
  del();
};

function typer(){
  let name = names[1].split("");
  console.log(name);
  var type = function(){
    if(name.length > 0){
      let currVal = name.shift();
      document.getElementById("name").innerHTML += currVal;
    } else {
      return false;
    };
    timer = setTimeout(type, 300);
  };
  type();
};

deleter();


