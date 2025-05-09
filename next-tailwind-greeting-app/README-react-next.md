# Next.js and Tailwind CSS Greeting App

This project is a simple React application built with Next.js and styled using Tailwind CSS. It allows users to enter their name and generates a personalized greeting when a button is clicked.

## run on cloudfoundry
```
cd next-tailwind-greeting-app
```

Review engine specifications in package.json
```json
  "engines": {
    "node": "22.x.x"
  }
```

build and deploy the application to Cloud Foundry:
```bash
npm install
cf push 
```

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

## License

This project is licensed under the MIT License.