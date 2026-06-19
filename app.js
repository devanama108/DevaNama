// --- Supabase Cloud Database Configuration ---
// TO SETUP SUPABASE:
// 1. Create a project at https://supabaseClient.com
// 2. Paste your project's URL and API Anon Key below
const SUPABASE_URL = "https://davefumtisqmjblulfmu.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_TpQwPlzjj7OXRtrkrnmSig_tneootts";

let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    try {
        const lib = window.supabase || window.supabaseClient;
        if (lib && typeof lib.createClient === 'function') {
            supabaseClient = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else {
            console.error("Supabase library not found in window object.");
        }
    } catch (e) {
        console.error("Failed to initialize Supabase client:", e);
    }
}

// --- Global Debugging Error Catching ---
window.onerror = function(message, source, lineno, colno, error) {
    alert("DevaNama Javascript Error: " + message + " (at " + source + ":" + lineno + ")");
    return false;
};

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

const TRANSLATIONS = {
    english: {
        "landing-title": "देवनाम",
        "landing-subtitle": "DevaNama",
        "landing-desc": "Enter your spiritual name to personalize your sadhana book and track your chanting progress.",
        "label-login-name": "Your Spiritual Name",
        "label-login-email": "Email Address",
        "label-login-avatar": "Select Avatar Icon",
        "label-login-lang": "Select App Language",
        "btn-login-submit": "Log In",
        "btn-google-login": "Continue with Google",
        "brand-name": "देवनाम",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ Settings",
        "btn-login-trigger": "🔐 Sadhaka Login",
        "settings-title": "Sadhana Settings",
        "label-name-template": "Name / Mantra Template",
        "label-script-lang": "Script & Language",
        "label-writing-target": "Milestone Target",
        "label-input-mode": "Writing Mode",
        "sewa-title": "🌸 DevaNama Sewa",
        "sewa-desc": "Help us support servers & keep it ad-free.",
        "btn-donate-trigger": "🙏 Make a Donation",
        "diya-label": "Glow of Mindfulness",
        "stat-total-written": "Total Written",
        "stat-total-desc": "across all sessions",
        "stat-target-goal": "Target Goal",
        "stat-pages-filled": "Pages Filled",
        "stat-daily-streak": "Daily Streak",
        "stat-streak-desc": "consistent writing",
        "btn-export-pdf": "📄 Export Book",
        "btn-reset-data": "🔄 Reset Progress",
        "notebook-title": "📓 Sacred Manuscript Grid",
        "history-title": "📜 Daily Sadhana Log",
        "certificate-title": "Sadhana Milestone Achieved",
        "btn-modal-close": "Accept Blessings",
        "donation-title": "🌸 Make a Sewa",
        "donation-desc": "DevaNama runs purely on voluntary sewa. Help us support servers & keep it ad-free.",
        "qr-instructions": "Scan using GPay, PhonePe, Paytm or BHIM to contribute.",
        "btn-submit-donation": "Proceed with Card/PayPal",
        "tap-btn-native": "Write",
        "tap-btn-sub": "Write",
        "input-placeholder": "Click here and start typing...",
        "spelling-placeholder": "Or type letters: ",
        "spelling-instruction": "Type the letters <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> to write a name",
        "bell-on": "🔔 Sound FX: On",
        "bell-off": "🔔 Sound FX: Off",
        "tanpura-on": "🪕 Tanpura: On",
        "tanpura-off": "🪕 Tanpura: Off",
        "percent-completed": "{percent}% completed",
        "names-on-page": "{count} / {capacity} names on current page",
        "streak-days": "{streak} days",
        "streak-day": "{streak} day",
        "no-sessions": "No writing sessions recorded yet. Start typing above to make history.",
        "history-item-count": "{count} names",
        "reset-confirm": "Are you sure you want to delete all written names and reset your writing history? This action cannot be undone.",
        "reset-success": "Progress cleared successfully.",
        "logout-confirm": "Are you sure you want to log out? Your writing progress will remain saved locally.",
        "welcome-msg": "🌸 Welcome, <strong>{name}</strong>!<br><br>Your personalized sadhana space is now active. Keep writing to elevate your level.",
        "level-title": "Level {level}: {title}",
        "level-names": { 1: "Sadhaka", 2: "Muni", 3: "Yogi", 4: "Rishi" },
        "milestone-108": "💐 <strong>Sadhana Milestone: 1 Round Completed!</strong><br><br>You have successfully written the divine name of Rama <strong>108 times</strong>. May your life be filled with peace, mindfulness, and strength.",
        "milestone-1008": "✨ <strong>Great Devotion: 1,008 Names Written!</strong><br><br>Your dedication shines bright. You have completed <strong>1,008 Rama Namas</strong>, writing a beautiful chapter of calm and focus in your digital book.",
        "milestone-target": "🏆 <strong>Sadhana Milestone Achieved!</strong><br><br>Congratulations! You have completed your goal of writing <strong>{target}</strong> names. Your determination and continuous meditation are highly blessed.",
        "page-indicator": "Page {current} / {total}",
        "pdf-title": "DevaNama Prasad Book",
        "pdf-total": "Total Divine Names Written",
        "pdf-status": "Status",
        "pdf-completed": "Completed Milestone",
        "pdf-date": "Date of Compilation",
        "pdf-stamp": "Mindful Practice Accomplished",
        "pdf-page-header": "DevaNama Sadhana Manuscript",
        "pdf-page": "Page",
        "pdf-page-footer": "Total Written: {count} | Completed with Devotion",
        "label-password": "Password",
        "label-confirm-password": "Confirm Password",
        "btn-signup-submit": "Create Account & Enter",
        "prompt-no-account": "Don't have an account?",
        "link-signup": "Sign Up",
        "prompt-have-account": "Already have an account?",
        "link-login": "Login",
        "err-wrong-password": "❌ Incorrect credentials or password!",
        "err-password-mismatch": "❌ Passwords do not match!",
        "err-general": "❌ An error occurred. Please try again.",
        "msg-connecting": "Connecting to Cloud Database..."
    },
    devanagari: {
        "landing-title": "देवनाम",
        "landing-subtitle": "देवनाम",
        "landing-desc": "सधना पुस्तक को निजीकृत करने और अपने जप प्रगति को ट्रैक करने के लिए अपना आध्यात्मिक नाम दर्ज करें।",
        "label-login-name": "आपका आध्यात्मिक नाम",
        "label-login-email": "ईमेल पता",
        "label-login-avatar": "अवतार आइकन चुनें",
        "label-login-lang": "ऐप की भाषा चुनें",
        "btn-login-submit": "लॉग इन करें",
        "btn-google-login": "गूगल के साथ जारी रखें",
        "brand-name": "देवनाम",
        "brand-name-sub": "देवनाम",
        "mobile-menu-toggle": "⚙️ सेटिंग्स",
        "btn-login-trigger": "🔐 साधक लॉगिन",
        "settings-title": "साधना सेटिंग्स",
        "label-name-template": "नाम / मंत्र टेम्पलेट",
        "label-script-lang": "लिपि और भाषा",
        "label-writing-target": "मील का पत्थर लक्ष्य",
        "label-input-mode": "लेखन मोड",
        "sewa-title": "🌸 देवनाम सेवा",
        "sewa-desc": "सर्वर का समर्थन करने और इसे विज्ञापन-मुक्त रखने में हमारी सहायता करें।",
        "btn-donate-trigger": "🙏 दान करें",
        "diya-label": "सजगता की लौ",
        "stat-total-written": "कुल लिखित",
        "stat-total-desc": "सभी सत्रों में",
        "stat-target-goal": "निर्धारित लक्ष्य",
        "stat-pages-filled": "भरे हुए पृष्ठ",
        "stat-daily-streak": "दैनिक साधना",
        "stat-streak-desc": "निरंतर लेखन",
        "btn-export-pdf": "📄 पुस्तक निर्यात करें",
        "btn-reset-data": "🔄 प्रगति रीसेट करें",
        "notebook-title": "📓 पावन पाण्डुलिपि ग्रिड",
        "history-title": "📜 दैनिक साधना लॉग",
        "certificate-title": "साधना का मील का पत्थर हासिल किया",
        "btn-modal-close": "आशीर्वाद स्वीकार करें",
        "donation-title": "🌸 सेवा अर्पित करें",
        "donation-desc": "देवनाम पूरी तरह से स्वैच्छिक सेवा पर चलता है। विज्ञापन-मुक्त साधना के लिए सहायता करें।",
        "qr-instructions": "योगदान करने के लिए GPay, PhonePe, Paytm या BHIM का उपयोग करके स्कैन करें।",
        "btn-submit-donation": "कार्ड/पेપલ સાથે આગળ વધો",
        "tap-btn-native": "लिखें",
        "tap-btn-sub": "लिखें",
        "input-placeholder": "यहाँ क्लिक करें और लिखना शुरू करें...",
        "spelling-placeholder": "या अक्षर टाइप करें: ",
        "spelling-instruction": "नाम लिखने के लिए अक्षर <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> टाइप करें",
        "bell-on": "🔔 ध्वनि प्रभाव: चालू",
        "bell-off": "🔔 ध्वनि प्रभाव: बंद",
        "tanpura-on": "🪕 तानपुरा: चालू",
        "tanpura-off": "🪕 तानपुरा: बंद",
        "percent-completed": "{percent}% पूर्ण",
        "names-on-page": "वर्तमान पृष्ठ पर {count} / {capacity} नाम",
        "streak-days": "{streak} दिन",
        "streak-day": "{streak} दिन",
        "no-sessions": "अभी तक कोई लेखन सत्र रिकॉर्ड नहीं हुआ है। इतिहास बनाने के लिए ऊपर लिखना शुरू करें।",
        "history-item-count": "{count} नाम",
        "reset-confirm": "क्या आप निश्चित रूप से सभी लिखे गए नामों को हटाना चाहते हैं और अपना लेखन इतिहास रीसेट करना चाहते हैं? इसे वापस नहीं लिया जा सकता।",
        "reset-success": "प्रगति सफलतापूर्वक साफ़ कर दी गई।",
        "logout-confirm": "क्या आप निश्चित रूप से लॉग आउट करना चाहते हैं? आपकी लेखन प्रगति स्थानीय रूप से सुरक्षित रहेगी।",
        "welcome-msg": "🌸 स्वागत है, <strong>{name}</strong>!<br><br>आपका साधना क्षेत्र अब सक्रिय है। अपने स्तर को ऊपर उठाने के लिए लिखते रहें।",
        "level-title": "स्तर {level}: {title}",
        "level-names": { 1: "साधक", 2: "मुनि", 3: "योगी", 4: "ऋषि" },
        "milestone-108": "💐 <strong>साधना मील का पत्थर: 1 चक्र पूर्ण!</strong><br><br>आपने सफलतापूर्वक राम नाम <strong>108 बार</strong> लिख लिया है। आपका जीवन शांति और सजगता से परिपूर्ण हो।",
        "milestone-1008": "✨ <strong>महान भक्ति: 1,008 नाम लिखे गए!</strong><br><br>आपका समर्पण अद्भुत है। आपने <strong>1,008 राम नाम</strong> पूरे कर लिए हैं, अपनी डिजिटल पुस्तक में शांति का एक सुंदर अध्याय लिखा है।",
        "milestone-target": "🏆 <strong>साधना का लक्ष्य प्राप्त हुआ!</strong><br><br>बधाई हो! आपने <strong>{target}</strong> नाम लिखने का अपना लक्ष्य पूरा कर लिया है। आपका निरंतर ध्यान धन्य है।",
        "page-indicator": "पृष्ठ {current} / {total}",
        "pdf-title": "देवनाम साधना पुस्तक",
        "pdf-total": "कुल लिखित पावन नाम",
        "pdf-status": "स्थिति",
        "pdf-completed": "मील का पत्थर पूर्ण",
        "pdf-date": "संकलन की तिथि",
        "pdf-stamp": "सजय साधना संपन्न",
        "pdf-page-header": "देवनाम साधना पाण्डुलिपि",
        "pdf-page": "पृष्ठ",
        "pdf-page-footer": "कुल लिखित: {count} | श्रद्धापूर्वक संपन्न",
        "label-password": "पासवर्ड",
        "label-confirm-password": "पासवर्ड की पुष्टि करें",
        "btn-signup-submit": "खाता बनाएं और प्रवेश करें",
        "prompt-no-account": "खाता नहीं है?",
        "link-signup": "साइन अप करें",
        "prompt-have-account": "पहले से खाता है?",
        "link-login": "लॉगिन करें",
        "err-wrong-password": "❌ गलत क्रेडेंशियल या पासवर्ड!",
        "err-password-mismatch": "❌ पासवर्ड मेल नहीं खाते!",
        "err-general": "❌ एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
        "msg-connecting": "क्लाउड डेटाबेस से जुड़ रहा है..."
    },
    telugu: {
        "landing-title": "దేవనామ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "మీ సాధన పుస్తకాన్ని అనుకూలీకరించడానికి మరియు మీ జప పురోగతిని ట్రాక్ చేయడానికి మీ ఆధ్యాత్మిక నామాన్ని నమోదు చేయండి.",
        "label-login-name": "మీ ఆధ్యాత్మిక నామం",
        "label-login-email": "ఈమెయిల్ చిరునామా",
        "label-login-avatar": "అవతార్ చిహ్నాన్ని ఎంచుకోండి",
        "label-login-lang": "యాప్ భాషను ఎంచుకోండి",
        "btn-login-submit": "లాగిన్ అవ్వండి",
        "btn-google-login": "గూగుల్ తో కొనసాగించండి",
        "brand-name": "దేవనామ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ సెట్టింగులు",
        "btn-login-trigger": "🔐 సాధక లాగిన్",
        "settings-title": "సాధన సెట్టింగులు",
        "label-name-template": "ನಾಮ / ಮಂತ್ರ ಟೆಂಪ್ಲೇಟ್",
        "label-script-lang": "లిపి & భాష",
        "label-writing-target": "మైలురాయి లక్ష్యం",
        "label-input-mode": "రాత విధానం",
        "sewa-title": "🌸 దేవనామ సేవ",
        "sewa-desc": "సర్వర్‌లకు మద్దతు ఇవ్వడానికి & ప్రకటనలు లేకుండా ఉంచడానికి మాకు సహాయం చేయండి.",
        "btn-donate-trigger": "🙏 విరాళం ఇవ్వండి",
        "diya-label": "ధ్యాన జ్యోతి",
        "stat-total-written": "మొತ್ತం రాసినవి",
        "stat-total-desc": "అన్ని సెషన్లలో కలిపి",
        "stat-target-goal": "లక్ష్యం",
        "stat-pages-filled": "నిండిన పేజీలు",
        "stat-daily-streak": "రోజువారీ సాధన",
        "stat-streak-desc": "నిరంతర రాత",
        "btn-export-pdf": "📄 పుస్తకాన్ని డౌన్‌లోഡ് చేయి",
        "btn-reset-data": "🔄 పురోగతిని రీసెట్ చేయి",
        "notebook-title": "📓 పవిత్ర గ్రంథ గ్రిడ్",
        "history-title": "📜 రోజువారీ సాధన లాగ్",
        "certificate-title": "సాధన మైలురాయి సాధించబడింది",
        "btn-modal-close": "ఆశీర్వాదాలు స్వీకరించండి",
        "donation-title": "🌸 సేవ చేయండి",
        "donation-desc": "దేవనామ పూర్తిగా స్వచ్ఛంద సేవ ద్వారా నడుస్తుంది. ప్రకటనలు లేని ధ్యానం కోసం సహాయం చేయండి.",
        "qr-instructions": "సహాయం చేయడానికి GPay, PhonePe ఉపయోగించి స్కాన్ చేయండి.",
        "btn-submit-donation": "కార్డ్/పేపాల్‌తో కొనసాగండి",
        "tap-btn-native": "రాయండి",
        "tap-btn-sub": "Write",
        "input-placeholder": "ఇక్కడ క్లిక్ చేసి రాయడం ప్రారంభించండి...",
        "spelling-placeholder": "లేదా అక్షరాలు టైప్ చేయండి: ",
        "spelling-instruction": "ನಾಮ ಬರೆಯಲು <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> అక్షరాలను టైప్ చేయండి",
        "bell-on": "🔔 గంట శబ్దం: ఆన్",
        "bell-off": "🔔 గంట శబ్దం: ఆఫ్",
        "tanpura-on": "🪕 తంబురా: ఆన్",
        "tanpura-off": "🪕 తంబురా: ఆఫ్",
        "percent-completed": "{percent}% పూర్తయింది",
        "names-on-page": "ప్రస్తుత పేజీలో {count} / {capacity} నామాలు",
        "streak-days": "{streak} రోజులు",
        "streak-day": "{streak} రోజు",
        "no-sessions": "ఇంకా ఎలాంటి రాత సెషన్లు నమోదు కాలేదు. రాయడం ప్రారంభించండి.",
        "history-item-count": "{count} నామాలు",
        "reset-confirm": "మీరు రాసిన నామాలను తొలగించి, పురోగతిని రీసెట్ చేయాలనుకుంటున్నారా? దీనిని తిరిగి మార్చలేరు.",
        "reset-success": "పురోగతి విజయవంతంగా తుడిచివేయబడింది.",
        "logout-confirm": "మీరు ఖచ్చితంగా లాగ్ అవుట్ చేయాలనుకుంటున్నారా? మీ పురోగతి స్థానికంగా భద్రంగా ఉంటుంది.",
        "welcome-msg": "🌸 సుస్వాగతం, <strong>{name}</strong>!<br><br>మీ సాధనా స్థలం సిద్ధంగా ఉంది. సాధన కొనసాగించండి.",
        "level-title": "స్థాయి {level}: {title}",
        "level-names": { 1: "సాధకుడు", 2: "ముని", 3: "యోగి", 4: "ఋషి" },
        "milestone-108": "💐 <strong>సాధన మైలురాయి: 1 రౌండ్ పూర్తయింది!</strong><br><br>మీరు విజయవంతంగా రామ నామాన్ని <strong>108 సార్లు</strong> రాశారు. మీ జీవితం ప్రశాంతతతో నిండాలి.",
        "milestone-1008": "✨ <strong>గొప్ప భક્તિ: 1,008 నామాలు రాయబడ్డాయి!</strong><br><br>మీ శ్రద్ధ ప్రశంసనీయం. మీరు <strong>1,008 రామ నామాలు</strong> పూర్తి చేశారు.",
        "milestone-target": "🏆 <strong>సాధన లక్ష్యం చేరింది!</strong><br><br>అభినందనలు! మీరు ఎంచుకున్న <strong>{target}</strong> నామాల లక్ష్యాన్ని విజయవంతంగా పూర్తి చేశారు.",
        "page-indicator": "పేజీ {current} / {total}",
        "pdf-title": "దేవనామ సాధన పుస్తకం",
        "pdf-total": "రాసిన మొత్తం పవిత్ర నామాలు",
        "pdf-status": "స్థితి",
        "pdf-completed": "లక్ష్యం పూర్తయింది",
        "pdf-date": "క్రోඩీకరణ తేదీ",
        "pdf-stamp": "ధ్యాన సాధన పూర్తయింది",
        "pdf-page-header": "దేవనామ సాధన గ్రంథం",
        "pdf-page": "పేజీ",
        "pdf-page-footer": "మొత్తం రాసినవి: {count} | భక్తితో సమర్పించబడింది",
        "label-password": "పాస్‍వర్డ్",
        "label-confirm-password": "పాస్‍వర్డ్‍ను నిర్ధారించండి",
        "btn-signup-submit": "ఖాతాను సృష్టించి ప్రవేశించండి",
        "prompt-no-account": "ఖాతా లేదా?",
        "link-signup": "సైన్ అప్ చేయండి",
        "prompt-have-account": "ఇప్పటికే ఖాతా ఉందా?",
        "link-login": "లాగిన్",
        "err-wrong-password": "❌ తప్పుడు ఆధారాలు లేదా పాస్‍వర్డ్!",
        "err-password-mismatch": "❌ పాస్‍వర్డ్‍లు సరిపోలడం లేదు!",
        "err-general": "❌ ఏదో లోపం జరిగింది. మళ్ళీ ప్రయత్నించండి.",
        "msg-connecting": "క్లౌడ్ డేటాబేస్కు కనెక్ట్ అవుతోంది..."
    },
    tamil: {
        "landing-title": "தேவநாமா",
        "landing-subtitle": "DevaNama",
        "landing-desc": "உங்கள் சாதன புத்தகத்தைத் தனிப்பயனாக்கவும், உங்கள் ஜப முன்னேற்றத்தைக் கண்காணிக்கவும் உங்கள் ஆன்மீகப் பெயரை உள்ளிடவும்.",
        "label-login-name": "உங்கள் ஆன்மீகப் பெயர்",
        "label-login-email": "மின்னஞ்சல் முகவரி",
        "label-login-avatar": "அவதாரத்தை தேர்வு செய்யவும்",
        "label-login-lang": "மொழியை தேர்வு செய்யவும்",
        "btn-login-submit": "உள்நுழைக",
        "btn-google-login": "கூகிள் மூலம் தொடரவும்",
        "brand-name": "தேவநாமா",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ அமைப்புகள்",
        "btn-login-trigger": "🔐 சாதகர் உள்நுழைவு",
        "settings-title": "சாதன அமைப்புகள்",
        "label-name-template": "நாமம் / மந்திர வடிவம்",
        "label-script-lang": "எழுத்து வடிவம் & மொழி",
        "label-writing-target": "மைல்கல் இலக்கு",
        "label-input-mode": "எழுதும் முறை",
        "sewa-title": "🌸 தேவநாமா சேவை",
        "sewa-desc": "விளம்பரங்கள் இல்லாமல் இந்த சேவையை தொடர எங்களுக்கு ஆதரவளிக்கவும்.",
        "btn-donate-trigger": "🙏 நன்கொடை வழங்க",
        "diya-label": "தியான ஜோதி",
        "stat-total-written": "மொத்தம் எழுதியவை",
        "stat-total-desc": "அனைத்து அமர்வுகளிலும்",
        "stat-target-goal": "இலக்கு",
        "stat-pages-filled": "நிரப்பப்பட்ட பக்கங்கள்",
        "stat-daily-streak": "தினசரி சாதனை",
        "stat-streak-desc": "தொடர்ச்சியான எழுத்து",
        "btn-export-pdf": "📄 புத்தகத்தை பதிவிறக்க",
        "btn-reset-data": "🔄 முன்னேற்றத்தை மீட்டமை",
        "notebook-title": "📓 புனித ஏடு",
        "history-title": "📜 தினசரி சாதனை பதிவு",
        "certificate-title": "சாதனை மைல்கல் எட்டப்பட்டது",
        "btn-modal-close": "ஆசிகளை ஏற்கவும்",
        "donation-title": "🌸 சேவை செய்யுங்கள்",
        "donation-desc": "தேவநாமா முற்றிலும் தன்னார்வ சேவை மூலம் இயங்குகிறது.",
        "qr-instructions": "கூகிள் பே, போன்பே மூலம் ஸ்கேன் செய்து பங்களிக்கவும்.",
        "btn-submit-donation": "கார்டு/பேபால் மூலம் தொடரவும்",
        "tap-btn-native": "எழுதுக",
        "tap-btn-sub": "Write",
        "input-placeholder": "இங்கே கிளிக் செய்து எழுதத் தொடங்கவும்...",
        "spelling-placeholder": "அல்லது எழுத்துக்களை தட்டச்சு செய்க: ",
        "spelling-instruction": "நாமத்தை எழுத <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> என்ற எழுத்துக்களை தட்டச்சு செய்க",
        "bell-on": "🔔 மணி ஒலி: ஆன்",
        "bell-off": "🔔 மணி ஒலி: ஆஃப்",
        "tanpura-on": "🪕 தம்புரா: ஆன்",
        "tanpura-off": "🪕 தம்புரா: ஆஃப்",
        "percent-completed": "{percent}% முடிந்தது",
        "names-on-page": "நடப்பு பக்கத்தில் {count} / {capacity} நாமங்கள்",
        "streak-days": "{streak} நாட்கள்",
        "streak-day": "{streak} நாள்",
        "no-sessions": "இன்னும் பதிவுகள் இல்லை. எழுதத் தொடங்குங்கள்.",
        "history-item-count": "{count} நாமங்கள்",
        "reset-confirm": "எழுதிய நாமங்களை நீக்கி முன்னேற்றத்தை மீட்டமைக்க விரும்புகிறீர்களா? இதை மாற்ற முடியாது.",
        "reset-success": "முன்னேற்றம் வெற்றிகரமாக மீட்டமைக்கப்பட்டது.",
        "logout-confirm": "நீங்கள் வெளியேற விரும்புகிறீர்களா? உங்கள் முன்னேற்றம் சேமிக்கப்படும்.",
        "welcome-msg": "🌸 வரவேற்கிறோம், <strong>{name}</strong>!<br><br>உங்கள் சாதன பகுதி தயாராக உள்ளது. சாதனையைத் தொடரவும்.",
        "level-title": "நிலை {level}: {title}",
        "level-names": { 1: "சாதகர்", 2: "முனி", 3: "யோகி", 4: "ரிஷி" },
        "milestone-108": "💐 <strong>மைல்கல்: 1 சுற்று முடிந்தது!</strong><br><br>நீங்கள் <strong>108 முறை</strong> ராம நாமம் எழுதியுள்ளீர்கள்.",
        "milestone-1008": "✨ <strong>பக்தி சாதனை: 1,008 நாமங்கள்!</strong><br><br>நீங்கள் <strong>1,008 முறை</strong> ராம நாமம் எழுதியுள்ளீர்கள்.",
        "milestone-target": "🏆 <strong>இலக்கு எட்டப்பட்டது!</strong><br><br>வாழ்த்துகள்! உங்கள் <strong>{target}</strong> நாமங்கள் எழுதும் இலக்கை அடைந்துவிட்டீர்கள்.",
        "page-indicator": "பக்கம் {current} / {total}",
        "pdf-title": "தேவநாமா சாதன புத்தகம்",
        "pdf-total": "எழுதப்பட்ட மொத்த புனித நாமங்கள்",
        "pdf-status": "நிலை",
        "pdf-completed": "இலக்கு எட்டப்பட்டது",
        "pdf-date": "தொகுக்கப்பட்ட தேதி",
        "pdf-stamp": "மன அமைதியுடன் சாதன முடிந்தது",
        "pdf-page-header": "தேவநாமா சாதன ஏடு",
        "pdf-page": "பக்கம்",
        "pdf-page-footer": "மொத்தம் எழுதியவை: {count} | பக்தியுடன் சமர்ப்பிக்கப்பட்டது",
        "label-password": "கடவுச்சொல்",
        "label-confirm-password": "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
        "btn-signup-submit": "கணக்கை உருவாக்கி உள்ளிடவும்",
        "prompt-no-account": "கணக்கு இல்லையா?",
        "link-signup": "பதிவு செய்க",
        "prompt-have-account": "ஏற்கனவே கணக்கு உள்ளதா?",
        "link-login": "உள்நுழைக",
        "err-wrong-password": "❌ தவறான சான்றுகள் அல்லது கடவுச்சொல்!",
        "err-password-mismatch": "❌ கடவுச்சொற்கள் பொருந்தவில்லை!",
        "err-general": "❌ ஒரு பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.",
        "msg-connecting": "கிளவுட் தரவுത്തளத்துடன் இണைகிறது..."
    },
    kannada: {
        "landing-title": "ದೇವನಾಮ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "ನಿಮ್ಮ ಸಾಧನಾ ಪುಸ್ತಕವನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು ಮತ್ತು ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
        "label-login-name": "ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಹೆಸರು",
        "label-login-email": "ಇಮೇಲ್ ವಿಳಾಸ",
        "label-login-avatar": "ಅವತಾರವನ್ನು ಆರಿಸಿ",
        "label-login-lang": "ಭಾಷೆಯನ್ನು ಆರಿಸಿ",
        "btn-login-submit": "ಲಾಗಿൻ ಮಾಡಿ",
        "btn-google-login": "ಗೂಗಲ್ ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ",
        "brand-name": "ದೇವನಾಮ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ ಸೆಟ್ಟಿಂಗ್ಸ್",
        "btn-login-trigger": "🔐 ಸಾಧಕ ಲಾಗಿನ್",
        "settings-title": "ಸಾಧನಾ ಸೆಟ್ಟಿಂಗ್ಸ್",
        "label-name-template": "ನಾಮ / ಮಂತ್ರ ಟೆಂಪ್ಲೇಟ್",
        "label-script-lang": "ಲಿಪಿ ಮತ್ತು ಭಾಷೆ",
        "label-writing-target": "ಮೈಲುಗಲ್ಲು ಗುರಿ",
        "label-input-mode": "ಬರೆಯುವ ವಿಧಾನ",
        "sewa-title": "🌸 ದೇವನಾಮ ಸೇವೆ",
        "sewa-desc": "ನಮ್ಮ ಸೇವೆಯನ್ನು ಜಾಹೀರಾತು ರಹಿತವಾಗಿ ಮುಂದುವರಿಸಲು ಸಹಾಯ ಮಾಡಿ.",
        "btn-donate-trigger": "🙏 ದೇಣಿಗೆ ನೀಡಿ",
        "diya-label": "ಧ್ಯಾನದ ಜ್ಯೋತಿ",
        "stat-total-written": "ಒಟ್ಟು ಬರೆದದ್ದು",
        "stat-total-desc": "ಎಲ್ಲಾ ಸೆಷನ್‌ಗಳಲ್ಲಿ",
        "stat-target-goal": "ಗುರಿ",
        "stat-pages-filled": "ತುಂಬಿದ ಪುಟಗಳು",
        "stat-daily-streak": "ದೈನಂದಿನ ಸಾಧನೆ",
        "stat-streak-desc": "ನಿರಂತರ ಬರವಣಿಗೆ",
        "btn-export-pdf": "📄 ಪುಸ್ತಕ ರಫ್ತು ಮಾಡಿ",
        "btn-reset-data": "🔄 ಪ್ರಗತಿ ಮರುಹೊಂದಿಸಿ",
        "notebook-title": "📓 ಪವಿತ್ರ ಹಸ್ತಪ್ರತಿ ಗ್ರಿಡ್",
        "history-title": "📜 ದೈನಂದಿನ ಸಾಧನಾ ಲಾಗ್",
        "certificate-title": "ಸಾಧನಾ ಮೈಲುಗಲ್ಲು ತಲುಪಲಾಗಿದೆ",
        "btn-modal-close": "ಆಶೀರ್ವಾದ ಸ್ವೀಕರಿಸಿ",
        "donation-title": "🌸 ಸೇವೆ ಸಲ್ಲಿಸಿ",
        "donation-desc": "ದೇವನಾಮ ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವಯಂಪ್ರೇರಿತ ಸೇವೆಯಿಂದ ನಡೆಯುತ್ತದೆ.",
        "qr-instructions": "ಕೊಡುಗೆ ನೀಡಲು GPay, PhonePe ಬಳಸಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
        "btn-submit-donation": "ಕಾರ್ಡ್/ಪೇಪಾಲ್‌ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
        "tap-btn-native": "ಬರೆಯಿರಿ",
        "tap-btn-sub": "Write",
        "input-placeholder": "ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಬರೆಯಲು ಪ್ರಾರಂಭಿಸಿ...",
        "spelling-placeholder": "ಅಥವಾ ಅಕ್ಷರಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ: ",
        "spelling-instruction": "ನಾಮ ಬರೆಯಲು <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> ಅಕ್ಷರಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ",
        "bell-on": "🔔 ಗಂಟೆ ಶಬ್ದ: ಆನ್",
        "bell-off": "🔔 ಗಂಟೆ ಶಬ್ದ: ಆಫ್",
        "tanpura-on": "🪕 ತಂಬೂರಿ: ಆನ್",
        "tanpura-off": "🪕 ತಂಬೂರಿ: ಆಫ್",
        "percent-completed": "{percent}% ಪೂರ್ಣಗೊಂಡಿದೆ",
        "names-on-page": "ಪ್ರಸ್ತುತ ಪುಟದಲ್ಲಿ {count} / {capacity} ನಾಮಗಳು",
        "streak-days": "{streak} ದಿನಗಳು",
        "streak-day": "{streak} ದಿನ",
        "no-sessions": "ಇನ್ನೂ ಯಾವುದೇ ಸಾಧನೆ ದಾಖಲಾಗಿಲ್ಲ. ಬರೆಯಲು ಪ್ರಾರಂಭಿಸಿ.",
        "history-item-count": "{count} ನಾಮಗಳು",
        "reset-confirm": "ಬರೆದ ಎಲ್ಲಾ ನಾಮಗಳನ್ನು ಅಳಿಸಲು ಮತ್ತು ಪ್ರಗತಿಯನ್ನು ಮರುಹೊಂದಿಸಲು ಖಚಿತವೇ? ಇದನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ.",
        "reset-success": "ಪ್ರಗತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ.",
        "logout-confirm": "ಲಾಗ್ ಔಟ್ ಮಾಡಲು ಖಚಿತವೇ? ನಿಮ್ಮ ಪ್ರಗತಿ ಉಳಿಯುತ್ತದೆ.",
        "welcome-msg": "🌸 ಸುಸ್ವಾಗತ, <strong>{name}</strong>!<br><br>ನಿಮ್ಮ ಸಾಧನಾ ಸ್ಥಳ ಸಿದ್ಧವಾಗಿದೆ. ಸಾಧನೆ ಮುಂದುವರಿಸಿ.",
        "level-title": "ಹಂತ {level}: {title}",
        "level-names": { 1: "ಸಾಧಕ", 2: "ಮುನಿ", 3: "ಯೋಗಿ", 4: "ಋಷಿ" },
        "milestone-108": "💐 <strong>ಮೈಲುಗಲ್ಲು: 1 ಚಕ್ರ ಪೂರ್ಣಗೊಂಡಿದೆ!</strong><br><br>ನೀವು <strong>108 ಬಾರಿ</strong> ರಾಮ ನಾಮ ಬರೆದಿದ್ದೀರಿ.",
        "milestone-1008": "✨ <strong>ಭಕ್ತಿ ಸಾಧನೆ: 1,008 ನಾಮಗಳು!</strong><br><br>ನೀವು <strong>1,008 ಬಾರಿ</strong> ರಾಮ ನಾಮ ಬರೆದಿದ್ದೀರಿ.",
        "milestone-target": "🏆 <strong>ಸಾಧನಾ ಗುರಿ ತಲುಪಲಾಗಿದೆ!</strong><br><br>ಅಭಿನಂದನೆಗಳು! ನಿಮ್ಮ <strong>{target}</strong> ನಾಮಗಳ ಗುರಿಯನ್ನು ತಲುಪಿದ್ದೀರಿ.",
        "page-indicator": "ಪುಟ {current} / {total}",
        "pdf-title": "ದೇವನಾಮ ಸಾಧನ ಪುಸ್ತಕ",
        "pdf-total": "ಒಟ್ಟು ಬರೆದ ಪವಿತ್ರ ನಾಮಗಳು",
        "pdf-status": "ಸ್ಥಿತಿ",
        "pdf-completed": "ಗುರಿ ತಲುಪಲಾಗಿದೆ",
        "pdf-date": "ಸಂಕಲನದ ದಿನಾಂಕ",
        "pdf-stamp": "ಧ್ಯಾನ ಸಾಧನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        "pdf-page-header": "ದೇವನಾಮ ಸಾಧನಾ ಹಸ್ತಪ್ರತಿ",
        "pdf-page": "ಪುಟ",
        "pdf-page-footer": "ಒಟ್ಟು ಬರೆದದ್ದು: {count} | ಭಕ್ತಿಯಿಂದ ಸಮರ್ಪಿಸಲಾಗಿದೆ",
        "label-password": "ಪಾಸ್‍ವರ್ಡ್",
        "label-confirm-password": "ಪಾಸ್‍ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
        "btn-signup-submit": "ಖಾತೆ ರಚಿಸಿ ಪ್ರವೇಶಿಸಿ",
        "prompt-no-account": "ಖಾತೆ ಇಲ್ಲವೇ?",
        "link-signup": "ಸೈನ್ ಅಪ್ ಮಾಡಿ",
        "prompt-have-account": "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
        "link-login": "ಲಾಗಿನ್",
        "err-wrong-password": "❌ തപ്പു രുജുവാതുಗಳು ಅಥವಾ ಪಾಸ್‍ವರ್ಡ್!",
        "err-password-mismatch": "❌ ಪಾಸ್‍ವರ್ಡ್‍ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ!",
        "err-general": "❌ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        "msg-connecting": "ಕ್ಲೌಡ್ ಡೇಟಾಬೇಸ್‌ಗೆ ಸಂಪರ್കಿಸಲಾಗುತ್ತಿದೆ..."
    },
    bengali: {
        "landing-title": "দেবনাম",
        "landing-subtitle": "DevaNama",
        "landing-desc": "আপনার সাধনা বই কাস্টমাইজ করতে এবং জপ অগ্রগতি ট্র্যাক করতে আপনার আধ্যাত্মিক নাম লিখুন।",
        "label-login-name": "আপনার আধ্যাত্মিক নাম",
        "label-login-email": "ইমেল ঠিকানা",
        "label-login-avatar": "অবতার আইকন নির্বাচন করুন",
        "label-login-lang": "অ্যাপের ভাষা নির্বাচন করুন",
        "btn-login-submit": "লগ ইন করুন",
        "btn-google-login": "গুগল এর সাথে চালিয়ে যান",
        "brand-name": "দেবনাম",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ সেটিংস",
        "btn-login-trigger": "🔐 সাধক লগইন",
        "settings-title": "সাধনা সেটিংস",
        "label-name-template": "নাম / মন্ত্র টেমপ্লেট",
        "label-script-lang": "লিপি ও ভাষা",
        "label-writing-target": "লক্ষ্য মাত্রা",
        "label-input-mode": "লিখন মোড",
        "sewa-title": "🌸 দেবনাম সেবা",
        "sewa-desc": "বিজ্ঞাপনমুক্ত সাধনা ধরে রাখতে আমাদের সাহায্য করুন।",
        "btn-donate-trigger": "🙏 দান করুন",
        "diya-label": "সচেতনতার আলো",
        "stat-total-written": "মোট লিখিত",
        "stat-total-desc": "সব সেশনে",
        "stat-target-goal": "লক্ষ্য",
        "stat-pages-filled": "পৃষ্ঠা পূর্ণ",
        "stat-daily-streak": "দৈনিক সাধনা",
        "stat-streak-desc": "নিরবচ্ছিন্ন লিখন",
        "btn-export-pdf": "📄 বই রপ্তানি করুন",
        "btn-reset-data": "🔄 অগ্রগতি রিসেট করুন",
        "notebook-title": "📓 পবিত্র পাণ্ডুলিপি গ্রিড",
        "history-title": "📜 দৈনিক সাধনা লগ",
        "certificate-title": "সাধনা মাইলফলক অর্জিত",
        "btn-modal-close": "আশীর্বাদ গ্রহণ করুন",
        "donation-title": "🌸 সেবা করুন",
        "donation-desc": "দেবনাম সম্পূর্ণ স্বেচ্ছাসেবী সেবার উপর চলে।",
        "qr-instructions": "সাহায্য করতে জিপে বা ফোনপে দিয়ে স্ক্যান করুন।",
        "btn-submit-donation": "কার্ড/পেপ্যাল দিয়ে এগিয়ে যান",
        "tap-btn-native": "লিখুন",
        "tap-btn-sub": "Write",
        "input-placeholder": "এখানে ক্লিক করে লেখা শুরু করুন...",
        "spelling-placeholder": "অথবা অক্ষর টাইপ করুন: ",
        "spelling-instruction": "নাম লিখতে <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> অক্ষর টাইপ করুন",
        "bell-on": "🔔 শব্দ প্রভাব: চালু",
        "bell-off": "🔔 শব্দ প্রভাব: বন্ধ",
        "tanpura-on": "🪕 তানপুরা: চালু",
        "tanpura-off": "🪕 তানপুরা: বন্ধ",
        "percent-completed": "{percent}% সম্পূর্ণ",
        "names-on-page": "বর্তমান পৃষ্ঠায় {count} / {capacity} নাম",
        "streak-days": "{streak} দিন",
        "streak-day": "{streak} দিন",
        "no-sessions": "কোন সেশন রেকর্ড করা হয়নি। লেখা শুরু করুন।",
        "history-item-count": "{count} নাম",
        "reset-confirm": "আপনি কি সমস্ত নাম মুছে ফেলে অগ্রগতি রিসেট করতে চান? এটি পূর্বাবস্থায় ফেরানো যাবে না।",
        "reset-success": "অগ্রগতি সফলভাবে মুছে ফেলা হয়েছে।",
        "logout-confirm": "আপনি কি লগ আউট করতে চান? আপনার অগ্রগতি সংরক্ষিত থাকবে।",
        "welcome-msg": "🌸 স্বাগতম, <strong>{name}</strong>!<br><br>আপনার সাধনা ক্ষেত্র এখন সক্রিয়। সাধনা করতে থাকুন।",
        "level-title": "স্তর {level}: {title}",
        "level-names": { 1: "সাধক", 2: "মুনি", 3: "যোগী", 4: "ঋষি" },
        "milestone-108": "💐 <strong>মাইলফলক: ১ চক্র সম্পূর্ণ!</strong><br><br>আপনি <strong>১০৮ বার</strong> রাম নাম লিখেছেন।",
        "milestone-1008": "✨ <strong>ভক্তি সাধনা: ১,০০৮ নাম!</strong><br><br>আপনি <strong>১,০০৮ বার</strong> রাম নাম লিখেছেন।",
        "milestone-target": "🏆 <strong>সাধনা লক্ষ্য অর্জিত!</strong><br><br>অভিনন্দন! আপনার <strong>{target}</strong> নামের লক্ষ্য পূর্ণ হয়েছে।",
        "page-indicator": "পৃষ্ঠা {current} / {total}",
        "pdf-title": "দেবনাম সাধনা বই",
        "pdf-total": "মোট লিখিত পবিত্র নাম",
        "pdf-status": "স্থিতি",
        "pdf-completed": "লক্ষ্য অর্জিত হয়েছে",
        "pdf-date": "সংকলনের তারিখ",
        "pdf-stamp": "মনোযোগ সহ সাধনা সম্পন্ন",
        "pdf-page-header": "দেবনাম সাধনা পাণ্ডুলিপি",
        "pdf-page": "পৃষ্ঠা",
        "pdf-page-footer": "মোট লিখিত: {count} | ভক্তিভরে সমর্পিত",
        "label-password": "পাসওয়ার্ড",
        "label-confirm-password": "পাসওয়ার্ড নিশ্চিত করুন",
        "btn-signup-submit": "অ্যাকাউন্ট তৈরি করে প্রবেশ করুন",
        "prompt-no-account": "অ্যাকাউন্ট নেই?",
        "link-signup": "সাইন আপ করুন",
        "prompt-have-account": "ইতিমধ্যে অ্যাকাউন্ট আছে?",
        "link-login": "লগইন করুন",
        "err-wrong-password": "❌ ভুল শংসাপত্র বা পাসওয়ার্ড!",
        "err-password-mismatch": "❌ পাসওয়ার্ড মিলছে না!",
        "err-general": "❌ একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।",
        "msg-connecting": "ক্লাউড ডেটাবেসের সাথে সংযুক্ত হচ্ছে..."
    },
    gujarati: {
        "landing-title": "દેવનામ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "તમારી સાધના પુસ્તકને કસ્ટમાઇઝ કરવા અને તમારી જપ પ્રગતિને ટ્રૅક કરવા માટે તમારું આધ્યાત્મિક નામ લખો.",
        "label-login-name": "આધ્યાત્મિક નામ",
        "label-login-email": "ઇમેઇલ સરનામું",
        "label-login-avatar": "અવતાર ચિહ્ન પસંદ કરો",
        "label-login-lang": "એપની ભાષા પસંદ કરો",
        "btn-login-submit": "લોગ ઇન કરો",
        "btn-google-login": "ગૂગલ સાથે ચાલુ રાખો",
        "brand-name": "દેવનામ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ સેટિંગ્સ",
        "btn-login-trigger": "🔐 સાધક લોગિન",
        "settings-title": "સાધના સેટિંગ્સ",
        "label-name-template": "નામ / મંત્ર ટેમ્પલેટ",
        "label-script-lang": "લિપિ અને ભાષા",
        "label-writing-target": "લક્ષ્ય",
        "label-input-mode": "લેખન પદ્ધતિ",
        "sewa-title": "🌸 દેવનામ સેવા",
        "sewa-desc": "જાહેરાત-મુક્ત સાધના જાળવી રાખવા માટે અમને મદદ કરો.",
        "btn-donate-trigger": "🙏 દાન કરો",
        "diya-label": "જાગૃતિની જ્યોત",
        "stat-total-written": "કુલ લખેલા",
        "stat-total-desc": "બધા સત્રોમાં",
        "stat-target-goal": "લક્ષ્ય",
        "stat-pages-filled": "ભરાયેલા પાના",
        "stat-daily-streak": "દૈનિક સાધના",
        "stat-streak-desc": "નિરંતર લેખન",
        "btn-export-pdf": "📄 પુસ્તક ડાઉનલોડ કરો",
        "btn-reset-data": "🔄 પ્રગતિ રીસેટ કરો",
        "notebook-title": "📓 પવિત્ર હસ્તપ્રત ગ્રીડ",
        "history-title": "📜 દૈનિક સાધના લોગ",
        "certificate-title": "સાધના લક્ષ્ય પ્રાપ્ત થયું",
        "btn-modal-close": "આશીર્વાદ સ્વીકારો",
        "donation-title": "🌸 સેવા કરો",
        "donation-desc": "દેવનામ સંપૂર્ણપણે સ્વૈચ્છિક સેવા પર ચાલે છે.",
        "qr-instructions": "યોગદાન આપવા માટે GPay, PhonePe દ્વારા સ્કેન કરો.",
        "btn-submit-donation": "કાર્ડ/પેપાલ સાથે આગળ વધો",
        "tap-btn-native": "લખો",
        "tap-btn-sub": "Write",
        "input-placeholder": "અહીં ક્લિક કરો અને લખવાનું શરૂ કરો...",
        "spelling-placeholder": "અથવા અક્ષરો ટાઇપ કરો: ",
        "spelling-instruction": "નામ લખવા માટે <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> અક્ષરો ટાઇપ કરો",
        "bell-on": "🔔 ધ્વનિ અસર: ચાલુ",
        "bell-off": "🔔 ધ્વનિ અસર: બંધ",
        "tanpura-on": "🪕 તાનપુરા: ચાલુ",
        "tanpura-off": "🪕 તાનપુરા: બંધ",
        "percent-completed": "{percent}% પૂર્ણ",
        "names-on-page": "હાલના પાના પર {count} / {capacity} નામો",
        "streak-days": "{streak} દિવસો",
        "streak-day": "{streak} દિવસ",
        "no-sessions": "હજુ સુધી કોઈ સત્ર નોંધાયું નથી. લખવાનું શરૂ કરો.",
        "history-item-count": "{count} નામો",
        "reset-confirm": "શું તમે બધા નામો કાઢી નાખી પ્રગતિ રીસેટ કરવા માંગો છો? આ બદલી શકાશે નહીં.",
        "reset-success": "પ્રગતિ સફળતાપૂર્વક સાફ કરવામાં આવી.",
        "logout-confirm": "શું લોગ આઉટ કરવું છે? તમારી પ્રગતિ સુરક્ષિત રહેશે.",
        "welcome-msg": "🌸 સ્વાગત છે, <strong>{name}</strong>!<br><br>તમારી સાધના જગ્યા સક્રિય છે. પ્રગતિ કરતા રહો.",
        "level-title": "સ્તર {level}: {title}",
        "level-names": { 1: "સાધક", 2: "મુનિ", 3: "યોગી", 4: "ઋષિ" },
        "milestone-108": "💐 <strong>માઇલ્સટોન: ૧ ચક્ર પૂર્ણ!</strong><br><br>તમે <strong>૧૦૮ વાર</strong> રામ નામ લખ્યું છે.",
        "milestone-1008": "✨ <strong>ભક્તિ સાધના: ૧,૦૦૮ નામો!</strong><br><br>તમે <strong>૧,૦૦૮ વાર</strong> રામ નામ લખ્યું છે.",
        "milestone-target": "🏆 <strong>સાધના લક્ષ્ય પ્રાપ્ત!</strong><br><br>અભિનંદન! તમારું <strong>{target}</strong> નામોનું લક્ષ્ય પૂરું થયું છે.",
        "page-indicator": "પાનું {current} / {total}",
        "pdf-title": "દેવનામ સાધના પુસ્તક",
        "pdf-total": "કુલ લખેલા પવિત્ર નામો",
        "pdf-status": "સ્થિતિ",
        "pdf-completed": "લક્ષ્ય પૂર્ણ થયું",
        "pdf-date": "સંકલનની તારીખ",
        "pdf-stamp": "ધ્યાનપૂર્વક સાધના પૂર્ણ",
        "pdf-page-header": "દેવનામ સાધના હસ્તપ્રત",
        "pdf-page": "પાનું",
        "pdf-page-footer": "કુલ લખેલા: {count} | ભક્તિપૂર્વક અર્પણ",
        "label-password": "પાસવર્ડ",
        "label-confirm-password": "પાસવર્ડની પુષ્ટિ કરો",
        "btn-signup-submit": "ખાતું બનાવો અને પ્રવેશ કરો",
        "prompt-no-account": "ખાતું નથી?",
        "link-signup": "સાઇન અપ કરો",
        "prompt-have-account": "પહેલાથી ખાતું છે?",
        "link-login": "લોગિન કરો",
        "err-wrong-password": "❌ ખોટા ઓળખપત્રો અથવા પાસવર્ડ!",
        "err-password-mismatch": "❌ પાસવર્ડ મેળ ખાતા નથી!",
        "err-general": "❌ ભૂલ આવી. કૃપા કરીને ફરી પ્રયાસ કરો.",
        "msg-connecting": "ક્લાઉડ ડેટાબેઝ સાથે જોડાઈ રહ્યું છે..."
    },
    malayalam: {
        "landing-title": "ദേവനാമ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "നിങ്ങളുടെ സാധനാ പുസ്തകം വ്യക്തിഗതമാക്കാനും പുരോഗതി ട്രാക്ക് ചെയ്യാനും നിങ്ങളുടെ ആത്മീയ നാമം നൽകുക.",
        "label-login-name": "ആത്മീയ നാമം",
        "label-login-email": "ഇമെയിൽ വിലാസം",
        "label-login-avatar": "അവതാരം തിരഞ്ഞെടുക്കുക",
        "label-login-lang": "ഭാഷ തിരഞ്ഞെടുക്കുക",
        "btn-login-submit": "ലോഗിൻ ചെയ്യുക",
        "btn-google-login": "ഗൂഗിൾ ഉപയോഗിച്ച് തുടരുക",
        "brand-name": "ദേവനാമ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ ക്രമീകരണങ്ങൾ",
        "btn-login-trigger": "🔐 സാധകൻ ലോഗിൻ",
        "settings-title": "സാധനാ ക്രമീകരണങ്ങൾ",
        "label-name-template": "നാമ / മന്ത്ര മാതൃക",
        "label-script-lang": "ലിപിയും ഭാഷയും",
        "label-writing-target": "ലക്ഷ്യം",
        "label-input-mode": "എഴുത്ത് രീതി",
        "sewa-title": "🌸 ദേവനാമ സേവ",
        "sewa-desc": "പരസ്യരഹിത സാധന നിലനിർത്താൻ ഞങ്ങളെ സഹായിക്കുക.",
        "btn-donate-trigger": "🙏 സംഭാവന ചെയ്യുക",
        "diya-label": "ധ്യാന ജ്വാല",
        "stat-total-written": "ആകെ എഴുതിയത്",
        "stat-total-desc": "എല്ലാ സെഷനുകളിലുമായി",
        "stat-target-goal": "ലക്ഷ്യം",
        "stat-pages-filled": "പൂർത്തിയായ പേജുകൾ",
        "stat-daily-streak": "ദിനചര്യ",
        "stat-streak-desc": "തുടർച്ചയായ എഴുത്ത്",
        "btn-export-pdf": "📄 പുസ്തകം ഡൗൺലോഡ് ചെയ്യുക",
        "btn-reset-data": "🔄 പുരോഗതി പുനഃക്രമീകരിക്കുക",
        "notebook-title": "📓 പവിത്ര ലിഖിത ഗ്രിഡ്",
        "history-title": "📜 സാധനാ ചരിത്രം",
        "certificate-title": "ലക്ഷ്യം കൈവരിച്ചു",
        "btn-modal-close": "അനുഗ്രഹം സ്വീകരിക്കുക",
        "donation-title": "🌸 സേവ ചെയ്യുക",
        "donation-desc": "ദേവനാമ പൂർണ്ണമായും സ്വമേധയാ ഉള്ള സേവനത്തെ ആശ്രയിച്ചാണ് പ്രവർത്തിക്കുന്നത്.",
        "qr-instructions": "GPay, PhonePe വഴി സ്കാൻ ചെയ്ത് സംഭാവന നൽകുക.",
        "btn-submit-donation": "കാർഡ്/പേപാൽ വഴി തുടരുക",
        "tap-btn-native": "എഴുതുക",
        "tap-btn-sub": "Write",
        "input-placeholder": "ഇവിടെ ക്ലിക്ക് ചെയ്ത് എഴുതാൻ ആരംഭിക്കുക...",
        "spelling-placeholder": "അല്ലെങ്കിൽ അക്ഷരങ്ങൾ ടൈപ്പ് ചെയ്യുക: ",
        "spelling-instruction": "നാമം എഴുതാൻ <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> അക്ഷരങ്ങൾ ടൈപ്പ് ചെയ്യുക",
        "bell-on": "🔔 മണിനാദം: ഓൺ",
        "bell-off": "🔔 മണിനാദം: ഓഫ്",
        "tanpura-on": "🪕 തംബുരു: ഓൺ",
        "tanpura-off": "🪕 തംബുരു: ഓഫ്",
        "percent-completed": "{percent}% പൂർത്തിയായി",
        "names-on-page": "നിലവിലെ പേജിൽ {count} / {capacity} നാമങ്ങൾ",
        "streak-days": "{streak} ദിവസങ്ങൾ",
        "streak-day": "{streak} ദിവസം",
        "no-sessions": "എഴുത്ത് സെഷനുകളൊന്നും ഇതുവരെ രേഖപ്പെടുത്തിയിട്ടില്ല.",
        "history-item-count": "{count} നാമങ്ങൾ",
        "reset-confirm": "എഴുതിയ നാമങ്ങൾ മായ്ച്ച് പുരോഗതി റീസെറ്റ് ചെയ്യണോ? ഇത് വീണ്ടെടുക്കാൻ കഴിയില്ല.",
        "reset-success": "പുരോഗതി വിജയകരമായി മായ്ച്ചു.",
        "logout-confirm": "ലോഗ് ഔട്ട് ചെയ്യണോ? നിങ്ങളുടെ പുരോഗതി സുരക്ഷിതമായിരിക്കും.",
        "welcome-msg": "🌸 സ്വാഗതം, <strong>{name}</strong>!<br><br>നിങ്ങളുടെ സാധനാ ഇടം സജ്ജമാണ്. സാധന തുടരുക.",
        "level-title": "ലെവൽ {level}: {title}",
        "level-names": { 1: "സാധകൻ", 2: "മുനി", 3: "യോഗി", 4: "ഋഷി" },
        "milestone-108": "💐 <strong>മൈൽസ്റ്റോൺ: 1 റൗണ്ട് പൂർത്തിയായി!</strong><br><br>നിങ്ങൾ <strong>108 തവണ</strong> രാമ നാമം എഴുതി കഴിഞ്ഞു.",
        "milestone-1008": "✨ <strong>ഭക്തി സാധന: 1,008 നാമങ്ങൾ!</strong><br><br>നിങ്ങൾ <strong>1,008 തവണ</strong> രാമ നാമം എഴുതി കഴിഞ്ഞു.",
        "milestone-target": "🏆 <strong>സാധനാ ലക്ഷ്യം പൂർത്തിയായി!</strong><br><br>അഭിനന്ദനങ്ങൾ! നിങ്ങളുടെ <strong>{target}</strong> നാമങ്ങളുടെ ലക്ഷ്യം കൈവരിച്ചു.",
        "page-indicator": "പേജ് {current} / {total}",
        "pdf-title": "ദേവനാമ സാധനാ പുസ്തകം",
        "pdf-total": "ആകെ എഴുതിയ പവിത്ര നാമങ്ങൾ",
        "pdf-status": "നില",
        "pdf-completed": "ലക്ഷ്യം കൈവരിച്ചു",
        "pdf-date": "തയ്യാറാക്കിയ തീയതി",
        "pdf-stamp": "മനസ്സർപ്പിച്ചു സാധന പൂർത്തിയാക്കി",
        "pdf-page-header": "ദേവനാമ സാധനാ കൈയെഴുത്തുപ്രതി",
        "pdf-page": "പേജ്",
        "pdf-page-footer": "ആകെ എഴുതിയത്: {count} | ഭക്തിയോടെ സമർപ്പിച്ചത്",
        "label-password": "പാസ്‌വേഡ്",
        "label-confirm-password": "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",
        "btn-signup-submit": "അക്കൗണ്ട് സൃഷ്ടിച്ച് പ്രവേശിക്കുക",
        "prompt-no-account": "അക്കൗണ്ട് ഇല്ലേ?",
        "link-signup": "സൈൻ അപ്പ് ചെയ്യുക",
        "prompt-have-account": "ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?",
        "link-login": "ലോഗിൻ",
        "err-wrong-password": "❌ തെറ്റായ ക്രെഡൻഷ്യലുകൾ അല്ലെങ്കിൽ പാസ്‌വേഡ്!",
        "err-password-mismatch": "❌ പാസ്‌വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല!",
        "err-general": "❌ ഒരു പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക.",
        "msg-connecting": "ക്ലൗഡ് ഡാറ്റാബേസിലേക്ക് ബന്ധിപ്പിക്കുന്നു..."
    },
    odia: {
        "landing-title": "ଦେବନାମ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "ଆପଣଙ୍କର ସାଧନା ପୁସ୍ତକକୁ ବ୍ୟକ୍ତିଗତ କରିବା ଏବଂ ଜପ ଅଗ୍ରଗତି ଟ୍ରାକ୍ କରିବା ପାଇଁ ଆପଣଙ୍କର ଆଧ୍ୟାତ୍ମିକ ନାମ ପ୍ରବେଶ କରନ୍ତୁ ।",
        "label-login-name": "ଆପଣଙ୍କ ଆଧ୍ୟାତ୍ମିକ ନାମ",
        "label-login-email": "ଇମେଲ୍ ଠିକଣା",
        "label-login-avatar": "ଅବତାର ଚିହ୍ନଟ ବାଛନ୍ତୁ",
        "label-login-lang": "ଆପ୍ ଭାଷା ବାଛନ୍ତୁ",
        "btn-login-submit": "ଲଗ୍ ଇନ୍ କରନ୍ତୁ",
        "btn-google-login": "ଗୁଗଲ୍ ସହିତ ଜାରି ରଖନ୍ତୁ",
        "brand-name": "ଦେବନାମ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ ସେଟିଙ୍ગ୍ସ",
        "btn-login-trigger": "🔐 ସାଧକ ଲଗଇନ୍",
        "settings-title": "ସାଧନା ସେଟିଙ୍ଗ୍ସ",
        "label-name-template": "ନାମ / ମନ୍ତ୍ର ଟେମ୍ପଲେଟ୍",
        "label-script-lang": "ଲିପି ଏବଂ ଭାଷା",
        "label-writing-target": "ଲକ୍ଷ୍ୟ",
        "label-input-mode": "ଲେଖିବା ଶୈଳୀ",
        "sewa-title": "🌸 ଦେବନାମ ସେବା",
        "sewa-desc": "ବିଜ୍ଞାପନ-ମୁକ୍ତ ସାଧନା ବଜାୟ ରଖିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ ।",
        "btn-donate-trigger": "🙏 ଦାନ କରନ୍ତୁ",
        "diya-label": "ସଜାଗତାର ଦୀପ",
        "stat-total-written": "ମୋଟ ଲିଖିତ",
        "stat-total-desc": "ସମସ୍ତ ସେସନରେ",
        "stat-target-goal": "ଲକ୍ଷ୍ୟ",
        "stat-pages-filled": "ପୃଷ୍ଠା ପୂରଣ",
        "stat-daily-streak": "ଦୈନିକ ସାଧନା",
        "stat-streak-desc": "ନିରନ୍ତର ଲେଖା",
        "btn-export-pdf": "📄 ପୁସ୍ତକ ଡାଉନଲୋଡ୍",
        "btn-reset-data": "🔄 ପ୍ରଗତି ରିସେଟ୍",
        "notebook-title": "📓 ପବିତ୍ର ପାଣ୍ଡୁଲିପି ଗ୍ରିଡ୍",
        "history-title": "📜 ଦୈନିକ ସାଧନା ଲଗ୍",
        "certificate-title": "ସାଧନା ଲକ୍ଷ୍ୟ ହାସଲ ହୋଇଛି",
        "btn-modal-close": "ଆଶୀର୍ବାଦ ଗ୍ରହଣ କରନ୍ତୁ",
        "donation-title": "🌸 ସେବା କରନ୍ତୁ",
        "donation-desc": "ଦେବନାମ ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱେଚ୍ଛାସେବୀ ସେବା ଦ୍ୱାରା ପରିଚାଳିତ ।",
        "qr-instructions": "ସାହାଯ୍ୟ କରିବା ପାଇଁ GPay କିମ୍ବା PhonePe ସ୍କାନ କରନ୍ତୁ ।",
        "btn-submit-donation": "କାର୍ଡ/ପେପାଲ୍ ସହିତ ଆଗକୁ ବଢନ୍ତୁ",
        "tap-btn-native": "ଲେଖନ୍ତୁ",
        "tap-btn-sub": "Write",
        "input-placeholder": "ଏଠାରେ କ୍ଲିକ୍ କରି ଲେଖିବା ଆରମ୍ଭ କରନ୍ତୁ...",
        "spelling-placeholder": "କିମ୍ବା ଅକ୍ଷର ଟାଇପ୍ କରନ୍ତು: ",
        "spelling-instruction": "ନାମ ଲେଖିବା ପାଇଁ <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> ଅକ୍ଷର ଟାଇପ୍ କରନ୍ତು",
        "bell-on": "🔔 ଘଣ୍ଟି ଶବ୍ଦ: ଅନ୍",
        "bell-off": "🔔 ଘଣ୍ଟି ଶବ୍ଦ: ଅଫ୍",
        "tanpura-on": "🪕 ତାନପୁରା: ଅନ୍",
        "tanpura-off": "🪕 ତାନପୁରା: ଅଫ୍",
        "percent-completed": "{percent}% ସମ୍ପୂର୍ଣ୍ଣ",
        "names-on-page": "ବର୍ତ୍ତମାନ ପୃଷ୍ଠାରେ {count} / {capacity} ନାମ",
        "streak-days": "{streak} ଦିନ",
        "streak-day": "{streak} ଦିନ",
        "no-sessions": "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଲେଖା ରେକର୍ଡ ହୋଇନାହିଁ । ଲେଖିବା ଆରମ୍ଭ କରନ୍ତୁ ।",
        "history-item-count": "{count} ନାମ",
        "reset-confirm": "ସମସ୍ତ ନାମ ଡିଲିଟ୍ କରି ପ୍ରଗତି ରିସେଟ୍ କରିବାକୁ ଚାହାଁନ୍ତି କି? ଏହାକୁ ପରିବର୍ତ୍ତନ କରାଯାଇପାରିବ ନାହିଁ ।",
        "reset-success": "ପ୍ରଗତି ସଫଳତାର ସହ ସଫା କରାଗଲା ।",
        "logout-confirm": "ଲଗ୍ ଆଉଟ୍ କରିବାକୁ ଚାହାଁନ୍ତି କି? ଆପଣଙ୍କ ପ୍ରଗତି ସୁରକ୍ଷିତ ରହିବ ।",
        "welcome-msg": "🌸 ସ୍ୱାଗତ, <strong>{name}</strong>!<br><br>ଆପଣଙ୍କ ସାଧନା ସ୍ଥାନ ସକ୍ରିୟ ହୋଇଛି । ସାଧନା ଜାରି ରଖନ୍ତୁ ।",
        "level-title": "ସ୍ତର {level}: {title}",
        "level-names": { 1: "ସାଧକ", 2: "ମୁନି", 3: "ଯୋଗୀ", 4: "ଋଷି" },
        "milestone-108": "💐 <strong>ମାଇଲଷ୍ଟୋନ: ୧ ଚକ୍ର ପୂର୍ଣ୍ଣ!</strong><br><br>ଆପଣ ସଫଳତାର ସହ <strong>୧୦୮ ଥର</strong> ରାମ ନାମ ଲେଖିଛନ୍ତି ।",
        "milestone-1008": "✨ <strong>ଭକ୍ତି ସାଧନା: ୧,୦୦୮ ନାମ!</strong><br><br>ଆପଣ ସଫଳତାର ସହ <strong>୧,୦୦୮ ଥର</strong> ରାମ ନାମ ଲେଖିଛନ୍ତି ।",
        "milestone-target": "🏆 <strong>ସାଧନା ଲକ୍ଷ୍ୟ ପ୍ରାପ୍ତ!</strong><br><br>ଅଭିନନ୍ଦନ! ଆପଣଙ୍କର <strong>{target}</strong> ନାମର ଲକ୍ଷ୍ୟ ପୂରଣ ହୋଇଛି ।",
        "page-indicator": "ପୃଷ୍ଠା {current} / {total}",
        "pdf-title": "ଦେବନାମ ସାଧନା ପୁସ୍ତକ",
        "pdf-total": "ମୋଟ ଲିଖିତ ପବିତ୍ର ନାମ",
        "pdf-status": "ସ୍ଥିତି",
        "pdf-completed": "ଲକ୍ଷ୍ୟ ପୂରଣ ହୋଇଛି",
        "pdf-date": "ସଂକଳନ ତାରିଖ",
        "pdf-stamp": "ଧ୍ୟାନପୂର୍ବକ ସାଧନା ସମ୍ପନ୍ନ",
        "pdf-page-header": "ଦେବନାମ ସାଧନା ପାଣ୍ଡୁଲିପି",
        "pdf-page": "ପୃଷ୍ଠା",
        "pdf-page-footer": "ମୋଟ ଲିଖିତ: {count} | ଭକ୍ତିର ସହ ସମର୍ପିତ",
        "label-password": "ପାସୱାର୍ଡ",
        "label-confirm-password": "ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ",
        "btn-signup-submit": "ଖାତା ତିଆରି କରି ପ୍ରବେଶ କରନ୍ତୁ",
        "prompt-no-account": "ଖାତା ନାହିଁ କି?",
        "link-signup": "ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
        "prompt-have-account": "ପୂର୍ବରု ଖାତା ଅଛି କି?",
        "link-login": "ଲଗ୍‌ଇନ୍",
        "err-wrong-password": "❌ ଭୁଲ୍ ପ୍ରମାଣପତ୍ର କିମ୍ବା ପାସୱାର୍ଡ!",
        "err-password-mismatch": "❌ ପାସୱାର୍ଡ ମେଳ ଖାଉନାହିଁ!",
        "err-general": "❌ ଏକ ତ୍ରୁଟି ଘଟିଲା | ଦୟାକରି ପୁଣਿ ଚେଷ୍ଟာ କରନ୍ତು |",
        "msg-connecting": "କ୍ଲାଉଡ୍ ଡାଟାବେସ୍ ସହିତ ସଂଯੋਗ ହେଉଛି..."
    },
    punjabi: {
        "landing-title": "ਦੇਵਨਾਮ",
        "landing-subtitle": "DevaNama",
        "landing-desc": "ਆਪਣੀ ਸਾਧਨਾ ਪੁਸਤਕ ਨੂੰ ਨਿਜੀ ਬਣਾਉਣ ਅਤੇ ਆਪਣੀ ਜਪ ਪ੍ਰਗਤੀ ਨੂੰ ਟਰੈਕ ਕਰਨ ਲਈ ਆਪਣਾ ਅਧਿਆਤਮਿਕ ਨਾਮ ਦਰਜ ਕਰੋ।",
        "label-login-name": "ਤੁਹਾਡਾ ਅਧਿਆਤਮਿਕ ਨਾਮ",
        "label-login-email": "ਈਮੇਲ ਪਤਾ",
        "label-login-avatar": "ਅਵਤਾਰ ਚੁਣੋ",
        "label-login-lang": "ਐਪ ਦੀ ਭਾਸ਼ਾ ਚੁਣੋ",
        "btn-login-submit": "ਲੌਗ ਇਨ ਕਰੋ",
        "btn-google-login": "ਗੂਗਲ ਨਾਲ ਜਾਰੀ ਰੱਖੋ",
        "brand-name": "ਦੇਵਨਾਮ",
        "brand-name-sub": "DevaNama",
        "mobile-menu-toggle": "⚙️ ਸੈਟਿੰਗਾਂ",
        "btn-login-trigger": "🔐 ਸਾਧਕ ਲੋਗਿਨ",
        "settings-title": "ਸਾਧਨਾ ਸੈਟਿੰਗਾਂ",
        "label-name-template": "ਨਾਮ / ਮੰਤਰ ਟੈਮਪਲੇਟ",
        "label-script-lang": "ਲਿਪੀ ਅਤੇ ਭਾਸ਼ਾ",
        "label-writing-target": "ਮੀਲ ਦਾ ਪੱਥਰ ਟੀਚਾ",
        "label-input-mode": "ਲਿਖਣ ਦਾ ਮੋਡ",
        "sewa-title": "🌸 ਦੇਵਨਾਮ ਸੇਵਾ",
        "sewa-desc": "ਇਸ਼ਤਿਹਾਰ-ਮੁਕਤ ਸਾਧਨਾ ਲਈ ਸਾਡੀ ਸਹਾਇਤਾ ਕਰੋ।",
        "btn-donate-trigger": "🙏 ਦਾਨ ਕਰੋ",
        "diya-label": "ਸਚੇਤਤਾ ਦੀ ਲਾਟ",
        "stat-total-written": "ਕੁੱਲ ਲਿਖਿਆ",
        "stat-total-desc": "ਸਾਰੇ ਸੈਸ਼ਨਾਂ ਵਿੱਚ",
        "stat-target-goal": "ਟੀਚਾ",
        "stat-pages-filled": "ਭਰੇ ਹੋਏ ਪੰਨੇ",
        "stat-daily-streak": "ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ",
        "stat-streak-desc": "ਲਗਾਤਾਰ ਲਿਖਣਾ",
        "btn-export-pdf": "📄 ਪੁਸਤਕ ਡਾਊਨਲੋડ ਕਰੋ",
        "btn-reset-data": "🔄 ਪ੍ਰਗਤੀ ਰੀਸੈਟ ਕਰੋ",
        "notebook-title": "📓 ਪਵਿੱਤਰ ਹੱਥ-ਲਿਖਤ ਗਰਿੱਡ",
        "history-title": "📜 ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਲੌਗ",
        "certificate-title": "ਸਾਧਨਾ ਟੀਚਾ ਪ੍ਰਾਪਤ ਹੋਇਆ",
        "btn-modal-close": "ਆਸ਼ੀਰਵਾਦ ਸਵੀਕਾਰ ਕਰੋ",
        "donation-title": "🌸 ਸੇਵਾ ਕਰੋ",
        "donation-desc": "ਦੇਵਨਾਮ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਵੈ-ਇੱਛਤ ਸੇਵਾ 'ਤੇ ਚੱਲਦਾ ਹੈ।",
        "qr-instructions": "ਸਹਾਇਤਾ ਕਰਨ ਲਈ GPay, PhonePe ਰਾਹੀਂ ਸਕੈਨ ਕਰੋ।",
        "btn-submit-donation": "ਕਾਰਡ/ਪੇਪਾਲ ਨਾਲ ਅੱਗੇ ਵਧੋ",
        "tap-btn-native": "ਲਿਖੋ",
        "tap-btn-sub": "Write",
        "input-placeholder": "ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਲਿਖਣਾ ਸ਼ੁਰੂ ਕਰੋ...",
        "spelling-placeholder": "ਜਾਂ ਅੱਖਰ ਟਾਈਪ ਕਰੋ: ",
        "spelling-instruction": "ਨਾਮ ਲਿਖਣ ਲਈ <span class=\"accent-word\" id=\"word-target-guide\">{letters}</span> ਅੱਖਰ ਟਾਈਪ ਕਰੋ",
        "bell-on": "🔔 ਘੰਟੀ ਦੀ ਆਵਾਜ਼: ਚਾਲੂ",
        "bell-off": "🔔 ਘੰਟੀ ਦੀ ਆਵਾਜ਼: ਬੰਦ",
        "tanpura-on": "🪕 ਤਾਨਪੁਰਾ: ਚਾਲੂ",
        "tanpura-off": "🪕 ਤਾਨਪੁਰਾ: ਬੰਦ",
        "percent-completed": "{percent}% ਪੂਰਾ ਹੋਇਆ",
        "names-on-page": "ਮੌਜੂਦਾ ਪੰਨੇ 'ਤੇ {count} / {capacity} ਨਾਮ",
        "streak-days": "{streak} ਦਿਨ",
        "streak-day": "{streak} ਦਿਨ",
        "no-sessions": "ਅਜੇ ਤੱਕ ਕੋਈ ਲਿਖਣ ਸੈਸ਼ਨ ਰਿਕਾਰਡ ਨਹੀਂ ਹੋਇਆ। ਲਿਖਣਾ ਸ਼ੁਰੂ ਕਰੋ।",
        "history-item-count": "{count} ਨਾਮ",
        "reset-confirm": "ਕੀ ਤੁਸੀਂ ਸਾਰੇ ਲਿਖੇ ਨਾਮਾਂ ਨੂੰ ਮਿਟਾ ਕੇ ਪ੍ਰਗਤੀ ਰੀਸੈਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਹ ਵਾਪਸ ਨਹੀਂ ਲਿਆ ਜਾ ਸਕਦਾ।",
        "reset-success": "ਪ੍ਰਗਤੀ ਸਫਲਤਾਪੂਰਵਕ ਸਾਫ਼ ਕਰ ਦਿੱਤੀ ਗਈ।",
        "logout-confirm": "ਕੀ ਤੁਸੀਂ ਲੌਗ ਆਉਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ ਸੁਰੱਖਿਅਤ ਰਹੇਗੀ।",
        "welcome-msg": "🌸 ਸੁਆਗਤ ਹੈ, <strong>{name}</strong>!<br><br>ਤੁਹਾਡਾ ਸਾਧਨਾ ਖੇਤਰ ਸਰਗਰਮ ਹੈ। ਸਾਧਨਾ ਕਰਦੇ ਰਹੋ।",
        "level-title": "ਪੱਧਰ {level}: {title}",
        "level-names": { 1: "ਸਾਧਕ", 2: "ਮੁਨੀ", 3: "ਯੋਗੀ", 4: "ਰਿਸ਼ੀ" },
        "milestone-108": "💐 <strong>ਮੀਲ ਪੱਥਰ: 1 ਚੱਕਰ ਪੂਰਾ!</strong><br><br>ਤੁਸੀਂ <strong>108 ਵਾਰ</strong> ਰਾਮ ਨਾਮ ਲਿਖ ਲਿਆ ਹੈ।",
        "milestone-1008": "✨ <strong>ਭਗਤੀ ਸਾਧਨਾ: 1,008 ਨਾਮ!</strong><br><br>ਤੁਸੀਂ <strong>1,008 ਵਾਰ</strong> ਰਾਮ ਨਾਮ ਲਿਖ ਲਿਆ ਹੈ।",
        "milestone-target": "🏆 <strong>ਸਾਧਨਾ ਟੀਚਾ ਪੂਰਾ!</strong><br><br>ਵਧਾਈਆਂ! ਤੁਹਾਡਾ <strong>{target}</strong> ਨਾਮਾਂ ਦਾ ਟੀਚา ਪੂਰਾ ਹੋ ਗਿਆ ਹੈ।",
        "page-indicator": "ਪੰਨਾ {current} / {total}",
        "pdf-title": "ਦੇਵਨਾਮ ਸਾਧਨਾ ਪੁਸਤਕ",
        "pdf-total": "ਕੁੱਲ ਲਿਖੇ ਪਵਿੱਤਰ ਨਾਮ",
        "pdf-status": "ਸਥਿਤੀ",
        "pdf-completed": "ਟੀਚਾ ਪ੍ਰਾਪਤ ਹੋਇਆ",
        "pdf-date": "ਸੰਕਲਨ ਦੀ ਮਿਤੀ",
        "pdf-stamp": "ਸਚੇਤ ਸਾਧਨਾ ਪੂਰੀ ਹੋਈ",
        "pdf-page-header": "ਦੇਵਨਾਮ ਸਾਧਨਾ ਹੱਥ-ਲਿਖਤ",
        "pdf-page": "ਪੰਨਾ",
        "pdf-page-footer": "ਕੁੱਲ ਲਿਖੇ: {count} | ਸ਼ਰਧਾਪੂਰਵਕ ਭੇਟ",
        "label-password": "ਪਾਸਵਰਡ",
        "label-confirm-password": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        "btn-signup-submit": "ਖਾਤਾ ਬਣਾਓ ਅਤੇ ਦਾਖਲ ਹੋਵੋ",
        "prompt-no-account": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
        "link-signup": "ਸਾਈਨ ਅੱਪ ਕਰੋ",
        "prompt-have-account": "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?",
        "link-login": "ਲੌਗਇਨ",
        "err-wrong-password": "❌ ਗਲਤ ਪ੍ਰਮਾਣ ਪੱਤਰ ਜਾਂ ਪਾਸਵਰਡ!",
        "err-password-mismatch": "❌ ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ!",
        "err-general": "❌ ਕੋਈ ਗਲਤੀ ਹੋਈ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        "msg-connecting": "ਕਲਾਊਡ ਡੇਟਾਬੇਸ ਨਾਲ ਕਨੈਕਟ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ..."
    }
};

