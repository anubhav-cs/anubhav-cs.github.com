/*
Copyright 2017 zUratva.com
*/



function setActiveMenuSytle() {

    
    var $menuList = $(".menu-bar a");
//    alert(document.URL + $menuList[0]);
    
    for(i = 0; i < $menuList.length; i++) {
        
//        alert(document.URL + $menuList[i]);
        if ( $menuList[i] == document.URL ) {
            $( $menuList[i]).css({background: 'linear-gradient(to bottom, \n\
                            #00cc99 0%, #006666 100%)'});
        }else {
            $($menuList[i]).css({'background-color': '#B8B8B8'});
        }
    }
}


$(function(){
setActiveMenuSytle();
});


$(function(){
    var $topHeaderPos   = $(".menu-bar").offset().top;
    
    function setLayout() {
        var $widthStore         = $(".menu-bar").parent().width() - 4;
        var $borderWidthMenuBar = 2 * parseFloat($(".menu-bar").css('border-top-width'));
        var $menuBarHeight      = $(".menu-bar").height() + $borderWidthMenuBar;
        var $bottomMenuBar      = $(".menu-bar").offset().top + $menuBarHeight;
        var $topBottomBar       = $(".bottom-bar").offset().top;
        var $heightSidePane = $topBottomBar - $bottomMenuBar;
        
        $(".side-pane").css({height: $heightSidePane});
        
        if( $(window).scrollTop() > $topHeaderPos) {
            var $botMenuBarPos = $menuBarHeight;
            $(".menu-bar").css({position: 'fixed', top: '0px', width: $widthStore});
            $(".side-pane").css({position: 'fixed', top: $botMenuBarPos});
        }
        else {  
            $(".menu-bar").css({position: 'relative', top: '0px', width: 'auto'});
            $(".side-pane").css({position: 'relative', top: '0px'});
        }
    }
    
    setLayout();
    
    $(window).scroll(function() {
        setLayout();     
    });
    
    $(window).resize(function() {
        setLayout();
    });
});