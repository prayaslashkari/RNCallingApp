package com.rncallingapp.callingModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.net.Uri;
import android.os.Bundle;
import android.telecom.TelecomManager;
import android.util.Log;

public class CallingModule extends ReactContextBaseJavaModule {
   CallingModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName() {
    return "CallingModule";
}

    @ReactMethod
    public void makeCall(String phoneNumber) {
        Uri uri = Uri.fromParts("tel", "12345", null);
        Bundle extras = new Bundle();
        extras.putBoolean(TelecomManager.EXTRA_START_CALL_WITH_SPEAKERPHONE, true);
        telecomManager.placeCall(uri, extras);
       Log.d("CalendarModule", "Create event called with name: " + phoneNumber);
    }
}