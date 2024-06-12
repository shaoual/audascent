import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information

// Fonction qui retourne la liste de tous les jeux
export async function allJeux() {
  try {
    const records = await pb.collection('jeux').getFullList()
    return records
  } catch (e) {
    console.error(e)
  }
}


// Fonction qui retourne les infos d'un jeu par ID
export async function jeuById(id) {
  try {
    const jeu = await pb.collection('jeux').getOne(id)
    return jeu
  } catch (e) {
    console.error(e)
  }
}

// Fonction qui retourne la liste des jeux d'un créateur donné
export async function jeuxByCreateur(createur) {
  try {
    const records = await pb.collection('jeux').getFullList({
      filter: `createur="${createur}"`
    })
    return records
  } catch (e) {
    console.error(e)
  }
}

// Fonction qui retourne la liste des jeux triés par date de création
export async function jeuxSortedByDate() {
  try {
    const records = await pb.collection('jeux').getFullList({
      sort: 'AnneeDeCreation'
    })
    return records
  } catch (e) {
    console.error(e)
  }
}

// Fonction qui retourne la liste des jeux par genre
export async function jeuxByGenre(genre) {
  try {
    const records = await pb.collection('jeux').getFullList({
      filter: `genre="${genre}"`
    })
    return records
  } catch (e) {
    console.error(e)
  }
}

// Fonction qui retourne la liste des jeux triés par nom
export async function jeuxSortedByNom() {
  try {
    const records = await pb.collection('jeux').getFullList({
      sort: 'Nom'
    })
    return records
  } catch (e) {
    console.error(e)
  }
}


// Test de la fonction allPlayersSortedByScore
try {
  const players = await allPlayersSortedByScore()
  console.log('All players sorted by score:', JSON.stringify(players, null, 2))
} catch (e) {
  console.error(e)
}

// Test de la fonction playerById
try {
  const player = await playerById('a6h6hd4srgmirf4') // Remplacez par un ID valide de joueur
  console.log('Player by ID:', JSON.stringify(player, null, 2))
} catch (e) {
  console.error(e)
}
