
var container, content,adTl, text1, loop,text2,hotspot;

window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
   	
	hotspot = document.getElementById("hotspot");
   
    hotspot.addEventListener("click", onHotSpotClick, false);
   loop=true;
	 adTl = new TimelineLite();
    
		console.log("dalfk")
    startAnimation();
    
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}

startAnimation = function() {
    
   
    		adTl.add("startAd")
    .set("#container_dc",{opacity:1})
				
       
         
        .from("#text1",.75,{opacity:0, ease:Sine.easeInOut},"in1+=.25")
        
        .add("in2","+=2")
        .to("#text1", .25,{opacity:0},"in2")
       .from("#cta", .75,{ease: Bounce.easeOut, scale:0 },"logo")
        .from("#logo", .75,{ease: Bounce.easeOut, scale:0 },"logo")
       .from("#text2", .5,{opacity:0},"logo")
        .from("#icon1", .5,{opacity:0, x:-200},"logo")
    .add("out2","+=2")
        .to("#text2,#icon1", .25,{opacity:0},"out2")
    
       .from("#text3", .5,{opacity:0},"in3")
        .from("#icon2", .5,{ease: Bounce.easeOut, y: -200 },"in3")
    .add("out3","+=2")
        .to("#text3,#icon2", .25,{opacity:0},"out3")

       .from("#text4", .5,{opacity:0},"in4")
        .from("#icon3", .5,{ease: Bounce.easeOut, scale:0 },"in4")
    .add("out4","+=2")
        .to("#text4,#icon3", .25,{opacity:0},"out4")

 //        .from("#people4",.85,{x:-400,ease:Sine.easeOut},"in5")
       .from("#text5", .5,{opacity:0},"in5")
        .from("#icon4", .5,{x:-100},"in5")
    .to("#cta",.25,{scale:1.15,ease:Sine.easeOut})
        .to("#cta",.25,{scale:1,ease:Sine.easeIn})

   
    		/*.to("#turkey",.25,{y:-15,scaleY:1.05,ease:Expo.easeOut},"jump")
				.to("#turkey",.15,{rotation:12,ease:Sine.easeOut},"jump")
				.to("#turkey",.2,{rotation:-10,y:-12,ease:Sine.easeIn},"-=.1")*/
				//.to("#turkey",.15,{rotation:0},"jumpdown")
      // adTl.add("turkey")
    
		

			
};

replay=function(){
	adTl.restart();
}



