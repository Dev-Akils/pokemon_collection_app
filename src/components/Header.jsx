import useCollection from "../hooks/useCollection";


export default function Header({setTab,collection}) {
  
    return (<header className="text-center mb-6">
        <h1 className="text-apptitle mb-1">🔥 Pokemon Collection App</h1>
        <p className="text-subtitle mb-4"> Discover, collect, and organize your favorite Pokemon!</p>
        <div className="space-x-4">
            <button onClick={() => setTab('discover')} className="text-white text-button px-4 py-2 rounded-full bg-purple-800">
                Discover Pokemon
            </button>
            <button onClick={() => setTab('collection')} className="text-white text-button px-4 py-2 rounded-full bg-Button_Blue_Blue">
                My Collection ({collection.length})
            </button>

        </div>
        </header>);
    }