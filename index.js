function cal() {
const a = document.getElementById("a").value.trim();
const b = document.getElementById("b").value.trim();
if(a === "" || b === ""){
  alert(" Please Fill both name ");
}
else{
const per = Math.floor(Math.random()*101);
const dis = document.getElementById("ab");
dis.innerHTML= a + ' and ' +b+'`s Love percentage is '+per;
if(per<30){
  dis.innerHTML += '<br>' + 'Not a great Match';
}
else if(per>=30 && per<=70){
  dis.innerHTML += '<br>' + 'you can give it a try';
}
else{
  dis.innerHTML += '<br>' + 'Perfect Match😍';
}
  }
}
