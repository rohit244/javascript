var first= prompt("Enter Your First Name Please");
var last= prompt("Enter Your Last Name Please");
var age=prompt("How Old Are You?");
var height=prompt("Enter Your Height Please");
var petname= prompt("Enter Your Pet Name Please");
// four conditions
var namecond=null;
var agecond=null;
var heightcond=null;
var petnamecond=null;
//name condition
if (first[0]===last[0]) { //it will take R and r as two different letters.This time it is a case sensative case
  namecond=true;
}
else {
  namecond=false;
}
//age condition
if (age>20 && age<30) {
  agecond=true;
}
else {
  agecond=false;
}
// height condition
if (height>=170) {
  heightcond=true;
}
else {
  heightcond=false;
}
//petname condition
if (petname[petname.length-1]==="y") { // it is sensativefor capital and small leyyers. so it will take Y and y as two different letters and the condition will be false
  petnamecond=true;
}
else {
  petnamecond=false;
}
//check all condition
if (namecond && agecond && heightcond && petnamecond) {
  console.log("COMRADE!! WELCOME TO THE DARK WEB!!");
}
