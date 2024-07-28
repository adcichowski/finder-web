<template>
  <div>
    <button @click="login">Log in</button>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithPopup } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>
