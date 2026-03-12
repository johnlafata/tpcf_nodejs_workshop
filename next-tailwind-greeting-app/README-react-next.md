# Next.js and Tailwind CSS Greeting App

This project is a simple React application built with Next.js and styled using Tailwind CSS. It allows users to enter their name and generates a personalized greeting when a button is clicked.

## Deploy to Cloud Foundry

### Prerequisites
- [CF CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) installed and logged in
- Node.js 22.x installed locally (use [nvm](https://github.com/nvm-sh/nvm))
- npm 11.x

### Set up Node.js locally

```bash
nvm install 22
nvm use 22
```

Verify engine requirements match [package.json](package.json):
```json
"engines": {
  "node": "22.x",
  "npm": "11.x"
}
```

> **Note:** This app uses **npm only**. Do not use yarn — the CF Node.js buildpack does not support Yarn Berry (v2+).

### Deployment steps

The CF buildpack does not run `next build` during staging, so you must build locally and push the compiled output:

```bash
# 1. Navigate to the app directory
cd next-tailwind-greeting-app

# 2. Install dependencies
npm install

# 3. Build the Next.js production bundle (required before push)
npm run build

# 4. Push to Cloud Foundry
cf push
```

### How it works on CF

| Concern | Detail |
|---------|--------|
| Buildpack | `nodejs_buildpack` — installs `node_modules` on the droplet |
| Build artifact | `.next/` folder is pre-built locally and uploaded with `cf push` |
| Start command | `npx next start -p $PORT` — binds to CF's injected `$PORT` |
| Ignored files | `yarn.lock`, `.yarn/`, `node_modules/`, and `.env.*` are excluded via `.cfignore` |
| Memory | 1G (configured in `manifest.yml`) |

## Project Structure

```
next-tailwind-greeting-app
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── GreetingButton.tsx
│   │   └── UserNameInput.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── api
│   │       └── greeting.ts
│   └── styles
│       ├── globals.css
│       └── tailwind.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```


## run it Locally

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd next-tailwind-greeting-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Features

- User can input their name.
- A button to generate a personalized greeting.
- Responsive design using Tailwind CSS.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript

## Dependencies

### Runtime Dependencies

| Package | Version |
|---------|---------|
| `next` | latest |
| `react` | latest |
| `react-dom` | latest |
| `tailwindcss` | ^4.1.5 |
| `@tailwindcss/postcss` | ^4.1.5 |
| `autoprefixer` | ^10.4.21 |
| `postcss` | ^8.5.3 |

### Dev Dependencies

| Package | Version |
|---------|---------|
| `typescript` | latest |
| `@types/node` | latest |
| `@types/react` | latest |

### Engine Requirements

| Engine | Version |
|--------|---------|
| `node` | 22.x |
| `npm` | 11.x |

## License

This project is licensed under the MIT License.