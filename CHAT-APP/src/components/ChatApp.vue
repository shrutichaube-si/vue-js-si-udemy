<template>
    <div>
        <div v-if="!joined" class="parent-container">
        <div class="name-container">
            <input type="text" class="user-name" v-model="currentUser"/>
            <button class="join-button" @click="join"> Join</button>
        </div>
    </div>
    </div>
    <div v-if="joined">
        <div class="list-container">
            <div v-for="message in messages" :key="message.id"> 
            <b> {{ message.user }}</b> :{{ message.text }} </div>
        </div>
        <div class="text-input-container">
            <h2>Chat </h2>
            <textarea 
             v-model="text" 
             class="text-message"
             v-on:keyup.enter="sendMessage"></textarea>
        </div>
    </div>
</template>

<script>
import io from "socket.io-client";
export default{
    data:()=>({
        joined:false,
        currentUser:"",
        text:"",
        messages:[]

    }),
    methods:{
        join(){
            // console.log(this.currentUser)
            this.joined=true;
            this.socketInstance = io("http://localhost:3000");
        },
        sendMessage(){
            this.addMessage()
            this.text=""
        },
        addMessage(){
            const message={
                id:new Date().getTime(),
                text :this.text,
                user:this.currentUser

            };
            this.messages = this.messages.concat(message);
        }
    }
}
</script>
<style scoped>
.parent-container{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 150px;
    position: fixed;
}

.name-container{
    display: flex;
    flex-direction: column;
    width:200px;
}
.user-name{
    height:30px;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
}

.join-button{
    height: 30px;
    font-size: 20px;
}
.text-input-container{
    height: 100vh;
    width: 50px;
}
.text-message{
    width: 20%;
    margin-top: 80px;
     margin-left: 50px;
    position: absolute;
    
    
    height: 400px;
    padding: 10px;
    box-sizing: border-box;
}
</style>
