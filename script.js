const allPlants = [
    "ahomansikka","ahomatara","aho-orvokki","ahosuolaheinä","ajuruoho","haapa","harmaaleppä","heinätähtimö","hieskoivu",
    "hiirenporras","hiirenvirna","hilla","huopaohdake","isokarpalo","pikkukarpalo","isotalvikki","jouhivihvilä",
    "juolukka","järvikaisla","järviruoko","kaarlenvaltikka","kanerva","kangasmaitikka","karhunputki","karhunruoho","kataja",
    "keltano","kevätpiippo","kiiltopaju","kirkiruoho","kissankello","kissankäpälä","koiranputki","korpiorvokki","kotipihlaja",
    "kullero","kultapiisku","kurjenjalka","kuusi","käenkaali","lettovilla","lillukka","luhtavilla","lääte",
    "maariankämmekkä","maitohorsma","mesiangervo","mesimarja","metsäkurjenpolvi","metsälauha","metsämaitikka","metsäruusu",
    "metsätähti","mustikka","mänty","neidonkenkä","niittyleinikki","niittysuolaheinä","nokkonen","nuokkuhelmikkä","nuokkutalvikki",
    "nurmilauha","näsiä","ojakärsämö","ojakellukka","oravanmarja","peltosaunio","pietaryrtti","piharatamo",
    "pihasaunio","pihatähtimö","pikkulaukku","pohjanlumme","pohjanpaju","pohjanpunaherukka","poimulehti","pulskaneilikka",
    "pullosara","puna-ailakki","puna-apila","punakonnanmarja","puolukka","pyöreälehtikihokki","päivänkakkara","raate","raita",
    "rauduskoivu","rentukka","riekonmarja","ruohokanukka","rätvänä","rönsyleinikki","siankärsämö","sianpuolukka","silmäruoho",
    "sudenmarja","suokukka","suopursu","syysmaitiainen","tikankontti","timotei","tuomi","tupasluikka","tupasvilla","tähtitalvikki",
    "ulpukka","vadelma","vaivaiskoivu","valkoapila","vanamo","variksenmarja","villapääluikka","vilukko","voikukka","valkoyökönlehti",
    "siniyökönlehti", "kallioimarre", "korpi-imarre", "kotkansiipi", "metsäimarre", "järvikorte", "metsäkorte", "metsäalvejuuri", "mähkä", "riidenlieko"
];

const customImages = {
    "voikukka": "https://i.media.fi/incoming/bawa09/1169230-e1562065496860.jpg/alternates/FREE_1440/1169230-e1562065496860.jpg",
    "isokarpalo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/VacciniumOxycoccos.jpg/1280px-VacciniumOxycoccos.jpg",
    "ajuruoho": "https://www.vihervimma.fi/tuotekuvat/1200x1200/harmaa-ajoruoho_albiflorus.jpg",
    "pikkukarpalo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/20121015-FS-UNK-0009_%288090982330%29.jpg/1225px-20121015-FS-UNK-0009_%288090982330%29.jpg",
    "raita": "https://peda.net/oppimateriaalit/e-oppi/verkkokauppa/yl%C3%A4koulu/lukuvuosi-2021-2022/ebiologia-8-2021/e8n7/5-metsien-kasvit/kasvit/kuvamappi/puulajikuvia/raita:file/download/0e2d2e3bd0f0f662f26e45293afe6d0b9f434777/Raidan%20lehdet.jpg",
    "poimulehti": "https://hortapuisto.fi/wp-content/uploads/2021/05/kukkiva-poimulehti-768x1024.jpg",
    "kataja": "https://www.arktisetaromit.fi/binary/file/-/fid/208/",
    "hiirenporras": "https://sakari.kuvat.fi/kasvio2/hiirenporras2.jpg",
    "silmäruoho": "https://pbs.twimg.com/media/EAQYq1qX4AAYyON.jpg",
    "kanerva": "https://akaanseutu.fi/wp-content/uploads/2019/08/33Villiyrtti-Kanerva-1024x682.jpg",
    "karhunruoho": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEissQuGkNOmLsOlgHM-rzTitVCB34aJ448EU_lt_p-UXK6G7KjYk2mzgOYWc3gpMT52u3tb4UhewZl52oovW_SIbiidQxjyHYN5sxKTiYa3H65WpNrQVOg6Ur_PFn0Lxw7O9tPoqbAxTMZ7/s600/DSC_9532.jpeg",
    "haapa": "https://www.kotipuutarha.fi/wp-content/uploads/2022/12/kk-kasvi-haapa-1050NO.jpg",
    "kirkiruoho": "https://pohjolankasvienpauloissa.com/wp-content/uploads/2019/08/2gymnadenia-conopsea-ssp.-conopsea-ahokirkiruoho-9.7.2017-a-eckerc3b6.jpg?w=625",
    "mähkä": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Selaginella_selaginoides_-_Niitv%C3%A4lja_bog.jpg/1365px-Selaginella_selaginoides_-_Niitv%C3%A4lja_bog.jpg"
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function fetchWikimediaImage(name) {
    const searchTerm = name.split(',')[0];
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&pithumbsize=500&titles=${encodeURIComponent(searchTerm)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const pages = data.query.pages;
        const firstPage = Object.values(pages)[0];
        return firstPage?.thumbnail?.source || null;
    } catch {
        return null;
    }
}

async function fetchiNaturalistImage(name) {
    const searchTerm = name.split(',')[0];
    const url = `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(searchTerm)}&rank=species`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results[0]?.default_photo?.medium_url || null;
    } catch {
        return null;
    }
}

