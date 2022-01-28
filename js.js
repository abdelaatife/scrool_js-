let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let hello = document.querySelector(".hello")

window.onscroll = function () {
    let value = scrollY ;
    
    stars.style.left = value + 'px' ;
    mountains3.style.top = value *1.5 + 'px' ;
    moon.style.top = value *4 + 'px' ;
    mountains4.style.top = value *1.2 + 'px' ;
    river5.style.top = value + 'px' ;
   boat6.style.top = value  + 'px' ;
   boat6.style.left = value*3.5  + 'px' ;
  hello.style.fontSize = value  + 'px' ;
  if (scrollY >= 67) {
    hello.style.fontSize = 67  + 'px' ;
    hello.style.position = 'fixed' ; }
    if (scrollY >= 412) {
        hello.style.display = 'none' ;
    }
    else{
        hello.style.display = 'block' ;
    }
    if (scrollY >=101) {
        document.querySelector(".main").style.background = 'linear-gradient(#040020 , #10001f)'
        
    }else  {
        document.querySelector(".main").style.background = 'linear-gradient(#200016 , #10001f)'
    }

      
 



}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 