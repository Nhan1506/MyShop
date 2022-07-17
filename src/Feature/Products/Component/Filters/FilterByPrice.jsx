import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const UseStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  boxSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textFiled: {
    padding: "0 5px",
  },
  buttonApply: {
    margin: "10px 0",
  }
}))


function FilterByPrice({onChange}) {
  const classes = UseStyle();

  const [value, setValue] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,  
    }))
  }

  const handleFilterClick = () =>{
    if(onChange) onChange(value);

    setValue({
      salePrice_gte: 0,
      salePrice_lte: 0,
    })
  }
  return (
    <Box className={classes.root} >

        <Typography variant="subtitle2">LỌC THEO GIÁ</Typography>
        <Box className={classes.boxSearch}>
          <TextField className={classes.textFiled} name="salePrice_gte" value={value.salePrice_gte} onChange={handleChange}/>
          <span>-</span>
          <TextField className={classes.textFiled} name="salePrice_lte" value={value.salePrice_lte} onChange={handleChange}/>

        </Box>

        <Button variant="outlined" fullWidth
                color="primary" 
                onClick={handleFilterClick}
                className={classes.buttonApply}>Áp dụng</Button>

    </Box>
  );
}

export default FilterByPrice;