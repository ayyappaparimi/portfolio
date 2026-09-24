# Netflix-Inspired React Portfolio

A personal portfolio build with React and Vite, featuring a cinematic hero banner, horizontally scrolling project cards, and a resposive dark theme. Project take center stage in a browsing experience inspired by streaming platforms.


## Features

-Featured hero section with an introduction and calls to action
-Reusable project cards organized into category rows
-Horizontally scrolling project galleries
-About and contact sections
-Downloadable resume
-Responsive layout for desktop and mobile
-keyboard focus indicators and reduced-motion support 
-Project content managed through a JavaScript data file

## Tech Stack
- **React** - component-based user interface
- **Vite** - development server and production build tooling
- **JavaScript (ES modules)** - project data and application logic
- **CSS** - styling, responsive layouts, and transitions

## Getting Started

### Prerequisites

Istall a current Node.js LTS release that meets [Vite's Node.js requirements]

## Project Structure

```text
public/
├── images/
│   ├── hero.jpg
│   ├── project-one.jpg
│   └── project-two.jpg
└── resume.pdf
src/
├── App.jsx           # Page layout and reusable project components
├── App.css           # Portfolio styling and responsive rules
├── index.css         # Optional global styles
├── main.jsx          # React entry point
└── projects.js       # Project content and categories
index.html
package.json
vite.config.js
```

## Customization

### Personal Information

Edit `src/App.jsx` to update:

- Your name and introduction
- About section
- Contact email address
- Footer information

Update the page title in `index.html` and add a description meta tag:

```html
<title>Your Name | Portfolio</title>
<meta
  name="description"
  content="Explore projects, skills, and work by Your Name."
/>
```

### Projects

Edit `src/projects.js`. Each project follows this structure:

```js
{
  id: 1,
  title: "Project One",
  category: "Featured Projects",
  image: "/images/project-one.jpg",
  description: "Explain the problem you solved and your contribution.",
  technologies: ["React", "CSS"],
  url: "https://your-project-demo.com",
}
```

Use a unique `id` for each project. Projects with the same `category` appear in the same row; adding a new category creates another row automatically.

### Images and Résumé

- Replace `public/images/hero.jpg` with your hero image.
- Add project screenshots to `public/images/` and update their paths in `src/projects.js`.
- Replace `public/resume.pdf` with your résumé.
- Use landscape screenshots for the project cards, which display at a 16:9 aspect ratio.

### Styling

Edit `src/App.css` to customize colors, typography, spacing, and card sizes. Remove Vite's starter styles from `src/index.css` if they conflict with the portfolio layout.

## Production Build and Deployment

