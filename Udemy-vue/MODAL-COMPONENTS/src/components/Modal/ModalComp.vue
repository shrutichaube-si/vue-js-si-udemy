<template>
    <transition name ="fade">
    <div class="v-modal" v-show="show">
      <transition name="drop">
        <div class="v-modal-dialog" v-show="show">
            <div class="v-modal-content">
          <slot/>
          <button @click="close" type="button"> Close</button>
            </div>
        </div>
      </transition>
    </div>
</transition>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
defineProps({
    show:{
        type:Boolean,
        default:false
    }
})
 const emit =defineEmits(['close'])
const close=()=>{
  emit('close')
}

const handleKeyup=(event)=>{
  if(event.keyCode===27){
    close()
  }
}
onMounted(()=>document.addEventListener('keyup',handleKeyup))
onUnmounted(()=>document.removeEventListenerEventListener('keyup',handleKeyup))
</script>

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
  padding: 1rem;
  /*display: flex;
  flex-direction: column;*/
}
.hidden{
    display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.drop-enter-active,
.drop-leave-active {
  transition: all 0.3s ease-out;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
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

.v-modal-footer > * {
  margin: 0 0.25rem;
}

/* Transition styles */
.drop-enter-active,
.drop-leave-active {
  transition: all 0.3s ease-out;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}

.btn {
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  border: 1px solid transparent;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.btn-secondary {
  border: 1px solid transparent;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
</style>
