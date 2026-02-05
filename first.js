let n=Number(prompt("Enter Your First Number"));
let m=Number(prompt("Enter Your last Number"));
let r=Number(prompt("Enter Your Reject Number"))
let r1=30;
let r2=40;
let r3=50;

for(i=n;i<=m;i++){
  if(i!=r  && r<m && r>n){
    console.log(i," er namta start");
    for(j=1;j<=10;j++){
      if(i*j!=r1 && i*j!=r2 && i*j!=r3){
        console.log(i+" x "+j+" = "+i*j);
      }
    }
    if(i<m){
    console.log(i," er namta end");
  }else{
    console.log("All End");
  }
  }
}




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