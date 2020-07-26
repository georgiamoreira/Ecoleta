import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Props>`
  width: 66px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  transition: 1s all ease;
  background-color: ${(props) => props.active ? '#2FB86E': '#A0A0B2' };
  cursor: pointer;


  &::after{
    width: 26px;
    height: 26px;
    background-color: white;
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => props.active ? '37px': '2px' };
    transition: 1s all ease;

  }


  
`;