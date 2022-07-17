import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Component/Header';
import './Component/Header/style.scss';
import NotFound from './Component/NotFound';
import CounterFeature from './Feature/Counter';
import ProductsFeature from './Feature/Products';
import TodoFeature from './Feature/Todo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" component={ CounterFeature } exact></Route>
        <Route path="/todos" component={TodoFeature}/>
        <Route path="/products" component={ProductsFeature} />
        
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
