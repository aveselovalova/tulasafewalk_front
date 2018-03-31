<template>
    <div id='gmap-map' class="map-container" :center="{lat:1.38, lng:103.8}" :zoom="12">
        <gmap-marker :position="{lat:1.38, lng:103.8}">
        </gmap-marker>
        <gmap-info-window :position="{lat:1.38, lng:103.8}">
            Hello world!
        </gmap-info-window>
    </div>
    </div>
</template>
<script>



export default {
    name: 'Map'
}
</script>
<style>
.map-container {
    width: 500px;
    height: 300px;
}
</style>
