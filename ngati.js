window.onscroll = function() {scrollFunction()};

let scrollValue = 30

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    for(let i = 0; i > scrollValue; i++){
        setTimeout(() => {
            document.getElementById("nav").style.top -= "1vh";
        }, 1000)
    }
  }
}