<script setup lang="tsx">
import Heading from "@/components/ui/heading.vue";
import GoogleButton from "@/buttons/googleOauth.vue";
</script>
<template>
  <main class="grid md:grid-cols-2 grid-cols-1 h-full">
    <img
      src="@/assets/sign-in-presentation.png"
      class="object-cover h-full max-h-dvh hidden md:block"
      alt="represent offers in map"
    />

    <div class="flex flex-col items-center justify-center gap-2 mx-2">
      <Heading type="h1">
        <div class="flex flex-col items-center">
          <img class="max-w-14" src="@/assets/logo-finder.png" alt="logo" />
          <span class="font-semibold text-3xl mt-3 text-center"
            >Welcome in Finder</span
          >
        </div>
      </Heading>
      <p class="text-muted">
        Save applications history to be more consistent in your path
      </p>
      <GoogleButton />
    </div>
  </main>
</template>
