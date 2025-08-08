This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


https://sayan-pi.vercel.app/

![image](https://github.com/user-attachments/assets/c3f5fb01-552a-4bea-b562-8e2f273260a3)
# Portfolio-react

[![GitHub Stars](https://img.shields.io/github/stars/Novadotgg/Portfolio-react?style=social)](https://github.com/Novadotgg/Portfolio-react/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/Novadotgg/Portfolio-react)](https://github.com/Novadotgg/Portfolio-react/issues)
[![GitHub Forks](https://img.shields.io/github/forks/Novadotgg/Portfolio-react?style=social)](https://github.com/Novadotgg/Portfolio-react/network/members)

## Project Description

This is my personal portfolio website built with React, designed to showcase my web development projects, skills, and experience. You can view the live portfolio at [https://sayan-pi.vercel.app/](https://sayan-pi.vercel.app/).

## Features and Functionality

-   **Clean and Responsive Design:** The portfolio is designed to be visually appealing and responsive across various devices.
-   **Sections:**
    -   **Home:** Introduces myself with a profile picture and brief overview.
    -   **About:** Provides detailed information about my background, skills, and experiences.
    -   **Education:** Lists my academic qualifications and achievements.
    -   **Skills:** Highlights my technical skills with proficiency levels.
    -   **Projects:** Showcases my projects with descriptions, tags, and links to GitHub and live demos.
    -   **Contact:** Allows visitors to get in touch with me via email and other contact methods.
-   **Contact Form:** A functional contact form that sends messages directly to my email using EmailJS.
-   **Interactive Elements:** Includes hover effects, animations, and transitions to enhance user experience.
-   **Resume Download:** Provides a button to download my resume directly from the site.

## Technology Stack

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
-   **Tailwind CSS:** A utility-first CSS framework for rapidly styling HTML elements.
-   **shadcn-ui:** A collection of reusable UI components built using Radix UI and Tailwind CSS.
-   **lucide-react:** Beautifully simple, pixel-perfect icons.
-   **react-router-dom:** For handling routing in the React application (see `src/App.tsx`).
-   **@tanstack/react-query:** For data fetching and caching.
-   **EmailJS:** For sending emails directly from the client-side (see `src/components/ContactSection.tsx`).
-   **clsx & tailwind-merge:** For conditionally applying class names (see `src/lib/utils.ts`).
-   **Vite:** A build tool that provides a fast and efficient development experience.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js:** Version 16 or higher.  It's recommended to use the latest LTS version.
-   **npm:** Version 8 or higher (comes with Node.js).
-   **Git:** For version control.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Novadotgg/Portfolio-react.git
    cd Portfolio-react
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This command starts the development server using Vite, and you can view the portfolio in your browser at the address provided (usually `http://localhost:5173/`).

2.  **Build for production:**

    ```bash
    npm run build
    ```

    This command builds the project for production, creating optimized and minified files in the `dist` directory.

3.  **Preview the production build:**

    ```bash
    npm run preview
    ```

    This command starts a local server to preview the production build.

## Configuration

-   **EmailJS:** To configure the contact form, update the following values in `src/components/ContactSection.tsx` with your EmailJS credentials:

    ```javascript
    emailjs
      .sendForm(
        "service_vzbcp6n", // your EmailJS service ID
        "template_dfxky86", // your EmailJS template ID
        form.current,
        "9xPge-1NzCrOVqISG" // your EmailJS public key
      )
    ```

    Ensure you have set up an EmailJS account and created a service and template.

-   **Profile Picture:** Update the profile picture in `src/components/HeroSection.tsx` by replacing the import path with your own image:

    ```javascript
    import profilePic from '../pics/prof.png';
    ```

## File Structure

```
Portfolio-react/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── use-toast.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   ├── lib/
│   │   ├── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   ├── pics/
│   │   ├── aqi.jpg
│   │   ├── bchaain.jpg
│   │   ├── cropiee.jpg
│   │   ├── evergreen.png
│   │   ├── ghub.jpg
│   │   ├── mlimp.jpg
│   │   ├── movime.jpg
│   │   ├── nn.jpg
│   │   ├── prof.png
│   │   ├── Todo.jpg
│   │   ├── tweet.jpg
│   │   ├── url.jpg
│   ├── styles/
│   ├── tailwind.config.cjs
│   ├── vite-env.d.ts
```

## Contributing Guidelines

Contributions are welcome! Here’s how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the `main` branch of the original repository.

## License Information

This project does not have a specified license. All rights are reserved by the owner.

## Contact/Support Information

For questions or support, please contact me at:

-   **Email:** sayandas02001@gmail.com

You can also connect with me on:

-   **GitHub:** [https://github.com/Novadotgg](https://github.com/Novadotgg)
-   **LinkedIn:** [https://www.linkedin.com/in/sayan-das-631751217](https://www.linkedin.com/in/sayan-das-631751217)
-   **Instagram:** [https://www.instagram.com/d_sayan_10_2?igsh=ZjZ0OGdzbzZ2YjY=](https://www.instagram.com/d_sayan_10_2?igsh=ZjZ0OGdzbzZ2YjY=)
