// Global variables
let currentSection = 'welcome';
let musicStarted = false;
let randomKissInterval;
let currentPhotoIndex = 0;
let availableImages = [];

// 100+ Love Reasons Array
const loveReasons = [
    "I love your Attitude😘",
    "You make my Day With the Good morning's selfies attached would be better🥲",
    "Looking at Your Pics pleases my eyes🥰",
    "Your smile lights up my entire world 🌟",
    "The way your eyes sparkle when you're happy ✨",
    "Your beautiful smile makes my heart skip beats 💓",
    "I love how your face glows when you're excited 🥰",
    "Your natural beauty takes my breath away 😮",
    "The way you look when you're focused is adorable 🥺",
    "Your laugh lines are the cutest thing ever 😊",
    "I love your perfect nose and how it crinkles when you smile 👃",
    "Your cheeks are so cute I want to pinch them gently 🤏",
    "The way you tuck your hair behind your ear drives me crazy 🤯",
    "Your beautiful complexion is absolutely stunning ✨",
    "I love how you look first thing in the morning 🌅",
    "Your profile view is perfect in every way 📸",
    "The way you walk with confidence is so attractive 🚶‍♀️",
    "Your hands are perfect and I love holding them 🤝",
    "I could stare at your beautiful face all day long 😍",
    "You get more beautiful every single day 📈",
    "Your kindness towards everyone inspires me 🙏",
    "I love your strong and independent personality 💪",
    "Your intelligence turns me on more than anything 🧠",
    "The way you care about others shows your beautiful heart ❤️",
    "Your confidence is incredibly attractive 😎",
    "I love how you stand up for what you believe in ✊",
    "Your sense of humor always makes me laugh 😂",
    "The way you're so passionate about your goals 🔥",
    "I admire your determination and perseverance 🎯",
    "Your creative mind fascinates me every day 🎨",
    "I love how you're always willing to learn new things 📚",
    "Your wisdom beyond your years amazes me 🦉",
    "The way you handle challenges with grace 🌸",
    "Your optimistic outlook on life is contagious ☀️",
    "I love how you're not afraid to be yourself 🦋",
    "Your loyalty means everything to me 🤝",
    "The way you see the good in everyone 🌟",
    "Your strength during tough times inspires me 💪",
    "I love how humble you are despite being amazing 🌟",
    "Your adventurous spirit excites me 🗺️",
    "You make me want to be a better person every day 📈",
    "Being with you feels like coming home 🏠",
    "You make my heart feel full and complete 💕",
    "I feel like the luckiest person in the world with you 🍀",
    "You make even my worst days better instantly ⚡",
    "With you, I feel completely understood and accepted 🤗",
    "You make me believe in true love 💖",
    "I feel more alive when I'm with you ⚡",
    "You give me courage to face anything 🛡️",
    "Being loved by you is the greatest gift 🎁",
    "You make me smile even when you're not here 😊",
    "I feel like I can conquer the world with you by my side 🌍",
    "You make me feel completely safe and secure 🛡️",
    "With you, I feel like the best version of myself ⭐",
    "You make everyday feel special ✨",
    "I feel completely myself when I'm with you 🦋",
    "You make my dreams feel possible 🌟",
    "Being with you makes time fly by ⏰",
    "You make me happier than I ever thought possible 😄",
    "I feel complete when I hear your voice 🎵",
    "Your voice is the most beautiful sound I've ever heard 🎶",
    "I love the way you say my name 🗣️",
    "Your laugh is my favorite sound in the world 😄",
    "The way you explain things shows how smart you are 🧠",
    "I love hearing about your day every night 🌙",
    "Your good morning texts start my day perfectly ☀️",
    "The way you whisper sweet nothings melts my heart 🥰",
    "I love how passionate you sound when talking about things you love 🔥",
    "Your voice has the power to calm me instantly 🧘",
    "The way you sing (even badly) is adorable to me 🎤",
    "I love the cute sounds you make when you're excited 🥺",
    "Your storytelling skills captivate me completely 📖",
    "The way you pronounce certain words is adorable 🗣️",
    "I could listen to you talk for hours ⏰",
    "Your voice messages are the highlight of my day 📱",
    "The way you bite your lip when you're thinking 🤔",
    "I love how you dance when you think no one is watching 💃",
    "The cute faces you make in selfies are everything 📸",
    "I love how you talk to yourself sometimes 🗣️",
    "The way you get excited about little things 🥳",
    "I love how you remember tiny details about me 🧠",
    "The way you organize everything is so satisfying 📋",
    "I love your morning routine and how you start your day ☀️",
    "The way you get lost in good books 📚",
    "I love how you hum when you're happy 🎵",
    "The way you play with your hair when thinking 💭",
    "I love your bedtime routine and how you wind down 🌙",
    "The way you get passionate about movies/TV shows 🎬",
    "I love how you celebrate small victories 🎉",
    "The way you doodle when bored is adorable ✏️",
    "I love how you always find the perfect gifts 🎁",
    "The way you get competitive in fun games 🎮",
    "I love your cooking/baking attempts even when they fail 🍳",
    "The way you celebrate our special occasions 🎊",
    "I love how you always try to make others feel included 🤗",
    "The way you take care of yourself inspires me 💪",
    "I love your fashion sense and how you express yourself 👗",
    "The way you handle stress with grace amazes me 🧘",
    "I love everything about you, even your imperfections 🌟",
    "You are perfect exactly as you are 💕",
    "The way you love me makes me feel complete 💖",
    "I love us together more than I love us separately 👫",
    "You make everyday Valentine's Day ❤️",
    "Loving you is the best decision I've ever made ✨",
    "You are my past, present, and future 🌟"
];

