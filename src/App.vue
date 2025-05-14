<script setup lang="ts">
import HeaderUI from "./components/HeaderUI.vue";
import Aside from "./components/Aside.vue";
import MainUI from "./components/MainUI.vue";
</script>

<template>
    <div class="bg-black h-screen">
        <HeaderUI />
        <main class="flex">
            <Aside />
            <section class="flex flex-col bg-[#121212] w-[60%] ml-2 rounded-[10px] max-h-203 overflow-y-auto">
                <MainUI />
            </section>
        </main>
    </div>
</template>

<style scoped>

</style>