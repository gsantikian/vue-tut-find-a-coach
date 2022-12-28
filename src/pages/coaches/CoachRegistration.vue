<template>
  <section>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
      >{{ error }}</base-dialog
    >
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <base-card v-else>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;

      try {
        await this.$store.dispatch('coaches/registerCoach', data);
      } catch (error) {
        this.isLoading = false;
        this.error = error.message || 'Something went wrong!';
        return;
      }

      this.isLoading = false;
      this.$router.replace('/coaches');
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