// Global variables for additional interactions
let floatingLoveMessages = [];
let heartRainActive = false;
let particleTrailActive = false;
let surpriseEmojiInterval;
let loveCounter = 0;
let easterEggTriggered = false;

// Romantic messages for floating animations
const romanticMessages = [
    "I love you Slyy! 💕",
    "You're amazing! ✨",
    "Perfect in every way 🌟",
    "My heart beats for you 💓",
    "Forever yours 💖",
    "You make me smile 😊",
    "So beautiful! 🥰",
    "Can't stop thinking about you 💭",
    "You're my everything 🌍",
    "Love you more each day 📈"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize background animations
    createFloatingHearts();
    createSparkleParticles();
    createNameSparkles();

    // Set up event listeners
    setupEventListeners();

    // Initialize additional interactions
    initializeAdditionalInteractions();

    // Show welcome section
    showSection('welcome');

    // Start random kiss animations after a delay
    setTimeout(() => {
        startRandomKissAnimations();
    }, 5000);

    // Start floating love messages
    setTimeout(() => {
        startFloatingLoveMessages();
    }, 8000);

    // Start surprise emojis
    setTimeout(() => {
        startSurpriseEmojis();
    }, 12000);

    // Enable particle trails
    setTimeout(() => {
        enableParticleTrails();
    }, 15000);
}

function setupEventListeners() {
    // Begin button
    const beginButton = document.getElementById('beginButton');
    beginButton.addEventListener('click', handleBeginButton);

    // Mystery box
    const mysteryBox = document.getElementById('mysteryBox');
    mysteryBox.addEventListener('click', handleMysteryBox);

    // Return button from oops page
    const returnButton = document.getElementById('returnButton');
    returnButton.addEventListener('click', handleReturnFromOops);

    // Photo gallery controls
    const prevPhoto = document.getElementById('prevPhoto');
    const nextPhoto = document.getElementById('nextPhoto');
    if (prevPhoto) prevPhoto.addEventListener('click', () => navigatePhoto(-1));
    if (nextPhoto) nextPhoto.addEventListener('click', () => navigatePhoto(1));

    // Kiss canvas
    const kissCanvas = document.getElementById('kissCanvas');
    if (kissCanvas) {
        setupKissCanvas(kissCanvas);
    }

    // Touch/swipe support for photo gallery
    setupTouchSupport();

    // Prevent scrolling on body when modal is active
    document.addEventListener('keydown', handleKeyPress);

    // Add click interaction for heart rain
    document.addEventListener('click', handleGlobalClick);

    // Add double-click for easter egg
    document.addEventListener('dblclick', handleDoubleClick);

    // Add hover effects for interactive elements
    addInteractiveHoverEffects();
}

