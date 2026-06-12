// --- Global Dictionaries and Mappings ---
const SCRIPT_DICTIONARY = {
    "Sri Rama": {
        devanagari: "श्री राम",
        english: "Sri Rama",
        telugu: "శ్రీరామ",
        tamil: "ஸ்ரீ ராம்",
        kannada: "ಶ್ರೀ ರಾಮ",
        bengali: "শ্রী রাম",
        gujarati: "શ્રી રામ",
        malayalam: "ശ്രീ രാമൻ",
        odia: "ଶ୍ରୀ ରାମ",
        punjabi: "ਸ਼੍ਰੀ ਰਾਮ"
    },
    "Sita Rama": {
        devanagari: "सीता राम",
        english: "Sita Rama",
        telugu: "సీతారామ",
        tamil: "சீதா ராம்",
        kannada: "ಸೀತಾ ರಾಮ",
        bengali: "সীতা রাম",
        gujarati: "સીતા રામ",
        malayalam: "സീതാ രാമൻ",
        odia: "ସୀତା ରାମ",
        punjabi: "ਸੀਤਾ ਰਾਮ"
    },
    "Jai Sri Ram": {
        devanagari: "जय श्री राम",
        english: "Jai Sri Ram",
        telugu: "జై శ్రీరామ్",
        tamil: "ஜெய் ஸ்ரீ ராம்",
        kannada: "ಜೈ ಶ್ರೀ ರಾಮ್",
        bengali: "জয় শ্রী রাম",
        gujarati: "જય શ્રી રામ",
        malayalam: "ജയ് ശ്രീ റാം",
        odia: "ଜୟ ଶ୍ରୀ ରାମ",
        punjabi: "ਜੈ ਸ਼੍ਰੀ ਰਾਮ"
    },
    "Rama": {
        devanagari: "राम",
        english: "Rama",
        telugu: "రామ",
        tamil: "ராம்",
        kannada: "ರಾಮ",
        bengali: "রাম",
        gujarati: "રામ",
        malayalam: "രാമ",
        odia: "ରାମ",
        punjabi: "ਰਾਮ"
    },
    "Om Sri Ramaya Namaha": {
        devanagari: "ॐ श्री रामाय नमः",
        english: "Om Sri Ramaya Namaha",
        telugu: "ఓం శ్రీ రామాయ నమః",
        tamil: "ஓம் ஸ்ரீ ராமாய நமஹ",
        kannada: "ಓಂ ಶ್ರೀ ರಾಮಾಯ ನಮಃ",
        bengali: "ওঁ শ্রী রামায় নমঃ",
        gujarati: "ૐ શ્રી રામાય નમઃ",
        malayalam: "ഓം ശ്രീ രാമായ നമഃ",
        odia: "ଓଁ ଶ୍ରୀ ରାମାୟ ନମଃ",
        punjabi: "ਓਮ ਸ਼੍ਰੀ ਰਾਮਾਏ ਨਮਹ"
    },
    "Om Namah Shivaya": {
        devanagari: "ॐ नमः शिवाय",
        english: "Om Namah Shivaya",
        telugu: "ఓం నమః శివాయ",
        tamil: "ஓம் நமச்சிவாய",
        kannada: "ಓಂ ನಮಃ ಶಿವಾಯ",
        bengali: "ওঁ নমঃ শিবায়",
        gujarati: "ૐ નમઃ શિવાય",
        malayalam: "ഓം നമശിവായ",
        odia: "ଓଁ ନମଃ ଶିବାୟ",
        punjabi: "ਓਮ ਨਮਹ ਸ਼ਿਵਾਏ"
    },
    "Om Ganeshaya Namaha": {
        devanagari: "ॐ गणपतये नमः",
        english: "Om Ganeshaya Namaha",
        telugu: "ఓం గణపతయే నమః",
        tamil: "ஓம் கணபதயே நமஹ",
        kannada: "ಓಂ ಗಣಪತಯೇ ನಮಃ",
        bengali: "ওঁ গণপতয়ে নমঃ",
        gujarati: "ૐ ગણપતયે નમઃ",
        malayalam: "ഓം ഗണപതയേ നമഃ",
        odia: "ଓଁ ଗଣପତୟେ ନମଃ",
        punjabi: "ਓਮ ਗਣਪਤਏ ਨਮਹ"
    },
    "Om Namo Bhagavate Vasudevaya": {
        devanagari: "ॐ नमो भगवते वासुदेवाय",
        english: "Om Namo Bhagavate Vasudevaya",
        telugu: "ఓం నమో భగవతే వాసుదేవాయ",
        tamil: "ஓம் நமோ பகவதே வாசுதேவாய",
        kannada: "ಓಂ ನಮೋ ಭಗವತೇ ವಾಸುದೇವಾಯ",
        bengali: "ওঁ নমো ভগবতে বাসুদেবায়",
        gujarati: "ૐ નમો ભગવતે વાસુદેવાય",
        malayalam: "ഓം നമോ ഭഗവതേ വാസുദേവായ",
        odia: "ଓଁ ନମୋ ଭగବତେ ବାସୁଦେବାୟ",
        punjabi: "ਓਮ ਨਮੋ ਭਗਵਤੇ ਵਾਸੁਦੇਵਾਏ"
    },
    "Hare Krishna Mahamantra": {
        devanagari: "हरे कृष्ण",
        english: "Hare Krishna",
        telugu: "హరే కృష్ణ",
        tamil: "ஹரே கிருஷ்ணா",
        kannada: "ಹರೇ ಕೃಷ್ಣ",
        bengali: "হরে কৃষ্ণ",
        gujarati: "હરે કૃષ્ણ",
        malayalam: "ഹരേ കൃഷ്ണ",
        odia: "ହਰੇ କୃଷ୍ଣ",
        punjabi: "ਹਰੇ ਕ੍ਰਿਸ਼ਨ"
    },
    "Om Ham Hanumate Namaha": {
        devanagari: "ॐ हं हनुमते नमः",
        english: "Om Ham Hanumate Namaha",
        telugu: "ఓం హం హనుమతే నమః",
        tamil: "ஓம் ஹம் ஹனுமதே நமஹ",
        kannada: "ಓಂ హం హనుమతే నమః",
        bengali: "ওঁ হং হনুমতে নমঃ",
        gujarati: "ૐ હં હનુમતે નમઃ",
        malayalam: "ഓം ഹം ഹനുമതേ നമഃ",
        odia: "ଓଁ ହଁ ହନୁମତେ ନମଃ",
        punjabi: "ਓਮ ਹਂ ਹਨੁਮਤੇ ਨਮਹ"
    }
};

