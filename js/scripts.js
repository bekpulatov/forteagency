const doit = (job) => {
    $(document).ready(job);
};

const sm = (job) => {
    if($(window).width() > 769) {
        job();
    }
};

const show_alert = () => {
    $('.alert').addClass('show');
    
    setTimeout(() => {
      $('.alert').removeClass('show');
    }, 5000)
}

doit(() => {
    $('nav .toggle-btn input').click(() => {
        $('nav .menu').toggleClass('active');
        $('body').toggleClass('overhidden');
    });
});

doit(() => {
    if($(window).width() < 768) {
        $('nav .menu li a').click(() => {
            $('nav .menu').removeClass('active');
            $('body').removeClass('overhidden');
            $('nav .toggle-btn input').prop('checked', false);
        });

        $('.nav_action a').click(() => {
            $('nav .menu').removeClass('active');
            $('body').removeClass('overhidden');
            $('nav .toggle-btn input').prop('checked', false);
        });
    }
});

// doit(() => {
//     sm(() => {
//         const headertl = gsap.timeline({
//             defaults: {
//                 duration: .8,
//                 ease: "Power2.in"
//             }
//         });
    
//         // headertl.fromTo('header h1', {opacity: 0, y: 50}, {opacity: 1, y: 0});
//         headertl.fromTo('.header_content', {opacity: 0, y: 150}, {opacity: 1, y: 0}, "<50%");
//         headertl.fromTo('.header_desc', {opacity: 0}, {opacity: 1});
//         headertl.fromTo('.header_content .btn', {opacity: 0, y: 30}, {opacity: 1, y: 0}, "<10%");
//     });
// });

// doit(() => {
//     sm(() => {
//         const triggertl = gsap.timeline({
//             defaults: {
//                 duration: .6
//             },
//             scrollTrigger: {
//                 trigger: 'header',
//                 start: '-100%',
//             }
//         });
    
//         triggertl.fromTo('.header_triggers .item', {opacity: 0, y: 50}, {opacity: 1, y: 0, stagger: '.15'});
//     });
// });

doit(() => {
    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    scrollToAnchor();
});

doit(() => {
    // Маска для поля Телефон
    $('.maskedPhone').mask("+0000000000000", {autoclear: false, placeholder:" "});

    $('.consult_form form').submit(e => {
        e.preventDefault();
        $('.consult_form form button .loader').css({
            opacity: 1
        });

        setTimeout(() => {
            $.ajax({
                method: "POST",
                url: 'https://forteagency.io/send.php',
                data: $(e.currentTarget).serialize(),
            })
            .done(function () {
                e.target.reset();
                $('.consult_form form button .loader').css({
                    opacity: 0
                });
                show_alert();
            });
        }, 3000);
    });
});

doit(() => {
    $('.consult_form input').blur(function() {
        if($(this).val()) {
            $(this).parents().addClass('filled');
        }else {
            $(this).parents().removeClass('filled');
        }
        setTimeout(() => {
            if($(this).val()) {
                $(this).parents().addClass('filled');
            }else {
                $(this).parents().removeClass('filled');
            }
        }, 50);
    });

    $('.consult_form input').change(function() {
        if($(this).val()) {
            $(this).parents().addClass('filled');
        }else {
            $(this).parents().removeClass('filled');
        }
        setTimeout(() => {
            if($(this).val()) {
                $(this).parents().addClass('filled');
            }else {
                $(this).parents().removeClass('filled');
            }
        }, 50);
    });
});

// Navbar show & hide on scroll
doit(() => {
    let lastScrollTop = 0;
    const header_height = $('header').height() + $('nav').height() || 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        const height = $('nav').outerHeight();

        if (scrollTop > lastScrollTop && scrollTop > height) {
            $('nav').css({
                top: `-${height}px`
            });
        } else if (scrollTop < height) {
            $('nav').css({
                top: '0px'
            });
        } else if (scrollTop == 0 || scrollTop < 0) {
            $('nav').css({
                top: `0px`
            });
        } else if (scrollTop == header_height * .75 || scrollTop < header_height * .75) {
            $('nav').css({
                top: `-${height}px`
            });
        } else {
            $('nav').css({
                top: '0px'
            });
        }

        lastScrollTop = scrollTop;
    });
});

// Footer adaptive
doit(() => {
    const isMobile = $(window).width() < 768;
    if(isMobile) {
        $('footer .footer_mobile .footer_flex').append($('footer .logo'));
        $('footer .footer_mobile .footer_flex').append($('footer .footer_action'));
        $('footer .footer_mobile').append($('footer .footer_menu'));
        $('footer .footer_mobile').append($('footer .footer_socials'));
        $('.footer_desktop').remove();
    }
});

doit(() => {
    const swiper = new Swiper('.reviews .swiper', {
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
              spaceBetween: 50
            }
        }
    });
});

doit(() => {
    let video = document.querySelector('#video');
  if (!video) return;

  function toggleVideo() {
    if (video.paused) {
      video.play();
      $('#button_play').addClass('hide');
      video.controls = true;
    } else {
      video.pause();
    }
  }

  $('#button_play').click((e) => {
    e.stopPropagation();
    toggleVideo();
  });

  video.addEventListener('click', (e) => {
    if (e.target !== video) return;
    e.preventDefault();
    toggleVideo();
  });
});