$(function(){

    //Invoke original function
   	drawBoxes();

    //Draw .box divs
    function drawBoxes(){
        var gridWidthInBoxes = prompt("Width of grid in boxes?");
        //Remove boxes and redraw
        $('.box').remove();
        for(var i = 0; i < (gridWidthInBoxes * gridWidthInBoxes) ; i++){
        	$(".container").append("<div class='box'></div>");
        }
        //Restyle boxes after they have been drawn
        restyle(gridWidthInBoxes);
    }

    //Style .box divs with appropriate width
    function restyle(numberofBoxes){
        //Set width and height css value for '.box' divs
        $('.box').css('width', (100/numberofBoxes)+'%');
        $('.box').css('height', (100/numberofBoxes)+'%');
    }

    //Button event handler
    $("button").on('click', function(){
  		drawBoxes();
    });

    
    /*
    //Hover to draw boxes
    $(".box").mousenter(function() {
      $(this).addClass('black');
    } */

})();
