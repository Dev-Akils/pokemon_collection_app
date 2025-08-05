
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useCollection from '../hooks/useCollection';

export default function MyCollection() {
  const { collection, reorderCollection } = useCollection();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    reorderCollection(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="collection">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {collection.map((pokemon, index) => (
              <Draggable key={pokemon.id} draggableId={pokemon.id.toString()} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-white rounded shadow p-4">
                    <div className="flex items-center space-x-4">
                      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-16 h-16" />
                      <div>
                        <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
                        <div className="text-sm">{pokemon.types.map(t => t.type.name).join(', ')}</div>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

