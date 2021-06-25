var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var divs = document.getElementsByClassName("mieSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > divs.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = divs.length}
  for (i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" attivodue", "");
  }
  divs[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " attivodue";
  
}
