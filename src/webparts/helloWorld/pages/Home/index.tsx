import * as React from 'react';
import { useState, useEffect } from 'react';
import { SPFI, spfi } from '@pnp/sp';
import { Caching } from '@pnp/queryable';

import { Header } from '../../components/Header';
import { AnimeList } from '../../components/AnimesList';
import { IResponseData, IStateData } from '../../DTOs/ListResponse.interface';
import { getSP } from '../../pnpjs.config';

interface IParseProps {
  serverRelativeUrl: string;
  serverUrl: string;
}

export function Home(): React.ReactElement {
  const [data, setData] = useState<IStateData[] | null>(null);

  useEffect(() => {
    readFile().catch((err) => console.log(err));
  }, []);

  async function readFile(): Promise<void> {
    const _spfi = getSP();

    if (!_spfi) return;

    const spCache = spfi(_spfi).using(Caching({ store: 'session' }));

    const response: IResponseData[] = await spCache.web.lists
      .getByTitle('animes')
      .items();
    const data: IStateData[] = response.map((element) => {
      const { Created, GUID, ID, Title, anime_cover, situation, username } =
        element;
      const image_cover: IParseProps = JSON.parse(anime_cover);
      return {
        Created,
        GUID,
        ID,
        Title,
        situation,
        username,
        image_cover,
      };
    });
    setData(data);
  }

  return (
    <>
      <Header />
      {data && <AnimeList data={data} />}
    </>
  );
}
