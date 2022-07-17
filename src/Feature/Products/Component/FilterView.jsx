import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';


const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "no wrap",
    alignItems: "center",

    listStyleType: "none",
    margin: theme.spacing(2, 0),
    padding: 0,

    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}))


FilterView.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const FILTER_LIST =  [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemoveable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = {...filters};

      if(newFilters.isFreeShip){
        delete newFilters.isFreeShip;
      } else{
        newFilters.isFreeShip = true;
      } 
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = {...filters}
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
];

function FilterView({filters = {}, onChange = null}) {
  const classes = useStyle();

  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter( (x) => x.isVisible(filters)).map( (index) => (
        <li key={index.id}>
          <Chip 
            size="small"
            label={ index.getLabel(filters) }
            color={ index.isActive(filters) ? "primary" : "default" }
            clickable={!index.isRemoveable}
            onClick={ 
              index.isRemoveable 
                ? null 
                : () => {
                  if(!onChange) return;

                  const newFilters = index.onToggle(filters)
                  onChange(newFilters);
                }
            }
            onDelete={ index.isRemoveable 
              ? () => {
                if(!onChange) return;

                const newFilters = index.onRemove(filters)
                onChange(newFilters);
                } 
              : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterView;