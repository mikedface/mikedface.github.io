var container,adTl, box, hotspot, txt1,txt1b,forTxt, box, subText 
		
window.onload = function() {
		container = document.getElementById("container_dc");
   	adTl = new TimelineMax();
    hotspot = document.getElementById('hotspot');
   	subText = document.getElementById('subText');
		
		
    addListeners();
};

addListeners = function() {
    //CTA/LOGO/GENERAL HOTSPOT EVENTS - REMOVE ONLY WITH CARE
    hotspot.addEventListener("click", onHotSpotClick, false);
    // ALL ADDITIONAL EVENT LISTNERS GO BELOW IN THIS FUNCTION
    startAnimation();
};

function onHotSpotClick(){
    window.open(window.clickTag,'_blank');
}
 
startAnimation = function() {
    //ALL animation code goes here...including 
//	{repeat:1,repeatDelay:1}
	

    adTl.add("startAd")
	
		

	
	
		.fromTo("#sunGradient",5,{y:170,opacity:0},{y:0,scale:1.5,opacity:1},"-=1")
		.fromTo("#sunRaysOrange",9,{rotation:0,opacity:0},{rotation:-270,opacity:1},"-=4")
			.add("sunup","-=10")
		.from("#sun",3,{y:"200",ease:Sine.easeOut},"sunup")
		.from("#celebra",1,{opacity:0,x:"-100",y:"30",ease:Expo.easeInOut},"sunup+=1")
		.from("#sol",1,{y:"200",opacity:0,ease:Power2.easeInOut},"sunup+=1.5")
		
	
	.add("end","-=6.75")
	
		.from("#recipie",.5,{x:"-200",ease:Power2.easeOut},"end")
	.to(["#celebra","#sol"],.5,{x:31,ease:Power2.easeOut},"end")
		.to([,"#sunContainer","#mountain"],.5,{x:39,ease:Power2.easeOut},"end")
//	.from("#ctaContainer",.25,{scale:0, ease:Back. easeOut.config( 1.7),},"end+=.5")
};

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

Element.prototype.removeClass = function(cls) {
    //console.log("removing class named: " + cls);
  if (this.hasClass(cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    this.className=this.className.replace(reg,' ');
  }
}

Element.prototype.addClass = function (cls) {
   // console.log("adding class named: " + cls);
  if (!this.hasClass(cls)) this.className += " "+cls;
}