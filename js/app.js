  
 window.addEventListener('load', function() {
    baguetteBox.run('.grid');
});

document.getElementById("search").addEventListener("onkeyup", gallerySearch);

function gallerySearch() {
    
  let input = document.getElementById("search").value.toLowerCase();
  let pics = document.querySelectorAll(".image");
    
    for(i = 0; i < pics.length; i++) {
      let pic = pics[i];
      let caption =  pic.getAttribute("data-caption").toLowerCase();
      if(caption.indexOf(input) > -1) {
        pics[i].style.display="";
      } else {
        pics[i].style.display="none";
      }
    }
}
