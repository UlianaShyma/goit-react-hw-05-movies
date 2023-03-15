import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  max-height: 500px;

  padding: 20px;
  border-radius: 2px;
  overflow-y: scroll;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: overlay;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  width: 200px;

  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  & img {
    height: 300px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const About = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;
