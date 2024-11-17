package com.startshirts.splashScreen.modules

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.startshirts.splashScreen.models.StatusActiveSplashScreenViewModel

class SplashScreenModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SplashScreenModule"

    private val statusViewModel = StatusActiveSplashScreenViewModel();

    @ReactMethod fun changeActiveSplashScreen(newStatus: Boolean) {
        statusViewModel.changeStatusActiveSplashScreen(newStatus)
    }
}