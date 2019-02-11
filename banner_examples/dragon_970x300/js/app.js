var $eventer=$({});
var $window = $(window);
var hasTouch = ('ontouchstart' in window);
var rtl = false;
var $body = $('body');
var $rtl = $(".rtlCopy");

function isMac() {
    return /macintosh|mac os x/i.test(navigator.userAgent);
}
function isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
}
var ua = window.navigator.userAgent.toLowerCase();
window.platform = {
    isFirefox: ua.match(/firefox/gi) !== null,
    isSafari: ua.match(/safari/gi) !== null,
    isChrome: ua.match(/Chrome/gi) !== null
};

function returnbrowser(){
    var browser='McChrome';
    if(isMac()&&platform.isChrome){
      browser = 'McChrome';
    }else if(isMac()&&platform.isSafari){
      browser = 'McSafari';
    }if(isMac()&&platform.isFirefox){
      browser = 'McFirefox';
    }if(isWindows()){
      browser = 'Windows';
    }if(isWindows()&&platform.isChrome){
      browser = 'WdChrome';
    }if(isWindows()&&platform.isFirefox){
      browser = 'WdFirefox';
    }
    return browser;
  } 
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
  }
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }

function copyBycreateJsElement(domElement){
  return new createjs.DOMElement(domElement);
}

function applyBlur(tl){   
    var blurElement = tl.target;
    if(!platform.isSafari){
        cssFilter = {filter:"blur(" + blurElement.a + "px)"};
    }else{
        cssFilter = {'-webkit-filter':"blur(" + blurElement.a + "px)"};
    }
    TweenMax.set(blurElement.element, cssFilter);
};

var $copy1=$("#copy1"),
    $copy1_1=$("#copy1 .copy1"),
    $copy2=$("#copy2"),
    $copy2_1=$("#copy2 .upto .copy1"),
    $copy2_2=$("#copy2 .copy .copy1"),
    $copy3=$("#copy3"),
    $copy3_1=$("#copy3 .copy1"),
    $copy4=$("#copy4"),
    $copy4_1=$("#copy4 .copy1"),
    $copy5=$("#copy5"),
    $copy5_1=$("#copy5 .upto .copy1"),
    $copy5_2=$("#copy5 .copy .copy1"),
    $hotspot=$("#hotspot"),
    $logo=$(".logo"),
    $cta=$(".cta"),
    $arrow,
    $ctaContent=$(".ctaContent"),
    $legal=$(".legal"),
    $legalCopy=$(".legalCopy"),
    $close=$(".close"),
    $disclaimerContainer=$(".disclaimerContainer"),
    $disclaimerContainerInner=$(".disclaimerContainerInner"),
    $preload=$(".preload"),
    $ctaCon=$(".ctaCon"),
    $legalCon=$(".legalCon"),
    $loading = $("#loading")[0],
    scope=this;

var canvas, stage, exportRoot;
var domElementAry=[];
var browserDifPotion = [];
var adContainer = $('#appRoot')[0];
function funsetDOMElement(){
  domElementAry=[
        /*************** "INTEL-POWERED 2 IN 1s" ****************/
        {dE:exportRoot.copyHolder.copy1,cE:$copy1[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:4},Windows:{x:0,y:5},WdChrome:{x:0,y:4}},
      
  
        {dE:exportRoot.copyHolder.copy2,cE:$copy2[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:4},Windows:{x:0,y:5},WdChrome:{x:0,y:4}},
      
        {dE:exportRoot.copyHolder.copy3,cE:$copy3[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:4},Windows:{x:0,y:5},WdChrome:{x:0,y:4}},
      
        {dE:exportRoot.copyHolder.copy4,cE:$copy4[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:4},Windows:{x:0,y:5},WdChrome:{x:0,y:4}},
      
        {dE:exportRoot.copyHolder.copy5,cE:$copy5[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:4},Windows:{x:0,y:5},WdChrome:{x:0,y:4}},
      
      
        /**************      CTA        ****************/
        {dE:exportRoot.CTA.copy_cta,cE:$cta[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:-1},Windows:{x:0,y:0},WdChrome:{x:0,y:0}},
        
        /***** "LEGAL" *****/              
        {dE:exportRoot.legal_btn.copy_legal_btn,cE:$legal[0],
                                McFirefox:{x:0,y:0},McSafari:{x:0,y:0},McChrome:{x:0,y:0},
                                WdFirefox:{x:0,y:0},Windows:{x:0,y:0},WdChrome:{x:0,y:0}}
        ];
}

