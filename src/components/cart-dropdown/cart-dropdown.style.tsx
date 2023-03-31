import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-style: italic;
  }
  button {
    margin-top: auto;
  }
`;
export const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
