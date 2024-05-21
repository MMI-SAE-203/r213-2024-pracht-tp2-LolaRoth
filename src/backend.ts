import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information
export async function FavMaison() {
    const favori = await pb
      .collection("Maison")
      .getFullList({ filter: "Favori = true" });
    return favori;
  }

  export async function allMaisonsSorted() {
    const prix = await pb.collection("Maison").getFullList({ sort: "prix" });
    return prix;
  }