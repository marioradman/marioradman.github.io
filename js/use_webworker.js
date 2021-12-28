/********************
 * USE A WEB WORKER *
 ********************/
/*
Deaf i des
PWA
Project for Mobile Platforms 2021, MSD20, FH Joanneum
Implementation of App-logic by following authors:
        Authors: Lukas Becker, Mario Radman
PWA-Framework by Mueslum Atas.
Last Change: 20.12.2021
*/

const activities = {
  "essentials": "Lebensmittelgeschäft, Bauernmärkte, Apotheken, Drogerienmärkte, Banken und Tankstellen",
  "shopping": "Sonstige Einkäufe sowie Dienstleistungen (z.B. Kleidung, Frisör)",
  "gastro": "Restaurant oder Bar",
  "hotels": "Hotels und Übernachtungen",
  "culture": "Sport, Freizeit, Kultur, Veranstaltungen",
  "medical": "Krankenhäuser und Gesundheitseinrichtungen",
  "transport": "Öffentliche Verkehrsmittel",
  "specialTransports": "Seilbahnen, Schiffsfahrten, Busreisen"
};

const counties = {
  "vienna": "Wien",
  "bgl-trl-vrb": "Burgenland, Tirol, Vorarlberg",
  "austria": "Rest Österreich"
};

new Worker("js/webworker.js");

function fillButtonText() {
  if (window.location.href.includes('activity.html')) {
    for (const  [key, values] of Object.entries(activities)) {
      try {
        document.getElementById(key).innerText = activities[key];
      } catch (e) {
        console.log("Element with id" + key + "on page activity does not exist.\n" + e);
      }
    }
  }

  if (window.location.href.includes('index.html')) {
    for (const  [key, values] of Object.entries(counties)) {
      try {
        document.getElementById(key).innerText = counties[key];
      } catch (e) {
        console.log("Element with id" + key + "on page index does not exist.\n" + e);
      }
    }
  }
}


