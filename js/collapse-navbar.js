// This is NOT an elegant solution... all it does it press the button to
// collapse the scroll bar if the menu is not collapsed... we should find
// a less "hacky" solution in the future, but for now this will do...

// THOUGHTS:    Expanding menu causes rest of screen to darken and makes overflow:
//              hidden. To undo this effect, either collapse menu by button, or 
//              click on darkened background.
//              This is a better solution because currently, there is an experience 
//              of jerking when you scroll to close the menu, that should be
//              avoided if possible.

$(document).ready(function () {

   function checkOffset() {
     if ($("#wrapper").hasClass("toggled")) {
         $("#menu-toggle").click();
      }
   }

   // Run function when scrolling
   $(window).scroll(function () {
      checkOffset();
   });

   // Run function when clicking off of menu
   $("#main-page").click(function () {
      if ($("#wrapper").hasClass("toggled")) {
         checkOffset();
      }
   });
});