function Browser(browser){
  switch(browser){
    case 'McChrome':
    break;
    case 'McSafari':
    $('space1').css('margin-left','3px');
    break;
    case 'McFirefox':
    $('space1').css('margin-left','3px');
    break;
    case 'Windows':
    $('space1').css('margin-left','3px');
    break;
    case 'WdChrome':
    $('space1').css('margin-left','3px');
    break;
    case 'WdFirefox':
    $('.copy_cta').css('word-spacing','-0.5px');
    break;
  }
}



var windowH = 300,windowW = 970,
    beginH = 300,beginW = 970;
var nowX=0,newY=0;


function init() {
var copyUrl = "copy.txt";
  var getCopy = $.get(copyUrl, function(data, state) {
      if (state == "success") {
          //console.log(data)
            if(typeof data == 'string')
           renderCopy(JSON.parse(data));
            else
              renderCopy(data);
      } else {}
  });
  animInit();
}

function animInit(){
    console.log("animInit complete")
   if($body.hasClass('rtl')){
        rtl = true;
        $rtl.each(function(index, item) {
            $(item).attr({
                dir: 'rtl'
            });
        });
    }

  canvas = document.getElementById("canvas");
  canvas.width = windowW;
  canvas.height = windowH;

  images = images||{};

  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(lib.properties.manifest);
}


function handleFileLoad(evt) {
  if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}


function handleComplete(evt) {
    
    console.log("load complete")
  //rename me below to your animation --> new lib.myFLASHNAME();
  exportRoot = new lib.dragon_masthead_970x300();
   
  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  stage.update();
  
    
  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
    
  exportRoot.copyHolder.addEventListener('copy2GO',function(){
       console.log('copy2GO');
      
        var newShowWidth = 560;
        var newShowHeight = 115;
      
        var startShowClip = "path(0px, 0px," + newShowHeight + "px, 0px)";
        var endShowClip = "path(0px,"+ newShowWidth + "px," + newShowHeight + "px, 0px";
        var thisLight = "#copy2 .light";
        
        var thisWhiteChip = "#copy2 .chipWhite";
        var thisBlurWhiteChip = {a:8, element: thisWhiteChip}
        
        var wChipTl = new TimelineMax();
            wChipTl.set(thisWhiteChip, {opacity:1})
            .add('start', "+=0.35")
            .to(thisWhiteChip,  0.5, {opacity:0, ease:Power0.easeNone}, "start") 
            .to(thisBlurWhiteChip, 0.5, {a:0, onUpdate:applyBlur, ease: Power3.easeIn, onUpdateParams: ["{self}"]}, "start") 
            
        var tl = new TimelineMax();
            tl.add('beginThis')         
            .set("#container2",{clip:startShowClip})
            .add('startWipe', "+=0.05")
            .to(thisLight,  0.3, {opacity:1, ease:Power1.easeIn}, "startWipe+=0.025")
            .to("#container2", 1, {clip:endShowClip, ease:Power1.easeInOut}, "startWipe")
            .to(thisLight,  1, {x:newShowWidth, ease:Power1.easeInOut}, "startWipe")
            .add(wChipTl, "startWipe+=0")  
            .add("end")
            .to(thisLight,  0.25, {opacity:0, ease:Power1.easeOut}, "end-=0.3" ) 
   });
        
   exportRoot.copyHolder.addEventListener('copy5GO',function(){
       console.log('copy5GO');
  
        var newShowWidth = 340;
        var newShowHeight = $("#container5")[0].offsetHeight + 6;
        var startShowClip = "path(0px, 0px," + newShowHeight + "px, 0px)";
        var endShowClip = "path(0px,"+ newShowWidth + "px," + newShowHeight + "px, 0px";
        var thisLight = "#copy5 .light";
        
        var tl = new TimelineMax();
            tl.add('beginThis')  
            .set("#container5",{clip:startShowClip})
            .add('startWipe', "+=0.1")
            .to(thisLight,  0.25, {opacity:1, ease:Expo.easeIn}, "startWipe")
            .to("#container5", 0.75, {clip:endShowClip, ease:Power1.easeInOut}, "startWipe")
            .to(thisLight,  0.75, {x:newShowWidth, ease:Power1.easeInOut}, "startWipe")
            .add("end")
            .to(thisLight,  0.25, {opacity:0, ease:Power1.easeOut}, "end-=0.3" )
   });
    
    
  funsetDOMElement();
  var nowBrowser = returnbrowser();
    // dE = flash movieclip from animation,js
    // cE = class name of HTML element from index.html
  for(var i=0;i<domElementAry.length;i++){
     var cE = copyBycreateJsElement(domElementAry[i].cE);
     cE.x = domElementAry[i][nowBrowser].x;
     cE.y = domElementAry[i][nowBrowser].y;
     domElementAry[i].dE.addChild(cE);
     addClass(domElementAry[i].cE,'hide')
  }
    
  $loading.className = 'hide';
  
  initAllEvnet();
  Browser(nowBrowser); 

  $('body').css('display','block');
}

