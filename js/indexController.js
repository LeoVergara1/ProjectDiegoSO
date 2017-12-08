'use strict';

var IndexController = (function(){
     var selectors = {
         datepicker:'#datepicker',
         datepicker1:'#datepicker1'
    },
    bindEvents = function bindEvents(){
      console.log("Satrt bindEvents");
      $('.modal').modal();
      $('.parallax').parallax();
    };

    var start = function(){
    console.log("Start controller js");
    bindEvents();

    };
    return{
         start:start
    }

}());
jQuery(function($){
  IndexController.start();
});