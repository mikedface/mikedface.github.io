	document.addEventListener("DOMContentLoaded", function(event) {
			init();
		});


      var videoplayer,
          adcontainer,
          timeout,
          noVideoTimeout,
          clickThru,
          replayBtn,
					muteBtn,
					isMuted,
		  isEndFrame = false,
          isComplete = false,
          hasError = false;
		  muteReplay = false,
		  isFinal = false;

      var init = function()
      {
        replayBtn = document.getElementById('replay-btn');
				muteBtn = document.getElementById('mute-btn');
        adcontainer = document.getElementById( 'ad-container' );
        videoplayer = document.getElementById( 'videoplayer' );
        clickThru = document.getElementById( 'click-thru' );
				isMuted = true;
		document.getElementById('end-date1').style.display = 'none';
		document.getElementById('end-date2').style.display = 'none';
		document.getElementById('cta-btn1').style.display = 'none';
	document.getElementById('cta-btn2').style.display = 'none';
		document.getElementById('logo').style.display = 'none';
		document.getElementById('hand').style.display = 'none';

        clickThru.addEventListener('click', onClickthroughHandler , true );
        clickThru.addEventListener('mouseover', onRolloverHandler , true );
        clickThru.addEventListener('mouseout', onRolloutHandler , true );
        replayBtn.addEventListener("click", handleReplay);
				muteBtn.addEventListener("click",muteHandler);
        //videoplayer.src = videoSourceMPG;
        videoplayer.addEventListener('loadstart', onVideoStarted );
        videoplayer.addEventListener('play' , onVideoPlaying );
        videoplayer.addEventListener('ended' , onVideoEnded );
        videoplayer.addEventListener('timeupdate' , onVideoTimeUpdate );
        videoplayer.addEventListener('error' , onVideoError );

        playVideo();
		goAd();
      };

		var goAd = function()
	  {
		document.getElementById('cta-btn1').style.display = 'block';
		document.getElementById('cta-btn2').style.display = 'block';
		document.getElementById('logo').style.display = 'block';
		TweenLite.from("#cta-btn1", .5, {right:-80, ease: Power3.easeOut});
		TweenLite.from("#cta-btn2", .5, {right:-80, ease: Power3.easeOut});
		if (isMuted == false){
				videoplayer.volume = 1
			}
		else{
			videoplayer.volume =0;
		}
	  }

      var playVideo = function()
      {
        noVideoTimeout = setTimeout( skipToEndframe , 2000 );
        document.getElementById('videoplayer').play();

        //console.log(document.getElementById('videoplayer').readyState);
        /*if( document.getElementById('videoplayer').readyState == 0 )
        {
          skipToEndframe();
        }*/
      };

      var handleStudioExit = function()
      {

      };
			var muteHandler = function(){
				if (isMuted == true)
				{
					handleReplay();
					videoplayer.volume = 1;
					isMuted = false;
					console.log("muted")
					TweenLite.set(mute,{opacity:0})
					
					}
			else{
					videoplayer.volume = 0;
					isMuted = true;
					TweenLite.set(mute,{opacity:1})
				}
				
			}
      var onClickthroughHandler = function()
      {
        window.open( window.clickTag );
      };

      var onVideoStarted = function(e)
      {
        document.getElementById('videoplayer').style.display = 'block';
        clearTimeout(noVideoTimeout);
      };

      var onVideoPlaying = function(e)
      {
        document.getElementById('videoplayer').style.display = 'block';
        clearTimeout(noVideoTimeout);
      };

      var onVideoError = function(e)
      {
        skipToEndframe();
      };

      var onVideoEnded = function(e)
      {
	    replayBtn.style.opacity = 1;
		makeFinal();
		isComplete = true;
      };

      var onVideoTimeUpdate = function(e)
      {

		if(videoplayer.currentTime >= 14 && !isEndFrame)
		{
			testDate();
		}

			if(videoplayer.currentTime >= 14&& !isFinal)
		{
			makeFinal();
		}

      };

      var playVideoHandler = function(e)
      {
      };


      var skipToEndframe = function(e)
      {
        hasError = true;
		testDate();
      };

      var showEndFramePre = function()
      {
        clearTimeout(timeout);
        clearTimeout(noVideoTimeout);
		document.getElementById('end-date1').style.display = 'block';
		document.getElementById('hand').style.display = 'block';
				document.getElementById('mario').style.display = 'block';
					document.getElementById('mute-btn').style.display = 'none';
		    var adTl = new TimelineLite();

			adTl.add("start")	
			
			.set([mario,pack,hand],{opacity:1})
				.to(super2,.15,{opacity:1})
			.from(mario,.5,{top:"300px",ease:Power3.easeOut})
			.from(pack,.5,{left: "-300px",ease:Power3.easeOut})
			
			.from("#end-date1", .9,{top:-105, ease:Elastic.easeOut.config(.40, 0.25)})
		.from(hand, .5,{right:"-70px",ease:Power2.easeOut})
			
          if( hasError )
          {
           document.getElementById('videoplayer').style.display = 'none';
           document.getElementById('endframe-background-img').style.display = 'block';
          }
      };

	  var showEndFramePost = function()
      {
        clearTimeout(timeout);
        clearTimeout(noVideoTimeout);
		document.getElementById('end-date2').style.display = 'block';
		document.getElementById('hand').style.display = 'block';
		document.getElementById('mario').style.display = 'block';
		
		
	document.getElementById('mute-btn').style.display = 'none';
		    var adTl = new TimelineLite();

			adTl.add("start")	
			
			.set([mario,pack,hand],{opacity:1})
				.to(super2,.15,{opacity:1})
			.from(mario,.5,{top:"300px",ease:Power3.easeOut})
			.from(pack,.5,{left: "-300px",ease:Power3.easeOut})
			
			.from("#end-date2", .9,{top:-105, ease:Elastic.easeOut.config(.40, 0.25)})
		.from(hand, .5,{right:"-70px",ease:Power2.easeOut})
			

          if( hasError )
          {
            document.getElementById('videoplayer').style.display = 'none';
            document.getElementById('endframe-background-img').style.display = 'block';
          }
      };

	  	  var makeFinal = function()
	  {
		  isFinal = true;

	   }


	  //___________________________ CTA ___________________________________________

      var onRolloverHandler = function(e)
      {
	TweenLite.to("#cta-btn2", .1, {alpha:1});
	TweenLite.to("#cta-btn1", .1, {alpha:0});
	TweenLite.to(carrot,.25,{left:290,ease:Power2.easeOut})

      }

      var onRolloutHandler = function(e)
      {

				TweenLite.to("#cta-btn2", .1, {alpha:0});
				TweenLite.to("#cta-btn1", .1, {alpha:1});
				TweenLite.to(carrot,.25,{left:284,ease:Power2.easeOut})
      }


		  //___________________________ ^^^ cta ^^^^ ___________________________________

	  	  	//___________________________ replay ___________________________________________


	var handleReplay = function()
	{

		//if( isComplete )
		  //{
		    console.log("replaying")
					
			videoplayer.pause();
			videoplayer.currentTime = '0';
			videoplayer.play();
		
			goAd();

			isEndFrame = false,
			isComplete = false,
			hasError = false;

			replayBtn.style.opacity = 0;
		TweenLite.set([mario,pack,super2],{opacity:0})
		document.getElementById('mute-btn').style.display = 'block';
		document.getElementById('end-date1').style.display = 'none';
		document.getElementById('end-date2').style.display = 'none';
		document.getElementById('hand').style.display = 'none';
		document.getElementById('endframe-background-img').style.display = 'none';

			//}
	};


	//___________________________ ^^^ replay ^^^^ ___________________________________

	  //_____________________________ dateTester ___________________________________

		var releaseDate = new Date(2016, 11, 02, 0, 0, 0);
		var currentDate = new Date();

		if( getQueryVariable( 'date' ) )
		{
		var nDate = getQueryVariable( 'date' ).split('/');
		currentDate = new Date( nDate[2] , nDate[0] - 1 , nDate[1] , 24 , 0 , 0 , 0 );
		console.log("[[TUNE-IN ]] - TEST DATE SET = " + currentDate);
		}

	function testDate()
	{
		isEndFrame = true;

		document.getElementById('endframe-background-img').style.display = 'block';
		TweenLite.from("#endframe-background-img", .5, {alpha:0});


		var nn = currentDate.getTime();
		var ff = releaseDate.getTime();
 		console.log(currentDate);
		console.log(releaseDate);
		if (nn >= ff)
		{
			showEndFramePost();
			console.log("release date reached");
		}
		else
		{
			showEndFramePre();
			console.log("before release");
		}
	}

	function getQueryVariable(variable)
	{
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			 var pair = vars[i].split("=");
			 if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}


	//___________________________^^^ dateTester ^^^_________________________________
