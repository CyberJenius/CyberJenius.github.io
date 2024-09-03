const names = ["Christopher J. Grieco II", "C. J."];

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
      typer();
      return false;
    };
    timer = setTimeout(del, 200);
  };
  del();
};


console.log("Hello");
function typer(){
  let name = names[i].split("");
  console.log(name);
  var type = function(){
    if (name.length > 0){
      console.log(document.getElementById("name").innerHTML);
      name = document.getElementById("name").innerHTML += name.shift();
    } else {
      deleter();
      return false;
    };
    timer = setTimeout(type, 500);
  };
  type();
}

deleter();