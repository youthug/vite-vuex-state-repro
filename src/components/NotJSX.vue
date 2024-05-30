<script>
import {mapGetters} from "vuex";
import {hasRole} from "../utils/permission.js";

export default {
  mounted() {
    // change 1 -> 2 or anything to trigger HMR
    console.log('NotJSX mounted', 1)
  },
  computed: {
    ...mapGetters(['roles'])
  },
  methods: {
    hasRole,
  },
}
</script>

<template>
  <div class="box-container">
    <h2>&lt;script></h2>
    <div>
      roles: {{ roles }}
    </div>
    <p>
      <strong>Editing any script in NotJSX.vue won't change the result `true`.</strong>
    </p>
    <div>
      hasRole(['admin']) --- <span>{{ hasRole(['admin'], 'NotJSX') }}</span>
    </div>
  </div>
</template>
