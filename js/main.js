/* MAIN */
/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Implementation of App-logic by following authors:
        Authors: Lukas Becker, Mario Radman
PWA-Framework by Mueslum Atas.
Last Change: 20.12.2021
*/

//The following code detects if the PWA is launched as an app or visited as a website
//Source: https://stackoverflow.com/questions/50543163/can-i-detect-if-my-pwa-is-launched-as-an-app-or-visited-as-a-website

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}
