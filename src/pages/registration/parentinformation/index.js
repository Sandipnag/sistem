import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LOGO_IMAGE } from '../../../constants/imagepath/Imagepath';
import Circle from '../../../components/circle';
import Form from './Form';
import Dropdown from '../../../components/dropdown';
import TextBox from '../../../components/textBox';
import { INACTIVE_COLOR } from '../../../constants/colors/Colors';


const ParentInformation = (props) => {

    const [indicator, setIndicator] = useState(0);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={[styles.imageContainer, { marginBottom: hp('4%') }]}>
                <Image source={LOGO_IMAGE} style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.indicatorContainer}>
                    <Circle selected={indicator >= 0} text={1} />
                    <Circle selected={indicator >= 1 && indicator <= 2} text={2} />
                    <Circle selected={indicator == 2} text={3} />
                </View>
                <View style={{ marginVertical: hp('6%') }}>
                    <Text style={styles.parentInfo}>Parent Information</Text>
                    <Text style={styles.knowBetter}>Help us know you better</Text>
                </View>
                {Platform.OS == "ios" && <KeyboardAvoidingView
                    behavior={"padding"}
                    enabled
                    keyboardVerticalOffset={140}
                    style={{
                        flex: 1,
                        paddingHorizontal: 22
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps='always'
                        contentContainerStyle={{ flexGrow: 1 }}>
                            <Form/>
                    </ScrollView>
                </KeyboardAvoidingView>}
                {Platform.OS == "android" &&
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps='always'
                        contentContainerStyle={styles.scrollViewContainer}>
                        <Form/>
                    </ScrollView>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    pageContainer: {
        flex: 1,
        paddingHorizontal: 22
    },
    imageContainer: {
        width: wp('40%'),
        height: hp('8%'),
        alignSelf: 'center'
    },
    indicatorContainer: {
        height: hp('6%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    parentInfo: {
        alignSelf: 'center',
        fontSize: wp('6%'),
        fontWeight: 'bold'
    },
    knowBetter: {
        alignSelf: 'center',
        fontSize: wp('5%'),
        fontWeight: "300"
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingVertical:20
    }
})

export default ParentInformation;