<template>
    <div class="toast" :class="toastType" v-show="show">
        <div class="toast-icon">
               <component :is="toastIcon"></component>
        </div>
        <div class="toast-content">
            <div class="toast-title">{{ title }}</div>
            <div class="toast-message">{{ message }}</div>
        </div>
        <!-- <button class ="toast-button" @click="show=false">&times;</button> -->
        <button class ="toast-button" @click="$emit('hide')">&times;</button>
    </div>
</template>

<script>
import IconError from './IconError.vue';
import IconSuccess from './IconSuccess.vue';
import IconWarning from './IconWarning.vue';
export default{
    emits:['hide'],
    props:{
    message:{
        type: String,
        required: true
    },
    title:{
        type:String,
        default:"Success"
    },
    show:{
        type:Boolean,
        default:false
     },
     type:{
      type:String,
      default:"success"
     }
    },
    computed:{
        toastType(){
          return `toast-${this.type}`;
        },
        toastIcon(){
          return `icon-${this.type}`;
        }
    },
components:{
    IconSuccess, IconError, IconWarning
}
}
</script>

<style scoped>
.toast{
    width:300px;
    background: #ecfdf5;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 1rem;
    box-shadow: 2px 5px 9px -5px rgba(0,0,0,0.2);
    position:relative;
}

.toast::before{
    content:"";
    width:4px;
    height:100%;
    
    position: absolute;
    top:0;
    left:0;
}

.toast-icon {
    width:16px;
    width:16px;
    background:#34d399 ;
    border-radius: 50%;
    padding:7px ;
}
.toast-success .toast-icon svg{
    fill:#ecfdf5;
}
.toast-success{
    background: #ecfdf5;
}
.toast-success::before , .toast-success .toast-icon{
    background: #34d399;
}

.toast-warning .toast-icon svg {
  fill: #fffbeb;
}
.toast-warning {
  background: #fffbeb;
}
.toast-warning::before,
.toast-warning .toast-icon {
  background: #f59e0b;
}
.toast-error .toast-icon svg {
  fill: #f3f2f2;
}
.toast-error {
  background: #fef2f2;
}
.toast-error::before,
.toast-error .toast-icon {
  background: #ef4444;
}
.toast-content {
  flex-grow: 1;
  margin: 0 1rem;
}
.toast-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.toast-message {
  font-size: 14px;
  color: #6b7280;
}
.toast-button {
  width: 1.5em;
  height: 1.5em;
  border: none;
  padding: 0;
  color: #9ca3af;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;
  font-size: 1.5em;
}
.toast-button:hover {
  opacity: 1;
}
</style>