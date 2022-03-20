<template>
    <div class="container">
        <hr>
        <h3>Damage Table:</h3>
        <ul>
            <li v-for="damage in damageData" :key="damage" :style="{ color : damage[1] }">{{damage[0]}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'InformationComponent',
    props: ['damageData']
}
</script>