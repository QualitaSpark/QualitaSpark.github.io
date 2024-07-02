import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';

export const actions = [
  {
    id: 'hr.knowNothing',
    content: 'Non so nulla di AI',
  },
  {
    id: 'hr.goodAtCSS',
    content: 'Chi sono gli altri?',
  },
];

export const hr = [
  {
    author: AUTHORS.AI,
    id: 'hr.hrPipeline',
    nexts: ['hr.noFear'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Nell'impresa di costruirmi non sarai solo/a!",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'hr.noFear',
    nexts: ['hr.noProblems'],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Non avere paura delle complessità che potranno esserci 🫂',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'hr.noProblems',
    nexts: ['hr.knowNothing'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Insieme al team che stiamo costruendo non avrai problemi a lavorare a questo progetto 🙌🏻',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'hr.knowNothing',
    nexts: ['hr.usEither'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Ma io non so assolutamente nulla di intelligenza artificiale 🤖',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'hr.usEither',
    nexts: ['hr.onlyCoders'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Neanche noi siamo esperti di IA e non serve che tu lo sia ✅',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'hr.onlyCoders',
    nexts: ['team.userTeamPipeline'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Siamo solo coders che vogliono toccare con mano questa rivoluzione tecnologica e quello che serve è la passione e la voglia di fare 👨🏻‍💻👩🏻‍💻',
    },
  },
];
