// Challenge configurations for TCGMaker puzzles
export const challenges = [
  {
    id: 1,
    title: "The Snorlax Stall",
    difficulty: "Intermediate",
    reward: "200 XP",
    description: "Your opponent has an impenetrable Snorlax wall. You need to find the energy denial combo.",
    opponent: {
      activePokemon: {
        name: "Snorlax",
        hp: 150,
        maxHp: 150,
        image: "https://images.pokemontcg.io/sv3pt5/60.png",
        attacks: [
          { name: "Body Slam", damage: 60, cost: ["Colorless", "Colorless", "Colorless"], effect: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
          { name: "Heavy Impact", damage: 90, cost: ["Colorless", "Colorless", "Colorless", "Colorless"] }
        ],
        ability: { name: "Thick Fat", effect: "This Pokémon takes 30 less damage from attacks." }
      },
      bench: [
        {
          name: "Blissey",
          image: "https://images.pokemontcg.io/sv4pt/16.png",
          hp: 120,
          maxHp: 120,
          attacks: [
            { name: "Happy Heal", damage: 0, cost: ["Colorless"], effect: "Heal 60 damage from this Pokémon." },
            { name: "Egg Bomb", damage: 60, cost: ["Colorless", "Colorless"] }
          ]
        },
        {
          name: "Chansey",
          image: "https://images.pokemontcg.io/sv04/51.png",
          hp: 100,
          maxHp: 100,
          attacks: [
            { name: "Double Slap", damage: 30, cost: ["Colorless"], effect: "Flip 2 coins. This attack does 30 damage for each heads." }
          ]
        },
        null,
        null,
        null
      ],
      deckCount: 12
    },
    player: {
      activePokemon: {
        name: "Pikachu ex",
        hp: 120,
        maxHp: 120,
        image: "https://images.pokemontcg.io/sv3pt5/3.png",
        retreatCost: 1,
        attacks: [
          { name: "Thunder Shock", damage: 30, cost: ["Electric"], effect: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
          { name: "Electro Ball", damage: 120, cost: ["Electric", "Electric", "Colorless"] }
        ]
      },
      bench: [
        { name: "Raichu", image: "https://images.pokemontcg.io/sv4/22.png", hp: 90, maxHp: 90, retreatCost: 1 },
        { name: "Pikachu", image: "https://images.pokemontcg.io/sv04/25.png", hp: 60, maxHp: 60, retreatCost: 1 },
        null,
        null,
        null
      ],
      deckCount: 8,
      hand: [
        { name: "Thunderbolt", image: "https://images.pokemontcg.io/sv4/58.png", type: "trainer" },
        { name: "Electric Gym", image: "https://images.pokemontcg.io/sv4/70.png", type: "trainer" },
        { name: "Zap Cannon", image: "https://images.pokemontcg.io/sv4/59.png", type: "trainer" },
        { name: "Thunder Wave", image: "https://images.pokemontcg.io/sv4/60.png", type: "trainer" },
        { name: "Pikachu ex", image: "https://images.pokemontcg.io/sv3pt5/3.png", type: "pokemon" },
        { name: "Super Potion", image: "https://images.pokemontcg.io/sv4/61.png", type: "trainer" },
        { name: "Electric Energy", image: "https://images.pokemontcg.io/sv04/194.png", type: "energy", energyType: "Electric" },
        { name: "Electric Energy", image: "https://images.pokemontcg.io/sv04/194.png", type: "energy", energyType: "Electric" },
        { name: "Electric Energy", image: "https://images.pokemontcg.io/sv04/194.png", type: "energy", energyType: "Electric" },
        { name: "Electric Energy", image: "https://images.pokemontcg.io/sv04/194.png", type: "energy", energyType: "Electric" }
      ]
    }
  },
  {
    id: 2,
    title: "Mew VMAX Sweep",
    difficulty: "Expert",
    reward: "500 XP",
    description: "Your opponent has a Mew VMAX with massive damage output. Chain your moves perfectly.",
    opponent: {
      activePokemon: {
        name: "Mew VMAX",
        hp: 310,
        maxHp: 310,
        image: "https://images.pokemontcg.io/sv4pt/114.png",
        attacks: [
          { name: "Cross Fusion Strike", damage: 70, cost: ["Psychic"], effect: "This attack does 20 more damage for each Fusion Strike Pokémon on your Bench." },
          { name: "Max Miracle", damage: 130, cost: ["Psychic", "Psychic"] }
        ]
      },
      bench: [
        { name: "Genesect V", image: "https://images.pokemontcg.io/sv04/185.png" },
        null,
        null,
        null,
        null
      ],
      deckCount: 18
    },
    player: {
      activePokemon: {
        name: "Lugia VSTAR",
        hp: 280,
        maxHp: 280,
        image: "https://images.pokemontcg.io/sv3pt5/172.png",
        attacks: [
          { name: "Aero Dive", damage: 130, cost: ["Colorless", "Colorless", "Colorless"], effect: "You may discard a Stadium in play." },
          { name: "Tempest Dive", damage: 220, cost: ["Colorless", "Colorless", "Colorless", "Colorless"], effect: "During your next turn, this Pokémon can't attack." }
        ],
        ability: { name: "Storm Rider", effect: "Once during your turn, you may choose up to 2 Colorless Pokémon from your discard pile and put them onto your Bench." }
      },
      bench: [
        { name: "Zapdos", image: "https://images.pokemontcg.io/sv4/24.png" },
        { name: "Articuno", image: "https://images.pokemontcg.io/sv04/144.png" },
        { name: "Moltres", image: "https://images.pokemontcg.io/sv04/146.png" },
        null,
        null
      ],
      deckCount: 15,
      hand: [
        { name: "Roaring Skies", image: "https://images.pokemontcg.io/sv4/62.png" },
        { name: "Lugia VSTAR", image: "https://images.pokemontcg.io/sv3pt5/172.png" },
        { name: "Max Elixir", image: "https://images.pokemontcg.io/sv4/63.png" },
        { name: "Energy Switch", image: "https://images.pokemontcg.io/sv4/64.png" },
        { name: "Great Ball", image: "https://images.pokemontcg.io/sv4/65.png" },
        { name: "Psychic Energy", image: "https://images.pokemontcg.io/sv04/197.png" }
      ]
    }
  },
  {
    id: 3,
    title: "Energy Denial Escape",
    difficulty: "Master",
    reward: "1000 XP",
    description: "With limited resources and no energy attachments, find the critical combo sequence.",
    opponent: {
      activePokemon: {
        name: "Giratina VSTAR",
        hp: 280,
        maxHp: 280,
        image: "https://images.pokemontcg.io/sv4pt/130.png",
        attacks: [
          { name: "Shadow Impact", damage: 160, cost: ["Darkness", "Darkness", "Colorless"], effect: "This Pokémon also does 60 damage to itself." },
          { name: "Star Requiem", damage: 280, cost: ["Darkness", "Darkness", "Colorless", "Colorless"], effect: "During your next turn, this Pokémon can't use Star Requiem." }
        ]
      },
      bench: [
        { name: "Dialga", image: "https://images.pokemontcg.io/sv04/483.png" },
        { name: "Palkia", image: "https://images.pokemontcg.io/sv04/484.png" },
        null,
        null,
        null
      ],
      deckCount: 10
    },
    player: {
      activePokemon: {
        name: "Rayquaza ex",
        hp: 200,
        maxHp: 200,
        image: "https://images.pokemontcg.io/sv4/384.png",
        attacks: [
          { name: "Dragon Pulse", damage: 120, cost: ["Fire", "Lightning"], effect: "Discard the top 2 cards of your deck." },
          { name: "Dragon Break", damage: 200, cost: ["Fire", "Lightning", "Colorless", "Colorless"], effect: "This attack does 30 damage to each of your opponent's Benched Pokémon." }
        ]
      },
      bench: [
        { name: "Kyogre", image: "https://images.pokemontcg.io/sv04/382.png" },
        null,
        null,
        null,
        null
      ],
      deckCount: 5,
      hand: [
        { name: "Dragon's Rage", image: "https://images.pokemontcg.io/sv4/66.png" },
        { name: "Raihan", image: "https://images.pokemontcg.io/sv4/67.png" },
        { name: "Choice Band", image: "https://images.pokemontcg.io/sv4/68.png" },
        { name: "Rayquaza VMAX", image: "https://images.pokemontcg.io/sv4/385.png" },
        { name: "Ultra Ball", image: "https://images.pokemontcg.io/sv4/69.png" }
      ]
    }
  },
  {
    id: 4,
    title: "The Pivot Play",
    difficulty: "Beginner",
    reward: "100 XP",
    description: "Switch your active Pokémon strategically to set up the perfect attack.",
    opponent: {
      activePokemon: {
        name: "Charizard ex",
        hp: 210,
        maxHp: 210,
        image: "https://images.pokemontcg.io/sv4/6.png",
        attacks: [
          { name: "Slash", damage: 80, cost: ["Fire", "Colorless", "Colorless"] },
          { name: "Fire Blast", damage: 200, cost: ["Fire", "Fire", "Colorless", "Colorless"], effect: "Discard an Energy from this Pokémon." }
        ]
      },
      bench: [
        { name: "Arcanine", image: "https://images.pokemontcg.io/sv04/59.png" },
        { name: "Rapidash", image: "https://images.pokemontcg.io/sv04/78.png" },
        null,
        null,
        null
      ],
      deckCount: 20
    },
    player: {
      activePokemon: {
        name: "Blastoise",
        hp: 160,
        maxHp: 160,
        image: "https://images.pokemontcg.io/sv4/9.png",
        attacks: [
          { name: "Hydro Pump", damage: 90, cost: ["Water", "Water", "Colorless"], effect: "This attack does 10 more damage for each Water Energy attached to this Pokémon." },
          { name: "Hydro Cannon", damage: 150, cost: ["Water", "Water", "Water", "Colorless"] }
        ],
        ability: { name: "Rain Maker", effect: "Once during your turn, you may attach a Water Energy card from your hand to 1 of your Pokémon." }
      },
      bench: [
        { name: "Squirtle", image: "https://images.pokemontcg.io/sv04/7.png" },
        { name: "Wartortle", image: "https://images.pokemontcg.io/sv04/8.png" },
        { name: "Lapras", image: "https://images.pokemontcg.io/sv04/131.png" },
        null,
        null
      ],
      deckCount: 16,
      hand: [
        { name: "Switch", image: "https://images.pokemontcg.io/sv4/70.png" },
        { name: "Potion", image: "https://images.pokemontcg.io/sv4/71.png" },
        { name: "Water Energy", image: "https://images.pokemontcg.io/sv04/193.png" },
        { name: "Blastoise ex", image: "https://images.pokemontcg.io/sv4/10.png" },
        { name: "Professor Oak", image: "https://images.pokemontcg.io/sv4/72.png" },
        { name: "Poké Ball", image: "https://images.pokemontcg.io/sv4/73.png" }
      ]
    }
  },
  {
    id: 5,
    title: "The Comeback",
    difficulty: "Intermediate",
    reward: "300 XP",
    description: "You're down to your last Pokémon. Execute a perfect recover and counter-attack.",
    opponent: {
      activePokemon: {
        name: "Alakazam ex",
        hp: 250,
        maxHp: 250,
        image: "https://images.pokemontcg.io/sv4/65.png",
        attacks: [
          { name: "Psybeam", damage: 60, cost: ["Psychic", "Colorless"], effect: "Your opponent's Active Pokémon is now Confused." },
          { name: "Mind Ruler", damage: 80, cost: ["Psychic", "Psychic"], effect: "This attack does 20 more damage for each card in your opponent's hand." }
        ],
        ability: { name: "Kinesis", effect: "Once during your turn, you may move 2 damage counters from 1 of your opponent's Pokémon to another of their Pokémon." }
      },
      bench: [
        { name: "Machamp", image: "https://images.pokemontcg.io/sv04/68.png" },
        null,
        null,
        null,
        null
      ],
      deckCount: 14
    },
    player: {
      activePokemon: {
        name: "Dragonite ex",
        hp: 180,
        maxHp: 180,
        image: "https://images.pokemontcg.io/sv4/149.png",
        attacks: [
          { name: "Dragon Claw", damage: 100, cost: ["Lightning", "Fighting"] },
          { name: "Draco Meteor", damage: 200, cost: ["Lightning", "Fighting", "Colorless"], effect: "Discard 2 Energy from this Pokémon." }
        ],
        ability: { name: "Dragon's Presence", effect: "Your Basic Pokémon's attacks do 10 more damage to your opponent's Active Pokémon." }
      },
      bench: [
        null,
        null,
        null,
        null,
        null
      ],
      deckCount: 7,
      hand: [
        { name: "Outrage", image: "https://images.pokemontcg.io/sv4/74.png" },
        { name: "Dragon Dance", image: "https://images.pokemontcg.io/sv4/75.png" },
        { name: "Dragon Energy", image: "https://images.pokemontcg.io/sv04/205.png" },
        { name: "Full Heal", image: "https://images.pokemontcg.io/sv4/76.png" },
        { name: "Grapplocker", image: "https://images.pokemontcg.io/sv4/77.png" }
      ]
    }
  },
  {
    id: 6,
    title: "Triple Threat Combo",
    difficulty: "Master",
    reward: "750 XP",
    description: "Chain three Pokémon abilities in sequence to achieve the impossible KO.",
    opponent: {
      activePokemon: {
        name: "Calyrex VMAX",
        hp: 320,
        maxHp: 320,
        image: "https://images.pokemontcg.io/sv4pt/165.png",
        attacks: [
          { name: "Shadow Mist", damage: 10, cost: ["Psychic"], effect: "Put 5 damage counters on your opponent's Pokémon in any way you like." },
          { name: "Max Geist", damage: 250, cost: ["Psychic", "Psychic", "Colorless"] }
        ]
      },
      bench: [
        { name: "Gardevoir", image: "https://images.pokemontcg.io/sv04/282.png" },
        { name: "Ralts", image: "https://images.pokemontcg.io/sv04/280.png" },
        null,
        null,
        null
      ],
      deckCount: 11
    },
    player: {
      activePokemon: {
        name: "Grimmsnarl VMAX",
        hp: 310,
        maxHp: 310,
        image: "https://images.pokemontcg.io/sv4/862.png",
        attacks: [
          { name: "Bite Off", damage: 30, cost: ["Darkness"], effect: "This attack does 30 damage for each Prize card your opponent has taken." },
          { name: "Max Knuckle", damage: 240, cost: ["Darkness", "Darkness", "Colorless"] }
        ],
        ability: { name: "Furious Anger", effect: "If this Pokémon has any damage counters on it, its attacks do 80 more damage to your opponent's Active Pokémon." }
      },
      bench: [
        { name: "Obstagoon", image: "https://images.pokemontcg.io/sv04/862.png" },
        { name: "Morgrem", image: "https://images.pokemontcg.io/sv04/861.png" },
        { name: "Wooloo", image: "https://images.pokemontcg.io/sv04/860.png" },
        null,
        null
      ],
      deckCount: 9,
      hand: [
        { name: "Dark Pulse", image: "https://images.pokemontcg.io/sv4/78.png" },
        { name: "Grimmsnarl ex", image: "https://images.pokemontcg.io/sv4/863.png" },
        { name: "Max Potion", image: "https://images.pokemontcg.io/sv4/79.png" },
        { name: "Obstacruel", image: "https://images.pokemontcg.io/sv04/864.png" },
        { name: "Dark Energy", image: "https://images.pokemontcg.io/sv04/204.png" },
        { name: "Trainer's Mail", image: "https://images.pokemontcg.io/sv4/80.png" }
      ]
    }
  }
];
