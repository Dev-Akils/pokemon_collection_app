import React, { useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import PokemonCard from './PokemonCard';

import PokemonLoader from './PokemonLoader';

const fetchPokemon = async ({ pageParam = 0 }) => {
    const limit = 6;
    const offset = pageParam * limit;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const results = await Promise.all(
        data.results.map(async (p) => {
            const res = await axios.get(p.url);
            return res.data;
        })
    );
    return { results, nextPage: pageParam + 1, isLast: !data.next };
};

export default function DiscoveryPage({ collection, addToCollection, removeCollection }) {
    const loader = useRef();
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['pokemon'],
        queryFn: fetchPokemon,
        getNextPageParam: (lastPage) => (!lastPage.isLast ? lastPage.nextPage : undefined)
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log("LOADER VISIBILITY", entries[0].isIntersecting);
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );
        if (loader.current) observer.observe(loader.current);
        return () => loader.current && observer.unobserve(loader.current);
    }, [loader, hasNextPage, isFetchingNextPage]);

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-[#F271A8] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (<>
        <div className='gridbg'>
            <div className="poke_cart">
                {data?.pages.map((page) =>
                    page.results.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}
                            isInCollection={collection.some(p => p.id === pokemon.id)}
                            onAdd={() => addToCollection(pokemon)} onRemove={() => removeCollection(pokemon)} />
                    ))
                )}
                <PokemonLoader isFetchingNextPage={isFetchingNextPage} loader={loader} />
            </div>
        </div>
    </>);
};


