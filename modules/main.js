requirejs.config({});

require(['ceylon/examples/photogallery/1.0.0/ceylon.examples.photogallery-1.0.0'], function(gallery) {
    gallery.init('assets/img/gallery');
});