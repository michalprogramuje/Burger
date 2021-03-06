import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.More} 
            onClick={props.added}>MORE</button>
        <button 
            className={classes.Less} 
            onClick={props.substracted} 
            disabled={props.disabled} >LESS</button>
    </div>
);

export default buildControl;