export default function PokemonLoader({ isFetchingNextPage, loader }) {
  return (
    <div
      ref={loader}
      role="status"
      aria-live="polite"
      className="flex items-center justify-center py-4 bg-[#705EBC] min-h-[40px]"
    >
      {isFetchingNextPage ? (
        <>
          <div className="w-6 h-6 border-4 border-gray-300 border-t-[#F271A8] rounded-full animate-spin"></div>
          <span className="ml-2 text-sm text-white">Loading more Pokémon...</span>
        </>
      ) : (
        <span className="text-sm text-white opacity-50 animate-pulse">Scroll to load more...</span>
      )}
    </div>
  );
}
