<template>
  <div>
    <label>Dime tu nombre</label>
    <input type="text" placeholder="dime tu nombre" v-model="nombre"/>
    <p>Tu nombre es: {{nombre}}</p>
  </div>
</template>

<script>

export default {
  name: 'Formulario',
  data () {
      return {
          nombre: "juan"
      }
  }
}
</script>