import * as React from 'react';
import { MdDone } from 'react-icons/md';

import { IStateData } from '../../DTOs/ListResponse.interface';
import { Card } from './Card';

import { Container, Body, Header, Separator } from './styles';

interface IAnimeListProps {
  data: IStateData[];
}

export function AnimeList({ data }: IAnimeListProps): React.ReactElement {
  return (
    <Container>
      <Header>
        <h3>Seus animes favoritos em um só lugar</h3>
        <MdDone size={25} color='#319795' />
      </Header>
      <Separator />
      <Body>
        {data.map((anime) => (
          <Card {...anime} key={anime.GUID} />
        ))}
      </Body>
    </Container>
  );
}
