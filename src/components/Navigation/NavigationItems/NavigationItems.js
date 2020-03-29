import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem
            link = "/"
            active = {true}>BurgerBuilder</NavigationItem>
        <NavigationItem
            link = "/"
            active = {true}>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;