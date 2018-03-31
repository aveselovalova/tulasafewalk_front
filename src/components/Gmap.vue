<template>
    <gmap-map :center="center" :options="options" :zoom="14" map-type-id="terrain" style="width: 1000px; height: 700px">
        <gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position"></gmap-marker>
    </gmap-map>
</template>
<script>
export default {

    name: 'Gmap',
    replace: 'True',
    data() {
        return {
            center: {
                lat: 54.1911,
                lng: 37.6143
            },
            markers: [{
                position: {
                    lat: 54.1853,
                    lng: 37.6775
                }
            }, {
                position: {
                    lat: 54.2017,
                    lng: 37.7092
                }
            }, {
                position: {
                    lat: 54.1686,
                    lng: 37.7097
                }
            }, {
                position: {
                    lat: 54.2264,
                    lng: 37.6181
                }
            }, {
                position: {
                    lat: 54.2514,
                    lng: 37.6336
                }
            }],
            options: {
                clickableIcons: false,
                fullscreenControl: false,
                minZoom: 11,
                maxZoom: 18,
                panControl: true,
                rotateControl: false,
                streetViewControl: false,
                maptype: 'roadmap',
            }
        }
    }
}
</script>
<style lang="css" scoped>
</style>
