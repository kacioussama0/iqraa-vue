<script>
export default  {
  props: {
    title: {type:String,required:true},
    disabled: {type:Boolean},
    status: {type: String},
    loading: {type:Boolean}
  },
  methods: {
    btnStatus() {
      if(this.status === 'success' ) {
        return 'bg-green'
      }else if(this.status === 'failed' )
        return   'btn-danger'
    }
  }
}
</script>

<template>
  <button :class="`btn btn-primary w-100 text-light d-block mt-3  py-3 fw-bolder border-0 ${btnStatus()} d-flex align-items-center justify-content-center`" :disabled="disabled">
    {{title}}
    <div class="spinner-border ms-3" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
  </button>
</template>

<style scoped>
.bg-green {
  background: var(--bs-green) !important;
}

</style>