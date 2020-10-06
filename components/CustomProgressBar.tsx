import * as React from "react";
import {useEffect, useRef} from "react";
import {Animated, StyleSheet, Text, View, ViewStyle} from "react-native";
import variables from "../assets/variables";


interface ICustomProgressBar {
    progress: number
    style?: ViewStyle
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf:"auto",
        elevation:10,
        shadowColor:'#000000',
        shadowOpacity:1

    },
    progressBar: {
        height: 12,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor:'#b3adad',
        borderRadius: 5
    },
    absoluteFill: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

export function CustomProgressBar({progress, style}: ICustomProgressBar) {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.progressBar]}>
                <Animated.View style={[styles.absoluteFill,
                    {backgroundColor: variables.mainOrange_100, width: progress}
                ]}/>
            </View>
        </View>
    );
}