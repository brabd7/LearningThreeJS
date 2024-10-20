import Stats from 'stats.js';

// Configuration de stats.js
const stats = new Stats();

// 0: fps, 1: ms, 2: memory
stats.showPanel(0);

// Ajoute l'élément DOM à la page
document.body.appendChild(stats.dom);

export { stats };