/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Authors: Lukas Becker, Mario Radman
Last Change: 20.12.2021
*/

let county ="";
let activity = "";
let counter = 7;
let rules_arr = "";
function loadRules() {
    // fetches params for querying the rules
    const xhr = new XMLHttpRequest();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    activity = urlParams.get('type');
    county = urlParams.get('county');

    // set intro text on page
    let countyText;
    if (activity === 'austria') {
        countyText = 'Steiermark, Niederösterreich, Oberösterreich, Kärnten, Salzburg';
    } else {
        countyText = counties[county];
    }
    document.getElementById('introMessage').innerHTML = "<p>Deine Regeln für " + activities[activity] + " in " + countyText + "</p>";

    // gets rule information
    xhr.onload = parseJson;
    switch (county) {
        case "vienna":
            xhr.open("GET","rules_vie.json",false);
            break;
        case "bgl-trl-vrb":
            xhr.open("GET","rules_btv.json",false);
            break;
        case "austria":
            xhr.open("GET","rules_rest.json",false);
            break;
    }
    xhr.send();

    // insert html with values into the pagebody
    let html = "";
    for (let i = 0; i<rules_arr.length;i++)
    {
        html += createRuleBox(rules_arr[i], county, activity);
    }
    document.getElementById("rules").innerHTML = html;

    // collapsing and expanding rules
    const coll = document.getElementsByClassName("collapsible");
    let i;

    // adds logic for expandaple rules
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            if (this.classList.contains("active")) {
                this.classList.toggle("active");
                this.nextElementSibling.style.maxHeight = null;
            } else {
                for (const e of document.getElementsByClassName('collapsible')) {
                    if (e.classList.contains("active")) {
                        e.classList.toggle("active");
                        e.nextElementSibling.style.maxHeight = null;
                    }
                }
                this.classList.toggle("active");
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            }
        });
    }
}

function parseJson() {
    const resp = this.responseText;
    let json = JSON.parse(resp,(k,v)=>{
        if(k===activity){
            if(typeof v === "string")
            {
                rules_arr = v.split(";");
            }
            console.log(rules_arr);
        }
    });
}

// creates content for rule box
function createRuleBox(description, county, activity) {
    let id = counter;
    let name = "";
    let desc = "";
    if(typeof description === "string")
    {
        const field = description.split(":");
        name = field[0];
        desc = field[1].toString();
    }
    console.log(desc);
    let html;
    html =
        '<div id="${id}">' +
        '   <button type="button" class="collapsible">' +
                name +
        '   </button>' +
        '       <div class="content container-item">\n' +
        '           <p>' +
                        desc +
        '               <a href="./form.html?rule=' + name + '&county=' + county + '&activity=' + activity + '">' +
        '                   <span class="rule-wrong-field"><img src="img/error-mini.png" data-src="img/error-mini.png" alt="Rule is Wrong?" height="20"><br />Is this rule wrong?</span>' +
        '               </a>' +
        '           </p>' +
        '       </div>' +
        '</div>';
    counter++;
    return html;
}

