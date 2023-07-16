import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCalling} from '../../hooks';
import Icon from 'react-native-vector-icons/Ionicons';

export const Dialer = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const {placeCall, requestPermissions} = useCalling();

  const handleInput = useCallback(
    (input: string) => {
      return () => {
        if (phoneInput.length < 10) {
          setPhoneInput(phoneInput + input);
        }
      };
    },
    [phoneInput],
  );

  const handleBackspace = () => {
    setPhoneInput(phoneInput.slice(0, -1));
  };

  useEffect(() => {
    requestPermissions();
  }, [requestPermissions]);

  const handleCall = () => {
    if (phoneInput.length === 10) {
      placeCall(phoneInput);
    } else {
      ToastAndroid.show('Please enter a 10 digit number', 5);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} value={phoneInput} />
      <View>
        <View style={styles.dialerWrapper}>
          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('1')}>
            <Text style={styles.dialerText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('2')}>
            <Text style={styles.dialerText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('3')}>
            <Text style={styles.dialerText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('4')}>
            <Text style={styles.dialerText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('5')}>
            <Text style={styles.dialerText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('6')}>
            <Text style={styles.dialerText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('7')}>
            <Text style={styles.dialerText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('8')}>
            <Text style={styles.dialerText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('9')}>
            <Text style={styles.dialerText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commmonButtonStyles}
            onPress={handleInput('0')}>
            <Text style={styles.dialerText}>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.extraButtonWrapper}>
          <TouchableOpacity
            style={[styles.commmonButtonStyles, styles.callButtonStyles]}
            onPress={handleCall}>
            <Icon name="call" size={25} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBackspace}
            style={[styles.commmonButtonStyles, styles.backspaceButtonStyle]}>
            <Icon name="backspace" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },

  input: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },

  dialerWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dialerText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },

  commmonButtonStyles: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#3A3A3A',
  },

  extraButtonWrapper: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  backspaceButtonStyle: {
    position: 'absolute',
    right: 50,
  },

  callButtonStyles: {backgroundColor: '#68CC65'},
});
