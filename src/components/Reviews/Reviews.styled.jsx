import styled from 'styled-components';

export const Wrapper = styled.div`
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
  padding-right: 10px;
  justify-content: start;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  border-top: 1px solid #553c9a;
  width: 100%;

  &:first-child {
    border-top: 0;
    margin-top: 0;
  }
`;

export const Name = styled.p`
  margin-bottom: 7px;
  margin-top: 7px;
  font-size: 20px;
  font-weight: bold;
`;
