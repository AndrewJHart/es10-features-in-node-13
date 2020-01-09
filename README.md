## Toying around with Node v13.5 features 

This is very simple, the only notable thing is that I am using the `--experimental-modules`
flag when running the project so i can use standard `import from "..."` syntax with js modules.

## What is it testing? 

- [x] Currently it tests the async import in index.js.
- [x] Using `#` for private props within classes (this was available in v12 so not experimental but i've never used it)
- [x] Uses `Promise.allSettled([...promises])`

## Setting up the project 

Clone the project then cd into the directory

```bash
$ cd es10-features-in-node-13
```

This project only has one dependency, `node-fetch` so install it 

```bash
npm i
```

 > note: make sure you are using at least node version `12.13.0`. 

## running the project

To run the project is simple,  i've added a script in package.json that uses the experimental flags.
just execute this in the project directory:

```bash
$ npm run start
``` 

Thats all folks. I'll be adding new things later when i have time
just to test them. 
