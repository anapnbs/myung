/* Scroll to Top */
const scrollTop = document.getElementById('scrolltoTop');
const brandOnScroll = document.querySelector('#brand-in-nav');

if (scrollTop) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // Top button show
            scrollTop.style.display = 'block';
            brandOnScroll.classList.add('d-lg-block');
        } else {
            // Top button disappear
            scrollTop.style.display = 'none';
            brandOnScroll.classList.remove('d-lg-block');
        }
    }

    scrollTop.addEventListener('click', () => window.scroll({ top: 0, behavior: 'smooth' }));
}

export default scroll