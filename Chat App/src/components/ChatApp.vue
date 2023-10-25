<template>
    <div v-if="!joined" class="parent-container">
      <div class="name-container">
        <input type="text" class="user-name" v-model="currentUser" />
        <button class="join-button" v-on:click="join">Join</button>
      </div>
    </div>
    <div v-if="joined">
      <div class="list-container">
        <div v-for="message in messages" :key="message.id">
          <b>
            {{ message.user }}
          </b>
          : {{ message.text }}
        </div>
      </div>
      <div class="text-input-container">
        <textarea
          v-model="text"
          class="text-message"
          v-on:keyup.enter="sendMessage"
        ></textarea>
      </div>
    </div>
  </template>
  
  <script>
  import io from "socket.io-client";
  
  export default {
    data() {
      return {
        joined: false,
        currentUser: "",
        text: "",
        messages: [],
      };
    },
    methods: {
      join() {
        this.joined = true;
        this.socketInstance = io("http://localhost:3000");
  
        this.socketInstance.on(
          "message:received", (data) => {
            this.messages = this.messages.concat(data);
          }
        )
      },
      sendMessage() {
        this.addMessage();
  
        this.text = "";
      },
      addMessage() {
        console.log("helo")
        const message = {
          id: new Date().getTime(),
          text: this.text,
          user: this.currentUser,
        };

        
  
        this.messages = this.messages.concat(message);
        this.socketInstance.emit('message', message);
      },
    },
    name: "ChatApp",
  };
  </script>
<style scoped>
.text-input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-name {
    height: 30px;
    width: 200px;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
}

.join-button {
    height: 30px;
    width: 100px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.join-button:hover {
    background-color: #45a049;
}

.join-button:active {
    background-color: #3e8e41;
}

.text-message {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #f2f2f2;
    padding: 10px;
    box-sizing: border-box;
}
</style>

