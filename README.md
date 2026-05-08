# Aneek Kumar - Developer Portfolio

A modern, premium, fully responsive developer portfolio website built with React JS, featuring stunning animations, dark mode, and a futuristic design.

## 🚀 Features

- **Modern UI/UX**: Dark modern design with neon blue, cyan, and purple gradients
- **Glassmorphism**: Beautiful glassmorphism cards and effects
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Custom Cursor**: Animated custom cursor with hover effects
- **Loading Screen**: Elegant loading animation on startup
- **Scroll Progress**: Visual scroll progress indicator
- **Smooth Scrolling**: Smooth navigation between sections
- **Contact Form**: EmailJS integrated contact form
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for fast loading

## 🛠️ Tech Stack

- **Frontend**: React JS (Create React App)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Type Animation**: React Type Animation
- **Email**: EmailJS
- **SEO**: React Helmet Async
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.js         # Landing section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Projects.js     # Projects portfolio
│   ├── Journey.js      # Experience timeline
│   ├── Achievements.js # Certifications & awards
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Site footer
│   ├── Navigation.js   # Main navigation
│   ├── ScrollProgress.js # Scroll progress bar
│   ├── LoadingScreen.js  # Loading animation
│   └── CustomCursor.js   # Custom cursor component
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── data/               # Static data
│   ├── projects.js     # Project data
│   ├── skills.js       # Skills data
│   ├── timeline.js     # Experience data
│   └── achievements.js # Achievement data
├── layouts/            # Layout components
├── hooks/              # Custom hooks
├── animations/         # Animation utilities
├── assets/             # Images and media
└── styles/             # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aneek-portfolio.git
   cd aneek-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the values in `src/components/Contact.js`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📱 Sections

- **Hero**: Animated introduction with typing effect
- **About**: Personal information and statistics
- **Skills**: Interactive skill categories with progress bars
- **Projects**: Portfolio showcase with filtering
- **Journey**: Animated timeline of experience
- **Achievements**: Certifications and milestones
- **Contact**: Glassmorphism contact form
- **Footer**: Social links and back-to-top

## 🎨 Customization

### Colors
The theme uses a dark color palette with neon accents. You can customize colors in:
- `tailwind.config.js` - Add custom colors
- Component files - Update gradient classes

### Content
Update the following files to customize content:
- `src/data/projects.js` - Add your projects
- `src/data/skills.js` - Update your skills
- `src/data/timeline.js` - Add your experience
- `src/data/achievements.js` - Add your achievements
- Component files - Update personal information

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the service ID, template ID, and public key in `Contact.js`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### Other Platforms
The build output in the `build` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React and modern web technologies.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
