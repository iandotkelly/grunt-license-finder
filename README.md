# grunt-license-finder

> Finds licenses in a node project and its dependencies

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-license-finder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-license-finder');
```

## The "license_finder" task

### Overview
In your project's Gruntfile, add a section named `license_finder` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  license_finder: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.directory
Type: `String`
Default value: `current project directory`

A string value for the path of the node project to scan

#### options.production
Type: `Boolean`
Default value: false

A boolean value. If true, only production dependencies are included in the scan

#### options.out
Type: `String`
Default value: `./licenses.txt`

A string value for the filename of the output of the scan.

#### options.csv
Type: `Boolean`
Default value: `./licenses.txt`

A boolean value.  If true the output is in a comma-separated-variable format for import into a spreadsheet.

### Usage Examples


#### Custom Options
Example

```js
grunt.initConfig({
  license_finder: {
    options: {
      production: true,
      directory: '/Home/me/some-project',
      out: '/Home/me/some-project/licenses.txt',
      csv: true
    },
  },
});
```

