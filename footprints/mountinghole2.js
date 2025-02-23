module.exports = {
    params: {
      designator: 'MH',
      drill: 2.5,
      padSize: 5,
      holePads: [
        { x: -1.875, y: 0 },
        { x: -1.325825, y: -1.325825 },
        { x: -1.325825, y: 1.325825 },
        { x: 0, y: -1.875 },
        { x: 0, y: 0, size: 5, drill: 2.5 },
        { x: 0, y: 1.875 },
        { x: 1.325825, y: -1.325825 },
        { x: 1.325825, y: 1.325825 },
        { x: 1.875, y: 0 },
      ]
    },
    body: p => `
      (footprint "MountingHole_2.5mm_Pad_Via"
        (layer "F.Cu")
        (attr exclude_from_pos_files exclude_from_bom)
        ${p.holePads.map(pad => `
          (pad "1" thru_hole circle
            (at ${pad.x} ${pad.y})
            (size ${pad.size || 0.8} ${pad.size || 0.8})
            (drill ${pad.drill || 0.5})
            (layers "*.Cu" "*.Mask")
          )
        `).join('')}
      )
    `
  };