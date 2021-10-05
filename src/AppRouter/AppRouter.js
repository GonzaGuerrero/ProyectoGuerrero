import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


export default function AppRouter() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="*"><h1>Error 404: Not Found</h1></Route>
        </Switch>
      </BrowserRouter>
      
    );
  }