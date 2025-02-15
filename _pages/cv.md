---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="/assets/css/custom_cv.css">

{% include base_path %}

<div class="container">
    <section class="profile">
        <h2><i class="fas fa-user"></i> Professional Profile</h2>
        <p>I am a motivated and diligent software engineering graduate with a strong sense of responsibility and a proven ability 
        to tackle challenges through effective decision-making, teamwork, and leadership. Passionate about advancing my 
        knowledge and express while embracing emerging technologies. I am adaptable, eager to learn, and committed to 
        leveraging my skills to contribute to the growth and success of the organization.</p>
    </section>

    <section class="education">
        <h2><i class="fas fa-graduation-cap"></i> Education</h2>
        <p>B.Sc. (Hons) Software Engineering | Plymouth University (UK)  
        2021 SEP – 2024 DEC</p>
    </section>

    <section class="experience">
        <h2><i class="fas fa-briefcase"></i> Work Experience</h2>
        <p>Trainee Software Engineer BevyLabs  
        2024 JULY – 2025 JAN</p>
        <ul>
            <li><i class="fas fa-mobile-alt"></i> Developed a Flutter-based mobile app using GOOGLE_MLKIT_TEXT_RECOGNITION package and GEMINI API 
            to extract text from images and generate MCQs or essay prompts for improved content interaction.</li>
            <li><i class="fas fa-laptop-code"></i> Designed and implemented an interactive mobile application aimed at teaching Python programming, 
            incorporating engaging tutorials, quizzes, and real-time coding exercises to enhance learning experiences 
            for users.</li>
            <li><i class="fas fa-robot"></i> Developed a machine learning model for shrimp detection using the YOLO (You Only Look Once) framework, 
            integrating it with Python and Flask for deployment, and further incorporated it into a Python GUI using 
            Tkinter to allow users to upload images and get a count of detected shrimps.</li>
            <li><i class="fas fa-pencil-alt"></i> Redesigned the user interfaces mobile application aimed at teaching Python programming in the Sinhala 
            language.</li>
        </ul>
    </section>

    <section class="skills">
        <h2><i class="fas fa-code"></i> Skills</h2>
        <ul>
            <li>Full Stack Development</li>
            <li>Mobile App Development</li>
            <li>Machine Learning</li>
            <li>Desktop Application</li>
        </ul>
    </section>

    <section class="publications">
        <h2>Publications</h2>
        <ul>{% for post in site.publications reversed %}
            {% include archive-single-cv.html %}
        {% endfor %}</ul>
    </section>

    <section class="achievements">
        <h2><i class="fas fa-award"></i> Achievements</h2>
        <ul>
            <li>Cisco IT Essentials 7.0 
            Successfully completed the Cisco IT Essentials 7.0 course, which provided foundational skills in computer hardware 
            and software, networking, and security.</li>
            <li>DUOTHEN 3.0 Coding Competition, NSBM Green University 
            Successfully completed the DUOTHEN 3.0 coding competition, showcasing advanced programming skills and 
            problem-solving abilities in a competitive environment.</li>
        </ul>
    </section>

    <section class="links">
        <h2>Links</h2>
        <p><a href="https://github.com/pasindusandamal"><i class="fab fa-github"></i> GitHub</a> | <a href="https://www.researchgate.net/profile/Pasindu-Sandamal?ev=hdr_xprf"><i class="fab fa-researchgate"></i> ResearchGate</a></p>
    </section>
</div>