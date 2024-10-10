const passwordBox = document.getElementById("password");
const length = 9;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number= "0123456789";
const specialSymbols="!@#$%^&*()+<>:;-=`~";
const allchars=upperCase+lowerCase+number+specialSymbols
function createPassword(){
  let password ="";
  password +=upperCase[Math.floor(Math.random()*upperCase.length)];
  password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password +=number[Math.floor(Math.random()*number.length)];
  password +=specialSymbols[Math.floor(Math.random()*specialSymbols.length)];

  while(length>password.length){
    password +=allchars[Math.floor(Math.random()*allchars.length)];
  }
  passwordBox.value=password

}
function passwordCopy(){
  passwordBox.select();
  document.execCommand("Copy");

}
