/* ============================================
   CHANEL FRAGRANCE QUIZ - JAVASCRIPT WITH SCORING SYSTEM
   ============================================ */

// Quiz State with Scoring System
let quizState = {
    currentScreen: 1,
    gender: '',
    answers: {
        personality: null,      // Question 3 - 70% weight
        drive: null,            // Question 4 - 10% weight
        inspiration: null,      // Question 5 - 10% weight
        visual: null            // Question 6 - 10% weight
    },
    scores: {
        visionary: 0,
        emancipated: 0,
        creative: 0,
        authentic: 0
    },
    dominantArchetype: null,
    recommendedFragrance: null
};

// Archetype Scoring Map - Maps answers to archetype scores
const archetypeMap = {
    // Question 3 - Personality (70% weight = 70 points each)
    personality: {
        'visionary': { visionary: 70, emancipated: 0, creative: 0, authentic: 0 },
        'emancipated': { visionary: 0, emancipated: 70, creative: 0, authentic: 0 },
        'creative': { visionary: 0, emancipated: 0, creative: 70, authentic: 0 },
        'authentic': { visionary: 0, emancipated: 0, creative: 0, authentic: 70 }
    },
    // Question 4 - What Drives You (10% weight = 10 points distributed)
    drive: {
        'onmove': { visionary: 5, emancipated: 5, creative: 0, authentic: 0 },
        'connections': { visionary: 0, emancipated: 5, creative: 5, authentic: 0 },
        'creating': { visionary: 5, emancipated: 0, creative: 5, authentic: 0 },
        'balance': { visionary: 0, emancipated: 0, creative: 5, authentic: 5 }
    },
    // Question 5 - What Inspires You (10% weight = 10 points distributed)
    inspiration: {
        'art': { visionary: 5, emancipated: 0, creative: 5, authentic: 0 },
        'adventure': { visionary: 5, emancipated: 5, creative: 0, authentic: 0 },
        'people': { visionary: 0, emancipated: 5, creative: 5, authentic: 0 },
        'nature': { visionary: 0, emancipated: 0, creative: 5, authentic: 5 }
    },
    // Question 6 - Visual World (10% weight = 10 points distributed)
    visual: {
        'modern': { visionary: 5, emancipated: 5, creative: 0, authentic: 0 },
        'timeless': { visionary: 0, emancipated: 0, creative: 5, authentic: 5 },
        'sensual': { visionary: 0, emancipated: 5, creative: 5, authentic: 0 },
        'bold': { visionary: 5, emancipated: 5, creative: 0, authentic: 0 }
    }
};

