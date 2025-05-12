<script setup lang="ts">
import {
    PhHouse,
    PhMagnifyingGlass,
    PhBrowsers,
    PhBellSimple,
    PhPlus,
    PhArrowsOutSimple,
    PhListBullets,
    PhCaretLeft,
    PhCaretRight,
}
    from "@phosphor-icons/vue";
import { ref, onMounted, onUnmounted } from "vue";

const tagsAside = ['Playslists', 'Artists', 'Albums', 'Podcasts & Shows']
const libraryAside = ['Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil', 'Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil']
const tagsMiddleSection = ['All', 'Music', 'Podcasts']
const selectedTag = ref(0)
const carrouselLibs = [
    { title: 'Emi', description: 'Made For' },
    { title: 'Recently played' },
    { title: 'Jump back in' },
]

const isScrolled = ref(false)

const carousel = ref<HTMLElement | null>(null);

const scrollCarousel = (direction: 'left' | 'right') => {
    if (carousel.value) {
        const scrollAmount = 300;
        carousel.value.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    }
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
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
            <section class="flex flex-col bg-[#121212] w-[60%] ml-2 rounded-[10px] max-h-203 overflow-y-auto">
                <div class="flex gap-2 py-5 px-10 transition-all rounded-[10px] duration-300" :class="{
                    'bg-[#1f1f1f] shadow-lg': isScrolled,
                    'bg-gradient-to-b from-[#4b2b2b] to-transparent': !isScrolled
                }">
                    <template v-for="(tag, index) in tagsMiddleSection">
                        <div :class="{
                            'bg-white text-black font-bold': selectedTag === index,
                            'bg-[#ffffff33] text-white': selectedTag !== index
                        }" class="rounded-full px-4 py-2 flex items-center justify-center cursor-pointer"
                            @click="selectedTag = index">
                            <span class="text-[13px]">{{ tag }}</span>
                        </div>
                    </template>
                </div>
                <div class="grid grid-cols-4 gap-4 px-10 py-5">
                    <template v-for="(library, i) in libraryAside" :key="i">
                        <div class="flex items-center bg-[#ffffff27] rounded-[3px]" v-if="i < 8">
                            <div class="w-12 h-12 overflow-hidden" style="border-radius: 3px 0px 0px 3px;">
                                <img :src="`/covers/cover${i + 1}.png`" alt="Cover"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-3">
                                <span class="text-[#ffff] text-sm font-bold">{{ library }}</span>
                            </div>
                        </div>
                    </template>
                </div>
                <template v-for="lib in carrouselLibs">
                    <div class="px-10 py-5">
                        <div class="flex justify-between items-center mb-4">
                            <div class="flex flex-col">
                                <span class="text-[10px] text-[#b3b3b3]" v-if="lib.description">{{ lib.description }}</span>
                                <h2 class="text-white text-[20px] font-bold">{{ lib.title }}</h2>
                            </div>
                            <button class="text-[#b3b3b3] text-sm hover:underline">Show all</button>
                        </div>
                        <div class="relative">
                            <button
                                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1f1f1f] text-white p-2 rounded-full z-10"
                                @click="scrollCarousel('left')">
                                <PhCaretLeft />
                            </button>
                            <button
                                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1f1f1f] text-white p-2 rounded-full z-10"
                                @click="scrollCarousel('right')">
                                <PhCaretRight />
                            </button>
                            <div ref="carousel" class="flex gap-4 overflow-x-auto scrollbar-hide">
                                <template v-for="(item, i) in libraryAside" :key="i">
                                    <div class="min-w-[150px] bg-[#1f1f1f] rounded-lg overflow-hidden">
                                        <img :src="`/covers/cover${i + 1}.png`" alt="Cover"
                                            class="w-full h-[150px] object-cover" />
                                        <div class="p-3">
                                            <h3 class="text-white text-sm font-bold">Daily Mix {{ i + 1 }}</h3>
                                            <p class="text-[#b3b3b3] text-xs">Description or artists...</p>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
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

scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; 
}

button {
  cursor: pointer;
}

button:focus {
  outline: none;
}

button:hover {
  background-color: #333;
}
</style>