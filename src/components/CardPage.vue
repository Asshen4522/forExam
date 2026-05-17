<script setup>
import { computed, ref } from 'vue';
import useBilets from '../composables/useBilets';
const dataBilets = useBilets()



const emit = defineEmits(['clearBilet'])

function clearBilet(result) {


    isAnimating.value = true
    setTimeout(() => {
        dataBilets.unSelectBilet(result)
        emit('clearBilet')
        isAnimating.value = false
    }, 1000)

}

const isAnimating = ref(false)

const curBilet = computed(() => dataBilets.findBilet(dataBilets.curBilet.value))
</script>
<template>
    <div class="field">
        <div class="modal" :class="{ disAnim: isAnimating }">
            <div>
                <div v-if="curBilet.type == 1">Билет по общим функциям</div>
                <div v-if="curBilet.type == 2">Билет по ванильному js</div>
                <div v-if="curBilet.type == 3">Билет по vue js</div>
                <div v-if="curBilet.type == 4">"Счастливый" билет</div>
                <img v-if="curBilet.photo" :src="curBilet.photo" alt="Нема">
                <div>{{ curBilet.text }}</div>

            </div>
            <div class="buttons">
                <button @click="clearBilet(true)">Решено</button>
                <button @click="clearBilet(false)">Не решено</button>
            </div>

        </div>
    </div>
</template>
<style scoped>
.field {
    position: fixed;
    top: 0;
    left: 0;

    min-width: 100vw;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    animation: appear 1s forwards;
}

.modal {
    width: 50vw;
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 1px solid black;
    border-radius: 20px;

    background-color: lightblue;
}

.disAnim {
    animation: disappear 1s forwards;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

@keyframes appear {
    0% {
        transform: rotateY(90deg) scale(1.2);
    }

    100% {
        transform: rotateY(0deg);
    }
}

@keyframes disappear {
    0% {
        transform: rotateY(0deg);
    }

    100% {

        transform: rotateY(90deg) scale(1.2);
    }
}
</style>