// Spelling arrays for spelling mode (always matched to letters on keyboard)
const SPELLING_ARRAYS = {
    "Sri Rama": ["S", "R", "I", "R", "A", "M", "A"],
    "Sita Rama": ["S", "I", "T", "A", "R", "A", "M", "A"],
    "Jai Sri Ram": ["J", "A", "I", "S", "R", "I", "R", "A", "M"],
    "Rama": ["R", "A", "M", "A"],
    "Om Sri Ramaya Namaha": ["O", "M", "S", "R", "I", "R", "A", "M", "A", "Y", "A", "N", "A", "M", "A", "H", "A"],
    "Om Namah Shivaya": ["O", "M", "N", "A", "M", "A", "H", "S", "H", "I", "V", "A", "Y", "A"],
    "Om Ganeshaya Namaha": ["O", "M", "G", "A", "N", "E", "S", "H", "A", "Y", "A", "N", "A", "M", "A", "H", "A"],
    "Om Namo Bhagavate Vasudevaya": ["O", "M", "N", "A", "M", "O", "B", "H", "A", "G", "A", "V", "A", "T", "E", "V", "A", "S", "U", "D", "E", "V", "A", "Y", "A"],
    "Hare Krishna Mahamantra": ["H", "A", "R", "E", "K", "R", "I", "S", "H", "N", "A"],
    "Om Ham Hanumate Namaha": ["O", "M", "H", "A", "M", "H", "A", "N", "U", "M", "A", "T", "E", "N", "A", "M", "A", "H", "A"]
};

