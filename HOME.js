// let currentPage = 1;
// const totalPages = 7; 

// function changePage(page) {
//     currentPage = page;
//     const products = document.querySelectorAll('.product');
    
//     products.forEach(product => {
//         const pageNumber = parseInt(product.getAttribute('data-page'));
//         product.style.display = (pageNumber === page) ? 'block' : 'none';
//     });
// }

// function nextPage() {
//     if (currentPage < totalPages) {
//         changePage(currentPage + 1);
//     }
// }

// function prevPage() {
//     if (currentPage > 1) {
//         changePage(currentPage - 1);
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     changePage(currentPage);
// });




//   const newsletterForm = document.querySelector('#newsletter form');
//   newsletterForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for subscribing!');
//     newsletterForm.reset();
//   });

//  const toggle = document.getElementById("menu-toggle");
//   const nav = document.getElementById("nav");

//   toggle.addEventListener("click", () => {
//     nav.classList.toggle("active");
//     toggle.classList.toggle("open");
//   });


//  AOS.init({
//     duration: 1000, // animation duration in ms
//     once: true      // animation happens only once
//   });


let currentPage = 1;
const totalPages = 7;

function changePage(page) {
    currentPage = page;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const pageNumber = parseInt(product.getAttribute('data-page'));
        product.style.display = (pageNumber === page) ? 'block' : 'none';
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changePage(currentPage);

    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            toggle.classList.toggle("open");
        });
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});
