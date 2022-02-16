# PWA to TWA (apk)

1. review builder/twa-manifest.json. Update data to match the project. Note that this file was generated from ```bubblewrap init --manifest=URL_TO_PWA_MANIFEST``` output


2. build the builder

``` 
cd builder && ./build.sh 
```

3. run the builder container in interactive mode (files will be generated in newly created out folder on the host)

``` 
mkdir out && docker run -v $(pwd)/out:/output -it --rm pwa-apk-build /bin/bash 
```

4. inside the builder generate android project and build it

``` 
bubblewrap update --manifest=/twa-manifest.json
yes | bubblewrap build --manifest=/twa-manifest.json
```

5. ctrl+d to exit and remove the container

Now in ```out``` folder You have an android project with ready to use ```apk``` (both signed and unsigned) and ```aab``` ready to deploy to Google Play

After installing apk on Your phone (using adb or installing the file) there will be a status bar from Chrome visible on top. This one should dissapear after Digital Asset Links file is attached and when it's installed from Google Play Store.

There is also pwabuilder.com site which uses bubblewrap to generate apk and it can also generate applications for IOS or MS store. Currently it works only using Their site, but cli tool is in progress (currently not working at all)


## Issues

- Configuring an application in Google Play Store is time consuming (a lot of questions, screenshots, privacy policy, time to validate it by google)
- I was not able to create an app downloadable from Play Store, not sure why it's not working for internal/closed tests
- Status bar on the application bar. Probably needs Digital Asset Links file
- for the first build there is an error:
    
      Caused by: java.lang.IllegalStateException: Failed to find target with hash string 'android-31' in: /usr/lib/android-sdk/cmdline-tools
    but the second build works.
- Can't put .well-known/assetlinks.json to github pages, should be served on other server

## Sources:

https://medium.com/pwabuilder/microsoft-and-google-team-up-to-make-pwas-better-in-the-play-store-b59710e487

https://web.dev/using-a-pwa-in-your-android-app/


