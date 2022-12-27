<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        id="frontend"
        type="checkbox"
        value="frontend"
        checked
        @change="setFilter"
      />
      <label for="frontend">Front End</label>
    </span>

    <span class="filter-option">
      <input
        id="backend"
        type="checkbox"
        value="backend"
        checked
        @change="setFilter"
      />
      <label for="backend">Back End</label>
    </span>

    <span class="filter-option">
      <input
        id="career"
        type="checkbox"
        value="career"
        checked
        @change="setFilter"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        fronted: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
