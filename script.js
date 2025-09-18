console.log('hello')
// Mobile menu টগল করার জন্য জাভাস্ক্রিপ্ট
// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

// dot navigation

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const dotLinks = document.querySelectorAll(".dot-link");

    function activateDot() {
      let scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          dotLinks.forEach((link) => {
            const dot = link.querySelector(".dot");
            if (link.dataset.target === id) {
              dot.classList.remove("bg-gray-400");
              dot.classList.add("bg-pink-500", "scale-110", "shadow-lg");
            } else {
              dot.classList.remove("bg-pink-500", "scale-110", "shadow-lg");
              dot.classList.add("bg-gray-400");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", activateDot);
    activateDot(); // Initial call on page load
  });


