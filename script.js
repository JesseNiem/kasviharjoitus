
const quizData = [
    { name: 'ahomansikka', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Ahomansikka_Fragaria_vesca.jpg' },
    { name: 'ahomatara', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Galium_boreale_L._(3692135143).jpg' },
    { name: 'aho-orvokki', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/-Viola_canina-_%2852130086154%29.jpg' },
    { name: 'ahosuolaheinä', image: 'https://placehold.co/400x300/FFF/000?text=ahosuolaheinä' },
    { name: 'ajuruoho', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thymus_serpyllum_-_Köhler–s_Medizinal-Pflanzen-137.jpg/800px-Thymus_serpyllum_-_Köhler–s_Medizinal-Pflanzen-137.jpg' },
    { name: 'haapa', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Aspen_Kiikeli_Oulu_20241005.jpg' },
    { name: 'harmaaleppä', image: 'https://placehold.co/400x300/FFF/000?text=harmaaleppä' },
    { name: 'heinätähtimö', image: 'https://placehold.co/400x300/FFF/000?text=heinätähtimö' },
    { name: 'hieskoivu', image: 'https://placehold.co/400x300/FFF/000?text=hieskoivu' },
    { name: 'hiirenporras', image: 'https://placehold.co/400x300/FFF/000?text=hiirenporras' },
    { name: 'hiirenvirna', image: 'https://placehold.co/400x300/FFF/000?text=hiirenvirna' },
    { name: 'hilla', image: 'https://placehold.co/400x300/FFF/000?text=hilla' },
    { name: 'huopaohdake', image: 'https://placehold.co/400x300/FFF/000?text=huopaohdake' },
    { name: 'isokarpalo', image: 'https://placehold.co/400x300/FFF/000?text=isokarpalo' },
    { name: 'pikkukarpalo', image: 'https://placehold.co/400x300/FFF/000?text=pikkukarpalo' },
    { name: 'isotalvikki', image: 'https://placehold.co/400x300/FFF/000?text=isotalvikki' },
    { name: 'jouhivihvilä', image: 'https://placehold.co/400x300/FFF/000?text=jouhivihvilä' },
    { name: 'juolukka', image: 'https://placehold.co/400x300/FFF/000?text=juolukka' },
    { name: 'järvikaisla', image: 'https://placehold.co/400x300/FFF/000?text=järvikaisla' },
    { name: 'järviruoko', image: 'https://placehold.co/400x300/FFF/000?text=järviruoko' },
    { name: 'kaarlenvaltikka', image: 'https://placehold.co/400x300/FFF/000?text=kaarlenvaltikka' },
    { name: 'kanerva', image: 'https://placehold.co/400x300/FFF/000?text=kanerva' },
    { name: 'kangasmaitikka', image: 'https://placehold.co/400x300/FFF/000?text=kangasmaitikka' },
    { name: 'karhunputki', image: 'https://placehold.co/400x300/FFF/000?text=karhunputki' },
    { name: 'karhunruoho', image: 'https://placehold.co/400x300/FFF/000?text=karhunruoho' },
    { name: 'kataja', image: 'https://placehold.co/400x300/FFF/000?text=kataja' },
    { name: 'keltano', image: 'https://placehold.co/400x300/FFF/000?text=keltano' },
    { name: 'kevätpiippo', image: 'https://placehold.co/400x300/FFF/000?text=kevätpiippo' },
    { name: 'kiiltopaju', image: 'https://placehold.co/400x300/FFF/000?text=kiiltopaju' },
    { name: 'kirkiruoho', image: 'https://placehold.co/400x300/FFF/000?text=kirkiruoho' },
    { name: 'kissankello', image: 'https://placehold.co/400x300/FFF/000?text=kissankello' },
    { name: 'kissankäpälä', image: 'https://placehold.co/400x300/FFF/000?text=kissankäpälä' },
    { name: 'koiranputki', image: 'https://placehold.co/400x300/FFF/000?text=koiranputki' },
    { name: 'korpiorvokki', image: 'https://placehold.co/400x300/FFF/000?text=korpiorvokki' },
    { name: 'kotipihlaja', image: 'https://placehold.co/400x300/FFF/000?text=kotipihlaja' },
    { name: 'kullero', image: 'https://placehold.co/400x300/FFF/000?text=kullero' },
    { name: 'kultapiisku', image: 'https://placehold.co/400x300/FFF/000?text=kultapiisku' },
    { name: 'kurjenjalka', image: 'https://placehold.co/400x300/FFF/000?text=kurjenjalka' },
    { name: 'kuusi', image: 'https://placehold.co/400x300/FFF/000?text=kuusi' },
    { name: 'käenkaali', image: 'https://placehold.co/400x300/FFF/000?text=käenkaali' },
    { name: 'lettovilla', image: 'https://placehold.co/400x300/FFF/000?text=lettovilla' },
    { name: 'lillukka', image: 'https://placehold.co/400x300/FFF/000?text=lillukka' },
    { name: 'luhtavilla', image: 'https://placehold.co/400x300/FFF/000?text=luhtavilla' },
    { name: 'lääte', image: 'https://placehold.co/400x300/FFF/000?text=lääte' },
    { name: 'maariankämmekkä', image: 'https://placehold.co/400x300/FFF/000?text=maariankämmekkä' },
    { name: 'maitohorsma', image: 'https://placehold.co/400x300/FFF/000?text=maitohorsma' },
    { name: 'mesiangervo', image: 'https://placehold.co/400x300/FFF/000?text=mesiangervo' },
    { name: 'mesimarja', image: 'https://placehold.co/400x300/FFF/000?text=mesimarja' },
    { name: 'metsäkurjenpolvi', image: 'https://placehold.co/400x300/FFF/000?text=metsäkurjenpolvi' },
    { name: 'metsälauha', image: 'https://placehold.co/400x300/FFF/000?text=metsälauha' },
    { name: 'metsämaitikka', image: 'https://placehold.co/400x300/FFF/000?text=metsämaitikka' },
    { name: 'metsäruusu', image: 'https://placehold.co/400x300/FFF/000?text=metsäruusu' },
    { name: 'metsätähti', image: 'https://placehold.co/400x300/FFF/000?text=metsätähti' },
    { name: 'mustikka', image: 'https://placehold.co/400x300/FFF/000?text=mustikka' },
    { name: 'mänty', image: 'https://placehold.co/400x300/FFF/000?text=mänty' },
    { name: 'neidonkenkä', image: 'https://placehold.co/400x300/FFF/000?text=neidonkenkä' },
    { name: 'niittyleinikki', image: 'https://placehold.co/400x300/FFF/000?text=niittyleinikki' },
    { name: 'niittysuolaheinä', image: 'https://placehold.co/400x300/FFF/000?text=niittysuolaheinä' },
    { name: 'nokkonen', image: 'https://placehold.co/400x300/FFF/000?text=nokkonen' },
    { name: 'nuokkuhelmikkä', image: 'https://placehold.co/400x300/FFF/000?text=nuokkuhelmikkä' },
    { name: 'nuokkutalvikki', image: 'https://placehold.co/400x300/FFF/000?text=nuokkutalvikki' },
    { name: 'nurmilauha', image: 'https://placehold.co/400x300/FFF/000?text=nurmilauha' },
    { name: 'näsiä', image: 'https://placehold.co/400x300/FFF/000?text=näsiä' },
    { name: 'ojakärsämö', image: 'https://placehold.co/400x300/FFF/000?text=ojakärsämö' },
    { name: 'ojakellukka', image: 'https://placehold.co/400x300/FFF/000?text=ojakellukka' },
    { name: 'oravanmarja', image: 'https://placehold.co/400x300/FFF/000?text=oravanmarja' },
    { name: 'peltosaunio', image: 'https://placehold.co/400x300/FFF/000?text=peltosaunio' },
    { name: 'pietaryrtti', image: 'https://placehold.co/400x300/FFF/000?text=pietaryrtti' },
    { name: 'piharatamo', image: 'https://placehold.co/400x300/FFF/000?text=piharatamo' },
    { name: 'pihasaunio', image: 'https://placehold.co/400x300/FFF/000?text=pihasaunio' },
    { name: 'pihatähtimö', image: 'https://placehold.co/400x300/FFF/000?text=pihatähtimö' },
    { name: 'pikkulaukku', image: 'https://placehold.co/400x300/FFF/000?text=pikkulaukku' },
    { name: 'pohjanlumme', image: 'https://placehold.co/400x300/FFF/000?text=pohjanlumme' },
    { name: 'pohjanpaju', image: 'https://placehold.co/400x300/FFF/000?text=pohjanpaju' },
    { name: 'pohjanpunaherukka', image: 'https://placehold.co/400x300/FFF/000?text=pohjanpunaherukka' },
    { name: 'poimulehti', image: 'https://placehold.co/400x300/FFF/000?text=poimulehti' },
    { name: 'pulskaneilikka', image: 'https://placehold.co/400x300/FFF/000?text=pulskaneilikka' },
    { name: 'pullosara', image: 'https://placehold.co/400x300/FFF/000?text=pullosara' },
    { name: 'puna-ailakki', image: 'https://placehold.co/400x300/FFF/000?text=puna-ailakki' },
    { name: 'puna-apila', image: 'https://placehold.co/400x300/FFF/000?text=puna-apila' },
    { name: 'punakonnanmarja', image: 'https://placehold.co/400x300/FFF/000?text=punakonnanmarja' },
    { name: 'puolukka', image: 'https://placehold.co/400x300/FFF/000?text=puolukka' },
    { name: 'pyöreälehtikihokki', image: 'https://placehold.co/400x300/FFF/000?text=pyöreälehtikihokki' },
    { name: 'päivänkakkara', image: 'https://placehold.co/400x300/FFF/000?text=päivänkakkara' },
    { name: 'raate', image: 'https://placehold.co/400x300/FFF/000?text=raate' },
    { name: 'raita', image: 'https://placehold.co/400x300/FFF/000?text=raita' },
    { name: 'rauduskoivu', image: 'https://placehold.co/400x300/FFF/000?text=rauduskoivu' },
    { name: 'rentukka', image: 'https://placehold.co/400x300/FFF/000?text=rentukka' },
    { name: 'riekonmarja', image: 'https://placehold.co/400x300/FFF/000?text=riekonmarja' },
    { name: 'ruohokanukka', image: 'https://placehold.co/400x300/FFF/000?text=ruohokanukka' },
    { name: 'rätvänä', image: 'https://placehold.co/400x300/FFF/000?text=rätvänä' },
    { name: 'rönsyleinikki', image: 'https://placehold.co/400x300/FFF/000?text=rönsyleinikki' },
    { name: 'siankärsämö', image: 'https://placehold.co/400x300/FFF/000?text=siankärsämö' },
    { name: 'sianpuolukka', image: 'https://placehold.co/400x300/FFF/000?text=sianpuolukka' },
    { name: 'silmäruoho', image: 'https://placehold.co/400x300/FFF/000?text=silmäruoho' },
    { name: 'sudenmarja', image: 'https://placehold.co/400x300/FFF/000?text=sudenmarja' },
    { name: 'suokukka', image: 'https://placehold.co/400x300/FFF/000?text=suokukka' },
    { name: 'suopursu', image: 'https://placehold.co/400x300/FFF/000?text=suopursu' },
    { name: 'syysmaitiainen', image: 'https://placehold.co/400x300/FFF/000?text=syysmaitiainen' },
    { name: 'tikankontti', image: 'https://placehold.co/400x300/FFF/000?text=tikankontti' },
    }

// Start the quiz when the page loads
window.onload = startQuiz;


let currentQuestionIndex = 0;
let score = 0;

const plantImage = document.getElementById('plant-image');
const optionsContainer = document.getElementById('options-container');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');
const finalScoreContainer = document.getElementById('final-score-container');
const finalScoreElement = document.getElementById('final-score');

function startQuiz() {
    // Shuffle the quiz data
    quizData.sort(() => Math.random() - 0.5);
    showQuestion();
}

function showQuestion() {
    resultElement.textContent = '';
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';

    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        plantImage.src = question.image;
        plantImage.alt = question.name;

        plantImage.onclick = () => {
            generateOptions();
            optionsContainer.style.display = 'block';
            plantImage.onclick = null; // Remove click event after showing options
        };
    } else {
        endQuiz();
    }
}

function generateOptions() {
    const question = quizData[currentQuestionIndex];
    const correctAnswer = question.name;

    const options = [correctAnswer];
    const distractors = quizData.filter(item => item.name !== correctAnswer);
    
    while (options.length < 3 && distractors.length > 0) {
        const randomIndex = Math.floor(Math.random() * distractors.length);
        options.push(distractors.splice(randomIndex, 1)[0].name);
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => selectAnswer(option === correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        resultElement.textContent = 'Oikein!';
        score++;
    } else {
        resultElement.textContent = 'Väärin.';
    }
    scoreElement.textContent = `Pisteet: ${score}`;

    // Disable buttons
    const buttons = optionsContainer.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 2000); // Wait 2 seconds before next question
}

function endQuiz() {
    quizContainer.style.display = 'none';
    finalScoreContainer.style.display = 'block';
    finalScoreElement.textContent = `Sait ${score} / ${quizData.length} pistettä.`;
}

// Start the quiz when the page loads
window.onload = startQuiz;