const CLICKABLE_SYLLABLES = {
    "Sri Rama": {
        devanagari: ["श्री", "रा", "म"],
        english: ["S", "r", "i", "R", "a", "m", "a"],
        telugu: ["శ్రీ", "రా", "మ"],
        tamil: ["ஸ்ரீ", "ரா", "ம்"],
        kannada: ["ಶ್ರೀ", "ರಾ", "ಮ"],
        bengali: ["শ্রী", "রা", "ম"],
        gujarati: ["શ્રી", "રા", "મ"],
        malayalam: ["ശ്രീ", "രാ", "മ", "ൻ"],
        odia: ["ଶ୍ରୀ", "ରା", "ମ"],
        punjabi: ["ਸ਼੍ਰੀ", "ਰਾ", "ਮ"]
    },
    "Sita Rama": {
        devanagari: ["सी", "ता", "रा", "म"],
        english: ["S", "i", "t", "a", "R", "a", "m", "a"],
        telugu: ["సీ", "తా", "రా", "మ"],
        tamil: ["சீ", "தா", "ரா", "ம்"],
        kannada: ["ಸೀ", "ತಾ", "ರಾ", "ಮ"],
        bengali: ["সী", "তা", "রা", "ম"],
        gujarati: ["સી", "તા", "રા", "મ"],
        malayalam: ["സീ", "താ", "രാ", "മ", "ൻ"],
        odia: ["ସୀ", "ତା", "ରା", "ମ"],
        punjabi: ["ਸੀ", "ਤਾ", "ਰਾ", "ਮ"]
    },
    "Jai Sri Ram": {
        devanagari: ["ज", "य", "श्री", "रा", "म"],
        english: ["J", "a", "i", "S", "r", "i", "R", "a", "m"],
        telugu: ["జై", "శ్రీ", "రా", "మ్"],
        tamil: ["ஜெ", "ய்", "ஸ்ரீ", "ரா", "ம்"],
        kannada: ["ಜೈ", "ಶ್ರೀ", "ರಾ", "ಮ್"],
        bengali: ["জ", "য়", "শ্রী", "রা", "ম"],
        gujarati: ["જ", "ય", "શ્રી", "રા", "મ"],
        malayalam: ["ജ", "യ്", "ശ്രീ", "റാം"],
        odia: ["ଜ", "ୟ", "ଶ୍ରୀ", "ରା", "ମ"],
        punjabi: ["ਜੈ", "ਸ਼੍ਰੀ", "ਰਾ", "ਮ"]
    },
    "Rama": {
        devanagari: ["रा", "म"],
        english: ["R", "a", "m", "a"],
        telugu: ["రా", "మ"],
        tamil: ["ரா", "ம்"],
        kannada: ["ರಾ", "ಮ"],
        bengali: ["রা", "ম"],
        gujarati: ["રા", "મ"],
        malayalam: ["രാ", "മ"],
        odia: ["ରା", "ମ"],
        punjabi: ["ਰਾ", "ਮ"]
    },
    "Om Sri Ramaya Namaha": {
        devanagari: ["ॐ", "श्री", "रा", "मा", "य", "न", "म", "ः"],
        english: ["O", "m", "S", "r", "i", "R", "a", "m", "a", "y", "a", "N", "a", "m", "a", "h", "a"],
        telugu: ["ఓం", "శ్రీ", "రా", "మా", "య", "న", "మ", "హ"],
        tamil: ["ஓ", "ம்", "ஸ்ரீ", "ரா", "மா", "ய", "ந", "ம", "ஹ"],
        kannada: ["ಓಂ", "ಶ್ರೀ", "ರಾ", "ಮಾ", "ಯ", "ನ", "ಮ", "ಹ"],
        bengali: ["ওঁ", "শ্রী", "রা", "মা", "য়", "ন", "ম", "ঃ"],
        gujarati: ["ૐ", "શ્રી", "રા", "મા", "ય", "ન", "મ", "ઃ"],
        malayalam: ["ഓം", "ശ്രീ", "രാ", "മാ", "യ", "ന", "മ", "ഃ"],
        odia: ["ଓଁ", "ଶ୍ରୀ", "ରା", "ମା", "ୟ", "ନ", "ମ", "ଃ"],
        punjabi: ["ਓ", "ਮ", "ਸ਼੍ਰੀ", "ਰਾ", "ਮਾ", "ਏ", "ਨ", "ਮ", "ਹ"]
    },
    "Om Namah Shivaya": {
        devanagari: ["ॐ", "नमः", "शिवाय"],
        english: ["Om", "Namah", "Shivaya"],
        telugu: ["ఓం", "నమః", "శివాయ"],
        tamil: ["ஓம்", "நமச்சிவாய"],
        kannada: ["ಓಂ", "ನಮಃ", "ಶಿವಾಯ"],
        bengali: ["ওঁ", "নমঃ", "শিবায়"],
        gujarati: ["ૐ", "નમઃ", "શિવાય"],
        malayalam: ["ഓം", "നമശിവായ"],
        odia: ["ଓଁ", "ନମଃ", "ଶିବାୟ"],
        punjabi: ["ਓਮ", "ਨਮਹ", "ਸ਼ਿਵਾਏ"]
    },
    "Om Ganeshaya Namaha": {
        devanagari: ["ॐ", "गणपतये", "नमः"],
        english: ["Om", "Ganeshaya", "Namaha"],
        telugu: ["ఓం", "గణపతయే", "నమః"],
        tamil: ["ஓம்", "கணபதயே", "நமஹ"],
        kannada: ["ಓಂ", "ಗಣಪತಯೇ", "ನಮಃ"],
        bengali: ["ওঁ", "গণপতয়ে", "নমঃ"],
        gujarati: ["ૐ", "ગણપતયે", "નમઃ"],
        malayalam: ["ഓം", "ഗണപതയേ", "നമഃ"],
        odia: ["ଓଁ", "ଗଣପତୟେ", "ନମଃ"],
        punjabi: ["ਓਮ", "ਗਣਪਤਏ", "ਨਮਹ"]
    },
    "Om Namo Bhagavate Vasudevaya": {
        devanagari: ["ॐ नमो", "भगवते", "वासुदेवाय"],
        english: ["Om Namo", "Bhagavate", "Vasudevaya"],
        telugu: ["ఓం నమో", "భగవతే", "వాసుదేవాయ"],
        tamil: ["ஓம் நமோ", "பகவதே", "வாசுதேவாய"],
        kannada: ["ಓಂ ನಮೋ", "ಭಗವತೇ", "ವಾಸುದೇವಾಯ"],
        bengali: ["ওঁ নমো", "ভগবতে", "বাসুদেবায়"],
        gujarati: ["ૐ નમો", "ભગવતે", "વાસુદેવાય"],
        malayalam: ["ഓം നമോ", "ഭഗവതേ", "വാസുദേവായ"],
        odia: ["ଓଁ ନମୋ", "ଭଗବତେ", "ବାସୁଦେବାୟ"],
        punjabi: ["ਓਮ ਨਮੋ", "ਭਗਵਤੇ", "ਵਾਸੁਦੇਵਾਏ"]
    },
    "Hare Krishna Mahamantra": {
        devanagari: ["हरे", "कृष्ण"],
        english: ["Hare", "Krishna"],
        telugu: ["హరే", "కృష్ణ"],
        tamil: ["ஹரே", "கிருஷ்ணா"],
        kannada: ["ಹರೇ", "ಕೃಷ್ಣ"],
        bengali: ["হরে", "কৃষ্ণ"],
        gujarati: ["હરે", "કૃષ્ણ"],
        malayalam: ["ഹരേ", "കൃഷ്ണ"],
        odia: ["ହਰੇ", "କୃଷ୍ଣ"],
        punjabi: ["ਹਰੇ", "ਕ੍ਰਿਸ਼ਨ"]
    },
    "Om Ham Hanumate Namaha": {
        devanagari: ["ॐ", "हं हनुमते", "नमः"],
        english: ["Om", "Ham Hanumate", "Namaha"],
        telugu: ["ఓం", "హం హనుమతే", "నమః"],
        tamil: ["ஓம்", "ஹம் ஹனுமதே", "நமஹ"],
        kannada: ["ಓಂ", "ಹಂ ಹನುಮತೇ", "ನಮಃ"],
        bengali: ["ওঁ", "হং হনুমতে", "নমঃ"],
        gujarati: ["ૐ", "હં હનુમતે", "નમઃ"],
        malayalam: ["ഓം", "ഹം ഹനുമതേ", "നമഃ"],
        odia: ["ଓଁ", "ହଁ ହନୁମତେ", "ନମଃ"],
        punjabi: ["ਓਮ", "ਹਂ ਹਨੁਮਤੇ", "ਨਮਹ"]
    }
};

const PAGE_CAPACITY = 60; // 60 names per page (10 rows of 6)

// --- Application State ---
let state = {
    totalCount: 0,
    target: 10000,
    writtenNames: [], // Array of strings (the text representation)
    streak: 0,
    lastWriteDate: null, // YYYY-MM-DD
    history: {}, // { 'YYYY-MM-DD': count }
    currentTemplate: "Sri Rama",
    currentScript: "devanagari",
    inputMode: "tap", // "tap" or "spelling"
    isBellSoundOn: true,
    isAmbientOn: false,
    profile: {
        loggedIn: false,
        name: "",
        email: "",
        avatar: "🌸 Lotus"
    }
};

// --- Spelling Input State ---
let spellingProgressIndex = 0;
let clickSpellingIndex = 0;

