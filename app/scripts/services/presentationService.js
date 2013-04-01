'use strict';

angular.module('PresentarApp')
  .factory('presentationService', function () {
    var slide1 = { "id": 1, "title": "First slide", "content": "Contenu !", "next": 2, "previous": undefined};
    var slide2 = { "id": 2, "title": "Second slide", "content": "Contenu  numero deux", "next": 3, "previous": 1};
    var slide3 = { "id": 3, "title": "Third slide", "content": "et de trois !", "next": 4, "previous": 2};
    var slide4 = { "id": 4, "title": "Fourth slide", "content": "Enfin le quatre !", "next": undefined, "previous": 3};
    var presentation = { id: 1, "title": "Devoxx France 2013 Review", "slides": [ slide1, slide2, slide3, slide4 ] };
    var presentation1 = { id: 2, "title": "Sample presentation", "slides": [ slide1, slide2, slide3, slide4 ] };
    var presentations = [ presentation, presentation1 ];

    // Public API here
    return {
      getPresentations: function() {

        return presentations;
      },
      getPresentation: function(presentationId) {
        for (var i in presentations) {
          if (presentations[i].id == presentationId) {
            return presentations[i];
          }
        };
      },
      getSlide: function(presentationId, slideId) {
        for (var i in presentations) {
          var presentationInArray = presentations[i]
          if (presentationInArray.id == presentationId) {
            for (var i in presentationInArray.slides) {
              if (presentationInArray.slides[i].id == slideId) {
                return presentationInArray.slides[i];
              }
            }
          }
        }
      },

    };
  });
