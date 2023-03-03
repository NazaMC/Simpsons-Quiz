let button = document.querySelector("button");
let body = document.querySelector("body");

console.log("button: ", button);

button.onclick = function() {
  confetti()
  console.log("IM HERE")
  let UserInput1 = document.querySelector(".Question1").value;
  let UserInput2 = document.querySelector(".Question2").value;
  body.style.backgroundColor = "coral";
  console.log(UserInput1);
  console.log(UserInput2);
  if (UserInput1 === "outside" && UserInput2 === "pretty"){
  document.querySelector(".result").innerHTML="You selected " + UserInput1 + " and you think you're " + UserInput2 + ". This means you're " + " Lisa Simpson!";
}
    
else if (UserInput1 === "outside" && UserInput2 === "ugly") {
  document.querySelector(".result").innerHTML=" You selected " + UserInput1 + " and you think " + " you're " + UserInput2 + ". This means you're " + " Bart Simpson! ";
}
  
 else if (UserInput1 === "inside" && UserInput2 === "pretty") {
  document.querySelector(".result").innerHTML=" You selected " + UserInput1 + " and you think " + "you're" + UserInput2 + ". This means you're " + " Marge Simpson! ";
}
   
 else if (UserInput1 === "inside" && UserInput2 === "ugly") {
  document.querySelector(".result").innerHTML=" You selected  " + UserInput1 + " and you think " + " you're " + UserInput2 + ". This means you're " + " Homer Simpson! ";
}
};