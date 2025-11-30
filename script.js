$(document).ready(function() {
    // Mobile Menu Toggle
    $('#mobile-menu').click(function() {
        $('.nav-links').toggleClass('active');
        
        // Animate icon
        const icon = $(this).find('i');
        if($('.nav-links').hasClass('active')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('nav').length) {
            $('.nav-links').removeClass('active');
            $('#mobile-menu i').removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Smooth scrolling for anchor links (if any)
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500, 'linear');
    });

    // Add hover effect to cards using JS for more complex interactions if needed
    // (CSS hover is already handling the main effects, but we can add a tilt effect here for extra "wow")
    $('.card').on('mousemove', function(e) {
        const card = $(this);
        const cardWidth = card.outerWidth();
        const cardHeight = card.outerHeight();
        const centerX = card.offset().left + cardWidth / 2;
        const centerY = card.offset().top + cardHeight / 2;
        const mouseX = e.pageX - centerX;
        const mouseY = e.pageY - centerY;
        
        const rotateX = (mouseY / cardHeight) * -5; // Max rotation deg
        const rotateY = (mouseX / cardWidth) * 5;

        card.css('transform', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    });

    $('.card').on('mouseleave', function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0) rotateY(0) scale(1)');
    });
});
