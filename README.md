# DomainesMajd - Premium Moroccan Avocados

A modern, multilingual React website for DomainesMajd, Morocco's premier avocado producer and exporter. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![DomainesMajd Screenshot](https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1600)

## Features

- 🌐 Multilingual support (English, French, Spanish)
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🎨 Beautiful animations with Framer Motion
- 🎯 SEO optimized
- 🚀 Fast loading with Vite
- 💅 Styled with Tailwind CSS
- 📦 Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/domainesmajd.git
cd domainesmajd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Project Structure

```
domainesmajd/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts
│   ├── locales/        # Translation files
│   ├── pages/          # Page components
│   └── App.tsx         # Root component
├── public/             # Public assets
└── package.json        # Dependencies and scripts
```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/domainesmajd.git
git push -u origin main
```

3. Install the gh-pages package:
```bash
npm install gh-pages --save-dev
```

4. Add deployment scripts to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Netlify

1. Create a new site on Netlify
2. Connect to your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/domainesmajd](https://github.com/yourusername/domainesmajd)