import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.menu-button');
        this.menuContent = $('.site-header__menu-content');
        this.events();
        this.scroll();
    }
    
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    scroll(){
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            var winVH = $(window).height();
            var footerVH = $(footer).height();
            
            if (scroll >= winVH) {
                $(".goup").addClass("showup");
            } else {
                $(".goup").removeClass("showup");
            }

            $.fn.scrollBottom = function() { 
                return $(document).height() - this.scrollTop() - this.height(); 
            };

            if ($(window).scrollBottom() <= footerVH - 10) {
                $(".github").addClass("github--showup");
            } else {
                $(".github").removeClass("github--showup");
            }
        });
    }
    
    toggleTheMenu(){
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('menu-button--close-x');
    }
}

export default MobileMenu;