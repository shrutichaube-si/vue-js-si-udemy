<template>
    <div :class="['alert','alert-'+type]">
        <div :class ="['alert','alert-1',+type]" v-show="show">
            {{ message }}
        </div>

    </div>
    <!-- <div :class="['alert', 'alert-' + type, 'alert-dismissible']" v-show="show">
        <slot :alertLink="alertLink">Default message</slot>
        <button type="button" class="btn-close" @click="close"></button>
    </div> -->
</template>

<script>
export default {
    props:['message','type'],
    props: ['message', 'type', 'show']
//     props: {
//         type: {
//             type: String,
//             default: 'primary',
//             validator: function (value) {
//                 return ['success', 'primary', 'danger', 'warning'].includes(value);
//             }
//         },
//         show: Boolean
//     },
//     methods: {
//         close () {
//             this.$emit('alertClose')
//         }
//     },
//     emits: ['alertClose'],
//     data: () => ({
//         alertLink: 'alert-link'
//     })
// }
}
</script>