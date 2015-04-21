
// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl:'js/libs',

	paths: {
		main: '../main',
		jquery: 'jquery.min',
		underscore: 'underscore-min',
		backbone: 'backbone-min',
		model: '../model',
		canvg: 'canvg',
		rgbcolor: 'rgbcolor',
		stackBlur: 'StackBlur',
		fabric: 'fabric.min',
		slider: '../jquery.anyslider'
	},

	shim: {
		jquery: {
            exports: '$'
        },
        newshare: {
 			deps: ['jquery','slider'] 

        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery','fabric'],
            exports: 'Backbone'
        }
	}
});
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);