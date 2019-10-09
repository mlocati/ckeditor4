/* bender-tags: tableselection, clipboard */
/* bender-ckeditor-plugins: undo,tableselection,list */
/* bender-include: ../../_helpers/tableselection.js */
/* global createPasteTestCase */

( function() {
	'use strict';

	bender.editors = {
		classic: {},
		inline: {
			creator: 'inline'
		},
		divarea: {
			config: {
				enterMode: CKEDITOR.ENTER_DIV,
				extraPlugins: 'divarea'
			}
		}
	};

	var tests = {
		setUp: function() {
			bender.tools.ignoreUnsupportedEnvironment( 'tableselection' );
		},

		// (#875)
		'test pasting table cell': createPasteTestCase( 'table-cell', 'table-cell-paste' ),

		'test pasting text': createPasteTestCase( 'text', 'text-paste' ),

		'test pasting mixed-content': createPasteTestCase( 'mixed-content', 'mixed-content-paste' )
	};

	tests = bender.tools.createTestsForEditors( CKEDITOR.tools.object.keys( bender.editors ), tests );

	bender.test( tests );
} )();