var isShowlegal = false;

function initAllEvnet(){
    $(".legalhot").hide();
    $(".disclaimerContainer").hide();

    var legalHot = $('#lgHot')[0];
    var legal = $(".legal")[0];
    var disclaimerContainer = $(".disclaimerContainer")[0];
    var hotspot =  $("#hotspot")[0];
    var close = $(".close")[0];
    
    DOMLegalHot = copyBycreateJsElement(legalHot);
    DOMLegalEx = copyBycreateJsElement(disclaimerContainer);
    
    exportRoot.addChild(DOMLegalHot)
    exportRoot.addChild(DOMLegalEx)

    
  console.log("here", exportRoot.legal_btn)
   if(rtl){
    exportRoot.CTA.copy_cta.x = 16;
    exportRoot.CTA.arrow.x = 6;
  }else{
    exportRoot.CTA.arrow.x = 202.5;
  }
  
  createjs.Tween.get(DOMLegalEx).to({alpha:0},0,createjs.Ease.cubicInOut);
  createjs.Tween.get(DOMLegalHot).to({alpha:0},0,createjs.Ease.cubicInOut);

  hotspot.addEventListener('click',function(e){
        console.log('clicked hotspot')
        window.open('http://google.com');
        return false;
  })
  
  legal.addEventListener('mouseenter',exportRoot.legalOver);
  legal.addEventListener('mouseleave',exportRoot.legalOut);
  
    if(!hasTouch){hotspot.addEventListener("mouseenter",function(){
        if(rtl)
            createjs.Tween.get(exportRoot.CTA.arrow).wait(2).to({x:3},300,createjs.Ease.get(1));
        else
            createjs.Tween.get(exportRoot.CTA.arrow).wait(2).to({x:207.5},300,createjs.Ease.get(1));
            exportRoot.handleOver();
    })};
    
    
  if(!hasTouch){hotspot.addEventListener("mouseleave",function()
    {
      if(rtl){
            createjs.Tween.get(exportRoot.CTA.arrow).wait(2).to({x:6},300,createjs.Ease.get(1));
        }else{
            createjs.Tween.get(exportRoot.CTA.arrow).wait(2).to({x:202.5},300,createjs.Ease.get(1));
        }
      exportRoot.handleOut();
    })};
    
    
    
  close.addEventListener('click',function(){ 
    if(isShowlegal){
        isShowlegal = false;
        createjs.Tween.get(DOMLegalEx)
            .to({alpha:0},300,createjs.Ease.cubicInOut)
            .call(function(){ $(".disclaimerContainer").hide();});
        createjs.Tween.get(DOMLegalHot)
            .to({alpha:0},300,createjs.Ease.cubicInOut)
            .call(function(){ $(".legalhot").hide();});
     return false;
    }
  });
  legalHot.addEventListener('click',function(){
    return false;
  })
  
  legal.addEventListener('click',function(){
      console.log('legal click',exportRoot.legal_ex.stage)
    if(exportRoot.legal_ex.stage){
        
        
      if(!isShowlegal){
        isShowlegal = true;
        createjs.Tween.get(DOMLegalEx)
            .call(function(){ $(".disclaimerContainer").show();})
            .to({alpha:1},300,createjs.Ease.cubicInOut);
        createjs.Tween.get(DOMLegalHot)
            .call(function(){ $(".legalhot").show();})
            .to({alpha:1},300,createjs.Ease.cubicInOut);
      }
      return false;
    }
  })
}

function renderCopy(copy_data) {
    $copy1_1.html(copy_data.copy1);
    $copy2_1.html(copy_data.copy2_1);
    $copy2_2.html(copy_data.copy2_2);
    $copy3_1.html(copy_data.copy3);
    $copy4_1.html(copy_data.copy4);   
    $copy5_1.html(copy_data.copy5_1);
    $copy5_2.html(copy_data.copy5_2);    
    $ctaContent.html(copy_data.cta); 
    $legalCopy.html(copy_data.legal_btn);
    $disclaimerContainerInner.html(copy_data.legal);
    $disclaimerContainerInner[0].setAttribute("ss-container", !0);
    
    SimpleScrollbar.initAll();
}

function trigger(type){
  $eventer.trigger(type);
}
