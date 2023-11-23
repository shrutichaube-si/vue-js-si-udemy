<template>
    <div  v-if = "!joined" class ="parent-container">
        <div class="name-container">
            <input type ="text" class ="user-name"  v-model="currentUser"/>
            <button  class=" join-button"  v-on:click ="join">Join</button>
        </div>
    </div>
    <div v-if = "joined">
        <div class="list-container">
            <div v-for="message in messages" :key="message.id">
           <b>{{ message.user }}</b> 
            :{{ message.text }}
        </div>
        </div>
        <div class="text-input-container">
            <textarea
            v-model ="text"
            class="text-message"
            v-on:keyup.enter="sendMessage"
            >
            </textarea>
        </div>
    </div>
</template>
<script>
import io from "socket.io-client";
export default {

data ()
{
    return{
       joined:false,
       currentUser : "",
       text : "",
       messages: [
    //    {

    //     id:1,
    //     text:"Hey,how are you",
    //     user:"Sushma"
    //    }

       ]

    }
},
methods:
{
    join(){
        // console.log(this.currentUser)
        this.joined = true
        this.socketInstance = io("http://localhost:3000");


        this.socketInstance.on(
            "message:received" ,(data) =>{
             this.messages = this.messages.concat(data)
            }
        )
        }
    
,
    sendMessage(){
       
        this.addMessages();
        this.text=""
    }
,
 addMessages(){
   const message ={
   id:new Date().getTime(),
   text:this.text,
   user:this.currentUser,

   }
   this.messages = this.messages.concat(message);

   this.socketInstance.emit('message', message)
}

}

}
</script>
<style scoped>
.parent-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.name-container {
    display: flex;
    flex-direction: column;
    width: 200px;
}

.user-name {
    height: 30px;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
}

.join-button {
    height: 30px;
    font-size: 20px;
}

.text-input-container {
    height: 100vh;
}

.text-message {
    width: 100%;
   
    padding: 10px;
    font-size: 16px; 
    border: 1px solid #ccc;
    bottom:0px;
    height: 70px;
    
}
</style>
