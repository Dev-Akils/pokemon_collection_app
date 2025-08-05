import { useEffect, useState } from 'react';

const useCollection = () => {
  const [collection, setCollection] = useState(() => {
    const stored = localStorage.getItem('myCollection');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('myCollection', JSON.stringify(collection));
  }, [collection]);

  const addToCollection = (pokemon) => {
    setCollection((prev) => {
      if (prev.find(p => p.id === pokemon.id)) return prev;
      return [...prev, pokemon];
    });
  };
  const removeCollection = (pokemon) => {
  setCollection((prev) => prev.filter(p => p.id !== pokemon.id));
};

  const reorderCollection = (startIndex, endIndex) => {
    const updated = Array.from(collection);
    const [removed] = updated.splice(startIndex, 1);
    updated.splice(endIndex, 0, removed);
    setCollection(updated);
  };

  return { collection, addToCollection, reorderCollection, removeCollection };
};

export default useCollection;
