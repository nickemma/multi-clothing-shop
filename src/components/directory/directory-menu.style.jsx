import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 5%;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
