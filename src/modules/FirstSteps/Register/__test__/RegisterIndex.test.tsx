import { render } from '@testing-library/react-native';
import React from 'react';
import RegisterIndex from '@src/modules/FirstSteps/Register/RegisterIndex';
import { NavigationContainer } from '@react-navigation/native';

describe('RegisterIndex', () => {
    describe('testing render', () =>{
        it('the component rendered', () => {
            render(<NavigationContainer><RegisterIndex /></NavigationContainer>);
        });
    });

});
