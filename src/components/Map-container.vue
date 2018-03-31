<template>
    <div id='map-container'>
        <date-selector></date-selector>
        <map></map>
        <legend></legend>
    </div>
</template>
<script>
import DateSelector from './Date-selector.vue'
import Map from './Map.vue'
import Legend from './Legend.vue'


export default {
    name: 'MapContainer',
    components: {
        DateSelector,
        Map,
        Legend
    },
}
</script>
