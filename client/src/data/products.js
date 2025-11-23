const products = [
  {
    id: "the-circlet-of-whispering-fate",
    name: "The Circlet Of Whispering Fate",
    price: null,
    priceDisplay: "COMING SOON",
    image: "/images/the-circlet-of-whispering-Fate.png",
    comingSoon: true,
    descShort: "A prophetic circlet of starlight silver studded with pulsing opals.",
    descLong: `TThe Circlet of Whispering Fate is a delicate yet potent crown, forged from starlight silver that gleams with a soft, iridescent sheen. It is crafted as an interwoven band of vines, symbolizing the tangled, intricate pathways of destiny. Instead of large gems, the circlet is studded with dozens of tiny, uncut opals that pulse with a faint inner light, each said to represent a critical crossroad in time. The most unique feature is the minute, almost invisible etching along the inner band—these are the whispers themselves, arcane symbols that change subtly based on the wearer's current direction in life.

    This artifact is one of profound prophecy and existential guidance, used by those whose decisions alter the course of history. When worn, the Circlet silences the noise of the mundane world, granting the wearer a rare form of intuitive insight—not a direct vision of the future, but a deep, resonant understanding of the consequences of their choices. It allows the wearer to perceive the subtle flow of destiny, acting as a profound psychic compass that guides them along the most significant path. It is the perfect tool for a leader who seeks not to control fate, but to navigate it with absolute precision.`
  },
  {
    id: "the-cuff-of-frozen-moonlight",
    name: "The Cuff Of Frozen Moonlight",
    price: 11999,
    priceDisplay: "$11,999",
    image: "/images/the-cuff-of-frozen-moonlight.png",
    descShort: "Glacial meteoric cuff with the Frozen Moonstone — cold elegance.",
    descLong: `The Cuff of Frozen Moonlight is masterfully forged from pure, glacial meteoric silver, its surface shimmering with the cool, blue-white luminescence of a winter night's frost. Its design is one of arresting, cold elegance, featuring delicate engravings that mimic hoarfrost tendrils and the faint outlines of the northern constellations. At its heart lies the 'Frozen Moonstone,' a singular gem that does not emit light, but rather captures and eternally suspends it, appearing like a fragment of timeless snowfall trapped within crystal, symbolizing an enduring and unchangeable truth.

    More than mere adornment, this artifact is renowned for its silent strength and absolute certainty, often serving as the emblem of a ruler who governs by unwavering wisdom. The cuff remains perpetually cold to the touch, a quality that stills the wearer's passions and compels them to approach every decision with glacial composure. Legend holds that it was forged during a total lunar eclipse, granting its owner an unshakeable clarity of mind and the power to see through the world's illusions, viewing all things under the honest, eternal light of the moon.`
  },
  {
    id: "the-gilded-gauntlets-of-the-sky-watcher",
    name: "The Gilded Gauntlets Of The Sky Watcher",
    price: 7999,
    priceDisplay: "$7,999",
    image: "/images/the-gilded-gauntlets-of-the-sky-watcher.png",
    badge: "UP TO 30% OFF",
    descShort: "Gilded gauntlets with Star Compass — celestial guidance.",
    descLong: `The Gilded Gauntlets of the Sky-Watcher are pieces of magnificent, articulated armor... (full text)`
  },
  {
    id: "the-grand-seal-of-lumina",
    name: "The Grand Seal Of Lumina",
    price: 6999,
    priceDisplay: "$6,999",
    image: "/images/the-grand-seal-of-lumina.png",
    badge: "UP TO 30% OFF",
    descShort: "A solar-gilded bronze seal — emblem of lawful sovereignty.",
    descLong: `The Grand Seal of Lumina is a disc of flawless, polished bronze, meticulously plated with solar gold harvested from ancient, forgotten mines. Its weight is significant, a tangible testament to the authority it represents. Engraved upon its face is a complex, symmetrical motif: a stylized depiction of the First Sunrise, where radiating lines of power emanate from a central, uncut diamond—the 'Eye of Dawn.' The Seal is held by a winding handle of obsidian, ensuring that the earthly darkness serves the celestial light, and its edges are ringed with inscriptions of protective, ancient Lumina script.

    This artifact is the absolute emblem of lawful sovereignty and unquestionable mandate. Legend claims that any document authenticated by the Lumina Seal is irreversible, carrying the weight of the cosmos. Holding it instills a sense of profound responsibility and unwavering confidence in the wielder, banishing doubt and cowardice. It is said to faintly pulse with inner warmth, a reminder that true power lies not in shadow, but in the brilliance of transparent and just rule.`
  },
  {
    id: "the-mantle-of-etheral-reign",
    name: "The Mantle Of Ethereal Reign",
    price: 5999,
    priceDisplay: "$5,999",
    image: "/images/the-mantle-of-etheral-reign.png",
    descShort: "A moonlight-woven mantle — ethereal majesty.",
    descLong: `The Mantle of Ethereal Reign is a magnificent cloak woven from threads spun by the moonlight itself, giving it an appearance that is simultaneously substantial and translucent. Its color shifts subtly, phasing between deep indigo, pale silver, and the faint violet of twilight, making the wearer appear to be standing just beyond the veil of reality. The fabric is impossibly light, yet holds the weight of immense power, trimmed along its edges with delicate, shimmering lacework that appears to be captured starlight. When worn, the mantle seems to billow slightly even in still air, creating an illusion of eternal, quiet motion.

    This garment is the ultimate symbol of rule transcending the physical plane. It does not offer physical defense, but grants the wearer an unparalleled sense of authority and detachment. The Mantle's presence subtly silences discord and instills profound awe in observers, making earthly resistance seem trivial. It is said that wearing it provides the sovereign with ethereal insight, allowing them to perceive hidden truths and guide their realm with wisdom drawn directly from the higher spheres, establishing a reign defined by grace and untouchable majesty.`
  },
  {
    id: "the-scepter-of-silent-majesty",
    name: "The Scepter Of Silent Majesty",
    price: 9999,
    priceDisplay: "$9,999",
    image: "/images/the-scepter-of-silent-majesty.png",
    descShort: "Ebonywood staff crowned with the Ruby of Unspoken Oaths.",
    descLong: `The Scepter of Silent Majesty is crafted from ebonywood sourced from the deepest celestial groves, giving it a profound, matte black finish that absorbs ambient light. Its head is a breathtaking crown of wrought gold, sculpted into the form of graceful, upward-sweeping wings, symbolizing ascension and eternal watchfulness. Nestled within these wings is the central focal point: an immense, flawless Ruby of Unspoken Oaths, faceted to catch light only dimly, emphasizing its rich, dark crimson hue. The shaft of the scepter is inlaid with subtle silver script, detailing the names of forgotten dynasties who reigned with unparalleled grace.

    This relic is not a weapon of war, but the absolute instrument of undisputed, tranquil authority. True to its name, the scepter grants the wielder power through quiet command rather than vocal decree; those who hold it find their presence instantly compelling and their silence more intimidating than any shout. It embodies the essence of a ruler who possesses perfect self-control and deep inner peace, ensuring that all edicts passed under its watch are characterized by solemn wisdom and irrevocable finality.`
  },
  {
    id: "the-locket-of-lost-constellations",
    name: "The Locket Of Lost Constellations",
    price: 7999,
    priceDisplay: "$7,999",
    badge: "NEW!",
    image: "/images/the-locket-of-lost-constellations.png",
    descShort: "Cosmic Memory Locket. holding the light and wisdom of forgotten stars.",
    descLong: `The Locket of Lost Constellations
    The Locket of Lost Constellations is a circular pendant crafted from darkened sterling silver, intricately etched with subtle celestial motifs and edged with tiny, scattered black diamonds that mimic distant stars. Its true marvel lies within its face: a polished obsidian sphere that, when activated by a touch, reveals a swirling, deep indigo nebula encased within, dotted with glowing, ancient star patterns that no longer exist in the night sky. From its base dangles a single, lustrous teardrop pearl, symbolizing the profound sorrow and beauty of forgotten cosmic wonders.

    This locket is an artifact of profound memory and cosmic nostalgia, a vessel for what once was and what might have been. It is said to grant its wearer a unique form of temporal resonance, allowing them to glimpse echoes of past events or feel the presence of energies long dissipated. The Locket does not predict the future, but rather deepens one's understanding of the universe's grand, cyclical nature and the interconnectedness of all time. It is a powerful reminder that while stars may fade, their light and stories endure, forever whispering their secrets to those with the wisdom to listen.`
  },
  {
    id: "the-blade-of-final-resonance",
    name: "The Blade Of Final Resonance",
    price: 7999,
    priceDisplay: "$7,999",
    badge: "NEW!",
    image: "/images/the-blade-of-final-resonance.png",
    descShort: "Star-iron sword of ultimate silence. Ensures instant, irreversible destiny.",
    descLong: `The Blade of Final Resonance is an awe-inspiring two-handed sword forged from star-iron and quenched in the ethereal silence of a celestial vacuum. Its long, sleek blade possesses an almost mirror-like finish, but upon closer inspection, it holds a faint, internal shimmer of violet energy, a visible manifestation of the sound it suppresses. The crossguard is elegantly crafted from polished obsidian and set with small, dark sapphires, designed to minimize vibration. The pommel features a heavy, dark crystal known as the "Sunder Stone," which anchors the weapon's unique power.

    This blade is the ultimate expression of commitment and unavoidable consequence. It is said that when this sword is drawn, all surrounding noise seems to diminish, leading to a profound, unsettling silence. When the blade strikes, it generates a "Final Resonance"—not a physical sound, but a metaphysical wave that targets the deepest doubts and hesitations of the enemy. It compels absolute resolution; the wielder must strike with complete conviction, as the blade ensures that the outcome, whether victory or defeat, is instant, decisive, and irreversible. It is a terrifying tool reserved for moments when destiny itself must be sealed.`
  },
  {
    id: "the-cryptic-tome of-the-void",
    name: "The Cryptic Tome Of The Void",
    price: 12999,
    priceDisplay: "$12,999",
    image: "/images/the-cryptic-tome of-the-void.png",
    descShort: "Ancient book containing a glimpse of the cosmic void. Grants perilous, ultimate insight.",
    descLong: `The Cryptic Tome of the Void is a chillingly ancient book, its binding crafted from petrified dragon hide and reinforced with heavy, corroded iron chains that secure its enigmatic secrets. The cover is a canvas of forgotten symbols and faint, undulating glyphs that seem to shift in peripheral vision. At its heart lies a sunken, angular window of black crystal, through which a miniature, swirling cosmic void can be seen—a captivating, yet unsettling glimpse into oblivion. The pages within are rumored to be made of solidified shadow, inscribed with impossible script that challenges the very fabric of understanding.

    This tome is not merely a book, but a vessel of forbidden knowledge and cosmic truth, a gateway to the emptiness between realities. It bestows upon its reader a profound, albeit perilous, understanding of the universe's most fundamental mysteries and the vast, cold expanse beyond existence. Reading it is said to risk one's sanity, yet promises unparalleled insight into the origins of magic and the nature of nothingness. The Tome compels a re-evaluation of all known truths, granting power to those brave (or foolish) enough to peer into the unfathomable depths of the void..`
  },
  {
    id: "the-hairpin-of-lunar-whisper",
    name: "The Haripin Of Lunar Whisper",
    price: 4999,
    priceDisplay: "$4,999",
    badge: "UP TO 50% OFF",
    image: "/images/the-hairpin-of-lunar-whisper.png",
    descShort: "Starlight silver crescent with a glowing Moonstone",
    descLong: `The Hairpin of Lunar Whisper is an exquisite piece of adornment, forged from purest starlight silver and meticulously sculpted into the delicate curve of a crescent moon, adorned with intricate, flowing filigree that mimics the gentle current of night winds. Set within the heart of the crescent is a large, ethereal Moonstone Cabochon, which glows with a soft, shifting luminescence, seemingly breathing with the phases of the moon itself. Tiny, dewdrop diamonds are scattered along the silver curves, glistening like captured starlight, while the pin itself is a slender, polished shaft designed to secure the most regal of coiffures.

    This hairpin is far more than a decorative item; it is a conduit to the subtle wisdom and hidden influences of the night sky. It bestows upon its wearer an aura of mysterious allure and quiet perceptiveness, enhancing intuition and making their counsel sought after in matters of subtle diplomacy or hidden truths. Legends say that when worn under a new moon, it allows the wearer to hear the 'whispers' of the celestial bodies, guiding their thoughts and revealing unspoken intentions. It is the perfect emblem for those who rule not with overt power, but with enigmatic grace and profound, lunar insight.`
  },
];

export default products;
