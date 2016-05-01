;$(function(){
    
    setInterval(function(){
                    
                    var s = $('div#eliteTop img');  
                    var target = $('div.current');
                    var next = target.next();
                    
                    if(!next.length){
                        next = $('#eliteTop div:first');
                    }
                   
                   
                    target.removeClass('current').addClass('previous');
                    next.addClass('current')
                    .css({"opacity":0.0}).animate({"opacity":1.0}, 2000, 
                         function(){
                             next.removeClass('previous');
                         });
                    
                }, 
                            6000);
    
    
    
})