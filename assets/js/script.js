// fungsi untuk menambahkan bacground pada header saat memasuki section about
document.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var about = document.querySelector(".about");

    if (about.getBoundingClientRect().top <= header.clientHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});




// fungsi untuk menambahkan class active pada mobile navbar sesuai posisi screen saat ini
const sections = document.querySelectorAll('section'); 

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    if (scrollTop === 0) {
        currentSection = 'home';
    }

    const navLinks = document.querySelectorAll('.monavbar-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
