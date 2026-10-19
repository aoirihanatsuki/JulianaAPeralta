<script setup lang="ts"></script>

<template>
  <div class="card">
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped>

.card {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #8a2be2;
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Headings and Text */
h1 {
  color: #000000;
  margin-top: 0;
  font-size: 1.8rem;
}

p {
  color: #333333;
  font-size: 1rem;
}

/* Links */
a {
  color: #8a2be2;
  text-decoration: underline;
  font-weight: 500;
}

a:hover {
  color: #5c1d96;
}
</style>