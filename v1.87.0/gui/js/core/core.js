var _core_submittingForm = false;
var _core_formvalid_errors_del = new Array();
var _core_formvalid_errors_add = new Array();
var _core_registeredForms = new Array();
var _core_TAfocused = false;

function loadVars( vars ) {
	var erg = "";
	for (var key in vars ) {
		if( typeof(vars[key])=='object'&&(vars[key] instanceof Array) ) {
			for( var i = 0; i < vars[key].length; ++i )
				erg += "&" + key + encodeURIComponent( '[]' ) +"=" + encodeURIComponent( vars[key][i] );
		}
		else erg += "&" + key + "=" + encodeURIComponent( vars[key] );
	}
    	
    return erg;
}

function loadForm( form ) {
	var data = $(form).serialize();
	if( jv_jshybrid && jv_rparam ) {
		var pos1 = data.indexOf( jv_rparam + "=" );
		if( pos1 >= 0 ) {
			var ndata = data.substr( 0, pos1 );
			data = data.substring( pos1+1+jv_rparam.length, data.length );
			data = ndata + data.substring( data.indexOf( "&" )+1, data.length );
		}
	}
	return data;
}
				
function manageAnswer( answer, errorFunc, okFunc, form ) {		
	var SEP = "$$";
	var tmpsp = answer.split( SEP );
	var sp = new Array();
	var lastIdx = (typeof form !== 'undefined') && form ? 3 : 2;
	
	for( var i = 0; i < tmpsp.length; ++i ) {	
		if( i > lastIdx ) sp[lastIdx] = sp[lastIdx] + SEP + tmpsp[i];
		else sp.push( tmpsp[i] );
	}
	
	if( sp[0] == "ERROR" ) {	
		if( sp.length == 4 && (typeof(form) != 'undefined') && form ) {
			var ernames = sp[3].split(",");
			for( var i = 0; i < ernames.length; ++i ) {
				_core_formvalid_errors_add.push( form+" [name="+ernames[i]+"]" );
			}
		}
		errorFunc( sp[1], sp[2] );
	}
	else if( sp[0] == "INFO" ) {
		okFunc( sp[1], sp[2] );
	}
	else {
		errorFunc( 99, "jQuery-Ajax::manageAnswer recieved wrong string:\n" + answer);
	}
	
	_core_submittingForm = false;
}

function afterAnswerProcessed() {
	// clear all old form-validator-errors
	while( selection = _core_formvalid_errors_del.shift() ) {
		$(selection).removeClass( "input_error" );
	}
	
	// add all new errors
	while( selection = _core_formvalid_errors_add.shift() ) {						
		$(selection).addClass( "input_error" );		
		_core_formvalid_errors_del.push( selection );
	}
}

function registerFormular( formID, submFunc, abordFunc ) {
	_core_submitFormular( "#"+formID, submFunc );	
	_core_abordFormular( "#"+formID, abordFunc );	
	_core_registeredForms[formID] = [ submFunc, abordFunc ];
}

function formReloaded( formID ) {
	$("body").unbind("keyup");
	if( typeof( _core_registeredForms[formID][0] ) == "undefined" ) return;	
	_core_submitFormular( "#"+formID, _core_registeredForms[formID][0] );
	_core_abordFormular( "#"+formID, _core_registeredForms[formID][1] );		
}

function closeFormular( formID ) {	
	_core_helpAbordFormular( "#"+formID, _core_registeredForms[formID][1] );
}

function submitFormular( formID ) {
	var submFunc = _core_registeredForms[formID][0];
	
	if( _core_submittingForm || (typeof(submFunc) == 'undefined') ) return;	
	_core_submittingForm = true;
	submFunc();			
}

function registerPopupDiv( divID ) {
	$("#"+divID).fadeIn();
	$(".popup_hint").fadeIn();
	
	$("#"+divID+" .popup_close").click(function() {
		$(".popup_hint").fadeOut();
		$("#"+divID).fadeOut( );
		$("body").unbind("keyup");
	});
	
	$("body").keyup(function(e) {						
		if(e.which == 27) {
			$(".popup_hint").fadeOut();
			$("#"+divID).fadeOut( );
			$("body").unbind("keyup");
		}		
	});
}

function _core_submitFormular( form, submFunc ) {
	$(form+" textarea").focus(function() { _core_TAfocused = true; });
	$(form+" textarea").blur(function() { _core_TAfocused = false; });
	
	$(form).keydown(function(e) {
		if( _core_TAfocused || _core_submittingForm || 
			typeof( _core_registeredForms[form.substr( 1 )][0] ) == "undefined" ) return;
		
		if(e.which == 13) {
			_core_submittingForm = true;
			submFunc();				
		}	
	});
	
	$(form).keyup(function(e) {
		if( e.which == 13 && !_core_TAfocused ) {
			var inp = $(form + " > :input");
			for( var i = 0; i < inp.length; ++i ) inp[i].blur();
		}
	});
	
	$(form+' input[type="submit"]').click(function(e) {
		if( _core_submittingForm || typeof( _core_registeredForms[form.substr( 1 )][0] ) == "undefined" ) return;
		
		_core_submittingForm = true;
		submFunc();					
	});	
}

function _core_helpAbordFormular( form, abordFunc ) {
	if( !_core_registeredForms[form.substr( 1 )] ) return; 
	$(form).unbind("keyup");
	$(form).unbind("keydown");
	$(form+" textarea").unbind("focus");
	$(form+" textarea").unbind("blur");
	$("body").unbind("keyup");
	if( abordFunc ) abordFunc();
	delete(_core_registeredForms[form.substr( 1 )]);	
}

function _core_abordFormular( form, abordFunc ) {
	if( !abordFunc ) return;
	
	$("body").keyup(function(e) {				
		if( !_core_submittingForm ) {
			if(e.which == 27) _core_helpAbordFormular( form, abordFunc );
		}		
	});	
	
	$("."+form.substr(1)+"Close").click(function() { _core_helpAbordFormular( form, abordFunc ); });
}


function removeByElement(arrayName,arrayElement) {
   for(var i=0; i<arrayName.length;i++ ) { 
       if(arrayName[i]==arrayElement)
           arrayName.splice(i,1); 
   } 
}

if( typeof( jQuery ) != 'undefined' ) {
	new function($) {
	  $.fn.setCursorPosition = function(pos) {
	    if ($(this).get(0).setSelectionRange) {
	      $(this).get(0).setSelectionRange(pos, pos);
	    } else if ($(this).get(0).createTextRange) {
	      var range = $(this).get(0).createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  }
	}(jQuery);
}