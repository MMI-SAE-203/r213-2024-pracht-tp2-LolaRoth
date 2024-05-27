<script setup lang="ts">
import { allMaisonsSorted, pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import type { MaisonRecord } from '@/pocketbase-types';
import {FavMaison} from '@/backend';

const maisonsListe = await pb.collection('Maison').getFullList();
console.log(maisonsListe);


</script>

<template>
  <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-green-400 hover:text-red-600"
    >
      {{ uneMaison.NomMaison }}
    </RouterLink>
  </li>
</ul>
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="maison.id"/>
</template>