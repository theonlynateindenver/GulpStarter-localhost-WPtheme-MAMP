# A quick start for GULP with WP child theme "storefront" development on localhost with MAMP

Once installed and active, this should make your workflow a lot faster:
- updating the styles.scss file: upon save, a new style.css file will be generated in the child theme's root.
- Upon save, your default browser should open previewing this page. Any new saves on any included PHP, SCSS or JS file (JS files included in this funtionality are limited to assets/js/).

## Usage

A quick bunch of files to get Gulp in place while doing theme development on your localhost with MAMP.

<strong>Step 1</strong> - Install Mamp (skip if MAMP is already installed)
https://www.mamp.info

<strong>Step 2</strong> - Install Node and NPM
https://docs.npmjs.com/getting-started/installing-node

<strong>Step 3</strong> - Install Gulp
http://gulpjs.com/

<strong>Step 4</strong> - Install WordPress locally
https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP

## That was quite a bit of installing, from here on out we'll just be ironing out a few things and we'll be up in no time.

<strong>Step 5</strong> - Download the files here, and place them in your "themes" folder (wp-content > themes)
- Don't forget to activate the storefront child theme

<strong>Step 6</strong> - Open Terminal (to the root of your childtheme folder) and run "npm install". This should install all NPM packets that are mentioned in the package.json file

<strong>Step 7</strong> - While in the root child theme folder, in Terminal, type "gulp". (at any point to stop the process, type "ctrl C".
