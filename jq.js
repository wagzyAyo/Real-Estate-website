$(document).ready(function () {
    let offset = { offset: "90%" }

    $(".title-animate").waypoint(function () {
        $(".title-animate").addClass("animate__animated animate__fadeInLeft");
    }, offset);


    $(".title-animate01").waypoint(function () {
        $(".title-animate01").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".title-animate02").waypoint(function () {
        $(".title-animate02").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".title-animate03").waypoint(function () {
        $(".title-animate03").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".about-para").waypoint(function () {
        $(".about-para").addClass("animate__animated animate__fadeInRight");
    }, offset);

    $(".about-para1").waypoint(function () {
        $(".about-para1").addClass("animate__animated animate__fadeInRight");
    }, offset);

    $(".sell").waypoint(function () {
        $(".sell").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".buy").waypoint(function () {
        $(".buy").addClass("animate__animated animate__fadeInUp");
    }, offset);

    $(".evaluate").waypoint(function () {
        $(".evaluate").addClass("animate__animated animate__fadeInRight");
    }, offset);

    $(".negotiation").waypoint(function () {
        $(".negotiation").addClass("animate__animated animate__fadeInLeft");
    }, offset);

    $(".expert").waypoint(function () {
        $(".expert").addClass("animate__animated animate__fadeInUp");
    }, offset);

    $(".documentation").waypoint(function () {
        $(".documentation").addClass("animate__animated animate__fadeInRight");
    }, offset);


    $(".selling").waypoint(function () {
        $(".selling").addClass("animate__animated animate__fadeInLeft");
    }, offset);


    $(".buying").waypoint(function () {
        $(".buying").addClass("animate__animated animate__fadeInRight");
    }, offset);



    $(".contact-board").waypoint(function () {
        $(".contact-board").addClass("animate__animated animate__zoomIn");
    }, offset);

    $(".image").waypoint(function () {
        $(".image").addClass("animate__animated animate__zoomIn");
    }, offset);

});
function openMenu() {
    $("#navMenu").css('left', '200px')
}
function closeMenu() {
    $("#navMenu").css('left', '900px')
}
