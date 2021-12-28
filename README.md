# deaf i des
This app should provide the user with information about the valid covid rules in austria.

##
Project from course Mobile Platforms, 2021
Mobile Software Development, 2020

## developers
Lukas Becker
Mario Radman

## installation
The PWA must be deployed via a server, to the user.
For this you can use for example XAMPP or the built in server of IntelliJ/WebStorm/VisualStudio.

## start:
[http://localhost/deaf_i_des/index.html](http://localhost/deaf_i_des/index.html)
<br />As it is a PWA, a local installation of the application is possible as also using it in the browser.

## usage
The app implements 3 main screens:
- County
  - On this page, the user selects the county he/she wants to do something in
  - The counties are sampled, depending on the same rules
- Activities
  - On this page the user selects the activities he/she wants to do in the previously selected county
  - The activities are sampled, depending on the same rules
- Rules
  - In the end the user can see the rules for his selected options
  - The user can press on the rules to see more information about this rule
  - Currently, the detailed description is not fully implemented and more of a placeholder
  - If the user has the opinion that a rule is wrong he can press the "wrong rule" shortcut to inform the developers about this
    - About the "wrong rule" shortcut, see more infos later in the readme

Additionally, there are 3 more pages for special use cases:
- Settings
  - On this page the user can see regulations and infos
- Contact form (Standard View)
  - In the contact form the user can send the developers a message
  - The least requirement is the name, the mail and the topic
  - If the topic is "wrong rule" the user also has to say:
    - What rule is wrong?
    - With which activity?
    - In which county?
  - When the user presses send, he gets a confirmation about the successfully sent form
  - The form is saved in the local storage
- Contact form (Wrong rule shortcut)
  - This page is accessible via the "wrong rule"-shortcut from the rules page
  - This contact form looks like the standard view of the contact form, and technically it is the same page
  - Predefined radio button for "wrong rule" is preselected in the contact form
  - Also, the information from the rule where the user pressed the "wrong rule"-shortcut are autocompleted into the fields
- Log
  - Contacts form are saved in the local storage
  - The user/dev/admin can access this page via the settings page
    - On the bottom is a button, a password must be entered, this is currently, for dev purposes, visible
  - The user/dev/admin can see in this way the inserted contact forms
    - ATTENTION: In the beginning this is empty, so first some values must be entered into the contact form to fill this page
  