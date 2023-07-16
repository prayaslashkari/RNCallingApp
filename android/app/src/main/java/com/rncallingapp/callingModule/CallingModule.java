package com.rncallingapp.callingModule;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.telecom.TelecomManager;
import android.util.Log;

import androidx.core.app.ActivityCompat;

public class CallingModule extends ReactContextBaseJavaModule {

    private TelecomManager telecomManager;

    CallingModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CallingModule";
    }

    @ReactMethod
    public void makeCall(String phoneNumber) {
        Log.d("CalendarModule", "Create event called with name: " + phoneNumber);
        ReactApplicationContext ctx = getReactApplicationContext();
        TelecomManager tm = (TelecomManager) ctx.getSystemService(Context.TELECOM_SERVICE);

        Uri uri = Uri.fromParts("tel", phoneNumber, null);
        Bundle extras = new Bundle();
        extras.putBoolean(TelecomManager.EXTRA_START_CALL_WITH_SPEAKERPHONE, true);
        if (ActivityCompat.checkSelfPermission(ctx, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            tm.placeCall(uri, extras);
        }

    }
}