ember-cli-formable
==============================================================================

This addon provides a component to easily integrate one or multiple [Formable](https://getformable.com/) forms into an Ember CLI application.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-formable
```

Usage
------------------------------------------------------------------------------

If you have only one Formable form to integrate in your application, just use the `formable-form` (required) component and specify the property `formKey` as follows::

```
// app/routes/index.hbs
{{formable-form formKey="14c50406-f195-451d-a93a-c206d3c13548"}}
```

If you want to integrate multiple forms, you have to specify a DOM element ID for each form, with the component option `formId` as follows:

```
// app/routes/index.hbs
{{formable-form formId="form-1" formKey="aaa-bbb-ccc"}}
{{formable-form formId="form-2" formKey="xxx-yyy-zzz"}}
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-formable`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [AGPL-3.0 License](LICENSE.md).
