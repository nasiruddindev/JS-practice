let age=Number(prompt("Enter Your Age"));
let salary=Number(prompt("Enter Your Salary"));
let live=prompt("Where Do You Live").toUpperCase();



age>=25 && age<=30?salary>=40000?live==="DHAKA"?console.log("You have passed all Requirment"):console.log("Bad luck"):console.log("Grow up your salary"):console.log("You are not able to marry");



// // HW

// let user = prompt('Enter a Latter')

// if (user >= 'A' && user <= 'Z') {
//   console.log('Capital :', user)
// } else if (user >= 'a' && user <= 'z') {
//   console.log('Small :', user)
// } else {
//   user = prompt('Enter a Number man')
// }






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






// let sum= (a=0,b=0)=>{
//   return a+b;
// }
// console.log(sum(3,));






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
