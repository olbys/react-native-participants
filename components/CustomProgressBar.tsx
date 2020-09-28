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
        // alignItems: 'flex-start' // if you want to fill rows left to righ
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    progressBar: {
        height: 12,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 2,
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
    // let animation = useRef(new Animated.Value(0));
    // const [progress, setProgress] = useState<number>(0)
    // useInterval(() => {
    //     if (progress < 100) {
    //         setProgress(progress + 5);
    //     }
    // }, 1000);
    //
    // useEffect(() => {
    //     Animated.timing(animation.current, {
    //         toValue: progress,
    //         useNativeDriver: true
    //     }).start();
    // }, [progress]);
    // const width = animation.current.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ["0%", "100%"],
    //     extrapolate: "clamp"
    // })

    return (
        <View style={[styles.container, style]}>

            <View style={[styles.progressBar]}>
                <Animated.View style={[styles.absoluteFill,
                    {backgroundColor: variables.mainOrange_100, width: progress}
                ]}/>
            </View>
            {/*<View style={{width:'15%'}}>*/}
            {/*    <Text> {progress}%</Text>*/}
            {/*</View>*/}



        </View>
    );
}


const useInterval = (callback: Function, delay: number) => {
    const savedCallback = useRef(callback);
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);

}