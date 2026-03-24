export interface Place {
  id: string
  name: string
  country: string
  fact: string
  category: 'eerie' | 'hidden-gem' | 'natural-wonder' | 'man-made' | 'abandoned'
  imageUrl: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const places: Place[] = [
  {
    id: '1',
    name: 'Door to Hell',
    country: 'Turkmenistan',
    fact: 'This massive burning crater has been continuously on fire for over 50 years after a Soviet drilling accident collapsed the ground into a natural gas cavern.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=1200&fit=crop',
    coordinates: { lat: 40.2528, lng: 58.4392 }
  },
  {
    id: '2',
    name: 'Socotra Island',
    country: 'Yemen',
    fact: 'One-third of this island\'s plant life exists nowhere else on Earth, including the bizarre dragon\'s blood tree with its umbrella-shaped canopy.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 12.4634, lng: 53.8238 }
  },
  {
    id: '3',
    name: 'Salar de Uyuni',
    country: 'Bolivia',
    fact: 'World\'s largest salt flat creates a perfect mirror effect during rainy season, making it impossible to distinguish where the sky ends and earth begins.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop',
    coordinates: { lat: -20.1338, lng: -67.4891 }
  },
  {
    id: '4',
    name: 'Hashima Island',
    country: 'Japan',
    fact: 'This abandoned concrete island was once the most densely populated place on Earth, housing over 5,000 coal miners in a massive concrete city.',
    category: 'abandoned',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 32.6247, lng: 129.7397 }
  },
  {
    id: '5',
    name: 'Lake Hillier',
    country: 'Australia',
    fact: 'This naturally pink lake maintains its vibrant bubblegum color year-round, even when taken from the lake and put in containers.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: -34.0862, lng: 123.2143 }
  },
  {
    id: '6',
    name: 'Waitomo Glowworm Caves',
    country: 'New Zealand',
    fact: 'Thousands of bioluminescent glowworms create a starry night effect on the cave ceilings, making it look like you\'re walking through space.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: -38.2623, lng: 175.1055 }
  },
  {
    id: '7',
    name: 'Fly Geyser',
    country: 'USA',
    fact: 'This accidental geothermal geyser was created in 1964 when a well was drilled too deep, unleashing mineral-rich water that built these colorful terraces.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 40.8749, lng: -119.0370 }
  },
  {
    id: '8',
    name: 'Zhangjiajie National Forest',
    country: 'China',
    fact: 'These towering sandstone pillars inspired the floating mountains in Avatar, some reaching over 3,500 feet into the clouds.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 29.3170, lng: 110.4335 }
  },
  {
    id: '9',
    name: 'Pamukkale',
    country: 'Turkey',
    fact: 'These white travertine terraces have been healing visitors for thousands of years, with mineral-rich hot waters creating natural infinity pools.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 37.9275, lng: 29.1165 }
  },
  {
    id: '10',
    name: 'Mosquito Bay',
    country: 'Puerto Rico',
    fact: 'The brightest bioluminescent bay in the world contains up to 700,000 dinoflagellates per gallon of water, glowing blue with every movement.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 18.3198, lng: -65.3033 }
  },
  {
    id: '11',
    name: 'Paris Catacombs',
    country: 'France',
    fact: 'Beneath Paris streets lie the remains of over 6 million people, arranged in artistic patterns of skulls and bones stretching for miles.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  {
    id: '12',
    name: 'Kawah Ijen',
    country: 'Indonesia',
    fact: 'This volcano spews blue flames at night - the largest natural blue flame area in the world, caused by sulfuric gases igniting at 1,112°F.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: -8.0584, lng: 114.2421 }
  },
  {
    id: '13',
    name: 'Crystal Cave of Naica',
    country: 'Mexico',
    fact: 'These giant selenite crystals are the largest ever discovered, with some reaching 39 feet in length and weighing 55 tons.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 27.4958, lng: -108.9317 }
  },
  {
    id: '14',
    name: 'Crooked Forest',
    country: 'Poland',
    fact: 'No one knows why these 400 pine trees grow with a 90-degree bend at their base - theories range from gravity to human intervention to alien activity.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 53.3267, lng: 14.9233 }
  },
  {
    id: '15',
    name: 'Eye of the Sahara',
    country: 'Mauritania',
    fact: 'This massive 25-mile diameter geological formation is visible from space and was initially thought to be an asteroid impact crater.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 21.1249, lng: -11.4016 }
  },
  {
    id: '16',
    name: 'Island of the Dolls',
    country: 'Mexico',
    fact: 'Hundreds of haunted dolls hang from trees on this island, placed there by the island\'s former caretaker to appease the spirit of a drowned girl.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 19.4326, lng: -99.1332 }
  },
  {
    id: '17',
    name: 'Thor\'s Well',
    country: 'USA',
    fact: 'This natural hole in the Oregon coastline appears to drain the ocean during high tide, creating the illusion of a gateway to the underworld.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 44.2824, lng: -124.1134 }
  },
  {
    id: '18',
    name: 'Bamboo Grove of Arashiyama',
    country: 'Japan',
    fact: 'Walking through this bamboo forest creates a unique sound experience as the stalks creak and sway in the wind, like a natural bamboo orchestra.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 35.0170, lng: 135.6718 }
  },
  {
    id: '19',
    name: 'Red Beach',
    country: 'China',
    fact: 'This beach gets its incredible red color from a type of seaweed called Sueda, which turns bright crimson in autumn, covering the entire coastline.',
    category: 'natural-wonder',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 40.9876, lng: 121.8231 }
  },
  {
    id: '20',
    name: 'Aokigahara Forest',
    country: 'Japan',
    fact: 'Also known as the Sea of Trees, this dense forest at the base of Mt. Fuji is so thick that it blocks all wind and sound, creating an eerie silence.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 35.5433, lng: 138.6294 }
  },
  {
    id: '21',
    name: 'Glass Beach',
    country: 'USA',
    fact: 'What was once a trash dump is now a sparkling beach covered in smooth sea glass, created by decades of ocean tumbling broken bottles and pottery.',
    category: 'hidden-gem',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: 39.4459, lng: 123.8071 }
  },
  {
    id: '22',
    name: 'Blood Falls',
    country: 'Antarctica',
    fact: 'This five-story waterfall flows with blood-red water, colored by iron oxide and ancient microbes that have been trapped beneath the ice for 2 million years.',
    category: 'eerie',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    coordinates: { lat: -77.7167, lng: 162.2667 }
  }
]
