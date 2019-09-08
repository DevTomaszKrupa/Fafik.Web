import styled from 'styled-components';

interface HeaderProps {
  headerImage: string;
}

export default {
  Header: styled.div`
    flex-grow: 1;
    background-image: ${(props: HeaderProps) =>
      `url("http://localhost/Fafik/${props.headerImage}")`};
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 5%;
  `
};
