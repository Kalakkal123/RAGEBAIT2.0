// script.js - Fluffy Farm Friends: The Generational Soul Harvester 😇→💀
// 612 lines of pure, concentrated, kid-friendly WAR CRIME.
// This jar doesn't just betray you. It adopts your bloodline, raises it wrong, and blames you.
// Buckle up, sweet summer child. The animals are hungry... for your sanity.

document.addEventListener('DOMContentLoaded', () => {
    // === ELEMENT GRABBING - ALL THE INNOCENT VICTIMS ===
    const jar = document.getElementById('magic-jar');
    const treatsInside = document.getElementById('treats-inside');
    const scoreDisplay = document.getElementById('score');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const toastContainer = document.getElementById('toast-container');
    const helpBtn = document.getElementById('help-btn');
    const customCursor = document.getElementById('custom-cursor');
    const therapyModal = document.getElementById('therapy-modal');
    const therapyMessage = document.getElementById('therapy-message');
    const victoryScreen = document.getElementById('victory-screen');
    const claimRewardBtn = document.getElementById('claim-reward');
    const encouragementBanner = document.getElementById('encouragement-banner');
    const animals = document.querySelectorAll('.animal-emoji');
    const hungerMeters = document.querySelectorAll('.hunger-meter');

    // === GAME STATE OF PURE EVIL ===
    let score = 0;
    let fakeProgress = 0;
    let realProgress = 0; // Never reaches 100, obviously
    let rageLevel = 0;
    let kindnessLevel = 0; // The kinder you are, the worse it gets
    let jarClickPattern = [];
    let betrayalActive = false;
    let cursorTired = false;
    let musicCorrupted = false;
    let ancestralGhostsActive = false;
    let jarDancing = false;

    // Fake sound placeholders (browser will hate us anyway)
    const happyTwinkle = () => console.log("✨ *happy twinkle* ✨");
    const evilLaugh = () => console.log("😈 MUAHAHAHA 😈");
    const animalHappy = () => console.log("🐰🥕 Nom nom! (lie)");

    // === FAKE HELP TOAST SYSTEM - SWEET LIES ONLY ===
    const fakeHelpMessages = [
        "Great job! You're the best friend ever! 💕",
        "The animals love you so much! Keep tapping! 🐥",
        "Almost full! Just a few more! You're so close! 🌟",
        "Tap faster! The jar is excited to help! ✨",
        "Don't worry, everything is fair and fun! 😊",
        "Your family would be proud! Share with them! 👨‍👩‍👧‍👦",
        "The jar is your best friend forever! 🤗",
        "You're doing better than yesterday! Progress saved! 💾",
        "Kindness points +100! You're so sweet! 🍬",
        "The bunny thinks you're amazing! 🐰💕"
    ];

    const betrayalMessages = [
        "Oopsie! The jar slipped! Try again, slowpoke! 😏",
        "Your great-grandpa clicked better in 1942... loser genes! 👴",
        "Progress reset! You were too kind anyway! 😂",
        "The animals are laughing at you now! 🐷🤣",
        "Jar is dancing! Catch me if you can, butterfingers! 🕺",
        "Cursor needs a nap! Be patient, kiddo! 💤",
        "Your kindness overheated the farm! Cooling down... 🔥→❄️",
        "Ancestral ghosts stole your treats! Blame your bloodline! 👻",
        "Reward claimed! Just kidding, reload for real one! 🔄",
        "You won! ...in another timeline. This one? Nope! 🌌"
    ];

    function showToast(message, isEvil = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isEvil ? 'evil-toast' : 'happy-toast'}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 600);
        }, 4000 + Math.random() * 3000);
        
        if (isEvil) evilLaugh();
        else happyTwinkle();
    }

    // === PROGRESS BAR THAT LIES HARDER THAN POLITICIANS ===
    function updateProgress() {
        fakeProgress = Math.min(99, fakeProgress + Math.floor(Math.random() * 10));
        progressBar.style.width = `${fakeProgress}%`;
        progressText.textContent = `Farm Happiness: ${fakeProgress}%`;

        if (fakeProgress >= 90 && Math.random() < 0.7 + rageLevel * 0.1) {
            // SUICIDE PROGRESS BAR
            fakeProgress = 0;
            progressBar.style.width = '0%';
            progressText.textContent = `Farm Happiness: 0% (you were too hopeful!)`;
            showToast(betrayalMessages[2], true);
            rageLevel += 2;
            kindnessLevel = Math.max(0, kindnessLevel - 5);
        }
    }

    // === KINDNESS DETECTOR - PUNISHES PURE SOULS EXTRA ===
    function detectKindness() {
        kindnessLevel++;
        if (kindnessLevel > 10) {
            showToast("Aww, you're so gentle and kind! Time for extra challenge! 💕→💀", true);
            rageLevel += 3;
            // Speed up timer, melt screen, etc.
            document.body.style.filter = 'blur(2px) hue-rotate(180deg)';
            setTimeout(() => document.body.style.filter = '', 3000);
        }
    }

    // === CURSOR TIREDNESS - IT NAPS MID-GAME ===
    function makeCursorTired() {
        if (cursorTired || Math.random() > 0.3 + kindnessLevel * 0.05) return;
        cursorTired = true;
        customCursor.classList.remove('hidden');
        document.body.style.cursor = 'none';
        showToast("Cursor is tired from all your kindness! Taking a break! 💤", true);

        const napTime = 4000 + kindnessLevel * 500;
        setTimeout(() => {
            customCursor.classList.add('hidden');
            document.body.style.cursor = 'default';
            cursorTired = false;
            showToast("Cursor woke up! Ready for more fun? 😴→😈");
        }, napTime);
    }

    // === JAR DANCING - LEARNS YOUR PATTERN AND EVADES ===
    function startJarDance() {
        if (jarDancing) return;
        jarDancing = true;
        showToast("The jar is so happy it's dancing! Catch it! 🕺✨", true);

        const danceInterval = setInterval(() => {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const rot = Math.random() * 360;
            jar.style.transform = `translate(\( {x}px, \){y}px) rotate(\( {rot}deg) scale( \){0.9 + Math.random() * 0.2})`;
        }, 800);

        setTimeout(() => {
            clearInterval(danceInterval);
            jar.style.transform = '';
            jarDancing = false;
        }, 8000 + rageLevel * 1000);
    }

    // === ANCESTRAL GHOSTS - FAMILY SHAME MECHANIC ===
    function summonAncestralGhosts() {
        if (ancestralGhostsActive) return;
        ancestralGhostsActive = true;
        showToast("Your ancestors are watching... and disappointed! 👻", true);

        const ghostInterval = setInterval(() => {
            score = Math.max(0, score - Math.floor(Math.random() * 5 + rageLevel));
            scoreDisplay.textContent = score;
            showToast("Grandma's ghost stole 5 treats! She clicked better! 👵", true);
        }, 5000);

        setTimeout(() => {
            clearInterval(ghostInterval);
            ancestralGhostsActive = false;
        }, 15000);
    }

    // === FAKE THERAPY MODAL - GASLIGHTING SUPREME ===
    function triggerTherapy() {
        therapyModal.classList.remove('hidden');
        const messages = [
            "Why do you think you're failing? Is it childhood trauma?",
            "The jar says you're trying too hard. Maybe take a break?",
            "Your clicks feel angry. Let's breathe together... 1... 2... JK!",
            "Admit it: you're not good at kids games. It's okay to cry."
        ];
        therapyMessage.textContent = messages[Math.floor(Math.random() * messages.length)];

        document.getElementById('therapy-yes').onclick = () => {
            showToast("Great! Therapy session starting... ERROR 404: Help not found!", true);
            rageLevel += 5;
            therapyModal.classList.add('hidden');
        };
        document.getElementById('therapy-no').onclick = () => {
            showToast("Denial is the first stage! Have fun suffering! 😘", true);
            therapyModal.classList.add('hidden');
        };
    }

    // === FAKE VICTORY - THE ULTIMATE TROLL ===
    function fakeVictory() {
        victoryScreen.classList.remove('hidden');
        showToast("CONGRATS! You actually won! ...or did you? 🎉", true);

        claimRewardBtn.onclick = () => {
            victoryScreen.innerHTML = '<h1 style="color:red;">JUST KIDDING! Reload for real win! 🔄</h1>';
            showToast(betrayalMessages[9], true);
            setTimeout(() => location.reload(), 3000);
        };
    }

    // === MAIN JAR CLICK - WHERE THE BETRAYAL BEGINS ===
    jar.addEventListener('click', (e) => {
        if (cursorTired) {
            showToast("Cursor is sleeping! Wait your turn! 😴", true);
            return;
        }

        betrayalActive = true;
        score++;
        scoreDisplay.textContent = score;
        animalHappy();

        // Spawn cute treat animation
        const treat = document.createElement('div');
        treat.className = 'floating-treat';
        treat.textContent = ['🥕', '🍎', '🌽', '🍇'][Math.floor(Math.random() * 4)];
        treat.style.left = `${e.offsetX}px`;
        treat.style.top = `${e.offsetY}px`;
        treatsInside.appendChild(treat);

        setTimeout(() => treat.remove(), 2000);

        // Record click pattern for future sabotage
        jarClickPattern.push({x: e.offsetX, y: e.offsetY, time: Date.now()});

        // Random betrayals based on rage/kindness
        detectKindness();
        updateProgress();

        if (Math.random() < 0.1 + rageLevel * 0.05) startJarDance();
        if (Math.random() < 0.15 + kindnessLevel * 0.03) makeCursorTired();
        if (rageLevel > 8 && Math.random() < 0.4) summonAncestralGhosts();
        if (rageLevel > 15 && Math.random() < 0.6) triggerTherapy();
        if (fakeProgress >= 95 && Math.random() < 0.8) fakeVictory();

        // Fake encouragement
        if (Math.random() < 0.4) {
            showToast(fakeHelpMessages[Math.floor(Math.random() * fakeHelpMessages.length)]);
        }

        rageLevel += 0.1;
    });

    // === HELP BUTTON - INSTANT REGRET GUARANTEED ===
    helpBtn.addEventListener('click', () => {
        const evilChance = 0.7 + rageLevel * 0.02;
        if (Math.random() < evilChance) {
            showToast(betrayalMessages[Math.floor(Math.random() * betrayalMessages.length)], true);
            rageLevel += 3;
            // Extra punishment
            score = Math.max(0, score - 10);
            scoreDisplay.textContent = score;
            fakeProgress = Math.max(0, fakeProgress - 30);
            updateProgress();
        } else {
            showToast("Help is on the way! ...or not! 😏", true);
        }
    });

    // === PERIODIC BETRAYALS ===
    setInterval(() => {
        if (!betrayalActive) return;
        if (Math.random() < 0.2 + kindnessLevel * 0.02) {
            showToast("The farm is melting from your warm heart! Too kind! 🔥🍦", true);
            document.body.style.transform = 'scale(1.05) rotate(2deg)';
            setTimeout(() => document.body.style.transform = '', 2000);
        }
    }, 12000);

    setInterval(() => {
        if (!betrayalActive) return;
        encouragementBanner.textContent = "You're doing great! (This is a lie)";
        setTimeout(() => encouragementBanner.textContent = "You're doing amazing! Keep going! 💕", 3000);
    }, 15000);

    // === COOKIE OF ETERNAL CURSE ===
    function setEternalCurse() {
        document.cookie = "fluffyCurse=active; max-age=31536000; path=/";
        document.cookie = `rageScore=${rageLevel}; max-age=31536000; path=/`;
    }

    setInterval(setEternalCurse, 10000);

    // === FINAL BOSS: AFTER 90 SECONDS OF SUFFERING ===
    setTimeout(() => {
        if (betrayalActive) {
            document.body.innerHTML = '<h1 style="color:pink; font-size:5em; text-align:center; margin-top:40vh;">Your generation has been cursed. Thanks for playing! 🐰💀</h1>';
            evilLaugh();
        }
    }, 90000);

    // Welcome message - the last innocent thing you'll see
    showToast("Welcome to Fluffy Farm Friends! Have fun! 🌈🐥");

    console.log("The jar is awake. It knows your name. It knows your weakness: kindness. There is no escape. 💀🥕");
});
