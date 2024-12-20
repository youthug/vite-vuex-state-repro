<script>
import {mapGetters} from "vuex";
import {hasRole} from "../utils/permission.js";
import './renderJSX.jsx'

export default {
  mounted() {
    // change 1 -> 2 or anything to trigger HMR
    console.log('ImportingJSX mounted', 1)
  },
  computed: {
    ...mapGetters(['roles']),
    rolesComputed() {
        return store.getters['roles']
    },
  },
  methods: {
    hasRole,
  },
}
</script>

<template>
  <div class="box-container">
    <h2>&lt;script> + importing .jsx file</h2>
    <div>
      roles: {{ roles }}
    </div>
    <div>
      roles in computed: {{ rolesComputed }}
    </div>
    <p style="color: red;">
      <strong>Editing any script in renderJSX.jsx will change the result to `false`.</strong>
    </p>
    <div>
      hasRole(['admin']) --- <span>{{ hasRole(['admin'], 'ImportingJSX') }}</span>
    </div>
  </div>
</template>
