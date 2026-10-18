
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");

    // Mobile Navigation Menu
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = menuToggle?.querySelector("i");

    if (menuToggle && navLinks) {
        menuToggle.setAttribute("aria-label", "Toggle navigation");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("role", "button");
        menuToggle.setAttribute("tabindex", "0");

        function toggleMenu() {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-xmark", isOpen);
            }
        }

        menuToggle.addEventListener("click", toggleMenu);

        menuToggle.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleMenu();
            }
        });

        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            });
        });

        // Close menu when clicking outside it
        document.addEventListener("click", (event) => {
            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

                if (menuIcon) {
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                }
            }
        });
    }

    // Active Navigation Link
    const allNavLinks = document.querySelectorAll(".nav-links a");

    allNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            allNavLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    // Profile Image Loading Check
    const profileImage = document.querySelector(".profile-image");

    if (profileImage) {
        profileImage.addEventListener("load", () => {
            console.log("Profile image loaded successfully!");
        });

        profileImage.addEventListener("error", () => {
            console.error(
                "Profile image could not be loaded. Check the image path."
            );
        });

        if (profileImage.complete && profileImage.naturalWidth === 0) {
            console.error("Profile image not found. Check assets/rowida.jpg.");
        }
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
