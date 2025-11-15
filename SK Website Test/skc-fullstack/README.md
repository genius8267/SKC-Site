# SKC Full-Stack Website

A complete reverse-engineered and rebuilt version of the SKC corporate website (https://www.skc.kr/) using modern web technologies and a comprehensive design system.

## 🏗️ Architecture

**Full-stack Node.js application** with server-side rendering, mirroring the original Java/Spring + JSP architecture.

### Technology Stack

- **Backend**: Node.js + Express.js
- **Template Engine**: EJS (server-side rendering)
- **Design System**: CSS Custom Properties (325+ design tokens)
- **Data Layer**: JSON files (upgradeable to PostgreSQL/MongoDB)
- **Architecture**: MVC pattern (Routes → Controllers → Views)

### Project Structure

```
skc-fullstack/
├── server/
│   ├── app.js                 # Main Express application
│   ├── routes/                # URL routing (4 main sections)
│   │   ├── corporation.js     # Corporation section (21 routes)
│   │   ├── creation.js        # Creation section (10 routes)
│   │   ├── communication.js   # Communication section (15 routes)
│   │   └── career.js          # Career section (4 routes)
│   ├── controllers/           # Business logic
│   │   ├── corporationController.js
│   │   ├── creationController.js
│   │   ├── communicationController.js
│   │   └── careerController.js
│   └── data/                  # JSON data stores
│       ├── company.json       # Company information
│       ├── products.json      # Product catalog
│       ├── news.json          # News articles
│       └── career.json        # Career opportunities
├── views/
│   ├── layouts/
│   │   ├── main.ejs          # Master layout
│   │   └── partials/
│   │       ├── header.ejs     # Site header with navigation
│   │       ├── footer.ejs     # Site footer
│   │       └── page-nav.ejs   # Secondary navigation
│   ├── pages/                 # Page templates (56+ pages)
│   │   ├── home.ejs
│   │   ├── corporation/       # 21 pages
│   │   ├── creation/          # 10 pages
│   │   ├── communication/     # 15 pages
│   │   └── career/            # 4 pages
│   └── errors/
│       ├── 404.ejs
│       └── 500.ejs
├── public/
│   ├── css/
│   │   ├── design-system.css  # Design tokens (325 lines)
│   │   ├── components.css     # Reusable components (513 lines)
│   │   ├── layout.css         # Page layouts (327 lines)
│   │   └── responsive.css     # Breakpoints (326 lines)
│   ├── js/
│   │   └── main.js            # Client-side interactivity
│   └── assets/                # Images, fonts, icons
├── .env                       # Environment configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (check with `node -v`)
- npm or pnpm package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd "/Users/joowonlee/Library/CloudStorage/GoogleDrive-jwlee8267@gmail.com/My Drive/10_Intune Labs Codebase/SK Website Test/skc-fullstack"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Edit `.env` file
   - Set `PORT` (default: 3000)
   - Set `NODE_ENV` (development/production)

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open in browser**:
   ```
   http://localhost:3000/eng
   ```

### Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests (when implemented)
npm run lint       # Lint JavaScript files
```

## 🎨 Design System

### Design Token Categories

**Colors** (24 tokens):
- Primary/Secondary brand colors
- Text colors (primary, secondary, tertiary, disabled)
- Background colors (primary, secondary, tertiary)
- State colors (success, warning, error, info)
- Border colors

**Typography** (11 scales):
- Font sizes: 12px - 64px (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)
- Font families: sans-serif, serif, monospace
- Line heights: tight, normal, relaxed, loose

**Spacing** (17 scales):
- 4px increments: 0.25rem - 16rem (space-1 to space-64)

**Effects**:
- Shadows: sm, md, lg, xl
- Border radius: sm, md, lg, xl, full
- Transitions: base, slow, fast

### Using Design Tokens

All CSS should reference design system variables:

```css
/* ✅ GOOD - Uses design tokens */
.my-component {
  color: var(--color-primary);
  padding: var(--space-4);
  font-size: var(--font-size-lg);
  border-radius: var(--border-radius-md);
  transition: var(--transition-base);
}

/* ❌ BAD - Ad-hoc values */
.my-component {
  color: #e00529;
  padding: 1rem;
  font-size: 18px;
  border-radius: 8px;
  transition: 0.2s ease;
}
```

## 📁 Site Structure (56+ Pages)

### 1. Corporation (21 pages)

**Intro** (3 pages):
- `/eng/corporation/intro/company` - Company overview
- `/eng/corporation/intro/ceo` - CEO message
- `/eng/corporation/intro/history` - Company history

**Sustain** (6 pages):
- `/eng/corporation/sustain/governance` - Governance
- `/eng/corporation/sustain/ethics` - Ethics
- `/eng/corporation/sustain/compliance` - Compliance
- `/eng/corporation/sustain/environment` - Environment
- `/eng/corporation/sustain/safety` - Safety
- `/eng/corporation/sustain/reports` - Sustainability reports

**Info** (6 pages):
- `/eng/corporation/info/business` - Business overview
- `/eng/corporation/info/affiliates` - Affiliates
- `/eng/corporation/info/location` - Locations
- `/eng/corporation/info/awards` - Awards
- `/eng/corporation/info/patents` - Patents
- `/eng/corporation/info/certifications` - Certifications

**Hiring** (6 pages):
- `/eng/corporation/hiring/recruit` - Recruitment
- `/eng/corporation/hiring/welfare` - Welfare
- `/eng/corporation/hiring/culture` - Culture
- `/eng/corporation/hiring/diversity` - Diversity
- `/eng/corporation/hiring/development` - Career development
- `/eng/corporation/hiring/faq` - FAQ

### 2. Creation (10 pages)

**Battery** (3 pages):
- `/eng/creation/battery` - Battery materials overview
- `/eng/creation/battery/copper-foil` - Copper foil
- `/eng/creation/battery/silicon-anodes` - Silicon anodes

**Semiconductor** (5 pages):
- `/eng/creation/semiconductor` - Semiconductor overview
- `/eng/creation/semiconductor/glass-substrate` - Glass substrate
- `/eng/creation/semiconductor/test-socket` - Test socket
- `/eng/creation/semiconductor/cmp-pad` - CMP pad
- `/eng/creation/semiconductor/blank-mask` - Blank mask

**Eco-friendly** (2 pages):
- `/eng/creation/eco-friendly` - Eco-friendly overview
- `/eng/creation/eco-friendly/pbat` - PBAT materials

### 3. Communication (15 pages)

**PR** (5 pages):
- `/eng/communication/pr/news` - Press releases
- `/eng/communication/pr/news/:id` - News detail
- `/eng/communication/pr/media` - Media resources
- `/eng/communication/pr/spokesperson` - Spokesperson
- `/eng/communication/pr/contact` - Contact

**Newsroom** (5 pages):
- `/eng/communication/newsroom` - All news
- `/eng/communication/newsroom/battery` - Battery news
- `/eng/communication/newsroom/semiconductor` - Semiconductor news
- `/eng/communication/newsroom/eco-friendly` - Eco-friendly news
- `/eng/communication/newsroom/esg` - ESG news

**IR** (5 pages):
- `/eng/communication/ir/investor` - Investor relations
- `/eng/communication/ir/financial` - Financial reports
- `/eng/communication/ir/announcements` - Announcements
- `/eng/communication/ir/stock` - Stock information
- `/eng/communication/ir/calendar` - IR calendar

### 4. Career (4 pages)

- `/eng/career/jobs` - Job openings
- `/eng/career/recruitment` - Recruitment process
- `/eng/career/family` - SKC family
- `/eng/career/apply` - Apply now

## 🔧 Adding New Pages

### Step-by-Step Process

1. **Add route** in `server/routes/{section}.js`:
   ```javascript
   router.get('/new-page', sectionController.newPage);
   ```

2. **Add controller method** in `server/controllers/{section}Controller.js`:
   ```javascript
   newPage: (req, res) => {
     res.render('pages/{section}/new-page', {
       title: 'Page Title - SKC',
       section: 'section-name',
       data: dataFile.newPage
     });
   }
   ```

3. **Add data** in `server/data/{relevant}.json`:
   ```json
   {
     "newPage": {
       "title": "Page Title",
       "content": "Page content..."
     }
   }
   ```

4. **Create template** in `views/pages/{section}/new-page.ejs`:
   ```html
   <section class="section">
     <div class="section__container">
       <div class="section-heading">
         <h1 class="section-heading__title"><%= data.title %></h1>
       </div>
       <!-- Page content using design system classes -->
     </div>
   </section>
   ```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads at `/eng`
- [ ] All navigation links work
- [ ] Corporation pages render correctly
- [ ] Creation pages render correctly
- [ ] Communication pages render correctly
- [ ] Career pages render correctly
- [ ] 404 page shows for invalid routes
- [ ] Design system tokens applied consistently
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Client-side JavaScript initializes

### Key Routes to Test

```bash
# Homepage
curl http://localhost:3000/eng

# Corporation
curl http://localhost:3000/eng/corporation/intro/company

# Creation
curl http://localhost:3000/eng/creation/battery

# Communication
curl http://localhost:3000/eng/communication/newsroom

# Career
curl http://localhost:3000/eng/career/jobs

# 404 Error
curl http://localhost:3000/eng/nonexistent
```

## 📊 Data Structure

Data is stored in JSON files for easy editing. Example structure:

```json
{
  "intro": {
    "company": {
      "title": "About SKC",
      "subtitle": "Global ESG material solutions company",
      "description": "SKC is a leading...",
      "stats": {
        "establishment": "1976",
        "employees": "2,910",
        "sales": "1.7 trillion won",
        "ceo": "Woncheol Park"
      },
      "values": ["Innovation", "Integrity", "Excellence"]
    }
  }
}
```

### Upgrading to Database

When ready to migrate from JSON to a database:

1. Install database driver:
   ```bash
   npm install pg  # PostgreSQL
   # or
   npm install mongodb  # MongoDB
   ```

2. Update `.env` with database URL

3. Replace data imports in controllers with database queries

4. Keep the same controller/view structure (no template changes needed)

## 🚢 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production` in `.env`
- [ ] Update `SESSION_SECRET` to strong random value
- [ ] Configure CORS if needed
- [ ] Set up SSL/TLS certificates
- [ ] Configure reverse proxy (nginx/Apache)
- [ ] Set up process manager (PM2/systemd)
- [ ] Configure logging
- [ ] Set up monitoring
- [ ] Configure database connection pooling
- [ ] Enable gzip compression (already in `app.js`)
- [ ] Set security headers (already using Helmet)

### Example PM2 Configuration

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start server/app.js --name skc-website

# Save process list
pm2 save

# Auto-start on reboot
pm2 startup
```

### Example Nginx Configuration

```nginx
server {
    listen 80;
    server_name skc.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /css/ {
        root /path/to/skc-fullstack/public;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /js/ {
        root /path/to/skc-fullstack/public;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔒 Security

- **Helmet**: Security headers configured
- **CORS**: Configurable via `.env`
- **Input Validation**: Required for all form submissions
- **XSS Protection**: EJS auto-escapes output by default
- **HTTPS**: Required in production
- **Secrets**: Never commit `.env` files

## 📝 License

Reverse-engineered from https://www.skc.kr/ for educational purposes.

## 🤝 Contributing

1. Follow the design system - use tokens, not ad-hoc values
2. Use existing template patterns
3. Test all routes before committing
4. Update this README when adding major features

## 📞 Support

For questions about this implementation, review:
- This README
- Design system: `public/css/design-system.css`
- Template examples: `views/pages/`
- Original site: https://www.skc.kr/

---

**Last Updated**: 2025-11-16
**Version**: 1.0.0
**Node.js**: 18+
**Total Pages**: 56+
