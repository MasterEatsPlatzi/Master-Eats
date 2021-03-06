import React from 'react';
import '../assets/styles/components/App.scss';
import '../assets/styles/components/Globales.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Containers from '../containers/Containers';
import Layout from '../components/Layout';
import Success from '../pages/Success';
import UserAccount from '../pages/UserAccount';
import AdminCMS from '../pages/AdminCMS';
import NotFound from '../pages/NotFound';
import Form from '../pages/Form';
import ProductsProvider from '../utils/ProductContexts';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import Carrousel from '../components/Carousel/Carrousel';

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Layout>
          <Containers>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/success' component={Success} />
              <Route exact path='/notFound' component={NotFound} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/account' component={UserAccount} />
              <Route exact path='/sign' component={Form} />
              <Route exact path='/admin' component={AdminCMS} />
              <Route exact path='/carrousel' component={Carrousel} />
              <Route component={Home} />
            </Switch>

            <ul>
              <li>
                <Link to='/carrousel'>.</Link>
              </li>
            </ul>
          </Containers>
        </Layout>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
