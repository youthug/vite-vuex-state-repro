<script lang="jsx">
import {mapGetters} from "vuex";
import {hasRole} from "../utils/permission.js";

export default {
  mounted() {
    // change 1 -> 2 or anything to trigger hmr
    console.log('JSX mounted', 1)
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
    <h2>&lt;script lang="jsx"></h2>
    <div>
      roles: {{ roles }}
    </div>
    <p style="color: red;">
      <strong>Editing any script in JSX.vue will change the result to `false`.</strong>
    </p>
    <div>
      hasRole(['admin']) --- <span>{{ hasRole(['admin'], 'JSX') }}</span>
    </div>
  </div>
</template>
