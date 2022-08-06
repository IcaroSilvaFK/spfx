import * as React from 'react';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import { AddNewAnime } from '../pages/AddNewAnime';

import { Home } from '../pages/Home';

interface IRoutesProps {
  absolute_url: string;
}

const BASE_URL = '/sites/FullAnime/_layouts/15/workbench.aspx';

export function Routes({ absolute_url }: IRoutesProps): React.ReactElement {
  return (
    <BrowserRouter>
      <Router>
        <Route path={BASE_URL} element={<Home />} />
        <Route path={BASE_URL + '/form'} element={<AddNewAnime />} />
      </Router>
    </BrowserRouter>
  );
}
