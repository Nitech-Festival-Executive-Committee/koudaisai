function faq(){
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 767) {
        $('.navbar-toggler-icon').click();
    }
}