$(".various").click(function() {
		$.fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),
			'type'			: 'swf'
		});

		return false;
	});

$(".fancybox").fancybox({
    beforeShow : function() {
        this.title = '<div class="addthis addthis_default_style "><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_button_preferred_1"></a><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_button_preferred_2"></a><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_button_preferred_3"></a><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_button_preferred_4"></a><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_button_compact"></a><a href="' + this.href + '" addthis:url="' + this.href + '" addthis:title="' + this.title + '" class="addthis_counter addthis_bubble_style"></a></div>';
    },
    afterShow : function() {
         addthis.toolbox(
            $(".addthis").get()
        );
        addthis.counter(
            $(".addthis_counter").get()
        );

    },
    helpers : {
        title : {
            type : 'inside'
        }   
    }
	});