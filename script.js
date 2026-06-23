/**
 * PINTEREST AESTHETIC LOVE SCRAPBOOK
 * Core Functional Scripting System
 */

// Global Context Variable Arrays — 40 Precise Romantic Quotes for Najla
const romanticQuotes = [
    "Senyummu adalah definisi ternyaman dari kata pulang, Najla.",
    "Di dekatmu, seluruh waktu terasa berjalan begitu tenang.",
    "Kamu tidak perlu menjadi sempurna untuk terlihat mengagumkan di mataku.",
    "Bersamamu, aku menemukan rasa bahagia yang sederhana namun mewah.",
    "Setiap sudut memori bersamamu selalu ingin kusimpan rapi di sini.",
    "Najla, kamu adalah karya seni terindah yang dikirim semesta untukku.",
    "Melihatmu tertawa lepas adalah pemandangan terfavorit dalam hariku.",
    "Cinta ini tumbuh alami, tanpa paksaan, penuh kehangatan.",
    "Terima kasih telah menjadi bagian paling manis di dalam duniaku.",
    "Di matamu, aku melihat masa depan yang ingin kurajut bersamamu.",
    "Kamu adalah ketenangan di tengah bisingnya isi kepala ini.",
    "Setiap hal kecil yang kamu lakukan selalu punya cara untuk membuatku kagum.",
    "Bukan tentang di mana kita berada, tapi tentang bersamamu aku merasa utuh.",
    "Menyayangimu adalah keputusan paling mudah yang pernah kuambil.",
    "Najla, kamu melengkapi setiap bait puisi yang coba kutulis.",
    "Tempat terbaik di dunia ini adalah berada di dalam ingatan hangatmu.",
    "Kamu membawa warna-warna baru yang belum pernah kulihat sebelumnya.",
    "Mendengar suaramu adalah obat terbaik untuk hari-hari yang melelahkan.",
    "Jangan pernah lupa bahwa kehadiranmu sangat berharga bagi diriku.",
    "Bersamamu, aku belajar arti mencintai dengan tulus dan elegan.",
    "Kamu adalah kombinasi sempurna antara kebaikan hati dan keindahan rasa.",
    "Menghabiskan waktu denganmu tak pernah sekalipun terasa sia-sia.",
    "Rasa nyaman bersamamu mengalahkan segala kemewahan di dunia.",
    "Najla, namamu adalah baris doa yang paling sering kukirim ke langit.",
    "Kamu selalu mampu mengubah hari yang mendung menjadi penuh cahaya.",
    "Detik yang kulalui bersamamu adalah konfeti kebahagiaan sejati.",
    "Cinta terbaik adalah yang membuatmu tumbuh menjadi versi terbaik dirimu.",
    "Kamu adalah alasan di balik senyum yang tiba-tiba muncul di wajahku.",
    "Di dalam dekap rasa bersamamu, aku menemukan perlindungan sejati.",
    "Setiap cerita bersamamu adalah halaman favorit di buku hidupku.",
    "Kamu tidak digantikan oleh apa pun, oleh siapa pun, sampai kapan pun.",
    "Najla, tetaplah menjadi jiwa yang hangat dan meneduhkan seperti ini.",
    "Kebaikanmu adalah alasan mengapa semesta begitu mencintaimu.",
    "Langkah kita mungkin sederhana, tapi tujuannya begitu bermakna.",
    "Kamu membuat hal-hal biasa menjadi terasa sangat istimewa.",
    "Mencintaimu terasa seperti mendengarkan lagu favorit berulang kali.",
    "Kamu adalah kejutan terindah yang tak pernah kuduga sebelumnya.",
    "Di dekatmu, aku merasa aman menjadi diriku yang seutuhnya.",
    "Terima kasih atas segala kesabaran dan kasih sayang yang kamu beri.",
    "Bersama Najla, selamanya adalah waktu yang sangat singkat."
];

