<script>
export default  {
  props: {
    name: {type:String,required:true},
    type: {type:String,required:true},
    id: {type:String,required:true},
    rules : {type:Object,required:true},
    value : {type:String},
    options : {type:Array},
  },

  methods: {
    input(e) {
      this.$emit('onUpdate',{
        name: this.id,
        value: e.target.value,
        valid: !this.validate(e.target.value)
      })

    },
    validate(value) {

      const EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(this.rules.required && !value) {
        return 'هذا الحقل مطلوب'
      }
      if(this.rules.min && value.length < this.rules.min ) {
        return `${this.name} يجب ان يكون أكبر من ${this.rules.min}`
      }

      if(this.rules.max && value.length > this.rules.max ) {
        return `${this.name} يجب ان يكون أصغر من ${this.rules.max}`
      }

      if(this.rules.email && !value.match(EMAIL)) {
        return  `أدخل بريد الكتروني صالح`
      }

    }
  },
  computed: {
    error() {
      return this.validate(this.value)
    }
  }
}
</script>

<template>

  <!--  <label :for="id" class="my-1">{{name}} <span class="text-danger" v-if="rules.required">*</span></label>-->


  <div class="form-floating" v-if="type !== 'textarea' && type !== 'select'">
    <input :type="type" :id="id"  :class="`form-control bg-white bg-opacity-50 border-0  border-bottom border-dark-subtle  mb-1 ${error ? 'error': ''}`"  :placeholder="`Entrer  ${name}`" @input="input" :value="value" />
    <label :for="id" class="">{{name}}</label>
  </div>



  <select  :id="id" :class="`form-select bg-white bg-opacity-50 border-0 border-bottom p-3 border-dark-subtle  mb-1 ${error ? 'error': ''}`"  @change="input" :value="value" v-if="type === 'select'">
    <option value="" disabled>Choisi {{name}}</option>
    <option :value="option.value" :selected="value === option.value" v-for="option in options" >{{option.title}}</option>
  </select>

  <textarea :type="type" :id="id" :class="`form-control bg-white bg-opacity-50 border-0  border-bottom border-dark-subtle mb-1 ${error ? 'error': ''}`"  :placeholder="`Entrer ${name}`" @input="input" :value="value" v-if="type === 'textarea'">{{value}}</textarea>

  <div class="text-danger ms-2" v-if="error">{{error}}*</div>

</template>

<style scoped>


input,select,textarea {
  transition: .3s;
  border-radius: 0;
}

input:focus,select:focus,textarea:focus  {
  box-shadow: none;
}

.error {
  border-bottom-color: var(--bs-danger) !important;
}

.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control ~ label::after
{
  background: transparent !important;
}


.form-floating > label {
  padding: 0.75rem 0.75rem ;
}

</style>