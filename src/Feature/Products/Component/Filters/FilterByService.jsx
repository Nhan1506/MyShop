import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  menuCheck: {
    padding: "10px 0",
    listStyleType: "none",
  }
}))

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({filters = {}, onChange}) {
  const classes = useStyle();
  
  const handleChange = (e) => {
    if(!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  }

  return (
    <Box className={classes.root} >

      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className={classes.menuCheck}>
        {[ {value: 'isPromotion', label: 'Khuyến mãi'} ,
           {value: 'isFreeShip', label: 'Giao hàng miễn phí'}
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />  
          </li>
        ))}
      </ul>

    </Box>
  );
}

export default FilterByService;