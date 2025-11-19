# 🌟 Harsh Omar - 3D Developer Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-3D%20Interactive-blue?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**🚀 An immersive 3D portfolio showcasing modern web development skills**

[🌐 Live Demo](https://harsh-omar-portfolio.netlify.app) • [📧 Contact](mailto:harsh@example.com) • [💼 LinkedIn](https://linkedin.com/in/harsh-omar)

</div>

---

## 🎯 **What Makes This Portfolio Special**

This isn't just another portfolio website - it's a **3D interactive experience** that showcases cutting-edge web technologies and modern development practices. Built from the ground up to impress recruiters, clients, and fellow developers.

### ✨ **Key Highlights**

- 🎮 **Interactive 3D Models** - Engaging visual experience with Three.js
- ⚡ **Lightning Fast** - Optimized performance with Vite
- 📱 **Fully Responsive** - Perfect on all devices
- 🎨 **Modern UI/UX** - Clean, professional design
- 💳 **Payment Integration** - Razorpay "Buy Me Coffee" feature
- 📊 **Real-time Analytics** - Live view counter with Supabase
- 🚀 **Production Ready** - Deployed on Netlify

---

## 🛠️ **Tech Stack**

<div align="center">

| Frontend                                                                                                              | Backend & Database                                                                                        | Deployment                                                                                             | Payment                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)                      | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white) | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white) | ![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=white) |
| ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)             | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)    | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)          |                                                                                                           |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)    |                                                                                                        |                                                                                                           |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)     |                                                                                                           |                                                                                                        |                                                                                                           |

</div>

---

## 🎬 **Features Showcase**

### 🏠 **Hero Section**

- **3D Computer Model** with interactive animations
- **Dynamic Typography** with smooth transitions
- **Particle Background** for immersive experience

### 👨‍💻 **About Section**

- **Professional Introduction** with personal touch
- **Skills Visualization** with animated cards
- **Experience Timeline** with interactive elements

### 🎓 **Education & Experience**

- **Academic Background** with institution details
- **Professional Journey** with role descriptions
- **Skill Progression** timeline

### 💼 **Projects Portfolio**

- **Interactive Project Cards** with 3D effects
- **Live Demo Links** and GitHub repositories
- **Technology Stack** for each project
- **Detailed Descriptions** and achievements

### 🎯 **Special Features**

#### 💰 **Buy Me a Coffee Integration**

```javascript
// Razorpay Payment Integration
const handlePayment = async () => {
  const options = {
    key: process.env.VITE_RAZORPAY_KEY_ID,
    amount: 10000, // ₹100 in paise
    currency: "INR",
    name: "Harsh Omar",
    description: "Buy Me a Coffee ☕",
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
```

#### 📊 **Live View Counter**

```javascript
// Real-time Analytics with Supabase
const incrementViewCount = async () => {
  const { data } = await supabase.rpc("increment_view_count");

  setViewCount(data);
};
```

#### 📧 **Contact Form**

- **EmailJS Integration** for direct messaging
- **Form Validation** with error handling
- **Success Notifications** and feedback

---

## 🚀 **Getting Started**

### **Prerequisites**

```bash
Node.js >= 16.0.0
npm >= 8.0.0
Git
```

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/harsh1010888/portoflio.git
   cd portoflio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   # EmailJS Configuration
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id

   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Razorpay Configuration
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Open in Browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**

```bash
npm run build
npm run preview
```

---

## 📁 **Project Structure**

```
📦 portoflio/
├── 🗂️ public/
│   ├── 🎨 desktop_pc/          # 3D model assets
│   ├── 🌍 planet/              # Planet model assets
│   └── 📄 _redirects           # Netlify redirects
├── 🗂️ src/
│   ├── 🎨 assets/              # Images and icons
│   ├── 🧩 components/          # React components
│   │   ├── 🏠 Hero.jsx
│   │   ├── 👤 About.jsx
│   │   ├── 💼 Works.jsx
│   │   ├── 📧 Contact.jsx
│   │   ├── ☕ BuyMeCoffee.jsx
│   │   ├── 📊 SimpleViewCounter.jsx
│   │   └── 🎮 canvas/          # 3D components
│   ├── 🎯 constants/           # App constants
│   ├── 🔧 hoc/                 # Higher-order components
│   ├── 🎬 utils/               # Utility functions
│   ├── 📱 App.jsx              # Main app component
│   └── 🎨 index.css            # Global styles
├── ⚙️ server/                  # Express server (optional)
├── 📊 netlify.toml             # Netlify configuration
├── ⚡ vite.config.js           # Vite configuration
└── 🎨 tailwind.config.cjs     # Tailwind configuration
```

---

## 🎨 **Customization Guide**

### **Personal Information**
Update your details in `src/constants/index.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title", 
  description: "Your description...",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
};
```

### **Projects**
Add your projects in the same constants file:

```javascript
export const projects = [
  {
    name: "Project Name",
    description: "Project description...",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" }
    ],
    image: projectImage,
    source_code_link: "https://github.com/...",
    live_demo_link: "https://your-demo.com"
  }
];
```

### **Skills & Technologies**
Update your tech stack:

```javascript
export const technologies = [
  {
    name: "Technology Name",
    icon: technologyIcon,
  }
];
```

---

## 🌐 **Deployment**

### **Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy automatically on git push

### **Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **Manual Deployment**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## 🔧 **Environment Variables**

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APP_EMAILJS_SERVICE_ID` | EmailJS service ID for contact form | ✅ |
| `VITE_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | ✅ |
| `VITE_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | ✅ |
| `VITE_SUPABASE_URL` | Supabase project URL for analytics | ⚪ |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | ⚪ |
| `VITE_RAZORPAY_KEY_ID` | Razorpay key for payments | ⚪ |

---

## 📈 **Performance Optimizations**

- ⚡ **Code Splitting** with React.lazy()
- 🖼️ **Image Optimization** with modern formats
- 📦 **Bundle Analysis** with Vite
- 🚀 **Lazy Loading** for 3D models
- 💾 **Caching Strategy** for static assets
- 🎯 **SEO Optimization** with meta tags

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 **Contact & Support**

<div align="center">

**Harsh Omar**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/harsh-omar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harsh1010888)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:harsh@example.com)

**⭐ If you like this project, please give it a star! ⭐**

</div>

---

## 🎯 **Roadmap**

- [ ] 🎮 Add more interactive 3D elements
- [ ] 🌙 Dark/Light theme toggle  
- [ ] 🗣️ Multi-language support
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🎵 Background music toggle
- [ ] 🔍 Advanced search functionality
- [ ] 📊 Google Analytics integration
- [ ] 🤖 AI-powered chatbot

---

<div align="center">

**Made with ❤️ by Harsh Omar**

*This portfolio represents my passion for modern web development and 3D experiences.*

</div>
npm run build
```

Drag the `dist/` folder onto Netlify → Deploys → Deploy manually. (Repeat for every change.)

### E. Optional `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### F. Custom Domain

Site Settings → Domain management → Add custom domain → Configure DNS → Enable HTTPS.

### G. Updating

Push to the tracked branch → Netlify auto deploys. To roll back: Deploys → select older deploy → Publish.

### H. Troubleshooting

| Problem            | Cause                     | Fix                                           |
| ------------------ | ------------------------- | --------------------------------------------- |
| 404 on refresh     | Missing `_redirects`      | Add file & redeploy                           |
| Env vars ignored   | Added after first build   | Clear cache & redeploy                        |
| White screen       | Import/runtime error      | Check browser console                         |
| Email not sending  | Wrong EmailJS IDs         | Re-check and match `VITE_` prefix             |
| Assets not loading | Wrong path / not imported | Keep in `public/` or import from `src/assets` |

### I. TL;DR Quick Deploy

```
Add public/_redirects -> /* /index.html 200
git push
Netlify: new site from Git
Build: npm run build
Publish dir: dist
Add VITE_ env vars
Clear cache & redeploy
```

### J. Resume Link Note

Because you use a Google Drive link, updating the resume requires no new deploy—just replace the file in Drive.

## 🔧 Common Fixes

| Issue                    | Fix                                                       |
| ------------------------ | --------------------------------------------------------- |
| White screen             | Check console; usually missing import/export in constants |
| Images not showing       | Path incorrect or asset not imported in `assets/index.js` |
| Email not sending        | Wrong EmailJS service/template/public key                 |
| 404 on refresh (Netlify) | Missing `_redirects` in `public/`                         |

## 🙋 Contact Section

Configured with EmailJS – ensure variables are set.  
If you want a server-based form later, you can swap easily without UI change.

---

## Supabase View Counter (optional)

If you prefer a frontend-only persistent view counter backed by Supabase, add the following environment variables to your Vite env (do NOT commit your .env):

```
VITE_SUPABASE_URL=https://apsvdcpcjjorvyivfymn.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

This project can use either the recommended `views` table or your existing table `views` (you said you created it). The `ViewCounterModule.jsx` component is already configured to target **`views`** and the integer column **`view`**.

If you haven't created the table yet, run this SQL (recommended):

```sql
create extension if not exists pgcrypto;

create table if not exists views (
  id uuid primary key default gen_random_uuid(),
  count integer default 0 not null
);

insert into views (count) values (0) on conflict do nothing;
```

If you prefer to use your existing table `views` with the column `view`, ensure it has a primary key `id` (UUID) — this makes updates safe. Example SQL to add an id PK if missing:

```sql
alter table public.views
  add column if not exists id uuid default gen_random_uuid();

alter table public.views
  add constraint if not exists views_pkey primary key (id);
```

Atomic increment (recommended for high concurrency):
You can add a Postgres RPC that increments and returns the new count in a single statement. Example:

```sql
create or replace function increment_view_count()
returns integer as $$
  update views set view = view + 1
  returning view;
$$ language sql stable;
```

The `ViewCounterModule.jsx` will try to call the `increment_view_count` RPC first. If it doesn't exist, it falls back to a select -> update/insert flow on `views`.

Permissions note:

- If Row Level Security (RLS) is enabled on your table, add policies that allow the `anon` role to `SELECT`, `INSERT`, and `UPDATE`, or create an RPC and allow the anon role to execute it.
- For a simple personal portfolio with low traffic, using the anon key with open policies is common. For higher security, restrict writes and expose a protected RPC.

Finally, set these env vars in your deployed site (Netlify/Vercel/Render) as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

If you need help adding a versioned resume config, an embedded preview, or project screenshots, let me know.

Happy building!
