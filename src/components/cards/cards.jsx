import { useAppContext } from "../../context/context";
import { addCard, deleteCard, updateCardTitle } from "./cards.utils";
import { Tasks } from "../tasks";

import {
  CardsContainer,
  CardsList,
  CardItem,
  AddButton,
  DeleteButton,
  CardTitle,
  CardTitleInput,
} from "./cards.styles";

export const Cards = ({ columnId }) => {
  const { cards, setCards, editingId, setEditingId } = useAppContext();

  const cardsArray = cards.filter((card) => card.columnId === columnId);

  return (
    <CardsContainer>
      <CardsList>
        {cardsArray.map((card) => (
          <CardItem key={card.id}>
            {editingId === card.id ? (
              <CardTitleInput
                defaultValue=""
                placeholder={card.title}
                onBlur={(e) =>
                  updateCardTitle(
                    card.id,
                    e.target.value,
                    setCards,
                    setEditingId
                  )
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    updateCardTitle(
                      card.id,
                      e.target.value,
                      setCards,
                      setEditingId
                    );
                  }
                }}
                autoFocus
              />
            ) : (
              <CardTitle onClick={() => setEditingId(card.id)}>
                {card.title}
                <DeleteButton onClick={() => deleteCard(card.id, setCards)}>
                  x
                </DeleteButton>
              </CardTitle>
            )}
            <Tasks cardId={card.id} columnId={columnId} />
          </CardItem>
        ))}
      </CardsList>
      <AddButton onClick={() => addCard(columnId, setCards)}>
        Add Card
      </AddButton>
    </CardsContainer>
  );
};
