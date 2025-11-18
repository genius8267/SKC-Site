const productsData = require('../data/products.json');

module.exports = {
  battery: {
    index: (req, res) => res.render('pages/creation/battery/index', { title: 'Rechargeable Battery - SKC', page: 'creation-battery', section: 'creation', data: productsData.battery }),
    copperFoil: (req, res) => res.render('pages/creation/battery/copper-foil', { title: 'Copper Foil - SKC', page: 'creation-battery-copper-foil', section: 'creation', data: productsData.battery.copperFoil }),
    siliconAnodes: (req, res) => res.render('pages/creation/battery/silicon-anodes', { title: 'Silicon Anodes - SKC', page: 'creation-battery-silicon-anodes', section: 'creation', data: productsData.battery.siliconAnodes })
  },
  semiconductor: {
    index: (req, res) => res.render('pages/creation/semiconductor/index', { title: 'Semiconductor - SKC', page: 'creation-semiconductor', section: 'creation', data: productsData.semiconductor }),
    glassSubstrate: (req, res) => res.render('pages/creation/semiconductor/glass-substrate', { title: 'Glass Substrate - SKC', page: 'creation-semiconductor-glass', section: 'creation', data: productsData.semiconductor.glassSubstrate }),
    testSocket: (req, res) => res.render('pages/creation/semiconductor/test-socket', { title: 'Test Socket - SKC', page: 'creation-semiconductor-socket', section: 'creation', data: productsData.semiconductor.testSocket }),
    cmpPad: (req, res) => res.render('pages/creation/semiconductor/cmp-pad', { title: 'CMP Pad - SKC', page: 'creation-semiconductor-pad', section: 'creation', data: productsData.semiconductor.cmpPad }),
    cmpSlurry: (req, res) => res.render('pages/creation/semiconductor/cmp-slurry', { title: 'CMP Slurry - SKC', page: 'creation-semiconductor-slurry', section: 'creation', data: productsData.semiconductor.cmpSlurry }),
    blankMask: (req, res) => res.render('pages/creation/semiconductor/blank-mask', { title: 'Blank Mask - SKC', page: 'creation-semiconductor-mask', section: 'creation', data: productsData.semiconductor.blankMask })
  },
  ecoFriendly: {
    index: (req, res) => res.render('pages/creation/eco-friendly/index', { title: 'Eco-friendly - SKC', page: 'creation-eco', section: 'creation', data: productsData.ecoFriendly }),
    pbat: (req, res) => res.render('pages/creation/eco-friendly/pbat', { title: 'High-strength PBAT - SKC', page: 'creation-eco-pbat', section: 'creation', data: productsData.ecoFriendly.pbat }),
    limex: (req, res) => res.render('pages/creation/eco-friendly/limex', { title: 'Biodegradable LIMEX - SKC', page: 'creation-eco-limex', section: 'creation', data: productsData.ecoFriendly.limex })
  }
};
