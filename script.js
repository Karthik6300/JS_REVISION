function generateOTP() {
  let x = Math.random() * 1000000;
  let otp = Math.floor(x);
  if (otp < 1000000) {
    otp += 1000000;
    console.log("OTP:", otp);
  } else {
    console.log(otp);
  }
  return otp;
}

function showOTP() {
  const otp = generateOTP();
  document.getElementById("OTP").textContent = "generated OTP is : " + otp;
}

// let str1 = 1 - 2 * 3 + (8 / 9) * 8 - 5 + 7 + 5;
// console.log(eval(str1));

document.getElementById("div1").addEventListener("click", () => {
  console.log("parent clicked");
},false);
document.getElementById("but1").addEventListener("click", () => {
  console.log("child clicked");
});
