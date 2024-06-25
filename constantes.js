// STATUS TAMAGOTCHI
export const tamagotchi = {
    life : 5,
    hungry: 10,
    happiness: 10,
    fight: 10,
    sleep: 10
}

// STATUS MESSAGES
export const statusTamagotchiMessages = {
    perfect : "Estoy perfecto chacho",
    life : "Tengo poca vida, aaaafgsf",
    hungry: "Tengo hambre mama",
    happiness: "Estoy troste",
    fight: "Tengo ganas de partir cabezas",
    sleep: "Me duermo zzzzz"
}

// EAT
export const foods = {
    pizza : {
        life: -2,
        hungry : 5,
        happiness: 4,
        fight: 0,
        sleep: -3,
    },
    chicken : {
        life: 0,
        hungry : 3,
        happiness: 2,
        fight: -2,
        sleep: -2,
    },
    salad : {
        life: 2,
        hungry: 1,
        happiness: 0,
        fight: -5,
        sleep: 1,
    },
}

// PLAY
export const games = {
    football : {
        life : -2,
        hungry: -4,
        happiness: 6,
        fight: -1,
        sleep: -4
    },
    cards: {
        life: 0,
        hungry: -1,
        happiness: 2,
        fight: 0,
        sleep: -2
    },
    computer: {
        life: -1,
        hungry: -3,
        happiness: 5,
        fight: -2,
        sleep: -3
    }
}

// FIGHT
export const enemies = {
    energuia: { // EASY
        life: -1,
        hungry: -4,
        happiness: -2,
        fight: 3,
        sleep: -1
    },
    churumbel: { // MEDIUM
        life: -3,
        hungry: -6,
        happiness: -4,
        fight: 6,
        sleep: -3
    },
    loboestepario: { // HARD
        life: -4,
        hungry: -8,
        happiness: -6,
        fight: 10,
        sleep: -5
    }
}

// SLEEP 
export const dream = {
    snap: {
        life: 2,
        hungry: -2,
        happiness: 2,
        fight: 0,
        sleep: 2
    },
    sleep: {
        life: 4,
        hungry: -2,
        happiness: 4,
        fight: -2,
        sleep: 6
    }
}
