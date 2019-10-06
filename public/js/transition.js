$(document).ready(function(){

    setTimeout(function(){
    	$(".next-step").click(function (e) {
            var $active = $('.nav-tabs li.active');
            $active.next().removeClass('disabled');
            nextTab($active);
        });

        $(".prev-step").click(function (e) {
            var $active = $('.nav-tabs li.active');
            prevTab($active);
        });

        $(".next-step-comp").click(function (e) {
            var $active = $('.nav-tabs li.active');
            $active.next().removeClass('disabled');
            nextTab($active);
        });

        $(".prev-step-comp").click(function (e) {
            var $active = $('.nav-tabs li.active');
            prevTab($active);
        });

    	function nextTab(elem) {
        	$(elem).next().find('a[data-toggle="tab"]').click();
    	}
    	function prevTab(elem) {
    	    $(elem).prev().find('a[data-toggle="tab"]').click();
    	}
    }, 1000);

});