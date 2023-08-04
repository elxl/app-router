<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal-content">
      <span class="close" @click="hideModal">&times;</span>
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    show: Boolean,
  },
  methods: {
    hideModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start; /* Align content to the top */
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 50px; /* Adjust this value to control the distance from the top */
  padding-top: 100px;
  position: relative;
  height: 20%;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

/* Add other custom styles as needed */
</style>
