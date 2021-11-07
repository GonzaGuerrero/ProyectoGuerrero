import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart'
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';


export default function AppRouter() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category/:categoryid" component={ItemListContainer}/>
            <Route path="/item/:itemid" component={ItemDetailContainer}/>
            <Route path="/form" component={Form} />
            <Route path="*"><h1>Error 404: Not Found</h1></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    );
  }