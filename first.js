function vowel(str){
  let i=0;
  for(let char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
      i++;
    }
  }
  return i;
}
console.log(vowel("nasiruddin"));