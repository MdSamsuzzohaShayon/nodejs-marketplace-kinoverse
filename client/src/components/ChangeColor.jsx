import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../redux/slices/themeSlice';
// https://www.youtube.com/watch?v=k68j9xlbHHk

const ChangeColor = () => {
    const dispatch = useDispatch();
    const themeColor = useSelector(state => state.theme.value);
    const [color, setColor] = useState('blue');

    return (<div>
        <input type="text" onChange={e => {
            setColor(e.target.value)
        }} />
        <div style={{ height: '120px', width: "120px", border: `1px solid ${themeColor}` }}></div>
        <button onClick={e => dispatch(changeColor(color))}>Change color</button>
    </div>);
};

export default ChangeColor;