// Fragrance Recommendations with Details
const fragranceRecommendations = {
    elle: {
        visionary: {
            name: 'CHANEL N°5 L\'EAU',
            description: 'A fresh interpretation of the iconic legend. For the visionary woman who sees beyond the present and creates the future.',
            keyNotes: ['Bergamot', 'Ylang-Ylang', 'Jasmine', 'Sandalwood'],
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/n5/',
            collection: 'LES EXCLUSIVES POUR ELLE',
            essence: 'Innovation & Visionary Spirit',
            spirit: 'Timeless with a Modern Twist'
        },
        emancipated: {
            name: 'COCO MADEMOISELLE',
            description: 'Bold, spirited, and unapologetically confident. For the woman who defines her own path and inspires others to follow.',
            keyNotes: ['Orange', 'Jasmine', 'Vetiver', 'Patchouli'],
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/coco-mademoiselle/',
            collection: 'LES EXCLUSIVES POUR ELLE',
            essence: 'Liberation & Power',
            spirit: 'Bold Individuality'
        },
        creative: {
            name: 'GABRIELLE CHANEL ESSENCE',
            description: 'Pure expression of femininity and creativity. For the artist in every woman who refuses to be defined by a single identity.',
            keyNotes: ['Neroli', 'Peony', 'Tuberose', 'Musk'],
            image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/gabrielle-chanel-essence/',
            collection: 'LES EXCLUSIVES POUR ELLE',
            essence: 'Expression & Artistry',
            spirit: 'Radiant Creativity'
        },
        authentic: {
            name: 'CHANCE EAU TENDRE',
            description: 'Soft, romantic, and beautifully authentic. For the woman who finds truth in simplicity and beauty in authenticity.',
            keyNotes: ['Pink Pepper', 'Jasmine', 'Ambroxan'],
            image: 'https://images.unsplash.com/photo-1506755855726-667a0edf01d0?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/chance-eau-tendre/',
            collection: 'LES EXCLUSIVES POUR ELLE',
            essence: 'Truth & Simplicity',
            spirit: 'Tender Authenticity'
        }
    },
    lui: {
        visionary: {
            name: 'BLEU DE CHANEL PARFUM',
            description: 'A visionary fragrance for the forward-thinking man. Sophisticated and innovative, it reflects a man who shapes the future.',
            keyNotes: ['Lemon', 'Ginger', 'Sandalwood', 'Incense'],
            image: 'https://images.unsplash.com/photo-1620293915537-a3a5b5a2b3c5?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/bleu-de-chanel/',
            collection: 'LES EXCLUSIVES POUR LUI',
            essence: 'Innovation & Visionary Spirit',
            spirit: 'Timeless Vision'
        },
        emancipated: {
            name: 'ALLURE HOMME SPORT',
            description: 'Dynamic and liberated. For the man who writes his own rules and lives life on his own terms with confidence and style.',
            keyNotes: ['Bergamot', 'Lavender', 'Cedarwood', 'Musk'],
            image: 'https://images.unsplash.com/photo-1534356453888-bfc9eaea868d?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/allure-homme-sport/',
            collection: 'LES EXCLUSIVES POUR LUI',
            essence: 'Liberation & Power',
            spirit: 'Bold Individuality'
        },
        creative: {
            name: 'BLEU DE CHANEL EAU DE PARFUM',
            description: 'An artistic expression of masculine elegance. For the creative spirit who channels passion into his unique vision of style.',
            keyNotes: ['Citrus', 'Ambroxan', 'Sandalwood'],
            image: 'https://images.unsplash.com/photo-1579288282087-9d01f67fcc1c?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/bleu-de-chanel-eau-de-parfum/',
            collection: 'LES EXCLUSIVES POUR LUI',
            essence: 'Expression & Artistry',
            spirit: 'Creative Sophistication'
        },
        authentic: {
            name: 'PLATINUM ÉGOÏSTE',
            description: 'Pure, refined, and authentically himself. A fragrance of true substance for the man who values authenticity above all else.',
            keyNotes: ['Cardamom', 'Vetiver', 'Sandalwood', 'Amber'],
            image: 'https://images.unsplash.com/photo-1548695607-32e4395fcb5e?w=400&q=80',
            url: 'https://www.chanel.com/en_US/fragrances/platinum-egoiste/',
            collection: 'LES EXCLUSIVES POUR LUI',
            essence: 'Truth & Simplicity',
            spirit: 'Authentic Luxury'
        }
    }
};

// Record Answer Function
function recordAnswer(question, answer) {
    switch(question) {
        case 3:
            quizState.answers.personality = answer;
            break;
        case 4:
            quizState.answers.drive = answer;
            break;
        case 5:
            quizState.answers.inspiration = answer;
            break;
        case 6:
            quizState.answers.visual = answer;
            break;
    }
}

// Navigation Functions
function navigateTo(screen) {
    const currentScreen = document.getElementById(`screen-${quizState.currentScreen}`);
    const nextScreen = document.getElementById(`screen-${screen}`);
    
    if (currentScreen && nextScreen) {
        currentScreen.classList.remove('active');
        nextScreen.classList.add('active');
        quizState.currentScreen = screen;
        updateBackButton();
        updateProgressBar();
        
        // Calculate and display results when reaching screen 7
        if (screen === 7) {
            calculateScores();
            determineDominantArchetype();
            displayResults();
        }
    }
}

function goBack() {
    if (quizState.currentScreen > 1) {
        navigateTo(quizState.currentScreen - 1);
    }
}

function updateBackButton() {
    const backBtn = document.getElementById('back-btn');
    if (quizState.currentScreen === 1 || quizState.currentScreen === 7) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }
}

function updateProgressBar() {
    const progress = (quizState.currentScreen / 7) * 100;
    const progressFill = document.getElementById('progress');
    progressFill.style.width = progress + '%';
}

// State Management Functions
function setGender(gender) {
    quizState.gender = gender;
}

function setPersonality(personality) {
    quizState.answers.personality = personality;
    recordAnswer(3, personality);
}

function setDrive(drive) {
    quizState.answers.drive = drive;
    recordAnswer(4, drive);
}

function setInspiration(inspiration) {
    quizState.answers.inspiration = inspiration;
    recordAnswer(5, inspiration);
}

