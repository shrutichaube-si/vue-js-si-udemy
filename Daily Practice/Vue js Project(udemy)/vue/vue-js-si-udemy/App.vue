<!-- <script >
import TagsInput from './components/TagsInput.vue';



export default{
  data: () => ({
    jsFrameworks: ["vue", "react", "angular"],
    backendFrameworks : []
  }),
  // mounted (){
  //   setTimeout( () => {
  //     this.jsFrameworks.push("darpan");

  //   }, 3000);
  // },

  methods: {
    handlechange(tags) {
      this.jsFrameworks=[...tags];
    },
  },
  components: {
    //TagsInput
    //TagsInput
   
  },
};



</script>

<template>
  <h1> 
   Your Favourite Framework
  </h1>
  <div>
    {{ jsFrameworks  }} 
  </div>
  <tags-input: selectedTags="jsFrameworks" @change="handlechange"/>

  <div> {{ backendFrameworks }}</div>
  <tags-input: :selectedTags="backendFrameworks" @change="backendFrameworks =[...$event]" 
  />
  </template>


<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.h1{
  color: blue;
}
</style> -->

<script>
import Person from "/components/Person.vue"
import Alert from "./components/Alert.vue"
import Alerts from "./components/Alerts.vue"
import LoginForm from "./components/auth/LoginForm.vue"
import BaseInput from "./components/BaseInput.vue"
import BaseButton from "./components/BaseButton.vue"
import IconCheck from "./components/icons/IconCheck.vue"
import IconExclamation from "./components/icons/IconExclamation.vue"
import Modal from "./components/Modal.vue"
import TodoList from "./components/TodoList.vue"
import Person from './tags-input/src/components/person.vue'

export default {
  components: {
    Person,
    Alerts,
    Alert,
    LoginForm,
    BaseInput,
    BaseButton,
    Modal,
    IconCheck,
    IconExclamation,
    TodoList
    Person
},
  data: () => ({
    items: 3,
    show: true,
    alert: {
      message: "Message",
      types: ["success", "warning", "danger"],
    },
    email: '',
    password: '',
    message: "Alert message"
  }),
  methods: {
    handleSubmit (email, password) {
      alert(email + ' ' + password);
    }
  }
}
</script>

<!-- <template>
  <div class="container py-5"> -->
    <!-- <Alert type="success" :show="show" @alert-close="show = false" v-slot="{ alertLink }">
      The alert message <a href="#" :class="alertLink">Alert link</a>
    </Alert> -->
    <!-- <TodoList>
      <template #default="{ name }">
        <input type="checkbox" class="form-check-input me-1">
        <label class="form-check-label">{{ name }}</label>
      </template>
      <template #footer="{ all, todo, done }">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-muted">All ({{ all }})</span>
          <span class="text-muted">Todo ({{ todo }})</span>
          <span class="text-muted">Done ({{ done }})</span>
        </div>
      </template>
    </TodoList>
  </div>
</template> -->

<template>
  <div class=" conatainer py-5">
   <person age="25" first-name="darpan" last-name="chaudhari" />
   <Alert :message="3" type="success" :show="true" /> 

  </div>
</template>


