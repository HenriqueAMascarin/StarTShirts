package com.startshirts.modules.SplashScreen

import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class SplashScreenModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SplashScreenModule";

    @ReactMethod fun changeActiveSplashScreen(status: Boolean) {
        Log.d("teste", "2312")
    }
}