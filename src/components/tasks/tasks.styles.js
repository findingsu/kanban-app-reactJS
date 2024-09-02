import styled from "styled-components";

export const TasksContainer = styled.div``;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  height: fit-content;
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
`;

export const TaskTitle = styled.span`
  font-size: 0.9rem;
  cursor: pointer;
  border-bottom: 1px solid transparent; /* Initially transparent */
  transition: border-bottom-color 0.3s ease, color 0.3s ease;

  &:hover {
    border-bottom-color: grey; /* Changes the border color to create the underline effect */
    color: grey;
  }
`;

export const TaskTitleInput = styled.input`
  font-size: 0.9rem;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  width: calc(100% - 30px);

  &:focus {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(88, 88, 88, 0.906);
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;
  margin-left: auto;
  &:hover {
    background-color: transparent;
    color: #c62828c3;
    font-weight: bold;
  }
`;

export const TasksList = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  margin: 0;
  overflow-x: auto; /* Add scrolling if needed */
`;
