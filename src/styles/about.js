import styled from 'styled-components';

export const AboutHeader = styled.h1`
  padding: 2rem 3rem 0;
  margin: 1rem auto;
  line-height: 3.2rem;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--colorLetters);
`;

export const AboutDescription = styled.p`
  padding: 2rem 3rem 0;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.4;
  color: var(--colorLetters);
`;

export const AboutLink = styled.a`
  color: var(--linkColor);
  text-decoration: none;
  transition: opacity 0.5s;
  font-weight: 300;
  border-bottom: 1px solid var(--linkColor);

  &:hover {
    opacity: 0.9;
    border-bottom: 2px dotted var(--linkColor);
    color: var(--linkColor);
  }
`;