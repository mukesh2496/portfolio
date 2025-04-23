// Turn pages when clicking next or prev button
const PageTurnBtn = document.querySelectorAll('.nextprev-btn');

PageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact Me button click event
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            page.style.zIndex = 20 + index;
        }, index * 200 + 100);
    });
};

// Create reverse index function
let totalPages = pages.length;
let pageNumber = totalPages - 1;

function reverseIndex() {
    pageNumber = (pageNumber - 1 + totalPages) % totalPages;
}

// Back to Profile button click event
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            pages[pageNumber].style.zIndex = 10 + index;
        }, index * 200 + 100);
    });
};

// Opening animations
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
    setTimeout(() => (coverRight.style.zIndex = -1), 700);
}, 2100);

// Opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// Opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        pages[pageNumber].style.zIndex = 10 + index;
    }, index * 200 + 2100);
});
