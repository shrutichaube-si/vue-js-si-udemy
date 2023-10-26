<template>
    <svg :height="radius * 2" :width="radius * 2">
        <circle 
        class="progress-ring"
        stroke="#3881ff" 
        :stroke-width="strokeWidth" 
        fill="transparent" 
        :cx="radius" 
        :cy="radius" 
        :radius="normalizeRadius"
        stroke-dasharray="`${ circumference} ${ circumference }`"
        stroke-dashoffset="strokeDashoffset" 
        />

        <circle 
        stroke="#ccc" 
        :stroke-width="strokeWidth" 
        fill="transparent" 
        :cx="radius" 
        :cy="radius" 
        :radius="normalizeRadius" />


    </svg>
</template>

<script>
import { computed } from 'vue';
export default {
    props:{
        radius: {
            type: Number,
            default: 16
        },
        strokeWidth :{
            type: Number,
            default: 3
        },
        progress: {
            type:Number,
            default: 0
        }
    },
    setup( props) {
        const normalizeRadius = computed(
            () => props.radius - props.strokeWidth * 2);

            const circumference = computed( () => normalizeRadius.value * 2 * Math.PI);
            const strokeDashoffset = computed(()=> circumference.value - (props.progress / 100) * circumference.value );


        return { normalizeRadius , circumference , strokeDashoffset};

        
    },

}
</script>

<style scoped>
.progress-ring {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>