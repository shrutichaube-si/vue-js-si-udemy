<template>
    <div class="bg-light py-2 px-3 d-flex justify-content-between align-items-center border-bottom">
        <span class="text-secondary">{{ overallProgress }} complete</span>
        <a href="" class="text-decoration-none" @click.prevent="cancelUploadingItems">CANCEL</a>
       </div> 
</template>