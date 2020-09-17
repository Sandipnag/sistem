import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, ImagePropTypes } from 'react-native';
import { BLUE_CIRCLE, LOGO_IMAGE } from '../../constants/imagepath/Imagepath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../constants/fonts/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { THEME_COLOR } from '../../constants/colors/Colors';

const Login = (props) => {


    return (
        <SafeAreaView style={styles.safeAreaViewconatiner}>
            <View style={styles.container}>
                <Image
                    source={BLUE_CIRCLE}
                    style={{
                        width: wp('55%'),
                        height: wp('55%'),
                        marginLeft: wp('80%')
                    }}
                />
                <View style={styles.imageContainer}>
                    <Image source={LOGO_IMAGE} style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />
                </View>

                {Platform.OS == "ios" && <KeyboardAvoidingView
                    behavior={"padding"}
                    enabled
                    keyboardVerticalOffset={100}
                    style={{
                        flex: 1,
                        paddingHorizontal: 22
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps='always'
                        contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
                        <View style={[{ height: hp('6%'), backgroundColor: '#fff' }, { marginBottom: hp('3%'), flexDirection: 'row' }]}>
                            <TextInput style={{ flex: .9, paddingLeft: 20 }} placeholder={'Username'} />
                            <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                                <Entypo
                                    name={'user'}
                                    size={wp('5%')}
                                    color={'#E2E1E1'}
                                />
                            </View>
                        </View>
                        <View style={[{ height: hp('6%'), backgroundColor: '#fff' }, { marginBottom: hp('3%'), flexDirection: 'row' }]}>
                            <TextInput style={{ flex: .9, paddingLeft: 20 }} placeholder={'Password'} />
                            <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                                <SimpleLineIcons
                                    name={'lock'}
                                    size={wp('5%')}
                                    color={'#E2E1E1'}
                                />
                            </View>
                        </View>
                        <Text>Forgot Password ? </Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('PostAuth')}
                            style={styles.buttonContainer}>
                            <Text style={{ fontSize: wp('5%'), color: '#fff' }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Resgistration')} style={{ marginVertical: hp('2%') }}>
                            <Text style={{ fontSize: wp('3%'), alignSelf: 'center' }}>Don't have an account? Please register</Text>
                        </TouchableOpacity>
                        <Image
                            source={BLUE_CIRCLE}
                            style={{
                                width: wp('20%'),
                                height: wp('20%')
                            }}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>}
                {Platform.OS == "android" && <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='always'
                    contentContainerStyle={{ justifyContent: 'center', flexGrow: 1, paddingHorizontal: 22 }}>
                    <View style={[{ height: hp('6%'), backgroundColor: '#fff' }, { marginBottom: hp('3%'), flexDirection: 'row' }]}>
                        <TextInput style={{ flex: .9, paddingLeft: 20 }} placeholder={'Username'} />
                        <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                                name={'user'}
                                size={wp('5%')}
                                color={'#E2E1E1'}
                            />
                        </View>
                    </View>
                    <View style={[{ height: hp('6%'), backgroundColor: '#fff' }, { marginBottom: hp('3%'), flexDirection: 'row' }]}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={{ flex: 1, paddingLeft: 20 }}
                            placeholder={'Password'} />
                        <View style={{ flex: .1, alignItems: 'center', justifyContent: 'center' }}>
                            <SimpleLineIcons
                                name={'lock'}
                                size={wp('5%')}
                                color={'#E2E1E1'}
                            />
                        </View>
                    </View>
                    <Text>Forgot Password ??? </Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('PostAuth')}
                        style={styles.buttonContainer}>
                        <Text style={{ fontSize: wp('5%'), color: '#fff' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Resgistration')} style={{ marginVertical: hp('2%') }}>
                        <Text style={{ fontSize: wp('3%'), alignSelf: 'center' }}>Don't have an account? Please register</Text>
                    </TouchableOpacity>
                    <Image
                        source={BLUE_CIRCLE}
                        style={{
                            width: wp('20%'),
                            height: wp('20%')
                        }}
                    />
                </ScrollView>}

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaViewconatiner: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        width: wp('70%'),
        height: hp('8%'),
        alignSelf: 'center'
    },
    buttonContainer: {
        width: wp('35%'),
        height: hp('6%'),
        backgroundColor: THEME_COLOR,
        alignSelf: 'flex-end',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Login;
