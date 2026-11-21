document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const links = document.querySelectorAll("#navbar a");

    let currentPage = 0;
    let isScrolling = false;
    let scrollTimeout;

    function updateActiveLink() {
        links.forEach(link => link.classList.remove("active"));
        links[currentPage].classList.add("active");
    }

    window.addEventListener("wheel", (event) => {
        event.preventDefault();

        if (isScrolling) return;

        isScrolling = true;

        if (event.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, pages.length - 1);
        } else if (event.deltaY < 0) {
            currentPage = Math.max(currentPage - 1, 0);
        }

        updateActiveLink();

        window.scrollTo({
            top: pages[currentPage].offsetTop,
            behavior: "smooth"
        });

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1500);

    }, { passive: false });

    // Navbar clicks
    links.forEach((link, index) => {
        link.addEventListener("click", () => {

            if (isScrolling) return;

            currentPage = index;
            updateActiveLink();

            isScrolling = true;

            window.scrollTo({
                top: pages[currentPage].offsetTop,
                behavior: "smooth"
            });

            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 500);
        });
    });

});