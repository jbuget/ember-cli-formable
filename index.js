'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type) {
    if (type === 'head') {
      return '<script async type="text/javascript" src="https://app.getformable.com/static/embed.js"></script>';
    }
  }

};
