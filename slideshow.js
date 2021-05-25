<script>
         // Slideshow
         var slideIndex = 0;
         runSlideShow();
         
         function plusDivs(n) {
           showDivs(slideIndex += n);    
         }
         
         function currentDiv(n) {  
       	  showDivs(slideIndex = n);
         }
         
         function showDivs(n) {
           var i;
           var x = document.getElementsByClassName("mySlides");
           var dots = document.getElementsByClassName("demodots");
           if (n > x.length) {slideIndex = 1}    
           if (n < 1) {slideIndex = x.length} ;
           for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
           }
           for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" w3-white", "");
           }
           x[slideIndex-1].style.display = "block";  
           dots[slideIndex-1].className += " w3-white";
         }
         
         function showSlides() {
           var i;
           var slides = document.getElementsByClassName("mySlides");
           var dots = document.getElementsByClassName("demodots");
           for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";  
           }
           slideIndex++;
           if (slideIndex > slides.length) {slideIndex = 1}    
           for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" w3-white", "");
           }
           slides[slideIndex-1].style.display = "block";  
           dots[slideIndex-1].className += " w3-white";
           
         }
         
         function runSlideShow() {
           showSlides();
      	   setTimeout(runSlideShow, 3000); // Change image every 3 seconds
         }
      </script>
