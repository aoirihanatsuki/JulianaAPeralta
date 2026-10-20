<script setup lang="ts">
const base = import.meta.env.BASE_URL
</script>

<template>
  <main class="portfolio-container">
    <!-- Hero Section / Profile -->
    <section class="hero-section">
      <div class="profile-card">
        <img :src="`/${base}pfp.jpg`" alt="Juliana Francesca A. Peralta" class="profile-img" />
        <h1>Juliana Francesca A. Peralta</h1>
        <p class="tagline">Frontend Developer & UI/UX Enthusiast</p>
        <a :href="`/${base}cv.pdf`" download="Juliana_Peralta_CV.pdf" class="resume-action-btn">Download CV</a>
      </div>
    </section>

    <!-- Certificates Section -->
    <section class="section-block">
      <h2>Certificates</h2>
      <div class="grid-container">
        
        <div class="card">
          <h3>Certificate 1</h3>
          <img :src="`/${base}cer1.jpg`" alt="Certificate 1" class="content-img" />
          <p class="caption">#CERTIFICATE 1 - 2025 International Conference.</p>
        </div>

        <div class="card">
          <h3>Certificate 2</h3>
          <img :src="`/${base}cer2.jpg`" alt="Certificate 2" class="content-img" />
          <p class="caption">#CERTIFICATE 2 - 2025 International Conference.</p>
        </div>

        <div class="card">
          <h3>Certificate 3</h3>
          <img :src="`/${base}cer3.jpg`" alt="Certificate 3" class="content-img" />
          <p class="caption">#CERTIFICATE 3 - 2025 International Conference.</p>
        </div>

        <div class="card">
          <h3>Certificate 4</h3>
          <img :src="`/${base}cer4.jpg`" alt="Certificate 4" class="content-img" />
          <p class="caption">#CERTIFICATE 4 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 5</h3>
          <img :src="`/${base}cer5.jpg`" alt="Certificate 5" class="content-img" />
          <p class="caption">#CERTIFICATE 5 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 6</h3>
          <img :src="`/${base}cer6.jpg`" alt="Certificate 6" class="content-img" />
          <p class="caption">#CERTIFICATE 6 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 7</h3>
          <img :src="`/${base}cer7.jpg`" alt="Certificate 7" class="content-img" />
          <p class="caption">#CERTIFICATE 7 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 8</h3>
          <img :src="`/${base}cer8.jpg`" alt="Certificate 8" class="content-img" />
          <p class="caption">#CERTIFICATE 8 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 9</h3>
          <img :src="`/${base}cer9.jpg`" alt="Certificate 9" class="content-img" />
          <p class="caption">#CERTIFICATE 9 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 10</h3>
          <img :src="`/${base}cer10.jpg`" alt="Certificate 10" class="content-img" />
          <p class="caption">#CERTIFICATE 10 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 11</h3>
          <img :src="`/${base}cer11.jpg`" alt="Certificate 11" class="content-img" />
          <p class="caption">#CERTIFICATE 11 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 12</h3>
          <img :src="`/${base}cer12.jpg`" alt="Certificate 12" class="content-img" />
          <p class="caption">#CERTIFICATE 12 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

        <div class="card">
          <h3>Certificate 13</h3>
          <img :src="`/${base}cer13.jpg`" alt="Certificate 13" class="content-img" />
          <p class="caption">#CERTIFICATE 13 - TALAKTECH SERIES: PAGTALAKAY SA MAKABAGONG TEKNOLOHIYA 2025.</p>
        </div>

      </div>
    </section>

    <!-- Experiences Section -->
    <section class="section-block">
      <h2>Experiences</h2>
      <div class="grid-container">

        <div class="card">
          <h3>Experience 1</h3>
          <img :src="`/${base}exp1.jpg`" alt="Experience 1" class="content-img" />
          <p class="caption">#EXPERIENCE 1 - First Pin and Hard Hat! First Batch</p>
        </div>

        <div class="card">
          <h3>Experience 2</h3>
          <img :src="`/${base}exp2.jpg`" alt="Experience 2" class="content-img" />
          <p class="caption">#EXPERIENCE 2 - On the Job Training in Mandaluyong, Picture with our supervisor</p>
        </div>

        <div class="card">
          <h3>Experience 3</h3>
          <img :src="`/${base}exp3.jpg`" alt="Experience 3" class="content-img" />
          <p class="caption">#EXPERIENCE 3 - Wireframing, UI/UX, #OJT</p>
        </div>

        <div class="card">
          <h3>Experience 4</h3>
          <img :src="`/${base}exp4.jpg`" alt="Experience 4" class="content-img" />
          <p class="caption">#EXPERIENCE 4 - NC2 Training 2026</p>
        </div>

        <div class="card">
          <h3>Experience 5</h3>
          <img :src="`/${base}exp5.jpg`" alt="Experience 5" class="content-img" />
          <p class="caption">#EXPERIENCE 5 - Regional Information Technology and Engineering Summit 2026</p>
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
