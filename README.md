## Namaste React

#### Requirements & VS Code Extensions
- Chrome Browser
- VS Code Editor
VS Code Extensions
- Better Comments
- Bracket Pair Colorization Toggler
- ES7 + Reat/Redux/React-Native Snippets
- Gitlens - Git Supercharger
- Prettier - Code Formatter
- VSCode-icons
- Live Server
- Auto Tag Rename

-> `What is Library & Framework - Differences between Library & Framework`

Libraries and Frameworks are both `Collection of pre-written code` that developers can use to speed up software development.

1. Libraries `enhance application functionality,` while Frameworks are `used to build & deploy quickly.`
2. Libraries offer specific functionality without imposing a particular architecture, while Frameworks control the application flow and structure.
3. Libraries `can be reused across different applications to perform the same task`, while frameworks are `not designed to be reused.`
4. Libraries are `generally more flexible and can be easily replaced/swapped out`, while frameworks `can be more rapid & may limit the developer's  ability to customize certain aspects of the application.`
5. Libraries are `usually smaller & more focused`, while frameworks are `usually large in size & may include many more files & classes.`
6. Libraries are `typically easier to integrate and depend on the use case`, while frameworks often `require a significant amount of code to be written by the developer to work with the framework.`


-> `React is a Library or Framwork ?`

React is a JavaScript library that is used to build reactive websites. It not a framework but does have dedicated framework called `Create React App (CRA)` that includes files structuring and other tools so that React can be used as a framework.
React focuses on creating reusable UI Components which can be managed, updated, and reused.


-> `What is Emmet ?`

Emmet is a set of free, open-source plugins for text editors that helps web developers and email developers quickly and efficiently code in HTML, XML, XSLT and other languages.


-> `What is CDN ?`

CDN stands for `Content Delivery Network`, which is a network of servers that deliver data to web users around the world. CDNs help speedup webpage loading time by reducing latency and the distance between users and content. They also help to protect websites from DDoS attacks and other security threats.


-> `What is crossorigin ?`

The crossorigin attribute in an HTML `<script>` tag specifies the mode of an HTTP CORS request when loading JavaScript files from a third-party server. CORS stands for `Cross Origin Resource Sharing`, which checks if it is safe to share resources from different domains.


- React - core version, ReactDOM - Web version of the React
- We injected 2 cdn links to have all the super powers of React
```js 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- Building a h1 tag using React
```js
const heading = React.createElement("h1", {}, "Namaste Everyone");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
```
- At the end of the day `React Element is an Object`.
- React will need to know where we want to put the all stuff, so it takes/creates a `Root`.

-> `Can we have multiple roots ?`

A React App built with just React usually have a single root DOM node, but if you want to integrate React into an existing app, you can have as many isolated root DOM nodes as you like.


```html
<h1 id = "title">Hello World</h1>
```

```js
React.createElement("h1", {id : "title"}, "Hello World");
```

- Before rendering the root, if we have some content inside the root element then the contents will be overrided with the rendering content.

#### async & defer in JavaScript
async & defer are boolean attributes of `<script>` tag to load the external scripts efficiently into our web page.
i. Normally using `<script>`
ii. using `async` attribute
iii. using `defer` attribute

- If we load a webpage then there will 2 major things happend in the webpage
    a. The HTML parsing
    b. Loading of the scripts
        i. Fetching the scripts from the Network
        ii. Actually executing the scripts line by line

1. Normally using `<script>`

<pre>
|--- HTML parsing ---                                                  --- HTML parsing ---|
                     |--- Script Fetching ---||--- Script Executing ---|
</pre>

- Usually HTML parsing starts, 
- at the time of script with src encounters it fetches the scripts from the Network, while HTML parsing is paused.
- and executes the scripts line by line, after completing script executing HTMl parsing resumes.

2. Using `async` attribute

<pre>
|---     HTML parsing   ---                          --- HTML parsing ---|
   |--- Script Fetching ---||--- Script Executing ---|
</pre>

- HTML parsing starts along with script fetching happens simultaniously,
- scripts executes, while HTML parsing paused.
- after completing script execution, HTML parsing resumes.

3. Using `defer` attribute

<pre>
|---               HTML parsing               ---|
            |--- Script Fetching ---|            |--- Script Executing ---|
</pre>

- HTML parsing start,
- script fetching happens simultaniously along with HTML parsing
- after completing HTML parsing, actual script executing starts.

That the `async` attribute does not guarentees the order of execution of the scripts but `defer` does.

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

## `parcel`

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


## Laying the Foundation
#### `Creating Scripting`
- To run parcel application we execute
```cmd
npx parcel index.html
```
- we can change the scripts in package.json like
```json
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- So that we now execute our parcel application using command
```cmd
npm run start 
```
or
```cmd
npm start
```
- Also we make production build using 
```cmd
npm run build
```
instead of 
```cmd
npx parcel build index.html
```

#### `Browserslist`
- Manage the track of which version of browser should is working in..
- `Babel` uses browserslist to make older version of code to be run in browsers by using a method as known as `polifilling`.
    - `Babel` - just a node package.
    - `Polifilling` - A code which is a replacement of newer version of code.
- In package.json
```json
"browerslist":{
    "Last 10 chrome versions" 
    }
    ```
    - Means not only work on last 10 chrome versions, but definitely work last old versions of chrome.
    #### `Tree shaking`
    - Removing unwanted / unused code``