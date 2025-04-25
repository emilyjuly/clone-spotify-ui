<script setup lang="ts">
import { 
    PhHouse, 
    PhMagnifyingGlass, 
    PhBrowsers, 
    PhBellSimple, 
    PhPlus, 
    PhArrowsOutSimple,
    PhListBullets,
} 
from "@phosphor-icons/vue";
import { ref } from "vue";

const tagsAside = ['Playslists', 'Artists', 'Albums', 'Podcasts & Shows']
const libraryAside = ['Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil', 'Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil']
const tagsMiddleSection = ['All', 'Music', 'Podcasts']

const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

</script>

<template>
    <div class="bg-black h-screen">
        <header class="flex justify-between items-center w-full h-16 px-6">
            <img src="/logo-header.svg" alt="Spotify logo" style="height: 32px;" />
            <div class="flex gap-4 items-center">
                <span class="bg-[#1f1f1f] w-12 h-12 rounded-full flex items-center justify-center">
                    <PhHouse class="text-[#b3b3b3] w-7 h-7" />
                </span>
                <span class="flex items-center p-3 justify-between bg-[#1f1f1f] h-12 w-120 rounded-3xl">
                    <span class="flex gap-2 items-center">
                        <PhMagnifyingGlass class="text-[#b3b3b3] w-7 h-7" />
                        <span class="text-[#b3b3b3] text-2sm">What do you want to play?</span>
                    </span>
                    <span class="flex gap-3">
                        <span class="text-[#b3b3b3]">|</span>
                        <PhBrowsers class="text-[#b3b3b3] w-7 h-7" />
                    </span>
                </span>
            </div>
            <div class="flex gap-5 items-center">
                <PhBellSimple class="text-[#b3b3b3] w-5 h-5" />
                <div class="w-7 h-7 rounded-full overflow-hidden">
                    <img src="/profile-photo.png" alt="profile photo" class="w-full h-full object-cover" />
                </div>
            </div>
        </header>
        <main class="flex">
            <aside class="flex flex-col bg-[#121212] w-[20%] p-3 ml-2 rounded-1sm">
                <div>
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center">
                            <span class="text-[#ffff] font-bold text-[14px]">Your Library</span>
                            <div class="flex items-center gap-3">
                                <div class="bg-[#1f1f1f] rounded-full px-4 py-2 flex items-center justify-center gap-2">
                                    <PhPlus class="text-[#ffff]" />
                                    <span class="text-[#ffff] font-bold text-[13px]">Create</span>
                                </div>
                                <PhArrowsOutSimple class="text-[#ffff]" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-5">
                        <template v-for="tag in tagsAside">
                            <div class="bg-[#1f1f1f] rounded-full px-3 py-1 flex items-center justify-center">
                                <span class="text-[#ffff] text-[13px]">{{ tag }}</span>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="max-h-170 overflow-y-auto pr-5 mt-5">
                    <div class="flex justify-between text-[#b3b3b3] items-center mt-5">
                        <PhMagnifyingGlass :size="17" />
                        <div class="flex items-center gap-2">
                            <span class="text-[13px]">Recents</span>
                            <PhListBullets />
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 mt-10">
                        <template v-for="(library, i) in libraryAside">
                            <div class="flex">
                                <div class="rounded-md w-15 h-15 overflow-hidden">
                                    <img :src="`/covers/cover${i + 1}.png`" />
                                </div>
                                <div class="flex flex-col ml-3 justify-center">
                                    <span class="text-[#ffff] text-md">{{ library }}</span>
                                    <span class="text-[#b3b3b3] text-[12px]">Playlist</span>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </aside>
            <section class="flex flex-col bg-[#121212] w-[50%] p-3 ml-2 rounded-1sm">
                <div class="flex gap-2 p-3" :class="['top-bar', { 'scrolled': isScrolled }]">
                    <template v-for="tag in tagsMiddleSection">
                        <div class="bg-[#1f1f1f] rounded-full px-4 py-2 flex items-center justify-center">
                            <span class="text-[#ffff] text-[13px]">{{ tag }}</span>
                        </div>
                    </template>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #555;
}

::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>