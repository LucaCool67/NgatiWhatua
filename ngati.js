window.onscroll = function() {scrollFunction()};

let scrollValue = 30

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.opacity = 100;
  }
  else {
    for(let i = 0; i > scrollValue; i++){
      document.getElementById("nav").style.top -= "30vh";
      document.getElementById("nav").style.visibility = 0;
    }
    
  }
}