function setVisual(visual) {
    quizState.answers.visual = visual;
    recordAnswer(6, visual);
}

// Scoring System
function calculateScores() {
    // Reset scores
    quizState.scores = {
        visionary: 0,
        emancipated: 0,
        creative: 0,
        authentic: 0
    };

    // Question 3 - Personality (70% weight)
    if (quizState.answers.personality) {
        const personalityScores = archetypeMap.personality[quizState.answers.personality];
        Object.keys(personalityScores).forEach(archetype => {
            quizState.scores[archetype] += personalityScores[archetype];
        });
    }

    // Question 4 - Drive (10% weight)
    if (quizState.answers.drive) {
        const driveScores = archetypeMap.drive[quizState.answers.drive];
        Object.keys(driveScores).forEach(archetype => {
            quizState.scores[archetype] += driveScores[archetype];
        });
    }

    // Question 5 - Inspiration (10% weight)
    if (quizState.answers.inspiration) {
        const inspirationScores = archetypeMap.inspiration[quizState.answers.inspiration];
        Object.keys(inspirationScores).forEach(archetype => {
            quizState.scores[archetype] += inspirationScores[archetype];
        });
    }

    // Question 6 - Visual (10% weight)
    if (quizState.answers.visual) {
        const visualScores = archetypeMap.visual[quizState.answers.visual];
        Object.keys(visualScores).forEach(archetype => {
            quizState.scores[archetype] += visualScores[archetype];
        });
    }
}

function determineDominantArchetype() {
    // Find the archetype with the highest score
    let maxScore = Math.max(
        quizState.scores.visionary,
        quizState.scores.emancipated,
        quizState.scores.creative,
        quizState.scores.authentic
    );

    // Determine dominant archetype
    if (quizState.scores.visionary === maxScore) {
        quizState.dominantArchetype = 'visionary';
    } else if (quizState.scores.emancipated === maxScore) {
        quizState.dominantArchetype = 'emancipated';
    } else if (quizState.scores.creative === maxScore) {
        quizState.dominantArchetype = 'creative';
    } else if (quizState.scores.authentic === maxScore) {
        quizState.dominantArchetype = 'authentic';
    }
}

// Results Display
function displayResults() {
    const recommendation = fragranceRecommendations[quizState.gender][quizState.dominantArchetype];
    quizState.recommendedFragrance = recommendation;

    // Update fragrance image
    document.getElementById('fragrance-image').src = recommendation.image;
    document.getElementById('fragrance-image').alt = recommendation.name;

    // Update fragrance name & description
    document.getElementById('fragrance-name').textContent = recommendation.name;
    document.getElementById('fragrance-description').textContent = recommendation.description;

    // Update key notes
    const keyNotesList = document.getElementById('key-notes-list');
    keyNotesList.innerHTML = recommendation.keyNotes.map(note => 
        `<span class="note-tag">${note}</span>`
    ).join('');

    // Update archetype display
    const archetypeCapitalized = quizState.dominantArchetype.charAt(0).toUpperCase() + quizState.dominantArchetype.slice(1);
    document.getElementById('archetype-display').textContent = `Your Archetype: ${archetypeCapitalized}`;

    // Display score breakdown
    const scoreBreakdown = document.getElementById('score-breakdown');
    if (scoreBreakdown) {
        scoreBreakdown.innerHTML = `
            <strong>ARCHETYPE SCORES</strong><br>
            Visionary: ${quizState.scores.visionary} points<br>
            Emancipated: ${quizState.scores.emancipated} points<br>
            Creative: ${quizState.scores.creative} points<br>
            Authentic: ${quizState.scores.authentic} points
        `;
    }
}

// Open Fragrance Page
function openFragrancePage() {
    if (quizState.recommendedFragrance && quizState.recommendedFragrance.url) {
        window.open(quizState.recommendedFragrance.url, '_blank');
    }
}

// Reset Quiz
function resetQuiz() {
    quizState = {
        currentScreen: 1,
        gender: '',
        answers: {
            personality: null,
            drive: null,
            inspiration: null,
            visual: null
        },
        scores: {
            visionary: 0,
            emancipated: 0,
            creative: 0,
            authentic: 0
        },
        dominantArchetype: null,
        recommendedFragrance: null
    };

    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => screen.classList.remove('active'));
    document.getElementById('screen-1').classList.add('active');
    updateBackButton();
    updateProgressBar();
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', function() {
    updateBackButton();
    updateProgressBar();
});
