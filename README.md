# CU calculation application web interface
This is the front end for utilized capacity calculation. The code of the backend can be found in [this repository](https://dev.azure.com/CitecDigital/Calcul%20capacit%C3%A9/_git/Capacity_Calculation).

## Project setup
### Environment preparation
Before running the code, make sure the necessary build tools are installed. Go to [this website](https://nodejs.org/en) to install node.js. To verify the node.js is successfully configured, run the following command in terminal:
```
node -v
```
You should see the version information if node.js is installed correctly. Then run the following command:

```
npm install
npm install axios
```
Vue CLI and axios will be installed. Axios is a promise-based HTTP Client for node.js and the browser.

### Compiles and hot-reloads for development
To launch the application, navigate into the folder and run:
```
npm run serve
```
You should see more information about the app in the terminal.

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
