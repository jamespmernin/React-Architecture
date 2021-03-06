![](https://git.generalassemb.ly/bruno/assets/blob/master/products-react.gif)

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

## Getting Started

1. Fork
2. Clone

## Learning Objectives

By the end of this, developers should be able to:

- Learn about a new component hierarchy that is more scalable
- Learn how to abstract axios api requests to a services file
- Implement react's `props.children` in a shared layout

# Component Architecture

There are many different ways to organize our folder structure for our react app. As our app grows it is important to organize our react app in a meaningful way that will allow the app to scale. So far we've spent one week working on a react app (project 2) and your codebase grew. What would happen if you worked on the same app for six months? or three years? How large would the codebase be? Now what would happened if you worked on the same codebase for years with many other developers!? That codebase would get quite large pretty fast. We need a way to organize our app to accommodate this ecosystem. This is where, as a team, you agree on a set of conventions that you will follow to architect your react app. In this lesson we will cover some of the popular conventions that we have seen out there in the software community.

Let's get started!

Notice the folder structure (more details can be found at the bottom of this README):

<img src="https://i.ibb.co/jTstLRz/Screen-Shot-2020-06-19-at-3-34-27-PM.png">

Let's start with the `screens` folder:

<img src="https://i.ibb.co/RgS5XfG/Screen-Shot-2020-06-19-at-3-40-19-PM.png">

The react components inside this folder represent all of the "screens" in our app. We could say we have two screens in our app: the screen that shows all the products (Products.jsx) and the screen that shows a specific product (ProductDetail.jsx)
> Remember: Our react app is a Single Page Application (SPA) that means it's all on one page... that is why we use the word "screens" and not "pages"

##

### Products Screen

<img src="https://i.ibb.co/R9p01ML/Screen-Shot-2020-06-19-at-3-45-04-PM.png">

##

### Product Detail Screen

<img src="https://i.ibb.co/MBMjRmt/Screen-Shot-2020-06-19-at-3-45-31-PM.png">

##

Ok cool. Now let's look to see what's inside our `components` folder:

<img src="https://i.ibb.co/M9GPBXM/Screen-Shot-2020-06-19-at-3-37-53-PM.png">

Here we have react components that are **used to help build our screens**. Notice we have `Product`, `Search`, and `Sort` which are used in the `Products` component.

We also have a folder in our components folder called `shared`:

<img src="https://i.ibb.co/0X8RhK3/Screen-Shot-2020-06-19-at-3-58-35-PM.png">

This `shared` folder consists of reusable react components that are used in more than one component. Notice that the `Layout` component is used in both the `Products` component **and** the `ProductDetail` component. The `Layout` component holds both the `Nav` component and the `Footer` component.

## File Structure
```
. // Our current directory, represented by the '.' symbol.
├── README.md
├── package-lock.json
├── package.json
├── products-react.gif
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx // This is the brain of our application, where our screens will be rendered (inside of a <Route />), and data will be stored to pass down to all necessary screens below.
    ├── App.test.js
    ├── components // This folder is for non-top level components, i.e. things rendered within one of the screens.
    │   ├── Product // For each component, we have an individual folder with a unique .jsx and .css file per component.
    │   │   ├── Product.css
    │   │   └── Product.jsx
    │   ├── Search
    │   │   ├── Search.css
    │   │   └── Search.jsx
    │   ├── Sort
    │   │   ├── Sort.css
    │   │   └── Sort.jsx
    │   └── shared // This folder is for components that will appear across all screens.
    │       ├── Footer
    │       │   ├── Footer.css
    │       │   └── Footer.jsx
    │       ├── Layout
    │       │   ├── Layout.css
    │       │   └── Layout.jsx
    │       └── Nav
    │           ├── Nav.css
    │           └── Nav.jsx
    ├── index.css
    ├── index.js
    ├── screens // This folder is for top-level components, i.e. components rendered in a <Route /> in App.js.
    │   ├── ProductDetail
    │   │   ├── ProductDetail.css
    │   │   └── ProductDetail.jsx
    │   └── Products
    │       ├── Products.css
    │       └── Products.jsx
    ├── serviceWorker.js
    ├── services // This folder is for API calls.
    │   └── products.js
    ├── setupTests.js
    └── utils // This folder is for helper functions, such as sorts.
        └── sort.js

15 directories, 35 files
```
