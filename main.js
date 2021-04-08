const { randomInt } = require('crypto')
const readline = require('readline-sync')
const chalk = require('chalk')
const fs = require('fs')
const tab = ['Gate 1', 'Gate 2', 'Gate 3']
const gates = ['goat', 'goat', 'goat']
const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
gates[n] = 'car'
let player = readline.question(`Quelle est votre prénom : `)
console.log(`salut ${player}, tu as 3 portes devant toi, derriere l’une d’elle se trouve une voiture, quelle est ton choix ?`)
let isRunning = true;

while (isRunning) {
  const userChoice = readline.keyInSelect(tab, `Choix de la porte: `)
  console.log(`Tu as choisi la porte ${userChoice + 1}, avant de l’ouvrir, je vais en choisir une qui ne contient pas la voiture`)
  const showGate = (gates, tab, userChoice) => {
    for (let i = 0; i < gates.length; ++i) {
      if (tab[i] !== userChoice && tab[i] !== gates[car]) {
        return (i)
      }
    }
  }
  console.log(`Dans la porte ${showgate(gates, tab, userChoice)} se trouve une `)

  isRunning = false

  // for (let i = 0; i < gates.length; ++i) {
  //   if (userChoice === 1) {
  //     console.log(gates[])
  //   }
  // }

}