// --- Sound Synthesizer Engine ---
let audioCtx = null;
let tanpuraInterval = null;
let tanpuraNodes = [];

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// 1. Synthesize a realistic Indian temple bell sound
function playTempleBell() {
    if (!state.isBellSoundOn) return;
    initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const frequencies = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // Overtones (base C4, G4, C5, E5, G5, C6)
    const decays = [4.0, 3.2, 2.5, 1.8, 1.2, 0.8]; // Higher overtones decay faster
    const gains = [0.5, 0.35, 0.25, 0.15, 0.1, 0.05]; // Relative volumes

    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.7, now + 0.01);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);
    masterGain.connect(audioCtx.destination);

    // Dynamic metallic ring modulation (beating effect)
    const lfo = audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(4.5, now); // 4.5 Hz frequency modulation
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(5, now);
    lfoGain.connect(lfoGain); // Self gain or map directly below

    frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();

        // Slightly detune for metallic thickness
        const detuneValue = (Math.random() - 0.5) * 8; 
        osc.detune.setValueAtTime(detuneValue, now);

        // Map osc type to triangle/sine for clear bell resonance
        osc.type = index === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        oscGain.gain.setValueAtTime(0, now);
        oscGain.gain.linearRampToValueAtTime(gains[index], now + 0.005);
        oscGain.gain.exponentialRampToValueAtTime(0.00001, now + decays[index]);

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + decays[index] + 0.5);
    });
}

// 2. Synthesize continuous Tanpura Drone
function startTanpura() {
    initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const baseFreq = 146.83; // D3 Sa
    const intervals = [
        1.5,   // Pa (A3)
        2.0,   // High Sa (D4)
        2.0,   // High Sa (D4)
        1.0    // Low Sa (D3)
    ];

    let stringIndex = 0;
    const playString = () => {
        if (!state.isAmbientOn) return;
        const now = audioCtx.currentTime;
        const freq = baseFreq * intervals[stringIndex];

        // Synthesize string pluck
        const osc = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const gainNode = audioCtx.createGain();

        // Sawtooth wave for a buzzy, stringy timbre (Javari)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq - 0.5, now + 2.5); // Slow slide down

        // High resonance filter to capture the buzzing bridge spectrum
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 3, now); // Emphasize third harmonic
        filter.Q.setValueAtTime(8, now);

        // Exponential volume sweep
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.06, now + 0.08); // Pluck attack
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.4); // String ring decay

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // Keep track of active nodes to terminate safely if toggle off
        tanpuraNodes.push(osc);

        osc.start(now);
        osc.stop(now + 2.6);

        stringIndex = (stringIndex + 1) % 4;
    };

    // Pluck strings in a repetitive cycle
    playString();
    tanpuraInterval = setInterval(playString, 650); // 650ms delay between string plucks
}

function stopTanpura() {
    if (tanpuraInterval) {
        clearInterval(tanpuraInterval);
        tanpuraInterval = null;
    }
    tanpuraNodes.forEach(node => {
        try { node.stop(); } catch(e) {}
    });
    tanpuraNodes = [];
}

// --- Particle Sparkle System ---
const canvas = document.getElementById('canvas-particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 4;
        this.speedY = -Math.random() * 3 - 2;
        this.color = `hsl(${Math.random() * 20 + 35}, 100%, ${Math.random() * 20 + 60}%)`; // Saffron to gold
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.01;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.decay;
        if (this.size > 0.2) this.size -= 0.05;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function spawnParticles() {
    const inputElement = document.getElementById('keyboard-input');
    const tapBtn = document.getElementById('tap-write-btn');
    const rect = state.inputMode === 'tap' ? tapBtn.getBoundingClientRect() : inputElement.getBoundingClientRect();
    
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(startX, startY));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

// --- Local Storage Helpers ---
function loadProgress() {
    const saved = localStorage.getItem('rama_koti_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            // Ensure lists aren't null
            if (!state.writtenNames) state.writtenNames = [];
            if (!state.history) state.history = {};
            if (!state.profile) {
                state.profile = {
                    loggedIn: false,
                    name: "",
                    email: "",
                    avatar: "🌸 Lotus"
                };
            }
        } catch(e) {
            console.error("Failed to parse stored Rama Koti progress", e);
        }
    }
    updateStreak();
    syncUIElements();
    renderNotebookPage();
    renderHistoryLog();
}

function saveProgress() {
    localStorage.setItem('rama_koti_state', JSON.stringify(state));
}

function resetProgress() {
    if (confirm("Are you sure you want to delete all written names and reset your writing history? This action cannot be undone.")) {
        state.totalCount = 0;
        state.writtenNames = [];
        state.history = {};
        state.streak = 0;
        state.lastWriteDate = null;
        saveProgress();
        loadProgress();
        showNotification("Progress cleared successfully.");
    }
}

// --- Business & UI Core Functions ---

function getCurrentDateString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function updateStreak() {
    const today = getCurrentDateString();
    if (!state.lastWriteDate) {
        state.streak = 0;
        return;
    }

    const dateToday = new Date(today);
    const dateLast = new Date(state.lastWriteDate);
    const diffTime = Math.abs(dateToday - dateLast);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
        // Streak broken
        state.streak = 0;
    }
}

function getActiveFormattedName() {
    const templateData = SCRIPT_DICTIONARY[state.currentTemplate];
    if (templateData) {
        return templateData[state.currentScript] || templateData["english"];
    }
    return "राम";
}

function showNotification(message) {
    const modalText = document.getElementById('modal-certificate-text');
    const modal = document.getElementById('target-modal');
    modalText.innerHTML = message;
    modal.classList.add('active');
}

