let buttons=document.querySelectorAll("button")
let cards=document.querySelectorAll(".card")




buttons.forEach((button) => {
  button.addEventListener("click",()=>{

    // Sob card hide

    cards.forEach((card)=>{
      card.style.display="none"
    })

    let btn=button.classList[0];


    if(btn==="messi"){
      document.querySelector(".mess").style.display="block";
    }else if(btn==="maria"){
      document.querySelector(".mari").style.display="block";
    }else if(btn==="allister"){
      document.querySelector(".alliste").style.display="block";
    }else if(btn==="de-paul"){
      document.querySelector(".de-pau").style.display="block";
    }else if(btn==="alvarez"){
      document.querySelector(".alvare").style.display="block"
    }

  })
})




// Another one

// let buttons=document.querySelectorAll("button")
// let heading=document.getElementById("heading")


// buttons.forEach((button)=>{
//   button.addEventListener("click",()=>{


//     let color=button.innerText.toLocaleLowerCase();

//     heading.className="";

//     if(heading.classList.contains(color)){
//       heading.classList.remove(color)
//     }else{
//       heading.classList.add(color)
//     }

//   })
// })



// buttons.forEach((button)=>{
//   button.addEventListener("click",()=>{

//     let color=button.innerText.toLocaleLowerCase();

//     if(color==="blue"){
//       heading.style.background="blue"
//     }else if(color==="yellow"){
//       heading.style.background="yellow"
//       heading.style.color="black"
//     }else{
//       heading.style.color="white"
//        if(color==="green"){
//       heading.style.background="green"
//     }else if(color==="teal"){
//       heading.style.background="teal"
//     }else if(color==="pink"){
//       heading.style.background="pink"
//       heading.style.color="black"
//     }else{
//       heading.style.color="white"
//     }if(color==="black"){
//       heading.style.background="black"
//     }
//     }
//   })
// })










// let array=[23,5,95,98,49,98,40,498,497]


// let arr=array.unshift(25)
// console.log(array);
// let arr=array.shift()
// console.log(array);
// let arr=array.splice(2,2,32,92)
// console.log(array);
// let arr=array.slice(3,4)
// console.log(arr);
// let arr=array.push(32);
// console.log(array);
// console.log(array.pop());
// console.log(array.join(" # "));
// console.log(array.at(2));
// console.log(array.length);
// console.log(array);


//another one



// let age=Number(prompt("Enter Your Age"));
// let salary=Number(prompt("Enter Your Salary"));
// let live=prompt("Where Do You Live").toUpperCase();



// age>=25 && age<=30?salary>=40000?live==="DHAKA"?console.log("You have passed all Requirment"):console.log("Bad luck"):console.log("Grow up your salary"):console.log("You are not able to marry");



//another one

// // HW

// let user = prompt('Enter a Latter')

// if (user >= 'A' && user <= 'Z') {
//   console.log('Capital :', user)
// } else if (user >= 'a' && user <= 'z') {
//   console.log('Small :', user)
// } else {
//   user = prompt('Enter a Number man')
// }




// another one

// function vowel(str){
//   let i=0;
//   for(let char of str){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//       i++;
//     }
//   }
//   return i;
// }
// console.log(vowel("nasiruddin"));




// another one

// let sum= (a=0,b=0)=>{
//   return a+b;
// }
// console.log(sum(3,));




// another one

// let n=Number(prompt("Enter Your First Number"));
// let m=Number(prompt("Enter Your last Number"));
// let r=Number(prompt("Enter Your Reject Number"))
// let r1=30;
// let r2=40;
// let r3=50;

// for(i=n;i<=m;i++){
//   if(i!=r  && r<m && r>n){
//     console.log(i," er namta start");
//     for(j=1;j<=10;j++){
//       if(i*j!=r1 && i*j!=r2 && i*j!=r3){
//         console.log(i+" x "+j+" = "+i*j);
//       }
//     }
//     if(i<m){
//     console.log(i," er namta end");
//   }else{
//     console.log("All End");
//   }
//   }
// }



// another one


// Eventlistener

// let btn=document.querySelector("button");
// let body=document.querySelector("body");

// let mode="light"
// btn.addEventListener("click",()=>{
//   if(mode==="light"){
//     mode="dark"
//     body.style.backgroundColor="black"
//   }else{
//     mode="light"
//     body.style.backgroundColor="white"
//   }
//   console.log(mode);
// })
