
document.addEventListener("DOMContentLoaded", function () {

    const envelopeButton = document.getElementById("envelopeButton");
    const openingPage = document.getElementById("openingPage");

    const backgroundMusic = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");
    const musicIcon = document.getElementById("musicIcon");
    const musicText = document.getElementById("musicText");

    // ===== MEMBUKA AMPLOP =====

    envelopeButton.addEventListener("click", function () {

        openingPage.classList.add("hide");

        setTimeout(function () {

            openingPage.style.display = "none";

            document.querySelectorAll(
                ".birthday-page, .message-page, .scrapbook-page, .candle-page, .closing-page"
            ).forEach(function (page) {
                page.classList.add("active");
            });

            window.scrollTo(0, 0);

        }, 800);

    });


    // ===== MUSIK =====

    musicButton.addEventListener("click", function () {

        if (backgroundMusic.paused) {

            backgroundMusic.play();

            musicIcon.classList.remove("bi-play-circle");
            musicIcon.classList.add("bi-pause-circle");

            musicText.textContent = "Musik sedang diputar";

        } else {

            backgroundMusic.pause();

            musicIcon.classList.remove("bi-pause-circle");
            musicIcon.classList.add("bi-play-circle");

            musicText.textContent = "Musik spesial untuk Saciga";

        }

    });

    backgroundMusic.volume = 0.5;


    // ===== ANIMASI SCROLL =====

    const revealElements = document.querySelectorAll(
        ".calendar-content, .message-content, .scrapbook-content, .closing-content"
    );

    const revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    // ===== CONFETTI =====

    function createConfetti() {

        const colors = [
            "#e8d2ad",
            "#a9b9ce",
            "#f3e8d6",
            "#d9c39f",
            "#ffffff"
        ];

        for (let i = 0; i < 55; i++) {

            const confetti = document.createElement("div");

            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            confetti.style.animationDelay = Math.random() * 1.5 + "s";
            confetti.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            document.body.appendChild(confetti);

            setTimeout(function () {
                confetti.remove();
            }, 5000);

        }
    }


    // ===== FOTO HATI BERJATUHAN =====

    function createPhotoHearts() {

        for (let i = 0; i < 15; i++) {

            const heart = document.createElement("div");
            const photo = document.createElement("img");

            heart.classList.add("photo-heart");

            photo.src = "assets/images/foto-aku.jpg";
            photo.alt = "Foto kenangan";

            heart.appendChild(photo);

            heart.style.left = Math.random() * 90 + "vw";
            heart.style.animationDelay = Math.random() * 3 + "s";
            heart.style.animationDuration =
                (4 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 8000);

        }

    }


    // ===== BLOW CANDLE =====

    const blowButton = document.getElementById("blowButton");
    const candleFlame = document.getElementById("candleFlame");
    const candleResult = document.getElementById("candleResult");

    blowButton.addEventListener("click", function () {

        candleFlame.classList.add("out");

        blowButton.disabled = true;
        blowButton.textContent = "Harapan sudah dikirim ♡";

        candleResult.classList.add("show");

        // Menampilkan confetti dan foto hati
        createConfetti();
        createPhotoHearts();

    });


    // ===== BACK TO TOP =====

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