// --- Application State ---
let state = {
    totalCount: 0,
    target: 10000,
    writtenNames: [], // Array of strings (the text representation)
    streak: 0,
    lastWriteDate: null, // YYYY-MM-DD
    history: {}, // { 'YYYY-MM-DD': count }
    currentTemplate: "Sri Rama",
    currentScript: "english",
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

const OPTION_TRANSLATIONS = {
    // optgroup labels
    "Lord Rama": {
        english: "Lord Rama",
        devanagari: "भगवान राम",
        telugu: "శ్రీరాముడు",
        tamil: "இராமன்",
        kannada: "ಶ್ರೀರಾಮ",
        bengali: "ভগবান রাম",
        gujarati: "ભગવાન રામ",
        malayalam: "ശ്രീരാമൻ",
        odia: "ଭଗବାନ ରାମ",
        punjabi: "ਭਗਵਾਨ ਰਾਮ"
    },
    "Lord Shiva": {
        english: "Lord Shiva",
        devanagari: "भगवान शिव",
        telugu: "శివుడు",
        tamil: "சிவன்",
        kannada: "ಶಿವ",
        bengali: "ভগবান শিব",
        gujarati: "ભગવાન શિવ",
        malayalam: "ശിവൻ",
        odia: "ଭଗବାନ ଶିବ",
        punjabi: "ਭਗਵਾਨ ਸ਼ਿਵ"
    },
    "Lord Ganesha": {
        english: "Lord Ganesha",
        devanagari: "भगवान गणेश",
        telugu: "వినాయకుడు",
        tamil: "விநாயகர்",
        kannada: "ಗಣೇಶ",
        bengali: "ভগবান গণেশ",
        gujarati: "ભગવાન ગણેશ",
        malayalam: "ഗണപതി",
        odia: "ଭଗବାନ ଗଣେଶ",
        punjabi: "ਭਗਵਾਨ ਗਣੇਸ਼"
    },
    "Lord Krishna & Vishnu": {
        english: "Lord Krishna & Vishnu",
        devanagari: "भगवान कृष्ण और विष्णु",
        telugu: "శ్రీకృష్ణుడు & విష్ణువు",
        tamil: "கிருஷ்ணர் & விஷ்ணு",
        kannada: "ಕೃಷ್ಣ ಮತ್ತು ವಿಷ್ಣು",
        bengali: "ভগবান কৃষ্ণ ও বিষ্ণু",
        gujarati: "ભગવાન કૃષ્ણ અને વિષ્ણુ",
        malayalam: "ശ്രീകൃഷ്ണനും വിഷ്ണുവും",
        odia: "ଭଗବାନ କୃଷ୍ଣ ଓ ବିଷ୍ଣୁ",
        punjabi: "ਭਗਵਾਨ ਕ੍ਰਿਸ਼ਨ ਅਤੇ ਵਿਸ਼ਨੂੰ"
    },
    "Lord Hanuman": {
        english: "Lord Hanuman",
        devanagari: "भगवान हनुमान",
        telugu: "హనుమంతుడు",
        tamil: "அனுமன்",
        kannada: "ಹनुమಂತ",
        bengali: "ভগবান হনুমান",
        gujarati: "ભગવાન હનુમાન",
        malayalam: "ഹനുമാൻ",
        odia: "ଭଗବାନ ହନୁମାନ",
        punjabi: "ਭਗਵਾਨ ਹਨੂਮਾਨ"
    },
    // script languages
    "devanagari": {
        english: "Devanagari (Sanskrit/Hindi/Marathi)",
        devanagari: "देवनागरी (संस्कृत/हिन्दी/मराठी)",
        telugu: "దేవనాగరి (సంస్కృతం/హిందీ/మరాఠీ)",
        tamil: "தேவநாகரி (சமஸ்கிருதம்/இந்தி/மராத்தி)",
        kannada: "ದೇವನಾಗರಿ (ಸಂಸ್ಕೃತ/ಹಿಂದಿ/ಮರಾಠಿ)",
        bengali: "দেবনাগরী (সংস্কৃত/হিন্দি/மারাঠি)",
        gujarati: "દેવનાગરી (સંસ્કૃત/હિન્દી/મરાઠી)",
        malayalam: "ദേവനാഗരി (സംസ്കൃതം/ഹിന്ദി/മറാഠി)",
        odia: "ଦେବନାଗରୀ (ସଂସ୍କୃତ/ହିନ୍ଦୀ/ମରାଠୀ)",
        punjabi: "ਦੇਵਨਾਗਰੀ (ਸੰਸਕ੍ਰਿਤ/ਹਿੰਦੀ/ਮਰਾਠੀ)"
    },
    "english": {
        english: "Latin (English)",
        devanagari: "लैटिन (अंग्रेजी)",
        telugu: "లాటిన్ (ఇంగ్లీష్)",
        tamil: "லத்தீன் (ஆங்கிலம்)",
        kannada: "ಲ್ಯಾಟಿನ್ (ಇಂಗ್ಲಿಷ್)",
        bengali: "ল্যাটিন (ইংরেজি)",
        gujarati: "લેટિન (અંગ્રેજી)",
        malayalam: "ലാറ്റിൻ (ഇംഗ്ലീష్)",
        odia: "ଲାଟିନ୍ (ଇଂରାଜୀ)",
        punjabi: "ਲੈਟਿਨ (ਅੰਗਰੇਜ਼ੀ)"
    },
    "telugu": {
        english: "Telugu (తెలుగు)",
        devanagari: "तेलुगु (తెలుగు)",
        telugu: "తెలుగు (తెలుగు)",
        tamil: "தெலுங்கு (తెలుగు)",
        kannada: "ತೆಲುಗು (తెలుగు)",
        bengali: "তেলுகు (తెలుగు)",
        gujarati: "તેલુગુ (తెలుగు)",
        malayalam: "തെലുങ്ക് (తెలుగు)",
        odia: "ତେଲୁଗୁ (తెలుగు)",
        punjabi: "ਤੇਲਗੂ (తెలుగు)"
    },
    "tamil": {
        english: "Tamil (தமிழ்)",
        devanagari: "तमिल (தமிழ்)",
        telugu: "తమిళం (தமிழ்)",
        tamil: "தமிழ் (தமிழ்)",
        kannada: "ತಮಿಳು (தமிழ்)",
        bengali: "তামিল (தமிழ்)",
        gujarati: "તમિલ (தமிழ்)",
        malayalam: "തമിഴ് (தமிழ்)",
        odia: "ତାମିଲ୍ (தமிழ்)",
        punjabi: "ਤਮਿਲ (தமிழ்)"
    },
    "kannada": {
        english: "Kannada (ಕನ್ನಡ)",
        devanagari: "कन्नड़ (ಕನ್ನಡ)",
        telugu: "కన్నడ (ಕನ್ನಡ)",
        tamil: "கன்னடம் (ಕನ್ನಡ)",
        kannada: "ಕನ್ನಡ (ಕನ್ನಡ)",
        bengali: "কন্নড় (ಕನ್ನಡ)",
        gujarati: "કન્નડ (ಕನ್ನಡ)",
        malayalam: "കന്നഡ (കನ್ನಡ)",
        odia: "କନ୍ନଡ (ಕನ್ನಡ)",
        punjabi: "ਕੰਨੜ (ਕੰਨੜ)"
    },
    "bengali": {
        english: "Bengali (বাংলা)",
        devanagari: "बंगाली (বাংলা)",
        telugu: "బెంగాలీ (বাংলা)",
        tamil: "பெங்காலி (বাংলা)",
        kannada: "ಬೆಂಗಾಲಿ (বাংলা)",
        bengali: "বাংলা (বাংলা)",
        gujarati: "બંગાળી (বাংলা)",
        malayalam: "ബംഗാളി (বাংলা)",
        odia: "ବଙ୍ଗଳା (বাংলা)",
        punjabi: "ਬੰਗਾਲੀ (বাংলা)"
    },
    "gujarati": {
        english: "Gujarati (ગુજરાતી)",
        devanagari: "Gujarati (ગુજરાતી)",
        telugu: "గుజరాతీ (ગુજરાતી)",
        tamil: "குજરાத்தி (ગુજરાતી)",
        kannada: "ગુજરાતી (ગુજરાતી)",
        bengali: "গুজরাটি (ગુજરાતી)",
        gujarati: "ગુજરાતી (ગુજરાતી)",
        malayalam: "ഗുജറാത്തി (ગુજરાത്തി)",
        odia: "ଗୁଜରାଟୀ (ଗୁଜରାଟୀ)",
        punjabi: "ਗੁਜਰਾਤੀ (ਗੁਜਰਾਤੀ)"
    },
    "malayalam": {
        english: "Malayalam (മലയാളം)",
        devanagari: "मलयालम (മലയാളം)",
        telugu: "మలయాళం (മലയാളം)",
        tamil: "മലയാളം (മലയാളം)",
        kannada: "മലയാളം (മലയാളം)",
        bengali: "মালয়ালাম (മലയാളം)",
        gujarati: "મલયાલમ (മലയാളം)",
        malayalam: "മലയാളം (മലയാളം)",
        odia: "ମାଲାୟାଲମ୍ (മലയാളം)",
        punjabi: "ਮਲਿਆਲਮ (മലയാളം)"
    },
    "odia": {
        english: "Odia (ଓଡ଼ିଆ)",
        devanagari: "ओड़िया (ଓଡ଼ିଆ)",
        telugu: "ఒడియా (ଓଡ଼ିଆ)",
        tamil: "ஒடியா (ଓଡ଼ିଆ)",
        kannada: "ಒಡಿಯಾ (ଓଡ଼ିଆ)",
        bengali: "ଓଡ଼ିଆ (ଓଡ଼ିଆ)",
        gujarati: "ઓડિયા (ଓଡ଼ିଆ)",
        malayalam: "ഒഡിയ (ଓଡ଼ିଆ)",
        odia: "ଓଡ଼ିଆ (ଓଡ଼ିଆ)",
        punjabi: "ਓਡੀਆ (ଓଡ଼ିଆ)"
    },
    "punjabi": {
        english: "Punjabi (ਪੰਜਾਬੀ)",
        devanagari: "पंजाबी (ਪੰਜਾਬੀ)",
        telugu: "పంజాబీ (ਪੰਜਾਬੀ)",
        tamil: "பஞ்சாபி (ਪੰਜਾਬੀ)",
        kannada: "ਪಂಜಾಬಿ (ਪੰਜਾਬੀ)",
        bengali: "পাঞ্জাবি (ਪੰਜਾਬੀ)",
        gujarati: "ਪੰਜਾਬੀ (ਪੰਜਾਬੀ)",
        malayalam: "ਪഞ്ചാਬੀ (ਪੰਜਾਬੀ)",
        odia: "ପଞ୍ջାବୀ (ପੰਜਾਬੀ)",
        punjabi: "ਪੰਜਾਬੀ (ਪੰਜਾਬੀ)"
    },
    // milestone targets
    "108": {
        english: "108 Names (1 Round)",
        devanagari: "108 नाम (1 माला)",
        telugu: "108 నామాలు (1 రౌండ్)",
        tamil: "108 நாமங்கள் (1 சுற்று)",
        kannada: "108 ನಾಮಗಳು (1 ಸುತ್ತು)",
        bengali: "১০৮ নাম (১ রাউন্ড)",
        gujarati: "108 નામ (1 માળા)",
        malayalam: "108 നാമങ്ങൾ (1 റൗണ്ട്)",
        odia: "108 ନାମ (1 ମାଳା)",
        punjabi: "108 ਨਾਮ (1 ਮਾਲਾ)"
    },
    "1008": {
        english: "1,008 Names",
        devanagari: "1,008 नाम",
        telugu: "1,008 నామాలు",
        tamil: "1,008 நாமங்கள்",
        kannada: "1,008 ನಾಮಗಳು",
        bengali: "১,০০৮ নাম",
        gujarati: "1,008 નામ",
        malayalam: "1,008 നാമങ്ങൾ",
        odia: "1,008 ନାମ",
        punjabi: "1,008 ਨਾਮ"
    },
    "10000": {
        english: "10,000 Names (Mini Koti)",
        devanagari: "10,000 नाम (लघु कोटि)",
        telugu: "10,000 నామాలు (లఘు కోటి)",
        tamil: "10,000 நாமங்கள் (மினி கோட்டி)",
        kannada: "10,000 ನಾಮಗಳು (ಕಿರು ಕೋಟಿ)",
        bengali: "১০,০০০ নাম (মিনি কোটি)",
        gujarati: "10,000 નામ (લઘુ કોટિ)",
        malayalam: "10,000 നാമങ്ങൾ (മിനി കോടി)",
        odia: "10,000 ନାମ (ମିନି କୋଟି)",
        punjabi: "10,000 ਨਾਮ (मਿੰਨੀ ਕੋਟੀ)"
    },
    "100000": {
        english: "100,000 Names (Lakh)",
        devanagari: "100,000 नाम (लाख)",
        telugu: "1,00,000 నామాలు (లక్ష)",
        tamil: "100,000 நாமங்கள் (லட்சம்)",
        kannada: "100,000 ನಾಮಗಳು (ಲಕ್ಷ)",
        bengali: "১,০০,০০০ নাম (লক্ষ)",
        gujarati: "100,000 નામ (લાખ)",
        malayalam: "100,000 നാമങ്ങൾ (ലക്ഷം)",
        odia: "100,000 ନାମ (ଲକ୍ଷ)",
        punjabi: "100,000 ਨਾਮ (ਲੱਖ)"
    },
    "10000000": {
        english: "10,000,000 (Rama Koti)",
        devanagari: "10,000,000 (राम कोटि)",
        telugu: "1,00,00,000 (రామ కోటి)",
        tamil: "1,00,00,000 (ராம கோடி)",
        kannada: "10,000,000 (ರಾಮ ಕೋಟಿ)",
        bengali: "১,০০,০০,০০০ (রাম কোটি)",
        gujarati: "10,000,000 (રામ કોટિ)",
        malayalam: "1,00,00,000 (രാമ കോടി)",
        odia: "10,000,000 (ରାମ କୋଟି)",
        punjabi: "10,000,000 (ਰਾਮ ਕੋਟੀ)"
    },
    // input modes
    "tap": {
        english: "Meditative Tap (Space/Enter/Click)",
        devanagari: "ध्यानपूर्वक टैप (स्पेस/एंटर/क्लिक)",
        telugu: "ధ్యానపూర్వక ట్యాప్ (స్పేస్/ఎంటర్/క్లిక్)",
        tamil: "தியான தட்டல் (ஸ்பேஸ்/என்டர்/கிளிக்)",
        kannada: "ಧ್ಯಾನಪೂರ್ವಕ ಟ್ಯಾಪ್ (ಸ್ಪೇಸ್/ಎಂಟರ್/ಕ್ಲಿಕ್)",
        bengali: "ধ্যানমগ্ন ট্যাপ (স্পেস/এন্টার/ক্লিক)",
        gujarati: "ધ્યાનપૂર્વક ટેપ (સ્પેસ/એન્ટર/ક્લિક)",
        malayalam: "ധ്യാനാത്മകമായ ടാപ്പ് (സ്പേസ്/എന്റർ/ക്ലിക്ക്)",
        odia: "ଧ୍ୟାନପୂର୍ବକ ଟ୍ୟାପ୍ (ସ୍ପେସ୍/ଏଣ୍ଟର/କ୍ଲିକ୍)",
        punjabi: "ਧਿਆਨ ਨਾਲ ਟੈਪ ਕਰੋ (ਸਪੇਸ/ਐਂਟਰ/ਕਲਿੱਕ)"
    },
    "spelling": {
        english: "Spelling Chant (Type letters)",
        devanagari: "वर्तनी जाप (अक्षर टाइप करें)",
        telugu: "అక్షరాల జపం (టైప్ చేయండి)",
        tamil: "எழுத்து உச்சரிப்பு (தட்டச்சு செய்க)",
        kannada: "ಅಕ್ಷರಗಳ ಜಪ (ಟೈಪ್ ಮಾಡಿ)",
        bengali: "বানান জপ (অক্ষর টাইপ করুন)",
        gujarati: "જોડણી જાપ (અક્ષરો ટાઇપ કરો)",
        malayalam: "അക്ഷര ജപം (അക്ഷരങ്ങൾ ടൈപ്പ് ചെയ്യുക)",
        odia: "ବନାନ ଜପ (ଅକ୍ଷര ଟାଇପ୍ କରନ୍ତୁ)",
        punjabi: "ਅੱਖਰ ਜਾਪ (ਅੱਖਰ ਟਾਈਪ ਕਰੋ)"
    },
    // avatars
    "🌸 Lotus": {
        english: "🌸 Sacred Lotus",
        devanagari: "🌸 पवित्र कमल",
        telugu: "🌸 పవిత్ర పద్మం",
        tamil: "🌸 புனித தாமரை",
        kannada: "🌸 ಪವಿತ್ರ ಕಮಲ",
        bengali: "🌸 पवित्र पद्म",
        gujarati: "🌸 પવિત્ર કમળ",
        malayalam: "🌸 പവിത്ര താമര",
        odia: "🌸 ପବିତ୍ର ପଦ୍ମ",
        punjabi: "🌸 ਪਵਿੱਤਰ ਕਮਲ"
    },
    "🪔 Diya": {
        english: "🪔 Glowing Diya",
        devanagari: "🪔 जलता हुआ दीया",
        telugu: "🪔 వెలిగే దీపం",
        tamil: "🪔 ஒளिरும் அகல் விளக்கு",
        kannada: "🪔 ಬೆಳಗುವ ದೀಪ",
        bengali: "🪔 জ্বলন্ত প্রদীপ",
        gujarati: "🪔 પ્રજ્વલિત દીવો",
        malayalam: "🪔 തിളങ്ങുന്ന ദീപം",
        odia: "🪔 ଜଳନ୍ତା ଦୀପ",
        punjabi: "🪔 ਚਮਕਦਾ ਦੀਵਾ"
    },
    "ॐ Om": {
        english: "ॐ Om Symbol",
        devanagari: "ॐ ओम प्रतीक",
        telugu: "ॐ ఓం చిహ్నం",
        tamil: "ॐ ஓம் சின்னம்",
        kannada: "ॐ ಓಂ ಚಿಹ್ನೆ",
        bengali: "ॐ ওম प्रतीक",
        gujarati: "ॐ ઓમ પ્રતીક",
        malayalam: "ॐ ഓം ചിഹ്നം",
        odia: "ॐ ଓଁ ପ୍ରତୀକ",
        punjabi: "ॐ ਓਮ ਚਿੰਨ੍ਹ"
    },
    "📿 Mala": {
        english: "📿 Chanting Mala",
        devanagari: "📿 जप माला",
        telugu: "📿 జప మాల",
        tamil: "📿 ஜெப மாலை",
        kannada: "📿 ಜಪ ಮಾಲೆ",
        bengali: "📿 জপমালা",
        gujarati: "📿 જાપ માળા",
        malayalam: "📿 ജപമാല",
        odia: "📿 ଜପ ମାଳି",
        punjabi: "📿 ਜਾਪ ਮਾਲਾ"
    }
};

function translatePage() {
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    
    // Scan all data-translate elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = dict[key];
            } else {
                if (key === 'welcome-msg' || key === 'sewa-desc' || key === 'donation-desc' || key === 'landing-desc' || key === 'qr-instructions') {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        }
    });

    // Translate all select dropdown options and optgroup labels
    const lang = state.currentScript;
    
    // 1. Mantra Template dropdown (#name-template)
    const nameTemplateSelect = document.getElementById('name-template');
    if (nameTemplateSelect) {
        // Optgroups
        const optgroups = nameTemplateSelect.getElementsByTagName('optgroup');
        for (let og of optgroups) {
            let originalLabel = og.getAttribute('data-original');
            if (!originalLabel) {
                originalLabel = og.getAttribute('label');
                og.setAttribute('data-original', originalLabel);
            }
            if (OPTION_TRANSLATIONS[originalLabel] && OPTION_TRANSLATIONS[originalLabel][lang]) {
                og.label = OPTION_TRANSLATIONS[originalLabel][lang];
            }
        }
        // Options
        const options = nameTemplateSelect.getElementsByTagName('option');
        for (let opt of options) {
            const val = opt.value;
            if (SCRIPT_DICTIONARY[val]) {
                const localized = SCRIPT_DICTIONARY[val][lang] || SCRIPT_DICTIONARY[val]['english'];
                const eng = SCRIPT_DICTIONARY[val]['english'];
                if (lang === 'english') {
                    opt.textContent = eng;
                } else {
                    opt.textContent = `${eng} / ${localized}`;
                }
            }
        }
    }

    // 2. Script & Language dropdown (#script-lang) and landing page Language select (#login-lang)
    ['script-lang', 'login-lang'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const options = el.getElementsByTagName('option');
            for (let opt of options) {
                const val = opt.value;
                if (OPTION_TRANSLATIONS[val] && OPTION_TRANSLATIONS[val][lang]) {
                    opt.textContent = OPTION_TRANSLATIONS[val][lang];
                }
            }
        }
    });

    // 3. Milestone Target dropdown (#writing-target)
    const targetSelect = document.getElementById('writing-target');
    if (targetSelect) {
        const options = targetSelect.getElementsByTagName('option');
        for (let opt of options) {
            const val = opt.value;
            if (OPTION_TRANSLATIONS[val] && OPTION_TRANSLATIONS[val][lang]) {
                opt.textContent = OPTION_TRANSLATIONS[val][lang];
            }
        }
    }

    // 4. Writing Mode dropdown (#input-mode)
    const modeSelect = document.getElementById('input-mode');
    if (modeSelect) {
        const options = modeSelect.getElementsByTagName('option');
        for (let opt of options) {
            const val = opt.value;
            if (OPTION_TRANSLATIONS[val] && OPTION_TRANSLATIONS[val][lang]) {
                opt.textContent = OPTION_TRANSLATIONS[val][lang];
            }
        }
    }

    // 5. Signup Avatar dropdown (#signup-avatar)
    const avatarSelect = document.getElementById('signup-avatar');
    if (avatarSelect) {
        const options = avatarSelect.getElementsByTagName('option');
        for (let opt of options) {
            const val = opt.value;
            if (OPTION_TRANSLATIONS[val] && OPTION_TRANSLATIONS[val][lang]) {
                opt.textContent = OPTION_TRANSLATIONS[val][lang];
            }
        }
    }

    // Update title tags
    document.title = state.currentScript === 'english' ? "Rama Koti - Digital Meditative Writing App" : "देवनाम - डिजिटल साधना लेखन ऐप";
}

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

