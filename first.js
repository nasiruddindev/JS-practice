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


let count=3
let secCount=2

buttonOne.addEventListener("click",()=>{
  if(!inputOne.value){
    errorOne.innerHTML="Please Enter Something"
  }else if(isNaN(inputOne.value)){
    errorOne.innerHTML="Please Enter a Numner"
  }else if(!(inputOne.value<=10 && inputOne.value>0)){
    errorOne.innerHTML="please Enter a Numner between 1 to 10"
  }else{
    first.style.display="none"

    sec.style.display="block"
    chanceTwo.innerHTML=`Chance : ${count}`

  }
})


buttonTwo.addEventListener("click",()=>{
  if(!inputTwo.value){
    errorTwo.innerHTML="Pleasr Enter Something"
  }else if(isNaN(inputTwo.value)){
    errorTwo.innerHTML="Please enter a Number"
  }else if(!(inputTwo.value<=10 && inputTwo.value>0)){
    errorTwo.innerHTML="Please enter a Number Between 1 to 10"
  }else if(inputOne.value==inputTwo.value){
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
  if(!inputThree.value){
    errorThree.innerHTML="Please Enter Something"
  }else if(isNaN(inputThree.value)){
    errorThree.innerHTML="Please Enter a Number"
  }else if(!(inputThree.value<=10 && inputThree.value>0)){
    errorThree.innerHTML="Please Enter a Number Between 1 to 10"
  }else if(inputOne.value==inputThree.value){
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
