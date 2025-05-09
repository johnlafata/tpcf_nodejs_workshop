## TPCF React Workshop

This repository contains a React applications created to exercise deployments on Tanzu Platform for Cloud Foundry (TPCF). The applications are designed to be simple and straightforward, building on complexity little by little. 

## my-app Application Overview

The application in the `my-app` folder is a React-based web application. It serves as a demonstration or practice project for learning React fundamentals and related technologies.

## next-tailwind-greeting-app

The `next-tailwind-greeting-app` folder contains a Next.js application that uses Tailwind CSS for styling. This application is designed to showcase the integration of Next.js with Tailwind CSS, providing a modern and responsive user interface.

### Features
- React components structure
- State management
- Interactive UI elements
- Modern JavaScript practices

### Getting Started locally

To run the either application locally:

1. Navigate to the appropriate application directory:
    ```bash
    cd my-app
    ```

    or 
    ```bash
    cd next-tailwind-greeting-app
    ```

2. if the node_modules folder is not saved in the source code repository or needs to be refeshed mange Install dependencies:
    ```bash
    npm install
    ```

3. Run the my-app application:
* Start the localhost server:
    ```bash
    npm start
    ```
    or 
* Start the my-app on tanzu platform cloud foundry
    ```bash
    cf push
    ```

The next-tailwind-greeting-app application is a Next.js application, 
so you can run it 
* locally with:
    ```bash
    yarn build
    yarn start
    ```
* on Tanzu Platform Cloud Foundry:
    ```bash
    yarn build
    cf push
    ```

4. testing the apps 
* locally:
 open [http://localhost:3000](http://localhost:3000) in the browser to view the application.
* on tanzu platform cloud foundry:
 open the URL provided by the `cf push` command in your browser.


## Additional Resources for my-app

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started)


