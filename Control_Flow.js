var hot=false
var temp= prompt("Please Enter Your temperature in centigrade scale")
alert("Temperature at your place is : "+temp+" degree Centigrade")
if (temp>45) {
console.log("It's too much hot outside !");
}else if (temp<=45 && temp>40) {
  console.log("It's hot outside");
}
else if (temp<=40 && temp>35) {
  console.log("It's a bit of hot outside");
}
else if (temp<=35 && temp>30) {
  console.log("The Temperature is mild outside");
}
else if (temp<=30 && temp>20) {
  console.log("AAH! it's the perfect weather");
}
else {
  console.log("It's kind of cold");
}
