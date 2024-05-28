const elements = Array.from(document.getElementsByClassName("plans_model"));
elements.forEach(element => {
    element.addEventListener('click', () => {
        alert("You are not signed in yet please sign in");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const userMail = document.getElementById("mail").value;
    document.getElementById("get_started").addEventListener('click', () => {
        alert(`this email is not registered yet`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('select_language');

    const translations = {
        en: {
            top_heading: "Unlimited movies, TV shows and more",
            content1: "Watch anywhere. Cancel anytime.",
            content2: "Ready to watch? Enter your email to create or restart your membership.",
            plans_heading: "A plan to suit your needs",
            premium: "PREMIUM",
            premium_content: "A cinematic experience with the best picture and audio quality. <br /><br /><b>₹649/month</b>",
            standard: "STANDARD",
            standard_content: "All the entertainment you love, in Full HD video quality. <br /><br /><b>₹499/month</b>",
            basic: "BASIC",
            basic_content: "A great way to enjoy all your favourite shows and movies on a budget. <br /><br /><b>₹199/month</b>",
            mobile: "MOBILE",
            mobile_content: "A travel-friendly option for your mobile devices. <br /><br /><b>₹149/month</b>",
            reasons_heading: "More reasons to join",
            reason1: "Stories tailored to your taste",
            reason2: "Cancel or switch plans anytime",
            reason3: "A place just for kids",
            reason4: "For your phone, tablet, laptop and TV",
            faqH: "Frequently Asked Questions",
            Q1: "What is NetFlix?",
            Q2: "How much does Netflix cost?",
            Q3: "How do I cancel?",
            Q4: "Where can I watch?",
            sp1: "Enjoy on your TV",
            sp2: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        },
        hi: {
            top_heading: "अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ",
            content1: "कहीं भी देखें। कभी भी रद्द करें।",
            content2: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः प्रारंभ करने के लिए अपना ईमेल दर्ज करें।",
            plans_heading: "आपकी ज़रूरतों को पूरा करने के लिए एक योजना",
            premium: "प्रीमियम",
            premium_content: "सर्वश्रेष्ठ चित्र और ऑडियो गुणवत्ता के साथ एक सिनेमाई अनुभव। <br /><br /><b>₹649/महीना</b>",
            standard: "स्टैंडर्ड",
            standard_content: "पूर्ण HD वीडियो गुणवत्ता में आपका सारा मनोरंजन। <br /><br /><b>₹499/महीना</b>",
            basic: "बेसिक",
            basic_content: "बजट पर अपने सभी पसंदीदा शो और फिल्में देखने का एक शानदार तरीका। <br /><br /><b>₹199/महीना</b>",
            mobile: "मोबाइल",
            mobile_content: "आपके मोबाइल उपकरणों के लिए एक यात्रा-अनुकूल विकल्प। <br /><br /><b>₹149/महीना</b>",
            reasons_heading: "शामिल होने के अधिक कारण",
            reason1: "आपकी पसंद के अनुसार कहानियाँ",
            reason2: "किसी भी समय योजना रद्द करें या बदलें",
            reason3: "बच्चों के लिए एक जगह",
            reason4: "आपके फ़ोन, टैबलेट, लैपटॉप और टीवी के लिए",
            faqH: "अक्सर पूछे जाने वाले प्रश्न",
            Q1: "Netflix क्या है?",
            Q2: "Netflix की कीमत कितनी है?",
            Q3: "मैं कैसे कैंसल करूं?",
            Q4: "मैं कहां देख सकता हूं?",
            sp1: "अपने टीवी पर आनंद लें। ",
            sp2: " स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर और अधिक पर देखें।"
        }
    };

    function updateContent(language) {
        document.getElementById('top_heading').innerHTML = translations[language].top_heading;
        document.getElementById('content1').innerHTML = translations[language].content1;
        document.getElementById('content2').innerHTML = translations[language].content2;
        document.getElementById('plans_heading').innerHTML = translations[language].plans_heading;
        document.getElementById('faqH').innerHTML = translations[language].faqH;
        document.getElementById('Q1').innerHTML = translations[language].Q1;
        document.getElementById('Q2').innerHTML = translations[language].Q2;
        document.getElementById('Q3').innerHTML = translations[language].Q3;
        document.getElementById('Q4').innerHTML = translations[language].Q4;
        document.getElementById('sp1').innerHTML = translations[language].sp1;
        document.getElementById('sp2').innerHTML = translations[language].sp2;

        const plans = document.querySelectorAll('.plans_model');
        plans[0].querySelector('.plans_model_heading').innerHTML = translations[language].premium;
        plans[0].querySelector('.plans_content').innerHTML = translations[language].premium_content;
        plans[1].querySelector('.plans_model_heading').innerHTML = translations[language].standard;
        plans[1].querySelector('.plans_content').innerHTML = translations[language].standard_content;
        plans[2].querySelector('.plans_model_heading').innerHTML = translations[language].basic;
        plans[2].querySelector('.plans_content').innerHTML = translations[language].basic_content;
        plans[3].querySelector('.plans_model_heading').innerHTML = translations[language].mobile;
        plans[3].querySelector('.plans_content').innerHTML = translations[language].mobile_content;

        document.getElementById('reasons_heading').innerHTML = translations[language].reasons_heading;

        const reasons = document.querySelectorAll('.reason_heading');
        reasons[0].innerHTML = translations[language].reason1;
        reasons[1].innerHTML = translations[language].reason2;
        reasons[2].innerHTML = translations[language].reason3;
        reasons[3].innerHTML = translations[language].reason4;
    }

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateContent(selectedLanguage);
    });

    // Initialize content with the default language
    updateContent('en');
});

const signInButton = document.getElementById('sign_in');
const overlay = document.getElementById('overlay');
const signinForm = document.getElementById('signinForm');
const submitSigninButton = document.getElementById('submitSignin');
signInButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    signinForm.style.display = 'block';
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    signinForm.style.display = 'none';
});