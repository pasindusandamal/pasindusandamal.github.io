---
title: "Lung Cancer Detection Application"
subtitle: "Final Year Research Project"
excerpt: |
  <div class="portfolio-excerpt">
    <p class="project-description">Developed a Python-based application utilizing a custom convolutional neural network to detect and classify lung cancer stages as normal, malignant, or benign.</p>
    
    <div class="image-gallery">
      <img src="/images/lung_img_1.jpg" alt="Lung cancer detection interface" class="gallery-image">
      <img src="/images/lung_img_2.jpg" alt="CT scan analysis results" class="gallery-image">
      <img src="/images/lung_img_3.jpg" alt="Machine learning visualization" class="gallery-image">
    </div>
  </div>
header:
  collection: portfolio
  teaser: "/images/lung_img_1.jpg"
  overlay_image: "/images/lung_background.jpg"
  overlay_filter: 0.5
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
toc: true
toc_sticky: true
---

<style>
/* Custom CSS for portfolio page */
.portfolio-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Roboto', sans-serif;
}

.project-description {
  text-align: justify;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.portfolio-excerpt {
  margin-bottom: 2rem;
}

.section-title {
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  color: #2c3e50;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
}

.feature-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.tech-pill {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin: 0.3rem;
  font-size: 0.9rem;
}

.project-quote {
  font-style: italic;
  padding: 1.5rem;
  background-color: #f1f8e9;
  border-left: 4px solid #4caf50;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .image-gallery {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .gallery-image {
    height: 180px;
  }
}
</style>

<div class="portfolio-content">
  <section class="overview">
    <h2 class="section-title">Project Overview</h2>
    <p class="project-description">
      This innovative application utilizes state-of-the-art deep learning techniques to analyze CT scan images and detect early signs of lung cancer. The system classifies results into three categories: normal, benign, or malignant, providing critical early detection capabilities that can significantly improve patient outcomes.
    </p>
    
    <div class="project-quote">
      "Early detection is the key to successful cancer treatment. This application aims to enhance diagnostic capabilities by leveraging the power of artificial intelligence."
    </div>
  </section>
  
  <section class="features">
    <h2 class="section-title">Key Features</h2>
    <div class="feature-cards">
      <div class="feature-card">
        <h3>Accurate Detection</h3>
        <p>Advanced convolutional neural network architecture achieves over 92% accuracy in classifying lung CT scans.</p>
      </div>
      
      <div class="feature-card">
        <h3>User-Friendly Interface</h3>
        <p>Intuitive design allows medical professionals to easily upload and analyze CT scan images.</p>
      </div>
      
      <div class="feature-card">
        <h3>Comprehensive Reporting</h3>
        <p>Generates detailed reports with visualization of affected areas and confidence scores.</p>
      </div>
    </div>
  </section>
  
  <section class="image-showcase">
    <h2 class="section-title">Application Screenshots</h2>
    <div class="image-gallery">
      <img src="/images/lung_img_1.jpg" alt="Application interface" class="gallery-image">
      <img src="/images/lung_img_2.jpg" alt="Detection results" class="gallery-image">
      <img src="/images/lung_img_3.jpg" alt="Analysis visualization" class="gallery-image">
      <img src="/images/lung_img_4.jpg" alt="Report generation" class="gallery-image">
    </div>
  </section>
  
  <section class="technical-details">
    <h2 class="section-title">Technologies Used</h2>
    <div class="tech-container">
      <span class="tech-pill">Python</span>
      <span class="tech-pill">TensorFlow</span>
      <span class="tech-pill">Keras</span>
      <span class="tech-pill">Flask</span>
      <span class="tech-pill">HTML/CSS</span>
      <span class="tech-pill">JavaScript</span>
      <span class="tech-pill">Google Colab</span>
      <span class="tech-pill">Image Processing</span>
      <span class="tech-pill">Deep Learning</span>
    </div>
    
    <h3>Technical Architecture</h3>
    <p>The application employs a custom CNN architecture with multiple convolutional layers, pooling operations, and fully connected layers. Data augmentation techniques were utilized to enhance the model's robustness against variations in CT scan quality and positioning.</p>
  </section>
  
  <section class="process">
    <h2 class="section-title">Development Process</h2>
    <ol>
      <li>Data collection and preprocessing of lung CT scan images</li>
      <li>Neural network design and architecture implementation</li>
      <li>Model training and hyperparameter optimization</li>
      <li>Backend development using Flask for API endpoints</li>
      <li>Frontend interface development with responsive design</li>
      <li>Integration and end-to-end testing</li>
      <li>Performance evaluation and refinement</li>
    </ol>
  </section>
  
  <section class="conclusion">
    <h2 class="section-title">Impact & Results</h2>
    <p>The application demonstrated significant potential for clinical application, with validation studies showing improvements in early detection rates compared to traditional methods. The project received recognition at the university's annual research exhibition and is being considered for further development in collaboration with local healthcare institutions.</p>
  </section>
</div>