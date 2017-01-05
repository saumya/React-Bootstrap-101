React-Bootstrap-101
======================
My first experiment with React-Redux-Thunk-Bootstrap

[Followed this][13] for routing.

### initial setup
Started from [this project][8] and added
 - [react-router][10]
 - [redux-router][9] ( New API )
 - [react-router-redux][11] ( Official API )

We will be using the official one [react-router-redux][11] here. Refering to [react-router-redux-example][12]

[REST calls / API calls][2] in study using [Thunk middleware][3] for React

### References
1. Start using React Redux [without ES6 or Webpack.][5]
2. Official [Example codes][4]
3. Example of [An app to enjoy a music channel with your favorite videos][6]
4. [React Rocks][7] examples
5. [Programatic Routing][13] example

Setup
```
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react
npm install --save-dev css-loader
npm install --save-dev style-loader
npm install --save-dev webpack

npm install --save react
npm install --save react-dom
npm install --save redux

npm install --save react-redux
npm install --save redux-thunk

npm install --save react-router
npm install --save react-router-redux

npm install --save react-bootstrap
```

Then run
```
npm run 2js
npm run pack
```

Update the packages
==================

```
npm outdated
npm update
```


[1]: http://redux.js.org/docs/basics/ExampleTodoList.html
[2]: http://redux.js.org/docs/advanced/AsyncActions.html
[3]: https://github.com/gaearon/redux-thunk
[4]: github.com/reactjs/redux/blob/master/examples
[5]: https://medium.com/@firasd/quick-start-tutorial-using-redux-in-react-apps-89b142d6c5c1
[6]: https://github.com/fusenlabs/20v
[7]: https://react.rocks
[8]: https://github.com/saumya/react-redux-thunk-101
[9]: https://github.com/acdlite/redux-router#differences-with-react-router-redux
[10]: https://www.npmjs.com/package/react-router
[11]: https://github.com/reactjs/react-router-redux
[12]: https://github.com/StevenIseki/react-router-redux-example
[13]: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating#navigating-programatically
