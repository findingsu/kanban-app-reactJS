import styled from "styled-components";

export const CardsContainer = styled.div`
  max-height: 85vh;
`;

export const CardTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  width: 100%;
`;

export const CardTitleInput = styled.input`
  font-size: 0.9rem;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  width: 100%;

}

  &:focus {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export const CardsList = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  margin: 0;
  overflow-x: auto;
`;

export const CardItem = styled.div`
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: var(--card-color);
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  height: fit-content;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(88, 88, 88, 0.906);
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;
  // margin-left: auto;
  &:hover {
    color: #c62828c3;
    font-weight: bold;
    background-color: transparent;
  }
`;

export const AddButton = styled.button`
  font-weight: lighter;
  color: rgba(88, 88, 88, 0.906);
  // background-color: #7c887d39;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  padding: 1rem; /* Adjusted padding for better sizing */
  margin: 1rem; /* Margin around the button */
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    // background-color: #4679bf6f;

    transition: background-color 0.3s, border-color 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
