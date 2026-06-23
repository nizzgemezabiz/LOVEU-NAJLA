/**
 * MASTER INTERACTIVE CONTROLLER — FAIL-SAFE VERSION 100000%
 * Fixed: Pointer Events Blocking, DOM Load Crashes, and Safe Element Targeting.
 */

// GLOBAL STATE MANAGERS
let currentMathAnswer = 0;
let appUnlocked = false;
let particlesArray = [];
let confettiArray = []; 

// COMPREHENSIVE ARRAY OF 50 ROMANTIC INDONESIAN SENTENCES
const romanticQuotes = [
    "Di antara miliaran fana di semesta, halaman ini kutujukan murni untuk keindahan namamu.",
    "Bagiku, mendengarkan caramu menceritakan hari-harimu adalah musik terbaik yang pernah ada.",
    "Menemukanmu adalah kebetulan yang paling terencana yang selalu kusyukuri setiap hari.",
    "Kehadiranmu melengkapi seluruh bait-bait puisi yang dulunya sempat kehilangan maknanya.",
    "Bersamamu, waktu berjalan begitu cepat, namun memori yang tertinggal terukir abadi.",
    "Setiap sudut dalam ingatan ini dipenuhi oleh caramu tersenyum dan menatap dunia.",
    "Kamu adalah ketenangan di tengah riuhnya hari, pelabuhan terakhir dari lelahnya pikiran.",
    "Tidak ada hari yang biasa saja semenjak hari pertama namamu mulai menetap di dalam doa.",
    "Bukan tentang seberapa jauh jarak berjalan, tapi tentang bersamamu setiap langkah terasa berarti.",
    "Kamu bagaikan pagi hari yang sejuk, membawa kehangatan dan selalu menyembuhkan.",
    "Jika rasa syukur bisa diwujudkan dalam wujud manusia, aku akan melihat caramu tersenyum.",
    "Menyayangimu adalah keputusan paling mudah yang pernah kubuat sepanjang hidupku.",
    "Bersamamu, aku menemukan versi terbaik dari diriku yang belum pernah kukenal sebelumnya.",
    "Terima kasih telah bersedia menjadi bagian penting dari cerita sederhana yang kutulis ini.",
    "Dunia mungkin berputar begitu cepat, namun di mataku, caramu menatapku selalu menghentikan waktu.",
    "Ada ketenangan yang tidak mampu dijelaskan kata-kata ketika namamu disebut dalam diam.",
    "Kamu adalah perpaduan dari seluruh kebaikan yang dikirimkan semesta untuk menjagaku.",
    "Setiap memori bersamamu tersimpan rapi, tidak akan memudar oleh berjalannya waktu.",
    "Melihatmu bahagia adalah tujuan utama dari seluruh usaha yang kulakukan saat ini.",
    "Kamu tidak perlu menjadi sempurna untuk terlihat menakjubkan di dalam duniaku.",
    "Sederhana bersamamu jauh lebih berharga daripada seluruh kemewahan yang ada di dunia.",
    "Kamu adalah alasan di balik senyuman tiba-tiba yang muncul di tengah hariku yang padat.",
    "Menatap matamu seperti membaca sebuah buku yang ceritanya tidak pernah ingin kuakhiri.",
    "Semoga garis takdir selalu berpihak untuk menjaga kebersamaan kita dalam waktu yang panjang.",
    "Kamu membawa warna-warna baru yang belum pernah ada sebelumnya di dalam kanvas hidupku.",
    "Bersamamu, aku belajar bahwa mendengarkan jauh lebih berharga ketika yang berbicara adalah kamu.",
    "Kehangatan tutur katamu selalu menjadi penawar paling ampuh bagi gundahnya hatiku.",
    "Kamu adalah bait terindah dari sekian banyak baris doa yang kupanjatkan pada malam hari.",
    "Setiap hal kecil yang kaulakukan selalu berhasil menumbuhkan rasa kagum yang baru.",
    "Tidak perlu ruang yang luas untuk bahagia, cukup bersamamu di sudut ruang yang sederhana.",
    "Kamu adalah rumah, tempat di mana aku bisa menjadi diriku sendiri tanpa rasa takut.",
    "Bersamamu, aku tidak pernah merasa sendirian dalam menghadapi rumitnya alur dunia.",
    "Senyummu memiliki kekuatan magis yang mampu meruntuhkan seluruh ego dan lelahku.",
    "Kamu adalah keindahan yang nyata, yang kehadirannya melampaui seluruh imajinasiku.",
    "Terima kasih telah menaruh percaya dan kebaikan di sepanjang langkah yang kita bagi.",
    "Setiap detik yang terlewati bersamamu adalah investasi kebahagiaan untuk masa depanku.",
    "Kamu adalah jawaban dari teka-teki panjang tentang arti kenyamanan yang sesungguhnya.",
    "Harapanku sederhana, semoga senyum di wajahmu tidak pernah kehilangan sinarnya.",
    "Kamu membuatku paham bahwa dicintai dengan tulus adalah anugerah terbesar dalam hidup.",
    "Mengenalmu adalah awal dari babak kehidupan terbaik yang pernah kutulis.",
    "Kamu selalu memiliki cara tersendiri untuk membuat hal biasa terasa sangat istimewa.",
    "Di mataku, kamu adalah harmoni terindah yang tercipta dari ketulusan hati.",
    "Kebersamaan kita mungkin sederhana, namun makna di dalamnya teramat mendalam.",
    "Kamu adalah pelangi yang muncul tepat setelah badai terberat dalam hidupku berlalu.",
    "Menjagamu tetap bahagia adalah janji sunyi yang selalu kuucapkan dalam hati.",
    "Kamu adalah bukti nyata bahwa kebahagiaan tidak selalu harus dicari di tempat yang jauh.",
    "Setiap percakapan denganmu selalu menjadi bagian hari yang paling kunantikan.",
    "Kamu adalah kedamaian yang kutemukan di antara riuhnya ambisi-ambisi dunia.",
    "Semoga hari-hari yang akan kita lewati selalu dipenuhi rasa hangat yang sama seperti saat ini.",
    "Untuk Najla, kamu adalah pusat dari segala rasa nyaman yang selalu ingin kupulangi."
];

