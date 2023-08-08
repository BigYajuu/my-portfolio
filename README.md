## Prerequisites


### Node.js and Chocolatey
Install Node.js and Chocolatey

### Angular
Run `npm install -g @angular/cli`.

### Sass
Install Sass as a functional augmentation to classic CSS.

### Sass Configuration and Save-to-compile Setup
Sass is a powerful extension tool to the original CSS syntax. The Sass files must be compiled and generated first into CSS format for the effect to take place properly. 

The automated script `"sass"` in package.json helps to detect any saved changes occured to the Sass file. Any name changes to the .scss file will require refactoring in the script.

You must run this tool first for any saved changes to be compiled in the .scss file. Run `npm run sass`.
