//------------------------------------------------------------------------------
//- preamble -------------------------------------------------------------------
//------------------------------------------------------------------------------

// for the benefit of jslint, declare global variables from outside this script
/*global $, $R, $w, $break, Class, console, Element, Hash, Event, document,
  window, G_vmlCanvasManager, Template, Tip */

// spoof a console, if necessary, so that we can run in IE (<8) without having
// to entirely disable debug messages

// A javascript object to control the drawing of domain graphics on the
// domain graphics generator page.
//
// jt6 20110303 WTSI
//
// $Id$
//
// Copyright (c) 2011: Genome Research Ltd.
//
// Authors: Rob Finn (rdf@sanger.ac.uk), John Tate (jt6@sanger.ac.uk)
//
// This is free software; you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation; either version 2 of the License, or (at your option) any later
// version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
// details.
//
// You should have received a copy of the GNU General Public License along with
// this program. If not, see <http://www.gnu.org/licenses/>.

var GraphicGenerator = Class.create({

    initialize: function() {
        this._pg = new PfamGraphic();
    },

    generate: function(seq, placeholder) {

        var sequence;
        eval("sequence = " + JSON.stringify(seq));
        // set up the PfamGraphic object
        this._pg.setParent(placeholder);

        this._pg.setImageParams({
            xscale: 1.0,
            yscale: 1.0
        });

        // render the sequence
        this._pg.setSequence(sequence);
        this._pg.render();
    },

});