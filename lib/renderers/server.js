import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';
import { StaticRouter } from 'react-router-dom';

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);
  const context = {};

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <StaticRouter location='/' context={context}>
        <App store={store} />
      </StaticRouter>
    ),
    initialData: resp.data,
  };
};

export default serverRender;
