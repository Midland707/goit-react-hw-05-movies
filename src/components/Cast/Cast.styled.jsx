import styled from 'styled-components';

export const MovieCastWrap = styled.div``;

export const MovieCastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const MovieCastItem = styled.li`
  padding-bottom: 10px;
  border-radius: 2px;
  background-color: lightgrey;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const MovieCastImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const MovieCastTitle = styled.div`
  text-align: center;
`;
export const MovieCastName = styled.h2``;
export const MovieCastChar = styled.p``;
export const MovieCastEmpty = styled.h3`
  color: red;
`;
