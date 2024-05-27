<script setup lang="ts">
import { pb } from '@/backend';

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const agent = await pb.collection('Agent').getOne('dou53yp0fwnwh95');
console.log(agent)

</script>
<template>
  <div>
    <h1 class="text-xl">Agent</h1>
  </div>
</template>