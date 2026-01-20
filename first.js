let computer="have";
// let computer=" I don't have";
let HC="I know";
// let HC="I don't know";
let HSC="completed"
// let HSC="incompleted"
let present=80;
// let present=80%


if(computer=="have"){
  // console.log("pass");
  if(HC=="I know"){
    // console.log("2nd level pass");
    if(HSC=="completed"){
      // console.log("3rd level pass");
      if(present==80){
        console.log("well done");
      }else{
        console.log("try again  next time");
      }
    }else{
      console.log("complete first");
    }
  }else{
    console.log("finish first");
  }
}else{
  console.log("buy a computer first");
}