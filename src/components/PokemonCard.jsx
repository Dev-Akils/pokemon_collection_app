
export default function PokemonCard  ({ pokemon, onAdd, onRemove,isInCollection })  {
    return (<>
 <div className="border rounded-lg shadow p-4 text-center   bg-white w-full h-[300px]">
    <div className=' flex justify-end'>
        {isInCollection ? (
                    <button
                        className="delete_button"
                        onClick={() => onRemove(pokemon)}
                    >
                        x
                    </button>
                ) : (
                    <button
                        className="add_button"
                        onClick={() => onAdd(pokemon)}
                    >
                        +
                    </button>
                )}

            </div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} loading='lazy' className="poke_cart_img" />
            <h2 className="text-lg font-bold capitalize mb-3">{pokemon.name}</h2>
            <span className="text-sm text-white bg-gray-400 rounded-full py-1 px-3 mt-3 inline-block">
                {pokemon.types.map(t => t.type.name).join(', ')}
            </span>
            <div className='flex justify-between mb-7'>
                <p className="text-sm  flex flex-col"><span className='poke_state'> {pokemon.stats[0].base_stat}</span><span >HP</span></p>
                <p className="text-sm  flex-col flex"> <span className='poke_state'>{pokemon.stats[1].base_stat}</span><span >Attack</span></p>
                <p className="text-sm flex flex-col"> <span className='poke_state'>{pokemon.stats[2].base_stat}</span><span >Defense</span></p>
            </div>
        </div>

    </>
    );
};


