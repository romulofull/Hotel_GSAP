(function ($) {
    const controller = new ScrollMagic.Controller();

    gsap.from(".title", {
        scale: 0.8,  
        opacity: 0,
        duration: 3,
        ease: "power2.out",
    });

  
    gsap.to(".bcg", {
        backgroundPosition: "100% 0%",
        duration: 4,
        scrollTrigger: {
            trigger: ".slide",
            start: "top top",
            end: "bottom top",
            scrub: true, 
        }
    });

    $("a[href='#slide01']").on("click", function(e) {
        e.preventDefault(); 

       
        gsap.fromTo(".instalaciones", 
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            }
        );

        gsap.to("#slide01", {
            backgroundPosition: "100% 0%",
            duration: 4,
        });

        $('html, body').animate({
            scrollTop: $('#slide01').offset().top
        }, 800);
    });

/*------------------------*/


    $("a[href='#slide01']").on("click", function(e) {
        e.preventDefault(); 

        gsap.fromTo(".instalaciones", 
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            }
        );

   
        gsap.to("#slide01", {
            backgroundPosition: "100% 0%",
            duration: 4,
        });

        $('html, body').animate({
            scrollTop: $('#slide01').offset().top
        }, 800);
    });


    /*------------------------*/


    $("a[href='#slide02']").on("click", function(e) {
        e.preventDefault(); 

        gsap.fromTo(".llegando", 
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            }
        );

        gsap.to("#slide02", {
            backgroundPosition: "100% 0%",
            duration: 4,
        });

   
        $('html, body').animate({
            scrollTop: $('#slide02').offset().top
        }, 800);
    });


    /*----------------------------------*/
    $("a[href='#slide03']").on("click", function(e) {
        e.preventDefault(); 

        gsap.fromTo(".promocion", 
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            }
        );

        gsap.to("#slide03", {
            backgroundPosition: "100% 0%",
            duration: 4,
        });

        $('html, body').animate({
            scrollTop: $('#slide03').offset().top
        }, 800);
    });






})(jQuery);
