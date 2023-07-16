import {useState} from 'react';
import {NativeModules, PermissionsAndroid, ToastAndroid} from 'react-native';

const {CallingModule} = NativeModules;

export const useCalling = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const requestPermissions = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE).then(
      status => {
        setIsPermissionGranted(status === PermissionsAndroid.RESULTS.GRANTED);
      },
    );
  };

  const placeCall = (number: string) => {
    if (isPermissionGranted) {
      CallingModule.makeCall(number);
    } else {
      requestPermissions();
      ToastAndroid.show(
        'Please grant permission to make calls',
        ToastAndroid.SHORT,
      );
    }
  };

  return {
    requestPermissions,
    placeCall,
  };
};
