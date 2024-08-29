import { useAppContext } from "../../context/context";
import { addCard, deleteCard } from "./cards.utils";

import {
  CardsContainer,
  CardsList,
  CardItem,
  AddButton,
  DeleteButton,
} from "./cards.styles";

export const Cards = ({ columnId }) => {
  const { cards, setCards } = useAppContext();

  const columnCards = cards.filter((card) => card.columnId === columnId);

  return (
    <CardsContainer>
      <CardsList>
        {columnCards.map((card) => (
          <CardItem key={card.id}>
            <span>{card.content}</span>
            <DeleteButton onClick={() => deleteCard(card.id, setCards)}>
              x
            </DeleteButton>
          </CardItem>
        ))}
      </CardsList>
      <AddButton onClick={() => addCard(columnId, setCards)}>
        Add Card
      </AddButton>
    </CardsContainer>
  );
};
