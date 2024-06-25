import { tamagotchi, foods, games, enemies, dream, statusTamagotchiMessages } from "./constantes.js";


document.addEventListener('DOMContentLoaded', function () {

    // DOM 
    const btnsActions = document.querySelectorAll("button");

    btnsActions.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.innerText.toLowerCase();

            // aplicate button action
            updateStatsTamagotchi(action);
            // update live
            updateLive()
            // update bar 
            updateStatsBars()
            // update tamagotchi message
            updateStatusMessage()
        })
    })


    // FUNCTIONS
    function updateLive() {

        const livesContainer = document.getElementById("lives");
        const hearts = livesContainer.querySelectorAll('.nes-icon');

        let remainingLife = tamagotchi.life;

        hearts.forEach((heart, index) => {

            heart.classList.remove('is-transparent');

            if (remainingLife < index + 1) {
                heart.classList.add('is-transparent');
            }
            
        })
        
    }
    function updateStatsBars() {
        const eatBar = document.getElementById("eatBar");
        const playBar = document.getElementById("playBar");
        const fightBar = document.getElementById("fightBar");
        const sleepBar = document.getElementById("sleepBar");

        eatBar.value = tamagotchi.hungry;
        playBar.value = tamagotchi.happiness;
        fightBar.value = tamagotchi.fight;
        sleepBar.value = tamagotchi.sleep;
    }
    function updateStatsTamagotchi(action) {

        let effects = undefined;

        if (foods.hasOwnProperty(action)) {
            effects = foods[action];
        } else if (enemies.hasOwnProperty(action)) {
            effects = enemies[action];
        } else if (games.hasOwnProperty(action)) {
            effects = games[action];
        } else if (dream.hasOwnProperty(action)) {
            effects = dream[action];
        } else {
            console.log("Error no existe esa acción");
        }

        tamagotchi.life = Math.min(Math.max(tamagotchi.life + effects.life, 0), 5);
        tamagotchi.hungry = Math.min(Math.max(tamagotchi.hungry + effects.hungry, 0), 10);
        tamagotchi.happiness = Math.min(Math.max(tamagotchi.happiness + effects.happiness, 0), 10);
        tamagotchi.fight = Math.min(Math.max(tamagotchi.fight + effects.fight, 0), 10);
        tamagotchi.sleep = Math.min(Math.max(tamagotchi.sleep + effects.sleep, 0), 10);

        console.log('Nuevas estadísticas:', tamagotchi);

    }
    function updateStatusMessage() {

        const statusTamagotchiContainer = document.getElementById("statusTamagotchi");

        // IS PERFECT?
        const isPerfectStatus = Object.values(tamagotchi).every(value => value >= 9);

        if (isPerfectStatus) {
            statusTamagotchiContainer.innerText = statusTamagotchiMessages.perfect;
        } else {
            // WHAT TAMAGOTCHI NEED
            const worstStat = Object.entries(tamagotchi).reduce((minEntry, currentEntry) => {
                return currentEntry[1] < minEntry[1] ? currentEntry : minEntry;
            })[0];

            // UPDATE MESSAGE
            statusTamagotchiContainer.innerText = statusTamagotchiMessages[worstStat];
        }

    }

});



