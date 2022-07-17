import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    margin: '0',
    padding: "10px 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  menu: {
    margin: '0',
    padding: '0',
    listStyleType: "none",
    transition: "all .3s",
    '& > li': {
      cursor: "pointer",
      fontSize: "14px",
      padding: "10px 0",
      '&:hover': {
        color: theme.palette.primary.dark,
        transition: "all .3s",
      }
    }
  }
}))

function FilterByCategory({onChange}) {

  const classes = useStyle();
  
  const [categoryList, setCategoryList] = useState([]);

  useEffect( () => {
    ( async() => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map(x => ({
            id: x.id,
            name: x.name
          }))
        );
      } catch (error) {
        console.log('Failed to fectch category list', error);
      }
    })()
  }, []);

  const handleCategoryClick = (category) => {
    if(onChange){
      onChange(category.id)
    }
  }

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.title}>DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map(category => (
          <li key={category.id} 
              onClick={ () => handleCategoryClick(category)} 
              className={classes.tagLi}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;