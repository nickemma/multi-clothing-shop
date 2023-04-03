import styled from 'styled-components';

export const TitleText = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 1rem;
`;

export const CategoryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  gap: 2.5rem;
  padding: 2rem 5%;
`;
