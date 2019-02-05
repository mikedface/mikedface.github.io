
var container, content,adTl, text1, loop,text2,hotspot;

		window.onload = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
		hotspot = document.getElementById("hotspot");
    hotspot.addEventListener("click", onHotSpotClick, false);
		hotspot.addEventListener("mouseover",onHotSpotOver,false);
		adTl = new TimelineMax();
		mouseTl=new TimelineMax();
    startAnimation();
 
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}
function onHotSpotOver(){
  mouseTl.add("start")
	.set("#cta_glimmer",{x:-90})
	.to("#cta_glimmer",.75,{x:210,easE:Power3.easeOut})
}
startAnimation = function() {
    
    adTl.add("startAd","+=.25")
		.set("#content_dc",{className:''})
		
	.staggerFrom(["#ellipse1","#ellipse2","#ellipse3"],1.75,{x:-150, y:-150,ease:Back. easeOut.config( 1.7)},.25)
	.staggerFrom(["#ellipse4","#ellipse5","#ellipse6"],1.75,{x:-50, y:-180,ease:Back. easeOut.config( 1.7)},.25,"-=1.5")
	.staggerFrom(["#ellipse7","#ellipse9"],1.5,{x:50, y:-150,ease:Back. easeOut.config( 1.7)},.25,"-=1.5")	
	.staggerFrom(["#ellipse8","#ellipse10"],1.5,{x:90, y:-150,ease:Back. easeOut.config( 1.3)},.25,"-=2")
	.from("#text2",1.5,{scale:1.25,opacity:0,ease:Power3.easeOut},"t2")

	.add("cta","+=1")
		.from("#text3",1.5,{opacity:0,ease:Power3.easeOut},"cta")
	.from("#cta",1.5,{opacity:0,ease:Power3.easeOut},"cta")
	.to("#cta_glimmer",.75,{x:210,easE:Power3.easeOut},"glimmer")
			.to("#text2_glimmer",.75,{x:245,easE:Power3.easeOut},"glimmer")


};
//
//replay=function(){
//	adTl.restart();
//}




