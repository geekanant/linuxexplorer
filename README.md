<img src="/src/assets/images/linuxcommand.png"
     alt="Linux Explorer"
     style="float: left; margin-right: 10px;" />


##Table of Contents

[Intro](https://github.com/geekanant/linuxexplorer/blob/master/README.md#intro)

[Tech Stack](https://github.com/geekanant/linuxexplorer/blob/master/README.md#tech-stack)

[Installation](https://github.com/geekanant/linuxexplorer/blob/master/README.md#installation)


### Intro
Recently, I came across [summitech's gitexplorer](https://github.com/summitech/gitexplorer). I found it pretty cool and decided to develop something similar for Linux.

Explore and Enjoy! 
### Tech Stack

- React


### Installation
```
yarn (Install all dependencies)

yarn start
```

### Contribute
Thank you for contributing to linuxexplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The two files you should be concerned with are the `primary-options.js`and `secondary-options.js` files. 

These two files are responsible for the options a user can pick. 

`primary-options.js` contains an array of objects responsible for the options of the first select box. 
`secondary-options.js` contains an object. This object houses an arrays of objects (a mouthful :smile:), this is responsible for the second set of options a user sees when they select a primary option. 

###### Steps to add a new command
0. Please ensure you are not on the main branch. Checkout to a new branch entirely.
1. Add an object to the array in the `primary-options.js` file. Sample Format:
```
 { value: 'show', label: 'show/view' }
```
2. Add an array to the `secondary-options` file. Sample Format:
```
show: [
    {
      value: 'file-permissions',
      label: 'the permissions given to a file',
      usage: 'chmod <permissions> <filename>'
      nb: 'additional info'
    }
  ```
  The `nb` is optional. It is responsible for what the user sees in the notes section. 
  
  `\n` is used to insert newline.
  
  ```
4. Once you are done, add, commit, push and create a PR to main.