function handleBeginButton() {
    // Start music
    startBackgroundMusic();

    // Hide welcome section and show love reasons
    showSection('loveReasons');

    // Initialize love reasons
    initializeLoveReasons();

    // Load photo gallery
    loadGalleryImages();
}

function startBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    if (audio && !musicStarted) {
        // Modern browsers require user interaction before playing audio
        audio.play().then(() => {
            musicStarted = true;
            audio.volume = 0.3; // Set volume to 30%
        }).catch(error => {
            console.log('Audio play failed:', error);
        });
    }
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });

    // Show requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        setTimeout(() => {
            targetSection.classList.add('visible');
        }, 100);
    }

    currentSection = sectionId;
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    // Create multiple floating hearts
    for (let i = 0; i < 15; i++) {
        createHeart(container);
    }

    // Continue creating hearts periodically
    setInterval(() => {
        if (container.children.length < 20) {
            createHeart(container);
        }
    }, 3000);
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 20000);
}

function createSparkleParticles() {
    const container = document.querySelector('.sparkle-particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        createSparkle(container);
    }

    // Continue creating sparkles
    setInterval(() => {
        if (container.children.length < 40) {
            createSparkle(container);
        }
    }, 2000);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';

    container.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 3000);
}

function createNameSparkles() {
    const container = document.querySelector('.name-sparkles');
    if (!container) return;

    const sparkleEmojis = ['✨', '💫', '⭐', '🌟'];

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'name-sparkle';
            sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];

            const angle = (i / 8) * Math.PI * 2;
            const radius = 80;
            sparkle.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
            sparkle.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
            sparkle.style.animationDelay = (i * 0.2) + 's';

            container.appendChild(sparkle);
        }, i * 200);
    }
}

function initializeLoveReasons() {
    showRandomReasons();
}

function showRandomReasons() {
    const container = document.getElementById('reasonsContainer');
    if (!container) return;

    // Clear existing reasons
    container.innerHTML = '';

    // Get 3 random reasons that haven't been shown recently
    const selectedReasons = getRandomReasons(3);

    selectedReasons.forEach((reason, index) => {
        const reasonCard = createReasonCard(reason, index);
        container.appendChild(reasonCard);

        // Animate card appearance
        setTimeout(() => {
            reasonCard.style.animation = 'fadeInUp 0.6s ease-out';
        }, index * 200);
    });
}

function getRandomReasons(count) {
    const shuffled = [...loveReasons].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function createReasonCard(reason, index) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Love reason');

    const text = document.createElement('div');
    text.className = 'reason-text';
    text.textContent = reason;

    card.appendChild(text);

    // Add click handler
    card.addEventListener('click', () => handleReasonClick(card, reason));

    // Add keyboard support
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleReasonClick(card, reason);
        }
    });

    return card;
}

function handleReasonClick(card, reason) {
    // Mark card as transforming
    card.classList.add('transforming');

    // Create heart burst effect
    createHeartBurst(card);

    // Remove card after animation and show new reason
    setTimeout(() => {
        card.remove();
        showNewReason();
    }, 1000);
}

