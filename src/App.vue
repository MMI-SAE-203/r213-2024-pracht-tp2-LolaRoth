<script setup lang="ts">
import { onErrorCaptured, type SuspenseProps } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'


onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
  
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="text-red-500 underline"> Accueil </RouterLink>
        </li>
        <li>
          <RouterLink to="/offres" class="text-blue-500 underline"> Offres </RouterLink>
        </li>
        <li>
          <RouterLink to="/agents" class="text-green-500 underline"> Agents </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
