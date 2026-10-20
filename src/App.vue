<script setup lang="ts">
import { ref } from 'vue'

// Base URL automatically handles the /JulianaAPeralta/ prefix on GitHub Pages
const base = import.meta.env.BASE_URL

const certificates = ref([
  { id: 1, title: 'Certificate 1', image: `${base}Cer1.jpg` },
  { id: 2, title: 'Certificate 2', image: `${base}Cer2.jpg` },
  { id: 3, title: 'Certificate 3', image: `${base}Cer3.jpg` },
  { id: 4, title: 'Certificate 4', image: `${base}Cer4.jpg` },
  { id: 5, title: 'Certificate 5', image: `${base}Cer5.jpg` },
  { id: 6, title: 'Certificate 6', image: `${base}Cer6.jpg` },
  { id: 7, title: 'Certificate 7', image: `${base}Cer7.jpg` },
  { id: 8, title: 'Certificate 8', image: `${base}Cer8.jpg` },
  { id: 9, title: 'Certificate 9', image: `${base}Cer9.jpg` },
  { id: 10, title: 'Certificate 10', image: `${base}Cer10.jpg` },
  { id: 11, title: 'Certificate 11', image: `${base}Cer11.jpg` },
  { id: 12, title: 'Certificate 12', image: `${base}Cer12.jpg` },
  { id: 13, title: 'Certificate 13', image: `${base}Cer13.jpg` },
])
</script>

<template>
  <main class="portfolio-container">
    <!-- Hero Section / Profile -->
    <section class="hero-section">
      <div class="profile-card">
        <img :src="`${base}pfp.jpg`" alt="Juliana Francesca A. Peralta" class="profile-img" />
        <h1>Juliana Francesca A. Peralta</h1>
        <p class="tagline">Frontend Developer & UI/UX Enthusiast</p>
        <a :href="`${base}cv.pdf`" download="Juliana_Peralta_CV.pdf" class="resume-action-btn">Download CV</a>
      </div>
    </section>

    <!-- Certificates Section -->
    <section class="certificates-section">
      <h2>Certificates</h2>
      <div id="certificates-feed" class="certificates-grid">
        <div v-for="cert in certificates" :key="cert.id" class="cert-card">
          <img :src="cert.image" :alt="cert.title" class="cert-img" />
          <p>{{ cert.title }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.portfolio-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333333;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-card {
  background-color: #ffffff;
  border: 2px solid #8a2be2;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #8a2be2;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.1rem;
  color: #666666;
  margin-bottom: 1.5rem;
}

.resume-action-btn {
  display: inline-block;
  background-color: #8a2be2;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;
}

.resume-action-btn:hover {
  background-color: #5c1d96;
}

.certificates-section h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.cert-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>
