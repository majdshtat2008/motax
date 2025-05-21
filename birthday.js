// birthday.js
// سكريبت جافاسكريبت لإضافة لمسات تفاعلية واحترافية لموقع عيد ميلاد عرين

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('birthday-music');
    const toggleBtn = document.getElementById('toggle-music');
    const musicIcon = document.getElementById('music-icon');
    let isPlaying = false;
    function playMusic() {
        if (music && !isPlaying) {
            music.currentTime = 0;
            music.load();
            music.muted = false;
            music.loop = true;
            music.volume = 0.7;
            const playPromise = music.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    toggleBtn.innerHTML = '<span id="music-icon">⏸️</span> إيقاف الموسيقى';
                }).catch((err) => {
                    toggleBtn.innerHTML = '<span id="music-icon">🔊</span> السماح بالصوت';
                    // لا تظهر alert مزعجة، فقط غير الزر
                });
            }
        } else if (music && isPlaying) {
            music.pause();
            isPlaying = false;
            toggleBtn.innerHTML = '<span id="music-icon">🔊</span> تشغيل الموسيقى';
        }
    }
    if (toggleBtn && music) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            playMusic();
        });
    }
    if (toggleBtn) toggleBtn.innerHTML = '<span id="music-icon">🔊</span> تشغيل الموسيقى';

    // لا تحاول التشغيل تلقائياً أبداً، فقط عبر الزر

    // تأثير قلوب متساقطة
    for (let i = 0; i < 30; i++) {
        setTimeout(createFallingHeart, Math.random() * 3000);
    }
});

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heart.style.fontSize = (18 + Math.random() * 22) + 'px';
    heart.textContent = Math.random() > 0.5 ? '💖' : '💙';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
