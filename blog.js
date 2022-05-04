// changing the header content and and the div content 
function  changeBg (){
    var pictures =[
        'url("./images/2.jpeg")',
        'url("./images/blog-1.jpg")',
        'url("./images/blog-2.jpg")',
        'url("./images/blog-3.jpg")',

    ];

   
    

    const ImgDiv = document.querySelector(".header");
    const bg = pictures[Math.floor(Math.random() * pictures.length)];
    // const change = contentChange[Math.floor(Math.random()*contentChange.length)]
    ImgDiv.style.backgroundImage = bg;
}

setInterval(changeBg, 1000*3);


const pera = document.querySelectorAll('.pera');
const all_box = document.querySelectorAll('.box');




const left_arrow = document.getElementById('left');
const right_arrow = document.getElementById('right');


let current = 0;








// var text = document.querySelector("text");
// var rotate = document.getElementsByTagName("span");

// var i = 0;

// function rotator(){
//     rotate[i].style.display = 'none';
//     i =(i + 1) % rotate.length;
//     rotate[i].style.display = 'initial';
// }

// setInterval(rotator, 1000*3)

// rotator();

(function($) {

    
    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });

})(jQuery);
