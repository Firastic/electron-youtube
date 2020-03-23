<template>
    <div>
        <div v-for="result in results">
            <div class="d-flex flex-row searched-video border mb-2" @click="startVideo(result.videoId)">
                <div class="mr-3">
                    <img :src="result.thumbnails">
                </div>
                <div class="flex-column">
                    <span>{{ result.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchResult",
        props: {
            results: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            startVideo(videoId) {
                this.$emit('startVideo', videoId)
            }
        }
    }
</script>

<style scoped>
.searched-video {
    cursor: pointer
}
</style>
