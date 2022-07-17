import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TodoForm from './Component/TodoForm';
import TodoList from './Pages/ListPage';
import DetailsPage from './Pages/PageDetails';

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {
  const match = useRouteMatch();
  
  return (
    <div>
      <Switch>  
        <Route path={match.path} component={TodoList} exact/>
        <Route path={`${match.path}/register`} component={TodoForm} exact/>
        <Route path={`${match.path}/:todoId`} component={DetailsPage} />
      </Switch> 
    </div>
  );
}

export default TodoFeature; 