define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone');

    //Based on Antropometric Proportion 
	var Model = Backbone.Model.extend({
        defaults: {
            altura: 2.01,
            alturaPerna: 1.10, //55%
            tamanhoBraco: 0.20,
            pescoco:0.40,
            torax:0.87,
            cintura:0.90,
            coxa:0.59,
            quadril:0.97
        },

        getJson: function(){

            var self = this;

            $.ajax({
                url: 'js/txtJson.json',
                dataType: "json",
                complete: function (data) {

                    var dados = data.responseJSON.config;

                    self.set({
                        altura:parseFloat(dados.altura),
                        alturaPerna:parseFloat(dados.perna),
                        tamanhoBraco:parseFloat(dados.braco),
                        pescoco:parseFloat(dados.pescoco), 
                        torax:parseFloat(dados.torax), 
                        cintura:parseFloat(dados.cintura), 
                        coxa: parseFloat(dados.coxa), 
                        quadril:parseFloat(dados.quadril)
                    });

                }
            });

        },


        initialize: function(){
        	var self = this;

            self.getJson();

 			this.bind("change:altura", function(){
                console.log('changed model '+self.get('altura'));
				$( document ).trigger("toDrawing");


            });

            console.log('initialize model');
        }
    });

    return Model;

});