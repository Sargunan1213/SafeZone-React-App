
// start the popup specefic scripts
// safe to use $
jQuery(document).ready(function($) {

    // Fontawesome iconpicker
    $('.fontawesome-iconpicker i').live('click', function(e) {
        e.preventDefault();
        var fontName = $(this).attr('data-name').replace('icon-', '');

        if($(this).hasClass('active')) {
            $(this).parent().find('.active').removeClass('active');
            $(this).parent().parent().find('input').attr('value', '');
        } else {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parent().parent().find('input').attr('value', 'icon-' + fontName);
        }
    });
    // Toggle the child items
    $('.child-toggle-item').live("click", function(){ 
        $(this).next('.child-clone-row-form').toggle();
    });

    // ******* Uploader Function
    var custom_uploader;

    $('.button-shortcodegen-uploader').live('click', function(e) {

        e.preventDefault();

        curr_upload_button = $(this);

        input_field_id = $(this).data("id");

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {
            custom_uploader.open();
            return;
        }

        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });

        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            attachment = custom_uploader.state().get('selection').first().toJSON();
            $(curr_upload_button).prev('input#' + input_field_id ).val(attachment.url);
            //$('#' + input_field_id ).val(attachment.url);

            //console.log(attachment.url);
        });

        //Open the uploader dialog
        custom_uploader.open();

    });
//************************

    var mthemes = {
    	loadVals: function()
    	{
    		var shortcode = $('#_mtheme_shortcode').html(),
    			uShortcode = shortcode;
    		
    		// fill in the gaps eg {{param}}
    		$('.mtheme-input').each(function() {
    			var input = $(this),
    				id = input.attr('id'),
    				id = id.replace('mtheme_', ''),		// gets rid of the mtheme_ prefix
    				re = new RegExp("{{"+id+"}}","g");
    				
    			uShortcode = uShortcode.replace(re, input.val());
    		});
    		
    		// adds the filled-in shortcode as hidden input
    		$('#_mtheme_ushortcode').remove();
    		$('#mtheme-sc-form-table').prepend('<div id="_mtheme_ushortcode" class="hidden">' + uShortcode + '</div>');
    	},
    	cLoadVals: function()
    	{
    		var shortcode = $('#_mtheme_cshortcode').html(),
    			pShortcode = '';
    			shortcodes = '';
    		
    		// fill in the gaps eg {{param}}
    		$('.child-clone-row').each(function() {
    			var row = $(this),
    				rShortcode = shortcode;
    			
    			$('.mtheme-cinput', this).each(function() {
    				var input = $(this),
    					id = input.attr('id'),
    					id = id.replace('mtheme_', '')		// gets rid of the mtheme_ prefix
    					re = new RegExp("{{"+id+"}}","g");
                        var value = input.val();
                        if(value == null) {
                          value = '';
                        }   					
    				rShortcode = rShortcode.replace(re, input.val());
    			});
    	
    			shortcodes = shortcodes + rShortcode + "\n";
    		});
    		
    		// adds the filled-in shortcode as hidden input
    		$('#_mtheme_cshortcodes').remove();
    		$('.child-clone-rows').prepend('<div id="_mtheme_cshortcodes" class="hidden">' + shortcodes + '</div>');
    		
    		// add to parent shortcode
    		this.loadVals();
    		pShortcode = $('#_mtheme_ushortcode').html().replace('{{child_shortcode}}', shortcodes);
    		
    		// add updated parent shortcode
    		$('#_mtheme_ushortcode').remove();
    		$('#mtheme-sc-form-table').prepend('<div id="_mtheme_ushortcode" class="hidden">' + pShortcode + '</div>');
    	},
    	children: function()
    	{
    		// assign the cloning plugin
    		$('.child-clone-rows').appendo({
    			subSelect: '> div.child-clone-row:last-child',
    			allowDelete: false,
    			focusFirst: false
    		});
    		
    		// remove button
    		$('.child-clone-row-remove').live('click', function() {
    			var	btn = $(this),
    				row = btn.parent();
    			
    			if( $('.child-clone-row').size() > 1 )
    			{
    				row.remove();
    			}
    			else
    			{
    				//alert('You need a minimum of one row');
    			}
    			
    			return false;
    		});
    		
    		// assign jUI sortable
    		$( ".child-clone-rows" ).sortable({
				placeholder: "sortable-placeholder",
				items: '.child-clone-row',
				cancel: 'div.fontawesome-iconpicker, input, select, textarea, a'
			});
    	},
    	resizeTB: function()
    	{
			var	ajaxCont = $('#TB_ajaxContent'),
				tbWindow = $('#TB_window'),
				mthemePopup = $('#mtheme-popup');
                WindowHeight = $(window);
                SetWindowWidth = 900;

            tbWindow.css({
                height: WindowHeight.outerHeight() - 125
            });

			ajaxCont.css({
				paddingTop: 0,
				paddingLeft: 0,
				paddingRight: 0,
				height: (WindowHeight.outerHeight()- 167),
				overflow: 'auto',
                width: mthemePopup.outerWidth()
			});
			
			$('#mtheme-popup').addClass('no_preview');
    	},
    	load: function()
    	{
    		var	mthemes = this,
    			popup = $('#mtheme-popup'),
    			form = $('#mtheme-sc-form', popup),
    			shortcode = $('#_mtheme_shortcode', form).html(),
    			popupType = $('#_mtheme_popup', form).text(),
    			uShortcode = '';

            // Color Picker
            $('#mtheme-sc-form-table .colorSwatch').wpColorPicker();
    		
    		// resize TB
    		mthemes.resizeTB();
    		$(window).resize(function() { mthemes.resizeTB() });
    		
    		// initialise
    		mthemes.loadVals();
    		mthemes.children();
    		mthemes.cLoadVals();
    		
    		// update on children value change
    		$('.mtheme-cinput', form).live('change', function() {
    			mthemes.cLoadVals();
    		});
    		
    		// update on value change
    		$('.mtheme-input', form).change(function() {
    			mthemes.loadVals();
    		});

            // Hide insert
            if($('#_mtheme_popup').text() == 'shortcode-generator') {
                $('.mtheme-sc-form-button,#mtheme_shortcode_desc').hide();
            } else {
                $('.mtheme_shortcode_choice_toggle').addClass('mtheme-shortcode-toggle-as-button');
            }

            $('#TB_window').fadeIn('fast');
    	}
	}

    // Display shortcode when clicked
    $('.mtheme_shortcode_choice_box').live('click', function() {
        var name = $(this).data('id');
        var label = $(this).data('title');
        console.log(name,label);

        // Trigger a Pop up with shortcode gen
        tinyMCE.activeEditor.execCommand("mthemePopup", false, {
            title: label,
            identifier: name
        });

        $('#TB_window').hide();

    });
    
    // run
    $('#mtheme-popup').livequery( function() {
        mthemes.load(); 
        $('#mtheme-popup').closest('#TB_window').addClass('mtheme-shortcodes-popup');
    });

    //Add Shortcode
    $('.mtheme-insert').live('click', function() {                      
        if(window.tinyMCE)
        {
            mthemes.cLoadVals();
            //window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, $('#_mtheme_ushortcode', form).html());
            window.tinyMCE.activeEditor.execCommand('mceInsertContent', false, $('#_mtheme_ushortcode').html());
            tb_remove();
        }
    });
});