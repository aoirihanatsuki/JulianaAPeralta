<script setup lang="ts">
import { ref } from 'vue'

// Directly import all certificate images so Vite bundles them properly
import cer1 from './assets/cer1.jpg'
import cer2 from './assets/cer2.jpg'
import cer3 from './assets/cer3.jpg'
import cer4 from './assets/cer4.jpg'
import cer5 from './assets/cer5.jpg'
import cer6 from './assets/cer6.jpg'
import cer7 from './assets/cer7.jpg'
import cer8 from './assets/cer8.jpg'
import cer9 from './assets/cer9.jpg'
import cer10 from './assets/cer10.jpg'
import cer11 from './assets/cer11.jpg'
import cer12 from './assets/cer12.jpg'
import cer13 from './assets/cer13.jpg'

// Directly import all experience images
import exp1 from './assets/exp1.jpg'
import exp2 from './assets/exp2.jpg'
import exp3 from './assets/exp3.jpg'
import exp4 from './assets/exp4.jpg'
import exp5 from './assets/exp5.jpg'

// Import profile picture and CV if you have them in assets (otherwise use public path for them)
import pfp from './assets/pfp.jpg'
import cvPdf from './assets/cv.pdf'

const certificates = ref([
  { id: 1, title: 'Certificate 1', image: cer1, desc: '#CERTIFICATE 1 - 2025 International Conference.' },
  { id: 2, title: 'Certificate 2', image: cer2, desc: '#CERTIFICATE 2 - 2025 International Conference.' },
  { id: 3, title: 'Certificate 3', image: cer3, desc: '#CERTIFICATE 3 - 2025 International Conference.' },
  { id: 4, title: 'Certificate 4', image: cer4, desc: '#CERTIFICATE 4 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 5, title: 'Certificate 5', image: cer5, desc: '#CERTIFICATE 5 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 6, title: 'Certificate 6', image: cer6, desc: '#CERTIFICATE 6 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 7, title: 'Certificate 7', image: cer7, desc: '#CERTIFICATE 7 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 8, title: 'Certificate 8', image: cer8, desc: '#CERTIFICATE 8 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 9, title: 'Certificate 9', image: cer9, desc: '#CERTIFICATE 9 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 10, title: 'Certificate 10', image: cer10, desc: '#CERTIFICATE 10 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 11, title: 'Certificate 11', image: cer11, desc: '#CERTIFICATE 11 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 12, title: 'Certificate 12', image: cer12, desc: '#CERTIFICATE 12 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
  { id: 13, title: 'Certificate 13', image: cer13, desc: '#CERTIFICATE 13 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.' },
])

const experiences = ref([
  { id: 1, title: 'Experience 1', image: exp1, desc: '#EXPERIENCE 1 - First Pin and Hard Hat! First Batch' },
  { id: 2, title: 'Experience 2', image: exp2, desc: '#EXPERIENCE 2 - On the Job Training in Mandaluyong, Picture with our supervisor' },
  { id: 3, title: 'Experience 3', image: exp3, desc: '#EXPERIENCE 3 - Wireframing, UI/UX, #OJT' },
  { id: 4, title: 'Experience 4', image: exp4, desc: '#EXPERIENCE 4 - NC2 Training 2026' },
  { id: 5, title: 'Experience 5', image: exp5, desc: '#EXPERIENCE 5 - Regional Information Technology and Engineering Summit 2026' },
])
</script>

<template>
  <main class="portfolio-container">
    <!-- Hero Section / Profile -->
    <section class="hero-section">
      <div class="profile-card">
        <img :src="pfp" alt="Juliana Francesca A. Peralta" class="profile-img" />
        <h1>Juliana Francesca A. Peralta</h1>
        <p class="tagline">Frontend Developer & UI/UX Enthusiast</p>
        <a :href="cvPdf" download="Juliana_Peralta_CV.pdf" class="resume-action-btn">Download CV</a>
      </div>
    </section>

    <!-- Certificates Section -->
    <section class="section-block">
      <h2>Certificates</h2>
      <div class="grid-container">
        <div v-for="cert in certificates" :key="cert.id" class="card">
          <h3>{{ cert.title }}</h3>
          <img :src="cert.image" :alt="cert.title" class="content-img" />
          <p class="caption">{{ cert.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Experiences Section -->
    <section class="section-block">
      <h2>Experiences</h2>
      <div class="grid-container">
        <div v-for="exp in experiences" :key="exp.id" class="card">
          <h3>{{ exp.title }}</h3>
          <img :src="exp.image" :alt="exp.title" class="content-img" />
          <p class="caption">{{ exp.desc }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.portfolio-container {
  max-width: 1000px;
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
.section-block {
  margin-bottom: 3rem;
}
.section-block h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #8a2be2;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}
.content-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  background-color: #f0f0f0;
}
.caption {
  font-size: 0.9rem;
  color: #555555;
  text-align: left;
}
</style>
