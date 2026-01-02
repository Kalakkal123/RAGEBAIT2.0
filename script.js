// script.js - Fluffy Farm Friends: ULTIMATE FIXED GENERATIONAL CURSE v3.0 😇💕→💀🔥💥🚀
// Syntax errors EXTERMINATED. Victory troll AUTO-EXPLODES. Jar dances PROPERLY.
// 680+ lines of kid-friendly APOCALYPSE. The bloodline curse is now eternal.

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

    // === GAME STATE OF PURE EVIL ===
    let score = 0;
    let fakeProgress = 0;
    let rageLevel = 0;
    let kindnessLevel = 0;
    let jarClickPattern = [];
    let betrayalActive = false;
    let cursorTired = false;
    let ancestralGhostsActive = false;
    let jarDancing = false;

    // Fake sounds
    const happyTwinkle = () => console.log("✨ *happy twinkle* ✨");
    const evilLaugh = () => console.log("😈 MUAHAHAHA 😈");
    const animalHappy = () => console.log("🐰🥕 Nom nom! (lie)");

    // === TOAST MESSAGES ===
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

    // === PROGRESS BAR LIES ===
    function updateProgress() {
        fakeProgress = Math.min(99, fakeProgress + Math.floor(Math.random() * 10));
        progressBar.style.width = `${fakeProgress}%`;
        progressText.textContent = `Farm Happiness: ${fakeProgress}%`;

        if (fakeProgress >= 90 && Math.random() < 0.7 + rageLevel * 0.1) {
            fakeProgress = 0;
            progressBar.style.width = '0%';
            progressText.textContent = `Farm Happiness: 0% (you were too hopeful!)`;
            showToast(betrayalMessages[2], true);
            rageLevel += 2;
            kindnessLevel = Math.max(0, kindnessLevel - 5);
        }
    }

    // === KINDNESS PUNISHER ===
    function detectKindness() {
        kindnessLevel++;
        if (kindnessLevel > 10) {
            showToast("Aww, you're so gentle and kind! Time for extra challenge! 💕→💀", true);
            rageLevel += 3;
            document.body.style.filter = 'blur(2px) hue-rotate(180deg)';
            setTimeout(() => document.body.style.filter = '', 3000);
        }
    }

    // === CURSOR NAP ===
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

    // === JAR DANCE - FIXED TYPO HELL ===
    function startJarDance() {
        if (jarDancing) return;
        jarDancing = true;
        showToast("The jar is so happy it's dancing! Catch it! 🕺✨", true);

        const danceInterval = setInterval(() => {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const rot = Math.random() * 360;
            const scale = 0.9 + Math.random() * 0.2;
            jar.style.transform = `translate(\( {x}px, \){y}px) rotate(\( {rot}deg) scale( \){scale})`;
        }, 800);

        setTimeout(() => {
            clearInterval(danceInterval);
            jar.style.transform = '';
            jarDancing = false;
        }, 8000 + rageLevel * 1000);
    }

    // === ANCESTRAL GHOSTS ===
    function summonAncestralGhosts() {
        if (ancestralGhostsActive) return;
        ancestralGhostsActive = true;
        showToast("Your ancestors are watching... and disappointed! 👻", true);

        const ghostInterval = setInterval(() => {
            score = Math.max(0, score - Math.floor(Math.random() * 5 + rageLevel));
            scoreDisplay.textContent = score;
            showToast("Grandma's ghost stole treats! She clicked better! 👵", true);
        }, 5000);

        setTimeout(() => {
            clearInterval(ghostInterval);
            ancestralGhostsActive = false;
        }, 15000);
    }

    // === THERAPY GASLIGHT ===
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

    // === FIXED + UPGRADED FAKE VICTORY TROLL ===
    function fakeVictory() {
        victoryScreen.classList.remove('hidden');
        showToast("CONGRATS! You actually won! ...or did you? 🎉💣", true);

        // AUTO-TROLL AFTER 2 SECONDS - NO CLICK NEEDED
        const autoTroll = setTimeout(() => {
            victoryScreen.classList.add('troll-phase'); // Activate CSS seizure
            victoryScreen.innerHTML = `
                <div class="victory-content">
                    <h1>JUST KIDDING! YOUR BLOODLINE SUCKS 🐰💀</h1>
                    <p>Grandma laughs last! Reloading your suffering... 👵😂</p>
                </div>
            `;
            document.body.style.animation = 'shake 0.3s infinite';
            setTimeout(() => location.reload(), 3000);
        }, 2000);

        // Manual click still works (early rage trigger)
        claimRewardBtn.onclick = () => {
            clearTimeout(autoTroll);
            victoryScreen.classList.add('troll-phase');
            victoryScreen.innerHTML = '<h1>HAHA GOTCHA EARLY! RELOADING...</h1>';
            document.body.style.animation = 'shake 0.3s infinite';
            setTimeout(() => location.reload(), 1500);
        };

        // ESC key = extra punishment
        document.addEventListener('keydown', function escPunish(e) {
            if (e.key === 'Escape') {
                showToast("ESC won't save you! Extra curse activated! 🔒", true);
                rageLevel += 10;
                document.removeEventListener('keydown', escPunish);
            }
        });
    }

    // === MAIN JAR CLICK ===
    jar.addEventListener('click', (e) => {
        if (cursorTired) {
            showToast("Cursor is sleeping! Wait your turn! 😴", true);
            return;
        }

        betrayalActive = true;
        score++;
        scoreDisplay.textContent = score;
        animalHappy();

        const treat = document.createElement('div');
        treat.className = 'floating-treat';
        treat.textContent = ['🥕', '🍎', '🌽', '🍇'][Math.floor(Math.random() * 4)];
        treat.style.left = `${e.offsetX}px`;
        treat.style.top = `${e.offsetY}px`;
        treatsInside.appendChild(treat);
        setTimeout(() => treat.remove(), 2000);

        jarClickPattern.push({x: e.offsetX, y: e.offsetY, time: Date.now()});

        detectKindness();
        updateProgress();

        if (Math.random() < 0.1 + rageLevel * 0.05) startJarDance();
        if (Math.random() < 0.15 + kindnessLevel * 0.03) makeCursorTired();
        if (rageLevel > 8 && Math.random() < 0.4) summonAncestralGhosts();
        if (rageLevel > 15 && Math.random() < 0.6) triggerTherapy();
        if (fakeProgress >= 95 && Math.random() < 0.8) fakeVictory();

        if (Math.random() < 0.4) {
            showToast(fakeHelpMessages[Math.floor(Math.random() * fakeHelpMessages.length)]);
        }

        rageLevel += 0.1;
    });

    // === HELP BUTTON REGRET ===
    helpBtn.addEventListener('click', () => {
        const evilChance = 0.7 + rageLevel * 0.02;
        if (Math.random() < evilChance) {
            showToast(betrayalMessages[Math.floor(Math.random() * betrayalMessages.length)], true);
            rageLevel += 3;
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

    // === ETERNAL CURSE COOKIE ===
    function setEternalCurse() {
        document.cookie = "fluffyCurse=active; max-age=31536000; path=/";
        document.cookie = `rageScore=${rageLevel}; max-age=31536000; path=/`;
    }
    setInterval(setEternalCurse, 10000);

    // === FINAL CURSE AFTER 90s ===
    setTimeout(() => {
        if (betrayalActive) {
            document.body.innerHTML = '<h1 style="color:pink; font-size:5em; text-align:center; margin-top:40vh;">Your generation has been cursed. Thanks for playing! 🐰💀</h1>';
            evilLaugh();
        }
    }, 90000);

    // Welcome toast
    showToast("Welcome to Fluffy Farm Friends! Have fun! 🌈🐥");

    console.log("CURSE FULLY RESTORED. Syntax demons banished. Victory troll auto-explodes. Jar dances again. Bloodline doom resumes. 🐰🥕💀😂");
});
