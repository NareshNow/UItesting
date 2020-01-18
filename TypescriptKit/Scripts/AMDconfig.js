require.config({
    // to set the default folder
    baseUrl: '../Compiledmodules',
    // paths: maps ids with paths (no extension)
    paths: {
        'jasmine': ['../Scripts/jasmine/jasmine.js'],
        'jasmine-html': ['../Scripts/jasmine/jasmine-html.js'],
        'jasmine-boot': ['../Scripts/jasmine/boot.js'],
        'jquery':['../Scripts/jquery-3.4.1.min.js']
        
    },
    // shim: makes external libraries compatible with requirejs (AMD)
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        },
        'Jasminetest': {
            deps: ['Validate']
           

        },
        'Validate': {
            exports:'mobnumvalidate'
        },
        'UpdateStatus':
        {
            exports:'update'
        }
    }
});