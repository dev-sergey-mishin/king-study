$(document).ready(() => {
    let $container = $('.slider');

    $container.map((index) => {
        let $slider = $($container[index]);
        let $prev = $slider.find('.prev');
        let $next = $slider.find('.next');
        let $slide = $slider.find('.slide');
        let currentSlide = 0;
        const slideLength = +$slide.length - 1;
        $($slide[currentSlide]).addClass('active');

        $slider.change(() => {
            $slide = $slider.find('.slide');
            $slide.map((slideIndex) => {
                let $currentSlide = $($slide[slideIndex]);
                if (slideIndex === currentSlide) {
                    $currentSlide.addClass('active');
                } else {
                    $currentSlide.removeClass('active');
                }
            });
        });

        $prev.click(() => {
            --currentSlide;
            if (currentSlide < 0) {
                currentSlide = 0;
            }
            $slider.change();
        });

        $next.click(() => {
            ++currentSlide;
            if (currentSlide > slideLength) {
                currentSlide = slideLength;
            }
            $slider.change();
        })
    });



});
