package com.startshirts

import android.os.Bundle
import androidx.activity.viewModels
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.startshirts.splashScreen.models.StatusActiveSplashScreenViewModel

class MainActivity : ReactActivity() {
  val statusViewModel by viewModels<StatusActiveSplashScreenViewModel>()

  override fun onCreate(savedInstanceState: Bundle?) {

    installSplashScreen().apply {
      setKeepOnScreenCondition{
        statusViewModel.status.value == true
      }
    }

    super.onCreate(null)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "StarTShirts"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
