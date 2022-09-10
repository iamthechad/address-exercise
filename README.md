# Nuvalence Address Programming Exercise

## Set Up

This example was written using NodeJS v16.14.2 and NPM v8.5.0. Module installation may behave differently on NPM versions older than v7.

Install the required dependencies with `npm ci`. 

> This will ensure that the exact versions specified in `package-lock.json` get installed, since sometimes `npm install` will update the `package-lock.json` file and that can introduce inconsistencies between developers.

### Running the Application

Execute `npm start` to run the application. Once running, it be available at http://localhost:4200/

### Unit Tests

Run `npm test` to execute the unit tests. Unit tests are currently configured to open a new browser instance and run on changes until cancelled.

### Linting

Run `npm run lint` to execute lint.

## Summary

### Approach

For this example, I used Angular Material since it offers a relatively quick way to load and show data. I tried to split out concerns where possible to demonstrate how the example could be expanded to load other types of data with reusable infrastructure.

### Features

This example shows:

* Loading data from the randomuser.me endpoint and displaying it in a table format
* Opening a detail view as a slide-in when selecting an item from the table
* Basic pagination support
  * The randomuser.me API does not appear to support a maximum number of response, so I chose 100 as the total size of the data set.
* The detail view has some animation support
  * The background fades in to prevent interaction with the table while the detail view is open
  * I tried to also animate the detail view's slide-in and slide-out behavior, but it's not working correctly 
* Some basic unit tests

Class diagram is available in `class_diagram.puml` and `class_diagram.png`. PlantUML is required to view the `puml` diagram

### Improvements/Misses

Given more time, I'd like to address:

* Make all animations work
* Spruce up the overall look and feel of the app. It's pretty basic at the moment
* Possible look at presenting the detail view in a different manner. It works, but I'm not super happy with it
* Decouple the behavior of the loading spinner from the datasource. I don't like how those are tied together at the moment, and it would be better to be able to pass some kind of progress monitor into the service call and allow that to trigger the spinner.
* Fix the initial table view. It would be nice for the table to take up its expected space when no data has been loaded yet
* Possibly implement a backend and move the randomuser.me call there and allow the frontend to call a more generic endpoint
