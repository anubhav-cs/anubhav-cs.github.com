/*
Copyright 2017 zUratva.com
*/

$(function(){
    var $topHeaderPos = $(".menu-bar").offset().top;
    setActiveMenuSytle();
    setMenuBar();
    setDynamicMenuList();
    setLayout($topHeaderPos);
    setSiteHeader();

    $(window).scroll(function() {
        setLayout($topHeaderPos);     
    });

    $(window).resize(function() {
        setLayout($topHeaderPos);
        setMenuBar();
        setDynamicMenuList();
        setSiteHeader();
    });
});
