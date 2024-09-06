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