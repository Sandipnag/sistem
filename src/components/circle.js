import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WHITE_COLOR, THEME_COLOR, INACTIVE_COLOR } from '../constants/colors/Colors';
const Circle = ({ text, selected }) => {
    return (
        <View style={[styles.circle, selected ? styles.activeCircle : styles.inactiveCircle]}>
            {selected && <Text style={styles.circleText}>{text}</Text>}
        </View>
    )
}

export default Circle; 
const styles = StyleSheet.create({
    circle: {
        width: wp('10%'),
        height: wp('10%'),
        borderRadius: wp('10%') / 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    circleText: {
        color: WHITE_COLOR
    },
    activeCircle: {
        backgroundColor: THEME_COLOR,
    },
    inactiveCircle: {
        backgroundColor: INACTIVE_COLOR
    },
})