#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const getFiles = require('./get-files');

const files = getFiles();
const rediretsFile = path.join(__dirname, '../data/redirect.json');

const redirectsContent = files.map((file, idx) => {
  let fileContent = fs.readFileSync(
    path.join(__dirname, `../tmp/${file}.html`),
    'utf8',
  );

  fileContent = fileContent.replace(/---\npermalink: \//gm, '{"permalink":"');
  fileContent = fileContent.replace(/\ndestination: /gm, '", "destination":"');
  fileContent = fileContent.replace(/\n---/gm, '"}');
  fileContent = fileContent.replace(/\s/gm, '');
  fileContent = fileContent.toLowerCase();

  return fileContent;
});

const redirects = JSON.parse(`[${redirectsContent.join(',\n')}]`);

fs.writeFile(rediretsFile, JSON.stringify(redirects, null, 2), (error) => {
  if (error) {
    console.log(chalk.red(`Error: ${error}`));
  }

  console.log(chalk.green('Done'));
});
