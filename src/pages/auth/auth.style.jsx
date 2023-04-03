import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 2rem auto;
  @media (max-width: 450px) {
    flex-direction: column;
    overflow-x: hidden;
    width: 300px;
  }
`;
