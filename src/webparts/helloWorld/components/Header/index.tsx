import * as React from 'react';
import { SiMyanimelist } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const BASE_URL = '/sites/FullAnime/_layouts/15/workbench.aspx';

export function Header(): React.ReactElement {
  return (
    <Container>
      <div>
        <SiMyanimelist size={50} />
        <h1>My Anime List</h1>
      </div>
      <nav>
        <Link to={BASE_URL}>Listagem</Link>
        <Link to={BASE_URL + '/form'}>Adicionar</Link>
      </nav>
    </Container>
  );
}
