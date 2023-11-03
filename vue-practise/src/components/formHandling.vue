<template>
    <div>
        <pre>
            {{ JSON.stringify(formValues,null,2) }}
        </pre>
    </div>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" v-model.trim.lazy="formValues.name"/>
        </div>
        <div class="form-group">
            <label for="profile">Profile Summary</label>
            <textarea id="profile" class="form-control" v-model="formValues.profileSummary"></textarea>
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <select id="country" class="form-control" v-model="formValues.country">
                <option value="">Select a Country</option>
                <option value="india">India</option>
                <option value="Vietnam">Vietnam</option>
                <option value="singapore">Singapore</option>
            </select>
        </div>
        <div class="form-group">
            <label for="job-location">Job Location</label>
            <select id="job-location" multiple class="form-control" v-model="formValues.jobLocation">
                <option value="india">India</option>
                <option value="Vietnam">Vietnam</option>
                <option value="singapore">Singapore</option>
            </select>
        </div>
        <div class="form-group">
            <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no"/>
            <label for="remoteWork">Open to remote work?</label>
        </div>
        <div class="form-group">
            <label>Skill Set</label>
            <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"/>
            <label for="html">HTML</label>
            <input type="checkbox" id="css" value="css" v-model="formValues.skillSet"/>
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet"/>
            <label for="javascript">Javascript</label>
        </div>
        <div class="form-group">
            <label>Years Of Experience</label>
            <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience"/>
            <label for="0-2">0-2</label>
            <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience"/>
            <label for="3-5">3-5</label>
            <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience"/>
            <label for="6-10">5-10</label>
            <input type="radio" id="5-10" value="5-10" v-model="formValues.yearsOfExperience"/>
            <label for="10+">10+</label>
            <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExperience"/>
        </div>
        <!-- <div>
            <button>Submit</button>
        </div> -->
        <div>
            <label for="age">Age</label>
            <input @keyup.enter="submitForm" type="number" id="age" v-model.number="formValues.age"/>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
           formValues:{
            name:'',
            profileSummary: '',
            country:'',
            jobLocation:[],
            remoteWork:'No',
            skillSet:[],
            yearsOfExperience:'',
            age:null
           }
        }
    },
    methods:{
        submitForm(){
            console.log('FormValues',this.formValues)
        }
    }
}
</script>
<style scoped>
    .form-group {
        margin-bottom: 20px;
    }
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .form-control {
        width: calc(100% - 20px);
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 16px;
    }
    select.form-control {
        width: 100%;
    }
    textarea.form-control {
        height: 150px;
        resize: vertical;
    }
    input[type="checkbox"], input[type="radio"] {
        margin-right: 10px;
    }
</style>


<!-- Form Handling -->
<!-- Capture User Inputs,Inputs,Textareas,Single select dropdown Control,
    Multi Select control,checkbox,checkbox group,radio,submit form data -->
    <!-- Two-way binding {v-model} 
    It refers to binding from the the template to the data and from the data back to the template -->
    <!-- 
        Use this incase of console to check if the data is being passed or not 
      <div>
        <pre>
            {{ JSON.stringify(formValues,null,2) }}
        </pre>
    </div>
 -->
 <!-- Modifiers -->
<!-- its basically a suffix you can add to either the v-on directive or the v-model directive to add some functionality inline within the template -->
<!-- it basically helps us to write cleaner codes... 
1.Trim modifier
2.Number
3.Lazy 
4.prevent 
5.key -->
