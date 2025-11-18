/**
 * SKC Full-Stack Website
 * Express.js Application
 */

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Import routes
const corporationRoutes = require('./routes/corporation');
const creationRoutes = require('./routes/creation');
const communicationRoutes = require('./routes/communication');
const careerRoutes = require('./routes/career');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
}));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Make navigation data available to all templates
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.navigation = {
    corporation: {
      title: 'Corporation',
      sections: [
        {
          title: 'Introduction',
          links: [
            { text: 'About SKC', url: '/eng/corporation/intro/company' },
            { text: 'CEO', url: '/eng/corporation/intro/ceo' },
            { text: 'History', url: '/eng/corporation/intro/history' },
            { text: 'Vision', url: '/eng/corporation/intro/vision' },
            { text: 'CI', url: '/eng/corporation/intro/ci' },
            { text: 'Affiliates', url: '/eng/corporation/intro/affiliates' }
          ]
        },
        {
          title: 'Sustainable Management',
          links: [
            { text: 'Governance', url: '/eng/corporation/sustain/governance' },
            { text: 'SKC DBL', url: '/eng/corporation/sustain/dbl' },
            { text: 'CSR', url: '/eng/corporation/sustain/csr' },
            { text: 'SHE', url: '/eng/corporation/sustain/she' },
            { text: 'Sustainability Report', url: '/eng/corporation/sustain/report' },
            { text: 'Climate Action', url: '/eng/corporation/sustain/climate' },
            { text: 'Supply Chain', url: '/eng/corporation/sustain/supply-chain' },
            { text: 'Human Rights', url: '/eng/corporation/sustain/human-rights' }
          ]
        },
        {
          title: 'Ethical Management',
          links: [
            { text: 'Ethics System', url: '/eng/corporation/ethics/management' },
            { text: 'Anti-Corruption', url: '/eng/corporation/ethics/anti-corruption' },
            { text: 'Reporting', url: '/eng/corporation/ethics/reporting' }
          ]
        },
        {
          title: 'Hiring',
          links: [
            { text: 'Recruit', url: '/eng/corporation/hiring/recruit' },
            { text: 'Talents', url: '/eng/corporation/hiring/talents' },
            { text: 'Process', url: '/eng/corporation/hiring/process' },
            { text: 'HR Policies', url: '/eng/corporation/hiring/hr-policies' }
          ]
        }
      ]
    },
    creation: {
      title: 'Creation',
      categories: [
        {
          title: 'Rechargeable Battery',
          url: '/eng/creation/battery',
          icon: '🔋',
          products: [
            { text: 'Copper Foil', url: '/eng/creation/battery/copper-foil' },
            { text: 'Silicon Anodes', url: '/eng/creation/battery/silicon-anodes' }
          ]
        },
        {
          title: 'Semiconductor',
          url: '/eng/creation/semiconductor',
          icon: '💎',
          products: [
            { text: 'Glass Substrate', url: '/eng/creation/semiconductor/glass-substrate' },
            { text: 'Test Socket', url: '/eng/creation/semiconductor/test-socket' },
            { text: 'CMP Pad', url: '/eng/creation/semiconductor/cmp-pad' },
            { text: 'CMP Slurry', url: '/eng/creation/semiconductor/cmp-slurry' },
            { text: 'Blank Mask', url: '/eng/creation/semiconductor/blank-mask' }
          ]
        },
        {
          title: 'Eco-friendly',
          url: '/eng/creation/eco-friendly',
          icon: '🌍',
          products: [
            { text: 'High-strength PBAT', url: '/eng/creation/eco-friendly/pbat' },
            { text: 'Biodegradable LIMEX', url: '/eng/creation/eco-friendly/limex' }
          ]
        }
      ]
    },
    communication: {
      title: 'Communication',
      sections: [
        {
          title: 'Newsroom',
          links: [
            { text: 'All News', url: '/eng/communication/newsroom' },
            { text: 'Battery', url: '/eng/communication/newsroom/battery' },
            { text: 'Semiconductor', url: '/eng/communication/newsroom/semiconductor' },
            { text: 'Eco-friendly', url: '/eng/communication/newsroom/eco-friendly' },
            { text: 'ESG', url: '/eng/communication/newsroom/esg' },
            { text: 'Inside SKC', url: '/eng/communication/newsroom/inside-skc' }
          ]
        },
        {
          title: 'PR',
          links: [
            { text: 'Press Releases', url: '/eng/communication/pr/press-releases' },
            { text: 'Media Library', url: '/eng/communication/pr/media-library' },
            { text: 'Focus SKC', url: '/eng/communication/pr/focus-skc' }
          ]
        },
        {
          title: 'IR',
          links: [
            { text: 'Financial Info', url: '/eng/communication/ir/financial' },
            { text: 'Dividend Info', url: '/eng/communication/ir/dividend' },
            { text: 'IR Archive', url: '/eng/communication/ir/archive' }
          ]
        }
      ]
    },
    career: {
      title: 'Career',
      links: [
        { text: 'SKC Family', url: '/eng/career/family' },
        { text: 'Life', url: '/eng/career/life' },
        { text: 'Jobs', url: '/eng/career/jobs' },
        { text: 'Recruitment', url: '/eng/career/recruitment' }
      ]
    }
  };
  next();
});

// Routes
app.get('/', (req, res) => res.redirect('/eng'));
app.get('/eng', (req, res) => {
  res.render('pages/home', {
    title: 'SKC - Global ESG Material Solutions Company',
    page: 'home'
  });
});

// Section routes
app.use('/eng/corporation', corporationRoutes);
app.use('/eng/creation', creationRoutes);
app.use('/eng/communication', communicationRoutes);
app.use('/eng/career', careerRoutes);

// Sitemap
app.get('/eng/sitemap', (req, res) => {
  res.render('pages/sitemap', {
    title: 'Site Map - SKC',
    page: 'sitemap'
  });
});

// 404 Error handler
app.use((req, res) => {
  res.status(404).render('errors/404', {
    title: 'Page Not Found - SKC',
    page: '404'
  });
});

// 500 Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('errors/500', {
    title: 'Server Error - SKC',
    page: '500',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════╗
║   SKC Full-Stack Website Server Running      ║
╠═══════════════════════════════════════════════╣
║   Port: ${PORT}                                   ║
║   Environment: ${process.env.NODE_ENV || 'development'}                   ║
║   URL: http://localhost:${PORT}/eng              ║
╚═══════════════════════════════════════════════╝
  `);
});

module.exports = app;
