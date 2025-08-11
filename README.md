# ⚡️ Software Developer Folio

[![GitHub License](https://img.shields.io/github/license/musamaakhtar-tech/my_developer_folio_1-c1f21?color=blue)](https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21/blob/master/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/musamaakhtar-tech/my_developer_folio_1-c1f21)](https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21/stargazers)

## ✨ A Clean, Beautiful & Responsive Portfolio Template for Developers

<p align="center">
  <kbd>
    <img src="https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21/blob/main/src/assets/images/all-devices-black.png" alt="Developer Portfolio Demo">
  </kbd>
</p>

> 🔧 **Built and maintained by [@musamaakhtar-tech](https://github.com/musamaakhtar-tech)**

This portfolio template offers a modern, elegant, and highly customizable experience tailored specifically for developers and software engineers. Whether you're showcasing your resume, portfolio projects, certifications, or writing about your journey in tech, this template provides a solid and flexible foundation. All customization is done easily through JavaScript configuration without needing to dive deep into complex coding structures.

You can personalize the entire website by editing `src/portfolio.js` and control the global color theme with SCSS variables in `src/_globalColor.scss`. Built with React, the template delivers responsiveness, modularity, and performance, making it a perfect choice for anyone in the tech industry who wants to maintain a sleek and modern online presence.

Whether you're a frontend developer, backend engineer, full-stack developer, or aspiring student, this template empowers you to make a strong impression. Showcase your work history, highlight notable projects, embed blogs or podcasts, and let visitors interact with your GitHub profile—all in one cohesive and beautifully crafted interface.

---

## 📚 Table of Contents

* [Portfolio Sections](#portfolio-sections)
* [Getting Started](#getting-started)
* [How to Use](#how-to-use)
* [Linking to GitHub](#linking-portfolio-to-github)
* [Linking Blogs to Medium](#linking-blogs-section-to-medium)
* [Customization](#customization)
* [Deployment](#deployment)
* [Technologies Used](#technologies-used)
* [Illustrations & Assets](#illustrations--assets)
* [Contributors](#contributors)
* [License](#license)

---

## ✅ Portfolio Sections

This template includes a wide range of sections to present yourself professionally and comprehensively:

✔️ Summary & About Me
✔️ Skills & Technologies
✔️ Education Timeline
✔️ Professional Work Experience
✔️ Open Source Contributions
✔️ Featured Projects / Big Projects
✔️ Awards, Achievements & Certifications 🏆
✔️ Contact Section with Social Integration
✔️ Live Twitter Feed
✔️ Auto-populated GitHub Profile Cards

> 🌐 [View Live Demo](https://usamaakhtar.netlify.app/)

You can reorder, enable, or disable any section based on your preference. Every section is encapsulated and responsive by default, ensuring a consistent look across different screen sizes and devices.

---

## 🚀 Getting Started

### Requirements

Make sure you have the following tools installed:

* [Node.js](https://nodejs.org/en/download/) – JavaScript runtime
* [Git](https://git-scm.com/) – Version control system
* [Docker (optional)](https://www.docker.com/products/docker-desktop) – For running in isolated environments and streamlined deployments

### Minimum Version Support

```bash
node >= v10.16.0
npm >= 6.9.0
git >= 2.17.1
```

These versions are recommended to ensure compatibility with the React scripts and dependencies used throughout the template.

### 🐳 Using Docker

You can run the project inside a Docker container:

```bash
# Build Docker image
docker build -t my_developer_folio_1-c1f21:latest .

# Run the container on port 3000
docker run -t -p 3000:3000 my_developer_folio_1-c1f21:latest
```

This makes it easy to develop in a clean, reproducible environment without manually setting up Node.js or other dependencies.

---

## 🧑‍💻 How to Use

Follow these steps to get started locally and start customizing your portfolio:

```bash
# Clone this repository
git clone https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21.git

# Navigate to the directory
cd my_developer_folio_1-c1f21

# Create a .env file
cp env.example .env

# Install dependencies
npm install

# Start the development server
npm start
```

Visit your local site at `http://localhost:3000`. Any edits to your portfolio configuration file or component code will be hot-reloaded instantly.

---

## 🔗 Linking Portfolio to GitHub

Automatically display your GitHub repositories and contributions by integrating the GitHub API directly into your portfolio.

1. Generate a GitHub personal access token [here](https://github.com/settings/tokens)
2. Add the following lines to your `.env` file:

```env
REACT_APP_GITHUB_TOKEN="YOUR_GITHUB_TOKEN"
GITHUB_USERNAME="musamaakhtar-tech"
USE_GITHUB_DATA="true"
```

This enables dynamic loading of your repositories, stats, activity graph, and contribution streaks, giving visitors a live snapshot of your coding life.

---

## ✍️ Linking Blogs Section to Medium

Integrate your latest Medium posts into the portfolio and keep your audience updated with your thoughts, insights, and tutorials.

### Setup:

```env
MEDIUM_USERNAME="your_medium_username"
```

In `portfolio.js`, enable the blog section:

```js
const blogSection = {
  displayMediumBlogs: true,
};
```

The blog section fetches your latest Medium articles and renders them with clean, minimal styling that matches the overall aesthetic.

---

## 🎨 Customization

Easily customize every section by editing `/src/portfolio.js`. Configure:

* Greeting & introduction
* Social links
* Skills & technologies
* Experience & projects
* Achievements & certifications
* Blog, podcasts, talks
* Twitter feed

This single configuration file controls most of the displayed content, enabling fast iteration and editing.

### SEO & Metadata

Update `public/index.html` to include custom page titles, Open Graph tags, and meta descriptions to boost SEO and improve discoverability.

### Resume Upload

Place your resume in the designated directory:

```
src/containers/greeting/resume/resume.pdf
```

You can link this file through your profile's greeting section so recruiters and clients can easily download it.

### Animation Control

Customize or replace Lottie animations via the JSON files in `src/assets/lottie` or modify component logic in `DisplayLottie.js` to reflect a different visual style.

---

## 🚢 Deployment

### 📘 GitHub Pages

1. Edit `package.json`:

```json
"homepage": "https://<your-username>.github.io/my_developer_folio_1-c1f21"
```

2. Deploy using:

```bash
npm run deploy
```

This will push your site to the `gh-pages` branch and make it available at the specified GitHub Pages URL.

---

### 🟢 Deploy to Netlify

One-click deploy via Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21)

Netlify offers automated deployments from GitHub, continuous integration, and easy configuration for custom domains and SSL.

---

## 🛠 Technologies Used

This project leverages modern web development tools and frameworks:

* ⚛️ React – component-based frontend framework
* ⚡️ GraphQL – query language for API integration
* 🚀 Apollo Boost – simple GraphQL client
* 🎨 SCSS – styling with nested rules and variables
* 🎞️ Lottie Animations – vector animations powered by JSON
* 🐦 react-twitter-embed – live Twitter feeds
* ⬆️ react-headroom – sticky navigation components
* 😄 react-easy-emoji – emojis rendered with accessibility

These tools ensure fast load times, consistent UI/UX, and advanced interactivity with minimal effort.

---

## 🎨 Illustrations & Assets

Visual elements and assets are provided by open-source platforms and can be replaced or extended as needed:

* [UnDraw](https://undraw.co/) – Free, customizable illustrations for every section
* [LottieFiles](https://lottiefiles.com/) – Scalable animations to enhance engagement
* [Heroicons](https://heroicons.com/) – Pixel-perfect icons for all UI needs

You are encouraged to replace these assets with your own designs for a more personal touch.

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/musamaakhtar-tech/my_developer_folio_1-c1f21/blob/master/LICENSE).

You are free to use, modify, and distribute this template in your personal or commercial projects without restrictions. Attribution is appreciated but not required.
