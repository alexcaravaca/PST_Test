/**
 * @return the init function to start the module.
 */
prodi.ui.sampleModule2 = (function () {
    
    function init() {
        // Showing an starting comment
        console.log('MODULE #2 IS WORKING!');
        console.log('max tablet size is = ' + prodi.ui.constants.TABLET_MAX_SIZE);
    }

    return {
        init: init
    };

})();