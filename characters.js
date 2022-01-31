import { Adviser } from './classes/Adviser.js';
import { King } from './classes/King';
import { Knight } from './classes/Knight.js';
import { Squire } from './classes/Squire.js';
import { chars } from 'characters.js';
import { Character } from './classes/Character.js';

const joffreyBaratheon = new King('Joffrey Baratheon');
const jaimeLannister = new Knight('Jaime', 'Lannister');
const daenerysTargaryen = new Knight('Daenerys', 'Targaryen');
const tyrionLannister = new Knight('Tyrion', 'Lannister');
const bronn = new Squire('Bronn');

tyrionLannister.patrin = daenerysTargaryen;
bronn.patron = jaimeLannister;

export const chars = [
    joffreyBaratheon,
    jaimeLannister,
    daenerysTargaryen,
    tyrionLannister,
    bronn,
];
