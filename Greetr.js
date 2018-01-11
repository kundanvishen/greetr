// Created by Kundan Singh <kundanvishen@gmail.com>
(function (global, $) {

  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  }

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en'; // english language by default
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr; // Assign to be used outside

})(window, jQuery);