function createHeartBurst(element) {
    const overlay = document.querySelector('.floating-hearts-overlay');
    if (!overlay) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create multiple hearts
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.innerHTML = '❤️';

        const angle = (i / 8) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.style.setProperty('--x', x + 'px');
        heart.style.setProperty('--y', y + 'px');
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

        overlay.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function showNewReason() {
    const container = document.getElementById('reasonsContainer');
    if (!container) return;

    // Get a random reason
    const availableReasons = loveReasons.filter(reason => {
        const existingCards = container.querySelectorAll('.reason-text');
        return !Array.from(existingCards).some(card => card.textContent === reason);
    });

    if (availableReasons.length === 0) return;

    const newReason = availableReasons[Math.floor(Math.random() * availableReasons.length)];
    const newCard = createReasonCard(newReason, 0);

    container.appendChild(newCard);

    // Animate new card appearance
    setTimeout(() => {
        newCard.style.animation = 'fadeInUp 0.6s ease-out';
    }, 100);
}

async function loadGalleryImages() {
    const carousel = document.getElementById('photoCarousel');
    if (!carousel) return;

    // Clear existing content
    carousel.innerHTML = '';

    // Try to load images from assets folder
    // Since we can't directly access file system in browser, we'll try common image names
    const imageNames = [];

    // Check for images 1-20
    for (let i = 1; i <= 20; i++) {
        imageNames.push(`img${i}.jpg`);
        imageNames.push(`img${i}.jpeg`);
        imageNames.push(`img${i}.png`);
        imageNames.push(`img${i}.webp`);
    }

    // Create placeholder slides initially
    createPlaceholderSlides(carousel);

    // Try to load actual images
    await loadActualImages(imageNames, carousel);
}

function createPlaceholderSlides(carousel) {
    // Create 3 placeholder slides
    for (let i = 0; i < 3; i++) {
        const slide = document.createElement('div');
        slide.className = 'photo-slide';
        slide.style.display = i === 0 ? 'flex' : 'none';

        const placeholder = document.createElement('div');
        placeholder.className = 'photo-placeholder';
        placeholder.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">📸</div>
            <div>Beautiful Photo ${i + 1}</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.7;">
                Upload your images to the assets folder as img1.jpg, img2.jpg, etc.
            </div>
        `;

        slide.appendChild(placeholder);
        carousel.appendChild(slide);
    }

    availableImages = [0, 1, 2]; // Track available "images"
}

async function loadActualImages(imageNames, carousel) {
    const loadedImages = [];

    // Create sample images to demonstrate functionality
    for (let i = 1; i <= 5; i++) {
        loadedImages.push({
            path: `https://picsum.photos/seed/slyy${i}/400/400.jpg`,
            name: `sample${i}.jpg`
        });
    }

    // Also try to load actual images from assets folder
    for (const imageName of imageNames) {
        try {
            const img = new Image();
            const imagePath = `assets/${imageName}`;

            await new Promise((resolve, reject) => {
                img.onload = () => {
                    loadedImages.push({
                        path: imagePath,
                        name: imageName
                    });
                    resolve();
                };
                img.onerror = reject;
                img.src = imagePath;
            });
        } catch (error) {
            // Image doesn't exist, continue
        }
    }

    // Always replace with found images
    replaceWithActualImages(carousel, loadedImages);
}

function replaceWithActualImages(carousel, loadedImages) {
    // Clear carousel
    carousel.innerHTML = '';
    availableImages = [];

    // Create slides for loaded images
    loadedImages.forEach((imageData, index) => {
        const slide = document.createElement('div');
        slide.className = 'photo-slide';
        slide.style.display = index === 0 ? 'flex' : 'none';

        const img = document.createElement('img');
        img.src = imageData.path;
        img.alt = `Beautiful memory ${index + 1}`;
        img.loading = 'lazy';

        slide.appendChild(img);
        carousel.appendChild(slide);
        availableImages.push(index);
    });

    // If no images found, keep placeholders
    if (loadedImages.length === 0) {
        createPlaceholderSlides(carousel);
    }
}

function navigatePhoto(direction) {
    if (availableImages.length <= 1) return;

    const carousel = document.getElementById('photoCarousel');
    const slides = carousel.querySelectorAll('.photo-slide');

    // Hide current slide
    slides[currentPhotoIndex].style.display = 'none';

    // Calculate next index
    currentPhotoIndex = (currentPhotoIndex + direction + availableImages.length) % availableImages.length;

    // Show new slide
    slides[currentPhotoIndex].style.display = 'flex';
}

