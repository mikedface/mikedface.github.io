  $(document).ready(function(){
    
        var adSize = document.getElementById("adSize");
        var adFrame = document.getElementById('ad_frame');
        var firstAd = $('div:first-child a:first-child');
        var firstConcept = $('.cncpt')[0];
        var firstConceptAd = $('.cncpt a')[0];
        var concept = $('.cncpt');
      
        
    //starting values
      //console.log(firstAd)
        adSize.innerHTML = "<p>" + firstAd.attr('data-width') +"x" + firstAd.attr('data-height')+ " " + firstAd.attr('data-version')+ "</p>";
        adFrame.width = firstAd.attr('data-width');
        adFrame.height = firstAd.attr('data-height');
        adFrame.src = firstAd.attr('data-banner');

        adFrame.onload = function(e){
                    //console.log("first load", firstAd, firstAd.hasClass('static'))
                    oniframeLoaded(e, firstAd.hasClass('static'))
                };
        $(firstConcept).show();
        $(firstConcept).siblings().hide();
        $(firstConceptAd).css('background-color','#444');
      
      
     /* $("#iFrame").contents().find("#someDiv")*/
      

      //console.log(adFrame , "\n" , firstAd,"\n",firstConceptAd,"\n",concept)
            
    //create navigation for each Ad
        $( ".cncpt a" ).each(function( index ) {  
            //console.log(index, this)
            $(this).click(function(){ 
                var tlFrame = new TimelineMax()
                var thisAd = $(this);
                tlFrame.set(adFrame,{opacity:0},"+=0.0");
                tlFrame.to(adFrame,0.3,{opacity:1},"+=0.2");
                adFrame.width = this.getAttribute('data-width');
                adFrame.height = this.getAttribute('data-height');
                adFrame.src = this.getAttribute('data-banner');
                adFrame.onload = function(e){
                    //console.log("on cncpt click" , thisAd.hasClass('static'))
                    oniframeLoaded(e, thisAd.hasClass('static'))
                };
                
                adFrame.name = this.getAttribute('data-version');
                $(this).css('background-color','#444');
                $(this).siblings().css('background-color','#ccc');
            });
            $(this).mouseenter(function(){
                adSize.innerHTML = "<p>" + this.getAttribute('data-width') +"x" + this.getAttribute('data-height')+" " + this.getAttribute('data-version')+ "</p>";
            });
            $(this).mouseleave(function(){
                adSize.innerHTML = "<p>" + adFrame.getAttribute('width') +"x" + adFrame.getAttribute('height')+" " + adFrame.name + "</p>";
            });
        });
        
        $( ".cncpt" ).each(function( index ) {
            $("#cncptName").append("<li id='"+ this.getAttribute('data-concept') +"'>" + this.getAttribute('data-concept') + "</li>");
            $("#cncptName li:first-child").css('color', '#444');
        }); 
        
        $( "li" ).each(function( index ) {
            var thisConcept = concept.get( index );
            var thisFirstAd = $('div a:first-child').get( index );
            $(this).click(function(){ 
               $(thisFirstAd).css('background-color', '#444'); 
               $(thisFirstAd).siblings().css('background-color', '#ccc'); 
               $(thisConcept).show();
               $(thisConcept).siblings().hide();   
               $(this).css('color', '#444');
               $(this).siblings().css('color', '#cccccc');
                adSize.innerHTML = "<p>" + $(thisFirstAd).attr('data-width') +"x" + $(thisFirstAd).attr('data-height')+" " + $(thisFirstAd).attr('data-version')+ "</p>";
                var tlFrame2 = new TimelineMax()
                var thisAd = $(this);
                tlFrame2.set(adFrame,{opacity:0},"+=0.0");
                adFrame.width = $(thisFirstAd).attr('data-width');
                adFrame.height = $(thisFirstAd).attr('data-height');
                tlFrame2.set(adFrame,{opacity:1},"+=0.2");
                adFrame.src = $(thisFirstAd).attr('data-banner');
                adFrame.onload = function(e){
                    //console.log("on li click", thisFirstAd)
                    oniframeLoaded(e,  $(thisFirstAd).hasClass('static'))
                };
                adFrame.name = $(thisFirstAd).attr('data-version');
            });
        });
        
        $('#replay').click(function(){ 
                adFrame.src = adFrame.src;
        });
      
        function oniframeLoaded(e, staticClass){
            //console.log('has class', staticClass);
            //console.log($(e.target))
            
            if(staticClass){
                $(e.target).contents().find("img").each(function( index, elm ) {
                    $( this ).css({
                        'width': '100%',
                        'height': 'auto',
                    });
                });
            }
        }
    });