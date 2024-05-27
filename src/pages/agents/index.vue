<script setup lang="ts">
import { allMaisonsSorted, pb } from '@/backend';
const agentListe = await pb.collection('Agent').getFullList();
console.log(agentListe);
</script>

<template>
  <ul>
    <li v-for="agent in agentListe" :v-key="agent.id">
        <RouterLink
          :to="{
            name: '/agents/[id]',
            params: {
              id: agent.id
            }
          }"
          class="text-green-400 hover:text-red-600"
          </RouterLink>
          {{ agent.NomAgent }}
    </li>
  </ul>
</template>