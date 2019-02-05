function intializeRichload() {

    // Defining Timeline

    var tlMaster = new TimelineMax({paused:true, smoothChildTiming:true}),
        tlOpening = new TimelineMax(),
        tlEnding = new TimelineMax(),

        uscLogo = myFT.$("#logo"),

        container = myFT.$("#container"),
	
				
				text1A = myFT.$("#text1a"),
				text1B = myFT.$("#text1b"),
				text1C = myFT.$("#text1c"),
				text2A = myFT.$("#text2a"),
				text2B = myFT.$("#text2b"),
        text3A = myFT.$("#text3a"),
        text3B = myFT.$("#text3b"),
        text3C = myFT.$("#text3c"),
				text4A = myFT.$("#text4a"),
        text4B = myFT.$("#text4b"),
        text4C = myFT.$("#text4c"),
				
        holder = myFT.$("#holder"),
        lockup = myFT.$("#lockup"),
        
       // featuredDevice = myFT.$("#device"),
       // featuredLogo = myFT.$("#deviceLogo"),
        
       // featuredDeviceEnd = myFT.$("#deviceEnd"),
       // featuredLogoEnd = myFT.$("#deviceLogoEnd"),
        

        lines = myFT.$(".line"),
        line1 = myFT.$("#line-1"),
        line2 = myFT.$("#line-2"),
        line3 = myFT.$("#line-3"),
        line4 = myFT.$("#line-4"),
      
        snipe = myFT.$("#snipe"),
        snipeText = myFT.$("#snipeText"),
        snipeGradient = myFT.$("#snipeGradient"),

        ctaBtn = myFT.$("#cta_btn"),
        ctaText = myFT.$(".cta-text"),
        ctaGradient = myFT.$("#cta_gradient"),

        legalText = myFT.$("#legal_text"),
        legalIAText = myFT.$("#legal_ia_text"),
        // legalBtn = myFT.$("#legal_btn"),

        legalDetails = myFT.$("#legal_details"),
        legalDetailsText = myFT.$("#legal_details_text"),
        isLegalHidden = true,

        bg = myFT.$("#bg");


    // TweenMax.set(bg, {perspective:600});

    // rollover visual on cta
    bg[0].onmouseenter = onOverCTA;

    // ====================================================================
    // DYNAMIC IA SETUP
    // populate instantAd components

    myFT.on("instantads", function() {

        clickThroughURL = myFT.instantAds.clickTagURL;
        myFT.applyClickTag( bg, 1, clickThroughURL );
        // myFT.applyClickTag( ctaBtn, 1, clickThroughURL );

        // you can use a callback or
        var cb = function() {
            myFT.tracker( "bannerClick", "banner bg clicked" );
        };
        myFT.applyButton(bg, cb);

        // attach directly in anonymous, but you need all 3 params?
        // myFT.applyButton(ctaBtn, function() {
        //   myFT.tracker( "bannerClick", null, "cta button clicked" );
        // });

        // // ====================================================
        // // set the image src from IA vars
        // // position elements from IA vars using split function
        
        bg[0].style.backgroundImage = "url(" + myFT.instantAds.bgAsset + ")";   

        ctaBtn[0].style.left = splitValues(myFT.instantAds.ctaPosSize)[0];
        ctaBtn[0].style.top = splitValues(myFT.instantAds.ctaPosSize)[1];
        ctaBtn[0].style.width = splitValues(myFT.instantAds.ctaPosSize)[2];
        ctaBtn[0].style.height = splitValues(myFT.instantAds.ctaPosSize)[3];
        
        ctaText[0].innerHTML = myFT.instantAds.ctaText;
        ctaText[0].style.fontSize = splitValues(myFT.instantAds.ctaFontSize)[0];
        ctaText[0].style.lineHeight = splitValues(myFT.instantAds.ctaPosSize)[3];
        legalIAText[0].innerHTML = myFT.instantAds.legalText;
               
        holder[0].style.left = splitValues(myFT.instantAds.holderPosSize)[0];
        holder[0].style.top = splitValues(myFT.instantAds.holderPosSize)[1]
        
        
        holder[0].style.width = splitValues(myFT.instantAds.holderPosSize)[2];
        holder[0].style.height = splitValues(myFT.instantAds.holderPosSize)[3];
        
        endOffsetX = splitValues(myFT.instantAds.lockupEndTransform)[0];
        endOffsetY = splitValues(myFT.instantAds.lockupEndTransform)[1];
        endScale = splitValues(myFT.instantAds.lockupEndTransform)[2];
        endTransformOrigin = splitValues(myFT.instantAds.lockupEndTransform)[3];
        
			 	
			
        text1A[0].innerHTML = myFT.instantAds.text1a;
        text1A[0].style.fontSize = splitValues(myFT.instantAds.text1aFontProps)[0];
        text1A[0].style.lineHeight = splitValues(myFT.instantAds.text1aFontProps)[1];
        text1A[0].style.color = splitValues(myFT.instantAds.text1aFontProps)[2];
        
        text1A[0].style.left = splitValues(myFT.instantAds.text1aPosSize)[0];
        text1A[0].style.top = splitValues(myFT.instantAds.text1aPosSize)[1];
        text1A[0].style.width = splitValues(myFT.instantAds.text1aPosSize)[2];
        text1A[0].style.height = splitValues(myFT.instantAds.text1aPosSize)[3];
        
        text1B[0].innerHTML = myFT.instantAds.text1b;
        text1B[0].style.fontSize = splitValues(myFT.instantAds.text1bFontProps)[0];
        text1B[0].style.lineHeight = splitValues(myFT.instantAds.text1bFontProps)[1];
        text1B[0].style.color = splitValues(myFT.instantAds.text1bFontProps)[2];
        
        text1B[0].style.left = splitValues(myFT.instantAds.text1bPosSize)[0];
        text1B[0].style.top = splitValues(myFT.instantAds.text1bPosSize)[1];
        text1B[0].style.width = splitValues(myFT.instantAds.text1bPosSize)[2];
        text1B[0].style.height = splitValues(myFT.instantAds.text1bPosSize)[3];
        
        text1C[0].innerHTML = myFT.instantAds.text1c;
        text1C[0].style.fontSize = splitValues(myFT.instantAds.text1cFontProps)[0];
        text1C[0].style.lineHeight = splitValues(myFT.instantAds.text1cFontProps)[1];
        text1C[0].style.color = splitValues(myFT.instantAds.text1cFontProps)[2];
        
        text1C[0].style.left = splitValues(myFT.instantAds.text1cPosSize)[0];
        text1C[0].style.top = splitValues(myFT.instantAds.text1cPosSize)[1];
        text1C[0].style.width = splitValues(myFT.instantAds.text1cPosSize)[2];
        text1C[0].style.height = splitValues(myFT.instantAds.text1cPosSize)[3];
			
			
			
       	text2A[0].innerHTML = myFT.instantAds.text2a;
        text2A[0].style.fontSize = splitValues(myFT.instantAds.text2aFontProps)[0];
        text2A[0].style.lineHeight = splitValues(myFT.instantAds.text1aFontProps)[1];
        text2A[0].style.color = splitValues(myFT.instantAds.text2aFontProps)[2];
        
        text2A[0].style.left = splitValues(myFT.instantAds.text2aPosSize)[0];
        text2A[0].style.top = splitValues(myFT.instantAds.text2aPosSize)[1];
        text2A[0].style.width = splitValues(myFT.instantAds.text2aPosSize)[2];
        text2A[0].style.height = splitValues(myFT.instantAds.text2aPosSize)[3];
        
        text2B[0].innerHTML = myFT.instantAds.text2b;
        text2B[0].style.fontSize = splitValues(myFT.instantAds.text2bFontProps)[0];
        text2B[0].style.lineHeight = splitValues(myFT.instantAds.text2bFontProps)[1];
        text2B[0].style.color = splitValues(myFT.instantAds.text2bFontProps)[2];
        
        text2B[0].style.left = splitValues(myFT.instantAds.text2bPosSize)[0];
        text2B[0].style.top = splitValues(myFT.instantAds.text2bPosSize)[1];
        text2B[0].style.width = splitValues(myFT.instantAds.text2bPosSize)[2];
        text2B[0].style.height = splitValues(myFT.instantAds.text2bPosSize)[3];
			
			
			 	text3A[0].innerHTML = myFT.instantAds.text3a;
        text3A[0].style.fontSize = splitValues(myFT.instantAds.text3aFontProps)[0];
        text3A[0].style.lineHeight = splitValues(myFT.instantAds.text3aFontProps)[1];
        text3A[0].style.color = splitValues(myFT.instantAds.text3aFontProps)[2];
        
        text3A[0].style.left = splitValues(myFT.instantAds.text3aPosSize)[0];
        text3A[0].style.top = splitValues(myFT.instantAds.text3aPosSize)[1];
        text3A[0].style.width = splitValues(myFT.instantAds.text3aPosSize)[2];
        text3A[0].style.height = splitValues(myFT.instantAds.text3aPosSize)[3];
        
       text3B[0].innerHTML = myFT.instantAds.text3b;
        text3B[0].style.fontSize = splitValues(myFT.instantAds.text3bFontProps)[0];
        text3B[0].style.lineHeight = splitValues(myFT.instantAds.text3bFontProps)[1];
        text3B[0].style.color = splitValues(myFT.instantAds.text3bFontProps)[2];
        
        text3B[0].style.left = splitValues(myFT.instantAds.text3bPosSize)[0];
        text3B[0].style.top = splitValues(myFT.instantAds.text3bPosSize)[1];
        text3B[0].style.width = splitValues(myFT.instantAds.text3bPosSize)[2];
        text3B[0].style.height = splitValues(myFT.instantAds.text3bPosSize)[3];
        
        text3C[0].innerHTML = myFT.instantAds.text3c;
        text3C[0].style.fontSize = splitValues(myFT.instantAds.text3cFontProps)[0];
        text3C[0].style.lineHeight = splitValues(myFT.instantAds.text3cFontProps)[1];
        text3C[0].style.color = splitValues(myFT.instantAds.text3cFontProps)[2];
        
        text3C[0].style.left = splitValues(myFT.instantAds.text3cPosSize)[0];
        text3C[0].style.top = splitValues(myFT.instantAds.text3cPosSize)[1];
        text3C[0].style.width = splitValues(myFT.instantAds.text3cPosSize)[2];
        text3C[0].style.height = splitValues(myFT.instantAds.text3cPosSize)[3];
        
				text4A[0].innerHTML = myFT.instantAds.text4a;
        text4A[0].style.fontSize = splitValues(myFT.instantAds.text4aFontProps)[0];
        text4A[0].style.lineHeight = splitValues(myFT.instantAds.text4aFontProps)[1];
        text4A[0].style.color = splitValues(myFT.instantAds.text4aFontProps)[2];
        
        text4A[0].style.left = splitValues(myFT.instantAds.text4aPosSize)[0];
        text4A[0].style.top = splitValues(myFT.instantAds.text4aPosSize)[1];
        text4A[0].style.width = splitValues(myFT.instantAds.text4aPosSize)[2];
        text4A[0].style.height = splitValues(myFT.instantAds.text4aPosSize)[3];
        
        text4B[0].innerHTML = myFT.instantAds.text4b;
        text4B[0].style.fontSize = splitValues(myFT.instantAds.text4bFontProps)[0];
        text4B[0].style.lineHeight = splitValues(myFT.instantAds.text4bFontProps)[1];
        text4B[0].style.color = splitValues(myFT.instantAds.text4bFontProps)[2];
        
        text4B[0].style.left = splitValues(myFT.instantAds.text4bPosSize)[0];
        text4B[0].style.top = splitValues(myFT.instantAds.text4bPosSize)[1];
        text4B[0].style.width = splitValues(myFT.instantAds.text4bPosSize)[2];
        text4B[0].style.height = splitValues(myFT.instantAds.text4bPosSize)[3];
        
        text4C[0].innerHTML = myFT.instantAds.text4c;
        text4C[0].style.fontSize = splitValues(myFT.instantAds.text4cFontProps)[0];
        text4C[0].style.lineHeight = splitValues(myFT.instantAds.text4cFontProps)[1];
        text4C[0].style.color = splitValues(myFT.instantAds.text4cFontProps)[2];
        
        text4C[0].style.left = splitValues(myFT.instantAds.text4cPosSize)[0];
        text4C[0].style.top = splitValues(myFT.instantAds.text4cPosSize)[1];
        text4C[0].style.width = splitValues(myFT.instantAds.text4cPosSize)[2];
        text4C[0].style.height = splitValues(myFT.instantAds.text4cPosSize)[3];
        
        if (myFT.instantAds.showLines == "yes"){
            line1[0].style.display = "block";
            line1[0].style.left = splitValues(myFT.instantAds.line1PosSize)[0];
            line1[0].style.top = splitValues(myFT.instantAds.line1PosSize)[1];
            line1[0].style.width = splitValues(myFT.instantAds.line1PosSize)[2];
            line1[0].style.height = splitValues(myFT.instantAds.line1PosSize)[3];
            line1[0].style.backgroundColor = splitValues(myFT.instantAds.line1PosSize)[4];

            line2[0].style.display = "block";
            line2[0].style.left = splitValues(myFT.instantAds.line2PosSize)[0];
            line2[0].style.top = splitValues(myFT.instantAds.line2PosSize)[1];
            line2[0].style.width = splitValues(myFT.instantAds.line2PosSize)[2];
            line2[0].style.height = splitValues(myFT.instantAds.line2PosSize)[3];
            line2[0].style.backgroundColor = splitValues(myFT.instantAds.line1PosSize)[4];
            
            
           line3[0].style.display = "block";
            line3[0].style.left = splitValues(myFT.instantAds.line3PosSize)[0];
            line3[0].style.top = splitValues(myFT.instantAds.line3PosSize)[1];
            line3[0].style.width = splitValues(myFT.instantAds.line3PosSize)[2];
            line3[0].style.height = splitValues(myFT.instantAds.line3PosSize)[3];
            line3[0].style.backgroundColor = splitValues(myFT.instantAds.line3PosSize)[4];

            line4[0].style.display = "block";
            line4[0].style.left = splitValues(myFT.instantAds.line4PosSize)[0];
            line4[0].style.top = splitValues(myFT.instantAds.line4PosSize)[1];
            line4[0].style.width = splitValues(myFT.instantAds.line4PosSize)[2];
            line4[0].style.height = splitValues(myFT.instantAds.line4PosSize)[3];
            line4[0].style.backgroundColor = splitValues(myFT.instantAds.line4PosSize)[4];
            
        } else {
            line1[0].style.display = "none";
            line2[0].style.display = "none";
            line3[0].style.display = "none";
            line4[0].style.display = "none";
        }
        
        
        
        // legal text showing near CTA button
        
        legalText[0].style.left = splitValues(myFT.instantAds.legalTextPosSize)[0];
        legalText[0].style.top = splitValues(myFT.instantAds.legalTextPosSize)[1];
        legalText[0].style.width = splitValues(myFT.instantAds.legalTextPosSize)[2];
        legalText[0].style.height = splitValues(myFT.instantAds.legalTextPosSize)[3];
        
        legalText[0].style.fontSize = splitValues(myFT.instantAds.legalTextFontProps)[0];
        legalText[0].style.lineHeight = splitValues(myFT.instantAds.legalTextFontProps)[1];
        legalText[0].style.color = splitValues(myFT.instantAds.legalTextFontProps)[2];
        legalIAText[0].style.opacity = splitValues(myFT.instantAds.legalTextFontProps)[3];
        legalText[0].style.textAlign = splitValues(myFT.instantAds.legalTextFontProps)[4];

        // // check to see if there are legal details that would display on click
        if ( myFT.instantAds.legalDetailsText != "" ) {

            // legalBtn[0].style.display = "inline";
            legalDetails[0].style.display = "inline";
            legalDetailsText[0].innerHTML = myFT.instantAds.legalDetailsText;
            legalDetails[0].style.top = splitValues(myFT.instantAds.legalDetailsTextPosSize)[1];
            legalDetails[0].style.left = splitValues(myFT.instantAds.legalDetailsTextPosSize)[0];
            legalDetails[0].style.width = splitValues(myFT.instantAds.legalDetailsTextPosSize)[2];
            legalDetails[0].style.height = splitValues(myFT.instantAds.legalDetailsTextPosSize)[3];
        }
        
        if (myFT.instantAds.showSnipe == "yes" && myFT.instantAds.snipeText != ""){
            snipe[0].style.display = "flex";
            snipeText[0].innerHTML = myFT.instantAds.snipeText;
        } else {
            snipe[0].style.display = "none";
        }

        // ====================================================

        initAnimation();

    });

    function initAnimation() {
        CSSPlugin.defaultForce3D = true;
        
        tlOpening
          
            .to(bg, 0.25, {autoAlpha:1, ease:Power2.easeOut}, "start+=0.0")
            .to(container, 0.25, {autoAlpha:1, ease:Power2.easeOut}, "start+=0.0")
            //.to(uscLogo, 0.5, {autoAlpha:1, ease:Power2.easeOut}, "start+=0.0")
        
         .add('firstFrame', "+=0.75")
			 			.to(text1A, 0.8, {autoAlpha:1, ease:Power2.easeOut},"firstFrame")
        		.to(text1B, 0.8, {autoAlpha:1, ease:Power2.easeOut},"firstFrame")
						.to(text1C, 0.8, {autoAlpha:1, ease:Power2.easeOut},"firstFrame")
						
			
						.fromTo(['#pushFrame',"#logo2"],.75,{x:-300},{x:-200, ease:Back.easeOut.config( 2.5)},"firstFrame +=.75")
						.to('#whiteFrame',.75,{scaleX:.68,ease:Back.easeOut.config( 2.5)},"firstFrame +=.75")
					.add('push2','+=.35')
						.to(['#pushFrame',"#logo2"],.5,{x:-100,ease:Back.easeOut.config( 1.7)},"push2")
						.to('#whiteFrame',.5,{scaleX:.38,ease:Back.easeOut.config( 1.7)},"push2")
						.to(['#pushFrame',"#logo2"],.35,{x:-50,ease:Back.easeOut.config( 1.5)},"push3")
						.to('#whiteFrame',.35,{scaleX:.2,ease:Back.easeOut.config( 1.5)},"push3")
						.to(['#pushFrame',"#logo2"],.35,{x:0,ease:Back.easeOut.config( 1.3)},"push4")
						.to('#whiteFrame',.35,{scaleX:.0,ease:Back.easeOut.config( 1.3)},"push4")
						.set('#whiteFrame',{autoAlpha:0})
						.to('#pushFrame',.5,{opacity:0},"+=1.5")
						
				//	.to(uscLogo, 0.5, {autoAlpha:.5, ease:Power2.easeOut})
					.add('endFrame', "+=0.15")
					.add('linesG1In','endFrame+=0')
						.to("#logo2",.5,{scale:.7,x:-66,y:-37,ease:Power2.easeOut},"linesG1In")
						.to(text3A, 0.8, {autoAlpha:1, ease:Power2.easeOut}, "linesG1In")
						.to(text3B, 0.8, {autoAlpha:1, ease:Power2.easeOut}, "linesG1In+=.25")

						.set([line1,line2],{autoAlpha:1},"linesG1In")
						.fromTo(line1, 0.25, {scaleX:0.01, opacity:0, ease:Power2.easeOut, transformOrigin:"100% 50%"}, {scaleX:1, opacity:1, rotationZ:0.01}, "linesG1In")
						.fromTo(line2, 0.25, {scaleX:0.01, opacity:0, ease:Power2.easeOut, transformOrigin:"0% 50%"}, {scaleX:1, opacity:1,rotationZ:0.01}, "linesG1In")
						.to(text3C, 0.8, {autoAlpha:1, ease:Power2.easeOut},"-=.5")
						.from( ctaBtn, 0.25, {autoAlpha:0, ease:Power4.easeOut},"linesG1In")
            .from( ctaBtn, 0.5, {top:"+=50", ease:Power2.easeOut},"linesG1In" )
			
					.add('fourthFrame',"+=1.5")
					.add('linesG2In','fourthFrame+=1.5')
						 .to([text3B,line1,line2,text3C],.5,{opacity:0,y:5,ease:Power2.easeOut},"fourthFrame")
						.to(text4A, 0.8, {autoAlpha:1, ease:Power2.easeOut}, "fourthFrame")
						.from(text4A, 0.8, {y:20, ease:Power2.easeOut}, "fourthFrame")
						.to(text4B, 0.8, {autoAlpha:1, ease:Power2.easeOut}, "fourthFrame+=.25")
						.from(text4B, 0.8, {y:20, ease:Power2.easeOut}, "fourthFrame+=.25")
					
						//.set([line3,line2],{autoAlpha:1},"linesG2In")
					.fromTo(line3, 0.25, { opacity:0,y:-20, ease:Power2.easeOut,}, { opacity:1, }, "fourthFrame")
					.fromTo(line4, 0.25, { opacity:0,y:-20, ease:Power2.easeOut}, { opacity:1}, "fourthFrame")
						.to(text4C, 0.8, {autoAlpha:1, ease:Power2.easeOut}, "linesG2In")
						.to(text4B, .25,{scale:1.25, ease:Power2.easeInOut,yoyo:true,repeat:1})
						.from( legalText, 0.35, {autoAlpha:0}, "linesG1In" )
            .to(snipe, 0.35, {autoAlpha: 1}, "linesG1In" )
            .from(snipe, 0.25, {scale: 2}, "linesG1In" )
            .call( onOverCTA, [], this, "+=0.25")
						
					
						
			


        tlMaster
            .add(tlOpening)
        tlMaster.play();
   			//tlMaster.seek(7);
        // tlMaster.seek(10).resume(); // used for jump to point in param and then play
        // tlMaster.timeScale( 0.5 ); //sets timeScale to half-speed
        // tlMaster.addPause(4.8); // play to a point in time and then stop based on param
        // console.log("total duration: ", tlMaster.totalDuration().toFixed(2));

    }

    myFT.applyButton( legalText, function(){
        if (isLegalHidden) {
            showLegal();
        } else {
            hideLegal();
        }
    });

    myFT.applyButton( legalDetails, function(){
        hideLegal();
    });

    function showLegal() {
        TweenMax.to(legalDetails, 0.10, { autoAlpha:1} );
        //TweenMax.set(uscLogo, { autoAlpha:0} );
        myFT.tracker("legalClick", "show legal");
        isLegalHidden = false;
    }

    function hideLegal() {
        TweenMax.to(legalDetails, 0.10, {autoAlpha:0});
        //TweenMax.set(uscLogo, { autoAlpha:1} );
        myFT.tracker("legalClick", "hide legal");
        isLegalHidden = true;
    }

    function splitValues(values) {
        return values.split(',');
    }

    function onOverCTA() {

        TweenMax.set(ctaBtn, {transformOrigin:"center bottom"});
        TweenMax.to(ctaBtn, 0.2, {scale:1.08, boxShadow: "6px 16px 10px -8px rgba(0,0,0,0.2)", force3D:false, });
        TweenMax.to(ctaBtn, 0.2, {scale:1.0, boxShadow: "0px 2px 8px -2px rgba(0,0,0,0.4)", force3D:false}).delay(.3);
        TweenMax.set(ctaGradient, {x:0, force3D:false});
        TweenMax.to(ctaGradient, 0.5, {x:"+=350", ease:Power0.easeNone, force3D:false});
        //TweenMax.set(snipeGradient, {x:0, force3D:false});
        //TweenMax.to(snipeGradient, 0.5, {x:"+=200", ease:Power0.easeNone, force3D:false});

    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }


} // close the intializeRichload, using a call from base instead of an iife
