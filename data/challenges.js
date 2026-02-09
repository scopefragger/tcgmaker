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
        image: "https://images.pokemontcg.io/sv3pt5/60.png"
      },
      bench: [
        { name: "Blissey", image: "https://images.pokemontcg.io/sv4pt/16.png" },
        { name: "Chansey", image: "https://images.pokemontcg.io/sv04/51.png" },
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
        image: "https://images.pokemontcg.io/sv3pt5/3.png"
      },
      bench: [
        { name: "Raichu", image: "https://images.pokemontcg.io/sv4/22.png" },
        { name: "Pikachu", image: "https://images.pokemontcg.io/sv04/25.png" },
        null,
        null,
        null
      ],
      deckCount: 8,
      hand: [
        { name: "Thunderbolt", image: "https://images.pokemontcg.io/sv4/58.png" },
        { name: "Electric Gym", image: "https://images.pokemontcg.io/sv4/70.png" },
        { name: "Zap Cannon", image: "https://images.pokemontcg.io/sv4/59.png" },
        { name: "Thunder Wave", image: "https://images.pokemontcg.io/sv4/60.png" },
        { name: "Pikachu ex", image: "https://images.pokemontcg.io/sv3pt5/3.png" },
        { name: "Super Potion", image: "https://images.pokemontcg.io/sv4/61.png" }
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
        image: "https://images.pokemontcg.io/sv4pt/114.png"
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
        image: "https://images.pokemontcg.io/sv3pt5/172.png"
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
        image: "https://images.pokemontcg.io/sv4pt/130.png"
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
        image: "https://images.pokemontcg.io/sv4/384.png"
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
        image: "https://images.pokemontcg.io/sv4/6.png"
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
        image: "https://images.pokemontcg.io/sv4/9.png"
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
        image: "https://images.pokemontcg.io/sv4/65.png"
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
        image: "https://images.pokemontcg.io/sv4/149.png"
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
        image: "https://images.pokemontcg.io/sv4pt/165.png"
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
        image: "https://images.pokemontcg.io/sv4/862.png"
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
