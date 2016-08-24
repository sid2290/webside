'use strict';

describe('E2E Testing', function() {
    
   it('should automatically redirect to / when location hash/fragment is empty', function() {

    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("");
    expect(browser.getTitle()).toEqual('Ristorante Con Fusion');
  });

    describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).
        toEqual('Ristorante Con Fusion');
    });
  });
    
});