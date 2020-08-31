import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';


import Header from './../src/Components/Header/header';
import Loader from './Components/Spinner/spinner';

const LoadableHome = Loadable({
  loader: () => import('./Pages/Landing/landing'),
  loading: Loader,
});

const LoadablePlanetDetails = Loadable({
  loader: () => import('./Pages/Home/home'),
  loading: Loader,
});

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>

        <Switch>

          <Route exact={true} path="/" component={LoadableHome} />
          <Header>
          <Route exact={true} path="/home" component={LoadablePlanetDetails} />
      
          </Header>
        </Switch>

      </BrowserRouter>
    );
  }
}

export default AppRouter;