function setupTouchSupport() {
    const carousel = document.getElementById('photoCarousel');
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                navigatePhoto(1); // Swipe left, go next
            } else {
                navigatePhoto(-1); // Swipe right, go previous
            }
        }
    }
}

function handleMysteryBox() {
    const mysteryBox = document.getElementById('mysteryBox');
    const modal = document.getElementById('weddingModal');

    // Add opening animation
    mysteryBox.classList.add('opening');

    setTimeout(() => {
        mysteryBox.classList.add('opened');

        // Show wedding ring modal
        setTimeout(() => {
            modal.classList.add('active');
            startWeddingRingAnimation();
        }, 800);
    }, 500);

    // Start countdown
    startCountdown();
}

function startWeddingRingAnimation() {
    const ringContainer = document.querySelector('.ring-container');
    if (!ringContainer) return;

    // Create sparkles around the ring
    const sparklesContainer = document.querySelector('.ring-sparkles');
    if (sparklesContainer) {
        createRingSparkles(sparklesContainer);
    }
}

function createRingSparkles(container) {
    const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '💖'];

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'ring-sparkle';
            sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            sparkle.style.animationDelay = (i * 0.1) + 's';

            container.appendChild(sparkle);

            // Remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

function startCountdown() {
    const timer = document.getElementById('countdownTimer');
    let countdown = 3;

    const countdownInterval = setInterval(() => {
        countdown--;
        timer.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            showOopsPage();
        }
    }, 1000);
}

function showOopsPage() {
    const modal = document.getElementById('weddingModal');
    const oopsPage = document.getElementById('oopsPage');

    modal.classList.remove('active');
    oopsPage.classList.add('active');

    // Start kiss animations after showing oops page
    setTimeout(() => {
        showSection('kissSection');
        startRandomKissAnimations();
    }, 5000);
}

function handleReturnFromOops() {
    const oopsPage = document.getElementById('oopsPage');
    oopsPage.classList.remove('active');

    // Return to love reasons section
    showSection('loveReasons');
}

function setupKissCanvas(canvas) {
    // Add click/touch event listeners
    canvas.addEventListener('click', (e) => createKissMark(e, canvas));
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const fakeEvent = {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
        createKissMark(fakeEvent, canvas);
    });

    // Add move event for kiss trail
    let isDrawing = false;

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            createKissMark(e, canvas, true);
        }
    });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const fakeEvent = {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
        createKissMark(fakeEvent, canvas, true);
    });
}

function createKissMark(event, canvas, isTrail = false) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const kiss = document.createElement('div');
    kiss.className = 'kiss-mark';

    // Use different kiss emojis
    const kissEmojis = ['😘', '💋', '💏'];
    kiss.innerHTML = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];

    if (isTrail) {
        kiss.style.fontSize = '1.5rem';
    } else {
        kiss.style.fontSize = '2rem';
    }

    kiss.style.left = x + 'px';
    kiss.style.top = y + 'px';

    canvas.appendChild(kiss);

    // Remove kiss after animation
    setTimeout(() => {
        kiss.remove();
    }, 3000);

    // Create mini heart burst for larger kisses
    if (!isTrail && Math.random() > 0.5) {
        createMiniHeartBurst(x + rect.left, y + rect.top);
    }
}

function createMiniHeartBurst(x, y) {
    const overlay = document.querySelector('.floating-hearts-overlay');
    if (!overlay) return;

    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.innerHTML = '💕';

        const angle = (i / 3) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const hx = Math.cos(angle) * distance;
        const hy = Math.sin(angle) * distance;

        heart.style.setProperty('--x', hx + 'px');
        heart.style.setProperty('--y', hy + 'px');
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '15px';

        overlay.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function startRandomKissAnimations() {
    if (randomKissInterval) {
        clearInterval(randomKissInterval);
    }

    // Create random kisses every 10-15 seconds
    const createRandomKiss = () => {
        if (currentSection !== 'welcome' && currentSection !== 'oopsPage') {
            createRandomKissAnimation();
        }
    };

    // Initial random time
    let nextKissTime = Math.random() * 5000 + 10000;

    randomKissInterval = setInterval(() => {
        createRandomKiss();
        nextKissTime = Math.random() * 5000 + 10000;
    }, nextKissTime);
}

function createRandomKissAnimation() {
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    const kiss = document.createElement('div');
    kiss.className = 'random-kiss';

    const kissEmojis = ['😘', '💋', '💕', '💖', '💗', '💝'];
    kiss.innerHTML = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];

    // Random position avoiding edges
    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - 100) + 50;

    kiss.style.left = x + 'px';
    kiss.style.top = y + 'px';
    kiss.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
    kiss.style.animationDuration = (Math.random() * 5 + 8) + 's';

    container.appendChild(kiss);

    // Remove kiss after animation
    setTimeout(() => {
        kiss.remove();
    }, 13000);
}

