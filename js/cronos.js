$(function(){$(".theme-selector").on("click",".flipper, .selector-close",function(e){$(this).closest(".theme-selector").toggleClass("selector-open"),e.preventDefault()})}),$(function(e){e("form").each(function(){var t=e(this),a={errorPlacement:function(e,t){var a=t.parent();a.hasClass("input-group")?e.insertAfter(a):a.hasClass("control")?e.insertAfter(t.next(".control-label")):e.insertAfter(t)}};"submit"==t.data("validate-on")&&e.extend(a,{onfocusout:!1,onkeyup:!1}),t.validate(a)}),e("form").submit(function(t){t.preventDefault();var a=e(this);if(!a.valid())return!1;var n=e("button[type=submit]",this);n.button("loading");var o,i,s,r,l,c=a.next(".response-message");return i=(o=a).attr("action"),s=o.serializeArray(),l=e.extend(!0,{},r,{url:i,type:"POST",data:s,dataType:"json"}),e.ajax(l).done(function(t){t.result?(a.trigger("form.submitted",[this,t]),e("input, textarea",a).removeClass("error"),e(".response",c).html(t.message),a.addClass("submitted"),a[0].reset()):t.errors&&e.each(t.errors,function(t,n){e("[name$='["+t+"]']",a).addClass("error").tooltip({title:n,placement:"bottom",trigger:"manual"}).tooltip("show").on("focus",function(){e(this).tooltip("destroy")})})}).fail(function(){e(".response",c).html(e("<span class='block'>Something went wrong.</span>"))}).always(function(){n.button("reset")}),!1})}),function(){"use strict";for(var e,t=function(){},a=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],n=a.length,o=window.console=window.console||{};n--;)o[e=a[n]]||(o[e]=t)}(),$(function(){"use strict";var e=$(".navigation"),t=90;function a(){$(window).scrollTop()>=t?e.addClass("navbar-sticky"):e.removeClass("navbar-sticky")}$(window).scroll(function(){a()}),a(),$("a.scrollto").on("click",function(e){e.preventDefault();var t=this.hash;$("html, body").stop().animate({scrollTop:$(t).offset().top},1200,"easeInOutExpo",function(){window.location.hash=t})}),$(".navbar-toggler").on("click",function(){e.toggleClass("navbar-expanded")}),AOS.init({offset:200,duration:1500,disable:"mobile"}),$(".swiper-container").each(function(){var e=$(this),t=e.data("sw-autoplay")||!1,a=e.data("sw-speed")||1100,n=e.data("sw-effect")||"slide",o=e.data("sw-show-items")||1,i=e.data("sw-loop")||!0,s=e.data("sw-centered-slides")||!0,r=o>1?20:0,l=e.data("sw-scroll-items")||1,c=e.data("sw-navigation"),d=e.data("sw-cover-stretch")||0,u=e.data("sw-cover-depth")||0,p=e.data("sw-cover-modifier")||1,f={pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}};c&&(f.onTransitionEnd=function(e){$(".active",c).removeClass("active"),$(".nav-item:eq("+e.realIndex+")",c).addClass("active")});var v=new Swiper(this,$.extend({loop:i,slidesPerGroup:l,spaceBetween:r,centeredSlides:s,breakpoints:!1,slidesPerView:o,autoplay:t,speed:a,paginationClickable:!0,autoplayDisableOnInteraction:!1,parallax:!0,effect:n,coverflow:{rotate:0,stretch:d,depth:u,modifier:p,slideShadows:!1}},f));c&&$(c).on("click",".nav-item",function(e){e.preventDefault();var t=$(this);if(t.hasClass("active"))return!1;var a=t.index();return v.slideTo(a+1),t.siblings(".active").removeClass("active"),t.addClass("active"),!1})})});