// INITIALIZATION AFTER FULL DOM LOAD TO PREVENT CRASHES
document.addEventListener('DOMContentLoaded', () => {
    // [CRITICAL FIX] Memaksa Kanvas agar TIDAK menghalangi klik tombol
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        canvas.style.pointerEvents = 'none'; 
    }

    try { setupMathGame(); } catch(e) { console.error("Error Math:", e); }
    try { setupTextInjections(); } catch(e) { console.error("Error Text:", e); }
    try { setupInteractiveEvents(); } catch(e) { console.error("Error Events:", e); }
    try { setupMusicPlayer(); } catch(e) { console.error("Error Music:", e); }
    try { setupScrollAnimations(); } catch(e) { console.error("Error Scroll:", e); }
    try { setupCanvasParticles(); } catch(e) { console.error("Error Canvas:", e); }
});

// ==========================================================================
// 1. MATHEMATICAL GAME ENGINE & UNLOCK LOGIC
// ==========================================================================
function setupMathGame() {
    const num1 = Math.floor(Math.random() * 12) + 4;
    const num2 = Math.floor(Math.random() * 10) + 2;
    const operators = ['+', '-', '*'];
    const chosenOp = operators[Math.floor(Math.random() * operators.length)];
    
    let questionText = "";
    if (chosenOp === '+') {
        currentMathAnswer = num1 + num2;
        questionText = `${num1} + ${num2}`;
    } else if (chosenOp === '-') {
        currentMathAnswer = num1 - num2;
        questionText = `${num1} - ${num2}`;
    } else {
        currentMathAnswer = num1 * num2;
        questionText = `${num1} × ${num2}`;
    }
    
    const questionEl = document.getElementById('mathQuestion');
    if (questionEl) questionEl.innerText = questionText;

    const btnVerify = document.getElementById('btnVerify');
    const btnStart = document.getElementById('btnStartJourney');
    
    if (btnVerify) {
        btnVerify.addEventListener('click', () => {
            const answerInput = document.getElementById('mathAnswer');
            const userAns = parseInt(answerInput.value);
            const gameCard = document.getElementById('gameCard');
            
            if (userAns === currentMathAnswer) {
                triggerConfettiEffect();
                if (btnStart) {
                    btnStart.removeAttribute('disabled');
                    btnStart.classList.remove('locked-btn');
                    btnStart.classList.add('unlocked-now');
                    
                    const btnSpan = btnStart.querySelector('span');
                    if (btnSpan) btnSpan.innerText = "Buka Scrapbook";
                    
                    const lockIcon = btnStart.querySelector('.lock-icon');
                    if (lockIcon) lockIcon.remove();
                }
                if (answerInput) answerInput.blur();
            } else {
                if (gameCard) {
                    gameCard.classList.add('shake-animation');
                    setTimeout(() => { gameCard.classList.remove('shake-animation'); }, 400);
                }
                if (answerInput) answerInput.value = "";
            }
        });
    }

    if (btnStart) {
        btnStart.addEventListener('click', function() {
            if (this.hasAttribute('disabled')) return;
            
            appUnlocked = true;
            
            const opening = document.getElementById('opening');
            if (opening) opening.style.display = 'none';
            
            const mainContent = document.getElementById('mainContent');
            if (mainContent) mainContent.classList.add('content-visible');
            
            const mainNav = document.getElementById('mainNav');
            if (mainNav) mainNav.classList.add('unlocked');
            
            const musicPlayer = document.getElementById('musicPlayer');
            if (musicPlayer) musicPlayer.classList.add('show');
            
            attemptAutoplay();
            
            window.scrollTo({ top: 0, behavior: 'instant' });
            setTimeout(refreshIntersectionObservers, 200);
        });
    }
}

