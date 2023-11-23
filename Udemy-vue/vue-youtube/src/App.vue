<template>
  <h1>hello </h1>
 <div v-html="hack"></div>
   <!-- <div v-text="channel"></div>
  <div v-text="code"></div> 
  <div v-html="code"></div>
   <h1>{{ greet }} {{ name }}</h1>
  
  <input type="text" :value="greet" />
  <button v-bind:disabled="isDisabled">Click</button>
  <h2 class="underline">Underlined text</h2>
  <h2 class="underline" :value="status">Status</h2>
  <h1>{{ status }}</h1>
  <h2 :class="isPromoted && 'promoted'">Promoted movie</h2>
  <h2 v-bind:class="isSoldOut ? 'soldOut' : 'new'">sold out</h2>
  <h3 v-bind:class="['new', 'underline']">New promoted</h3>
  <h2 :class="[isPromoted && 'promoted', isSoldOut ? 'soldOut' : 'new']">
    array binding
  </h2>
  <h2
    :class="{
      promoted: isPromoted,
      new: !isSoldOut,
      soldOut: isSoldOut,
    }"
  >
    Object class binding
  </h2>

  style binding
  <h2
    :style="{
      color: highlightColor,
      'font-size': headerSize + 'px',
      padding: '40px',
    }"
  >
    Style bindinf
  </h2>
  <h2 :style="headerstyleObject">Sryle object binding</h2>  -->

</template>

<script>
export default {
  data() {
    return {
      // greet: "hello",
      // name: "Batman",
      // channel: "avengers",
      // code: `<b> 456</b>`,
       hack: `<a href="#" onclick="alert('you have been hacked')">Win a prize<a/>`,
      // isDisabled: false,
      // status: "Danger",
      // isPromoted: true,
      // //isnew:true,
      // isSoldOut: true,

      // // Style binding
      // highlightColor: "orange",
      // headerSize: 100,
      // headerstyleObject: {
      //   color: "red",
      //   border: "1px solid green",
      //   backgroundColor: "coral",
     // },
      }
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 60px;
  color: cadetblue;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: green;
}
.soldOut {
  color: red;
}
</style>
