import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from './couterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    // lấy từ trong rootState trong app->store (counter: counterReducer)
    const count = useSelector(state => state.count)

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action); // gửi dispatch lên trên Redux
    }
    
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }
    return (
        <div>
            <div>Counter: {count}
                <br />
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;