// SVG Assets Map definitions for clean mathematical injection
const svgAssets = {
    heart: `<svg viewBox="0 0 24 24" fill="#ffb7c5" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="#ffe5ec" width="100%" height="100%"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    flower: `<svg viewBox="0 0 24 24" fill="#cce7ff" width="100%" height="100%"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="3"/><circle cx="12" cy="19" r="3"/><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/></svg>`
};

// DOM State Selectors
const ambientCanvas = document.getElementById('ambientCanvas');
const landingScreen = document.getElementById('landingScreen');
const mainScrapbook = document.getElementById('mainScrapbook');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const operatorEl = document.getElementById('operator');
const gameAnswerInput = document.getElementById('gameAnswer');
const btnUnlock = document.getElementById('btnUnlock');
const gameFeedback = document.getElementById('gameFeedback');
const pinterestGrid = document.getElementById('pinterestGrid');

// Audio System Controller
const bgMusic = document.getElementById('bgMusic');
const musicDisc = document.getElementById('musicDisc');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnMute = document.getElementById('btnMute');
const volumeSlider = document.getElementById('volumeSlider');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');
const iconVolume = document.getElementById('iconVolume');
const iconMuted = document.getElementById('iconMuted');

// Lightbox Selectors
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

// Internal Game Puzzle Logic State variables
let puzzleSolution = 0;

/**
 * Initializes Ambient Floating Particles Decoration Setup
 */
function initAmbientEngine() {
    const assetKeys = Object.keys(svgAssets);
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'svg-particle';
        
        const randomAsset = assetKeys[Math.floor(Math.random() * assetKeys.length)];
        particle.innerHTML = svgAssets[randomAsset];
        
        // Randomized procedural styling rules
        const size = Math.floor(Math.random() * 20) + 15; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * -20;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        ambientCanvas.appendChild(particle);
    }
}

/**
 * Generates dynamic premium math game puzzle equation
 */
function generateMathPuzzle() {
    const ops = ['+', '-', '*'];
    const selectedOp = ops[Math.floor(Math.random() * ops.length)];
    let n1 = Math.floor(Math.random() * 12) + 4;
    let n2 = Math.floor(Math.random() * 10) + 2;
    
    // Ensure logical formatting alignment
    if (selectedOp === '-') {
        if (n1 < n2) { const temp = n1; n1 = n2; n2 = temp; }
    }
    
    num1El.textContent = n1;
    num2El.textContent = selectedOp === '*' ? '×' : selectedOp;
    num2El.textContent = selectedOp === '-' ? '−' : num2El.textContent;
    num2El.textContent = selectedOp === '+' ? '+' : num2El.textContent;
    num2El.textContent = n2;
    
    if (selectedOp === '+') puzzleSolution = n1 + n2;
    else if (selectedOp === '-') puzzleSolution = n1 - n2;
    else if (selectedOp === '*') puzzleSolution = n1 * n2;
}

/**
 * Validates Game Answer Input and triggers advanced transit layer states
 */
function validateGameInput() {
    const userAnswer = parseInt(gameAnswerInput.value.trim());
    const card = document.querySelector('.gate-card');
    
    if (userAnswer === puzzleSolution) {
        gameFeedback.style.color = '#2e7d32';
        gameFeedback.textContent = "Akses diterima. Membuka scrapbook khusus Najla... ✨";
        
        // Execute smooth premium transit workflows
        setTimeout(() => {
            landingScreen.classList.remove('active');
            mainScrapbook.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Trigger automatic initialization music engine execution sequence safely
            attemptMusicAutoplay();
        }, 1200);
        
    } else {
        gameFeedback.style.color = '#c62828';
        gameFeedback.textContent = "Jawaban kurang tepat, coba hitung kembali ya sayang! 🤍";
        card.classList.add('shake');
        gameAnswerInput.value = '';
        setTimeout(() => card.classList.remove('shake'), 500);
    }
}

/**
 * Dynamically constructs the high fidelity Pinterest Masonry Image Grid Elements
 */
function buildPinterestGallery() {
    pinterestGrid.innerHTML = '';
    // Maps across standard defined asset configuration sequence index [1..8]
    for (let i = 1; i <= 8; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Safely extract a distinct non-repetitive quote for each image from array
        const textQuote = romanticQuotes[i - 1] || romanticQuotes[0];
        
        item.innerHTML = `
            <div class="image-container">
                <img src="assets/images/photo${i}.jpg" alt="Najla Memorabilia ${i}" loading="lazy">
            </div>
            <div class="gallery-caption">${textQuote.substring(0, 45)}...</div>
        `;
        
        // Bind programmatic high performance event listeners directly
        item.addEventListener('click', () => openInteractiveLightbox(`assets/images/photo${i}.jpg`, textQuote));
        
        // Premium 3D Interaction effect calculation bounds
        item.addEventListener('mousemove', (e) => handle3DTiltEffect(e, item));
        item.addEventListener('mouseleave', () => reset3DTiltEffect(item));
        
        pinterestGrid.appendChild(item);
    }
}

/**
 * High Performance 3D Elastic Mouse Tilt Calculation Matrix
 */
function handle3DTiltEffect(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    const rotateX = ((y - midY) / midY) * -8; // Restricted boundary limits
    const rotateY = ((x - midX) / midX) * 8;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function reset3DTiltEffect(element) {
    element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
}

/**
 * Lightbox Fullscreen Orchestration View Engine
 */
function openInteractiveLightbox(src, text) {
    lightboxImg.src = src;
    lightboxCaption.textContent = text;
    lightboxModal.classList.add('active');
}

function closeInteractiveLightbox() {
    lightboxModal.classList.remove('active');
}

/**
 * Flip Interaction mechanism controller logic for custom 3D Gift cards
 */
function flipGiftCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

/**
 * Core Logic Architecture implementation for Star Fountain Wish Engine System
 */
function initWishStarEngine() {
    const btn = document.getElementById('btnMakeWish');
    const input = document.getElementById('wishInput');
    const sky = document.getElementById('wishSky');
    
    btn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        
        // Spawn premium programmatic flying stars upward
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'flying-star';
                star.innerHTML = '✦';
                star.style.left = `${Math.random() * 80 + 10}%`;
                star.style.bottom = '20px';
                star.style.transition = `all ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1)`;
                
                sky.appendChild(star);
                
                // Trigger dynamic browser frame reflow execution safely
                setTimeout(() => {
                    star.style.transform = `translateY(-350px) scale(0)`;
                    star.style.opacity = '0';
                }, 50);
                
                setTimeout(() => star.remove(), 3500);
            }, i * 80);
        }
        
        // Reset and lock panel states dynamically to validate UX submission patterns
        input.value = '';
        input.placeholder = "Harapanmu telah terbang menjadi rasi bintang... ✨";
        input.disabled = true;
        btn.disabled = true;
    });
}

/**
 * Premium Core Audio Engineering Pipeline and Interface Drivers
 */
function initMusicSystem() {
    btnPlayPause.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            updateMusicUIState(true);
        } else {
            bgMusic.pause();
            updateMusicUIState(false);
        }
    });

    btnMute.addEventListener('click', () => {
        bgMusic.muted = !bgMusic.muted;
        if (bgMusic.muted) {
            iconVolume.classList.add('hidden');
            iconMuted.classList.remove('hidden');
        } else {
            iconVolume.classList.remove('hidden');
            iconMuted.classList.add('hidden');
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        bgMusic.volume = e.target.value;
    });
}

function attemptMusicAutoplay() {
    // Standard modern multi-device audio autoplay authorization execution flow
    bgMusic.play().then(() => {
        updateMusicUIState(true);
    }).catch(() => {
        console.log("Autoplay blocked by device browser security context. Awaiting interactions.");
        updateMusicUIState(false);
    });
}

function updateMusicUIState(isPlaying) {
    if (isPlaying) {
        iconPlay.classList.add('hidden');
        iconPause.classList.remove('hidden');
        musicDisc.classList.add('playing');
    } else {
        iconPlay.classList.remove('hidden');
        iconPause.classList.add('hidden');
        musicDisc.classList.remove('playing');
    }
}

// Global Document Lifecycle initialization hook setup bind
document.addEventListener('DOMContentLoaded', () => {
    initAmbientEngine();
    generateMathPuzzle();
    buildPinterestGallery();
    initWishStarEngine();
    initMusicSystem();
    
    // Core event bindings triggers
    btnUnlock.addEventListener('click', validateGameInput);
    gameAnswerInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') validateGameInput(); });
    lightboxClose.addEventListener('click', closeInteractiveLightbox);
    lightboxModal.addEventListener('click', (e) => { if (e.target === lightboxModal) closeInteractiveLightbox(); });
});
