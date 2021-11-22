import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './state/actionCreators/actions';

const App = () => {


    const count = useSelector(state => state.value)
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>

            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())} >-</button>

        </div>
    )
}

export default App
