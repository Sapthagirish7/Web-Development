var k1=Math.random();
k1=Math.floor(k1*6)+1;
var randomImagesrc1="images/"+"dice"+k1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesrc1);

var k2=Math.random();
k2=Math.floor(k2*6)+1;
var randomImagesrc2="images/"+"dice"+k2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesrc2);

if(k1>k2){
  var res="🚩 Player 1 Wins!";
  document.querySelector("h1").innerHTML=res;
}
else if(k1<k2){
  var res="Player 2 Wins! 🚩";
  document.querySelector("h1").innerHTML=res;
}
else{
  var res="Draw!";
  document.querySelector("h1").innerHTML=res;
}