function handleKeyPress(event) {
    // Handle escape key to close modals
    if (event.key === 'Escape') {
        const modal = document.getElementById('weddingModal');
        const oopsPage = document.getElementById('oopsPage');

        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
        }

        if (oopsPage.classList.contains('active')) {
            oopsPage.classList.remove('active');
            showSection('loveReasons');
        }
    }

    // Handle arrow keys for photo gallery
    if (currentSection === 'photoGallery') {
        if (event.key === 'ArrowLeft') {
            navigatePhoto(-1);
        } else if (event.key === 'ArrowRight') {
            navigatePhoto(1);
        }
    }
}

// Performance optimization: throttle scroll events
let ticking = false;
function requestTick(callback) {
    if (!ticking) {
        requestAnimationFrame(callback);
        ticking = true;
        setTimeout(() => {
            ticking = false;
        }, 16);
    }
}

// Smooth scroll behavior for navigation
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle visibility change (pause animations when tab is not visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is hidden
        if (randomKissInterval) {
            clearInterval(randomKissInterval);
        }
    } else {
        // Resume animations when tab is visible
        startRandomKissAnimations();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    requestTick(() => {
        // Recalculate positions if needed
        const activeSection = document.getElementById(currentSection);
        if (activeSection) {
            // Trigger any repositioning needed
        }
    });
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    // Continue running app despite errors
});

// Initialize Additional Interactions
function initializeAdditionalInteractions() {
    loveCounter = 0;
    easterEggTriggered = false;
    heartRainActive = false;
    particleTrailActive = false;
}

// Floating Love Messages
function startFloatingLoveMessages() {
    setInterval(() => {
        if (currentSection !== 'welcome' && currentSection !== 'oopsPage' && floatingLoveMessages.length < 3) {
            createFloatingLoveMessage();
        }
    }, 8000);
}

function createFloatingLoveMessage() {
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    const message = document.createElement('div');
    message.className = 'floating-love-message';
    message.textContent = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];

    // Random position
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = window.innerHeight + 50;

    message.style.left = x + 'px';
    message.style.top = y + 'px';
    message.style.position = 'fixed';
    message.style.color = '#FFD700';
    message.style.fontSize = '1.2rem';
    message.style.fontWeight = 'bold';
    message.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    message.style.pointerEvents = 'none';
    message.style.zIndex = '60';
    message.style.animation = 'floatUp 15s linear forwards';
    message.style.whiteSpace = 'nowrap';

    container.appendChild(message);

    // Remove after animation
    setTimeout(() => {
        message.remove();
    }, 15000);
}

// Surprise Emojis
function startSurpriseEmojis() {
    const surpriseEmojis = ['💕', '💖', '💗', '💝', '💓', '💞', '💘', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🤎', '💋', '🌹', '✨', '🌟', '💫', '⭐', '🥰', '😍', '🤩', '😘', '💏', '👩‍❤️‍💋‍👨'];

    surpriseEmojiInterval = setInterval(() => {
        if (currentSection !== 'oopsPage') {
            createSurpriseEmoji(surpriseEmojis);
        }
    }, 6000);
}

function createSurpriseEmoji(emojis) {
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    const emoji = document.createElement('div');
    emoji.className = 'surprise-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - 200) + 100;

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
    emoji.style.position = 'fixed';
    emoji.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '55';
    emoji.style.animation = 'surpriseEmojiFloat 4s ease-out forwards';

    container.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 4000);
}

