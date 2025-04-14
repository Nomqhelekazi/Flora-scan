export interface Fauna {
  id: string
  name: string
  scientificName: string
  type: "bird" | "insect" | "mammal" | "reptile" | "amphibian" | "other"
  description?: string
  imageUrl?: string
  conservationStatus?: "least concern" | "near threatened" | "vulnerable" | "endangered" | "critically endangered"
  habitat?: string[]
  diet?: string[]
  seasonalPresence?: "year-round" | "spring" | "summer" | "autumn" | "winter" | "migratory"
}

export const fauna: Fauna[] = [
  {
    id: "common-swift",
    name: "Common Swift",
    scientificName: "Apus apus",
    type: "bird",
    description:
      "A medium-sized aerial bird, which is a superb flier that spends most of its life in the air, even sleeping and mating while flying.",
    habitat: ["urban areas", "woodland edges", "open countryside"],
    diet: ["flying insects", "airborne spiders"],
    seasonalPresence: "summer",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20swift%20%28Apus%20apus%29-88kET8Yyjl67yhlwFmBKI5fXGk1GC9.jpeg",
  },
  {
    id: "eurasian-hobby",
    name: "Eurasian Hobby",
    scientificName: "Falco subbuteo",
    type: "bird",
    description: "A small, slender falcon with long pointed wings. It's known for its agility and speed in flight.",
    habitat: ["woodland edges", "farmland", "heathland"],
    diet: ["small birds", "large insects", "dragonflies"],
    seasonalPresence: "summer",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eurasian%20Hobby%20%28Falco%20subbuteo%29-2Pi2qZHyQW4qvly0UDS3w733LXhawt.jpeg",
  },
  {
    id: "european-green-woodpecker",
    name: "European Green Woodpecker",
    scientificName: "Picus viridis",
    type: "bird",
    description:
      "A large woodpecker with a bright green back, yellow rump, and red crown. Often seen feeding on ants on the ground.",
    habitat: ["woodlands", "parks", "gardens"],
    diet: ["ants", "other insects"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/European%20Green%20Woodpecker%20%28Picus%20viridis%29-zP0lqqwlRgadnxoVl5987tM3JiWw9k.jpeg",
  },
  {
    id: "long-eared-owl",
    name: "Long-eared Owl",
    scientificName: "Asio otus",
    type: "bird",
    description:
      "A medium-sized owl with distinctive ear tufts, which are actually feathers. It's primarily nocturnal and roosts in dense vegetation.",
    habitat: ["coniferous forests", "woodland edges", "hedgerows"],
    diet: ["small mammals", "small birds"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Long-eared%20owl%20%28Asio%20otus%29-U1MRbzGjOGU9C54eKSty4tQkTtGKEv.jpeg",
  },
  {
    id: "eurasian-sparrowhawk",
    name: "Eurasian Sparrowhawk",
    scientificName: "Accipiter nisus",
    type: "bird",
    description:
      "A small hawk with short, broad wings and a long tail, adapted for hunting in confined spaces like dense woodland.",
    habitat: ["woodlands", "urban areas", "gardens"],
    diet: ["small birds"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eurasian%20Sparrowhawk%20%28Accipiter%20nisus%29-d0PYB02gTW2k4vPn4RlXF62FT1yVD5.jpeg",
  },
  {
    id: "black-tailed-godwit",
    name: "Black-tailed Godwit",
    scientificName: "Limosa limosa",
    type: "bird",
    description:
      "A large, long-legged, long-billed wading bird. During breeding season, it has a bright orange-brown chest and neck.",
    habitat: ["wetlands", "marshes", "wet meadows"],
    diet: ["insects", "worms", "mollusks"],
    seasonalPresence: "migratory",
    conservationStatus: "near threatened",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black-tailed%20Godwit%20%28%20Limosa%20limosa%20%29-aHQ2tkhXNpW6tnYbInCZD6kulIpiVi.jpeg",
  },
  {
    id: "song-thrush",
    name: "Song Thrush",
    scientificName: "Turdus philomelos",
    type: "bird",
    description: "A medium-sized thrush with spotted underparts and a beautiful, repetitive song.",
    habitat: ["woodlands", "gardens", "parks"],
    diet: ["worms", "snails", "fruits", "berries"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Song%20thrush%20%28Turdus%20philomelos%29-1tV7DsAawTEhLd7YNuD4jwxw65yVdV.jpeg",
  },
  {
    id: "black-redstart",
    name: "Black Redstart",
    scientificName: "Phoenicurus ochruros",
    type: "bird",
    description:
      "A small robin-sized bird that often shows a red tail and dark body. It's adapted to urban environments.",
    habitat: ["urban areas", "industrial sites", "rocky areas"],
    diet: ["insects", "spiders", "berries"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Redstart%20%28Phoenicurus%20ochruros%29-Czau8ZRBSb5ckY04sgLiS3qJ1BcMB3.webp",
  },
  {
    id: "house-sparrow",
    name: "House Sparrow",
    scientificName: "Passer domesticus",
    type: "bird",
    description:
      "A small, plump bird that has adapted to living near human habitations. Males have grey crowns, black bibs, and chestnut backs.",
    habitat: ["urban areas", "farmland", "gardens"],
    diet: ["seeds", "insects", "scraps"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/House%20Sparrow%20%28Passer%20domesticus%29-wo5X9mlB8yxaNxrTRBNCvoFVh14X2P.jpeg",
  },
  {
    id: "eurasian-nuthatch",
    name: "Eurasian Nuthatch",
    scientificName: "Sitta europaea",
    type: "bird",
    description:
      "A small, compact bird with a large head, short tail, and strong bill. It can climb down trees head-first.",
    habitat: ["woodlands", "parks", "gardens with mature trees"],
    diet: ["insects", "nuts", "seeds"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eurasian%20nuthatch%20%28Sitta%20europaea%20%29-MQ8APmOfbh9XcwelDFlm6cwqgdeliM.jpeg",
  },
  {
    id: "oystercatcher",
    name: "Oystercatcher",
    scientificName: "Haematopus ostralegus",
    type: "bird",
    description: "A distinctive black and white wading bird with a long, orange-red bill, used for opening shellfish.",
    habitat: ["coastal areas", "estuaries", "inland wetlands"],
    diet: ["shellfish", "worms", "insects"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oystercatcher%20%28Haematopus%20ostralegus%29-0lkotP69X5fvUp4u22Ma5sjRqw0DMB.jpeg",
  },
  {
    id: "migrant-hawker",
    name: "Migrant Hawker",
    scientificName: "Aeshna mixta",
    type: "insect",
    description: "A medium-sized dragonfly that is a late summer migrant to northern Europe.",
    habitat: ["ponds", "lakes", "slow-flowing rivers"],
    diet: ["small flying insects"],
    seasonalPresence: "summer",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Migrant%20Hawker%20%28Aeshna%20mixta%29-YxLApHCe4Cq2nfAXBjNM3S3xf8KsH8.jpeg",
  },
  {
    id: "red-admiral",
    name: "Red Admiral",
    scientificName: "Vanessa atalanta",
    type: "insect",
    description: "A striking butterfly with black wings, red bands, and white spots. It's a strong flier and migrant.",
    habitat: ["gardens", "parks", "woodland edges"],
    diet: ["nectar", "rotting fruit", "tree sap"],
    seasonalPresence: "migratory",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Red%20Admiral%20%28Vanessa%20atalanta%29-dhuuhiLzTcq5MkFNVDp87GhNWEYqdD.jpeg",
  },
  {
    id: "peacock-butterfly",
    name: "Peacock Butterfly",
    scientificName: "Aglais io",
    type: "insect",
    description: "A colorful butterfly with distinctive eyespots on its wings, which are used to scare predators.",
    habitat: ["gardens", "meadows", "woodland edges"],
    diet: ["nectar", "rotting fruit"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peacock%20butterfly%20%28Aglais%20io%29-yV5TuFzMwPCamFjymNZSfihL142onv.jpeg",
  },
  {
    id: "common-blue",
    name: "Common Blue",
    scientificName: "Polyommatus icarus",
    type: "insect",
    description:
      "A small butterfly with blue wings in males and brown wings in females, both with orange spots on the hindwings.",
    habitat: ["grasslands", "meadows", "heathlands"],
    diet: ["nectar"],
    seasonalPresence: "summer",
  },
  {
    id: "oranje-zandoogje",
    name: "Oranje Zandoogje",
    scientificName: "Pyronia tithonus",
    type: "insect",
    description: "A butterfly with orange wings and a dark border, also known as the Gatekeeper or Hedge Brown.",
    habitat: ["grasslands", "hedgerows", "woodland edges"],
    diet: ["nectar"],
    seasonalPresence: "summer",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oranje%20zandoogje%20%28Pyronia%20tithonus%29-isXbaUlZ0xBiDq03rKhiQXpYw71yFZ.jpeg",
  },
  {
    id: "common-darter",
    name: "Common Darter",
    scientificName: "Sympetrum fonscolombi",
    type: "insect",
    description: "A medium-sized dragonfly with a red abdomen in males and yellowish-brown in females.",
    habitat: ["ponds", "lakes", "slow-flowing rivers"],
    diet: ["small flying insects"],
    seasonalPresence: "summer",
  },
  {
    id: "western-honey-bee",
    name: "Western Honey Bee",
    scientificName: "Apis mellifera",
    type: "insect",
    description: "A social bee that produces honey and is vital for pollination of many plants.",
    habitat: ["various habitats near flowering plants"],
    diet: ["nectar", "pollen"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Western%20Honey%20Bee%20%28Apis%20mellifera%29-8J9HwJtt8oNlREOUSfTGTcJmcdi2Zr.jpeg",
  },
  {
    id: "asian-lady-beetle",
    name: "Asian Lady Beetle",
    scientificName: "Harmonia axyridis",
    type: "insect",
    description: "A variable-colored ladybird beetle introduced for pest control, now widespread.",
    habitat: ["gardens", "agricultural areas", "woodlands"],
    diet: ["aphids", "scale insects"],
    seasonalPresence: "year-round",
  },
  {
    id: "cross-orbweaver",
    name: "Cross Orbweaver",
    scientificName: "Araneus diadematus",
    type: "other",
    description: "A common garden spider that builds orb webs. It has a distinctive cross pattern on its abdomen.",
    habitat: ["gardens", "woodlands", "hedgerows"],
    diet: ["flying insects"],
    seasonalPresence: "summer",
  },
  {
    id: "daubentons-bat",
    name: "Daubenton's Bat",
    scientificName: "Myotis daubentonii",
    type: "mammal",
    description:
      "A medium-sized bat that specializes in hunting over water, often skimming the surface to catch insects.",
    habitat: ["near water bodies", "woodlands"],
    diet: ["aquatic insects", "midges"],
    seasonalPresence: "year-round",
  },
  {
    id: "common-pipistrelle",
    name: "Common Pipistrelle",
    scientificName: "Pipistrellus pipistrellus",
    type: "mammal",
    description:
      "One of the smallest European bats, with rapid, jerky flight. Often seen around streetlights hunting insects.",
    habitat: ["urban areas", "woodlands", "farmland"],
    diet: ["small flying insects"],
    seasonalPresence: "year-round",
  },
  {
    id: "common-noctule",
    name: "Common Noctule",
    scientificName: "Nyctalus noctula",
    type: "mammal",
    description: "A large bat with long, narrow wings. It flies high and fast, often emerging before sunset.",
    habitat: ["woodlands", "parklands", "urban areas"],
    diet: ["large flying insects"],
    seasonalPresence: "year-round",
  },
  {
    id: "nathusius-pipistrelle",
    name: "Nathusius' Pipistrelle",
    scientificName: "Pipistrellus nathusii",
    type: "mammal",
    description:
      "A small bat similar to the Common Pipistrelle but slightly larger. It's known for long-distance migration.",
    habitat: ["woodlands", "wetlands", "parklands"],
    diet: ["small flying insects"],
    seasonalPresence: "migratory",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nathusius%27%20Pipistrelle%20%28Pipistrellus%20nathusii%29-GuqFr68Gcp9ofnS97EAqHkvPw4EZwp.jpeg",
  },
  {
    id: "speckled-wood",
    name: "Speckled Wood",
    scientificName: "Pararge aegeria",
    type: "insect",
    description: "A butterfly that prefers dappled woodland shade. It has brown wings with cream spots.",
    habitat: ["woodlands", "shaded hedgerows"],
    diet: ["nectar", "honeydew"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Speckled%20Wood%20%28Pararge%20aegeria%29-jQLwKr0dSVyARubOJtAWrWWPBhMUoi.jpeg",
  },
  {
    id: "tawny-owl",
    name: "Tawny Owl",
    scientificName: "Strix aluco",
    type: "bird",
    description:
      "A medium-sized owl with a rounded body and head. It's primarily nocturnal and has a distinctive 'twit-twoo' call.",
    habitat: ["woodlands", "parks", "gardens with mature trees"],
    diet: ["small mammals", "birds", "large insects"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tawny%20Owl%20%28Strix%20aluco%29-rTnS91MGo8Qsd6n7NDpGCTFjcaN24u.jpeg",
  },
  {
    id: "orange-tip",
    name: "Orange Tip",
    scientificName: "Anthocharis cardamines",
    type: "insect",
    description:
      "A spring butterfly where males have distinctive orange tips to their forewings. Females have black tips.",
    habitat: ["meadows", "woodland edges", "hedgerows"],
    diet: ["nectar", "plant sap"],
    seasonalPresence: "spring",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Tip%20%28Anthocharis%20cardamines%29-Gz7CJ8LuOPRBoyVQsoRQSH9bHllaU2.jpeg",
  },
  {
    id: "common-kestrel",
    name: "Common Kestrel",
    scientificName: "Falco tinnunculus",
    type: "bird",
    description:
      "A small falcon known for its distinctive hovering hunting technique. It has pointed wings and a long tail.",
    habitat: ["open countryside", "farmland", "urban areas"],
    diet: ["small mammals", "large insects", "small birds"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Common%20kestrel%20%28Falco%20tinnunculus%29-1dpgO0q1xb2X0swoAupl8rM7mX3ihd.jpeg",
  },
  {
    id: "brown-argus",
    name: "Brown Argus",
    scientificName: "Aricia agestis",
    type: "insect",
    description:
      "A small butterfly with brown wings and orange spots along the edges. Often confused with female Common Blues.",
    habitat: ["chalk grasslands", "heathlands"],
    diet: ["nectar"],
    seasonalPresence: "summer",
  },
  {
    id: "eurasian-bittern",
    name: "Eurasian Bittern",
    scientificName: "Botaurus stellaris",
    type: "bird",
    description: "A secretive heron with excellent camouflage. It's known for its booming call in spring.",
    habitat: ["reedbeds", "marshes"],
    diet: ["fish", "amphibians", "insects"],
    seasonalPresence: "year-round",
    conservationStatus: "near threatened",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eurasian%20Bittern%20%28Botaurus%20stellaris%29-6J3MhycyPkBrftSQ4aqyzfmW1yXicg.jpeg",
  },
  {
    id: "comma-butterfly",
    name: "Comma Butterfly",
    scientificName: "Polygonia c-album",
    type: "insect",
    description: "A distinctive butterfly with jagged wing edges and a small white 'comma' mark on the underwing.",
    habitat: ["woodland edges", "gardens", "hedgerows"],
    diet: ["nectar", "rotting fruit", "tree sap"],
    seasonalPresence: "year-round",
  },
  {
    id: "red-tailed-bumblebee",
    name: "Red-tailed Bumblebee",
    scientificName: "Bombus lapidarius",
    type: "insect",
    description: "A large, black bumblebee with a bright red tail. Queens and workers look similar.",
    habitat: ["gardens", "meadows", "heathlands"],
    diet: ["nectar", "pollen"],
    seasonalPresence: "year-round",
  },
  {
    id: "marmalade-hoverfly",
    name: "Marmalade Hoverfly",
    scientificName: "Episyrphus balteatus",
    type: "insect",
    description:
      "A common hoverfly with orange and black bands on its abdomen. It's an important pollinator and aphid predator.",
    habitat: ["gardens", "meadows", "woodlands"],
    diet: ["nectar", "pollen", "aphids (larvae)"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marmalade%20hoverfly%20%28Episyrphus%20balteatus%29-02JyfbrPHBQhYRRJqS0Gtq25sYZLHj.jpeg",
  },
  {
    id: "southern-oak-bush-cricket",
    name: "Southern Oak Bush Cricket",
    scientificName: "Meconema meridionale",
    type: "insect",
    description:
      "A small, green bush cricket that's relatively new to northern Europe, spreading due to climate change.",
    habitat: ["deciduous trees", "especially oaks"],
    diet: ["small insects", "plant material"],
    seasonalPresence: "summer",
  },
  {
    id: "rose-ringed-parakeet",
    name: "Rose-ringed Parakeet",
    scientificName: "Psittacula krameri",
    type: "bird",
    description:
      "A bright green parakeet with a red bill and, in males, a rose-colored neck ring. It's an introduced species now established in urban areas.",
    habitat: ["urban parks", "gardens", "woodlands"],
    diet: ["fruits", "seeds", "berries", "nuts"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rose-ringed%20parakeet%20%28Psittacula%20krameri%29-SmVDTOJ8vJnxtx0PQjTEXGElo629DB.jpeg",
  },
  {
    id: "european-robin",
    name: "European Robin",
    scientificName: "Erithacus rubecula",
    type: "bird",
    description:
      "A small, round bird with a distinctive red-orange breast. Known for its bold behavior and melodious song.",
    habitat: ["woodlands", "gardens", "parks"],
    diet: ["insects", "worms", "fruits", "seeds"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/European%20Robin%20%28Erithacus%20rubecula%29-yekVa9TYMqHRdkFWkFNAEBJk3VPsn2.jpeg",
  },
  {
    id: "adonis-ladybird",
    name: "Adonis Ladybird",
    scientificName: "Hippodamia variegata",
    type: "insect",
    description: "A small ladybird with variable spotting patterns, typically red with black spots.",
    habitat: ["grasslands", "meadows", "agricultural areas"],
    diet: ["aphids", "scale insects"],
    seasonalPresence: "summer",
  },
  {
    id: "european-stag-beetle",
    name: "European Stag Beetle",
    scientificName: "Lucanus cervus",
    type: "insect",
    description: "One of the largest beetles in Europe, with males having enlarged mandibles resembling deer antlers.",
    habitat: ["deciduous woodlands", "parks", "gardens"],
    diet: ["tree sap", "rotting wood (larvae)"],
    seasonalPresence: "summer",
    conservationStatus: "near threatened",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/European%20Stag%20Beetle%20%28Lucanus%20cervus%29-gmuXINCssZy1rjwRa0MtsPVJKR7dmk.jpeg",
  },
  {
    id: "great-egret",
    name: "Great Egret",
    scientificName: "Ardea alba",
    type: "bird",
    description:
      "A large, white heron with a yellow bill and black legs. It's becoming more common in northern Europe.",
    habitat: ["wetlands", "marshes", "lakes", "rivers"],
    diet: ["fish", "amphibians", "small mammals"],
    seasonalPresence: "year-round",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Great%20Egret%20%28%20Ardea%20alba%29-8bZvMzs8rQGudB3e3jTaegnpXa959X.jpeg",
  },
  {
    id: "common-sandpiper",
    name: "Common Sandpiper",
    scientificName: "Actitis hypoleucos",
    type: "bird",
    description:
      "A small wading bird with a distinctive bobbing motion. It has a brown upper body and white underparts.",
    habitat: ["riverbanks", "lakeshores", "coastal areas"],
    diet: ["insects", "crustaceans", "small mollusks"],
    seasonalPresence: "summer",
  },
  {
    id: "swallow",
    name: "Swallow",
    scientificName: "Hirundo rustica",
    type: "bird",
    description:
      "A small bird with a distinctive forked tail, blue upperparts, and red throat. Known for its aerial acrobatics.",
    habitat: ["farmland", "rural buildings", "near water"],
    diet: ["flying insects"],
    seasonalPresence: "summer",
  },
  {
    id: "blackbird",
    name: "Blackbird",
    scientificName: "Turdus merula",
    type: "bird",
    description: "A common garden bird. Males are all black with a yellow bill, while females are brown.",
    habitat: ["gardens", "parks", "woodlands", "farmland"],
    diet: ["worms", "insects", "fruits", "berries"],
    seasonalPresence: "year-round",
  },
  {
    id: "bumble-bee",
    name: "Bumble Bee",
    scientificName: "Bombus spp.",
    type: "insect",
    description:
      "Large, fuzzy bees that are important pollinators. They live in small colonies and have a distinctive buzzing sound.",
    habitat: ["gardens", "meadows", "woodlands"],
    diet: ["nectar", "pollen"],
    seasonalPresence: "year-round",
  },
  {
    id: "ladybug",
    name: "Ladybug",
    scientificName: "Coccinellidae",
    type: "insect",
    description: "Small, round beetles, often red with black spots. They're beneficial predators of garden pests.",
    habitat: ["gardens", "meadows", "woodlands", "agricultural areas"],
    diet: ["aphids", "scale insects"],
    seasonalPresence: "year-round",
  },
  {
    id: "honey-bee",
    name: "Honey Bee",
    scientificName: "Apis mellifera",
    type: "insect",
    description:
      "Social bees that live in large colonies and produce honey. They're crucial pollinators for many plants.",
    habitat: ["various habitats near flowering plants"],
    diet: ["nectar", "pollen"],
    seasonalPresence: "year-round",
  },
  {
    id: "squirrel",
    name: "Grey Squirrel",
    scientificName: "Sciurus carolinensis",
    type: "mammal",
    description:
      "An introduced species that has largely replaced the native red squirrel. It has grey fur and a bushy tail.",
    habitat: ["woodlands", "parks", "gardens"],
    diet: ["nuts", "seeds", "fruits", "buds", "fungi"],
    seasonalPresence: "year-round",
  },
  {
    id: "green-lacewing",
    name: "Green Lacewing",
    scientificName: "Chrysoperla carnea",
    type: "insect",
    description:
      "A delicate insect with transparent, net-like wings and a green body. Their larvae are voracious predators of garden pests.",
    habitat: ["gardens", "meadows", "woodlands"],
    diet: ["nectar", "pollen", "aphids (larvae)"],
    seasonalPresence: "year-round",
  },
  {
    id: "hare",
    name: "European Hare",
    scientificName: "Lepus europaeus",
    type: "mammal",
    description:
      "A large, long-eared mammal similar to rabbits but with longer legs and ears. They don't dig burrows but rest in shallow depressions.",
    habitat: ["open countryside", "farmland", "grasslands"],
    diet: ["grasses", "herbs", "crops"],
    seasonalPresence: "year-round",
  },
  {
    id: "mole",
    name: "European Mole",
    scientificName: "Talpa europaea",
    type: "mammal",
    description:
      "A small, burrowing mammal with velvety fur, a pointed snout, and large front paws adapted for digging.",
    habitat: ["soil-rich areas", "gardens", "meadows", "woodlands"],
    diet: ["earthworms", "insect larvae"],
    seasonalPresence: "year-round",
  },
  {
    id: "hedgehog",
    name: "European Hedgehog",
    scientificName: "Erinaceus europaeus",
    type: "mammal",
    description:
      "A small, spiny mammal that rolls into a ball when threatened. They're nocturnal and hibernate in winter.",
    habitat: ["gardens", "hedgerows", "woodlands", "grasslands"],
    diet: ["insects", "worms", "snails", "slugs", "berries"],
    seasonalPresence: "year-round",
    conservationStatus: "vulnerable",
  },
  {
    id: "moth",
    name: "Moth",
    scientificName: "Lepidoptera",
    type: "insect",
    description: "A diverse group of insects related to butterflies. Many are nocturnal and have feathery antennae.",
    habitat: ["various habitats"],
    diet: ["nectar", "plant material"],
    seasonalPresence: "year-round",
  },
  {
    id: "great-spotted-woodpecker",
    name: "Great Spotted Woodpecker",
    scientificName: "Dendrocopos major",
    type: "bird",
    description:
      "A black and white woodpecker with a red patch on the lower belly and, in males, on the nape. Known for drumming on trees.",
    habitat: ["woodlands", "parks", "gardens with mature trees"],
    diet: ["insects", "seeds", "nuts"],
    seasonalPresence: "year-round",
  },
  {
    id: "white-stork",
    name: "White Stork",
    scientificName: "Ciconia ciconia",
    type: "bird",
    description:
      "A large wading bird with white plumage, black wing feathers, and long red legs and bill. Often nests on buildings.",
    habitat: ["wetlands", "meadows", "agricultural areas"],
    diet: ["amphibians", "insects", "small mammals"],
    seasonalPresence: "summer",
  },
  {
    id: "eurasian-collared-dove",
    name: "Eurasian Collared Dove",
    scientificName: "Streptopelia decaocto",
    type: "bird",
    description:
      "A pale grey dove with a distinctive black collar on the neck. It has expanded its range across Europe in recent decades.",
    habitat: ["urban areas", "gardens", "farmland"],
    diet: ["seeds", "grains", "berries"],
    seasonalPresence: "year-round",
  },
  {
    id: "black-woodpecker",
    name: "Black Woodpecker",
    scientificName: "Dryocopus martius",
    type: "bird",
    description:
      "The largest European woodpecker, all black with a red crown (males) or just a red patch on the nape (females).",
    habitat: ["mature forests", "especially with beech and pine"],
    diet: ["wood-boring insects", "ants"],
    seasonalPresence: "year-round",
  },
  {
    id: "black-tern",
    name: "Black Tern",
    scientificName: "Chlidonias niger",
    type: "bird",
    description:
      "A small tern with black head and body in breeding plumage. It feeds by picking insects from the water surface.",
    habitat: ["freshwater marshes", "lakes", "slow-flowing rivers"],
    diet: ["insects", "small fish"],
    seasonalPresence: "summer",
  },
  {
    id: "green-sandpiper",
    name: "Green Sandpiper",
    scientificName: "Tringa ochropus",
    type: "bird",
    description:
      "A medium-sized wading bird with dark upperparts, white underparts, and a distinctive white rump visible in flight.",
    habitat: ["freshwater wetlands", "small streams", "ponds"],
    diet: ["aquatic insects", "small crustaceans"],
    seasonalPresence: "migratory",
  },
  {
    id: "ruff",
    name: "Ruff",
    scientificName: "Calidris pugnax",
    type: "bird",
    description: "A medium-sized wading bird where males develop an elaborate ruff of feathers during breeding season.",
    habitat: ["wet grasslands", "marshes", "mudflats"],
    diet: ["insects", "small invertebrates"],
    seasonalPresence: "migratory",
  },
  {
    id: "stock-dove",
    name: "Stock Dove",
    scientificName: "Columba oenas",
    type: "bird",
    description:
      "A pigeon similar to the wood pigeon but smaller and lacking white patches. It has a greenish sheen on the neck.",
    habitat: ["woodlands", "parkland", "farmland with trees"],
    diet: ["seeds", "grains", "plant material"],
    seasonalPresence: "year-round",
  },
  {
    id: "common-redshank",
    name: "Common Redshank",
    scientificName: "Tringa totanus",
    type: "bird",
    description:
      "A medium-sized wading bird with distinctive red legs. It's noisy and often alerts other birds to danger.",
    habitat: ["coastal marshes", "wet grasslands", "estuaries"],
    diet: ["worms", "mollusks", "crustaceans"],
    seasonalPresence: "year-round",
  },
  {
    id: "short-eared-owl",
    name: "Short-eared Owl",
    scientificName: "Asio flammeus",
    type: "bird",
    description:
      "A medium-sized owl that's often active during daylight, especially at dawn and dusk. It has small ear tufts.",
    habitat: ["open countryside", "marshes", "moorland"],
    diet: ["small mammals", "especially voles"],
    seasonalPresence: "year-round",
  },
  {
    id: "common-cuckoo",
    name: "Common Cuckoo",
    scientificName: "Cuculus canorus",
    type: "bird",
    description: "Famous for laying eggs in other birds' nests. Males have the distinctive 'cuckoo' call.",
    habitat: ["woodlands", "marshes", "moorland"],
    diet: ["insects", "especially hairy caterpillars"],
    seasonalPresence: "summer",
  },
  {
    id: "little-tern",
    name: "Little Tern",
    scientificName: "Sternula albifrons",
    type: "bird",
    description:
      "The smallest European tern, with a yellow bill with a black tip, and a white forehead in breeding plumage.",
    habitat: ["coastal areas", "beaches", "estuaries"],
    diet: ["small fish", "crustaceans"],
    seasonalPresence: "summer",
    conservationStatus: "vulnerable",
  },
  {
    id: "jack-snipe",
    name: "Jack Snipe",
    scientificName: "Lymnocryptes minimus",
    type: "bird",
    description:
      "A small, secretive wading bird with a relatively short bill and distinctive bouncing movement when feeding.",
    habitat: ["marshes", "wet meadows", "bogs"],
    diet: ["insects", "worms", "plant material"],
    seasonalPresence: "winter",
  },
  {
    id: "little-crake",
    name: "Little Crake",
    scientificName: "Porzana parva",
    type: "bird",
    description: "A small, secretive rail with a short bill. Males have a blue-grey face and underparts.",
    habitat: ["dense reedbeds", "marshes"],
    diet: ["insects", "small aquatic animals", "plant material"],
    seasonalPresence: "summer",
    conservationStatus: "vulnerable",
  },
]

// Function to get fauna by ID
export function getFaunaById(id: string): Fauna | undefined {
  return fauna.find((animal) => animal.id === id)
}

// Function to get fauna by type
export function getFaunaByType(type: Fauna["type"]): Fauna[] {
  return fauna.filter((animal) => animal.type === type)
}

// Function to get fauna that interact with specific plants
export function getFaunaByPlantInteraction(plantId: string): Fauna[] {
  // This would typically query a database for fauna-flora relationships
  // For now, we'll return a subset based on common interactions
  const plantFaunaMap: Record<string, string[]> = {
    "common-yarrow": ["western-honey-bee", "red-admiral", "ladybug"],
    "water-mint": ["migrant-hawker", "common-darter", "western-honey-bee"],
    "winter-aconite": ["western-honey-bee", "bumble-bee"],
    "water-avens": ["western-honey-bee", "marmalade-hoverfly"],
    "sweet-woodruff": ["bumble-bee", "green-lacewing"],
    "white-wood-rush": ["european-robin", "blackbird"],
    sycamore: ["eurasian-nuthatch", "great-spotted-woodpecker", "common-pipistrelle"],
    "yellow-flag": ["migrant-hawker", "common-darter", "oystercatcher"],
    "wych-elm": ["eurasian-nuthatch", "comma-butterfly"],
    "virginia-creeper": ["blackbird", "european-robin", "house-sparrow"],
    "sweet-violet": ["orange-tip", "peacock-butterfly", "bumble-bee"],
    // Add more mappings as needed
  }

  const faunaIds = plantFaunaMap[plantId] || []
  return fauna.filter((animal) => faunaIds.includes(animal.id))
}
