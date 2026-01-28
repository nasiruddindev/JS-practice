let f = Number(prompt("Enter Your First Number"));
let l = Number(prompt("Enter Your Last Number"));
let r = Number(prompt("Enter Your Reject Number"));
let num1 = 30;
let num2 = 40;
let num3 = 50;



for (i = f; i <= l; i++) {
  if (i != r) {
    console.log("====== ", i, " er namta start");
    for (j = 1; j <= 10; j++) {
      if (i * j != num1) {
        if (i * j != num2) {
          if (i * j != num3) {
            console.log(i + " x ", j, " = ", i * j);
          }
        }
      }
    }
    if (i < l) {
      console.log("====== ", i, " er namta end");
    } else {
      console.log("all end");
    }
  }
}
