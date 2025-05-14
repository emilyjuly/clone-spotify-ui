<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const tagsMiddleSection = ['All', 'Music', 'Podcasts']
const selectedTag = ref(0)
const isScrolled = ref(false)
const libraryAside = ['Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil', 'Pop', 'Hiphop', 'Jazz', 'Blues', 'Pop up', 'Trending', 'Brazil']

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const carrouselLibs = [
    { title: 'Emi', description: 'Made For' },
    { title: 'Recently played' },
    { title: 'Jump back in' },
]
</script>

<template>
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
                    <img :src="`/covers/cover${i + 1}.png`" alt="Cover" class="w-full h-full object-cover" />
                </div>
                <div class="ml-3">
                    <span class="text-[#ffff] text-sm font-bold">{{ library }}</span>
                </div>
            </div>
        </template>
    </div>
    <template v-for="lib in carrouselLibs">
        <div class="px-10 py-5">
            <span v-if="lib.description" class="text-[#b3b3b3] text-[10px]">{{ lib.description }}</span>
            <h2 class="text-white text-lg font-bold mb-4">{{ lib.title }}</h2>
            <div class="flex gap-4 overflow-x-auto scrollbar-hide">
                <template v-for="(item, index) in libraryAside" :key="index">
                    <div class="w-[160px] h-[220px] flex-shrink-0 overflow-hidden cursor-pointer">
                        <div class="w-full h-[150px]">
                            <img :src="`/covers/cover${index + 1}.png`" alt="Cover"
                                class="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div class="py-2">
                            <p class="text-[#b3b3b3] text-xs">{{ item }} - Daily mix {{ index + 1 }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </template>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>