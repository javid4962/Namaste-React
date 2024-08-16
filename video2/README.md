## Igniting our App

- for our App Production
  - Minifying the files
  - Server
  - Removing console.logs
  - Optimization
  - Bundling & a lot more...

#### Bundler

- It gives our webapp with a lot of super powers.
- Example Bundlers : WebPack, Parcel, Vite & etc.,
- In React we have Create React App framework which uses `Webpack` known as `babel`.

-> `What is Bundler ?`

A bundler is `a tool used in web development to process source files into static assets that browsers can use`. Bundlers are `used to organize dependencies and modules in front-end projects, reduce file sizes, and optimize website performance`. They can `also make development workflows easier`.

-> `What is parcel/webpack/vite & how they work?`

Parcel, Webpack, and Vite a`re all tools that help developers optimize the development process for web applications by transforming raw code into files that browsers can understand and display`. They are all considered bundlers, which is a crucial part of the development process. Here's some more information about each tool:

`Parcel`

- A good choice for developers who prefer simplicity and quick prototyping, Parcel is designed to be `hassle-free and doesn't require any configuration`. It automatically tracks all files, configuration, plugins, and dev dependencies involved in a build, and invalidates the cache when something changes.

`Webpack`

- A good choice for large-scale projects that require customization and fine-grained control, Webpack offers a modular approach and is well-suited for web applications with complex build requirements. It has a large and helpful community, and offers deep customization for bundling and resource management.

`Vite`

- A relatively new tool that's a good choice for modern web applications and projects where performance matters, Vite is designed to `provide a faster and leaner development experience`. It `uses the browser's native ES modules feature to handle imports, which optimizes the development process for speed and efficiency`. Vite doesn't require a configuration file, and has a philosophy that's lean and extensible. However, it has a relatively limited plugin ecosystem compared to Webpack or Parcel, and may not have as many features for production builds.

-> `Difference between different Bundlers ?`

When choosing a JavaScript bundler, you can consider things like the size of the bundles it creates, how easy it is to configure, and whether it's suitable for your project's needs:

<table>
<tr>
    <th style="border:1px solid white">Webpack</th>
    <th style="border:1px solid white">Rollup</th>
    <th style="border:1px solid white">Parcel</th>
    <th style="border:1px solid white">Vite</th>
</tr>
<tr>
    <td style="border:1px solid white">A popular bundler with many configuration options and a large user community. It can handle large, complex projects well, but it can be slow and difficult to configure. Webpack can generate larger bundles than other bundlers, but you can make them smaller with careful configuration.
    </td>
    <td style="border:1px solid white">Generates small bundles using optimizations like tree shaking, ES6 modules, and minification.
    </td>
    <td style="border:1px solid white">A bundler with a zero-configuration approach that's known for being simple and fast. It creates smaller bundles than Webpack but larger than Rollup. Parcel's bundling process involves three steps: building an asset tree, building a bundle tree, and packaging.
    </td>
    <td style="border:1px solid white">A newer bundler that focuses on simplicity and time-saving. It has a built-in development server that automatically reloads the application when you make code changes. Vite is a good choice for small to medium-sized projects, but it might not be suitable for larger applications with more complex build processes.
    </td>
</tr>
</table>

- When we want to use a package into our code we need a manager called as `package manager`, we use `NPM`
- NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.
- It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers", and a host of other random names that you can explore and probably contribute to over at npm-expansions.
- NPM consists of two main parts:
    - a CLI (command-line interface) tool for publishing and downloading packages, and
    - an online repository that hosts JavaScript packages
- React app does not only run of React there are lot of super powers are comes from different packages, which packages are present by using `npm`.
- for the production we have to minify files, bundle, optimize, remove console logs - for all these stuffs we need lot of helper packages and those helper packages com inside `npm`.
- Have to initialize the app using the command
```node
npm init -y
```
it creates `packages.json` file.
- Now we have to ignite our app using <a href="https://parceljs.org/" target="blank">parcel</a>
- To get parcel into our app we use
```node
npm install -D parcel
```
or
```node 
npm install --save -dev parcel
```
- In package management, dependencies are packages that are needed for an application to function in production, while devDependencies are tools and utilities that are only needed during development:

<table border="1">
<tr>
    <th>Dependencies</th>
    <th>devDependencies</th>
</tr>
<tr>
    <td>These packages are automatically installed when you run npm install in your project directory. For example, if your application uses the express package, you would list it as a dependency in your package.</td>
    <td>These packages are listed in the package.json file and are only used for development purposes. They are not required to run your application in production, but you might need them to test and run your project on the localhost. Examples of devDependencies include Babel and Webpack.</td>
</tr>
</table>

- We got `package-lock.json` - it tells what exact version do we used at development, it locks the packages & their version at the time we developed it.
- In package.json we have some code like
```json
"devDependencies":{
    "parcel":"^2.8.1"
}
```
- We got a folder `node_modules` - like a database for our npm 
    - It gives super powers to our application.
    - all the helper packages/ functions are included in this folder.
- We never have to put node_modules into our github repository.

`parcel`

- `Hot Module Replacement(HMR)` -> parcel will keep a track of all the files which we are updating.
- `File Watcher Algorithm` - written in C++ -> which keep tracking updates made in code/ file.
- `Bundling`
- `Minify`
- `Cleaning our Code`
- `Super Fast Build Algorithm`
- `Image Optimization`
- `Caching while development`
- `Dev and Production build`
- `Compression`
- `Compatible with older version of browser`
- `HTTPS on dev`
```node
npx parcel index.html --https
```
- `Port Number Managing`
- `Consistent Hashing Algorithm`
