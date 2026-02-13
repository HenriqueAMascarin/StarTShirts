package com.startshirts.splashScreen.modules

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.startshirts.MainActivity

class SplashScreenModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "SplashScreenModule"

    @ReactMethod fun changeActiveSplashScreen(newStatus: Boolean) {
        val activity = reactApplicationContext.currentActivity as? MainActivity

        activity?.runOnUiThread { activity?.statusViewModel?.changeStatusActiveSplashScreen(newStatus) }
    }
}