// Fallback card data for when the Pokemon TCG API is unavailable
// These are real cards from recent Scarlet & Violet sets

export const fallbackCards = [
  {
    id: "sv08-001",
    name: "Charizard ex",
    supertype: "Pokémon",
    hp: "330",
    images: {
      small: "https://images.pokemontcg.io/sv08/1.png",
      large: "https://images.pokemontcg.io/sv08/1_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    set: {
      name: "Surging Sparks",
      releaseDate: "2024-11-08"
    }
  },
  {
    id: "sv08-015",
    name: "Pikachu ex",
    supertype: "Pokémon",
    hp: "120",
    images: {
      small: "https://images.pokemontcg.io/sv08/15.png",
      large: "https://images.pokemontcg.io/sv08/15_hires.png"
    },
    retreatCost: ["Colorless"],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    set: {
      name: "Surging Sparks",
      releaseDate: "2024-11-08"
    }
  },
  {
    id: "sv07-003",
    name: "Mewtwo ex",
    supertype: "Pokémon",
    hp: "220",
    images: {
      small: "https://images.pokemontcg.io/sv07/3.png",
      large: "https://images.pokemontcg.io/sv07/3_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Stellar Crown",
      releaseDate: "2024-09-13"
    }
  },
  {
    id: "sv07-025",
    name: "Rayquaza",
    supertype: "Pokémon",
    hp: "130",
    images: {
      small: "https://images.pokemontcg.io/sv07/25.png",
      large: "https://images.pokemontcg.io/sv07/25_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Stellar Crown",
      releaseDate: "2024-09-13"
    }
  },
  {
    id: "sv06-012",
    name: "Greninja ex",
    supertype: "Pokémon",
    hp: "260",
    images: {
      small: "https://images.pokemontcg.io/sv06/12.png",
      large: "https://images.pokemontcg.io/sv06/12_hires.png"
    },
    retreatCost: ["Colorless"],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    set: {
      name: "Twilight Masquerade",
      releaseDate: "2024-05-24"
    }
  },
  {
    id: "sv06-078",
    name: "Lucario ex",
    supertype: "Pokémon",
    hp: "270",
    images: {
      small: "https://images.pokemontcg.io/sv06/78.png",
      large: "https://images.pokemontcg.io/sv06/78_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Psychic", value: "×2" }],
    resistances: [],
    set: {
      name: "Twilight Masquerade",
      releaseDate: "2024-05-24"
    }
  },
  {
    id: "sv05-001",
    name: "Venusaur ex",
    supertype: "Pokémon",
    hp: "330",
    images: {
      small: "https://images.pokemontcg.io/sv05/1.png",
      large: "https://images.pokemontcg.io/sv05/1_hires.png"
    },
    retreatCost: ["Colorless", "Colorless", "Colorless", "Colorless"],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [],
    set: {
      name: "Temporal Forces",
      releaseDate: "2024-03-22"
    }
  },
  {
    id: "sv05-050",
    name: "Kyogre",
    supertype: "Pokémon",
    hp: "150",
    images: {
      small: "https://images.pokemontcg.io/sv05/50.png",
      large: "https://images.pokemontcg.io/sv05/50_hires.png"
    },
    retreatCost: ["Colorless", "Colorless", "Colorless"],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    set: {
      name: "Temporal Forces",
      releaseDate: "2024-03-22"
    }
  },
  {
    id: "sv04-007",
    name: "Mew ex",
    supertype: "Pokémon",
    hp: "170",
    images: {
      small: "https://images.pokemontcg.io/sv04/7.png",
      large: "https://images.pokemontcg.io/sv04/7_hires.png"
    },
    retreatCost: [],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Paradox Rift",
      releaseDate: "2023-11-03"
    }
  },
  {
    id: "sv04-056",
    name: "Gengar ex",
    supertype: "Pokémon",
    hp: "280",
    images: {
      small: "https://images.pokemontcg.io/sv04/56.png",
      large: "https://images.pokemontcg.io/sv04/56_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Paradox Rift",
      releaseDate: "2023-11-03"
    }
  },
  {
    id: "sv03pt5-003",
    name: "Blastoise ex",
    supertype: "Pokémon",
    hp: "330",
    images: {
      small: "https://images.pokemontcg.io/sv03pt5/3.png",
      large: "https://images.pokemontcg.io/sv03pt5/3_hires.png"
    },
    retreatCost: ["Colorless", "Colorless", "Colorless"],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    set: {
      name: "151",
      releaseDate: "2023-09-22"
    }
  },
  {
    id: "sv03pt5-025",
    name: "Pikachu",
    supertype: "Pokémon",
    hp: "60",
    images: {
      small: "https://images.pokemontcg.io/sv03pt5/25.png",
      large: "https://images.pokemontcg.io/sv03pt5/25_hires.png"
    },
    retreatCost: ["Colorless"],
    weaknesses: [{ type: "Fighting", value: "×2" }],
    resistances: [],
    set: {
      name: "151",
      releaseDate: "2023-09-22"
    }
  },
  {
    id: "sv03pt5-150",
    name: "Mewtwo ex",
    supertype: "Pokémon",
    hp: "310",
    images: {
      small: "https://images.pokemontcg.io/sv03pt5/150.png",
      large: "https://images.pokemontcg.io/sv03pt5/150_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "151",
      releaseDate: "2023-09-22"
    }
  },
  {
    id: "sv03-006",
    name: "Charizard ex",
    supertype: "Pokémon",
    hp: "330",
    images: {
      small: "https://images.pokemontcg.io/sv03/6.png",
      large: "https://images.pokemontcg.io/sv03/6_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Water", value: "×2" }],
    resistances: [],
    set: {
      name: "Obsidian Flames",
      releaseDate: "2023-08-11"
    }
  },
  {
    id: "sv03-042",
    name: "Gyarados",
    supertype: "Pokémon",
    hp: "180",
    images: {
      small: "https://images.pokemontcg.io/sv03/42.png",
      large: "https://images.pokemontcg.io/sv03/42_hires.png"
    },
    retreatCost: ["Colorless", "Colorless", "Colorless"],
    weaknesses: [{ type: "Lightning", value: "×2" }],
    resistances: [],
    set: {
      name: "Obsidian Flames",
      releaseDate: "2023-08-11"
    }
  },
  {
    id: "sv03-101",
    name: "Alakazam ex",
    supertype: "Pokémon",
    hp: "260",
    images: {
      small: "https://images.pokemontcg.io/sv03/101.png",
      large: "https://images.pokemontcg.io/sv03/101_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Darkness", value: "×2" }],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Obsidian Flames",
      releaseDate: "2023-08-11"
    }
  },
  {
    id: "sv03-133",
    name: "Dragonite",
    supertype: "Pokémon",
    hp: "180",
    images: {
      small: "https://images.pokemontcg.io/sv03/133.png",
      large: "https://images.pokemontcg.io/sv03/133_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [],
    resistances: [{ type: "Fighting", value: "-30" }],
    set: {
      name: "Obsidian Flames",
      releaseDate: "2023-08-11"
    }
  },
  {
    id: "sv02-012",
    name: "Gardevoir ex",
    supertype: "Pokémon",
    hp: "280",
    images: {
      small: "https://images.pokemontcg.io/sv02/12.png",
      large: "https://images.pokemontcg.io/sv02/12_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Metal", value: "×2" }],
    resistances: [],
    set: {
      name: "Paldea Evolved",
      releaseDate: "2023-06-09"
    }
  },
  {
    id: "sv02-088",
    name: "Scizor",
    supertype: "Pokémon",
    hp: "140",
    images: {
      small: "https://images.pokemontcg.io/sv02/88.png",
      large: "https://images.pokemontcg.io/sv02/88_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [{ type: "Grass", value: "-30" }],
    set: {
      name: "Paldea Evolved",
      releaseDate: "2023-06-09"
    }
  },
  {
    id: "sv01-001",
    name: "Sceptile ex",
    supertype: "Pokémon",
    hp: "270",
    images: {
      small: "https://images.pokemontcg.io/sv01/1.png",
      large: "https://images.pokemontcg.io/sv01/1_hires.png"
    },
    retreatCost: ["Colorless", "Colorless"],
    weaknesses: [{ type: "Fire", value: "×2" }],
    resistances: [],
    set: {
      name: "Scarlet & Violet",
      releaseDate: "2023-03-31"
    }
  }
];
