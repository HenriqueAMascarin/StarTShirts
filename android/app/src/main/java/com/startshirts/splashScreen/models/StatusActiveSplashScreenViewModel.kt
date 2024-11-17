package com.startshirts.splashScreen.models

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow


class StatusActiveSplashScreenViewModel: ViewModel() {
    private val _status = MutableStateFlow(true)
    val status: StateFlow<Boolean> = _status

    fun changeStatusActiveSplashScreen(newStatus: Boolean){
        _status.value = newStatus
    }
}