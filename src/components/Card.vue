<script>
export default {

}
</script>

<template>

  <div class="card border-0 shadow">

    <div class="card-header p-0 bg-transparent" v-if="$slots.header">
      <slot name="header"/>
    </div>

    <div class="card-body p-4" v-if="$slots.body">
      <slot name="body"/>
    </div>


    <div class="card-footer bg-transparent" v-if="$slots.footer">
      <slot name="footer"/>
    </div>

  </div>

</template>

<style scoped>

.card {
  transition: .3s;
}

.card:hover {
  cursor: pointer;
  transform: rotate(-1deg);
}

</style>