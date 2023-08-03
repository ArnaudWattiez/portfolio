const slidingNewsHeader = document.querySelector('.slide-in');
const slindingHeader= slidingNewsHeader.classList.add('active');

const slidingNewbienvenue = document.querySelector('.slide-in-bienvenu');
const slidingbienvenue= slidingNewbienvenue.classList.add('active');



window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    // console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1){
        
    }
})