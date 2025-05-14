<script setup lang="ts">
const tagsAside = ['Playslists', 'Artists', 'Albums', 'Podcasts & Shows']
const libraryAside = ['Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil', 'Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil']
</script>

<template>
    <aside class="flex flex-col bg-[#121212] w-[20%] p-3 ml-2 rounded-[10px]">
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

scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; 
}
</style>