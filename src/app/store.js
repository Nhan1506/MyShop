import counterReducer from '../Feature/Counter/couterSlice';


const {configureStore} = require('@reduxjs/toolkit');


const rootReducer = {
  count: counterReducer,
}

const store = configureStore({
  reducer : rootReducer,
});

export default store;