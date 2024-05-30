<script>
import {mapGetters} from "vuex";
import {hasRole} from "../utils/permission.js";
import NotJSX from "./NotJSX.vue";
import JSX from "./JSX.vue";
import ImportingJSX from "./ImportingJSX.vue";

export default {
  components: {
    NotJSX,
    JSX,
    ImportingJSX,
  },
  computed: {
    ...mapGetters(['roles'])
  },
  mounted() {
    // change 1 -> 2 or anything to trigger HMR
    console.log('HelloWorld mounted', 1)
  },
  methods: {
    hasRole,
  },
}
</script>

<template>
  <div style="width: 100%; padding: 20px; box-sizing: border-box">
    <div style="display: table; margin: 0 auto 20px;">
      <h1>HelloWorld</h1>
      <div>
        roles: {{ roles }}
      </div>
      <div>
        hasRole(['admin']) --- <span>{{ hasRole(['admin'], 'HelloWorld') }}</span>
      </div>
    </div>

    <div style="border-top: 1px solid #ccc; padding: 20px 10px; display: flex; gap: 20px;">
      <NotJSX />
      <JSX />
      <ImportingJSX />
    </div>
  </div>
</template>
