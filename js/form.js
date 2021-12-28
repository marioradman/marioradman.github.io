/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Authors: Lukas Becker, Mario Radman
Last Change: 20.12.2021
*/

// sets the confirmation of successfully sent contact form to hidden/none for the case the old contact form didn't remove this
document.getElementById("confirmation").style.display = "none";
// event listeners for radio buttons
document.getElementById("wrongRule").addEventListener('change', hideAndDisplayRuleFields);
document.getElementById("improvements").addEventListener('change', hideAndDisplayRuleFields);
document.getElementById("bug").addEventListener('change', hideAndDisplayRuleFields);
document.getElementById("other").addEventListener('change', hideAndDisplayRuleFields);
// clears message field from predefined info message
document.getElementById("message").addEventListener('click', () => {
    document.getElementById("message").value = '';
});

// changes submit button event listener to show confirmation of sending info for a short time
const form = document.querySelector('form');
const confirmation = document.querySelector('#confirmation');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmation.classList.add('show');
    setTimeout(() => form.submit(), 2500);
});

// params fetching
const urlParams = new URLSearchParams(window.location.search);
const ruleParam = urlParams.get('rule');
const activityParam = urlParams.get('activity');
const countyParam = urlParams.get('county');

// if already rules are set, it is expected it is from the wrong rules shortcut, therefore this button is selected
if(ruleParam != null && ruleParam !== '') {
    document.getElementById("wrongRule").checked = true;
    displayRuleFields();
}

// is called by event listeners from radio buttons
function hideAndDisplayRuleFields() {
    if(document.getElementById("wrongRule").checked === true) {
        displayRuleFields();
    } else {
        hideRuleFields();
    }
}

function displayRuleFields() {
    document.getElementById("rule").required = true ;
    document.getElementById("activity").required = true ;
    document.getElementById("county").required = true ;
    document.getElementById("rule").type = "text";
    document.getElementById("activity").type = "text";
    document.getElementById("county").type = "text";
    document.getElementById("ruleLabel").style.display = "block";
    document.getElementById("activityLabel").style.display = "block";
    document.getElementById("countyLabel").style.display = "block";
    if(ruleParam != null && ruleParam !== '') {
        document.getElementById("rule").value = ruleParam ;
    }
    if(activityParam != null && activityParam !== '') {
        document.getElementById("activity").value = activityParam ;
    }
    if(countyParam != null && countyParam !== '') {
        document.getElementById("county").value = countyParam ;
    }
}

function hideRuleFields() {
    document.getElementById("rule").required = false ;
    document.getElementById("activity").required = false ;
    document.getElementById("county").required = false;
    document.getElementById("rule").type = "hidden";
    document.getElementById("activity").type = "hidden";
    document.getElementById("county").type = "hidden";
    document.getElementById("ruleLabel").style.display = "none";
    document.getElementById("activityLabel").style.display = "none";
    document.getElementById("countyLabel").style.display = "none";
    document.getElementById("rule").value = '' ;
    document.getElementById("activity").value = '' ;
    document.getElementById("county").value = '' ;
}

// writes the contact form infos into local log-file
function writeLog() {
    let entry = {
        name: "",
        mail: "",
        wrongRule: "",
        improvements: "",
        bug: "",
        other: "",
        rule: "",
        activity: "",
        county: "",
        message: "",
    };

    entry.name = document.getElementById("name").value;
    entry.mail = document.getElementById("mail").value;
    entry.wrongRule = document.getElementById("wrongRule").checked;
    entry.improvements = document.getElementById("improvements").checked;
    entry.bug = document.getElementById("bug").checked;
    entry.other = document.getElementById("other").checked;
    entry.rule = document.getElementById("rule").value;
    entry.activity = document.getElementById("activity").value;
    entry.county = document.getElementById("county").value;
    entry.message = document.getElementById("message").value;

    window.localStorage.setItem(now(), JSON.stringify(entry));
    document.getElementById("confirmation").style.display = "block";
}

// gets actual date and time for key
function now() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
}