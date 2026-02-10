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
      deckCount: 12,
      hand: [
        { name: "Colorless Energy", image: "https://images.pokemontcg.io/sv04/195.png", type: "energy", energyType: "Colorless" },
        { name: "Colorless Energy", image: "https://images.pokemontcg.io/sv04/195.png", type: "energy", energyType: "Colorless" },
        { name: "Colorless Energy", image: "https://images.pokemontcg.io/sv04/195.png", type: "energy", energyType: "Colorless" },
        { name: "Colorless Energy", image: "https://images.pokemontcg.io/sv04/195.png", type: "energy", energyType: "Colorless" }
      ]
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
  }
];
