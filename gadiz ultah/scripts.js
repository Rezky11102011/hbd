document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');
    const surpriseBtn = document.getElementById('surprise-btn');
    const videoOverlay = document.getElementById('video-overlay');
    const closeVideoBtn = document.getElementById('close-video');
    const rickrollPopup = document.getElementById('rickroll-popup');
    const closeRickrollBtn = document.getElementById('close-rickroll');
    const rickrollVideo = document.getElementById('rickroll-video');

    // Show popup
    setTimeout(() => {
        popup.classList.add('show');
    }, 1000); // Tampilkan popup setelah 1 detik

    // Close popup
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    // Show video overlay and play video
    surpriseBtn.addEventListener('click', () => {
        videoOverlay.classList.add('show');
        rickrollVideo.play(); // Memutar video otomatis
    });

    // Close video overlay and show Rickroll popup
    closeVideoBtn.addEventListener('click', () => {
        rickrollVideo.pause(); // Memberhentikan video saat overlay ditutup
        videoOverlay.classList.remove('show');
        rickrollPopup.classList.add('show');
    });

    // Close Rickroll popup
    closeRickrollBtn.addEventListener('click', () => {
        rickrollPopup.classList.remove('show');
    });
});
