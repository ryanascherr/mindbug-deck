const supabaseURL = 'https://nvjgjpbkcoiifhnybhap.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52amdqcGJrY29paWZobnliaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTMxMTUsImV4cCI6MjA1NTU4OTExNX0.9muL9PqLj6rbVCS_7gblPp1wvVyAlNo4pikVqVXclMo';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('creatures').select(`
    id, name, power, ability, amount, boost, evolution, secondEvolution, thirdEvolution,
    set (
        name
    ),
    keywords (
        name
    ),
    triggers (
        name
    )
`)
.order('id', { ascending: true });
const creatures = data;

let url;
let listOfCardNumbers;
let listOfCardLetters = [];
let exportString = "";
let numberOfFirstContact = 0;
let numberOfNewServants = 0;
let numberOfEvolution = 0;
let numberOfEternity = 0;
let numberOfKingdom = 0;
let numberOfGalaxy = 0;
let numberOfTagTeam = 0;
let numberOfPromo = 0;
let numberOfFrenzy = 0;
let numberOfHunter = 0;
let numberOfPoisonous = 0;
let numberOfSneaky = 0;
let numberOfTough = 0;
let numberOfFast = 0;
let numberOfNoKeywords = 0;
let numberOfCards = 0;
let numberOfPlay = 0;
let numberOfAttack = 0;
let numberOfDefeated = 0;
let numberOfAction = 0;
let numberOfDiscard = 0;
let numberOfHarvest = 0;
let numberOfNoTriggers = 0;

let numberOfOnes = 0;
let numberOfTwos = 0;
let numberOfThrees = 0;
let numberOfFours = 0;
let numberOfFives = 0;
let numberOfSixes = 0;
let numberOfSevens = 0;
let numberOfEights = 0;
let numberOfNines = 0;
let numberOfTens = 0;

function getURL() {
    url = window.location.href;

    if (!url.includes("?")) return;
    url = url.split("?");
    url = url[1];
    listOfCardNumbers = url.split("-");
    $(listOfCardNumbers).each(function( index ) {
        let letter = this[this.length-1];
        listOfCardLetters.push(letter);
    })
}

function placeCards() {
    let indexOfArray = 0;
    $(listOfCardNumbers).each(function( index ) {
        let currentCardNumber = parseInt(this);
        $(creatures).each(function( index ) {
            if (currentCardNumber == index) {

                let name = this.name;
                name = name.replace(/ /g,"_");

                let howManyOfThisCard = listOfCardLetters[indexOfArray];
                howManyOfThisCard = howManyOfThisCard.charCodeAt(0) - 96;
                numberOfCards = numberOfCards + howManyOfThisCard;

                if (this.id) {
                    addToExportString(this.id, howManyOfThisCard);
                }

                getStats(currentCardNumber, howManyOfThisCard);
                $(".deck-holder").append(`
                    <div class="img-holder">
                        <img class="card" src="./img/${name}.jpg">
                        <div class="card-number">${howManyOfThisCard}</div>
                    </div>`
                );
            };
        });
        indexOfArray++; 
    });
}

function addToExportString(id, number) {
    for (let i = 0; i < number; i++) {
        exportString += id + ",";
    }
}

function finalizeExportString() {
    if (exportString.charAt(exportString.length - 1) == ",") {
        exportString = exportString.slice(0, -1);
    }
}

