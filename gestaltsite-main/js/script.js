$(document).ready(function() {
    $('.carousel').carousel({
        padding: 15
    });
    let autoPlayInterval;
    function startAutoplay() {
        autoPlayInterval = setInterval(function() {
            $('.carousel').carousel('next');
        }, 3000);
    }
    function stopAutoplay() {
        clearInterval(autoPlayInterval);
    }
    startAutoplay();
    let startX, endX;
    $('.carousel').on('touchstart mousedown', function(e) {
        stopAutoplay();
        if (e.type === 'touchstart') {
            startX = e.originalEvent.touches[0].clientX;
        } else {
            startX = e.clientX;
        }
    });
    $('.carousel').on('touchend mouseup', function(e) {
        if (e.type === 'touchend') {
            endX = e.originalEvent.changedTouches[0].clientX;
        } else {
            endX = e.clientX;
        }
        if (startX - endX > 10) {
            $(this).carousel('next');
        } else if (endX - startX > 10) {
            $(this).carousel('prev');
        }
        startAutoplay();
    });
    $('select').formSelect();

    //HAMBURGUER MENU

    $('.mobile-hamburguer').on('click', function() {
        $(this).toggleClass('change');
        $('.hamburguer-dropdown').slideToggle();
    });

    

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.mobile-hamburguer, .hamburguer-dropdown').length) {
            if ($('.hamburguer-dropdown').is(':visible')) {
                $('.mobile-hamburguer').removeClass('change');
                $('.hamburguer-dropdown').slideUp();
            }
        }
    });

    $('.menu-li').on('click', function(event) {
        $('.hamburguer-dropdown').slideUp();
        $('.mobile-hamburguer').removeClass('change');
    });
    $('.stopprop').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll <= 0) {
            $('.main-header').css('top', '0');
        } else if (currentScroll > lastScrollTop) {
            $('.main-header').css('transition', '0.3s');
            $('.main-header').css('top', '-120px');
        } else {
            $('.main-header').css('top', '0');
        }
        
        lastScrollTop = currentScroll;
    });
    

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 100) {
            $('.main-header').addClass('headercolor');
        } else {
            $('.main-header').removeClass('headercolor');
        }
    });


    $(document).ready(function(){
        $('.collapsible').collapsible();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
    
            
            history.pushState(null, null, ' ');
        });
    });

    var animtext = document.getElementById("animtext");

        // Define a posição inicial do texto fora da tela à direita
        var initialPosition = 0; // Largura da janela
        animtext.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

        window.addEventListener("scroll", function() {
            var scrollAmount = window.scrollY;

            // Move o texto para a esquerda conforme rola a página
            animtext.style.transform = `translateX(${initialPosition - scrollAmount}px)`; 
        });
//------------------------------------------------------------------
        var animtext2 = document.getElementById("animtext2");

        // Define a posição inicial do texto fora da tela à direita
        var initialPosition2 = 1300; // Largura da janela
        animtext2.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

        window.addEventListener("scroll", function() {
            var scrollAmount2 = window.scrollY;
            animtext2.style.transform = `translateX(${initialPosition2 - scrollAmount2}px)`; 
        });
//------------------------------------------------------------------
var initialPosition3 = 1300; // Largura da janela
animtext3.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

window.addEventListener("scroll", function() {
    var scrollAmount3 = window.scrollY;
    animtext3.style.transform = `translateX(${initialPosition3 - scrollAmount3}px)`; 
});
//------------------------------------------------------------------
var initialPosition4 = 2800; // Largura da janela
animtext4.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

window.addEventListener("scroll", function() {
    var scrollAmount4 = window.scrollY;
    animtext4.style.transform = `translateX(${initialPosition4 - scrollAmount4}px)`; 
});
//------------------------------------------------------------------
var initialPosition5 = 4000; // Largura da janela
animtext5.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

window.addEventListener("scroll", function() {
    var scrollAmount5 = window.scrollY;
    animtext5.style.transform = `translateX(${initialPosition5 - scrollAmount5}px)`; 
});
//------------------------------------------------------------------
var initialPosition6 = 4600; // Largura da janela
animtext6.style.transform = `translateX(${initialPosition}px)`; // Inicia fora da tela

window.addEventListener("scroll", function() {
    var scrollAmount6 = window.scrollY;
    animtext6.style.transform = `translateX(${initialPosition6 - scrollAmount6}px)`; 
});
});