// Particle Trails on Mouse/Touch Move
function enableParticleTrails() {
    particleTrailActive = true;

    document.addEventListener('mousemove', createParticleTrail);
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        createParticleTrail({
            clientX: touch.clientX,
            clientY: touch.clientY
        });
    });
}

function createParticleTrail(event) {
    if (!particleTrailActive || currentSection === 'oopsPage') return;

    // Only create particles occasionally to avoid performance issues
    if (Math.random() > 0.9) {
        const particle = document.createElement('div');
        particle.className = 'love-particle';
        particle.innerHTML = '✨';
        particle.style.position = 'fixed';
        particle.style.left = event.clientX + 'px';
        particle.style.top = event.clientY + 'px';
        particle.style.fontSize = '0.8rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '45';
        particle.style.animation = 'particleFade 1s ease-out forwards';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Heart Rain Effect
function triggerHeartRain() {
    if (heartRainActive) return;

    heartRainActive = true;
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-rain';
            heart.innerHTML = '❤️';

            const x = Math.random() * window.innerWidth;
            heart.style.left = x + 'px';
            heart.style.top = '-50px';
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '65';
            heart.style.animation = `heartRainFall ${Math.random() * 3 + 2}s linear forwards`;

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }

    setTimeout(() => {
        heartRainActive = false;
    }, 6000);
}

// Global Click Handler
function handleGlobalClick(event) {
    // Increment love counter
    loveCounter++;

    // Every 10 clicks, trigger something special
    if (loveCounter % 10 === 0) {
        triggerSpecialEffect(event);
    }

    // Small chance for heart explosion
    if (Math.random() > 0.95) {
        createClickHeartExplosion(event.clientX, event.clientY);
    }
}

function triggerSpecialEffect(event) {
    const effects = [
        () => triggerHeartRain(),
        () => createFireworks(event.clientX, event.clientY),
        () => createLoveBurst(event.clientX, event.clientY),
        () => showFloatingMessage(event.clientX, event.clientY, "You're amazing! 💕")
    ];

    const effect = effects[Math.floor(Math.random() * effects.length)];
    effect();
}

function createClickHeartExplosion(x, y) {
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '1rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '70';

        const angle = (i / 12) * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        heart.style.animation = `heartExplode 1s ease-out forwards`;
        heart.style.setProperty('--dx', dx + 'px');
        heart.style.setProperty('--dy', dy + 'px');

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

function createFireworks(x, y) {
    const colors = ['#FF69B4', '#FF1493', '#FFD700', '#FFB6C1', '#FFC0CB'];
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '75';

        const angle = (i / 20) * Math.PI * 2;
        const distance = Math.random() * 150 + 100;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.animation = `fireworkParticle 1.5s ease-out forwards`;
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

function createLoveBurst(x, y) {
    const loveEmojis = ['💕', '💖', '💗', '💝', '💓', '❤️'];
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
        emoji.style.fontSize = '1.5rem';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '70';

        const angle = (i / 8) * Math.PI * 2;
        const distance = Math.random() * 80 + 40;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        emoji.style.animation = `loveBurstFloat 1.2s ease-out forwards`;
        emoji.style.setProperty('--dx', dx + 'px');
        emoji.style.setProperty('--dy', dy + 'px');

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 1200);
    }
}

function showFloatingMessage(x, y, message) {
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.style.position = 'fixed';
    msg.style.left = x + 'px';
    msg.style.top = (y - 50) + 'px';
    msg.style.color = '#FFD700';
    msg.style.fontSize = '1.3rem';
    msg.style.fontWeight = 'bold';
    msg.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
    msg.style.pointerEvents = 'none';
    msg.style.zIndex = '80';
    msg.style.transform = 'translateX(-50%)';
    msg.style.animation = 'floatingMessageShow 2s ease-out forwards';

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
}

// Double Click Easter Egg
function handleDoubleClick(event) {
    if (easterEggTriggered) return;

    // Check if double-clicking on Slyy's name
    if (event.target.classList.contains('her-name') || event.target.closest('.name-display')) {
        triggerEasterEgg(event);
        easterEggTriggered = true;
    }
}

function triggerEasterEgg(event) {
    showFloatingMessage(event.clientX, event.clientY, "You found my secret! 💕 I love you infinity! ♾️");

    // Create extra special heart explosion
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createClickHeartExplosion(
                event.clientX + (Math.random() - 0.5) * 200,
                event.clientY + (Math.random() - 0.5) * 200
            );
        }, i * 200);
    }

    // Trigger heart rain
    setTimeout(() => {
        triggerHeartRain();
    }, 1000);
}

