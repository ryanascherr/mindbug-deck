const creatures = [
    {
        name: "Axolotl Healer",
        power: 4,
        ability: "Poisonous - Play: Gain 2 life points",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC3"
    },
    {
        name: "Bee Bear",
        power: 8,
        ability: "Cannot be blocked by creatures with power 6 or less",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC8"
    },
    {
        name: "Brain Fly",
        power: 4,
        ability: "Play: Take control of a creature with power 6 or more",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC11"
    },
    {
        name: "Chameleon Sniper",
        power: 1,
        ability: "Sneaky - Attack: The opponent loses a life point",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact",
        id: "FC15"
    },
    {
        name: "Compost Dragon",
        power: 3,
        ability: "Hunter - Play: Play a card from your discard pile",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC14"
    },
    {
        name: "Deathweaver",
        power: 2,
        ability: "Poisonous - The opponent cannot activate play effects",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC32"
    },
    {
        name: "Elephantopus",
        power: 7,
        ability: "Tough - The opponent cannot block with creatures with power 4 or less",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC5"
    },
    {
        name: "Explosive Toad",
        power: 5,
        ability: "Frenzy - Defeated: Defeat a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact",
        id: "FC26"
    },
    {
        name: "Ferret Bomber",
        power: 2,
        ability: "Sneaky - Play: The opponent discards 2 cards",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC23"
    },
    {
        name: "Giraffodile",
        power: 7,
        ability: "Play: Draw your entire discard pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC41"
    },
    {
        name: "Goblin Werewolf",
        power: 2,
        ability: "Hunter - Has +6 power while it is your turn",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC43"
    },
    {
        name: "Gorillion",
        power: 10,
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC1"
    },
    {
        name: "Grave Robber",
        power: 7,
        ability: "Tough - Play: Play a card from the opponent's discard pile",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC18"
    },
    {
        name: "Harpy Mother",
        power: 5,
        ability: "Defeated: Take control of up to 2 creatures with power 5 or less",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact",
        id: "FC2"
    },
    {
        name: "Kangasaurus Rex",
        power: 7,
        ability: "Play: Defeat all enemy creatures with power 4 or less",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC7"
    },
    {
        name: "Killer Bee",
        power: 5,
        ability: "Hunter - Play: The opponent loses a life point",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC13"
    },
    {
        name: "Lone Yeti",
        power: 5,
        ability: "Tough - While this is your only allied creature, it has +5 power and frenzy",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC6"
    },
    {
        name: "Luchataur",
        power: 9,
        ability: "Frenzy",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC36"
    },
    {
        name: "Mysterious Mermaid",
        power: 7,
        ability: "Play: Set your life points equal to the opponent's",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC12"
    },
    {
        name: "Plated Scorpion",
        power: 2,
        ability: "Tough Poisonous",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC4"
    },
    {
        name: "Rhino Turtle",
        power: 8,
        ability: "Frenzy Tough",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC10"
    },
    {
        name: "Shark Dog",
        power: 4,
        ability: "Hunter - Attack: Defeat an enemy creature with power 6 or more",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact",
        id: "FC38"
    },
    {
        name: "Sharky Crab-Dog-Mummypus",
        power: 5,
        ability: "Has hunter while an enemy creature does. Repeat for sneaky, frenzy, and poisonous",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: true,
            tough: false,
            sneaky: true,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC27"
    },
    {
        name: "Shield Bugs",
        power: 4,
        ability: "Tough - Other allied creatures have +1 power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC30"
    },
    {
        name: "Snail Hydra",
        power: 9,
        ability: "Attack: If you control fewer creatures than the opponent, defeat a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact",
        id: "FC22"
    },
    {
        name: "Snail Thrower",
        power: 1,
        ability: "Poisonous - Other allied creatures with power 4 or less have hunter and poisonous",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC40"
    },
    {
        name: "Spider Owl",
        power: 3,
        ability: "Sneaky Poisonous",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC9"
    },
    {
        name: "Strange Barrel",
        power: 6,
        ability: "Defeated: Steal 2 random cards from the opponent's hand",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        pack: "First Contact",
        id: "FC34"
    },
    {
        name: "Tiger Squirrel",
        power: 3,
        ability: "Sneaky - Play: Defeat an enemy creature with power 7 or more",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC46"
    },
    {
        name: "Turbo Bug",
        power: 4,
        ability: "Attack: The opponent loses all life points except one",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact",
        id: "FC28"
    },
    {
        name: "Tusked Extorter",
        power: 8,
        ability: "Attack: The opponent discards a card",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact",
        id: "FC42"
    },
    {
        name: "Urchin Hurler",
        power: 5,
        ability: "Hunter - Other allied creatures have +2 power while it is your turn",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact",
        id: "FC16"
    },
    {
        name: "Bugserker",
        power: 3,
        ability: "Tough - Has +8 power while you have 1 life point left",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG4"
    },
    {
        name: "Count Draculeech",
        power: 7,
        ability: "Attack: You lose 1 life point. Defeat a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG2"
    },
    {
        name: "Creep From The Deep",
        power: 4,
        ability: "Poisonous, Hunter",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG8"
    },
    {
        name: "Ferret Pacifier",
        power: 4,
        ability: "The enemy creature(s) with the highest power can't block",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG12"
    },
    {
        name: "Froblin Instigator",
        power: 1,
        ability: "Hunter: Has +2 power for each other allied creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG5"
    },
    {
        name: "Goreagle Alpha",
        power: 6,
        ability: "Frenzy Hunter Tough - Play: You lose 1 life point",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG9"
    },
    {
        name: "Hamster Lion",
        power: 8,
        ability: "Frenzy - The enemy creature(s) with the lowest power can't attack",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG11"
    },
    {
        name: "Hungry Hungry Hamster",
        power: 2,
        ability: "Sneaky - Play: The opponent gives you a card from their hand. Play it or put it into your hand",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG6"
    },
    {
        name: "Hyenix",
        power: 7,
        ability: "Frenzy - When you lose 1 or more life points while this is in your discard pile, you may play this",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG7"
    },
    {
        name: "Majestic Manticore",
        power: 6,
        ability: "Poisonous - Attack: Defeat the creature(s) with the lowest power",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG1"
    },
    {
        name: "The Lurker",
        power: 4,
        ability: "Tough - Attack: If you control more creatures than the opponent, this has sneaky this turn",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG10"
    },
    {
        name: "Turf The Surfer",
        power: 8,
        ability: "Attack: Choose a creature. It cannot block this turn",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        pack: "First Contact: Add-On",
        id: "UG3"
    },
    {
        name: "Agile Rooster",
        power: 6,
        ability: "Frenzy - Can only be blocked by creatures with power within 1 of this creature's power",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        pack: "Beyond Eternity",
        id: "FE31v4"
    },
    {
        name: "Ant Zombie Horde",
        power: 7,
        ability: "Tough - Attack: Boost 2 cards to this",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        pack: "Beyond Eternity",
        id: "FE1v4"
    },
    {
        name: "Berserker Rabbit",
        power: 6,
        ability: "Frenzy Tough - While your discard pile is empty, this has +4 power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE19v5"
    },
    {
        name: "Blessed Killer Bee",
        power: 5,
        ability: "Hunter - In Discard Pile: When the opponent loses life, they lose 2 additional life",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE3v4"
    },
    {
        name: "Blessed Shield Bugs",
        power: 6,
        ability: "Tough - In Discard Pile: Allied creatures have +1 power",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE30v3"
    },
    {
        name: "Blessed Tiger Squirrel",
        power: 3,
        ability: "Sneaky - In Discard Pile: Enemy creatures with power 7 or more cannot attack and/or block",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE38v2"
    },
    {
        name: "Catalisk",
        power: 2,
        ability: "Poisonous - Attack: The opponent discards their draw pile",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE2v2"
    },
    {
        name: "Cave Lizard",
        power: 10,
        ability: "Tough Sneaky - Cannot attack",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE39"
    },
    {
        name: "Cursed Gorillion",
        power: 10,
        ability: "Frenzy Tough - In Discard Pile: Allied creatures have -2 power (to a minimum of 1)",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: true
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE37"
    },
    {
        name: "Duckdra",
        power: 5,
        ability: "Hunter - Attack: You may defeat a creature with poisonous",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE4v5"
    },
    {
        name: "Fire Antler",
        power: 8,
        ability: "Defeated: The opponent loses 1 life. Boost 1 card to a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE22v3"
    },
    {
        name: "Ghostly Underdog",
        power: 4,
        ability: "Attack: Defeat all enemy creatures with power lower than this",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE8v6"
    },
    {
        name: "Goat Dragon",
        power: 7,
        ability: "Play/Attack: Boost 1 card to a creature or defeat a boosted creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE20v6"
    },
    {
        name: "Hiss Holiness",
        power: 5,
        ability: "Frenzy Poisonous - Play: Boost 4 cards to 1 or more creatures",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE17v5"
    },
    {
        name: "Hypnotic Mouse",
        power: 1,
        ability: "Sneaky - While 2 or more creatures have equal power, they cannot attack",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE35v2"
    },
    {
        name: "Koibra",
        power: 2,
        ability: "Poisonous - Play/Attack: Reveal a random card from the opponent's hand. Put it into any player's discard pile",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE29v3"
    },
    {
        name: "Madam Mystique",
        power: 2,
        ability: "Defeated: Choose a keyword. Defeat all enemy creatures with the chosen keyword",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE23v4"
    },
    {
        name: "Peacasus",
        power: 3,
        ability: "Sneaky - When this card is put into your discard pile from anywhere, gain 1 life",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            discard: false
        },
        evolved: false,
        boost: false,
        pack: "Beyond Eternity",
        id: "FE5v2"
    },
    {
        name: "Porcupine Teacher",
        power: 5,
        ability: "Other allied creatures have poisonous",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE7v8"
    },
    {
        name: "Pyro Salamancer",
        power: 6,
        ability: "Play: Boost 1 card to a creature. Defeat exactly 2 creatures with equal power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE12v5"
    },
    {
        name: "Radioactive Pest",
        power: 1,
        ability: "Poisonous - Attack: Defeat an enemy creature with power 7 or more",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE27v4"
    },
    {
        name: "Rockyphant",
        power: 8,
        ability: "Tough - When this card is put into your discard pile from anywhere, the opponent discards a card",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE14v3"
    },
    {
        name: "Sea-Rex",
        ability: "Hunter - Attack: Boost 1 card to this",
        power: 5,
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE26v4"
    },
    {
        name: "Soul Manipulator",
        power: 5,
        ability: "Tough - Play/Attack: Boost 1 card to a creature or return a boost card to your hand",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE10v4"
    },
    {
        name: "Spirit Cheetah",
        power: 5,
        ability: "Hunter - Defeated: Take control of a creature with power 2 or less",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE25v5"
    },
    {
        name: "Spirit Maki",
        power: 3,
        ability: "Sneaky - Defeated: Take control of a creature with power 9 or more",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE24v6"
    },
    {
        name: "Squirtoise Scout",
        power: 2,
        ability: "Tough - While 2 or more allied creatures have equal power, the opponent cannot block",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE34v3"
    },
    {
        name: "Tiger Wasp",
        power: 3,
        ability: "Frenzy Sneaky - Play: Discard a random card",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE21v2"
    },
    {
        name: "Tornado Dragon",
        power: 8,
        ability: "Play: Discard up to 2 cards. For each card discarded this way, defeat a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE28v6"
    },
    {
        name: "Trash Diver",
        power: 2,
        ability: "Sneaky - Attack: Draw any 2 cards from the opponent's discard pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE32v5"
    },
    {
        name: "Trash Flier",
        power: 2,
        ability: "Sneaky - Defeated: Play a card from the opponent's discard pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true
        },
        evolved: false,
        boost: false,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE33v3"
    },
    {
        name: "Water Antler",
        power: 8,
        ability: "Play: Gain 1 life. Boost 1 card to a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false
        },
        evolved: false,
        boost: true,
        discard: false,
        pack: "Beyond Eternity",
        id: "FE13v7"
    },
    {
        name: "Blastfish",
        power: 1,
        ability: "Poisonous - Attack: This cannot be defeated this turn",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE27v2"
    },
    {
        name: "Bullet Train",
        power: 9,
        ability: "Attack: Defeat an enemy creature with power 3 or less",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE6"
    },
    {
        name: "Cake Trickster",
        power: 6,
        ability: "Poisonous - Action: Choose an enemy creature. The opponent attacks with it if able",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE24v3"
    },
    {
        name: "Captain Hippo",
        power: 7,
        ability: "Frenzy - During the opponent's turn, they must always attack this with a creature with hunter if able",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE19v2"
    },
    {
        name: "Cheeky Chimpborg",
        power: 5,
        ability: "Hunter - Play: The opponent discards a card for each creature they control",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE5v2"
    },
    {
        name: "Cheery Chimpborg",
        power: 5,
        ability: "Hunter - While there are 3 or more enemy creatures, this has +5 power",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE8v2"
    },
    {
        name: "Chuckling Chimpborg",
        power: 5,
        ability: "Hunter - Play: The opponent loses 1 life for each mindbug they have",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE13v3"
    },
    {
        name: "Cloud Lady",
        power: 4,
        ability: "Action: Defeat an enemy creature with power 4 or less. Evolve to Typhoon Princess - Thunder Queen",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        secondEvolution: "Typhoon Princess",
        thirdEvolution: "Thunder Queen",
        pack: "Beyond Evolution",
        id: "AE28v5"
    },
    {
        name: "Typhoon Princess",
        power: 6,
        ability: "Action: Defeat an enemy creature with power 6 or less. Evolve to Thunder Queen",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE29v5"
    },
    {
        name: "Thunder Queen",
        power: 9,
        ability: "Attack: Defeat an enemy creature",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE30v5"
    },
    {
        name: "Coach Panda",
        power: 6,
        ability: "While there is exactly 1 other allied creature, that creature has +3 power and frenzy",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE9v2"
    },
    {
        name: "Curious Tadpole",
        power: 1,
        ability: "Poisonous - Action: Gain 1 life. Evolve to Frog Prophet - World Eater",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        secondEvolution: "Frog Prophet",
        thirdEvolution: "World Eater",
        pack: "Beyond Evolution",
        id: "AE31"
    },
    {
        name: "Frog Prophet",
        power: 3,
        ability: "Poisoinous Tough - Action: Gain 1 life. Evolve to World Eater",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE32v2"
    },
    {
        name: "World Eater",
        power: 8,
        ability: "Poisonous Tough - Attack: The opponent loses 1 life",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE33v4"
    },
    {
        name: "Dr Orange U Tan",
        power: 6,
        ability: "Play: You may lose 1 life. If you do, return all enemy creatures to the opponent's hand",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE11v3"
    },
    {
        name: "Dragon Inn",
        power: 3,
        ability: "Tough - Action: If you control fewer creatures than the opponent, they lose 1 life",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE22"
    },
    {
        name: "Earwig Assassin",
        power: 1,
        ability: "Snaeky - Play: You may discard a card. If you do, defeat a creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE3v3"
    },
    {
        name: "Infernostrich",
        power: 6,
        ability: "Action: Defeat an enemy creature with power 7 or more",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE25v2"
    },
    {
        name: "Kitsunsei",
        power: 4,
        ability: "Other allied creatures have sneaky",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE12"
    },
    {
        name: "Mole Machine",
        power: 5,
        ability: "Tough - The opponent cannot block with creatures with power 7 or more",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE17v3"
    },
    {
        name: "Octocopter",
        power: 5,
        ability: "Action: Defeat this. Take control of an enemy creature",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE26"
    },
    {
        name: "Puffermech",
        power: 2,
        ability: "Poisonous - Defeated: Defeat all enemy creatures with power 8 or more",
        double: true,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE7v2"
    },
    {
        name: "Radioactive Rabbit",
        power: 3,
        ability: "Frenzy - Play: The opponent takes control of this. Defeated: Defeat all other allied creatures",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE16v3"
    },
    {
        name: "Robopup",
        power: 1,
        ability: "Sneaky Tough",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE2v2"
    },
    {
        name: "Sawn",
        power: 5,
        ability: "Tough - When this fights, the creature with the highest power is defeated instead of the lowest",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE10v2"
    },
    {
        name: "Spiky Shinobi",
        power: 3,
        ability: "Sneaky - When you have no Mindbugs, this has +5 power",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE4v2"
    },
    {
        name: "Steelhorn",
        power: 7,
        ability: "Defeated: The opponent discards 3 cards",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE18v2"
    },
    {
        name: "Sweet Fighter",
        power: 9,
        ability: "Defeated: Gain 2 life",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE21v2"
    },
    {
        name: "The Experiment",
        power: 6,
        ability: "Poisonous - Play: The opponent takes control of this. Take control of an enemy creature",
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE15v2"
    },
    {
        name: "Turtle Toaster",
        power: 4,
        ability: "Tough - Play: Defeat up to 2 enemy creatures with power 4-6",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE23v2"
    },
    {
        name: "Utility Bug",
        power: 4,
        ability: "Hunter Tough - Play: You may copy the play effect of another creature",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE14v2"
    },
    {
        name: "Waddling Recruit",
        power: 3,
        ability: "Action: The opponent discards a card. Evolve to Veteran Penguin - Frosty Fortress",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        secondEvolution: 'Veteran Penguin',
        thirdEvolution: 'Frosty Fortress',
        pack: "Beyond Evolution",
        id: "AE34v2"
    },
    {
        name: "Veteran Penguin",
        power: 5,
        ability: "Tough - Action: The opponent discards a card. Evolve to Frosty Fortress",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE35v3"
    },
    {
        name: "Frosty Fortress",
        power: 10,
        ability: "Tough - Attack: The opponent discards their hand and draw pile",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE36v4"
    },
    {
        name: "Westside Monster",
        power: 8,
        ability: "Frenzy - Enemy creatures with sneaky cannot attack and/or block",
        double: true,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Beyond Evolution",
        id: "AE20"
    },
    {
        name: "Wildsprout",
        power: 1,
        ability: "Action: Play a card from your discard pile. Evolve to Bigroot - Oakenmaster",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        secondEvolution: 'Bigroot',
        thirdEvolution: 'Oakenmaster',
        pack: "Beyond Evolution",
        id: "AE37v4"
    },
    {
        name: "Bigroot",
        power: 4,
        ability: "Action: Play a card from your discard pile. Evolve to Oakenmaster",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE38v3"
    },
    {
        name: "Oakenmaster",
        power: 7,
        ability: "Other allied creatures have +5 power",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Beyond Evolution",
        id: "AE39v3"
    },
    {
        name: "Slugapult",
        power: 5,
        ability: "Tough Frenzy - Attack: You may defeat another allied creature. If you do, defeat an enemy creature",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR01_2021"
    },
    {
        name: "Mindbug Bug",
        power: 7,
        ability: "Tough - When the opponent uses a Mindbug, they first lose 1 life point",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR02_2021"
    },
    {
        name: "Ratomancer",
        power: 2,
        ability: "Play: Play any number of cards with power 4 or less from your discard pile without activating their play effects",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR03_2021"
    },
    {
        name: "Ram Hopper",
        power: 7,
        ability: "Frenzy - Other allied creatures have frenzy",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR04_2021"
    },
    {
        name: "Boar-Zooka",
        power: 6,
        ability: "Cannot block. Defeated: Defeat all enemy creatures",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR05_2021"
    },
    {
        name: "Sluggernaut",
        power: 6,
        ability: "Tough Hunter Frenzy",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR06_2021"
    },
    {
        name: "Chuck",
        power: 3,
        ability: "Tough - Play: Roll a 6-sided die. On 4 to 6, defeat an enemy creature and then repeat this effect",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR07_2022"
    },
    {
        name: "Jazz Dog",
        power: 5,
        ability: "At the end of your turn, if an enemy creature blocked this turn and is still in play, take control of it",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR08_2022"
    },
    {
        name: "Macaw Dagon",
        power: 8,
        ability: "Attack: Swap hands with the opponent",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR09_2022"
    },
    {
        name: "Unigon",
        power: 9,
        ability: "Attack: If your hand is empty, you win the game",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2022",
        id: "PR10_2022"
    },
    {
        name: "Suspicious Gift",
        power: 1,
        ability: "Play: The opponent takes control of this. Defeated: You lose 2 life",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: true,
            attack: true,
            defeated: true,
            action: false
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP231"
    },
    {
        name: "Future Eric",
        power: 3,
        ability: "Sneaky - Play: Put 2 random cards from outside the game on the bottom of your draw pile without looking at them",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false,
            discard: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Alien Brain",
        power: 3,
        ability: `Poisonous - The opponent cannot put cards into their hand`,
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false,
            discard: false
        },
        evolution: false,
        pack: "Promo 2023"
    },
    {
        name: "Watts Dog",
        power: 5,
        ability: "Frenzy - Cannot be blocked by creatures with 1 or more keywords",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP234"
    },
    {
        name: "Blessed Axolotl Healer",
        power: 6,
        ability: `Poisonous - In Discard Pile: Allied creatures have "Attack: Gain 1 life"`,
        double: false,
        keywords: {
            poisonous: true,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false,
            discard: true
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP239"
    },
    {
        name: "Cursed Goblin Werewolf",
        power: 8,
        ability: "Frenzy Hunter - In Discard Pile: Allied creatures with frenzy and/or hunter cannot attack",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false,
            discard: true
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP2310"
    },
    {
        name: "Kitten Crewmate",
        power: 2,
        ability: `Sneaky - If this would be defeated, evolve to "One-Eye" Felix instead - Silver Whiskers`,
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: true,
        secondEvolution: 'One-Eye Felix',
        thirdEvolution: 'Silver Whiskers',
        pack: "Promo 2023",
        id: "PP2314"
    },
    {
        name: "One-Eye Felix",
        power: 7,
        ability: "Hunter - At the end of turn, if this defeated an enemy creature this turn, evolve to Silver Whiskers",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: true
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Promo 2023",
        id: "PP2315"
    },
    {
        name: "Silver Whiskers",
        power: 6,
        ability: "Tough - Attack: Take control of a creature with power 5 or less",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Promo 2023",
        id: "PP2316"
    },
    {
        name: "Ghost Hand",
        power: 2,
        ability: "Sneaky - Play: Boost 1 card to a creature. Boosted creatures cannot block.",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: true,
            hunter: false
        },
        triggers: {
            play: true,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        boost: true,
        pack: "Promo 2023",
        id: "PP235v2"
    },
    {
        name: "Solar Bear",
        power: 5,
        ability: "Tough - Attack: Boost 1 card to a creature or take control of a boosted creature",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: true,
            defeated: false,
            action: false
        },
        evolution: false,
        boost: true,
        pack: "Promo 2023",
        id: "PP2311"
    },
    {
        name: "Jean-Claw_Pandamme",
        power: 5,
        ability: 'Enemy creatures have "Attack: Discard a card"',
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP2317"
    },
    {
        name: "Bug Catcher",
        power: 9,
        ability: "Frenzy Tough - Players cannot use Mindbugs",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: true,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: false
        },
        evolution: false,
        pack: "Promo 2023",
        id: "PP236"
    },
    {
        name: "Tuckbox Mimic",
        power: 2,
        ability: "Action: Boost 1 card to this. Evolve to Deckbox Mimic - Big Box Mimic",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        boost: true,
        secondEvolution: 'Deckbox Mimic',
        thirdEvolution: 'Big Box Mimic',
        pack: "Promo 2023",
        id: "PP2318"
    },
    {
        name: "Deckbox Mimic",
        power: 5,
        ability: "Action: Boost 1 card to this. You may evolve to Big Box Mimic",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: false,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: false,
            action: true
        },
        evolution: true,
        evolved: true,
        boost: true,
        pack: "Promo 2023"
    },
    {
        name: "Big Box Mimic",
        power: 6,
        ability: "Frenzy - Defeated: Play any number of boost cards from this without activating their Play effects",
        double: false,
        keywords: {
            poisonous: false,
            frenzy: true,
            tough: false,
            sneaky: false,
            hunter: false
        },
        triggers: {
            play: false,
            attack: false,
            defeated: true,
            action: false
        },
        evolution: true,
        evolved: true,
        pack: "Promo 2023"
    },
]

