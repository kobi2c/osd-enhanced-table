# osd-enhanced-table


# Development

You can run the osd-enhanced-table plugin in development mode that supports hot code reload. 

Follow those steps:

### Clone OpenSearch-Dashboards
```bash
git clone https://github.com/opensearch-project/OpenSearch-Dashboards osd-enhanced-table-dev
cd osd-enhanced-table-dev
git checkout 1.0.0
```
### Install Node.js and yarn
install the version of Node.js listed in the .node-version file.
```bash
volta install node@$(<.node-version)
npm install -g yarn
```
### Clone osd-enhanced-table
```bash
cd plugins
git clone https://github.com/kobi2c/osd-enhanced-table osd-enhanced-table
```
### Build with Hot Reload 
```bash
cd osd-enhanced-table-dev
yarn osd bootstrap
cd plugins/osd-enhanced-table
yarn install
yarn start
```
Now, you can open in your browser,
 - In your browser, call the generated URL in the console. It is something like: http://localhost:5601/abc
 - Now, each time you change the code, the plugin will be reloaded with the changes.
 - Happy coding :-)
### Build a distributable archive
```bash
yarn build
```
A prompt will ask you what is Opensearch-Dashboards version.  
Give the version (example: 1.2.0), and type ENTER.  
Then, the result archive is generated into `build` directory.  