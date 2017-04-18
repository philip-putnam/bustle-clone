# Bustle Clone

By: Philip Putnam & Charles Peden, 2017

Attempt to clone the popular website "bustle" utilizing the ember-cli

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/philip-putnam/message-board` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Node package manager (NPM)
  * Bower package manager
  * ember
  * ember-cli
  * ember-cli-jshint (debug)
  * ember-cli-uglify (concats projects files into one page)
  * emberfire (connects to firebase database (model))

2. Specs
  * Spec 1: user types root route url, 'localhost:4200', list of current user questions.
  * Spec 2: user fills out form clicks 'add question', form submit, question added to main page question list view
  * Spec 3: user clicks on question, 'click', routed to dynamic route of question clicked views answers (if any) for specific question.
  * Spec 5: At dynamic route location user can add answer to question, form submit, adds answer to answer list on dynamic question route and is now viewable
  * Spec 6: user edit question on dynamic question route, click 'edit' form submit, show edit form then view updated information after form submittal
  * Spec 7: user delete question on dynamic question route, click 'delete', question and child-linked answers deleted
  * Spec 8: user delete answers on dynamic question route, click 'delete', answers deleted (but not linked question)

3. Integration
  * index route with index.hbs template and index.js route handler rendering questions (data down) from firebase database (model), passing create question action (up) to model from new-question component
  * application.hbs template providing header navbar with site links
  * new-question component with new-question.hbs providing form html and new-question.js providing action for creating new user question, gathering data from form and passing the action up to index.js
  * question.hbs template and question.js {path: /question/:question_id } dynamic route rendering specific question with answers from firebase database (model).
  * question.js handling data from model to display question and pass data down to answer.hbs/js component for display.
  * question.js to pass delete/create new answer and delete/edit question actions up to model and data back down to new-answer, delete-answer, and edit-question components respectively to display changes.

4. UX/UI
  * bootstrap.

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### License

This project is licensed through MIT, &copy; Philip Putnam & Charles Peden, 2017