// ==========================================================================
// 2. ROMANTIC TEXT RANDOM INJECTION
// ==========================================================================
function setupTextInjections() {
    let pool = [...romanticQuotes];
    shuffleArray(pool);
    
    for (let i = 1; i <= 8; i++) {
        const el = document.getElementById(`quote-${i}`);
        if (el) el.innerText = pool[i - 1];
    }
    
    for (let j = 1; j <= 3; j++) {
        const elGift = document.getElementById(`giftQuote-${j}`);
        if (elGift) elGift.innerText = pool[8 + j];
    }
    
    const finalClosing = document.getElementById('finalClosingPhrase');
    if (finalClosing) finalClosing.innerText = pool[15];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================================================================
// 3. INTERACTIVE EVENTS MANAGEMENT (Cards, Envelope, Wishlist)
// ==========================================================================
function setupInteractiveEvents() {
    const cards = document.querySelectorAll('.scrapbook-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('.scrapbook-img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.setAttribute('src', img.getAttribute('src'));
                lightbox.classList.add('active');
            }
        });
    });
    
    const lightboxClose = document.getElementById('lightboxClose');
    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener('click', () => { lightbox.classList.remove('active'); });
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }

    const giftCards = document.querySelectorAll('.gift-card-3d');
    giftCards.forEach(gift => {
        gift.addEventListener('click', () => { gift.classList.toggle('flipped'); });
    });

    const envelope = document.getElementById('envelopeWrapper');
    let letterTyped = false;
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
            if (envelope.classList.contains('open') && !letterTyped) {
                letterTyped = true;
                triggerPremiumTypewriter();
            }
        });
    }

    renderStoredWishes();
    
    const btnSubmitWish = document.getElementById('btnSubmitWish');
    if (btnSubmitWish) {
        btnSubmitWish.addEventListener('click', () => {
            const txtInput = document.getElementById('wishInput');
            if (!txtInput) return;
            const wishVal = txtInput.value.trim();
            
            if (wishVal.length < 3) return;
            
            const timestamp = new Date().toLocaleDateString('id-ID', {
                day: 'numeric', month: 'short', year: 'numeric'
            });
            
            const newWish = { text: wishVal, date: timestamp };
            let existing = JSON.parse(localStorage.getItem('najla_wishes')) || [];
            existing.unshift(newWish);
            localStorage.setItem('najla_wishes', JSON.stringify(existing));
            
            txtInput.value = "";
            renderStoredWishes();
            triggerConfettiEffect();
        });
    }
}

