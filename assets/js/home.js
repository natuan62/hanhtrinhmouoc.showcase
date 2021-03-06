setTimeout( function(){ 
    $('.video').addClass('hide');
    $('.video video').attr('autoplay','false');
    $('body').removeClass('hide');
    // Section 01
    $('.sec1 .info').addClass('show');
    $('.sec1 .info h2.tt-01').addClass('show');
    $('.sec1 .info h6.tt-01').addClass('show');
    $('.sec1 .info p').addClass('show');
    $('.sec1 h4.tt-01').addClass('show');
    $('.sec1 .tt-02').addClass('show');
    $('.sec1 .time-frame').addClass('show');
}  , 12000 );
var prize = 1846;
if ($('div').attr('prize') != undefined)
    prize = $('.prize').offset().top - 400;

$(window).scroll(function(){
    if($(window).scrollTop() > prize){
        $('.sec2-img4').addClass('show');
        $('.sec2-img5').addClass('show');
        $('.sec2-img6').addClass('show');
        $('.sec2-img7').addClass('show');
        $('.sec2-img8').addClass('show');
        $('.sec2-img9').addClass('show');
        $('.sec2-img10').addClass('show');
        $('.sec2-img11').addClass('show');
        $('.sec2-img12').addClass('show');
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Aug 11, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.time-frame > .date > .tt, .time-sp > ul > .date > .tt').html(days);
    $('.time-frame > .hour > .tt, .time-sp > ul > .hour > .tt').html(hours);
    $('.time-frame > .minute > .tt, .time-sp > ul > .minute > .tt').html(minutes);

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

setTimeout(function () {
    $('.time-sp').show();
}, 1100);
