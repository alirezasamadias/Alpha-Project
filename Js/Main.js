// site loader
const siteLoaderEl = document.querySelector('.site-loader');
const heroContainer = document.querySelector('.hero .container');
// header active
const headerEl = document.getElementById('header');
const heroEl = document.querySelector('.hero');
// show menu
const menuEl = document.querySelector('.menu');
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const btnSubMenuEl = document.querySelector('.submenu-btn');
const subMenuEl = document.querySelector('.submenu');
// show scroll up page
const scrollUpEl = document.querySelector('.scroll-up-page');

// site loader
document.onreadystatechange = ()=>{
    if (document.readyState == "complete") {
        siteLoaderEl.style.opacity = "0";
        siteLoaderEl.style.visibility = "hidden";
        heroContainer.style.display = 'flex';
    } else {
        heroContainer.style.display = 'none';
    }
};

// header active
// header set min-width:1024
const headerFix = ()=>{
    window.addEventListener('scroll',()=>{
        headerEl.style.top = '0';
        if (window.scrollY - heroEl.offsetHeight >= 0) {
            headerEl.classList.add('header-secondary');
        } else {
            headerEl.classList.remove('header-secondary');
        }
    });
};
// header set max-width:1024
const headerSlide = ()=>{
    let primaryScroll = window.scrollY;

    window.addEventListener('scroll',()=>{
        headerEl.classList.remove('header-secondary');

        const scrollNow = window.scrollY;
    
        if (scrollNow >= heroEl.offsetHeight - headerEl.offsetHeight){
            if (scrollNow >= primaryScroll){
                headerEl.style.top = `-${headerEl.offsetHeight}px`;
            } else {
                headerEl.style.top = '0';
            }

            primaryScroll = scrollNow;
        }

        // debug
        if (menuEl.classList.contains('show-menu')){
            headerEl.style.top = '0';
        }
    });
};
// by responsive
if (window.innerWidth <= 1024){
    headerSlide();
} else {
    headerFix();
}
// by resize
window.addEventListener('resize',()=>{
    if (window.innerWidth <= 1024){
        headerSlide();
    } else {
        headerFix();
    }
});

// show/hide menu
menuHamburgerEl.addEventListener('click',()=>{
    menuEl.classList.toggle('show-menu');
    // change menu hamburger icon
    menuHamburgerEl.classList.toggle('icon-close');
});
// btn sub menu
btnSubMenuEl.addEventListener('click',()=>{
    subMenuEl.classList.toggle('show-submenu');
    btnSubMenuEl.classList.toggle('icon-up');
});
// hide menu
window.addEventListener('click',(e)=>{
    if (e.target.parentElement.classList.contains('header-nav') || e.target.parentElement.classList.contains('menu-item')) {
        true;
    } else {
        menuEl.classList.remove('show-menu');
        menuHamburgerEl.classList.remove('icon-close');
    }
});

// show scroll up page
scrollUpEl.style.display = 'none';
window.addEventListener('scroll',()=>{
    if (heroEl.getBoundingClientRect().bottom - headerEl.offsetHeight >= 0){
        scrollUpEl.style.display = 'block';
        scrollUpEl.classList.add('scroll-up-hide');
    } else {
        scrollUpEl.style.display = 'block';
        scrollUpEl.classList.remove('scroll-up-hide');
    }
});