// Interactive Hover Effects
function addInteractiveHoverEffects() {
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .reason-card, .mystery-box');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            if (Math.random() > 0.7) {
                createHoverSparkles(e.target);
            }
        });

        element.addEventListener('touchstart', (e) => {
            if (Math.random() > 0.7) {
                createHoverSparkles(e.target);
            }
        });
    });
}

function createHoverSparkles(element) {
    const rect = element.getBoundingClientRect();
    const container = document.getElementById('randomKissesContainer');
    if (!container) return;

    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.fontSize = '0.8rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '50';
        sparkle.style.animation = 'hoverSparkle 1s ease-out forwards';

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Enhanced Photo Gallery Interactions
function enhancePhotoGallery() {
    const photos = document.querySelectorAll('.photo-slide img');

    photos.forEach(photo => {
        photo.addEventListener('click', (e) => {
            createClickHeartExplosion(e.clientX, e.clientY);
            showFloatingMessage(e.clientX, e.clientY, "Beautiful memory! 💕");
        });

        photo.addEventListener('mouseenter', (e) => {
            if (Math.random() > 0.5) {
                createHoverSparkles(e.target);
            }
        });
    });
}

// Call enhancement when photo gallery is loaded
const originalLoadGalleryImages = loadGalleryImages;
loadGalleryImages = function() {
    originalLoadGalleryImages.call(this);
    setTimeout(enhancePhotoGallery, 1000);
};

// Add CSS animations dynamically
const additionalCSS = `
@keyframes surpriseEmojiFloat {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
    }
    50% {
        transform: scale(1.5) rotate(180deg);
        opacity: 1;
    }
    100% {
        transform: scale(0.8) rotate(360deg) translateY(-50px);
        opacity: 0;
    }
}

@keyframes particleFade {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes heartRainFall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0.8;
    }
}

@keyframes heartExplode {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(var(--dx), var(--dy)) scale(0);
        opacity: 0;
    }
}

@keyframes fireworkParticle {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    100% {
        transform: translate(var(--dx), var(--dy)) scale(0);
        opacity: 0;
    }
}

@keyframes loveBurstFloat {
    0% {
        transform: translate(0, 0) scale(0);
        opacity: 1;
    }
    50% {
        transform: translate(var(--dx), var(--dy)) scale(1.5);
        opacity: 1;
    }
    100% {
        transform: translate(calc(var(--dx) * 1.5), calc(var(--dy) * 1.5)) scale(0.5);
        opacity: 0;
    }
}

@keyframes floatingMessageShow {
    0% {
        transform: translateX(-50%) translateY(0) scale(0);
        opacity: 0;
    }
    20% {
        transform: translateX(-50%) translateY(-20px) scale(1.2);
        opacity: 1;
    }
    80% {
        transform: translateX(-50%) translateY(-30px) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateX(-50%) translateY(-50px) scale(0.8);
        opacity: 0;
    }
}

@keyframes hoverSparkle {
    0% {
        transform: translateY(0) scale(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-30px) scale(1);
        opacity: 0;
    }
}

.floating-love-message {
    background: rgba(255, 105, 180, 0.2);
    backdrop-filter: blur(5px);
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.surprise-emoji {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));
}

.heart-rain {
    filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.8));
}

.love-particle {
    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.8));
}
`;

// Add the new CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Service worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}