function menuFunction(x) {
    x.classList.toggle("change");
}

$('#hamburger-menu').click(function() {
    $('#dropdown-menu').slideToggle("fast");
});

$('#dropdown-menuLinks a').click(function() {
    $('#dropdown-menu').slideToggle("fast");
    document.getElementById('hamburger-menu').classList.toggle("change");
});

$(window).on('resize', function(){
    var win = $(this);
    if (win.width() >= 768) {
        $('#dropdown-menu').hide()
        $('#hamburger-menu').attr('class', 'default')
    }
});