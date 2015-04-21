define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone'),
    Model    = require('model');

    var model = new Model();

    var AppManequim = Backbone.View.extend({

    	drawingCanvas: function(altura,alturaPerna,tamanhoBraco,tamanhoPescoco,caixaToraxica,tamanhoCintura,tamanhoCoxa,quadril){
			console.log('drawingCanvas');
			console.log(tamanhoBraco);

	    	var canvas = new fabric.Canvas('manequim-canvas');

			$.get('svg/manequim.svg', function(svg){

		        fabric.loadSVGFromString(String(svg),function(objects) {

		        	var options = {
		        		escalaBasica:1,
		        		escalaCorpo:altura,
		        		escalaBraco:1,
		        		escalaTorax:1,
		        		escalaPescoco:1,
		        		escalaPerna:1,
		        		escalaCoxa:1,
		        		escalaCintura:1

		        	};

		        	/*add objects to canvas, body parts*/

		        	var cabeca = objects[0].scale(options.escalaBasica);
		        	cabeca.set({  angle: 0});  
					//canvas.add(cabeca);

				
					var pescoco = objects[1].scale(options.escalaBasica);
		       
					//canvas.add(pescoco);

					var torso = objects[2].scale(options.escalaBasica);
		        	torso.set({  angle: 0});  
					//canvas.add(torso);

					var ombroEsquerdo = objects[3].scale(options.escalaBasica);
		        	ombroEsquerdo.set({  angle: 0});  
					//canvas.add(ombroEsquerdo);

					var ombroDireito = objects[4].scale(options.escalaBasica);
		        	ombroDireito.set({  angle: 0});  
					//canvas.add(ombroDireito);

					var bracoEsquerdo = objects[5].scale(options.escalaBasica);
		        	bracoEsquerdo.set({  angle: 0});  
					//canvas.add(bracoEsquerdo);

					var bracoDireito = objects[6].scale(options.escalaBasica);
		        	bracoDireito.set({  angle: 0});  
					//canvas.add(bracoDireito);

					var maoEsquerda = objects[7].scale(options.escalaBasica);
		        	maoEsquerda.set({  angle: 0});  
					//canvas.add(maoEsquerda);

					var maoDireita = objects[8].scale(options.escalaBasica);
		        	maoDireita.set({  angle: 0});  
					//canvas.add(maoDireita);

					var coxaEsquerda = objects[9].scale(options.escalaBasica);
		        	coxaEsquerda.set({  angle: 0});  
					//canvas.add(coxaEsquerda);

					var coxaDireita = objects[11].scale(options.escalaBasica);
		        	coxaDireita.set({  angle: 0});  
					//canvas.add(coxaDireita);

					var panturilhaEsquerda = objects[12].scale(options.escalaBasica);
		        	panturilhaEsquerda.set({  angle: 0 , scaleY:1.1});  
					//canvas.add(panturilhaEsquerda);

					var panturilhaDireita = objects[13].scale(options.escalaBasica);
		        	panturilhaDireita.set({  angle: 0});  
					//canvas.add(panturilhaDireita);

					var peEsquerdo = objects[14].scale(options.escalaBasica);
		        	peEsquerdo.set({  angle: 0});  
					//canvas.add(peEsquerdo);

					var peDireito = objects[15].scale(options.escalaBasica);
		        	peDireito.set({  angle: 0});  
					//canvas.add(peDireito);

					var cintura = objects[16].scale(options.escalaBasica);
		        	cintura.set({  angle: 0});  


		        	options.escalaCintura = ((tamanhoCintura-0.90)/1.3)+1;
					cintura = new fabric.Group([cintura],{
						scaleY: options.escalaCintura,
						scaleX: options.escalaCintura,
						originX:'center'
					});


					options.escalaPescoco = ((tamanhoPescoco-0.45)/4.5)+1;
					pescoco = new fabric.Group([pescoco],{
						scaleY: options.escalaPescoco,
						scaleX: options.escalaPescoco,
						originX:'center'
					});



					options.escalaCoxa = ((tamanhoCoxa-0.65)/6)+1;
					var coxa = new fabric.Group([coxaEsquerda,coxaDireita],{
						scaleX: options.escalaCoxa,
						scaleY: options.escalaCoxa,
						originX:'center'
					});

					options.escalaPerna = ((alturaPerna-1.1)/2)+1;
					var pernas = new fabric.Group([panturilhaEsquerda,panturilhaDireita,peEsquerdo,peDireito],{
						scaleY: options.escalaPerna,
						originX:'center'
					});
		
					options.escalaBraco = ((tamanhoBraco-0.2)/2)+1;
					var bracos = new fabric.Group([bracoEsquerdo,bracoDireito,ombroEsquerdo,ombroDireito],{
						scaleY: options.escalaBraco,
						scaleX: options.escalaBraco,
						originX:'center'
					});

					options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var torax = new fabric.Group([torso],{
						scaleY: options.escalaTorax,
						scaleX: options.escalaTorax,
						originX:'center'
					});

					
					var corpo = new fabric.Group([cabeca,pescoco,torax,bracos,cintura,maoEsquerda,maoDireita,pernas,coxa],{
						originY:'bottom',
						scaleY: options.escalaCorpo,
						scaleX: options.escalaCorpo,
						top:$('#manequim-canvas').height() //need to verify this
					});

					canvas.add(corpo);
					corpo.centerH();
					corpo.lockRotation = true;
					corpo.lockMovementX = true;
					corpo.lockMovementY = true; 
					corpo.hasControls = false;
					corpo.hasBorders = false;
			

					/*render all*/
		        	canvas.renderAll();

	        	});	


	    		
			}, 'text');



    	},

    	simulator: function(){

    		var self = this;

    		$('.controls input').each(function(){
    			var elVal = $(this).val();

    			$(this).on({
					focus: function() {
						if (this.value === elVal) this.value = '';

					},
					blur: function() {
						if (this.value ==='') this.value = elVal;
					}}
				);

    		});

    		$('button').off().on('click',function(){

    			console.log('button event');

    			var altura = $('.controls .altura').val();
    			var alturaPerna = $('.controls .alturaPerna').val();
    			var tamanhoBraco = $('.controls .tamanhoBraco').val();
    			var pescoco = $('.controls .pescoco').val();
    			var torax = $('.controls .torax').val();
    			var cintura = $('.controls .cintura').val();
    			var coxa = $('.controls .coxa').val();
    			var quadril = $('.controls .cintura').val();

				
    			model.set({altura:altura, alturaPerna:alturaPerna, tamanhoBraco:tamanhoBraco, pescoco:pescoco, torax:torax, cintura:cintura, coxa:coxa, quadril:quadril });

    			console.log('get altura'+model.get('coxa'));
    			self.drawingCanvas(model.get('altura'),model.get('alturaPerna'),model.get('tamanhoBraco'),model.get('pescoco'),model.get('torax'),model.get('cintura'),model.get('coxa'),model.get('quadril'));
    		

    		});

    	},

 

    	initialize:function(){
    		var self = this;

    		console.log('initialize==>'+model.get('altura'));
    			
    	},

    	render: function(){
    		var self = this;
    		console.log('render');

    			//colocar model starter data
				//this.drawingCanvas(model.get('altura'),model.get('alturaPerna'),model.get('tamanhoBraco'),model.get('pescoco'),model.get('torax'),model.get('cintura'),model.get('coxa'),model.get('quadril'));
			$(document).on("toDrawing", function(){
				self.drawingCanvas(model.get('altura'),model.get('alturaPerna'),model.get('tamanhoBraco'),model.get('pescoco'),model.get('torax'),model.get('cintura'),model.get('coxa'),model.get('quadril'));
			});
           				
				this.simulator();
    	}

    });

    var view = new AppManequim();
    view.render();

});