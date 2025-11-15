const careerData = require('../data/career.json');

module.exports = {
  family: (req, res) => res.render('pages/career/family', { title: 'SKC Family - Career', page: 'career-family', section: 'career', data: careerData.family }),
  life: (req, res) => res.render('pages/career/life', { title: 'Life at SKC - Career', page: 'career-life', section: 'career', data: careerData.life }),
  jobs: (req, res) => res.render('pages/career/jobs', { title: 'Job Opportunities - SKC', page: 'career-jobs', section: 'career', jobs: careerData.jobs }),
  recruitment: (req, res) => res.render('pages/career/recruitment', { title: 'Recruitment Process - SKC', page: 'career-recruitment', section: 'career', data: careerData.recruitment })
};
