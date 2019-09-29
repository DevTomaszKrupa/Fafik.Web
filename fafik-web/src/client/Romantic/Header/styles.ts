import styled from 'styled-components';

import { IMAGE_STORAGE } from 'application/config';

interface HeaderProps {
  headerImage: string;
}

export default {
  Header: styled.div`
    flex-grow: 1;
    background-image: ${(props: HeaderProps) =>
      `url("${IMAGE_STORAGE + props.headerImage}")`};
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 5%;
  `,
};
