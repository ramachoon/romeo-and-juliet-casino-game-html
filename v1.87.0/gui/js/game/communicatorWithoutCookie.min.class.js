/**
 * class for handling the client-server-communication (via the AJAX)
 * @copyright LoCoNET GmbH 2015-03-09
 */
function Communicator(e) {
    function s(e) {
        var r = t.decode(e);
        r && (!i && r.initData && r.initData.sessionID && (i = r.initData.sessionID), n(r))
    }

var self_=this;

    function o(e, t, n) {
        if (!r) return console.log("Communicator cannot send requests: slotmachine name is missing"), !1;
        var i = getAjaxResponder(r, e);
        return $.ajax({
            type: "POST",
            url: i+'&sessionId='+sessionStorage.getItem('sessionId'),
            data: t,
            success: function(e) {
                ajaxResponseHandler({
                    msg: e,
                    url: i+'&sessionId='+sessionStorage.getItem('sessionId'),
                    onSuccess: function(e, t) {
                        s(t)
                    }
                })
            },
            error: function(e, t) {
                n && n()
            }
        })
    }
    var t = null,
        n = null,
        r = "",
        i = !1;
    this.sendRequest = function(e, r, s) {
            typeof r == "undefined" && (r = {}), obj_restHandler.addRequestParams(r, e), i && (r.sessionID = i), typeof s != "function" && (s = !1);
            var u = t.encode(e, r, s);
          
		  
 if( (r.request=="linebetplus" || r.request=="linebetminus")  && r.infoActive){
			  
self_.tmpReq={			  
m: "1en00001",
section1: 1,
section: "paytable",
sessionID: "lp9l636h38m48elv9eg45ehkq0"
};

setTimeout(function(){
	
 self_.sendRequest ('showInfoSite', self_.tmpReq, false);	
	
},300);

		  }
		  
            for (var a in u) u[a].type == "request" ? o(u[a].action, u[a].data, s) : u[a].type == "response" && n(u[a].data)
        },
        function(e) {
            r = e.slotmachine, n = e.responseHandler, t = new Translator, typeof jv_sessionID != "undefined" && jv_sessionID && (i = jv_sessionID)
        }(e)
};