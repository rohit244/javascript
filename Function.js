var v="Vendetta";
var stuff="Anything";
function fun(stuff) {
  console.log(v);
  stuff="Reassigned variable inside Function";
  console.log(stuff);
}
fun()
console.log(stuff);
