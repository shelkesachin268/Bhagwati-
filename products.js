// ============================================================
// PRODUCT DATA – 22 Mantra Chanting Machines
// Replace image URLs with your actual product images
// Replace meeshoUrl with your actual Meesho product page URLs
// Replace the WhatsApp number (919999999999) with your number
// ============================================================

const WHATSAPP_NUMBER = "919999999999"; // ← YOUR WHATSAPP NUMBER

const products = [
  {
    id: 1,
    name: "Om Namah Shivaya Digital Chanting Machine",
    shortDesc: "Continuous 'Om Namah Shivaya' mantra, perfect for home pooja rooms.",
    description: "Bring the blessings of Lord Shiva into your home with this beautifully crafted digital mantra chanting machine. It continuously chants 'Om Namah Shivaya' in a melodious and devotional tone, purifying the atmosphere and bringing peace, prosperity, and divine energy to your surroundings. Ideal for daily worship, meditation, and creating a spiritual environment.",
    keyPoints: [
      "Chants 'Om Namah Shivaya' continuously day and night",
      "Crystal clear sound quality with adjustable volume",
      "Low power consumption – USB & adapter compatible",
      "Auto-repeat feature for uninterrupted chanting",
      "Compact & elegant design for pooja rooms",
      "Sleep timer available – runs up to 24 hours continuously"
    ],
    price: 499,
    mrp: 999,
    images: [
      "https://images.meesho.com/images/products/974070243/ssk4w_512.avif?width=512",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-1",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Gayatri Mantra Chanting Device – Gold Edition",
    shortDesc: "Sacred Gayatri mantra for wisdom, health & divine protection.",
    description: "The Gayatri Mantra is the most powerful Vedic mantra for spiritual enlightenment and purification of the mind. This Gold Edition chanting machine recites the sacred Gayatri Mantra in an authentic Sanskrit tone that fills your space with divine light and wisdom. A must-have for devotees seeking mental clarity and spiritual growth.",
    keyPoints: [
      "Authentic Sanskrit pronunciation of Gayatri Mantra",
      "Gold-finish premium body with elegant craftsmanship",
      "Adjustable speed – slow, medium, or fast chanting modes",
      "Built-in rechargeable battery (lasts 8+ hours unplugged)",
      "Portable – ideal for travel and pilgrimages",
      "Volume control for quiet meditation sessions"
    ],
    price: 649,
    mrp: 1299,
    images: [
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-2",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Mahamrityunjaya Mantra Machine – Healing Energy",
    shortDesc: "The great death-conquering mantra for health & longevity.",
    description: "The Mahamrityunjaya Mantra is revered as the mantra of healing, protection, and liberation from the cycle of death and rebirth. This dedicated chanting machine brings the powerful vibrations of Lord Shiva's healing mantra into your home, helping family members recover from illness, overcome obstacles, and live a protected and blessed life.",
    keyPoints: [
      "Chants Mahamrityunjaya Mantra 108 times per cycle",
      "Soothing, authentic Sanskrit recitation",
      "Especially beneficial for the sick and elderly",
      "Timer function: 1hr / 2hr / 4hr / continuous modes",
      "Durable ABS body with heat-resistant build",
      "Includes original adapter and user manual"
    ],
    price: 579,
    mrp: 1100,
    images: [
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-3",
    badge: "Healing"
  },
  {
    id: 4,
    name: "Hanuman Chalisa Digital Player – Sankat Mochan",
    shortDesc: "Complete Hanuman Chalisa recitation for protection & strength.",
    description: "Lord Hanuman, the embodiment of devotion and strength, blesses all who chant His Chalisa. This machine continuously plays the sacred Hanuman Chalisa in a powerful and devotional voice. Ideal for warding off negative energies, strengthening faith, and invoking the protection of Sankat Mochan Hanuman in your home.",
    keyPoints: [
      "Full Hanuman Chalisa recitation with authentic pronunciation",
      "Available in male and female voice options",
      "Removes negative energies and evil eye",
      "Auto-loop function for 24×7 protection",
      "Hanuman Ji illustration on device for blessings",
      "Compatible with both USB power and AA batteries"
    ],
    price: 529,
    mrp: 999,
    images: [
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-4",
    badge: "Protection"
  },
  {
    id: 5,
    name: "Jai Mata Di Durga Mantra Machine",
    shortDesc: "Divine Durga mantras for power, courage, and victory.",
    description: "Invoke the blessings of Maa Durga – the goddess of power, courage, and victory – with this sacred chanting machine. It plays powerful Durga mantras including Durga Saptashati shlokas and 'Jai Mata Di' chants that fill your home with feminine divine energy, helping devotees overcome all fears and obstacles in life.",
    keyPoints: [
      "Includes Durga Saptashati shlokas and Durga Mantra",
      "Especially auspicious during Navratri",
      "Powerful female voice recitation with musical background",
      "Creates a divine and protected atmosphere at home",
      "Loop mode for continuous blessings",
      "Attractive Mata Ji image on device body"
    ],
    price: 549,
    mrp: 1050,
    images: [
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-5",
    badge: "Navratri Special"
  },
  {
    id: 6,
    name: "Shree Ram Naam Jaap Machine – Ramcharitmanas",
    shortDesc: "Sri Ram Naam continuous chanting machine for peace & devotion.",
    description: "Ram Naam is the greatest mantra. This device continuously chants 'Shri Ram Jai Ram Jai Jai Ram' and selected Ramcharitmanas verses in the most devotional voice. Ideal for families seeking peace, harmony, and the divine blessings of Lord Rama in their home. Brings positivity and love into every corner of the house.",
    keyPoints: [
      "Chants 'Shri Ram Jai Ram Jai Jai Ram' continuously",
      "Selected Ramcharitmanas Chaupais included",
      "Soothing melody background for meditative atmosphere",
      "Ideal for homes, temples, and meditation rooms",
      "Energy-saving chip for 24×7 operation",
      "Simple one-button operation for the elderly"
    ],
    price: 499,
    mrp: 950,
    images: [
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-6",
    badge: "Ram Bhakti"
  },
  {
    id: 7,
    name: "Om Chanting Meditation Machine – Deep Frequency",
    shortDesc: "Pure 'Om' vibration at 432Hz for meditation & healing.",
    description: "The primordial sound 'Om' is the very vibration of the universe. This specialized machine chants the pure 'Om' sound at 432Hz frequency, the universally healing frequency. It creates an instant meditative atmosphere, reduces stress and anxiety, and is perfect for yoga practitioners, meditators, and anyone seeking deep inner peace.",
    keyPoints: [
      "Pure Om chanting at 432Hz healing frequency",
      "3 modes: single Om, Om chain, Om with flute",
      "Deep resonant bass for full-body vibration effect",
      "Perfect for yoga, pranayama, and meditation",
      "Minimalist design for meditation rooms",
      "Headphone jack for personal meditation use"
    ],
    price: 699,
    mrp: 1400,
    images: [
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-7",
    badge: "Meditation"
  },
  {
    id: 8,
    name: "Lakshmi Mantra Machine – Prosperity & Wealth",
    shortDesc: "Shree Lakshmi mantras to attract abundance & financial blessings.",
    description: "Goddess Lakshmi, the divine embodiment of wealth and prosperity, blesses those who chant Her mantras with devotion. This machine continuously plays the Sri Suktam, Lakshmi Ashtakam, and 'Om Shrim Mahalakshmiyei Namah' mantra to invite abundance, financial stability, and divine grace into your home and business.",
    keyPoints: [
      "Plays Sri Suktam, Lakshmi Ashtakam & Lakshmi Mantra",
      "Ideal for shops, offices, cash counters, and homes",
      "Friday worship companion – auspicious for Lakshmi Puja",
      "Lotus-pink decorative body with gold accents",
      "Attracts prosperity and removes financial obstacles",
      "Includes Lakshmi Yantra symbol on device"
    ],
    price: 599,
    mrp: 1199,
    images: [
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-8",
    badge: "Prosperity"
  },
  {
    id: 9,
    name: "Ganesh Mantra Player – Obstacle Remover",
    shortDesc: "Lord Ganesha mantras for new beginnings and success.",
    description: "Before any new venture, worship begins with Lord Ganesha – the remover of all obstacles. This Ganesh Mantra machine continuously chants 'Om Gan Ganapataye Namah', Ganesh Atharvashirsha, and Vakratunda Mahakaya shloka to ensure success, wisdom, and the removal of all hurdles in your path.",
    keyPoints: [
      "Chants Om Gan Ganapataye Namah & Ganesh Atharvashirsha",
      "Perfect for new beginnings – business launches, exams, weddings",
      "Elephant trunk design element on device body",
      "Brings wisdom, success, and obstacle removal",
      "108-count repeat cycle with completion chime",
      "Available in single and dual speaker versions"
    ],
    price: 519,
    mrp: 999,
    images: [
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-9",
    badge: "Ganesh Blessings"
  },
  {
    id: 10,
    name: "Vishnu Sahasranamam Chanting Machine",
    shortDesc: "Complete 1000 names of Lord Vishnu for divine protection.",
    description: "The Vishnu Sahasranamam – the thousand names of Lord Vishnu – is one of the most sacred texts in Hinduism. This machine recites all 1000 divine names in an authentic Vedic style, bringing immense spiritual merit, protection, and liberation. Ideal for households devoted to Lord Vishnu and his avatars.",
    keyPoints: [
      "Complete Vishnu Sahasranamam recitation in Vedic style",
      "Full cycle duration: approximately 45 minutes per loop",
      "Traditional Sanskrit pronunciation by a learned priest",
      "Ideal for Ekadashi and special Vishnu puja days",
      "Peacock blue body representing Lord Vishnu's divine presence",
      "LED indicator light during operation"
    ],
    price: 649,
    mrp: 1250,
    images: [
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-10",
    badge: "Vaishnava"
  },
  {
    id: 11,
    name: "Navkar Mantra Jain Chanting Device",
    shortDesc: "Sacred Navkar Mantra for Jain devotees – purification & peace.",
    description: "The Navkar Mantra is the most fundamental prayer in Jainism, offering salutations to the five supreme beings. This chanting machine recites the Navkar Mantra in a pure, reverential tone, creating a sacred atmosphere for Jain families and helping devotees maintain their daily spiritual practice effortlessly.",
    keyPoints: [
      "Accurate recitation of the complete Navkar Mantra",
      "Pure, unaccompanied recitation without musical distraction",
      "Suitable for Paryushana, Diwali and daily Jain puja",
      "White and golden body symbolizing purity",
      "108 count cycle with soft chime notification",
      "Manufactured with cruelty-free materials and processes"
    ],
    price: 549,
    mrp: 1050,
    images: [
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-11",
    badge: "Jain Mantra"
  },
  {
    id: 12,
    name: "Waheguru Naam Simran Machine – Gurbani Player",
    shortDesc: "Continuous Waheguru Naam Simran for Sikh devotees.",
    description: "Naam Simran – the continuous remembrance of Waheguru's name – is the cornerstone of Sikh spiritual practice. This machine chants 'Waheguru Waheguru' and selected Gurbani shabads in a soothing, devotional tone. It helps families maintain constant awareness of the divine and fills the home with Akaal Purakh's divine grace.",
    keyPoints: [
      "Continuous 'Waheguru Waheguru' Naam Simran",
      "Includes select Gurbani Shabads and Ardas",
      "Authentic Sikh pronunciation and melody",
      "Ideal for Amrit Vela (early morning) practice",
      "Khanda symbol on device body",
      "Timer mode for 1.5 to 6 hours of simran"
    ],
    price: 529,
    mrp: 999,
    images: [
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-12",
    badge: "Gurbani"
  },
  {
    id: 13,
    name: "Multi-Mantra Machine – 21 Mantras in One",
    shortDesc: "21 different mantras in a single device – the complete devotional companion.",
    description: "Why choose one when you can have them all? This all-in-one multi-mantra machine comes pre-loaded with 21 different mantras including Gayatri, Mahamrityunjaya, Om Namah Shivaya, Hanuman Chalisa, Durga Mantra, and more. With a simple dial, select the mantra for your current puja, mood, or occasion. The ultimate spiritual companion for every Hindu family.",
    keyPoints: [
      "21 pre-loaded mantras covering all major deities",
      "Simple rotary dial to switch between mantras",
      "Individual volume control for each mantra",
      "Display screen showing selected mantra name",
      "Memory function saves last played mantra",
      "Ideal gift for spiritual families and temples"
    ],
    price: 899,
    mrp: 1799,
    images: [
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-13",
    badge: "All-in-One"
  },
  {
    id: 14,
    name: "Saraswati Mantra Machine – Wisdom & Knowledge",
    shortDesc: "Goddess Saraswati mantras for students, artists & seekers.",
    description: "Maa Saraswati, the divine embodiment of knowledge, arts, music, and wisdom, is the patron goddess of students and creative seekers. This chanting machine recites the Saraswati Vandana, Saraswati Mantra, and selected shlokas from the Saraswati Stotram. Perfect for study rooms and for students preparing for important examinations.",
    keyPoints: [
      "Saraswati Vandana and Saraswati Ashtakam included",
      "Soft, melodic tone to aid concentration and learning",
      "Ideal for study rooms, schools, music practice spaces",
      "Vasant Panchami and exam season special",
      "White body with veena motif design",
      "USB-powered – can run from laptop or power bank"
    ],
    price: 549,
    mrp: 1049,
    images: [
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-14",
    badge: "Student Special"
  },
  {
    id: 15,
    name: "Radha Krishna Bhajan Machine – Divine Love",
    shortDesc: "Hare Krishna Mahamantra and Radha Krishna bhajans.",
    description: "Experience the divine love of Radha and Krishna with this dedicated bhajan machine. It plays the Hare Krishna Mahamantra, Govinda Jai Jai, and selected Vrindavan bhajans in a soulful tone that fills your home with the love and joy of Goloka. Perfect for Vaishnava families and ISKCON devotees.",
    keyPoints: [
      "Hare Krishna Mahamantra (Hare Krishna Hare Rama) on loop",
      "Includes popular Radha Krishna bhajans",
      "Vrindavan-inspired melodic style",
      "Available in 3 speeds: meditation, kirtan, and fast",
      "Blue-yellow body representing Radha Krishna colours",
      "Perfect for Janmashtami and daily Vishnu puja"
    ],
    price: 579,
    mrp: 1099,
    images: [
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-15",
    badge: "Hare Krishna"
  },
  {
    id: 16,
    name: "Shani Dev Mantra Machine – Saturn Remedies",
    shortDesc: "Shani mantras to appease Saturn and reduce its malefic effects.",
    description: "Saturn's influence is powerful and life-changing. Chanting Shani Dev's mantras regularly is the most effective remedy for reducing the malefic effects of Shani Sade Sati and Shani Mahadasha. This machine chants 'Om Sham Shanicharaya Namah' and other Shani shanti stotras to bring stability, discipline, and divine protection.",
    keyPoints: [
      "Om Sham Shanicharaya Namah – continuous chanting",
      "Shani Chalisa and Shani Ashtakam included",
      "Ideal for Saturdays and Shani Shanti Puja",
      "Black and dark blue body representing Saturn energy",
      "Especially beneficial during Shani Dasha periods",
      "Helps in career, legal matters, and life obstacles"
    ],
    price: 529,
    mrp: 999,
    images: [
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-16",
    badge: "Shani Remedy"
  },
  {
    id: 17,
    name: "Navagraha Mantra Machine – 9 Planet Remedies",
    shortDesc: "All 9 Navagraha mantras in a single device for astrological balance.",
    description: "Balance the energies of all nine planets with this comprehensive Navagraha Mantra machine. It chants the dedicated mantra of each planet (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu) in sequence, helping devotees appease all planetary influences and achieve harmony, health, and prosperity in life.",
    keyPoints: [
      "Individual mantras for all 9 Navagrahas (planets)",
      "Sequential mode: one planet per day for weekly cycle",
      "Simultaneous mode: all 9 planets in rotation",
      "Especially beneficial for birth chart imbalances",
      "Vedic astrology-inspired device design",
      "Includes printed planetary mantra reference card"
    ],
    price: 749,
    mrp: 1499,
    images: [
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-17",
    badge: "Astrology"
  },
  {
    id: 18,
    name: "Sai Baba Mantra Machine – Sabka Malik Ek",
    shortDesc: "Om Sai Namo Namah and Sai devotional songs for all devotees.",
    description: "Sai Baba, the saint of Shirdi, is worshipped across faiths as a symbol of unity, compassion, and miracles. This machine chants 'Om Sai Namo Namah', Sai Chalisa, and selected Sai bhajans that fill your home with His divine presence and unconditional blessings.",
    keyPoints: [
      "Chants Om Sai Namo Namah and Sai Baba Chalisa",
      "Selected Sai bhajans from Shirdi temple",
      "Worshipped by people of all faiths and backgrounds",
      "Saffron body with Sai Baba portrait",
      "Thursday special for Sai Puja rituals",
      "Miracle prayers and Udhi mantra included"
    ],
    price: 499,
    mrp: 950,
    images: [
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-18",
    badge: "Sai Devotion"
  },
  {
    id: 19,
    name: "Kali Mantra Machine – Transformative Power",
    shortDesc: "Kali mantras for transformation, protection & fearlessness.",
    description: "Maa Kali is the fierce form of the divine mother, representing transformation, the destruction of ego, and ultimate liberation. This machine chants the powerful Kali Mantra 'Om Krim Kalikayei Namah' and Mahakali Stotras, invoking the mother's fierce protection and transformative grace into your life.",
    keyPoints: [
      "Om Krim Kalikayei Namah – primary Kali Beej Mantra",
      "Mahakali Stotram and Kali Chalisa included",
      "Ideal for Tantric practitioners and Shakti worshippers",
      "Especially powerful on Amavasya (new moon) nights",
      "Dark red body with Kali Yantra symbol",
      "Removes deep-seated fears and negative karmas"
    ],
    price: 579,
    mrp: 1099,
    images: [
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-19",
    badge: "Shakti Puja"
  },
  {
    id: 20,
    name: "Vedic Shanti Mantra Machine – Peace & Harmony",
    shortDesc: "Traditional Vedic Shanti Paaths for home peace and harmony.",
    description: "Vedic Shanti Mantras are ancient peace invocations that bring harmony, wellbeing, and blessings to the entire household. This machine chants the Shanti Paath, Purnamadah Purnmidam, Asato Ma Sadgamaya, and other Upanishadic peace invocations. Ideal for creating a harmonious and spiritually elevated living environment.",
    keyPoints: [
      "Complete Shanti Paath from Vedic tradition",
      "Includes Asato Ma, Lokah Samastah Sukhino Bhavantu",
      "Scholarly Vedic pronunciation by trained scholars",
      "Perfect for morning and evening prayer rituals",
      "Creates immediate atmosphere of peace and calm",
      "Minimalist copper-tone body for aesthetic homes"
    ],
    price: 599,
    mrp: 1149,
    images: [
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-20",
    badge: "Vedic"
  },
  {
    id: 21,
    name: "Tridev Mantra Machine – Brahma Vishnu Mahesh",
    shortDesc: "Sacred mantras of the Hindu Trinity for complete divine protection.",
    description: "The Tridev – Brahma the Creator, Vishnu the Preserver, Mahesh (Shiva) the Destroyer – represent the three fundamental forces of the universe. This special machine chants dedicated mantras for all three in a rotating sequence, ensuring complete divine coverage – creation, preservation, and liberation – for your entire family.",
    keyPoints: [
      "Brahma mantra (Vakratunda), Vishnu mantra, Shiva mantra in sequence",
      "Full Hindu Trinity represented in one device",
      "Trimurti illustration on premium-quality body",
      "Auto-cycle: changes mantra every 30 minutes",
      "Auspicious for Brahma Muhurta morning chanting",
      "Comes in a beautiful gift box – ideal for housewarming"
    ],
    price: 699,
    mrp: 1349,
    images: [
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80",
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-21",
    badge: "Trinity"
  },
  {
    id: 22,
    name: "Tirupati Balaji Venkateswara Mantra Machine",
    shortDesc: "Sri Venkateswara mantras and Tirumala prayers for divine blessings.",
    description: "Bring the blessings of the richest and most visited deity in the world – Lord Venkateswara of Tirupati Balaji – into your home. This machine chants the Venkateswara Suprabhatam, Venkateswara Ashtottara, and 'Om Namo Venkatesaya' mantra to invoke the blessings of the lord of seven hills for prosperity, good health, and spiritual elevation.",
    keyPoints: [
      "Venkateswara Suprabhatam – morning prayer for daily blessings",
      "Venkateswara Ashtottara Shatanamavali (108 names)",
      "Om Namo Venkatesaya Mantra continuous loop",
      "Tirumala temple-style golden body",
      "Ideal for South Indian families and Tirupati devotees",
      "Saturday worship companion for Lord Balaji Puja"
    ],
    price: 629,
    mrp: 1199,
    images: [
      "https://images.unsplash.com/photo-1599408952748-8dfbacc28df1?w=600&q=80",
      "https://images.unsplash.com/photo-1618506479580-b00a2e3c0af9?w=600&q=80",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80",
      "https://images.unsplash.com/photo-1561406636-b80293969660?w=600&q=80"
    ],
    meeshoUrl: "https://meesho.com/your-product-link-22",
    badge: "Tirupati"
  }
];
