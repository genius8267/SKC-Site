/**
 * Corporation Controller
 * Handles all corporation section logic
 */

const companyData = require('../data/company.json');

module.exports = {
  // Introduction subsection
  intro: {
    company: (req, res) => {
      res.render('pages/corporation/intro/company', {
        title: 'About SKC - Corporation',
        page: 'corporation-intro-company',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.company
      });
    },
    ceo: (req, res) => {
      res.render('pages/corporation/intro/ceo', {
        title: 'CEO Message - SKC',
        page: 'corporation-intro-ceo',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.ceo
      });
    },
    history: (req, res) => {
      res.render('pages/corporation/intro/history', {
        title: 'History - SKC',
        page: 'corporation-intro-history',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.history
      });
    },
    vision: (req, res) => {
      res.render('pages/corporation/intro/vision', {
        title: 'Vision & Values - SKC',
        page: 'corporation-intro-vision',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.vision
      });
    },
    ci: (req, res) => {
      res.render('pages/corporation/intro/ci', {
        title: 'Corporate Identity - SKC',
        page: 'corporation-intro-ci',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.ci
      });
    },
    affiliates: (req, res) => {
      res.render('pages/corporation/intro/affiliates', {
        title: 'Affiliated Companies - SKC',
        page: 'corporation-intro-affiliates',
        section: 'corporation',
        subsection: 'intro',
        data: companyData.intro.affiliates
      });
    }
  },

  // Sustainable Management subsection
  sustain: {
    governance: (req, res) => {
      res.render('pages/corporation/sustain/governance', {
        title: 'Governance - SKC',
        page: 'corporation-sustain-governance',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.governance
      });
    },
    dbl: (req, res) => {
      res.render('pages/corporation/sustain/dbl', {
        title: 'Double Bottom Line - SKC',
        page: 'corporation-sustain-dbl',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.dbl
      });
    },
    csr: (req, res) => {
      res.render('pages/corporation/sustain/csr', {
        title: 'Corporate Social Responsibility - SKC',
        page: 'corporation-sustain-csr',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.csr
      });
    },
    she: (req, res) => {
      res.render('pages/corporation/sustain/she', {
        title: 'Safety, Health, Environment - SKC',
        page: 'corporation-sustain-she',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.she
      });
    },
    report: (req, res) => {
      res.render('pages/corporation/sustain/report', {
        title: 'Sustainability Report - SKC',
        page: 'corporation-sustain-report',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.report
      });
    },
    climate: (req, res) => {
      res.render('pages/corporation/sustain/climate', {
        title: 'Climate Action - SKC',
        page: 'corporation-sustain-climate',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.climate
      });
    },
    supplyChain: (req, res) => {
      res.render('pages/corporation/sustain/supply-chain', {
        title: 'Supply Chain Management - SKC',
        page: 'corporation-sustain-supply-chain',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.supplyChain
      });
    },
    humanRights: (req, res) => {
      res.render('pages/corporation/sustain/human-rights', {
        title: 'Human Rights Management - SKC',
        page: 'corporation-sustain-human-rights',
        section: 'corporation',
        subsection: 'sustain',
        data: companyData.sustain.humanRights
      });
    }
  },

  // Ethics subsection
  ethics: {
    management: (req, res) => {
      res.render('pages/corporation/ethics/management', {
        title: 'Ethical Management System - SKC',
        page: 'corporation-ethics-management',
        section: 'corporation',
        subsection: 'ethics',
        data: companyData.ethics.management
      });
    },
    antiCorruption: (req, res) => {
      res.render('pages/corporation/ethics/anti-corruption', {
        title: 'Anti-Corruption System - SKC',
        page: 'corporation-ethics-anti-corruption',
        section: 'corporation',
        subsection: 'ethics',
        data: companyData.ethics.antiCorruption
      });
    },
    reporting: (req, res) => {
      res.render('pages/corporation/ethics/reporting', {
        title: 'Ethical Reporting - SKC',
        page: 'corporation-ethics-reporting',
        section: 'corporation',
        subsection: 'ethics',
        data: companyData.ethics.reporting
      });
    }
  },

  // Hiring subsection
  hiring: {
    recruit: (req, res) => {
      res.render('pages/corporation/hiring/recruit', {
        title: 'Recruitment - SKC',
        page: 'corporation-hiring-recruit',
        section: 'corporation',
        subsection: 'hiring',
        data: companyData.hiring.recruit
      });
    },
    talents: (req, res) => {
      res.render('pages/corporation/hiring/talents', {
        title: 'Talents We Seek - SKC',
        page: 'corporation-hiring-talents',
        section: 'corporation',
        subsection: 'hiring',
        data: companyData.hiring.talents
      });
    },
    process: (req, res) => {
      res.render('pages/corporation/hiring/process', {
        title: 'Hiring Process - SKC',
        page: 'corporation-hiring-process',
        section: 'corporation',
        subsection: 'hiring',
        data: companyData.hiring.process
      });
    },
    hrPolicies: (req, res) => {
      res.render('pages/corporation/hiring/hr-policies', {
        title: 'HR Policies - SKC',
        page: 'corporation-hiring-hr-policies',
        section: 'corporation',
        subsection: 'hiring',
        data: companyData.hiring.hrPolicies
      });
    }
  }
};
