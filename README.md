# personal_webpage
 
# Personal Website Template README

This README provides instructions on how to customize your personal website using the provided HTML template.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Customization](#customization)
  - [General Information](#general-information)
  - [Sidebar](#sidebar)
  - [Main Content](#main-content)
    - [About Me](#about-me)
    - [Resume](#resume)
    - [Publications](#publications)
    - [Contact](#contact)
- [Assets](#assets)
- [Deployment](#deployment)
- [License](#license)

## Introduction

This HTML template is designed to help you create a personal website quickly and easily. You can customize it by replacing placeholders with your own information.

## Requirements

- A text editor to edit HTML and CSS files.
- Basic knowledge of HTML and CSS.
- (Optional) A web server to host your website.

## Customization

Open the `index.html` file in your text editor and follow the instructions below to customize your website.

### General Information

1. **Page Title and Favicon**

   - Replace the page title with your name:

     ```html
     <title>{Your Name}</title>
     ```

   - Replace the favicon with the path to your own favicon image:

     ```html
     <link rel="shortcut icon" href="./assets/images/{your_favicon.png}" type="image/x-icon">
     ```

### Sidebar

1. **Avatar Image**

   - Replace the `src` attribute with the path to your avatar image:

     ```html
     <img src="./assets/images/{your_avatar.png}" alt="Your Avatar" width="80">
     ```

2. **Name and Title**

   - Replace `{Your Name}` and `{Your Title}` with your own name and title:

     ```html
     <h1 class="name" title="{Your Name}">{Your Name}</h1>
     <p class="title">{Your Title}</p>
     ```

3. **Contact Information**

   - Replace `{your_email}` with your email address:

     ```html
     <a href="mailto:{your_email}" class="contact-link">{your_email}</a>
     ```

   - Replace `{Your Location}` with your location:

     ```html
     <address>{Your Location}</address>
     ```

4. **Social Links**

   - Replace the `href` attributes with your social profile URLs:

     ```html
     <!-- Google Scholar -->
     <a href="{your_google_scholar_url}" class="social-link">
       <ion-icon name="logo-google"></ion-icon>
     </a>

     <!-- Twitter -->
     <a href="{your_twitter_url}" class="social-link">
       <ion-icon name="logo-twitter"></ion-icon>
     </a>

     <!-- LinkedIn -->
     <a href="{your_linkedin_url}" class="social-link">
       <ion-icon name="logo-linkedin"></ion-icon>
     </a>
     ```

### Main Content

#### About Me

1. **Introduction**

   - Replace the placeholder text with your own introduction:

     ```html
     <p>
       {Your brief introduction goes here. Write about your interests, research, and background.}
     </p>
     ```

2. **Affiliated Labs and Institutions**

   - Replace the `href` and `src` attributes with your lab and institution URLs and logos:

     ```html
     <!-- Lab -->
     <a href="{your_lab_url}">
       <img src="./assets/images/{your_lab_logo.png}" alt="Lab logo">
     </a>

     <!-- Institution -->
     <a href="{your_institution_url}">
       <img src="./assets/images/{your_institution_logo.png}" alt="Institution logo">
     </a>
     ```

#### Resume

1. **Education**

   - Replace `{Your Degree}`, `{Your University}`, `{Start Year}`, `{End Year}`, and `{Your education details}` with your education information:

     ```html
     <h4 class="h4 timeline-item-title">
       {Your Degree}<br>
       {Your University}
     </h4>

     <span>{Start Year} — {End Year}</span>

     <p class="timeline-text">
       {Your education details, GPA, honors, supervisors, etc.}
     </p>
     ```

   - Add more `<li class="timeline-item">` elements if you have additional degrees.

2. **Experience**

   - Replace `{Your Position}`, `{Start Year}`, `{End Year}`, and `{Your experience details}` with your work experience:

     ```html
     <h4 class="h4 timeline-item-title">{Your Position}</h4>

     <span>{Start Year} — {End Year}</span>

     <p class="timeline-text">
       {Your experience details, projects, responsibilities, etc.}
     </p>
     ```

   - Add more `<li class="timeline-item">` elements for additional positions.

#### Publications

1. **Publication Entries**

   - Replace `{your_publication_url}`, `{your_publication_image.jpg}`, `{Publication Title}`, and `{Journal or Conference Name}` with your publication details:

     ```html
     <li class="project-item active" data-filter-item data-category="journal">
       <a href="{your_publication_url}">

         <figure class="project-img">
           <div class="project-item-icon-box">
             <ion-icon name="eye-outline"></ion-icon>
           </div>

           <img src="./assets/images/publications/{your_publication_image.jpg}" alt="{Publication Title}" loading="lazy">
         </figure>

         <h3 class="project-title">{Publication Title}</h3>

         <p class="project-category">{Journal or Conference Name}</p>

       </a>
     </li>
     ```

   - Add more `<li class="project-item">` elements for additional publications.

#### Contact

1. **Contact Information**

   - Replace the contact details with your own:

     ```html
     <p class="about-text">
       <b>{Your Office Location}: </b><br>
       <a href="mailto:{your_email}" style="display: inline;">{your_email}</a><br>
       {Your Lab or Group Name}<br>
       {Your Institution}<br>
       {Your Address Line 1}<br>
       {Your Address Line 2}<br>
       {Your City, State/Province}<br>
       {Your Country}<br>
     </p>
     ```

2. **Map**

   - Replace `{your_google_maps_embed_url}` with the embed URL of your location from Google Maps:

     ```html
     <iframe
       src="{your_google_maps_embed_url}"
       width="400" height="300" loading="lazy"></iframe>
     ```

### Assets

Place your image assets (e.g., avatar, logos, publication images) in the appropriate folders:

- **Avatar and Favicon**: `./assets/images/`
- **Lab and Institution Logos**: `./assets/images/`
- **Publication Images**: `./assets/images/publications/`

Ensure the filenames match those used in your `index.html` file.

### Deployment

After customizing the template, you can deploy your website by:

- **Hosting it on a web server**.
- **Using GitHub Pages**:
  - Create a GitHub repository and upload your files.
  - Enable GitHub Pages in the repository settings.
- **Using other static site hosting services** like Netlify or Vercel.

### License

This template is provided under the [MIT License](LICENSE). You are free to use and modify it for personal or commercial purposes.
