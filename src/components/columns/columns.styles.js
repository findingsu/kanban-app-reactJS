import styled from "styled-components";

// Container for all columns
export const ColumnsContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

// List of columns
export const ColumnsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1.5rem;
`;

// Each column item
export const ColumnItem = styled.div`
  background-color: var(--column-bg-color);
  border: 0.03rem solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 20rem;
  min-width: 15rem;
  transition: box-shadow 0.3s, transform 0.3s;
  height: fit-content;
  max-height: 90vh;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

// Column header with title and delete button
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;s
`;

// Column title text
export const ColumnTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  // padding: 0.5rem;
`;

// Input for editing column title
export const ColumnTitleInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  color: rgb(95, 89, 89);
  font-weight: 400;
  width: calc(100% - 30px); // Adjust for delete button

}

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
`;
export const AddButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  height: fit-content;
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    // background-color: #4679bf6f;
    transition: background-color 0.3s, border-color 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

// Delete button style
export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #333333;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: #0079bf;
  }
`;
