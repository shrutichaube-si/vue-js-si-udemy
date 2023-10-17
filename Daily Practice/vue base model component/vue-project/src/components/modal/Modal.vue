<script setup>
import { onMounted, onUnmounted } from 'vue';
defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close'])
const close= () => {
    emit('close')

}
const handleKeyup =(event) => {
    if(event.keyCode === 27) {
        close()
    }
}
onUnmounted( () => document.addEventListener('keyup', handleKeyup))
onUnmounted( () => document.removeEventListener('keyup', handleKeyup))

</script>

<template>
    <transition  name="fade">
    <div class="v-modal" v-show="show" @click.self="close">
        <transition name="drop">
        <div class="v-modal-dialog" v-show="show">
            <div class="v-modal-content">
                <div class="v-modal-header" v-if="$slots.header">
                    <slot name="header"/>
                    <button @click="close" class="btn-close" type="button">&times;</button>

                </div>
                <div class="v-modal-body">
                <slot name="body"/>
            </div>
            <div class="v-modal-footer" v-if="$slots.footer">
                <slot name="footer"/>
            </div>
                
            </div>
        </div>
    </transition>
    </div>
</transition>
</template>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.v-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.v-modal-dialog {
  max-width: 500px;
  margin: 2rem auto;
}
.v-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
display: flex;
flex-direction: column;
}
.v-modal-header,
.v-modal-body,
.v-modal-footer {
  padding: 1rem;
}
.v-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
}
.btn-close {
  border: none;
  font-size: 1rem;
  padding: 0.25em;
  cursor: pointer;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
}
.v-modal-footer {
   display: flex;
   justify-content: end;
   gap: 6px;
   border-top: 1px solid #dedede;
}


.hidden {
    display: none;
}
.fade-enter-active,

.fade-leave-active {
    transition:opacity 0.5s;
}
.fade-enter-from,

.fade-leave-to {
    opacity: 0;
}
.drop-enter-active,
.drop-leave-active{
    transition: all 0.3s ease-out;
}

.drop-enter-from, 
.drop-leave-to {
    opacity: 0;
    transform: translate(0, -50px);
}


</style>