function triggerPremiumTypewriter() {
    const target = document.getElementById('typewriterTarget');
    if (!target) return;
    
    const fullLetterString = "Najla,\n\nLewat rangkaian halaman digital ini, aku ingin mengabadikan segala hal tentang kita yang barangkali sulit diucapkan langsung oleh kata. Kamu adalah bab terbaik dari cerita panjang yang sedang kujalani saat ini. Kehadiranmu membawa kedamaian, senyummu menjadi pelipur lara, dan setiap waktu yang kita bagi selalu bertransformasi menjadi kenangan berharga.\n\nTerima kasih telah menjadi manusia yang penuh ketulusan, pendengar yang hangat, serta pelabuhan yang aman buat duniaku yang bising. Tetaplah berjalan bersamaku di masa-masa depan, melukis lebih banyak memori indah di kanvas waktu.\n\nDengan segenap rasa sayang,\nSeseorang yang mengagumi seluruh duniamu.";
    
    let index = 0;
    target.innerText = "";
    
    function type() {
        if (index < fullLetterString.length) {
            target.textContent += fullLetterString.charAt(index);
            index++;
            setTimeout(type, 35);
        }
    }
    type();
}

function renderStoredWishes() {
    const area = document.getElementById('wishesDisplayArea');
    if (!area) return;
    area.innerHTML = "";
    const existing = JSON.parse(localStorage.getItem('najla_wishes')) || [];
    
    existing.forEach(item => {
        const div = document.createElement('div');
        div.className = "wish-item";
        div.innerHTML = `
            <p class="wish-text">${escapeHtml(item.text)}</p>
            <span class="wish-time">${item.date}</span>
        `;
        area.appendChild(div);
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ==========================================================================
// 4. MUSIC PLAYER SYSTEM (Fail-Safe Checks added)
// ==========================================================================
let audio;
function setupMusicPlayer() {
    audio = document.getElementById('audioSource');
    const playPauseBtn = document.getElementById('btnPlayPause');
    const progressContainer = document.getElementById('progressBarContainer');
    const volumeSlider = document.getElementById('volumeControl');
    
    if (playPauseBtn) playPauseBtn.addEventListener('click', toggleAudioPlayback);
    
    if (audio) {
        const progressBarFill = document.getElementById('progressBarFill');
        audio.addEventListener('timeupdate', () => {
            if (audio.duration && progressBarFill) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressBarFill.style.width = `${percent}%`;
            }
        });
    }

    if (progressContainer && audio) {
        progressContainer.addEventListener('click', (e) => {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            if (audio.duration) audio.currentTime = (clickX / width) * audio.duration;
        });
    }

    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', (e) => { audio.volume = e.target.value; });
    }
}

function toggleAudioPlayback() {
    if (!audio) return;
    const playerWidget = document.getElementById('musicPlayer');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const disc = document.getElementById('albumDisc');
    const statusText = document.getElementById('playerStatus');

    if (audio.paused) {
        audio.play().then(() => {
            if (playerWidget) playerWidget.classList.add('playing');
            if (playIcon) playIcon.classList.add('display-none');
            if (pauseIcon) pauseIcon.classList.remove('display-none');
            if (disc) disc.style.animationPlayState = 'running';
            if (statusText) statusText.innerText = "Playing";
        }).catch(err => console.log("Playback blocked"));
    } else {
        audio.pause();
        if (playerWidget) playerWidget.classList.remove('playing');
        if (playIcon) playIcon.classList.remove('display-none');
        if (pauseIcon) pauseIcon.classList.add('display-none');
        if (disc) disc.style.animationPlayState = 'paused';
        if (statusText) statusText.innerText = "Paused";
    }
}

function attemptAutoplay() {
    if (!audio) return;
    audio.volume = 0.8;
    const playerWidget = document.getElementById('musicPlayer');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const disc = document.getElementById('albumDisc');
    const statusText = document.getElementById('playerStatus');

    audio.play().then(() => {
        if (playerWidget) playerWidget.classList.add('playing');
        if (playIcon) playIcon.classList.add('display-none');
        if (pauseIcon) pauseIcon.classList.remove('display-none');
        if (disc) disc.style.animationPlayState = 'running';
        if (statusText) statusText.innerText = "Playing";
    }).catch(() => {
        if (statusText) statusText.innerText = "Tap Play";
    });
}

// ==========================================================================
// 5. MOTION GRAPHICS & SCROLL OBSERVERS
// ==========================================================================
function setupScrollAnimations() {
    const nav = document.getElementById('mainNav');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (nav) {
                    if (window.scrollY > 50) nav.classList.add('scrolled');
                    else nav.classList.remove('scrolled');
                }
                
                const closingSec = document.getElementById('closing');
                if (closingSec) {
                    const rect = closingSec.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.6) closingSec.classList.add('active-night');
                    else closingSec.classList.remove('active-night');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

function refreshIntersectionObservers() {
    const revealElements = document.querySelectorAll('.reveal-element');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    if ('IntersectionObserver' in window) {
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        revealElements.forEach(el => elementObserver.observe(el));
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${id}`) item.classList.add('active');
                    });
                }
            });
        }, { threshold: 0.4, rootMargin: "-10% 0px -50% 0px" });
        
        sections.forEach(sec => sectionObserver.observe(sec));
    } else {
        // Fallback if browser doesn't support IntersectionObserver
        revealElements.forEach(el => el.classList.add('visible'));
    }
}

// ==========================================================================
// 6. FLOATING PARTICLES & CONFETTI ENGINE
// ==========================================================================
function setupCanvasParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return; // Fail-safe
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height + canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * -1 - 0.4;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.color = Math.random() > 0.5 ? '255, 192, 203' : '173, 216, 230';
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            if (this.y < -10) {
                this.y = canvas.height + 10;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initPool() {
        particlesArray = [];
        const count = Math.min(Math.floor(window.innerWidth / 15), 60);
        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle());
        }
    }
    initPool();
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particlesArray.forEach(p => { p.update(); p.draw(); });
        
        for (let j = confettiArray.length - 1; j >= 0; j--) {
            let cp = confettiArray[j];
            cp.y += cp.speedY;
            cp.x += cp.speedX;
            cp.rotation += cp.rotationSpeed;
            cp.opacity -= 0.006;
            
            if (cp.y > canvas.height || cp.opacity <= 0) {
                confettiArray.splice(j, 1);
                continue;
            }
            
            ctx.save();
            ctx.translate(cp.x, cp.y);
            ctx.rotate((cp.rotation * Math.PI) / 180);
            ctx.fillStyle = cp.color;
            ctx.globalAlpha = cp.opacity;
            ctx.fillRect(-cp.size / 2, -cp.size / 2, cp.size, cp.size);
            ctx.restore();
        }
        ctx.globalAlpha = 1.0;
        
        requestAnimationFrame(animate);
    }
    animate();
}

function triggerConfettiEffect() {
    const colors = ['#FF6B81', '#FFB6C1', '#70A1FF', '#FFEAA7', '#55E6C1'];
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    for (let i = 0; i < 75; i++) {
        confettiArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -60 - 20,
            size: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 4 + 3,
            speedX: Math.random() * 4 - 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 6 - 3,
            opacity: 1.0
        });
    }
}
