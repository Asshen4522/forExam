<script setup>
import { ref } from 'vue';
import useBilets from '../composables/useBilets';

const dataBilets = useBilets()
const emit = defineEmits(['pickBilet'])

const isAnimating = ref(false)

function pickBilet(biletId) {
    if (!isAnimating.value) {
        isAnimating.value = true
        dataBilets.selectBilet(biletId)
        setTimeout(() => {
            emit('pickBilet')
            isAnimating.value = false
        }, 1000)
    }
}

function randdoooom() {
    if (!isAnimating.value) {
        isAnimating.value = true
        dataBilets.randomizeBilets()
        setTimeout(() => {

            isAnimating.value = false
        }, 1000)
    }
}


</script>
<template>
    <div>
        <div class="cardField">
            <transition-group name="table">
                <template v-for="bilet in dataBilets.bilets.value" :key="bilet.id">
                    <div class="card"
                        :class="{ active: bilet.status != 1, solved: bilet.status == 3, failed: bilet.status == 4, }"
                        @click="pickBilet(bilet.id)">{{
                            bilet.id }}</div>
                </template>
            </transition-group>

        </div>
        <div>
            <button @click="randdoooom">Перемешать</button>
        </div>
    </div>


</template>
<style scoped>
.cardField {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    width: 790px;
    height: 790px;
}





.card {
    width: 70px;
    height: 70px;

    border: 1px solid black;
    border-radius: 10%;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotateY(180deg);
    color: white;
    user-select: none;
    animation: auto;
}

.active {
    animation: flipAnimation 1s forwards;
    pointer-events: none;
}



.card:hover {
    transform: scale(110%);
}



.solved {
    background-color: lightgreen;
    color: black;
    user-select: text;
    transform: rotateY(0deg);
    animation: none;
}

.failed {
    background-color: lightcoral;
    color: black;
    user-select: text;
    transform: rotateY(0deg);
    animation: none;
}

@keyframes flipAnimation {
    0% {
        transform: rotateY(180deg);
        color: white;
        user-select: none;
    }

    50% {
        transform: rotateY(90deg) scale(1.2);
        color: white;
        user-select: none;
    }

    51% {
        transform: rotateY(90deg) scale(1.2);
        color: black;
        user-select: text;
    }

    100% {
        transform: rotateY(0deg);
        color: black;
        user-select: text;
    }
}

.table-move {
    transition: 0.5s;
}
</style>