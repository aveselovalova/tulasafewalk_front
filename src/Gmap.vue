<template>
    <gmap-map :center="center" :options="options" :zoom="14" map-type-id="terrain" style="height: 600px">
        <gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position"></gmap-marker>
    </gmap-map>
</template>
<script>
import axios from 'axios'

var url = "http://174.138.8.77:5000/get-data/?begin=0&end=111111111111"

export default {

    name: 'Gmap',
    replace: 'True',

    data: function() {
        return {
            center: {
                lat: 54.1911,
                lng: 37.6143
            },
            markers: [],
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
    },
    created: function() {
        this.getMarkers();
    },
    methods: {
        getMarkers: function() {
            axios.get(url)
                .then(response => {
                    var markersObjects = response.data.map(item => (JSON.parse(item)));
                    this.markers = markersObjects;
                })
                .catch(error => console.log(error.response.data))
        }
    }
}
</script>
<style lang="css" scoped>
</style>
