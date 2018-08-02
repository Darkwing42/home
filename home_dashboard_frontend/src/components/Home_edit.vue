<template>
  <div class="home_edit">
    <div class="uk-container" v-if="!connection_state">
      <div class="spinner" uk-spinner="ratio: 3">
      </div>
    </div>
    <div class="uk-container" v-else>
      <h1>Home add/edit</h1>

        {{ home }}
        <h3>Überschrift: </h3>
        <input class="uk-input" type="text" name="" v-model="home.section_name" value="">
        <h3>Links:</h3>
        
        </ul>

    </div>





  </div>
  </div>
</template>

<script>
export default {
  name: 'Home_edit',
  data() {
    return {

    }
  },


  computed: {
    connection_state() {
      return this.$store.state.connection.isConnected
    },
    home() {
      var id = parseInt(this.$route.params.id)
      return this.$store.getters.home(id)
    }
    }
  }





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.spinner {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
