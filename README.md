# Trimly - Premium URL Shortener

<div align="center">

![Trimly](https://img.shields.io/badge/Trimly-2.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-38b2ac?style=for-the-badge&logo=tailwindcss)

**The modern URL shortener built for teams who demand more.** Shorten links, track analytics, and optimize conversions with style.

[Installation](#-installation) • [Features](#-features) • [Quick Start](#-quick-start) • [Contributing](#-contributing)

</div>

---

## About Trimly

Trimly is a modern, high-performance URL shortening platform designed for professionals, marketers, and development teams. Create custom branded links, track real-time analytics, and gain actionable insights into your link performance—all from a sleek, intuitive interface.

### Why Trimly?

- **Lightning Fast** - Built with Vite for blazing-fast development and production performance
- **Developer Friendly** - Clean React architecture with modern best practices
- **Real-time Analytics** - Track your links as they perform
- **Beautiful UI** - Crafted with TailwindCSS for a premium look and feel
- **Reliable & Scalable** - Ready to handle high-volume link creation and tracking

---

## ✨ Features

- 🔗 **One-Click URL Shortening** - Paste any long URL and get a shortened link instantly
- 📊 **Real-time Analytics** - Track clicks, views, and engagement metrics
- 🎯 **Link History** - View all your shortened links in an organized table
- 🎨 **Modern UI/UX** - Glass-morphism design with smooth animations
- ⚡ **Instant Feedback** - Responsive forms with real-time validation
- 📱 **Fully Responsive** - Works seamlessly across desktop, tablet, and mobile
- 🔐 **Production Ready** - Optimized builds and robust error handling

---

## 🛠 Tech Stack

| Technology                 | Purpose                                         |
| -------------------------- | ----------------------------------------------- |
| **React 19.2**             | UI framework with latest compiler optimizations |
| **Vite 8.0**               | Ultra-fast build tool and dev server            |
| **TailwindCSS 4.3**        | Utility-first CSS framework                     |
| **Lucide React**           | Beautiful, customizable icons                   |
| **JavaScript (ES Module)** | Modern, modular codebase                        |
| **ESLint**                 | Code quality and consistency                    |

---

## 📦 Installation

### Prerequisites

- Node.js 16+ or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd URL-Shortener
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

4. **Start your backend server**
   ```bash
   # Make sure your backend is running on http://localhost:3000
   node server.js  # or your backend startup command
   ```

---

## 🚀 Quick Start

### Development

```bash
# Start development server with Hot Module Replacement
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Lint code and check for issues
npm lint
```

---

## 📋 Project Structure

```
URL-Shortener/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   └── handler/
│       └── DataFetcher.js      # API data fetching utilities
├── public/                      # Static assets
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
└── README.md                   # This file
```

---

## 🔌 API Integration

Trimly connects to a backend server for URL shortening and history management.

### Endpoints

| Method | Endpoint                        | Purpose                        |
| ------ | ------------------------------- | ------------------------------ |
| `POST` | `http://localhost:3000`         | Submit long URL for shortening |
| `GET`  | `http://localhost:3000/history` | Fetch all shortened links      |

### Request Format

```javascript
// POST request to shorten URL
fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `fullURL=${encodeURIComponent(longURL)}`,
});
```

---

## 🎨 Customization

### Styling

- Global styles are in `src/index.css`
- TailwindCSS is configured with utilities for glass-morphism effects and custom animations
- Modify `tailwind.config.js` to customize colors, spacing, and typography

### Components

The main app component (`App.jsx`) includes:

- **Hero Section** - Eye-catching header with brand messaging
- **URL Input Form** - Intuitive form for shortening links
- **History Table** - Organized display of shortened links

---

## ⚡ Performance

Trimly leverages modern optimization techniques:

- **React Compiler** - Automatically optimizes component rendering
- **Vite** - Sub-millisecond HMR (Hot Module Replacement)
- **Code Splitting** - Optimized bundle sizes for faster downloads
- **CSS Optimization** - TailwindCSS tree-shaking removes unused styles

---

## 🐛 Troubleshooting

### Backend Not Connected

If you see connection errors, ensure:

1. Your backend server is running on `http://localhost:3000`
2. CORS is properly configured on your backend
3. Check browser console for detailed error messages

### Development Server Issues

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Run `npm lint` before committing
- Write clear, descriptive commit messages
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💬 Support & Feedback

Have questions or suggestions? We'd love to hear from you!

- **Report Issues** - Open a GitHub issue with clear details
- **Feature Requests** - Share your ideas for improving Trimly
- **Questions** - Reach out via [your-contact-info]

---

<div align="center">

**_ Author - Mashrafi Mahin _**

[⬆ Back to top](#)

</div>
