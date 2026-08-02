# Plexura Website

A responsive single-page website built with React, Vite, and Tailwind CSS. The project uses component-based UI development, client-side routing, animated interfaces, and a configurable REST API integration for contact-form submissions.

## Technology Stack

| Technology                        | Purpose                                                             |
| --------------------------------- | ------------------------------------------------------------------- |
| **React 18**                      | Component-based user interface development                          |
| **Vite 6**                        | Development server, module bundling, and production builds          |
| **JavaScript / JSX**              | Application logic and React component structure                     |
| **React Router**                  | Client-side routing between application pages                       |
| **Tailwind CSS 3**                | Responsive utility-first styling                                    |
| **PostCSS**                       | CSS processing during development and builds                        |
| **Autoprefixer**                  | Browser-compatible CSS vendor prefixes                              |
| **Framer Motion**                 | Scroll, entrance, hover, and interactive animations                 |
| **Lucide React**                  | SVG icon components                                                 |
| **Fetch API**                     | Contact-form communication with the backend API                     |
| **CSS 3D Transforms**             | Animated three-dimensional cube interface                           |
| **SVG**                           | Gradient rings and scalable visual effects                          |
| **Web Workers / OffscreenCanvas** | Optional background animation rendering with a main-thread fallback |

## Application Architecture

The frontend is structured as a React single-page application. Vite provides the local development environment and generates the optimized production bundle in the `dist` directory.

React Router handles the following routes:

```text
/           Main website
/services   Services page
/privacy    Privacy policy
/terms      Terms of service
```

The interface is divided into reusable React components and page-level components. Global styles are loaded through `src/index.css`, while Tailwind CSS provides responsive layout and utility classes throughout the JSX files.

## Animation System

The project includes several animation approaches:

* Framer Motion animations for transitions, scrolling effects, hover states, and interactive elements
* CSS keyframe animations and 3D transforms for the rotating hero cube
* SVG gradients and orbit effects
* Responsive animation behavior for desktop and mobile devices
* Support for the `prefers-reduced-motion` accessibility setting
* An optional Web Worker and OffscreenCanvas animation module with fallback rendering for unsupported browsers


## Project Structure

```text
Plexura/
├── public/
│   ├── animationWorker.js
│   ├── images and icons
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── animations/
│   │   └── heroAnimation.js
│   ├── components/
│   │   └── heroCanvas.jsx
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── App.jsx
│   ├── services.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

