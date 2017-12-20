const {expect} = require('chai');
const {recase} = require('../src/util');

describe('Recasing', () => {
  context('Camel case', () => {
    it('should work from lowerCamelCase', () => {
      expect(recase('lowerCamelCase', 'camel-case'))
        .to.equal('LowerCamelCase');
    });

    it('should work from snake-case', () => {
      expect(recase('snake_case', 'camel-case'))
        .to.equal('SnakeCase');
    });

    it('should handle consecutive capitals', () => {
      expect(recase('APITest', 'camel-case'))
        .to.equal('APITest');
    });

    it('should pass through', () => {
      expect(recase('CamelCase', 'camel-case'))
        .to.equal('CamelCase');
    });
  });

  context('Lower camel case', () => {
    it('should work from CamelCase', () => {
      expect(recase('CamelCase', 'lower-camel-case'))
        .to.equal('camelCase');
    });

    it('should work from snake-case', () => {
      expect(recase('snake_case', 'lower-camel-case'))
        .to.equal('snakeCase');
    });

    it('should handle consecutive capitals', () => {
      expect(recase('APITest', 'lower-camel-case'))
        .to.equal('apiTest');
    });

    it('should pass through', () => {
      expect(recase('lowerCamelCase', 'lower-camel-case'))
        .to.equal('lowerCamelCase');
    });
  });

  context('Spring Data REST', () => {
    it('should work from CamelCase', () => {
      expect(recase('CamelCase', 'spring-data-rest'))
        .to.equal('camelCase');
    });

    it('should work from snake-case', () => {
      expect(recase('snake_case', 'spring-data-rest'))
        .to.equal('snakeCase');
    });

    it('should handle consecutive capitals', () => {
      expect(recase('APITest', 'spring-data-rest'))
        .to.equal('apiTest');
    });

    it('should pass through', () => {
      expect(recase('lowerCamelCase', 'spring-data-rest'))
        .to.equal('lowerCamelCase');
    });

    it('should accept links', () => {
      expect(recase('_links', 'spring-data-rest'))
        .to.equal('_links');
    });

    it('should accept embedded resources', () => {
      expect(recase('_embedded', 'spring-data-rest'))
        .to.equal('_embedded');
    });
  });

  context('Snake case', () => {
    it('should work from CamelCase', () => {
      expect(recase('CamelCase', 'snake-case'))
        .to.equal('camel_case');
    });

    it('should work from lowerCamelCase', () => {
      expect(recase('lowerCamelCase', 'snake-case'))
        .to.equal('lower_camel_case');
    });

    it('should work from dash-case', () => {
      expect(recase('dash-case', 'snake-case'))
        .to.equal('dash_case');
    });

    it('should handle consecutive capitals', () => {
      expect(recase('APITest', 'snake-case'))
        .to.equal('api_test');
    });

    it('should pass through', () => {
      expect(recase('snake_case', 'snake-case'))
        .to.equal('snake_case');
    });
  });

  context('Dash case', () => {
    it('should work from CamelCase', () => {
      expect(recase('CamelCase', 'dash-case'))
        .to.equal('camel-case');
    });

    it('should work from lowerCamelCase', () => {
      expect(recase('lowerCamelCase', 'dash-case'))
        .to.equal('lower-camel-case');
    });

    it('should work from snake-case', () => {
      expect(recase('snake_case', 'dash-case'))
        .to.equal('snake-case');
    });

    it('should handle consecutive capitals', () => {
      expect(recase('APITest', 'dash-case'))
        .to.equal('api-test');
    });

    it('should pass through', () => {
      expect(recase('dash-case', 'dash-case'))
        .to.equal('dash-case');
    });
  });
});
