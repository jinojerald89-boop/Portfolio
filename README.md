# Jino Jerald portfolio

Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build

## Structure

    app/          layout, page and global styles (colour tokens, dark mode)
    components/   Hero, About, Projects, ProjectCard, Experience, Skills, Education, Contact, plus Section, Button, Tag
    data/profile.ts   all content; edit here only

## Edit

- Add your GitHub URL to `profile.github` in `data/profile.ts`; the GitHub buttons appear automatically.
- Add or change projects in the `projects` array. Each needs problem, solution, contribution, outcome and tech.
- Deploy to Vercel by importing the repository; no configuration is needed.
