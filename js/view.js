/*
Copyright 2017 zUratva.com
*/

function setLayout($topHeaderPos) {

    var $borderWidthMenuBar = 
            2 * parseFloat($(".menu-bar").css('border-top-width'));
    var $menuBarHeight      = $(".menu-bar").height() + $borderWidthMenuBar;
    var $bottomMenuBar      = $(".menu-bar").offset().top + $menuBarHeight;
    var $topBottomBar       = $(".bottom-bar").offset().top;
    var $heightSidePane = $topBottomBar - $bottomMenuBar;
    
    $(".side-pane").css({height: $heightSidePane});
      
    if( $(window).scrollTop() > $topHeaderPos) 
    {
        fixMenuBar('lock');
    }
    else 
    {  
        fixMenuBar('unlock');
    }
}

function fixMenuBar($action) {
    
    var $widthStore             = $(".menu-bar").parent().width() - 4;
    var $borderWidthMenuBar     = 2 * parseFloat($(".menu-bar")
                                    .css('border-top-width'));
    var $borderWidthSiteHeader  = 2 * parseFloat($("#site-header")
                                    .css('border-top-width'));
    var $menuBarHeight          = $(".menu-bar").height() + $borderWidthMenuBar;
    var $siteHeaderHeight       = $("#site-header").height() 
                                    + $borderWidthSiteHeader;
    if($action === 'lock')
    {
        $(".menu-bar").css({position: 'fixed'
            , top: '0px', width: $widthStore});
        $(".side-pane").css({position: 'fixed'
            , top: $menuBarHeight});
        $(".more-menus").css({position: 'fixed'
            , top: $menuBarHeight, right: '5px'});
    }
    else{
        $(".menu-bar").css({position: 'relative'
            , top: '0px', width: 'auto'});
        $(".side-pane").css({position: 'relative'
            , top: '0px'});
        $(".more-menus").css({position: 'fixed'
            , top: ($menuBarHeight + $siteHeaderHeight), right: '5px'});
    }
}

function toggleMoreMenuItems() {
    
    if($(".more-menus").is(':visible')) 
    {
        $(".more-menus").hide();
        $(".more-icon").css({background:'transparent'});
    }else 
    {
        $(".more-menus").show();
        $(".more-menus").css({visibility: 'visible', display: 'block'});
        $(".more-icon").css({background
            :'linear-gradient(to bottom, #ffcc66 0%, #ff9966 100%)'});
    }
}

function toggleSidePane() {
    
    if($(".side-pane").is(':visible')) 
    {
        $(".side-pane").hide();
        $(".three-bar-icon").css({background:'transparent'});
    }else 
    {
        $(".side-pane").show();
        $(".three-bar-icon").css({background
            :'linear-gradient(to bottom, #ffcc66 0%, #ff9966 100%)'});
    }
}

function setSiteHeader() {
    
    var $MAX_TOLERABLE_WIDTH = 500;
    var $windowWidth = $(window).width();
    
    if($windowWidth < $MAX_TOLERABLE_WIDTH) 
    {
        $("#site-logo").hide();
    }else 
    {
        $("#site-logo").show();      
    }
}

function setMenuBar() {
    
    var $MIN_TOLERABLE_CONTENT_WIDTH = 750;
    var $bodyContentWidth            = $(".body-content").width();

    if($bodyContentWidth < $MIN_TOLERABLE_CONTENT_WIDTH) 
    {
        $(".body-content").css({"margin-left": '0px'});
        $(".side-pane").hide();
        $(".three-bar-icon").show();
    }else 
    {
        $(".body-content").css({"margin-left": '210px'});
        $(".side-pane").show();
        $(".three-bar-icon").hide();       
    }
}

function calcMenuListWidth() {
    
    var $menuList      = $(".menu-bar a");
    var $menuListWidth = 0;
    
    for(i = 0; i < $menuList.length; i++) 
    {
        $menuListWidth = $menuListWidth + $($menuList[i]).width() + 24;
    }

    return $menuListWidth + 4;
}

function makeClassVisible($class) {
    
    if ($($class).css("visibility") == 'hidden') 
    {
        $($class).css({visibility:'visible'});
    }
        
    if($($class).css("display") == 'none') 
    {
        $($class).css({display:'inline-block'});
    }
}

var $menuItemWidth = new Array;

function setDynamicMenuList() {
    
    var $menuList      = $(".menu-bar a");
    var $moreMenuList  = $(".more-menus a");
    var $menuListWidth = calcMenuListWidth();
    

    if($moreMenuList.length <= 0 && $menuListWidth < $(window).width()) 
    {
        $(".more-icon").hide();
    }else
    {
        makeClassVisible($(".more-icon"));
    }
    
      
    if($menuListWidth > $(window).width()) {
        for(var i = ($menuList.length - 3); (i > 1) && 
                ($menuListWidth > $(window).width()); i--) 
        {
            $menuItemWidth.push($($menuList[i]).width());
            $($menuList[i]).hide();
            $(".more-menus").prepend($menuList[i]);
            $($menuList[i]).show(); 
            $menuListWidth = calcMenuListWidth();
        }
    }
    else {
        for(var i = 0; ($menuItemWidth.length > 0) && 
                ($menuListWidth + $menuItemWidth[$menuItemWidth.length - 1] + 24 
                < $(window).width()); i++)
        {
            $menuItemWidth.pop();
            $($menuList[$menuList.length - 2]).before($moreMenuList[i]);
            $menuListWidth = calcMenuListWidth();
        }
    }
}

function setActiveMenuSytle() {

    var $menuList = $(".menu-bar a");

    for(var i = 0; i < $menuList.length; i++) 
    {

        if ($menuList[i] == document.URL) 
        {
            $($menuList[i]).css({background: 'linear-gradient(to bottom, \n\
                            #00cc99 0%, #006666 100%)'});
        }else 
        {
            $($menuList[i]).css({'background-color': 'transparent'});
        }
    }
}