async function fetchGBIFImage(name) {
    const searchTerm = name.split(',')[0];
    const url = `https://api.gbif.org/v1/species/match?name=${encodeURIComponent(searchTerm)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.usageKey) {
            const mediaUrl = `https://api.gbif.org/v1/species/${data.usageKey}/media`;
            const mediaResponse = await fetch(mediaUrl);
            const mediaData = await mediaResponse.json();
            return mediaData.results[0]?.identifier || null;
        }
    } catch {
        return null;
    }
    return null;
}

async function findPlantImage(name) {
    const simplified = name.toLowerCase();
    if (customImages[simplified]) {
        return customImages[simplified];
    }
    let imageUrl = await fetchWikimediaImage(name);
    if (imageUrl) return imageUrl;
    imageUrl = await fetchiNaturalistImage(name);
    if (imageUrl) return imageUrl;
    imageUrl = await fetchGBIFImage(name);
    if (imageUrl) return imageUrl;
    return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
}

let shuffledPlants = [];
let currentPlant;
let correctCount = 0;
let totalPoints = 0;
let questionIndex = 0;
let currentOptions = [];

async function loadQuiz() {
    if (questionIndex >= shuffledPlants.length) {
        const message = `Sait ${correctCount}/${shuffledPlants.length} oikein ja yhteensä ${totalPoints.toFixed(1)} pistettä!`;
        document.getElementById('quiz-container').innerHTML = `<h2>${message}</h2>`; // Changed from 'quiz' to 'quiz-container'
        return;
    }
    currentPlant = shuffledPlants[questionIndex];
    const imageUrl = await findPlantImage(currentPlant);
    document.getElementById('plant-image').src = imageUrl;
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = `Kysymys ${questionIndex + 1}/${shuffledPlants.length} — Oikein: ${correctCount} — Pisteet: ${totalPoints.toFixed(1)}`;
    document.getElementById('options-container').style.display = 'none'; // Changed from 'options' to 'options-container'
    document.getElementById('answerInput').value = ''; // Added answerInput
}

function showOptions() {
    const options = [currentPlant];
    while (options.length < 3) {
        const randomPlant = allPlants[Math.floor(Math.random() * allPlants.length)];
        if (!options.includes(randomPlant)) {
            options.push(randomPlant);
        }
    }
    currentOptions = shuffle(options);

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous buttons

    currentOptions.forEach((optionText, index) => {
        const card = document.createElement('div');
        card.textContent = optionText;
        card.classList.add('option-card');
        card.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(card);
    });

    optionsContainer.style.display = 'flex';
}

function checkAnswer(index) {
    if (currentOptions[index] === currentPlant) {
        document.getElementById('result').textContent = 'Oikein!';
        correctCount++;
        totalPoints += 0.5;
    } else {
        document.getElementById('result').textContent = `Väärin! Oikea vastaus oli: ${currentPlant}`;
    }
    questionIndex++;
    setTimeout(loadQuiz, 1500);
}

document.getElementById('answerInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const userInput = this.value.trim().toLowerCase();
        if (userInput === currentPlant.toLowerCase()) {
            document.getElementById('result').textContent = 'OIKEIN!';
            correctCount++;
            totalPoints += 1;
        } else {
            document.getElementById('result').textContent = `Väärin! Oikea vastaus oli: ${currentPlant}`;
        }
        questionIndex++;
        setTimeout(loadQuiz, 1500);
    }
});

window.onload = () => {
    shuffledPlants = shuffle([...allPlants]);
    loadQuiz();
};

// Näytä Kasvi section logic
const showPlantInput = document.getElementById('showPlantInput');
const suggestionsContainer = document.getElementById('suggestions-container');
const showPlantImage = document.getElementById('showPlantImage');

let currentSuggestions = [];

showPlantInput.addEventListener('input', () => {
    const query = showPlantInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    currentSuggestions = [];

    if (query.length > 0) {
        const filteredPlants = allPlants.filter(plant => 
            plant.toLowerCase().includes(query)
        ).slice(0, 10); // Limit to 10 suggestions

        filteredPlants.forEach(plant => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = plant;
            suggestionItem.addEventListener('click', () => {
                showPlantInput.value = plant;
                suggestionsContainer.innerHTML = '';
                displaySelectedPlantImage(plant);
            });
            suggestionsContainer.appendChild(suggestionItem);
            currentSuggestions.push(plant);
        });
    }
});

showPlantInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const selectedPlant = showPlantInput.value.trim();
        if (allPlants.includes(selectedPlant)) {
            displaySelectedPlantImage(selectedPlant);
            suggestionsContainer.innerHTML = ''; // Clear suggestions
        } else if (currentSuggestions.length > 0) {
            // If no exact match but suggestions exist, pick the first one
            showPlantInput.value = currentSuggestions[0];
            displaySelectedPlantImage(currentSuggestions[0]);
            suggestionsContainer.innerHTML = '';
        }
    }
});

async function displaySelectedPlantImage(plantName) {
    const imageUrl = await findPlantImage(plantName);
    showPlantImage.src = imageUrl;
    showPlantImage.alt = plantName;
    showPlantImage.style.display = 'block';
}