function addWrittenName() {
    spellingProgressIndex = 0;
    clickSpellingIndex = 0;
    const nameText = getActiveFormattedName();
    state.writtenNames.push(nameText);
    state.totalCount = state.writtenNames.length;

    // Track Daily History
    const today = getCurrentDateString();
    state.history[today] = (state.history[today] || 0) + 1;

    // Handle Streak Updates
    if (state.lastWriteDate !== today) {
        if (state.lastWriteDate) {
            const dateToday = new Date(today);
            const dateLast = new Date(state.lastWriteDate);
            const diffDays = Math.ceil(Math.abs(dateToday - dateLast) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                state.streak += 1;
            } else {
                state.streak = 1;
            }
        } else {
            state.streak = 1;
        }
        state.lastWriteDate = today;
    }

    saveProgress();
    spawnParticles();
    playTempleBell();

    // Check Milestones
    checkMilestones();

    // Update UI
    syncUIElements();
    
    // Auto-advance to the last page where the new name is added
    const totalPages = Math.max(1, Math.ceil(state.writtenNames.length / PAGE_CAPACITY));
    currentPageIndex = totalPages - 1;
    renderNotebookPage();
    renderHistoryLog();
}

function checkMilestones() {
    const count = state.totalCount;
    // Check if achieved general targets
    if (count === 108) {
        showNotification(`💐 <strong>Sadhana Milestone: 1 Round Completed!</strong><br><br>You have successfully written the divine name of Rama <strong>108 times</strong>. May your life be filled with peace, mindfulness, and strength.`);
    } else if (count === 1008) {
        showNotification(`✨ <strong>Great Devotion: 1,008 Names Written!</strong><br><br>Your dedication shines bright. You have completed <strong>1,008 Rama Namas</strong>, writing a beautiful chapter of calm and focus in your digital book.`);
    } else if (count === state.target) {
        showNotification(`🏆 <strong>Sadhana Milestone Achieved!</strong><br><br>Congratulations! You have completed your goal of writing <strong>${state.target.toLocaleString()}</strong> names. Your determination and continuous meditation are highly blessed.`);
    } else if (count % 1000 === 0 && count > 0) {
        // Minor sound or notification
        playTempleBell();
    }
}

// Current page browsing index
let currentPageIndex = 0;

function renderNotebookPage() {
    const gridContainer = document.getElementById('notebook-grid-page');
    gridContainer.innerHTML = '';

    const totalPages = Math.max(1, Math.ceil(state.writtenNames.length / PAGE_CAPACITY));
    
    // Bounds check
    if (currentPageIndex < 0) currentPageIndex = 0;
    if (currentPageIndex >= totalPages) currentPageIndex = totalPages - 1;

    // Get slice of names for current page
    const startIndex = currentPageIndex * PAGE_CAPACITY;
    const pageNames = state.writtenNames.slice(startIndex, startIndex + PAGE_CAPACITY);

    // Populate Page Grid
    for (let i = 0; i < PAGE_CAPACITY; i++) {
        const cell = document.createElement('div');
        
        if (i < pageNames.length) {
            cell.className = 'name-cell';
            cell.textContent = pageNames[i];
            
            // Small index label
            const label = document.createElement('span');
            label.className = 'name-cell-index';
            label.textContent = startIndex + i + 1;
            cell.appendChild(label);
        } else {
            cell.className = 'name-cell name-cell-empty';
            cell.textContent = ' ';
        }
        gridContainer.appendChild(cell);
    }

    // Update Page Browser Indicator
    document.getElementById('notebook-page-indicator').textContent = `Page ${currentPageIndex + 1} / ${totalPages}`;
    document.getElementById('btn-prev-page').disabled = (currentPageIndex === 0);
    document.getElementById('btn-next-page').disabled = (currentPageIndex >= totalPages - 1);
}

