import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Modal/Backdrop/Backdrop';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className ={attachedClasses.join(' ')}>
                <Logo height = '11%'/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;