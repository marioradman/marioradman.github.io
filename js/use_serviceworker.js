/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Implementation of App-logic by following authors:
        Authors: Lukas Becker, Mario Radman
PWA-Framework by Mueslum Atas.
Last Change: 20.12.2021
*/

/************************
 * USE A SERVICE WORKER *
 ************************/

//Register Service Worker
// If the service worker API is supported in the browser, it is registered using the
// ServiceWorkerContainer.register() method.
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker 'Deaf i des - PWA' registered: ", serviceWorker);
            })
            .catch(error => {
                console.error("Error registering the Service Worker 'Deaf i des - PWA': ", error);
            });
    });
}
