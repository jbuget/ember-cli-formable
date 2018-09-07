import Component from '@ember/component';
import layout from '../templates/components/formable-form';

export default Component.extend({
  layout,

  // Element
  classNames: ['formable-form'],

  // Properties
  formId: 'formable-root',
  formKey: null,

  didInsertElement() {
    this._super(...arguments);
    if (!window.formableForms) {
      window.formableForms = [];
    }
    window.formableForms.push({
      key: this.get('formKey'),
      mountOn: `#${this.get('formId')}`
    });
  }
});
