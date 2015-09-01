define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone'),
    Model    = require('model');

    var model = new Model();

    var AppManequim = Backbone.View.extend({

    	drawingCanvas: function(altura,alturaPerna,tamanhoBraco,tamanhoPescoco,caixaToraxica,tamanhoCintura,tamanhoCoxa,quadril,clothes){
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

		        	//clothes sleep

		        	var roupaDormirCima = objects[17].scale(options.escalaBasica);
		        	roupaDormirCima.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 

		        	var roupaDormirBaixo = objects[18].scale(options.escalaBasica);
		        	roupaDormirBaixo.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 

		        	//clothes winter
		        	var roupaInvernoCima = objects[19].scale(options.escalaBasica);
		        	roupaInvernoCima.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 

		        	var roupaInvernoBaixo = objects[20].scale(options.escalaBasica);
		        	roupaInvernoBaixo.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 

		        	//clothes summer
		        	var roupaVeraoCima = objects[21].scale(options.escalaBasica);
		        	roupaVeraoCima.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 

		        	var roupaVeraoBaixo = objects[22].scale(options.escalaBasica);
		        	roupaVeraoBaixo.set({  angle: 0, strokeDashArray: [12, 2],stroke: '#26526b'}); 



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

					//clothes sleep


					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaDormirCima = new fabric.Group([roupaDormirCima],{
						scaleY: options.escalaTorax,
						scaleX: options.escalaTorax,
						originX:'center'
					});

					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaDormirBaixo = new fabric.Group([roupaDormirBaixo],{
						scaleY: options.escalaPerna,
						scaleX: options.escalaCoxa,
						originX:'center'
					});

					//clothes winter

					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaInvernoCima = new fabric.Group([roupaInvernoCima],{
						scaleY: options.escalaTorax,
						scaleX: options.escalaTorax,
						originX:'center'
					});

					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaInvernoBaixo = new fabric.Group([roupaInvernoBaixo],{
						scaleY: options.escalaPerna,
						scaleX: options.escalaCoxa,
						originX:'center'
					});

					//clothes summer
					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaVeraoCima = new fabric.Group([roupaVeraoCima],{
						scaleY: options.escalaTorax,
						scaleX: options.escalaTorax,
						originX:'center'
					});

					//options.escalaTorax = ((caixaToraxica-0.87)/3.7)+1;
					var SroupaVeraoBaixo = new fabric.Group([roupaVeraoBaixo],{
						scaleY: options.escalaPerna,
						scaleX: options.escalaCoxa,
						originX:'center'
					});


					//clothes selection
					var fullBody = [];
					if(clothes == 'summer'){
						fullBody = [cabeca,pescoco,torax,bracos,cintura,maoEsquerda,maoDireita,pernas,coxa,SroupaVeraoCima, SroupaVeraoBaixo];
					}
					else if(clothes == 'winter'){
						fullBody = [cabeca,pescoco,torax,bracos,cintura,maoEsquerda,maoDireita,pernas,coxa,SroupaInvernoCima,SroupaInvernoBaixo];
					}
					else if(clothes == 'sleep'){
						fullBody = [cabeca,pescoco,torax,bracos,cintura,maoEsquerda,maoDireita,pernas,coxa,SroupaDormirCima,SroupaDormirBaixo];
					}

					
					var corpo = new fabric.Group(fullBody,{
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

    			var roupa = $('.roupa').val();

				
    			model.set({altura:altura, alturaPerna:alturaPerna, tamanhoBraco:tamanhoBraco, pescoco:pescoco, torax:torax, cintura:cintura, coxa:coxa, quadril:quadril });

    			console.log('get altura'+model.get('coxa'));
    			self.drawingCanvas(model.get('altura'),model.get('alturaPerna'),model.get('tamanhoBraco'),model.get('pescoco'),model.get('torax'),model.get('cintura'),model.get('coxa'),model.get('quadril'),roupa);
    		

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
				self.drawingCanvas(model.get('altura'),model.get('alturaPerna'),model.get('tamanhoBraco'),model.get('pescoco'),model.get('torax'),model.get('cintura'),model.get('coxa'),model.get('quadril'),'summer');
			});
           				
				this.simulator();
    	}

    });

    var view = new AppManequim();
    view.render();

});