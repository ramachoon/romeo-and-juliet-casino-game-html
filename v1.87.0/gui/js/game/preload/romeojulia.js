function getPreloadImages( conf, slotConf, winLines, lang ) {
	var images = getPreloadImagesCommon( { 
		conf : conf,
		slotConf: slotConf,
		folder: 'romeojulia',
		winLines: winLines,
		attentionSpin: true,
		scatterWins: true,
		lang: lang
	});
	
	// ####
	if( conf.mode( 'l' ) == 0 ) { // layout 3:2
		images.push( 'gui/picts/rest/romeojulia/<resol>/bg_top-fg.jpg' );
		images.push( 'gui/picts/rest/romeojulia/<resol>/bg_top-fg2.jpg' );
	}
	
	if( winLines == 10 ) {
		var wImages = [
	    	// linemarkers
	    	'gui/picts/game/<resol>/linemarker/line-number-6.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-7.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-8.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-9.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-10.jpg'
	    ];
		images = images.concat( wImages );
	}
	
	// ####
	if( conf.mode( 'c') == 0 ) { // web 
		var conImages = [
			// info sites
			'gui/picts/rest/romeojulia/<resol>/console_web_bg-fg.png',
			'gui/picts/rest/romeojulia/<resol>/infoSites/web/background.png',
			'gui/picts/rest/romeojulia/<resol>/infoSites/web/button-close.png',
			'gui/picts/rest/romeojulia/<resol>/infoSites/web/checkbox-off.png',
			'gui/picts/rest/romeojulia/<resol>/infoSites/web/checkbox-on.png'
		];
		
		images = images.concat( conImages );
	}
	else { // mobile
		var conImages = [
		    'gui/picts/rest/romeojulia/<resol>/console_mobile_bg-fg.png',
		];
		
		images = images.concat( conImages );
		
		if( conf.mode( 'c' ) == 2 ) { // supporting portrait mode
			var portConImages = [
				'gui/picts/rest/romeojulia/<resol>/console_portrait_bg-fg.png',
				'gui/picts/rest/romeojulia/<resol>/portrait_bottom_l169.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_bottom_l169-fg.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_bottom_l32.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_bottom_l32-fg.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_top.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_top-fg.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_top_small.jpg',
				'gui/picts/rest/romeojulia/<resol>/portrait_top_small-fg.jpg'
			];
			images = images.concat( portConImages );
		}
	}
	
	var common = [
      	// backgrounds
    	'gui/picts/rest/romeojulia/<resol>/bg_middle.jpg',
    	'gui/picts/rest/romeojulia/<resol>/bg_bottom.jpg',    	
    	'gui/picts/rest/romeojulia/<resol>/bg_middle-fg.jpg',
    	'gui/picts/rest/romeojulia/<resol>/bg_middle-fg2.jpg',
    	'gui/picts/rest/romeojulia/<resol>/bg_bottom-fg.jpg',    	
    	'gui/picts/rest/romeojulia/<resol>/fadeout.png',
    	'gui/picts/rest/romeojulia/<resol>/fadeout-fg.png',
		'gui/picts/rest/romeojulia/<resol>/console_web_bg-fg.png',
		'gui/picts/rest/romeojulia/<resol>/console_mobile_bg-fg.png',
    	
		// linemarkers
    	'gui/picts/game/<resol>/linemarker/line-number-1.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-2.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-3.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-4.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-5.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-grey.jpg',
    	'gui/picts/game/<resol>/linemarker/line-number-dimm.png',
		
		//infoSites
		'gui/picts/rest/romeojulia/<resol>/infoSites/10.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/a.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/book.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/brief.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/dolch.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/j.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/julia.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/k.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/lines.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/q.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/romeo.png',
		'gui/picts/rest/romeojulia/<resol>/infoSites/scatter.png',
    	
    	// symbols
    	[ '/scatter_small.png', 'gui/picts/rest/romeojulia/<resol>/symbols/scatter_small.png' ],
    	[ '/scatter_smallb.png', 'gui/picts/rest/romeojulia/<resol>/symbols/scatter_smallb.png' ],
    	[ '/scatter_smallm.png', 'gui/picts/rest/romeojulia/<resol>/symbols/scatter_smallm.png' ],
    	[ '/scatter_smallt.png', 'gui/picts/rest/romeojulia/<resol>/symbols/scatter_smallt.png' ],
    	[ '/symbol-10.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-10.jpg' ],
    	[ '/symbol-a.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-a.jpg' ],
    	[ '/symbol-dagger.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-dagger.jpg' ],
    	[ '/symbol-fg-10.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-10.jpg' ],
    	[ '/symbol-fg-a.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-a.jpg' ],
    	[ '/symbol-fg-dagger.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-dagger.jpg' ],
    	[ '/symbol-fg-j.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-j.jpg' ],
    	[ '/symbol-fg-k.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-k.jpg' ],
    	[ '/symbol-fg-letter.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-letter.jpg' ],
    	[ '/symbol-fg-q.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-q.jpg' ],
    	[ '/symbol-fg-romeo.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-fg-romeo.jpg' ],
    	[ '/symbol-j.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-j.jpg' ],
    	[ '/symbol-julia.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-julia.jpg' ],
    	[ '/symbol-k.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-k.jpg' ],
    	[ '/symbol-letter.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-letter.jpg' ],
    	[ '/symbol-m-10.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-10.jpg' ],
    	[ '/symbol-m-a.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-a.jpg' ],
    	[ '/symbol-m-dagger.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-dagger.jpg' ],
    	[ '/symbol-m-j.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-j.jpg' ],
    	[ '/symbol-m-julia.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-julia.jpg' ],
    	[ '/symbol-m-k.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-k.jpg' ],
    	[ '/symbol-m-letter.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-letter.jpg' ],
    	[ '/symbol-m-q.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-q.jpg' ],
    	[ '/symbol-m-romeo.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-romeo.jpg' ],
    	[ '/symbol-m-scatter.png', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-m-scatter.png' ],
    	[ '/symbol-q.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-q.jpg' ],
    	[ '/symbol-romeo.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-romeo.jpg' ],
    	[ '/symbol-s-10.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-10.jpg' ],
    	[ '/symbol-s-a.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-a.jpg' ],
    	[ '/symbol-s-dagger.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-dagger.jpg' ],
    	[ '/symbol-s-j.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-j.jpg' ],
    	[ '/symbol-s-julia.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-julia.jpg' ],
    	[ '/symbol-s-k.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-k.jpg' ],
    	[ '/symbol-s-letter.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-letter.jpg' ],
    	[ '/symbol-s-q.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-q.jpg' ],
    	[ '/symbol-s-romeo.jpg', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-s-romeo.jpg' ],
    	[ '/symbol-scatter.png', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-scatter.png' ],
    	[ 'symBlendTop', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-scatter_bot-dark.png' ],
    	[ 'symBlendTopBottom', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-scatter_bot-top-dark.png' ],
    	[ 'symBlendBottom', 'gui/picts/rest/romeojulia/<resol>/symbols/symbol-scatter_top-dark.png' ],

    	// freegame blending
    	'gui/picts/rest/romeojulia/<resol>/freegame/fgsign-1.jpg',
    	'gui/picts/rest/romeojulia/<resol>/freegame/fgsign-2.png',
    	
    	// small symbols for mini paytable in free games    	
    	[ 'fgSymbolSmall1', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-10_small.jpg' ],
    	[ 'fgSymbolSmall2', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-j_small.jpg' ],
    	[ 'fgSymbolSmall3', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-q_small.jpg' ],
    	[ 'fgSymbolSmall4', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-k_small.jpg' ],
    	[ 'fgSymbolSmall5', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-a_small.jpg' ],
    	[ 'fgSymbolSmall6', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-letter_small.jpg' ],
    	[ 'fgSymbolSmall7', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-dagger_small.jpg' ],
    	[ 'fgSymbolSmall8', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-romeo_small.jpg' ],
    	[ 'fgSymbolSmall9', 'gui/picts/rest/romeojulia/<resol>/freegame/symbSmall/symbol-s-julia_small.jpg' ] 	
    ];
	
	images = images.concat( common );
	
	if( conf.playSymbolAnims() ) {
		var rImages = [
           	// symbol anims
        	[ 'scatterBonus_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterBonus_0.jpg' ],
        	[ 'scatterBonus_1.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterBonus_1.jpg' ],
        	[ 'scatterBonus_2.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterBonus_2.jpg' ],
        	[ 'scatterBonusMask.png', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterBonusMask.png' ],
        	[ 'scatterBonusEnd.png', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterBonusEnd.png' ],
        	[ 'scatterWild_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterWild_0.jpg' ],
        	[ 'scatterWildMask.png', 'gui/picts/rest/romeojulia/<resol>/symanim/scatterWildMask.png' ],
        	[ 'symbolTeaser10_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/symbolTeaser10_0.jpg' ],
        	[ 'symbolTeaser10Mask.png', 'gui/picts/rest/romeojulia/<resol>/symanim/symbolTeaser10Mask.png' ],
        	[ 'symbolTeaser10End.png', 'gui/picts/rest/romeojulia/<resol>/symanim/symbolTeaser10End.png' ],
        	[ 'julia_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/julia_0.jpg' ],
        	[ 'sAce_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sAce_0.jpg' ],
        	[ 'sDagger_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sDagger_0.jpg' ],
        	[ 'sJack_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sJack_0.jpg' ],
        	[ 'sJulia_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sJulia_0.jpg' ],
        	[ 'sKing_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sKing_0.jpg' ],
        	[ 'sLetter_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sLetter_0.jpg' ],
        	[ 'sQueen_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sQueen_0.jpg' ],
        	[ 'sRomeo_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sRomeo_0.jpg' ],
        	[ 'sTen_0.jpg', 'gui/picts/rest/romeojulia/<resol>/symanim/sTen_0.jpg' ]
		];
		
		images = images.concat( rImages );
		
		if( conf.mode( 'r' ) == 0 ) { // 1280
			var rImages = [
				//hype film assets
				'gui/picts/anim/<resol>/brjfreegame/blank.gif',
				'gui/picts/anim/<resol>/brjfreegame/Book.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_01.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_02.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_03.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_04.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_05.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_06.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_07.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_08.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_09.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_10.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_11.png',
				'gui/picts/anim/<resol>/brjfreegame/Pageturn_12.png',
				'gui/picts/anim/<resol>/brjfreegame/Particles_01.png',
				'gui/picts/anim/<resol>/brjfreegame/Particles_02.png',
				'gui/picts/anim/<resol>/brjfreegame/Particles_03.png',
				'gui/picts/anim/<resol>/brjfreegame/Particles_04.png',
				'gui/picts/anim/<resol>/brjfreegame/Particles_05.png',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_10.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_A.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_Dagger.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_J.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_Julia.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_K.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_Letter.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_Q.jpg',
				'gui/picts/anim/<resol>/brjfreegame/Symbol_Romeo.jpg'
			];
			
			images = images.concat( rImages );
		}
		else if( conf.mode( 'r' ) == 1 ) { // 640
			var rImages = [
				//hype film assets
				'gui/picts/anim/<resol>/brjoptfreegame/blank.gif',
				'gui/picts/anim/<resol>/brjoptfreegame/Book.png',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_10.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_A.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_Dagger.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_J.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_Julia.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_K.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_Letter.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_Q.jpg',
				'gui/picts/anim/<resol>/brjoptfreegame/Symbol_Romeo.jpg'
	   		];
			
			images = images.concat( rImages );
		}
	}
	else{
		var oImages = [
           	// optimal slot animations
    		[ 'scatterWild', 'gui/picts/rest/romeojulia/<resol>/optanim/scatterWild.png' ],
    		[ 'scatterWildGlow', 'gui/picts/rest/romeojulia/<resol>/optanim/scatterWildGlow.png' ],
    		[ 'bookPicture', 'gui/picts/rest/romeojulia/<resol>/optanim/BoRaJ_Book.png' ]		               
		];
		images = images.concat( oImages );
	}	

	return images;
}