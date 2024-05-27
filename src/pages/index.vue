<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue';
import type { MaisonRecord } from '@/pocketbase-types';
import {FavMaison} from '@/backend';

const maisonsListe = await pb.collection('Maison').getFullList();
console.log(maisonsListe);

const maisonListe = await FavMaison

</script>

<template>
  
</template>
    