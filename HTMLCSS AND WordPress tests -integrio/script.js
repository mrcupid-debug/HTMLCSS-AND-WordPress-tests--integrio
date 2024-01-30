
    $(document).ready(function () {
        $('.hamburger-button a').click(function () {
            $('.mobile_menu').removeClass('hidden');
            $('.mobile_menu').addClass('active');
        });
        $('.exit-menu').click(function () {
            $('.mobile_menu').removeClass('active');
            $('.mobile_menu').addClass('hidden');
        });
    });
