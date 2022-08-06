import * as React from 'react';

import { GlobalCSS } from './styles/global';
import { Routes } from './routes';

interface IAppProps {
  displayName: string;
  absolute_url: string;
}

export function App({
  displayName,
  absolute_url,
}: IAppProps): React.ReactElement {
  console.log(absolute_url);
  return (
    <>
      <GlobalCSS />
      <Routes absolute_url={absolute_url} />
    </>
  );
}