function getStats(currentCardNumber, howManyOfThisCard) {
    let creature = creatures[currentCardNumber];

    if (creature.set.name == "First Contact") {
        numberOfFirstContact += howManyOfThisCard;
    }
    if (creature.set.name == "New Servants") {
        numberOfNewServants += howManyOfThisCard;
    }
    if (creature.set.name == "Beyond Evolution") {
        numberOfEvolution += howManyOfThisCard;
    }
    if (creature.set.name == "Beyond Eternity") {
        numberOfEternity += howManyOfThisCard;
    }
    if (creature.set.name == "Battlefruit Kingdom") {
        numberOfKingdom += howManyOfThisCard;
    }
    if (creature.set.name == "Battlefruit Galaxy") {
        numberOfGalaxy += howManyOfThisCard;
    }
    if (creature.set.name == "Tag Team") {
        numberOfTagTeam += howManyOfThisCard;
    }
    if (creature.set.name == "Promo 2022" || creature.set.name == "Promo 2023" || creature.set.name == "Battlefruit Add-On" || creature.set.name == "Promo 2024") {
        numberOfPromo += howManyOfThisCard;
    }

    let keyWordFound = false;

    function getCurrentKeyword(creature, keyword) {
        let isKeywordHere = false;
            let numberOfKeywords = creature.keywords.length;
            if (numberOfKeywords == 0) return;

            for (let i = 0; i < numberOfKeywords; i++) {
                let currentKeyword = creature.keywords[i];
                currentKeyword = currentKeyword.name;
                if (currentKeyword == keyword) {
                    isKeywordHere = true;
                };
            }

            if (isKeywordHere == true) return true;
    }

    if (getCurrentKeyword(creature, "Frenzy")) {
        numberOfFrenzy += howManyOfThisCard;
        keyWordFound = true;
    }
    if (getCurrentKeyword(creature, "Hunter")) {
        numberOfHunter += howManyOfThisCard;
        keyWordFound = true;
    }
    if (getCurrentKeyword(creature, "Poisonous")) {
        numberOfPoisonous += howManyOfThisCard;
        keyWordFound = true;
    }
    if (getCurrentKeyword(creature, "Sneaky")) {
        numberOfSneaky += howManyOfThisCard;
        keyWordFound = true;
    }
    if (getCurrentKeyword(creature, "Tough")) {
        numberOfTough += howManyOfThisCard;
        keyWordFound = true;
    }
    if (getCurrentKeyword(creature, "Fast")) {
        numberOfFast += howManyOfThisCard;
        keyWordFound = true;
    }

    if (!keyWordFound) {
        numberOfNoKeywords += howManyOfThisCard;
    }

    let triggerFound = false;

    function getCurrentTrigger(creature, trigger) {
        let isTriggerHere = false;
            let numberOfTriggers = creature.triggers.length;
            if (numberOfTriggers == 0) return;

            for (let i = 0; i < numberOfTriggers; i++) {
                let currentTrigger = creature.triggers[i];
                currentTrigger = currentTrigger.name;
                if (currentTrigger == trigger) {
                    isTriggerHere = true;
                };
            }

            if (isTriggerHere == true) return true;
    }

    if (getCurrentTrigger(creature, "Play")) {
        numberOfPlay += howManyOfThisCard;
        triggerFound = true;
    }
    if (getCurrentTrigger(creature, "Attack")) {
        numberOfAttack += howManyOfThisCard;
        triggerFound = true;
    }
    if (getCurrentTrigger(creature, "Defeated")) {
        numberOfDefeated += howManyOfThisCard;
        triggerFound = true;
    }
    if (getCurrentTrigger(creature, "Action")) {
        numberOfAction += howManyOfThisCard;
        triggerFound = true;
    }
    if (getCurrentTrigger(creature, "Discard")) {
        numberOfDiscard += howManyOfThisCard;
        triggerFound = true;
    }
    if (getCurrentTrigger(creature, "Harvest")) {
        numberOfHarvest += howManyOfThisCard;
        triggerFound = true;
    }

    if (!triggerFound) {
        numberOfNoTriggers += howManyOfThisCard;
    }

    if (creature.power == 1) {
        numberOfOnes += howManyOfThisCard;
    }
    if (creature.power == 2) {
        numberOfTwos += howManyOfThisCard;
    }
    if (creature.power == 3) {
        numberOfThrees += howManyOfThisCard;
    }
    if (creature.power == 4) {
        numberOfFours += howManyOfThisCard;
    }
    if (creature.power == 5) {
        numberOfFives += howManyOfThisCard;
    }
    if (creature.power == 6) {
        numberOfSixes += howManyOfThisCard;
    }
    if (creature.power == 7) {
        numberOfSevens += howManyOfThisCard;
    }
    if (creature.power == 8) {
        numberOfEights += howManyOfThisCard;
    }
    if (creature.power == 9) {
        numberOfNines += howManyOfThisCard;
    }
    if (creature.power == 10) {
        numberOfTens += howManyOfThisCard;
    }
}

