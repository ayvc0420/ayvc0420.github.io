(function($){$.fn.orzScroll=function(setting){var windowCenter=$(window).height()/2,orzProperty={animation:"fadeOutRightBig",offset:0,delay:"0s"};var orzSetting=$.extend(orzProperty,setting);return this.each(function(){$(this).css("opacity","0").addClass("animated");var thisClass=$(this),thisClassTop=$(this).offset().top,thisClassBottom=thisClassTop+$(this).height()+orzProperty.offset,thisClassBottomOffset=thisClassBottom+windowCenter-130,thisAnimation=orzSetting.animation;$(window).scroll(function(){var currentScroll=
    $(this).scrollTop(),currentScrollCenter=currentScroll+$(this).height()/2,currentScroll=$(this).height();if(currentScrollCenter+250>thisClassTop&&currentScrollCenter+250<thisClassBottomOffset){thisClass.addClass(thisAnimation);thisClass.css("opacity","1");
    //偵測離開該元素後將透明度改為0
    // thisClass.css("-webkit-animation-delay",orzProperty.delay);thisClass.css("animation-delay",orzProperty.delay)}else if(currentScroll>thisClassBottom||currentScrollBottom<thisClassTop){thisClass.removeClass(thisAnimation);thisClass.css("opacity",
    // "0")
    }})})}})
    (jQuery);