function renderHistoryLog() {
    const historyContainer = document.getElementById('history-items-container');
    historyContainer.innerHTML = '';

    const sortedDates = Object.keys(state.history).sort((a, b) => new Date(b) - new Date(a));

    if (sortedDates.length === 0) {
        historyContainer.innerHTML = `
            <div class="history-item" style="border: none; justify-content: center; color: var(--text-muted);">
                No writing sessions recorded yet. Start typing above to make history.
            </div>`;
        return;
    }

    sortedDates.forEach(date => {
        const count = state.history[date];
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <span class="history-date">📅 ${formattedDate}</span>
            <span class="history-count">${count} names</span>
        `;
        historyContainer.appendChild(item);
    });
}

function syncUIElements() {
    // Stats counters
    document.getElementById('stat-total-count').textContent = state.totalCount.toLocaleString();
    document.getElementById('stat-target').textContent = state.target.toLocaleString();
    
    // Page Ratio
    const currentPageNamesCount = state.writtenNames.length % PAGE_CAPACITY;
    document.getElementById('stat-pages').textContent = Math.floor(state.writtenNames.length / PAGE_CAPACITY);
    document.getElementById('stat-page-ratio').textContent = `${currentPageNamesCount} / ${PAGE_CAPACITY} names on current page`;

    // Target Progress percentage
    const progressPercent = Math.min(100, Math.floor((state.totalCount / state.target) * 100));
    document.getElementById('stat-target-progress').textContent = `${progressPercent}% completed`;

    // Streak
    document.getElementById('stat-streak').textContent = `${state.streak} ${state.streak === 1 ? 'day' : 'days'}`;

    // Select boxes sync
    document.getElementById('name-template').value = state.currentTemplate;
    document.getElementById('script-lang').value = state.currentScript;
    document.getElementById('writing-target').value = state.target;
    document.getElementById('input-mode').value = state.inputMode;

    // Sound Toggles UI
    document.getElementById('sound-bell-toggle').textContent = `🔔 Sound FX: ${state.isBellSoundOn ? 'On' : 'Off'}`;
    document.getElementById('sound-bell-toggle').className = state.isBellSoundOn ? 'control-btn active' : 'control-btn';
    
    document.getElementById('ambient-audio-toggle').textContent = `🪕 Tanpura: ${state.isAmbientOn ? 'On' : 'Off'}`;
    document.getElementById('ambient-audio-toggle').className = state.isAmbientOn ? 'control-btn active' : 'control-btn';

    // Main header title translation
    document.getElementById('main-title').textContent = getActiveFormattedName();

    // Mode Toggle elements display
    const tapContainer = document.getElementById('tap-container-box');
    const inputContainer = document.getElementById('input-container-box');
    const promptContainer = document.getElementById('writing-prompt-container');

    if (state.inputMode === 'tap') {
        tapContainer.style.display = 'flex';
        inputContainer.style.display = 'none';
        promptContainer.style.display = 'none';
    } else {
        tapContainer.style.display = 'none';
        inputContainer.style.display = 'block';
        promptContainer.style.display = 'block';
        setupSpellingProgressUI();
    }
    updateUserProfileUI();
}

// --- DevaNama Profile & Leveling Helpers ---
function getSadhakaLevelInfo(count) {
    if (count < 108) {
        return { level: 1, title: "Sadhaka", nextTarget: 108, prevTarget: 0 };
    } else if (count < 1008) {
        return { level: 2, title: "Muni", nextTarget: 1008, prevTarget: 108 };
    } else if (count < 10000) {
        return { level: 3, title: "Yogi", nextTarget: 10000, prevTarget: 1008 };
    } else {
        return { level: 4, title: "Rishi", nextTarget: Infinity, prevTarget: 10000 };
    }
}

function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function updateUserProfileUI() {
    const profileSection = document.getElementById('user-profile-section');
    if (!profileSection) return;

    if (state.profile && state.profile.loggedIn) {
        const lvlInfo = getSadhakaLevelInfo(state.totalCount);
        const avatarEmoji = state.profile.avatar ? state.profile.avatar.split(' ')[0] : '\uD83C\uDF38';
        profileSection.innerHTML = `
            <div class="profile-info-container">
                <div class="profile-avatar-circle">${avatarEmoji}</div>
                <div class="profile-sadhaka-name">${escapeHTML(state.profile.name)}</div>
                <div class="profile-sadhaka-level">Level ${lvlInfo.level}: ${lvlInfo.title}</div>
                <button class="btn-profile-logout" id="btn-logout-trigger">\uD83D\uDEAA Logout</button>
            </div>
        `;
        document.getElementById('btn-logout-trigger').addEventListener('click', handleLogout);
    } else {
        profileSection.innerHTML = `
            <button class="btn-profile-login" id="btn-login-trigger">\uD83D\uDD12 Sadhaka Login</button>
        `;
        document.getElementById('btn-login-trigger').addEventListener('click', openLoginModal);
    }
}

function openLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.add('active');
        const inputField = document.getElementById('keyboard-input');
        if (inputField) inputField.blur();
    }
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('active');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const nameVal = document.getElementById('login-name').value.trim();
    const emailVal = document.getElementById('login-email').value.trim();
    const avatarVal = document.getElementById('login-avatar').value;

    state.profile = {
        loggedIn: true,
        name: nameVal || "Anonymous Sadhaka",
        email: emailVal || "",
        avatar: avatarVal || "\uD83C\uDF38 Lotus"
    };

    saveProgress();
    closeLoginModal();
    updateUserProfileUI();
    showNotification(`\uD83C\uDF38 Welcome, <strong>${escapeHTML(state.profile.name)}</strong>!<br><br>Your personalized sadhana space is now active. Keep writing to elevate your level.`);
}

function handleLogout() {
    if (confirm("Are you sure you want to log out? Your writing progress will remain saved locally.")) {
        state.profile = {
            loggedIn: false,
            name: "",
            email: "",
            avatar: "\uD83C\uDF38 Lotus"
        };
        saveProgress();
        updateUserProfileUI();
    }
}

// --- Sewa Donation Modal Helpers ---
function updateDonationQR(amount) {
    const qrImg = document.getElementById('qr-img-display');
    if (!qrImg) return;
    const upiLink = `upi://pay?pa=devanama@upi&pn=Devanama&am=${amount}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiLink)}`;
    qrImg.src = qrUrl;
}

function setupDonationListeners() {
    const donateTrigger = document.getElementById('btn-donate-trigger');
    const donateClose = document.getElementById('btn-donation-close');
    const customAmtInput = document.getElementById('custom-donation-amt');
    const presetBtns = document.querySelectorAll('.preset-amt-btn');
    const submitDonationBtn = document.getElementById('btn-submit-donation');

    if (donateTrigger) {
        donateTrigger.addEventListener('click', () => {
            document.getElementById('donation-modal').classList.add('active');
            const inputField = document.getElementById('keyboard-input');
            if (inputField) inputField.blur();
        });
    }

    if (donateClose) {
        donateClose.addEventListener('click', () => {
            document.getElementById('donation-modal').classList.remove('active');
        });
    }

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const val = btn.getAttribute('data-value');
            if (customAmtInput) customAmtInput.value = val;
            updateDonationQR(val);
        });
    });

    if (customAmtInput) {
        customAmtInput.addEventListener('input', (e) => {
            const val = e.target.value;
            presetBtns.forEach(b => {
                if (b.getAttribute('data-value') === val) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
            updateDonationQR(val);
        });
    }

    if (submitDonationBtn) {
        submitDonationBtn.addEventListener('click', () => {
            const val = customAmtInput ? customAmtInput.value : "501";
            showNotification(`\uD83D\uDCB3 <strong>PayPal / Stripe Gateway Redirect</strong><br><br>The credit card and PayPal payment gateway is currently under configuration for Devanama.online.<br><br>Please scan the UPI QR code to complete your voluntary Sewa of <strong>\u20B9${val}</strong>.`);
        });
    }
}

// Spelling Mode Helper setup
function setupSpellingProgressUI() {
    const letters = SPELLING_ARRAYS[state.currentTemplate] || ["R", "A", "M", "A"];
    const syllables = CLICKABLE_SYLLABLES[state.currentTemplate][state.currentScript] || letters;
    
    // Update top text guide
    const targetTextString = letters.join(" - ");
    document.getElementById('word-target-guide').textContent = targetTextString;

    // Populate the graphical spelling keyboard guides (clickable buttons!)
    const keysContainer = document.getElementById('spelling-guide-keys');
    keysContainer.innerHTML = '';

    syllables.forEach((syllable, index) => {
        const btn = document.createElement('button');
        btn.className = 'spell-key';
        if (index < clickSpellingIndex) {
            btn.className = 'spell-key completed';
        } else if (index === clickSpellingIndex) {
            btn.className = 'spell-key active';
        }
        btn.textContent = syllable;
        btn.addEventListener('click', () => handleSyllableClick(index));
        keysContainer.appendChild(btn);
    });

    const inputField = document.getElementById('keyboard-input');
    inputField.value = letters.slice(0, spellingProgressIndex).join("");
    inputField.placeholder = `Or type letters: ${letters.join("")}`;
}

// Handle Syllable Button Clicks (Click and Select)
function handleSyllableClick(index) {
    const letters = SPELLING_ARRAYS[state.currentTemplate] || ["R", "A", "M", "A"];
    const syllables = CLICKABLE_SYLLABLES[state.currentTemplate][state.currentScript] || letters;
    
    if (index === clickSpellingIndex) {
        clickSpellingIndex++;
        
        // Spawn micro particles
        spawnParticles();
        
        // Play soft pluck sound
        if (state.isBellSoundOn) {
            initAudio();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.frequency.setValueAtTime(320 + (clickSpellingIndex * 50), now);
            osc.type = 'triangle';
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.12, now + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + 0.2);
        }

        if (clickSpellingIndex >= syllables.length) {
            addWrittenName();
        } else {
            setupSpellingProgressUI();
        }
    }
}

