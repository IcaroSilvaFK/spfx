import * as React from 'react';

import { IStateData } from '../../../DTOs/ListResponse.interface';

import { Container, Separator } from './styles';

export function Card({
  Created,
  GUID,
  ID,
  Title,
  situation,
  username,
  image_cover,
}: IStateData): React.ReactElement {
  async function handleDeleteAnime(id: number): Promise<void> {}

  return (
    <Container>
      <h3>{username}</h3>
      <div className='container__details'>
        <p>{situation}</p>
      </div>
      <div>
        <img
          src={image_cover.serverUrl + image_cover.serverRelativeUrl}
          alt={username}
        />
      </div>
      <Separator />
    </Container>
  );
}
