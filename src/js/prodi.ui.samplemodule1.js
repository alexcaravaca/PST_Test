

/**
 * @return the init function to start the module.
 */

var obj = {};
var ii = 0;
prodi.ui.sampleModule1 = (function () {
    
    function init() {
        // Showing an starting comment
        console.log('MODULE #1 IS UP AND RUNNING!');




    }

    return {
        init: init
    };

})();


jQuery(document).ready(function($) {


    $.getJSON("../babySteps.json", function(json) {
        //console.log(json); // this will show the info it in firebug console
        obj = json;
        var cList = $('#menu_list_items');
        var cinfolist = $('.info_scrollWrapper');
        var lenght = obj.babysteps.length;

        for ( var i = 0; i < lenght; i++) {

            var li = $('<li/>')

                .addClass('ui-menu-item')
                .addClass(obj.babysteps[i].iconClass)
                .attr('role', 'menuitem')
                .appendTo(cList);
            var a = $('<a/>')
                .addClass('ui-all')
                .text(  obj.babysteps[ i ].header  )
                //.attr('href', '')
                .appendTo(li);
            var header = obj.babysteps[ i ].header;
            var div = $('<div/>')
                .addClass('info-content-wrapper')
                .addClass(obj.babysteps[i].iconClass)
                .attr('id', header)
                .html('<h2>' + header + '</h2>'+'<h3>' + obj.babysteps[i].subheader + '</h3>')
                //.html('<h3>' + obj.babysteps[i].subheader + '</h3>')
                .appendTo(cinfolist);

            for ( var ii = 0; ii < obj.babysteps[i].body.length; ii++) {
               //  alert("testt"+ obj.babysteps[i].body.length);
                var pp = $('<p/>')
                    .text(obj.babysteps[i].body[ii])
                    .appendTo('.info-content-wrapper:last-child');
            }

        };




        $( "li a" ).first().addClass( "active" );
        $('li').first().css('background', '#fff');

       // console.log( "JSON Data: " + obj.babysteps[ 3 ].header );
    });



    var   currentItem = 'BabyStep1';;

    $("ul#menu_list_items").on("click","li", function(){
        //alert($(this).text());
        var elementID = $(this).text();

        $('li').css('background', '#d1d5d6');
        $(this).css('background', '#fff');

        $('li a').removeClass("active");
        $(this).find('a').addClass("active");

        var target = $( "#"+elementID );
        //alert(target.offset().top);

        if (elementID != currentItem){
            currentItem = elementID;
           // $('.info_scrollWrapper').animate({
             //   scrollTop: $(target).offset().top
            //}, 2000);

            var container = $('.info_container'),
                scrollTo = $(target);

            container.animate({
                scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
            },2000);

        }
        //return false;

        //var fooOffset = jQuery(target).offset(),
          //  destination = fooOffset.top;
        //jQuery('.info_container').scrollTop(destination);





});



});