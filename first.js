let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let errorOne=document.querySelector(".errorOne")
let first=document.querySelector(".first")


let headingTwo=document.querySelector(".headingTwo")
let inputTwo=document.querySelector(".inputTwo")
let buttonTwo=document.querySelector(".buttonTwo")
let errorTwo=document.querySelector(".errorTwo")
let sec=document.querySelector(".sec")
let chanceTwo=document.querySelector(".chanceTwo")


let headingThree=document.querySelector(".headingThree")
let inputThree=document.querySelector(".inputThree")
let buttonThree=document.querySelector(".buttonThree")
let errorThree=document.querySelector(".errorThree")
let third=document.querySelector(".third")
let chanceThree=document.querySelector(".chanceThree")



let input=document.querySelector("input")
let eyeIcon=document.querySelector("#eyeIcon")

eyeIcon.addEventListener("click",()=>{
  if(input.type=="password"){
    input.type="text"
    eyeIcon.classList.remove("fa-eye-slash")
    eyeIcon.classList.add("fa-eye")
  }else if(input.type="text"){
    input.type="password"
    console.log("input");
    eyeIcon.classList.remove("fa-eye")
    eyeIcon.classList.add("fa-eye-slash")
  }
})



let count=3
let secCount=2

buttonOne.addEventListener("click",()=>{

  let input1=Number(inputOne.value)


  if(!input1){
    errorOne.innerHTML="Please Enter Something"
  }else if(isNaN(input1)){
    errorOne.innerHTML="Please Enter a Number"
  }else if(!(input1<=10 && input1>0)){
    errorOne.innerHTML="please Enter a Number between 1 to 10"
  }else{
    first.style.display="none"

    sec.style.display="block"
    chanceTwo.innerHTML=`Chance : ${count}`

  }
})


buttonTwo.addEventListener("click",()=>{

  let input2=Number(inputTwo.value)


  if(!input2){
    errorTwo.innerHTML="Pleasr Enter Something"
  }else if(isNaN(input2)){
    errorTwo.innerHTML="Please enter a Number"
  }else if(!(input2<=10 && input2>0)){
    errorTwo.innerHTML="Please enter a Number Between 1 to 10"
  }else if(inputOne.value==input2){
    headingTwo.innerHTML="Player Two is Winner"
    buttonTwo.style.display="none"
    chanceTwo.style.display="none"
  }else if(count>1){
    count--;
    chanceTwo.innerHTML=`Chance : ${count}`
  }else{
    sec.style.display="none"

    third.style.display="block"
    chanceThree.innerHTML=`Chance : ${secCount}`

  }
})


buttonThree.addEventListener("click",()=>{

  let input3=Number(inputThree.value)

  if(!input3){
    errorThree.innerHTML="Please Enter Something"
  }else if(isNaN(input3)){
    errorThree.innerHTML="Please Enter a Number"
  }else if(!(input3<=10 && input3>0)){
    errorThree.innerHTML="Please Enter a Number Between 1 to 10"
  }else if(inputOne.value==input3){
    headingThree.innerHTML="Player Three is Winner"
    buttonThree.style.display="none"
    chanceThree.style.display="none"
  }else if(secCount>1){
    secCount--;
    chanceThree.innerHTML=`Chance : ${secCount}`
  }else{
    chanceThree.style.display="none"
    buttonThree.style.display="none"
    headingThree.innerHTML="Player One is Winner"
  }
})
