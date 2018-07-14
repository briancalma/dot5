#!/bin/bash
rm /root/apps/cities/www/assets/app-debug.apk
ionic cordova build android  --prod
mv /root/apps/cities/platforms/android/app/build/outputs/apk/debug/app-debug.apk /root/apps/cities/www/assets/