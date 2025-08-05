
import  { useState } from 'react';
import Header from '../components/Header';
import DiscoveryPage from '../components/DiscoveryPage';
import MyCollection from '../components/MyCollection';
import useCollection from '../hooks/useCollection';

function PokemonCollectionPage() {
  const [tab, setTab] = useState('discover');
const { collection, addToCollection, removeCollection } = useCollection();
  return (<>
  <Header tab={tab} setTab={setTab} collection={collection}/>
    {tab === 'discover' ? <DiscoveryPage collection={ collection} addToCollection={addToCollection} removeCollection={removeCollection }/> : <MyCollection />}
 </> );
}

export default PokemonCollectionPage;
