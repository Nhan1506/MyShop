import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../Component/ProductList';
import ProductSkeletonList from '../Component/ProductSkeletonList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../Component/ProductSort';
import ProductFilters from '../Component/ProductFilters';
import FilterView from '../Component/FilterView';


ListPage.propTypes = {
  
};

const UseStyle = makeStyles(theme => ({
  root: {},
  left: {
    width: '250px'
  },
  right: {
    flex: '1 1 0'
  },
  paginationCenter: {
    padding: '40px 0 20px 0',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 'row nowrap'
  }
}))

function ListPage(props) {
  const classes = UseStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  }); 

  useEffect( () => {
    ( async () => {
      try{
        const {data, pagination} = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      }
      catch (error) {
        console.log('Failed to fetch product list', error);
      }

      setLoading(false);

    })();
  }, [filters])

  const handlePaginationChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }))
  }

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }))
  }
  
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }))
  }

  const setNewFilters = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper>
              <Paper elevation={0}>
                <ProductFilters filter={filters} onChange={handleFilterChange}/>
              </Paper>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange}/>
              <FilterView filters={filters} onChange={setNewFilters}/>
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList}/>}             
              
              <Box className={classes.paginationCenter}>
                <Pagination color="primary"
                            count={Math.ceil(pagination.total / pagination.limit)} 
                            page={pagination.page} 
                            onChange={handlePaginationChange}></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;