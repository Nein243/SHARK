let burgerBtn = document.querySelector('.header__menu__burger');
let burgerMenu = document.querySelector('.header__menu');
let headerLink = document.querySelectorAll('.header__menu__link');
let selectLanguages = document.querySelector('.header__languages')

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    selectLanguages.classList.toggle('active');
});

headerLink.forEach(function (i) {
    i.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
        selectLanguages.classList.remove('active');
    })
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const BlockId = anchor.getAttribute('href')
        document.querySelector('' + BlockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// let summaries = document.querySelectorAll('[data-name="accordion-summary"]');
// let summariesDecor = document.querySelectorAll('[data-services-active]');
// console.log(summariesDecor)

// summaries.forEach(function(i){
//     i.addEventListener('click', showContent);
//     i.addEventListener('click', changeDecor);
// })

// function showContent(){
//     this.nextElementSibling.classList.toggle('hidden');
// }
// function changeDecor(){
//     summariesDecor.classList.toggle('active');
// }



// summaries.forEach(function(i){
//     // let summariesBtn = i.lastChild;
//     // console.log(summariesBtn)
//     // i.addEventListener('click', function(){

//     //     summariesBtn.classList.remove('active'); 
//     // })



// })
let languages = document.querySelector('[data-languages');
let selectLang = document.querySelectorAll('[data-language]');
const allLang = ['eng', 'ru', 'ua'];

selectLang.forEach(function (i) {
    i.addEventListener('click', changeURLLanguage);
})

function changeURLLanguage(){
    let language = this.dataset.language;
    location.href = window.location.pathname + '#' + language;
    changeLanguage();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    for (let key in langArr) {
        let elem = document.querySelector(`[data-lng="${key}"]`);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}


window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}

const popup = document.querySelector('.succes-popup')
const popupClose = document.querySelector('.succes-popup__button')

popupClose.addEventListener('click', function(){
    popup.classList.add('hidden')
})


