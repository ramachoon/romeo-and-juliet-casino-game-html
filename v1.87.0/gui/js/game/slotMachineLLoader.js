// slot machine loader for the standard server
var jv_action;

$(document).ready(function() {
	if( jv_actions[0] == "show" ) {
		new SlotMachine( {
			mode:							jv_sMode,
			isSoundSettable:				jv_isSoundSettable,
			soundFiles:						jv_soundfiles,
			soundFileVersion:				jv_soundFileVersion,
			lang:							jv_usedLang,
			resolution:						jv_resolution,
			animationData:					jv_animationData,
			layout169:						jv_layout169,
			winanim:						jv_winanim,
			rulesURL:						jv_rulesURL,
			loadRulesInClient:				jv_iframeHelp,
			reeltiming:						jv_reelTiming,
			baseURL:						jv_baseURL,
			showClock:						jv_serverConfig.showClock,
			showVersion:					jv_version,
			hasBetChangeLoops:				jv_serverConfig.hasBetChangeLoops,
			pixiResources:					jv_pixiResources,
			showExtraJackpotBet:			jv_showExtraJackpotBet,	
			showInfoDuringJackpotChance:	jv_showInfoDuringJackpotChance,	
			enforceVersion:					false,
			winLines:						typeof jv_winLines !== 'undefined' ? jv_winLines : 0,
			maxiplay:						typeof jv_maxiplay !== 'undefined' ? jv_maxiplay : false,
			jackpotType:					typeof jv_jackpotType !== 'undefined' ? jv_jackpotType : false,
			edition:						typeof jv_edition !== 'undefined' ? jv_edition : false,
			jackpotAssetPath:				typeof jv_jackpotRessourcePath !== 'undefined' ? jv_jackpotRessourcePath : false,
			onPending:						typeof jv_onPending === 'function' ? jv_onPending : null
		} );
	} else if( jv_actions[0] == "offline" ) {
		
	}
} );