// 1b. Meditative Name Chanting (Speech Synthesis engine)
function speakName(text, lang) {
    if (!('speechSynthesis' in window)) return;
    
    // Stop any ongoing speech to prevent overlapping chants
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map script languages to TTS locales
    const localeMap = {
        english: 'en-US',
        devanagari: 'hi-IN',
        telugu: 'te-IN',
        tamil: 'ta-IN',
        kannada: 'kn-IN',
        bengali: 'bn-IN',
        gujarati: 'gu-IN',
        malayalam: 'ml-IN',
        odia: 'or-IN',
        punjabi: 'pa-IN'
    };
    
    const targetLang = localeMap[lang] || 'hi-IN';
    utterance.lang = targetLang;
    
    // Configure meditative properties
    utterance.rate = 0.82;   // Slower, calming speed
    utterance.pitch = 0.95;  // Slightly lower, warmer tone
    utterance.volume = 1.0;
    
    // Attempt to match native voice locales
    if (window.speechSynthesis.getVoices) {
        const voices = window.speechSynthesis.getVoices();
        const matchingVoice = voices.find(voice => 
            voice.lang.toLowerCase().replace('_', '-').startsWith(targetLang.split('-')[0].toLowerCase())
        );
        if (matchingVoice) {
            utterance.voice = matchingVoice;
        }
    }
    
    window.speechSynthesis.speak(utterance);
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

async function saveProgress() {
    localStorage.setItem('rama_koti_state', JSON.stringify(state));
    
    if (supabaseClient) {
        try {
            const { data: { session } } = await supabaseClient.auth.getSession();
            if (session && session.user) {
                const progressUpdate = {
                    total_count: state.totalCount,
                    target: state.target,
                    written_names: state.writtenNames,
                    streak: state.streak,
                    last_write_date: state.lastWriteDate,
                    history: state.history,
                    current_template: state.currentTemplate,
                    input_mode: state.inputMode,
                    is_bell_sound_on: state.isBellSoundOn,
                    is_ambient_on: state.isAmbientOn,
                    updated_at: new Date().toISOString()
                };
                const { error } = await supabaseClient
                    .from('sadhana_progress')
                    .update(progressUpdate)
                    .eq('user_id', session.user.id);
                if (error) {
                    console.error("Failed to sync progress to Supabase:", error);
                }
            }
        } catch (e) {
            console.error("Error in saveProgress:", e);
        }
    }
}

async function resetProgress() {
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    if (confirm(dict["reset-confirm"])) {
        state.totalCount = 0;
        state.writtenNames = [];
        state.history = {};
        state.streak = 0;
        state.lastWriteDate = null;
        await saveProgress();
        loadProgress();
        showNotification(dict["reset-success"]);
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
    if (state.isBellSoundOn) {
        speakName(nameText, state.currentScript);
    }

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
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    // Check if achieved general targets
    if (count === 108) {
        showNotification(dict["milestone-108"]);
    } else if (count === 1008) {
        showNotification(dict["milestone-1008"]);
    } else if (count === state.target) {
        showNotification(dict["milestone-target"].replace("{target}", state.target.toLocaleString()));
    } else if (count % 1000 === 0 && count > 0) {
        // Minor sound or notification
        playTempleBell();
    }
}

// Current page browsing index
let currentPageIndex = 0;

const LOCALES = {
    english: 'en-US',
    devanagari: 'hi-IN',
    telugu: 'te-IN',
    tamil: 'ta-IN',
    kannada: 'kn-IN',
    bengali: 'bn-IN',
    gujarati: 'gu-IN',
    malayalam: 'ml-IN',
    odia: 'or-IN',
    punjabi: 'pa-IN'
};

function renderNotebookPage() {
    const gridContainer = document.getElementById('notebook-grid-page');
    gridContainer.innerHTML = '';
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];

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
    const pageText = dict["page-indicator"]
        .replace("{current}", currentPageIndex + 1)
        .replace("{total}", totalPages);
    document.getElementById('notebook-page-indicator').textContent = pageText;
    document.getElementById('btn-prev-page').disabled = (currentPageIndex === 0);
    document.getElementById('btn-next-page').disabled = (currentPageIndex >= totalPages - 1);
}

function renderHistoryLog() {
    const historyContainer = document.getElementById('history-items-container');
    historyContainer.innerHTML = '';
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];

    const sortedDates = Object.keys(state.history).sort((a, b) => new Date(b) - new Date(a));

    if (sortedDates.length === 0) {
        historyContainer.innerHTML = `
            <div class="history-item" style="border: none; justify-content: center; color: var(--text-muted);">
                ${dict["no-sessions"]}
            </div>`;
        return;
    }

    const locale = LOCALES[state.currentScript] || 'en-US';
    sortedDates.forEach(date => {
        const count = state.history[date];
        const formattedDate = new Date(date).toLocaleDateString(locale, {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <span class="history-date">📅 ${formattedDate}</span>
            <span class="history-count">${dict["history-item-count"].replace("{count}", count)}</span>
        `;
        historyContainer.appendChild(item);
    });
}

function syncUIElements() {
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];

    // Run basic page translation
    translatePage();

    // Stats counters
    document.getElementById('stat-total-count').textContent = state.totalCount.toLocaleString();
    document.getElementById('stat-target').textContent = state.target.toLocaleString();
    
    // Page Ratio
    const currentPageNamesCount = state.writtenNames.length % PAGE_CAPACITY;
    document.getElementById('stat-pages').textContent = Math.floor(state.writtenNames.length / PAGE_CAPACITY);
    
    const pageRatioText = dict["names-on-page"]
        .replace("{count}", currentPageNamesCount)
        .replace("{capacity}", PAGE_CAPACITY);
    document.getElementById('stat-page-ratio').textContent = pageRatioText;

    // Target Progress percentage
    const progressPercent = Math.min(100, Math.floor((state.totalCount / state.target) * 100));
    const progressText = dict["percent-completed"].replace("{percent}", progressPercent);
    document.getElementById('stat-target-progress').textContent = progressText;

    // Streak
    const streakKey = state.streak === 1 ? "streak-day" : "streak-days";
    const streakText = dict[streakKey].replace("{streak}", state.streak);
    document.getElementById('stat-streak').textContent = streakText;

    // Select boxes sync
    document.getElementById('name-template').value = state.currentTemplate;
    document.getElementById('script-lang').value = state.currentScript;
    const loginLangEl = document.getElementById('login-lang');
    if (loginLangEl) loginLangEl.value = state.currentScript;
    document.getElementById('writing-target').value = state.target;
    document.getElementById('input-mode').value = state.inputMode;

    // Sound Toggles UI
    const bellText = state.isBellSoundOn ? dict["bell-on"] : dict["bell-off"];
    document.getElementById('sound-bell-toggle').textContent = bellText;
    document.getElementById('sound-bell-toggle').className = state.isBellSoundOn ? 'control-btn active' : 'control-btn';
    
    const tanpuraText = state.isAmbientOn ? dict["tanpura-on"] : dict["tanpura-off"];
    document.getElementById('ambient-audio-toggle').textContent = tanpuraText;
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
    const landingPage = document.getElementById('landing-page');
    const appContainer = document.querySelector('.app-container');
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];

    if (state.profile && state.profile.loggedIn) {
        if (landingPage) landingPage.style.display = 'none';
        if (appContainer) appContainer.style.display = 'grid';

        if (profileSection) {
            const lvlInfo = getSadhakaLevelInfo(state.totalCount);
            const levelNames = dict["level-names"] || TRANSLATIONS["english"]["level-names"];
            const lvlTitle = levelNames[lvlInfo.level] || lvlInfo.title;
            const levelText = dict["level-title"]
                .replace("{level}", lvlInfo.level)
                .replace("{title}", lvlTitle);
            const avatarEmoji = state.profile.avatar ? state.profile.avatar.split(' ')[0] : '\uD83C\uDF38';
            profileSection.innerHTML = `
                <div class="profile-info-container">
                    <div class="profile-avatar-circle">${avatarEmoji}</div>
                    <div class="profile-sadhaka-name">${escapeHTML(state.profile.name)}</div>
                    <div class="profile-sadhaka-level">${levelText}</div>
                    <button class="btn-profile-logout" id="btn-logout-trigger">${dict["btn-logout-trigger"]}</button>
                </div>
            `;
            const logoutBtn = document.getElementById('btn-logout-trigger');
            if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
        }
    } else {
        if (landingPage) landingPage.style.display = 'flex';
        if (appContainer) appContainer.style.display = 'none';
    }
}

function toggleAuthCard(mode) {
    const loginBox = document.getElementById('login-box');
    const signupBox = document.getElementById('signup-box');
    if (mode === 'signup') {
        if (loginBox) loginBox.style.display = 'none';
        if (signupBox) signupBox.style.display = 'block';
    } else {
        if (loginBox) loginBox.style.display = 'block';
        if (signupBox) signupBox.style.display = 'none';
    }
}

async function handleLoginSubmit(e) {
    e.preventDefault();
    const emailVal = document.getElementById('login-email').value.trim();
    const passwordVal = document.getElementById('login-password').value;
    const errorMsgEl = document.getElementById('login-error-msg');
    
    if (errorMsgEl) errorMsgEl.style.display = 'none';
    
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    
    if (!supabaseClient) {
        if (errorMsgEl) {
            errorMsgEl.textContent = "Please configure SUPABASE_URL and SUPABASE_ANON_KEY in app.js";
            errorMsgEl.style.display = 'block';
        }
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = dict["msg-connecting"] || "Connecting...";
    }
    
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: emailVal,
            password: passwordVal
        });
        
        if (error) {
            if (errorMsgEl) {
                if (error.message === "Invalid login credentials") {
                    errorMsgEl.textContent = dict["err-wrong-password"] || "❌ Incorrect credentials!";
                } else {
                    errorMsgEl.textContent = "❌ " + error.message;
                }
                errorMsgEl.style.display = 'block';
            }
        } else {
            const welcomeName = data.user.user_metadata.display_name || "Sadhaka";
            const welcomeMsg = (dict["welcome-msg"] || "Welcome, {name}!").replace("{name}", escapeHTML(welcomeName));
            showNotification(welcomeMsg);
        }
    } catch (err) {
        if (errorMsgEl) {
            errorMsgEl.textContent = dict["err-general"] || "❌ An error occurred.";
            errorMsgEl.style.display = 'block';
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
}

async function handleSignupSubmit(e) {
    e.preventDefault();
    const nameVal = document.getElementById('signup-name').value.trim();
    const emailVal = document.getElementById('signup-email').value.trim();
    const avatarVal = document.getElementById('signup-avatar').value;
    const langVal = document.getElementById('login-lang').value;
    const passwordVal = document.getElementById('signup-password').value;
    const confirmPasswordVal = document.getElementById('signup-confirm-password').value;
    const errorMsgEl = document.getElementById('signup-error-msg');
    
    if (errorMsgEl) errorMsgEl.style.display = 'none';
    
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    
    if (passwordVal !== confirmPasswordVal) {
        if (errorMsgEl) {
            errorMsgEl.textContent = dict["err-password-mismatch"] || "❌ Passwords do not match!";
            errorMsgEl.style.display = 'block';
        }
        return;
    }
    
    if (!supabaseClient) {
        if (errorMsgEl) {
            errorMsgEl.textContent = "Please configure SUPABASE_URL and SUPABASE_ANON_KEY in app.js";
            errorMsgEl.style.display = 'block';
        }
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = dict["msg-connecting"] || "Connecting...";
    }
    
    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: emailVal,
            password: passwordVal,
            options: {
                data: {
                    display_name: nameVal,
                    avatar: avatarVal,
                    language: langVal
                }
            }
        });
        
        if (error) {
            if (errorMsgEl) {
                errorMsgEl.textContent = error.message;
                errorMsgEl.style.display = 'block';
            }
        } else {
            const welcomeName = nameVal || "Sadhaka";
            const welcomeMsg = (dict["welcome-msg"] || "Welcome, {name}!").replace("{name}", escapeHTML(welcomeName));
            showNotification(welcomeMsg);
            
            if (!data.session) {
                showNotification("Please check your email to confirm registration, then log in.");
                toggleAuthCard('login');
            }
        }
    } catch (err) {
        if (errorMsgEl) {
            errorMsgEl.textContent = dict["err-general"] || "❌ An error occurred.";
            errorMsgEl.style.display = 'block';
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
}

async function handleLogout() {
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    if (confirm(dict["logout-confirm"])) {
        if (supabaseClient) {
            try {
                await supabaseClient.auth.signOut();
            } catch (e) {
                console.error("Error signing out:", e);
            }
        }
        state.profile = {
            loggedIn: false,
            name: "",
            email: "",
            avatar: "🌸 Lotus"
        };
        // Reset local progress on logout
        state.totalCount = 0;
        state.writtenNames = [];
        state.streak = 0;
        state.lastWriteDate = null;
        state.history = {};
        
        await saveProgress();
        updateUserProfileUI();
        syncUIElements();
        renderNotebookPage();
        renderHistoryLog();
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
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    
    // Update top text guide (localized script syllables instead of English letters)
    const targetTextString = syllables.join(" - ");
    const instructionsText = document.getElementById('instructions-text');
    if (instructionsText) {
        instructionsText.innerHTML = dict["spelling-instruction"].replace("{letters}", targetTextString);
    }

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
    inputField.placeholder = `${dict["spelling-placeholder"]}${letters.join("")}`;
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
    const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
    
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
                    <span>${dict["pdf-page-header"]}</span>
                    <span>${dict["pdf-page"]} ${p + 1}</span>
                </div>
                <div class="print-grid">
                    ${gridCells}
                </div>
                <div class="print-page-footer">
                    ${dict["pdf-page-footer"].replace("{count}", state.totalCount)}
                </div>
            </div>
        `;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${dict["pdf-title"]}</title>
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
                <h1 class="cover-title">${dict["pdf-title"]}</h1>
                <div class="cover-detail">${dict["pdf-total"]}: <strong>${state.totalCount.toLocaleString()}</strong></div>
                <div class="cover-detail">${dict["pdf-status"]}: ${dict["pdf-completed"]} (${state.target.toLocaleString()})</div>
                <div class="cover-detail">${dict["pdf-date"]}: ${new Date().toLocaleDateString(LOCALES[state.currentScript] || 'en-US')}</div>
                <div class="cover-stamp">
                     ${dict["pdf-stamp"]}
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
    if (supabaseClient) {
        supabaseClient.auth.onAuthStateChange(async (event, session) => {
            if (session && session.user) {
                const user = session.user;
                state.profile = {
                    loggedIn: true,
                    name: user.user_metadata.display_name || "Sadhaka",
                    email: user.email,
                    avatar: user.user_metadata.avatar || "🌸 Lotus"
                };
                
                // Fetch progress from database
                const { data, error } = await supabaseClient
                    .from('sadhana_progress')
                    .select('*')
                    .eq('user_id', user.id)
                    .maybeSingle();
                    
                if (error) {
                    console.error("Error fetching sadhana progress from Supabase:", error);
                } else if (data) {
                    state.totalCount = data.total_count;
                    state.target = data.target;
                    state.writtenNames = data.written_names || [];
                    state.streak = data.streak;
                    state.lastWriteDate = data.last_write_date;
                    state.history = data.history || {};
                    state.currentTemplate = data.current_template;
                    state.inputMode = data.input_mode;
                    state.isBellSoundOn = data.is_bell_sound_on;
                    state.isAmbientOn = data.is_ambient_on;
                    if (user.user_metadata.language) {
                        state.currentScript = user.user_metadata.language;
                    }
                } else {
                    // Create default progress in database
                    const defaultProgress = {
                        user_id: user.id,
                        total_count: 0,
                        target: 10000,
                        written_names: [],
                        streak: 0,
                        last_write_date: null,
                        history: {},
                        current_template: "Sri Rama",
                        input_mode: "tap",
                        is_bell_sound_on: true,
                        is_ambient_on: false
                    };
                    const { error: insertError } = await supabaseClient
                        .from('sadhana_progress')
                        .insert([defaultProgress]);
                    if (insertError) {
                        console.error("Error creating initial sadhana progress:", insertError);
                    }
                }
                
                updateUserProfileUI();
                translatePage();
                syncUIElements();
                renderNotebookPage();
                renderHistoryLog();
            } else {
                state.profile = {
                    loggedIn: false,
                    name: "",
                    email: "",
                    avatar: "🌸 Lotus"
                };
                updateUserProfileUI();
                translatePage();
                syncUIElements();
            }
        });
    } else {
        loadProgress();
    }

    // 1. Inputs and Settings updates
    document.getElementById('name-template').addEventListener('change', (e) => {
        state.currentTemplate = e.target.value;
        spellingProgressIndex = 0; // reset typing progress
        clickSpellingIndex = 0; // reset click progress
        saveProgress();
        syncUIElements();
        renderNotebookPage();
    });

    const handleScriptChange = (val) => {
        state.currentScript = val;
        spellingProgressIndex = 0; // reset typing progress
        clickSpellingIndex = 0; // reset click progress
        saveProgress();
        syncUIElements();
        renderNotebookPage();
    };

    document.getElementById('script-lang').addEventListener('change', (e) => {
        handleScriptChange(e.target.value);
    });

    const loginLangEl = document.getElementById('login-lang');
    if (loginLangEl) {
        loginLangEl.addEventListener('change', (e) => {
            handleScriptChange(e.target.value);
        });
    }

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

    // Setup toggle listeners for Login/Signup
    const linkToSignup = document.getElementById('link-to-signup');
    const linkToLogin = document.getElementById('link-to-login');
    if (linkToSignup) {
        linkToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthCard('signup');
        });
    }
    if (linkToLogin) {
        linkToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthCard('login');
        });
    }

    // DevaNama Login and Signup Event Bindings
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }
    const googleMock = document.getElementById('btn-google-mock');
    if (googleMock) {
        googleMock.addEventListener('click', async () => {
            if (supabaseClient) {
                const { error } = await supabaseClient.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                        redirectTo: window.location.origin
                    }
                });
                if (error) {
                    showNotification("Google OAuth login error: " + error.message);
                }
            } else {
                // Mock login for offline demonstration
                state.profile = {
                    loggedIn: true,
                    name: "Devanand",
                    email: "devanand@gmail.com",
                    avatar: "ॐ Om"
                };
                saveProgress();
                updateUserProfileUI();
                const dict = TRANSLATIONS[state.currentScript] || TRANSLATIONS["english"];
                const welcomeMsg = dict["welcome-msg"].replace("{name}", escapeHTML(state.profile.name));
                showNotification(welcomeMsg);
            }
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
