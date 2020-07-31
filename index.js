#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// Import Components to be called
const general = require('./src/components/general');

// Clear the terminal to have a clean slate
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Demo CLI', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  try {
    let output = await general.helloWorld();
    console.log(chalk.green(output));
  } catch(err) {
      if (err) console.log(chalk.red(err));
  }
};

run();
