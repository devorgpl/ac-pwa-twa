FROM node:16

RUN apt-get update
# android sdk for dependencies
RUN apt-get install -y openjdk-11-jdk-headless android-sdk vim
# update npm
RUN npm install -g npm@8.5.0
# bubblewrap - main TWA converter
RUN npm install -g @bubblewrap/cli
# setup jdk home and android home
ADD config.json /root/.bubblewrap/config.json
# password for keystore
ADD password.file /password.file
# generate keystore and key pair
RUN echo y | keytool -genkeypair -dname "cn=And Sample, ou=Dev, o=ArdentCode, c=PL" -alias android -keyalg RSA -keypass:file /password.file -keystore /android.keystore -storepass:file /password.file -validity 20000
# working directory (should be mounted from the host when starting container)
RUN mkdir /output
WORKDIR /output
# sample twa-manifest, should be updated before image is built or should be mounted when starting container
# this file was generated using "bubblewrap init"
ADD twa-manifest.json /twa-manifest.json
ADD https://dl.google.com/android/repository/commandlinetools-linux-8092744_latest.zip /usr/lib/android-sdk/android-tools.zip
ADD start.sh /start.sh
RUN cd /usr/lib/android-sdk && unzip android-tools.zip
ENV ANDROID_HOME /usr/lib/android-sdk/cmdline-tools
RUN echo 'export BUBBLEWRAP_KEYSTORE_PASSWORD=$(cat /password.file)'>> ~/.bashrc
RUN echo 'export BUBBLEWRAP_KEY_PASSWORD=$(cat /password.file)'>> ~/.bashrc
VOLUME /output
