#!/usr/bin/env node

import { getName } from '..';
import { startGame, endGame } from '../brain-even/brain-even-module';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
console.log('');

const name = getName();
console.log(`Hello, ${name}!`);
console.log('');

const result = startGame(name);
endGame(name, result);