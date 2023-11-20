window.addEventListener('load',function(){
    let preload = document.querySelector('.preload');
    preload.style.display="none";

})



let iconbars = document.getElementById('icon-bars');
let headerphone = document.querySelector('.header-phone');
let iconclose = document.getElementById('icon-close');
iconbars.addEventListener('click',function () {
    headerphone.style.width="200px";
});
iconclose.addEventListener('click',function(){
    headerphone.style.width="0";

});
