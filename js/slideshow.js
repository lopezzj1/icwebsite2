"use strict";
function slideSwitch() {
    var $active = $('#slideshow DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshow DIV:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow DIV:first');

    // uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}


/* Old slide show

	//images for slideshow
	var slideimages = new Array() // create new array to preload images
	slideimages[0] = new Image() // create new instance of image object
	slideimages[0].src = "img/image1.jpg" // set image object src property to an image's src, preloading that image in the process
	slideimages[1] = new Image()
	slideimages[1].src = "img/image2.jpg"
	slideimages[2] = new Image()
	slideimages[2].src = "img/image3.gif"

	//code for slideshow
	//variable that will increment through the images
	var step = 0
	var whichimage = 0

	function slideit(){
			 //if browser does not support the image object, exit.
		if (!document.images)
			return
			document.getElementById('slide').src = slideimages[step].src
			whichimage = step
		if (step<2)
			step++
		else
			step=0
			 //call function "slideit()" every 4 seconds
		setTimeout("slideit()",4000)
	}

	function slidelink(){
		if (whichimage == 0) //insert links here
			window.location = "img/image1.jpg"
		else if (whichimage == 1)
			window.location = "img/image2.jpg"
		else if (whichimage == 2)
			window.location = "img/image3.gif"
	}
slideit();

*/