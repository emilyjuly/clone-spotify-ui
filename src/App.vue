<script setup lang="ts">
import { 
    PhHouse, 
    PhMagnifyingGlass, 
    PhBrowsers, 
    PhBellSimple, 
    PhPlus, 
    PhArrowsOutSimple } 
from "@phosphor-icons/vue";

const tagsAside = ['Playslists', 'Artists', 'Albums', 'Podcasts & Shows']

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
        <aside class="flex flex-col bg-[#121212] w-[20%] p-3 ml-2 rounded-1sm">
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
        </aside>
    </div>
</template>
