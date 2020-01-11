## Playing with ES9+ features in node v13.5.0

Before explaining what features we are attempting to experiment with, 
there are a few notable modifications to the node application that are
required to run it.

This is a simple plain node application with two subtle but 
notable additions.
 1. I am using the `--experimental-modules` flag when running the 
    project so i can use standard `export` and `export default` for exporting
    from a module. Allows us to use `import <file> from "<path>"` syntax with 
    js modules.
 2. I've modified package.json to include the line `"type": "module"`

> These modifications allow us to use the newer import/export syntax.
> Also be aware that using import in this context requires the file extension like so:

```javascript
// notice the .js at the end of the import statement
import CoffeeMachine from "./utils/private-class-members.js";
```

### What new features are attempting to use?

- [x] Asynchronously import another module that returns a promise
- [x] Using `#` for private props within classes
- [x] Uses `Promise.allSettled([...promises])` instead of `all()`
- [x] Uses `Promise.any([...promises])` instead of `race()`
- [x] Use nullish coalescence operator 
- [x] Use the **Elvis** operator

### Setting up the project 

Clone the project & then cd into the directory

```bash
$ git clone git@github.com:AndrewJHart/es10-features-in-node-13.git
$ cd es10-features-in-node-13
```

This project only has one dependency, `node-fetch` so install it 

```bash
npm install
```

 > note: make sure you are using at least node version `12.13.0`. 

## running the project

To run the project is simple, i've added a script in package.json that uses the experimental flags.
just execute this in the project directory:

```bash
$ npm run start
``` 

That's all folks. I'll be adding new things later when i have time
just to test them. 
