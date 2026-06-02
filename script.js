/* ============================================
   CHANEL FRAGRANCE QUIZ - JAVASCRIPT
   ============================================ */

// Quiz State
let quizState = {
    currentScreen: 1,
    gender: '',
    personality: '',
    drive: '',
    inspiration: '',
    visual: ''
};

// Fragrance Database
const fragrances = {
    elle: {
        visionary: {
            onmove: {
                art: { modern: 'ALLURE SPORT', sensual: 'CHANCE', timeless: 'N°5', bold: 'COCO MADEMOISELLE' },
                connections: { modern: 'CHANCE', sensual: 'GABRIELLE', timeless: 'N°5', bold: 'COCO NOIR' },
                creating: { modern: 'CHANCE EAU FRAÎCHE', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5 EAU PREMIÈRE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'N°5 L\'EAU', bold: 'COCO' }
            },
            adventure: {
                art: { modern: 'ALLURE SPORT', sensual: 'CHANCE', timeless: 'N°5', bold: 'COCO MADEMOISELLE' },
                connections: { modern: 'ALLURE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE', bold: 'COCO' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            people: {
                art: { modern: 'CHANCE', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5', bold: 'COCO NOIR' },
                connections: { modern: 'CHANCE EAU TENDRE', sensual: 'GABRIELLE', timeless: 'N°5 L\'EAU', bold: 'COCO MADEMOISELLE' },
                creating: { modern: 'CHANCE EAU FRAÎCHE', sensual: 'GABRIELLE CHANEL', timeless: 'N°5 EAU PREMIÈRE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE', sensual: 'CHANCE', timeless: 'CRISTALLE', bold: 'COCO' }
            },
            nature: {
                art: { modern: 'CRISTALLE', sensual: 'CHANCE EAU TENDRE', timeless: 'N°5', bold: 'COCO CHANEL' },
                connections: { modern: 'ALLURE', sensual: 'GABRIELLE CHANEL', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            }
        },
        emancipated: {
            onmove: {
                art: { modern: 'COCO MADEMOISELLE', sensual: 'GABRIELLE', timeless: 'N°5', bold: 'COCO NOIR' },
                connections: { modern: 'COCO', sensual: 'CHANCE', timeless: 'CRISTALLE', bold: 'COCO MADEMOISELLE' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5 EAU PREMIÈRE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE', sensual: 'CHANCE EAU FRAÎCHE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO' }
            },
            adventure: {
                art: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO NOIR' },
                connections: { modern: 'COCO MADEMOISELLE', sensual: 'CHANCE TENDER', timeless: 'N°5', bold: 'COCO' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'GABRIELLE CHANEL', timeless: 'CRISTALLE EAU VERTE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE', timeless: 'N°5 L\'EAU', bold: 'COCO MADEMOISELLE' }
            },
            people: {
                art: { modern: 'COCO', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5 EAU PREMIÈRE', bold: 'COCO NOIR' },
                connections: { modern: 'COCO MADEMOISELLE', sensual: 'CHANCE', timeless: 'CRISTALLE', bold: 'COCO' },
                creating: { modern: 'ALLURE', sensual: 'GABRIELLE', timeless: 'N°5', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            nature: {
                art: { modern: 'CRISTALLE', sensual: 'GABRIELLE CHANEL', timeless: 'N°5', bold: 'COCO' },
                connections: { modern: 'ALLURE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE', timeless: 'N°5 L\'EAU', bold: 'COCO' }
            }
        },
        creative: {
            onmove: {
                art: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5 EAU PREMIÈRE', bold: 'MADEMOISELLE' },
                connections: { modern: 'CHANCE EAU FRAÎCHE', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'CHANCE', timeless: 'N°5', bold: 'COCO' },
                balance: { modern: 'ALLURE', sensual: 'CHANCE EAU TENDRE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            adventure: {
                art: { modern: 'COCO MADEMOISELLE', sensual: 'GABRIELLE CHANEL', timeless: 'N°5', bold: 'COCO NOIR' },
                connections: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE', bold: 'MADEMOISELLE' },
                creating: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE', timeless: 'N°5 L\'EAU', bold: 'COCO' },
                balance: { modern: 'ALLURE', sensual: 'CHANCE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            people: {
                art: { modern: 'CHANCE', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5 EAU PREMIÈRE', bold: 'COCO NOIR' },
                connections: { modern: 'CHANCE EAU TENDRE', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'CHANCE EAU FRAÎCHE', timeless: 'N°5', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE', timeless: 'N°5 L\'EAU', bold: 'COCO MADEMOISELLE' }
            },
            nature: {
                art: { modern: 'CRISTALLE', sensual: 'GABRIELLE CHANEL', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO' },
                connections: { modern: 'ALLURE', sensual: 'CHANCE TENDER', timeless: 'N°5', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'N°5 L\'EAU', bold: 'COCO' }
            }
        },
        authentic: {
            onmove: {
                art: { modern: 'ALLURE', sensual: 'GABRIELLE', timeless: 'N°5', bold: 'COCO NOIR' },
                connections: { modern: 'CHANCE', sensual: 'GABRIELLE CHANEL', timeless: 'CRISTALLE', bold: 'COCO' },
                creating: { modern: 'ALLURE SPORT', sensual: 'CHANCE EAU FRAÎCHE', timeless: 'N°5 EAU PREMIÈRE', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            adventure: {
                art: { modern: 'CRISTALLE', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5', bold: 'COCO' },
                connections: { modern: 'ALLURE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT EXTREME', sensual: 'GABRIELLE', timeless: 'CRISTALLE', bold: 'COCO MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE', timeless: 'N°5 L\'EAU', bold: 'COCO' }
            },
            people: {
                art: { modern: 'CHANCE EAU FRAÎCHE', sensual: 'GABRIELLE CHANEL', timeless: 'N°5 EAU PREMIÈRE', bold: 'COCO NOIR' },
                connections: { modern: 'COCO MADEMOISELLE', sensual: 'CHANCE', timeless: 'CRISTALLE', bold: 'COCO' },
                creating: { modern: 'ALLURE', sensual: 'GABRIELLE ESSENCE', timeless: 'N°5', bold: 'MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE EAU TENDRE', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO MADEMOISELLE' }
            },
            nature: {
                art: { modern: 'CRISTALLE', sensual: 'GABRIELLE', timeless: 'N°5', bold: 'COCO' },
                connections: { modern: 'ALLURE', sensual: 'CHANCE TENDER', timeless: 'CRISTALLE EAU VERTE', bold: 'COCO NOIR' },
                creating: { modern: 'ALLURE SPORT', sensual: 'GABRIELLE CHANEL', timeless: 'CRISTALLE', bold: 'COCO MADEMOISELLE' },
                balance: { modern: 'ALLURE SENSUELLE', sensual: 'CHANCE', timeless: 'N°5 L\'EAU', bold: 'COCO' }
            }
        }
    },
    lui: {
        visionary: {
            onmove: {
                art: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT EX', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            adventure: {
                art: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT EXTREME', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            people: {
                art: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' },
                creating: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' }
            },
            nature: {
                art: { modern: 'POUR MONSIEUR', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                creating: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM ÉGOÏSTE' }
            }
        },
        emancipated: {
            onmove: {
                art: { modern: 'PLATINUM', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT EXTREME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                balance: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            adventure: {
                art: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT EXTREME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            people: {
                art: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' }
            },
            nature: {
                art: { modern: 'POUR MONSIEUR', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' }
            }
        },
        creative: {
            onmove: {
                art: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT EXTREME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                balance: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            adventure: {
                art: { modern: 'PLATINUM', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM ÉGOÏSTE' },
                creating: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                balance: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' }
            },
            people: {
                art: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                creating: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' }
            },
            nature: {
                art: { modern: 'POUR MONSIEUR', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            }
        },
        authentic: {
            onmove: {
                art: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            adventure: {
                art: { modern: 'POUR MONSIEUR', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' }
            },
            people: {
                art: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' },
                connections: { modern: 'POUR UN HOMME', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'PLATINUM' },
                creating: { modern: 'ALLURE HOMME', sensual: 'ALLURE HOMME SPORT', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'ALLURE HOMME INTENSE' }
            },
            nature: {
                art: { modern: 'POUR MONSIEUR', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' },
                connections: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME INTENSE', timeless: 'POUR MONSIEUR CONCENTRÉ', bold: 'ALLURE HOMME INTENSE' },
                creating: { modern: 'ALLURE HOMME', sensual: 'POUR UN HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM ÉGOÏSTE' },
                balance: { modern: 'ALLURE HOMME SPORT', sensual: 'ALLURE HOMME', timeless: 'POUR MONSIEUR', bold: 'PLATINUM' }
            }
        }
    }
};

// Fragrance Descriptions
const fragranceDescriptions = {
    'ALLURE SPORT': 'Fresh, sporty, and energetic. Perfect for the always-on-the-move individual.',
    'CHANCE': 'Lucky and charming. A fragrance for those who seize every moment.',
    'N°5': 'Timeless elegance. The most iconic fragrance, symbolizing pure femininity.',
    'COCO MADEMOISELLE': 'Bold and spirited. For the modern woman with attitude.',
    'GABRIELLE': 'Radiant and free-spirited. Celebrating self-expression and authenticity.',
    'CRISTALLE': 'Fresh and luminous. Elegant simplicity in every spray.',
    'COCO': 'Sensual and intriguing. Classic luxury with a mysterious edge.',
    'COCO NOIR': 'Dark and passionate. Intensity wrapped in sophistication.',
    'ALLURE': 'Seductive and captivating. Timeless allure that never fades.',
    'MADEMOISELLE': 'Young, playful, and daring. For the independent spirit.',
    'ALLURE HOMME SPORT': 'Dynamic and fresh. For the active modern man.',
    'ALLURE HOMME': 'Confident and sensual. The embodiment of masculine elegance.',
    'POUR MONSIEUR': 'Classic and distinguished. Timeless masculine sophistication.',
    'PLATINUM': 'Modern and bold. For the man with contemporary vision.',
    'POUR UN HOMME': 'Refined and elegant. Traditional luxury meets modern sensibility.',
    'ALLURE HOMME INTENSE': 'Powerful and passionate. Intensity with refinement.',
    'GABRIELLE ESSENCE': 'Pure essence of femininity. Light, fresh, and liberating.',
    'GABRIELLE CHANEL': 'Full-bodied and expressive. The complete Gabrielle experience.',
    'CHANCE EAU TENDRE': 'Soft and romantic. For moments of tender emotion.',
    'CHANCE EAU FRAÎCHE': 'Crisp and uplifting. Pure joy in a bottle.',
    'CRISTALLE EAU VERTE': 'Green and refreshing. Nature\'s freshness captured.',
    'N°5 L\'EAU': 'Fresh interpretation of a legend. Modern take on a classic.',
    'N°5 EAU PREMIÈRE': 'The first encounter. Light and transcendent.',
    'POUR MONSIEUR CONCENTRÉ': 'Pure concentration. Maximum intensity and depth.',
    'PLATINUM ÉGOÏSTE': 'Unapologetically bold. Pure individual expression.',
    'ALLURE HOMME SPORT EXTREME': 'Ultimate intensity for the extreme sportsman.',
    'ALLURE HOMME SPORT EX': 'Extreme sports energy. Maximum performance fragrance.'
};

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
    quizState.personality = personality;
}

function setDrive(drive) {
    quizState.drive = drive;
}

function setInspiration(inspiration) {
    quizState.inspiration = inspiration;
}

function setVisual(visual) {
    quizState.visual = visual;
}

// Results Calculation and Display
function displayResults() {
    const fragrance = fragrances[quizState.gender][quizState.personality][quizState.drive][quizState.inspiration][quizState.visual];
    const description = fragranceDescriptions[fragrance];
    
    const collection = getCollection(quizState.gender);
    const essence = getEssence(quizState.personality);
    const spirit = getSpirit(quizState.visual);
    
    document.getElementById('result-name').textContent = fragrance;
    document.getElementById('result-description').textContent = description;
    document.getElementById('result-collection').textContent = collection;
    document.getElementById('result-essence').textContent = essence;
    document.getElementById('result-spirit').textContent = spirit;
}

function getCollection(gender) {
    return gender === 'elle' ? 'LES EXCLUSIVES POUR ELLE' : 'LES EXCLUSIVES POUR LUI';
}

function getEssence(personality) {
    const essences = {
        'visionary': 'Innovation & Vision',
        'emancipated': 'Liberation & Power',
        'creative': 'Expression & Artistry',
        'authentic': 'Truth & Simplicity'
    };
    return essences[personality];
}

function getSpirit(visual) {
    const spirits = {
        'modern': 'Contemporary Luxury',
        'timeless': 'Eternal Elegance',
        'sensual': 'Passionate Warmth',
        'bold': 'Daring Individuality'
    };
    return spirits[visual];
}

// Reset Quiz
function resetQuiz() {
    quizState = {
        currentScreen: 1,
        gender: '',
        personality: '',
        drive: '',
        inspiration: '',
        visual: ''
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
    
    // Add event listener to trigger results when navigating to screen 7
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (quizState.currentScreen === 7) {
                displayResults();
            }
        });
    });
    
    const screen7 = document.getElementById('screen-7');
    observer.observe(screen7, { attributes: true });
});
