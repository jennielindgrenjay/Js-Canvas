TestCase('bounceTest', {

    testImageLoaded : function() {
        loadBackground();
        assertTrue(typeof bg !== "undefined");
    }

});