window.onscroll = function () {
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    if (scrollPos >= 960) {
        document.getElementsByClassName("projectsLink")[0].classList.add("pinkUnderline");
        document.getElementsByClassName("homeLink")[0].classList.remove("pinkUnderline");
    }
    else {
        document.getElementsByClassName("projectsLink")[0].classList.remove("pinkUnderline");
        document.getElementsByClassName("homeLink")[0].classList.add("pinkUnderline");
    }
};