let url;
let listOfCardNumbers;
let listOfCardLetters = [];
let exportString = "";
let numberOfFirstContact = 0;
let numberOfNewServants = 0;
let numberOfEvolution = 0;
let numberOfEternity = 0;
let numberOfPromo = 0;
let numberOfFrenzy = 0;
let numberOfHunter = 0;
let numberOfPoisonous = 0;
let numberOfSneaky = 0;
let numberOfTough = 0;
let numberOfNoKeywords = 0;
let numberOfCards = 0;
let numberOfPlay = 0;
let numberOfAttack = 0;
let numberOfDefeated = 0;
let numberOfAction = 0;
let numberOfDiscard = 0;
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

                if (this.evolved) return;

                let name = this.name;
                name = name.split(" ");
                let imageName;
                for (let i = 0; i < name.length; i++) {
                    if (i == 0) {
                        imageName = name[i];
                    } else {
                        imageName += `_${name[i]}`
                    }
                }

                let howManyOfThisCard = listOfCardLetters[indexOfArray];
                howManyOfThisCard = howManyOfThisCard.charCodeAt(0) - 96;
                numberOfCards = numberOfCards + howManyOfThisCard;

                if (this.id) {
                    addToExportString(this.id, howManyOfThisCard);
                }

                getStats(currentCardNumber, howManyOfThisCard);
                $(".deck-holder").append(`
                    <div class="img-holder">
                        <img class="card" src="./img/${imageName}.jpg">
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
    let creatureObject = creatures[currentCardNumber];

    if (creatureObject.pack == "First Contact") {
        numberOfFirstContact += howManyOfThisCard;
    }
    if (creatureObject.pack == "First Contact: Add-On") {
        numberOfNewServants += howManyOfThisCard;
    }
    if (creatureObject.pack == "Beyond Evolution") {
        numberOfEvolution += howManyOfThisCard;
    }
    if (creatureObject.pack == "Beyond Eternity") {
        numberOfEternity += howManyOfThisCard;
    }
    if (creatureObject.pack == "Promo 2022" || creatureObject.pack == "Promo 2023") {
        numberOfPromo += howManyOfThisCard;
    }

    let keyWordFound = false;

    if (creatureObject.keywords.frenzy) {
        numberOfFrenzy += howManyOfThisCard;
        keyWordFound = true;
    }
    if (creatureObject.keywords.hunter) {
        numberOfHunter += howManyOfThisCard;
        keyWordFound = true;
    }
    if (creatureObject.keywords.poisonous) {
        numberOfPoisonous += howManyOfThisCard;
        keyWordFound = true;
    }
    if (creatureObject.keywords.sneaky) {
        numberOfSneaky += howManyOfThisCard;
        keyWordFound = true;
    }
    if (creatureObject.keywords.tough) {
        numberOfTough += howManyOfThisCard;
        keyWordFound = true;
    }

    if (!keyWordFound) {
        numberOfNoKeywords += howManyOfThisCard;
    }

    let triggerFound = false;

    if (creatureObject.triggers.play) {
        numberOfPlay += howManyOfThisCard;
        triggerFound = true;
    }
    if (creatureObject.triggers.attack) {
        numberOfAttack += howManyOfThisCard;
        triggerFound = true;
    }
    if (creatureObject.triggers.defeated) {
        numberOfDefeated += howManyOfThisCard;
        triggerFound = true;
    }
    if (creatureObject.triggers.action) {
        numberOfAction += howManyOfThisCard;
        triggerFound = true;
    }
    if (creatureObject.triggers.discard) {
        numberOfDiscard += howManyOfThisCard;
        triggerFound = true;
    }

    if (!triggerFound) {
        numberOfNoTriggers += howManyOfThisCard;
    }

    if (creatureObject.power == 1) {
        numberOfOnes += howManyOfThisCard;
    }
    if (creatureObject.power == 2) {
        numberOfTwos += howManyOfThisCard;
    }
    if (creatureObject.power == 3) {
        numberOfThrees += howManyOfThisCard;
    }
    if (creatureObject.power == 4) {
        numberOfFours += howManyOfThisCard;
    }
    if (creatureObject.power == 5) {
        numberOfFives += howManyOfThisCard;
    }
    if (creatureObject.power == 6) {
        numberOfSixes += howManyOfThisCard;
    }
    if (creatureObject.power == 7) {
        numberOfSevens += howManyOfThisCard;
    }
    if (creatureObject.power == 8) {
        numberOfEights += howManyOfThisCard;
    }
    if (creatureObject.power == 9) {
        numberOfNines += howManyOfThisCard;
    }
    if (creatureObject.power == 10) {
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
    $('.frenzy-num').text("Frenzy: " + numberOfFrenzy + ` (${frenzyPercent}%)`);
    $('.hunter-num').text("Hunter: " + numberOfHunter + ` (${hunterPercent}%)`);
    $('.poisonous-num').text("Poisonous: " + numberOfPoisonous + ` (${poisonousPercent}%)`);
    $('.sneaky-num').text("Sneaky: " + numberOfSneaky + ` (${sneakyPercent}%)`);
    $('.tough-num').text("Tough: " + numberOfTough + ` (${toughPercent}%)`);
    
    let percentOfNoKeywords = ((numberOfNoKeywords/numberOfCards)*100).toFixed(0);
    $('.keyword-none').text(`None: ${numberOfNoKeywords} (${percentOfNoKeywords}%)`);

    let firstContactPercent = ((numberOfFirstContact/numberOfCards)*100).toFixed(0);
    let newServantsPercent = ((numberOfNewServants/numberOfCards)*100).toFixed(0);
    let evolutionPercent = ((numberOfEvolution/numberOfCards)*100).toFixed(0);
    let eternityPercent = ((numberOfEternity/numberOfCards)*100).toFixed(0);
    let promoPercent = ((numberOfPromo/numberOfCards)*100).toFixed(0);
    $('.fc-num').text("First Contact: " + numberOfFirstContact + ` (${firstContactPercent}%)`);
    $('.ns-num').text("New Servants: " + numberOfNewServants + ` (${newServantsPercent}%)`);
    $('.ev-num').text("Beyond Evolution: " + numberOfEvolution + ` (${evolutionPercent}%)`);
    $('.et-num').text("Beyond Eternity: " + numberOfEternity + ` (${eternityPercent}%)`);
    $('.promo-num').text("Promo: " + numberOfPromo + ` (${promoPercent}%)`);

    let playPercent = ((numberOfPlay/numberOfCards)*100).toFixed(0);
    let attackPercent = ((numberOfAttack/numberOfCards)*100).toFixed(0);
    let defeatedPercent = ((numberOfDefeated/numberOfCards)*100).toFixed(0);
    let actionPercent = ((numberOfAction/numberOfCards)*100).toFixed(0);
    let discardPercent = ((numberOfDiscard/numberOfCards)*100).toFixed(0);
    $('.play-num').text("Play: " + numberOfPlay + ` (${playPercent}%)`);
    $('.attack-num').text("Attack: " + numberOfAttack + ` (${attackPercent}%)`);
    $('.defeated-num').text("Defeated: " + numberOfDefeated + ` (${defeatedPercent}%)`);
    $('.action-num').text("Action: " + numberOfAction + ` (${actionPercent}%)`);
    $('.discard-num').text("In Discard Pile: " + numberOfDiscard + ` (${discardPercent}%)`);
    
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
    console.log(exportString);
}