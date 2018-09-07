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
    const formId= `#${this.get('formId')}`;
    const formKey= this.get('formKey');
    const scriptTag = '' +
      '  if (!window.formableForms) { window.formableForms = []; }\n' +
      '  window.formableForms.push({ key: "' + formKey + '", mountOn: "' + formId + '" });';

    const script = document.createElement('script');
    script.type  = 'text/javascript';
    script.text  = scriptTag;
    document.body.appendChild(script);
  }
});
