## Toying around with Node v13.5 features 

This is very simple, I just wanted to test using the `--experimental-modules`
flag when running the project. 

## What is it testing? 

- [x] Currently it tests the async import in index.js.
- [x] Using `#` for private props within classes (this was available in v12 so not experimental but i've never used it)

## Setting up the project 

Clone the project and since there are no `node_modules` to
install, there's simply nothing more to do except making sure 
you are using at least node version `13.5.0`. 

## running the project

To run the project is simple,  i've added a script in package.json that uses the experimental flags.
just execute this in the project directory:

```bash
$ npm run start
``` 

Thats all folks. I'll be adding new things later when i have time
just to test them. 
