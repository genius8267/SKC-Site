const newsData = require('../data/news.json');

module.exports = {
  newsroom: {
    index: (req, res) => res.render('pages/communication/newsroom/index', { title: 'Newsroom - SKC', page: 'comm-newsroom', section: 'communication', articles: newsData.articles }),
    battery: (req, res) => res.render('pages/communication/newsroom/category', { title: 'Battery News - SKC', page: 'comm-newsroom-battery', section: 'communication', category: 'battery', articles: newsData.articles.filter(a => a.category === 'battery') }),
    semiconductor: (req, res) => res.render('pages/communication/newsroom/category', { title: 'Semiconductor News - SKC', page: 'comm-newsroom-semi', section: 'communication', category: 'semiconductor', articles: newsData.articles.filter(a => a.category === 'semiconductor') }),
    ecoFriendly: (req, res) => res.render('pages/communication/newsroom/category', { title: 'Eco-friendly News - SKC', page: 'comm-newsroom-eco', section: 'communication', category: 'eco-friendly', articles: newsData.articles.filter(a => a.category === 'eco-friendly') }),
    esg: (req, res) => res.render('pages/communication/newsroom/category', { title: 'ESG News - SKC', page: 'comm-newsroom-esg', section: 'communication', category: 'esg', articles: newsData.articles.filter(a => a.category === 'esg') }),
    insideSKC: (req, res) => res.render('pages/communication/newsroom/category', { title: 'Inside SKC - SKC', page: 'comm-newsroom-inside', section: 'communication', category: 'inside-skc', articles: newsData.articles.filter(a => a.category === 'inside-skc') })
  },
  pr: {
    pressReleases: (req, res) => res.render('pages/communication/pr/press-releases', { title: 'Press Releases - SKC', page: 'comm-pr-releases', section: 'communication', releases: newsData.pressReleases }),
    mediaLibrary: (req, res) => res.render('pages/communication/pr/media-library', { title: 'Media Library - SKC', page: 'comm-pr-media', section: 'communication', media: newsData.media }),
    focusSKC: (req, res) => res.render('pages/communication/pr/focus-skc', { title: 'Focus SKC - SKC', page: 'comm-pr-focus', section: 'communication', stories: newsData.focusStories }),
    newsDetail: (req, res) => {
      const article = newsData.articles.find(a => a.id == req.params.id);
      if (!article) return res.status(404).render('errors/404', { title: 'Article Not Found', page: '404' });
      res.render('pages/communication/pr/news-detail', { title: article.title + ' - SKC', page: 'comm-news-detail', section: 'communication', article });
    }
  },
  ir: {
    financial: (req, res) => res.render('pages/communication/ir/financial', { title: 'Financial Information - SKC', page: 'comm-ir-financial', section: 'communication', data: newsData.ir.financial }),
    dividend: (req, res) => res.render('pages/communication/ir/dividend', { title: 'Dividend Information - SKC', page: 'comm-ir-dividend', section: 'communication', data: newsData.ir.dividend }),
    archive: (req, res) => res.render('pages/communication/ir/archive', { title: 'IR Archive - SKC', page: 'comm-ir-archive', section: 'communication', data: newsData.ir.archive })
  }
};
