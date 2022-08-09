import { View, Text } from 'react-native';
import React from 'react';
import { SIZES } from '../constants';

export const NFTTitle = () => {
    return (
        <View>
            <Text>NFTTitle</Text>
        </View>
    );
};

export const ETHPrice = () => {
    return (
        <View>
            <Text>ETHPrice</Text>
        </View>
    );
};

export const ImageCmp = () => {
    return (
        <View>
            <Text>ImageCmp</Text>
        </View>
    );
};
export const People = () => {
    return (
        <View>
            <Text>People</Text>
        </View>
    );
};
export const EndDate = () => {
    return (
        <View>
            <Text>EndDate</Text>
        </View>
    );
};
export const SubInfo = () => {
    return (
        <View
            style={{
                width: '100%',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
            }}
        >
            <Text>SubInfo</Text>
        </View>
    );
};
