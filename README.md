# 🔥 Pokemon Collection App

Welcome to the **Pokemon Collection App**!  
Discover, browse, and collect your favorite Pokémon using data from the [PokeAPI]https://pokeapi.co/api/v2/pokemon/1/  
Built with **React**, **Tailwind CSS**, and **React Query**.

<img width="1877" height="860" alt="image" src="https://github.com/user-attachments/assets/da9c5cf0-756a-451d-a002-7a18efab8f63" />


---

## 🚀 Features

- 🔍 **Infinite Scrolling**: Browse Pokémon endlessly with automatic loading as you scroll.
- 🧩 **Detailed Cards**: View each Pokémon's image, type, and base stats (HP, Attack, Defense).
- ➕ **Add/Remove Collection**: Save your favorite Pokémon to your personal collection (stored in `localStorage`).
- 📦 **Persistent Storage**: Your collection stays saved even after you refresh the page.
- 🔄 **Reorder Collection** *(optional)*: Reorder Pokémon in your collection (if you implement drag & drop).
- ⚡ **Fast and Responsive**: Styled with Tailwind CSS for a mobile-friendly experience.

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── DiscoveryPage.jsx // Main page with infinite scroll
│ ├── PokemonCard.jsx // Individual Pokemon cards
│ ├── PokemonLoader.jsx // Loader shown when fetching more data
│ └── Header.jsx // App header showing collection info
│
├── hooks/
│ └── useCollection.js // Custom hook for managing the user's collection
│
├── pages/
│ └── PokemonCollectionPage.jsx //  Page to view your collection
│
├── App.js
└── index.js



---

## 🛠️ Tech Stack

- **React** (v18+)
- **Tailwind CSS**
- **React Query** (for infinite data fetching)
- **Axios**
- **PokeAPI** (free Pokémon data)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pokemon-collection-app.git
cd pokemon-collection-app
2. Install Dependencies
npm install
3. Start the App
npm start
Open http://localhost:3000 in your browser to explore the app.

💾 LocalStorage
Your Pokémon collection is saved in the browser’s localStorage under the key:

📷 Screenshot
<img width="1877" height="860" alt="image" src="https://github.com/user-attachments/assets/1609c8e2-d4ac-47a1-bf4e-200bc974cf83" />

<img width="1866" height="682" alt="image" src="https://github.com/user-attachments/assets/d0ca5cf7-9ee6-48e5-85c9-1f1816e4410a" />



📌 TODO / Improvements
 Add and remove reordering to the collection.

 Add Pokémon detail modal or page.

🙌 Acknowledgements
PokeAPI
React Query

Tailwind CSS

