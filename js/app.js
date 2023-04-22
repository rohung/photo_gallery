
 window.addEventListener('load', function() {
    baguetteBox.run('.grid');
});

// Target the input element by id. Apply an "addEventListener" on every "onkeyup" will execute 
// gallerySearch().




function gallerySearch() {

  // Target the input search bar by Id and set the value of the input to lower case. Define the value as "input".
  let input = document.getElementById("search").value.toLowerCase();
  // Target all the class links using querySelectorAll and define the selection as "pics".
  let pics = document.querySelectorAll(".image");
  // Using for loop,  loop through each element in "pics". Define each element as "pic".   
    for(i = 0; i < pics.length; i++) {
      let pic = pics[i];
  // Target each element's ("pic") data-caption attribute and make it lower case. Define the value as "caption".
      let caption =  pic.getAttribute("data-caption").toLowerCase();
  // Using indexOf(). If "caption" contains the "input" display it else display "none".    
      if(caption.indexOf(input) > -1) {
        pics[i].style.display="";
      } else {
        pics[i].style.display="none";
      }
    }
}

