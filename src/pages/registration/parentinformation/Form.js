import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dropdown from '../../../components/dropdown';
import TextBox from '../../../components/textBox';
import CalendarView from '../../../components/calendar';
import { PlainButton } from '../../../components/plainButton';
import { THEME_COLOR, SILVER_COLOR, INACTIVE_COLOR, WHITE_COLOR } from '../../../constants/colors/Colors';

const Form = (props) => {

    const [calendarStatus, setCalendarStatus] = useState(false);
    const [dob, setDob] = useState('')
    const getStateList = () => {
        alert("")
    }

    const toggleCalendar = () => {
        setCalendarStatus(!calendarStatus)
    }

    const getDate = (day) => {
        setDob(day.dateString)
        setCalendarStatus(!calendarStatus)
    }

    return (
        <>
            {calendarStatus && <CalendarView onDayPress={getDate} />}

            <Dropdown
                label={'State of residence'}
                value={''}
                onPress={getStateList}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <Dropdown
                label={'Date of birth'}
                value={dob}
                onPress={toggleCalendar}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <TextBox
                customStyle={{ marginBottom: hp('2%') }}
                // value={''}
                label={'Address'}
                multiline={true}
                onChangeText={(address) => { console.log(address) }}
            />
            <Dropdown
                label={'Race'}
                value={''}
                onPress={getStateList}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <Dropdown
                label={'Occupation'}
                value={''}
                onPress={getStateList}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <Dropdown
                label={'Number of kids'}
                value={'1'}
                onPress={getStateList}
                customStyle={{ marginBottom: hp('2%') }}
            />
            <PlainButton
                text={'Click here to upload'}
                textStyle={{
                    color: INACTIVE_COLOR
                }}
                buttonStyle={{
                    backgroundColor: SILVER_COLOR,
                    height: hp('6%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp('2%')
                }} 
            />
            <PlainButton
                text={'CONTINUE'}
                textStyle={{
                    color: WHITE_COLOR,
                    fontSize:wp('5%'),
                    letterSpacing:1
                }}
                buttonStyle={{
                    backgroundColor: THEME_COLOR,
                    height: hp('6%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }} 
            />
        </>
    )
}

export default Form;