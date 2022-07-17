import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';

ProductsFeature.propTypes = {
  
};

const useStyle = makeStyles({
  root: "",
  body: {
    padding: "20px"
  }
})
 
function ProductsFeature(props) {
  const classes = useStyle();

  const match = useRouteMatch();

  return (
    <div className={classes.body}>
      <Switch>
        <Route path={match.url} component={ListPage} exact/>
      </Switch>
    </div>
  );
}

export default ProductsFeature;