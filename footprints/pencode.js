module.exports = {
    params: {
      designator: "ENC",
      orientation: "up",
      S1: { type: "net", value: "S1" },
      S2: { type: "net", value: "S2" },
      A: { type: "net", value: "A" },
      B: { type: "net", value: "B" },
      C: { type: "net", value: "C" },
      D: { type: "net", value: "D" }
    },
    body: (p) => {
      return `
        (module Panasonic_EVQWGD001 (layer F.Cu)
        ${p.at /* Ergogen positions */}
  
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS)
          (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "RollerEncoder_Panasonic_EVQWGD001" (at -0.1 9) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15))))
  
        ${'' /* Footprint Outline */}
        (fp_line (start -8.5 5.5) (end -8.5 7.5) (layer F.SilkS) (width 0.2))
        (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 -6.4) (end 8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 7.4) (end -8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -8.4 7.4) (end -8.4 -6.4) (layer Dwgs.User) (width 0.12))
  
        ${'' /* Pin Definitions */}
        (pad S1 thru_hole circle (at -6.85 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.S1.str})
        (pad S2 thru_hole circle (at -5 -6.2) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.S2.str})
        (pad A thru_hole circle (at -5.625 -3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.A.str})
        (pad B thru_hole circle (at -5.625 -1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.B.str})
        (pad C thru_hole circle (at -5.625 1.27) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.C.str})
        (pad D thru_hole circle (at -5.625 3.81) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.D.str})
  
        ${'' /* Mounting Hole */}
        (pad "" np_thru_hole circle (at -5.625 6.3) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        )
      `;
    },
  };
  