// Handle Spelling Keystroke matching
function handleSpellingInput(e) {
    const letters = SPELLING_ARRAYS[state.currentTemplate] || ["R", "A", "M", "A"];
    const inputField = document.getElementById('keyboard-input');
    
    // Read keyboard text
    const expectedLetter = letters[spellingProgressIndex].toUpperCase();
    const pressedKey = e.key.toUpperCase();

    // Prevent default typing behavior so they must match the spelling array
    e.preventDefault();

    if (pressedKey === expectedLetter) {
        spellingProgressIndex++;
        
        // Spawn micro particles
        spawnParticles();

        if (spellingProgressIndex >= letters.length) {
            // Full name spelled!
            addWrittenName();
        } else {
            setupSpellingProgressUI();
        }
    } else {
        // Red shake feedback to show miskey
        inputField.style.borderColor = '#dc3545';
        setTimeout(() => {
            inputField.style.borderColor = '';
        }, 150);
    }
}

// Print / PDF Export logic
function exportPrasadBook() {
    const printWindow = window.open('', '_blank');
    const nameStr = getActiveFormattedName();
    
    // Create grids for printable pages
    let pagesHtml = '';
    const totalPages = Math.max(1, Math.ceil(state.writtenNames.length / PAGE_CAPACITY));

    for (let p = 0; p < totalPages; p++) {
        let gridCells = '';
        const pageNames = state.writtenNames.slice(p * PAGE_CAPACITY, (p + 1) * PAGE_CAPACITY);
        
        pageNames.forEach((name, idx) => {
            gridCells += `
                <div class="print-cell">
                    <span class="print-cell-text">${name}</span>
                    <span class="print-cell-idx">${(p * PAGE_CAPACITY) + idx + 1}</span>
                </div>
            `;
        });

        // Pad rest of the cells on the final page
        if (p === totalPages - 1) {
            for (let pad = pageNames.length; pad < PAGE_CAPACITY; pad++) {
                gridCells += `<div class="print-cell print-cell-empty"></div>`;
            }
        }

        pagesHtml += `
            <div class="print-page">
                <div class="print-page-header">
                    <span>DevaNama Sadhana Manuscript</span>
                    <span>Page ${p + 1}</span>
                </div>
                <div class="print-grid">
                    ${gridCells}
                </div>
                <div class="print-page-footer">
                    Total Written: ${state.totalCount} | Completed with Devotion
                </div>
            </div>
        `;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My DevaNama Prasad Book</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Yatra+One&family=Outfit:wght@400;600&display=swap">
            <style>
                * { box-sizing: border-box; }
                body {
                    font-family: 'Outfit', sans-serif;
                    background-color: #ffffff;
                    color: #222222;
                    margin: 0;
                    padding: 0;
                }
                .cover-page {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border: 15px double #d4af37;
                    padding: 2rem;
                    page-break-after: always;
                }
                .cover-logo {
                    font-family: 'Yatra One', cursive;
                    font-size: 5rem;
                    color: #ff7300;
                    margin-bottom: 1rem;
                }
                .cover-title {
                    font-family: 'Cinzel Decorative', serif;
                    font-size: 2.5rem;
                    color: #58181a;
                    margin-bottom: 2rem;
                }
                .cover-detail {
                    font-size: 1.2rem;
                    margin: 0.5rem 0;
                    color: #555555;
                }
                .cover-stamp {
                    margin-top: 4rem;
                    border: 2px dashed #d4af37;
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    color: #58181a;
                    font-weight: 600;
                }
                .print-page {
                    width: 100vw;
                    height: 100vh;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    page-break-after: always;
                    position: relative;
                }
                .print-page-header {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 2px solid #58181a;
                    padding-bottom: 0.5rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #58181a;
                    text-transform: uppercase;
                }
                .print-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 8px;
                    flex-grow: 1;
                    margin: 2rem 0;
                    align-content: start;
                }
                .print-cell {
                    border: 1px solid rgba(88, 24, 26, 0.25);
                    background-color: #fffcf5;
                    border-radius: 4px;
                    height: 55px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-family: 'Yatra One', cursive;
                    font-size: 1rem;
                    color: #58181a;
                    position: relative;
                }
                .print-cell-empty {
                    background-color: transparent;
                    border: 1px dashed rgba(88, 24, 26, 0.1);
                }
                .print-cell-idx {
                    position: absolute;
                    top: 2px;
                    right: 4px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.55rem;
                    color: rgba(88, 24, 26, 0.4);
                }
                .print-page-footer {
                    border-top: 1px solid #ddd;
                    padding-top: 0.5rem;
                    text-align: center;
                    font-size: 0.8rem;
                    color: #888;
                }
                @media print {
                    .print-page, .cover-page {
                        height: 100vh;
                        page-break-inside: avoid;
                    }
                }
            </style>
        </head>
        <body>
            <div class="cover-page">
                <div class="cover-logo">${nameStr}</div>
                <h1 class="cover-title">DevaNama Sadhana Book</h1>
                <div class="cover-detail">Total Divine Names Written: <strong>${state.totalCount.toLocaleString()}</strong></div>
                <div class="cover-detail">Status: Completed Milestone (${state.target.toLocaleString()})</div>
                <div class="cover-detail">Date of Compilation: ${new Date().toLocaleDateString()}</div>
                <div class="cover-stamp">
                     Mindful Practice Accomplished
                </div>
            </div>
            
            ${pagesHtml}

            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// --- DOM Event Listeners Setup ---

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();

    // 1. Inputs and Settings updates
    document.getElementById('name-template').addEventListener('change', (e) => {
        state.currentTemplate = e.target.value;
        spellingProgressIndex = 0; // reset typing progress
        clickSpellingIndex = 0; // reset click progress
        saveProgress();
        syncUIElements();
        renderNotebookPage();
    });

    document.getElementById('script-lang').addEventListener('change', (e) => {
        state.currentScript = e.target.value;
        spellingProgressIndex = 0; // reset typing progress
        clickSpellingIndex = 0; // reset click progress
        saveProgress();
        syncUIElements();
        renderNotebookPage();
    });

    document.getElementById('writing-target').addEventListener('change', (e) => {
        state.target = parseInt(e.target.value);
        saveProgress();
        syncUIElements();
    });

    document.getElementById('input-mode').addEventListener('change', (e) => {
        state.inputMode = e.target.value;
        spellingProgressIndex = 0;
        clickSpellingIndex = 0;
        saveProgress();
        syncUIElements();
        
        // Refocus typing input if switched to spelling mode
        if (state.inputMode === 'spelling') {
            document.getElementById('keyboard-input').focus();
        }
    });

    // 2. Typing Keystrokes
    const inputField = document.getElementById('keyboard-input');
    inputField.addEventListener('keydown', (e) => {
        if (state.inputMode === 'spelling') {
            handleSpellingInput(e);
        } else {
            // Meditative Tap Mode (Enter or Spacebar adds a name)
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                addWrittenName();
                inputField.value = ''; // Clear text field helper
            }
        }
    });

    // 3. Meditative Click/Tap Mode Button
    document.getElementById('tap-write-btn').addEventListener('click', () => {
        if (state.inputMode === 'tap') {
            addWrittenName();
        }
    });

    // 4. Sound Controls
    document.getElementById('sound-bell-toggle').addEventListener('click', () => {
        state.isBellSoundOn = !state.isBellSoundOn;
        if (state.isBellSoundOn) {
            playTempleBell();
        }
        saveProgress();
        syncUIElements();
    });

    document.getElementById('ambient-audio-toggle').addEventListener('click', () => {
        state.isAmbientOn = !state.isAmbientOn;
        if (state.isAmbientOn) {
            startTanpura();
        } else {
            stopTanpura();
        }
        saveProgress();
        syncUIElements();
    });

    // 5. Pagination Buttons
    document.getElementById('btn-prev-page').addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            renderNotebookPage();
        }
    });

    document.getElementById('btn-next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(state.writtenNames.length / PAGE_CAPACITY);
        if (currentPageIndex < totalPages - 1) {
            currentPageIndex++;
            renderNotebookPage();
        }
    });

    // 6. Export and Reset Buttons
    document.getElementById('btn-export-pdf').addEventListener('click', exportPrasadBook);
    document.getElementById('btn-reset-data').addEventListener('click', resetProgress);

    // 7. Modal Close Button
    document.getElementById('btn-modal-close').addEventListener('click', () => {
        document.getElementById('target-modal').classList.remove('active');
    });

    // 8. Mobile Menu Toggle Listeners
    const sidebarDrawer = document.getElementById('sidebar-drawer');
    const sidebarOverlay = document.getElementById('mobile-sidebar-overlay');

    function closeMobileMenu() {
        sidebarDrawer.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
        sidebarDrawer.classList.add('open');
        sidebarOverlay.classList.add('active');
    });

    document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);
    sidebarOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu automatically on setting changes for instant feedback
    document.getElementById('name-template').addEventListener('change', closeMobileMenu);
    document.getElementById('script-lang').addEventListener('change', closeMobileMenu);
    document.getElementById('writing-target').addEventListener('change', closeMobileMenu);
    document.getElementById('input-mode').addEventListener('change', closeMobileMenu);

    // DevaNama Login and Donation Event Bindings
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    const loginClose = document.getElementById('btn-login-close');
    if (loginClose) {
        loginClose.addEventListener('click', closeLoginModal);
    }
    const googleMock = document.getElementById('btn-google-mock');
    if (googleMock) {
        googleMock.addEventListener('click', () => {
            document.getElementById('login-name').value = "Devanand";
            document.getElementById('login-email').value = "devanand@gmail.com";
            document.getElementById('login-avatar').value = "\u0950 Om"; // ॐ Om Symbol
            const event = new Event('submit', { cancelable: true });
            loginForm.dispatchEvent(event);
        });
    }
    setupDonationListeners();

    // Auto-focus writing input on page click (for convenience)
    document.addEventListener('click', (e) => {
        // Prevent autofocus if sidebar drawer is open
        if (sidebarDrawer.classList.contains('open')) return;

        if (state.inputMode === 'spelling' && 
            e.target.tagName !== 'SELECT' && 
            e.target.tagName !== 'BUTTON' && 
            e.target.tagName !== 'INPUT') {
            inputField.focus();
        }
    });
});
