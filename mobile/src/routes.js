import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Timeline,
        New
    })
);
