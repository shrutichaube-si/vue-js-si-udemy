<template>
    <div>
       <p><b> hello {{ name }}</b></p>
    </div>
    <div v-text="surname"></div>
    <div v-html="type"></div>
    <div :id="headingId">Heading</div>
    <button :disabled="IsDisable">Hide</button>
    <h2 class="underline">UnderLined Text</h2>
    <h2 class="underline" :class="status">Status</h2>
    <h2 :class="IsPromoted && 'promoted'">Promoted Movie</h2>
    <h2 :class="IsSoldout ? 'sold-out' : 'new'">SoldOut? movie</h2>
    <h2 :class="['new','promoted']">Newly Promoted Movie</h2>
    <h2 :class="[IsPromoted && 'promoted',IsSoldout ? 'sold-out' :'new']">Array Conditional Movie</h2>
    <h2 :class="{
        promoted: IsPromoted,
        new: !IsSoldout,
        'sold-out':IsSoldout
    }">Object Conditional Movie</h2>
    <h2 :style="{
        color:highlightColor,
        'font-size':headerSize + 'px',
        padding:'20px'
    }">Inline Style</h2>
    <h2 :style="headerStyleObject">Style Object</h2>
    <div :style="[baseStyleObject,successStyleObject]">Success Style</div>
    <div :style="[baseStyleObject,dangerStyleObject]">Danger Style</div>
</template>

<script>
export default {
    data(){
        return{
            name:"Dhruv",
            surname:'Solanki',
            type:'<b>Warrior</b>',
            headingId:'heading',
            IsDisable:true,
            status:'success',
            IsPromoted:true,
            IsSoldout:true,
            highlightColor:'orange',
            headerSize: 50,
            headerStyleObject:{
                color:'orange',
                fontSize:'50px',
                padding:'20px'
            },
            baseStyleObject:{
                fonstSize:'50px',
                padding:'10px',
            },
            successStyleObject:{
                color:'green',
                backgroundColor:'lightgreen',
                border:'1px solid green',
                padding:'20px'
            },
            dangerStyleObject:{
                color:'darkred',
                backgroundColor:'red',
                border:'1px solid darkred'
            }
        }
    }
}
</script>

<style scoped>
.underline{
    text-decoration: underline;
}
.promoted{
    font-style: italic;
}
.new{
    color: green;
}
.sold-out{
    color: red;
}
</style>
<!-- The above "underline" class is an example of static classes binding -->
<!-- The above class "status" is an example of dynamic classes binding..One advantage of it is that we can we use both static as well as dynamic classes -->
<!-- <h2 :class="['new','promoted']">Newly Promoted Movie</h2>
    <h2 :class="[IsPromoted && 'promoted',IsSoldout ? 'sold-out' :'new']">Array Conditional Movie</h2>
   This is Array's approach to dynamic binding of classes!
-->
<!-- 
    <h2 :class="{
        promoted: IsPromoted,
        new: !IsSoldout,
        'sold-out':IsSoldout
    }">Object Conditional Movie</h2>
    Object based dynamic classes. Object based is easier to specify conditions compared to the array approach!
 -->
 <!-- Style Binding!!  if you have single inline property then go with the first approach but if you have multiple inline style property then go with the second approach -->