function displayStats() {

    $(".total-cards").text("Number of cards: " + numberOfCards);

    $(".total-number").text(numberOfCards);

    let frenzyPercent = ((numberOfFrenzy/numberOfCards)*100).toFixed(0);
    let hunterPercent = ((numberOfHunter/numberOfCards)*100).toFixed(0);
    let poisonousPercent = ((numberOfPoisonous/numberOfCards)*100).toFixed(0);
    let sneakyPercent = ((numberOfSneaky/numberOfCards)*100).toFixed(0);
    let toughPercent = ((numberOfTough/numberOfCards)*100).toFixed(0);
    let fastPercent = ((numberOfFast/numberOfCards)*100).toFixed(0);
    $('.frenzy-num').text("Frenzy: " + numberOfFrenzy + ` (${frenzyPercent}%)`);
    $('.hunter-num').text("Hunter: " + numberOfHunter + ` (${hunterPercent}%)`);
    $('.poisonous-num').text("Poisonous: " + numberOfPoisonous + ` (${poisonousPercent}%)`);
    $('.sneaky-num').text("Sneaky: " + numberOfSneaky + ` (${sneakyPercent}%)`);
    $('.tough-num').text("Tough: " + numberOfTough + ` (${toughPercent}%)`);
    $('.fast-num').text("Fast: " + numberOfFast + ` (${fastPercent}%)`);
    
    let percentOfNoKeywords = ((numberOfNoKeywords/numberOfCards)*100).toFixed(0);
    $('.keyword-none').text(`None: ${numberOfNoKeywords} (${percentOfNoKeywords}%)`);

    let firstContactPercent = ((numberOfFirstContact/numberOfCards)*100).toFixed(0);
    let newServantsPercent = ((numberOfNewServants/numberOfCards)*100).toFixed(0);
    let evolutionPercent = ((numberOfEvolution/numberOfCards)*100).toFixed(0);
    let eternityPercent = ((numberOfEternity/numberOfCards)*100).toFixed(0);
    let kingdomPercent = ((numberOfKingdom/numberOfCards)*100).toFixed(0);
    let galaxyPercent = ((numberOfGalaxy/numberOfCards)*100).toFixed(0);
    let tagTeamPercent = ((numberOfTagTeam/numberOfCards)*100).toFixed(0);
    let promoPercent = ((numberOfPromo/numberOfCards)*100).toFixed(0);
    $('.fc-num').text("First Contact: " + numberOfFirstContact + ` (${firstContactPercent}%)`);
    $('.ns-num').text("New Servants: " + numberOfNewServants + ` (${newServantsPercent}%)`);
    $('.ev-num').text("Beyond Evolution: " + numberOfEvolution + ` (${evolutionPercent}%)`);
    $('.et-num').text("Beyond Eternity: " + numberOfEternity + ` (${eternityPercent}%)`);
    $('.bk-num').text("Battlefruit Kingdom: " + numberOfKingdom + ` (${kingdomPercent}%)`);
    $('.bg-num').text("Battlefruit Galaxy: " + numberOfGalaxy + ` (${galaxyPercent}%)`);
    $('.tt-num').text("Tag Team: " + numberOfTagTeam + ` (${tagTeamPercent}%)`);
    $('.promo-num').text("Promo/Add-On: " + numberOfPromo + ` (${promoPercent}%)`);

    let playPercent = ((numberOfPlay/numberOfCards)*100).toFixed(0);
    let attackPercent = ((numberOfAttack/numberOfCards)*100).toFixed(0);
    let defeatedPercent = ((numberOfDefeated/numberOfCards)*100).toFixed(0);
    let actionPercent = ((numberOfAction/numberOfCards)*100).toFixed(0);
    let discardPercent = ((numberOfDiscard/numberOfCards)*100).toFixed(0);
    let harvestPercent = ((numberOfHarvest/numberOfCards)*100).toFixed(0);
    $('.play-num').text("Play: " + numberOfPlay + ` (${playPercent}%)`);
    $('.attack-num').text("Attack: " + numberOfAttack + ` (${attackPercent}%)`);
    $('.defeated-num').text("Defeated: " + numberOfDefeated + ` (${defeatedPercent}%)`);
    $('.action-num').text("Action: " + numberOfAction + ` (${actionPercent}%)`);
    $('.discard-num').text("In Discard Pile: " + numberOfDiscard + ` (${discardPercent}%)`);
    $('.harvest-num').text("Harvest: " + numberOfHarvest + ` (${harvestPercent}%)`);
    
    let percentOfNoTriggers = ((numberOfNoTriggers/numberOfCards)*100).toFixed(0);
    $('.trigger-none').text(`None: ${numberOfNoTriggers} (${percentOfNoTriggers}%)`);

    makeGraph();
}

function makeGraph() {
    var xValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var yValues = [numberOfOnes, numberOfTwos, numberOfThrees, numberOfFours, numberOfFives, numberOfSixes, numberOfSevens, numberOfEights, numberOfNines, numberOfTens];
    var barColors = ["#411928", "#411928","#411928","#411928","#411928", "#411928", "#411928", "#411928", "#411928", "#411928"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: "Number of Creatures",
                }  
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Power",
                }  
            }]
        }
      },
    });
}

$(".js_save-btn").click(function() {
    navigator.clipboard.writeText(exportString);
})

initialize();
function initialize() {
    getURL();
    placeCards();
    displayStats();
    finalizeExportString();
}