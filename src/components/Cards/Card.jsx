import React from "react";
import { CardsContext } from "../../Contexts/ComponentContexts.jsx";
import AddCardButton from "./CardsUI/AddCardBtn.jsx";
import "../../styles/cards.css";
import EditCardTitle from "./CardsUI/CardTitle.jsx";
import DeleteCardButton from "./CardsUI/DeleteCardBtn.jsx";
import Tasks from "../Tasks/Task.jsx";
import { useCards } from "./useCards.jsx";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

export default function Cards({ columnId }) {
  const cardMethods = useCards();

  const handleDrag = (results) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedCards = [...cardMethods.cards];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedCards] = reorderedCards.splice(sourceIndex, 1);
      reorderedCards.splice(destinationIndex, 0, removedCards);
      return cardMethods.setCards(reorderedCards);
    }
  };

  return (
    <CardsContext.Provider value={cardMethods} items>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cardMethods.cards.map((card, index) => (
                <Draggable index={index} key={card.id} draggableId={card.id}>
                  {(provided) => (
                    <div
                      className="card"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <div className="card-title">
                        <EditCardTitle cardId={card.id} />
                        <DeleteCardButton cardId={card.id} />
                      </div>
                      <div className="tasks-list">
                        <Tasks cardId={card.id} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddCardButton columnId={columnId} />
      </DragDropContext>
    </CardsContext.Provider>
  );
}
