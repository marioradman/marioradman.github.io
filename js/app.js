/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Authors: Lukas Becker, Mario Radman
Last Change: 20.12.2021
 */

function goToActivity(selectedCounty) {
    window.location.href = "activity.html?county=" + selectedCounty;
}

function getRules(type) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const county = urlParams.get('county');

    window.location.href = "rules.html?type=" + type + "&county=" + county;
}

function goBackToActivity() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const county = urlParams.get('county');

    window.location.href = "activity.html?county=" + county;
}

function loadLog() {
    // check for correct password as query param to ensure 'security'
    // simple form of this password because of educational character of PWA
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pw = urlParams.get('pw');
    if (pw == null || pw !== 'password') {
        return;
    }

    let log = '';

    // encodes json string to well formatted string to be displayed
    for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        let item = window.localStorage.getItem(key);
        item = replaceAll(item, '{', '');
        item = replaceAll(item, '}', '<br />');
        item = replaceAll(item, '"', '');
        item = replaceAll(item, ':', ': ');
        item = replaceAll(item, ',', ' <br />');
        log += '<div class="container-item">' + item + '</div>' + '<br /><br /><hr /><br /><br />';
    }

    document.getElementById("log").innerHTML = log;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}