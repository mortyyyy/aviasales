import styled from "styled-components";

export const TabStyled = styled.li`
  padding: 15px 0;
  font-size:12px;
  text-transform: uppercase;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  border: ${props => props.active ? '1px solid #2196F3' : '1px solid #DFE5EC'};
  background-color: ${props => props.active ? '#2196F3' : '#FFF'};
  color: ${props => props.active ? '#FFF' : '#000'};
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;