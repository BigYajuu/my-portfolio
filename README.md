## Prerequisites

### Node.js and Chocolatey
Install Node.js and Chocolatey

### TypeScript
Install TypeScript compiler using `npm install typescript --save-dev`.

### TypeScript Save-To-Compile
The automated script `"tsc_autosave"` in package.json allows save detections and automatically compiles changed .ts into .js files.

To compile manually - Upon finishing making changes to any .ts files, run `npx tsc` to compile them into .js files.

Make sure these files are linked with the `<script>` tag in all relevant html pages.

### Sass
Install Sass as a functional augmentation to classic CSS.

### Sass Configuration and Save-to-compile Setup
Sass is a powerful extension tool to the original CSS syntax. The Sass files must be compiled and generated first into CSS format for the effect to take place properly. 

The automated script `"sass"` in package.json helps to detect any saved changes occured to the Sass file. Any name changes to the .scss file will require refactoring in the script.

You must run this tool first for any saved changes to be compiled in the .scss file. Run `npm run sass`.

### Live Server
Run `live-server` to simulate server-side environment, allowing clearances in CORS authentication whilst debugging the website. Once the server is live, open and test the webpage using the localhost URL. (Default port: 8080)