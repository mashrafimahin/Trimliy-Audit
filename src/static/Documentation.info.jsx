// Documentation content and structure for the project

export const DocumentationSections = {
  gettingStarted: {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    description: "Begin your journey with the URL Shortener application",
    content: `
      # Getting Started Guide
      
      ## Prerequisites
      - Node.js (v14 or higher)
      - npm or yarn package manager
      - Git for version control
      
      ## Installation Steps
      1. Clone the repository
      2. Install dependencies: \`npm install\`
      3. Start development server: \`npm run dev\`
      4. Open browser at \`http://localhost:5173\`
      
      ## Initial Setup
      - Configure your environment variables
      - Set up database connection
      - Initialize user authentication
      - Create your first shortened URL
    `,
    subsections: [
      { title: "Prerequisites", id: "prerequisites" },
      { title: "Installation", id: "installation" },
      { title: "Configuration", id: "configuration" },
      { title: "First Steps", id: "first-steps" },
    ],
  },

  features: {
    id: "features",
    title: "Features",
    icon: "✨",
    description: "Explore all available features",
    content: `
      # Features Overview
      
      ## Core Features
      - **URL Shortening**: Create custom short URLs from long links
      - **Analytics Dashboard**: Track click statistics and user engagement
      - **Link Management**: Edit, delete, and organize your links
      - **User Accounts**: Secure authentication and profile management
      - **Billing System**: Flexible pricing plans and payment processing
      
      ## Advanced Features
      - **Custom Domains**: Use your own domain for shortened URLs
      - **QR Codes**: Generate QR codes for easy sharing
      - **Link Expiration**: Set expiration dates on links
      - **Password Protection**: Secure links with passwords
      - **Export Data**: Download analytics and link data
    `,
    subsections: [
      { title: "Core Features", id: "core-features" },
      { title: "Analytics", id: "analytics" },
      { title: "Link Management", id: "link-management" },
      { title: "User Features", id: "user-features" },
      { title: "Premium Features", id: "premium-features" },
    ],
  },

  components: {
    id: "components",
    title: "Components",
    icon: "🧩",
    description: "Documentation for reusable components",
    content: `
      # Component Documentation
      
      ## Available Components
      - **Button**: Customizable button component with variants
      - **Input**: Form input field with validation
      - **Card**: Container component for content
      - **Modal/PopUp**: Dialog and popup components
      - **Table**: Data display table component
      - **Navbar**: Navigation bar component
      - **Sidebar**: Side navigation component
      - **Chart**: Data visualization component
      - **Loader**: Loading indicator component
      - **LinkBox**: Shortened URL display component
      
      ## Component Usage
      Each component is located in \`src/components/\` directory.
      Import and use as needed in your pages and layouts.
      
      ### Props and Customization
      Components accept props for customization:
      - \`className\`: Tailwind CSS classes
      - \`variant\`: Style variants
      - \`disabled\`: Enable/disable state
      - \`loading\`: Loading state
    `,
    subsections: [
      { title: "Common Components", id: "common-components" },
      { title: "Form Components", id: "form-components" },
      { title: "Display Components", id: "display-components" },
      { title: "Best Practices", id: "component-best-practices" },
    ],
  },

  apiReference: {
    id: "api-reference",
    title: "API Reference",
    icon: "📡",
    description: "API endpoints and usage guide",
    content: `
      # API Reference Guide
      
      ## Authentication Endpoints
      - \`POST /api/auth/login\`: User login
      - \`POST /api/auth/signup\`: User registration
      - \`POST /api/auth/logout\`: User logout
      - \`POST /api/auth/refresh\`: Token refresh
      
      ## URL Management Endpoints
      - \`POST /api/urls/shorten\`: Create shortened URL
      - \`GET /api/urls\`: List user's URLs
      - \`GET /api/urls/:id\`: Get URL details
      - \`PUT /api/urls/:id\`: Update URL
      - \`DELETE /api/urls/:id\`: Delete URL
      
      ## Analytics Endpoints
      - \`GET /api/analytics/:urlId\`: Get URL analytics
      - \`GET /api/analytics/overview\`: Dashboard overview
      - \`GET /api/analytics/reports\`: Generate reports
      
      ## Billing Endpoints
      - \`GET /api/billing/plans\`: Get pricing plans
      - \`POST /api/billing/subscribe\`: Subscribe to plan
      - \`GET /api/billing/invoice\`: Get invoices
    `,
    subsections: [
      { title: "Authentication", id: "auth-endpoints" },
      { title: "URLs", id: "url-endpoints" },
      { title: "Analytics", id: "analytics-endpoints" },
      { title: "Billing", id: "billing-endpoints" },
    ],
  },

  stateManagement: {
    id: "state-management",
    title: "State Management",
    icon: "⚙️",
    description: "Redux Toolkit store and slices documentation",
    content: `
      # State Management Guide
      
      ## Redux Store Structure
      Location: \`src/app/store/Store.js\`
      
      ## Available Slices
      - **AuthenticationSlice**: User authentication state
      - **LogInSlice**: Login form state
      - **SignUpSlice**: Sign-up form state
      - **UrlControllerSlice**: URL management state
      - **OverviewSlice**: Dashboard overview state
      - **BillingSettingSlice**: Billing preferences
      - **FlowControlSlice**: Application flow control
      
      ## Using State
      Import \`useSlices\` hook from \`src/hooks/useSlices.js\`
      
      \`\`\`javascript
      const { data, dispatch } = useSlices("sliceName");
      \`\`\`
      
      ## Dispatching Actions
      Use the dispatch function to trigger actions and update state.
      Each slice contains its own actions and thunks.
    `,
    subsections: [
      { title: "Store Setup", id: "store-setup" },
      { title: "Slices Overview", id: "slices-overview" },
      { title: "Using State", id: "using-state" },
      { title: "Async Thunks", id: "async-thunks" },
    ],
  },

  hooks: {
    id: "hooks",
    title: "Custom Hooks",
    icon: "🪝",
    description: "Documentation for custom React hooks",
    content: `
      # Custom Hooks Guide
      
      ## Available Hooks
      
      ### useSlices
      Access Redux state and dispatch actions
      \`\`\`javascript
      const { data, dispatch } = useSlices("sliceName");
      \`\`\`
      
      ### useValidation
      Form validation logic and utilities
      \`\`\`javascript
      const { validate, errors } = useValidation();
      \`\`\`
      
      ## Creating Custom Hooks
      1. Create a new file in \`src/hooks/\`
      2. Export a function starting with \`use\`
      3. Use React hooks inside your custom hook
      4. Return state and methods
      
      ## Best Practices
      - Keep hooks focused on a single concern
      - Extract reusable logic into hooks
      - Name hooks with 'use' prefix
      - Document hook parameters and return values
    `,
    subsections: [
      { title: "useSlices", id: "useslices-hook" },
      { title: "useValidation", id: "usevalidation-hook" },
      { title: "Creating Hooks", id: "creating-hooks" },
    ],
  },

  styling: {
    id: "styling",
    title: "Styling & Theming",
    icon: "🎨",
    description: "CSS, Tailwind, and theme configuration",
    content: `
      # Styling Guide
      
      ## CSS Structure
      - **index.css**: Global styles and resets
      - **theme.css**: Theme variables and configurations
      - Component-level Tailwind classes
      
      ## Tailwind CSS
      - Utility-first CSS framework
      - Responsive design utilities
      - Custom color schemes and spacing
      - See \`tailwind.config.js\` for configuration
      
      ## Theme System
      Custom themes defined in \`src/styles/theme.css\`
      - Light theme (default)
      - Dark theme (optional)
      - Custom color palette
      - Typography scale
      
      ## Class Merger
      Use \`ClassMerger\` utility for combining classes:
      \`\`\`javascript
      import ClassMerger from './utils/ClassMerger';
      const classes = ClassMerger('base-class', conditional && 'extra-class');
      \`\`\`
    `,
    subsections: [
      { title: "Tailwind Setup", id: "tailwind-setup" },
      { title: "Theme Configuration", id: "theme-config" },
      { title: "Custom Styles", id: "custom-styles" },
      { title: "Utilities", id: "styling-utilities" },
    ],
  },

  deployment: {
    id: "deployment",
    title: "Deployment",
    icon: "🚀",
    description: "Build and deployment guide",
    content: `
      # Deployment Guide
      
      ## Build Process
      \`\`\`bash
      npm run build
      \`\`\`
      
      ## Build Output
      - Optimized production build
      - Minified JavaScript and CSS
      - Output in \`dist/\` directory
      
      ## Deployment Options
      - Vercel: Direct integration with GitHub
      - Netlify: Drop in \`dist/\` folder
      - Docker: Containerize the application
      - Traditional Server: Copy \`dist/\` to web root
      
      ## Environment Variables
      Create \`.env\` file with:
      - API_URL: Backend API endpoint
      - APP_NAME: Application name
      - NODE_ENV: Development/Production
      
      ## Performance Optimization
      - Code splitting and lazy loading
      - Image optimization
      - Caching strategies
      - CDN integration
    `,
    subsections: [
      { title: "Building", id: "building" },
      { title: "Environment Setup", id: "env-setup" },
      { title: "Deployment Platforms", id: "deployment-platforms" },
      { title: "Optimization", id: "optimization" },
    ],
  },

  troubleshooting: {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: "🔧",
    description: "Common issues and solutions",
    content: `
      # Troubleshooting Guide
      
      ## Common Issues
      
      ### Issue: Port Already in Use
      **Solution**: Change Vite port in \`vite.config.js\` or kill process using port 5173
      
      ### Issue: Module Not Found
      **Solution**: Check import paths, ensure files exist, restart dev server
      
      ### Issue: Redux State Not Updating
      **Solution**: Verify action is dispatched, check slice configuration, inspect Redux DevTools
      
      ### Issue: Routes Not Working
      **Solution**: Ensure routes are defined in App.jsx, check path spelling
      
      ### Issue: Styling Issues
      **Solution**: Clear cache (\`npm cache clean\`), rebuild Tailwind, check CSS conflicts
      
      ## Performance Issues
      - Check network tab for slow requests
      - Analyze bundle size with build tools
      - Use React DevTools Profiler
      - Optimize images and assets
      
      ## Debugging
      - Browser DevTools Console
      - Redux DevTools Extension
      - React DevTools Extension
      - Network debugging with Network tab
    `,
    subsections: [
      { title: "Common Issues", id: "common-issues" },
      { title: "Performance", id: "performance-issues" },
      { title: "Debugging", id: "debugging-tools" },
    ],
  },

  projectStructure: {
    id: "project-structure",
    title: "Project Structure",
    icon: "📁",
    description: "Understanding the directory layout",
    content: `
      # Project Structure Overview
      
      ## Directory Layout
      
      \`\`\`
      src/
      ├── app/                 # Redux store and slices
      │   ├── features/       # Redux slice files
      │   └── store/          # Redux store configuration
      ├── assets/             # Static assets (images, icons)
      ├── components/         # Reusable UI components
      ├── features/           # Feature pages (Dashboard)
      ├── handler/            # Business logic and API handlers
      ├── hooks/              # Custom React hooks
      ├── layout/             # Page layout components
      ├── pages/              # Main page components
      ├── static/             # Static data and info files
      ├── styles/             # Global CSS and theme
      ├── typography/         # Typography components
      ├── utils/              # Utility functions and helpers
      ├── App.jsx             # Main App component
      └── main.jsx            # React DOM render entry
      \`\`\`
      
      ## Key Files
      - \`vite.config.js\`: Vite configuration
      - \`tailwind.config.js\`: Tailwind CSS config
      - \`package.json\`: Dependencies and scripts
      - \`.env\`: Environment variables (create locally)
    `,
    subsections: [
      { title: "Directory Structure", id: "directory-structure" },
      { title: "File Organization", id: "file-organization" },
      { title: "Naming Conventions", id: "naming-conventions" },
    ],
  },

  bestPractices: {
    id: "best-practices",
    title: "Best Practices",
    icon: "⭐",
    description: "Development best practices and conventions",
    content: `
      # Best Practices Guide
      
      ## Code Organization
      - One component per file
      - Keep components focused and reusable
      - Separate business logic from UI
      - Use meaningful file names
      
      ## Component Development
      - Use functional components with hooks
      - Memoize expensive components with React.memo
      - Lazy load components with React.lazy
      - Handle loading and error states
      
      ## State Management
      - Use Redux for global state
      - Keep local state when possible
      - Use selectors for derived state
      - Normalize state shape
      
      ## Performance
      - Use React.Suspense for code splitting
      - Optimize re-renders with useMemo
      - Lazy load routes
      - Minimize bundle size
      
      ## Security
      - Validate user input
      - Sanitize data from API
      - Use environment variables for sensitive data
      - Implement proper authentication
      
      ## Testing
      - Write unit tests for utilities
      - Test component behavior
      - Mock API calls
      - Use consistent test patterns
    `,
    subsections: [
      { title: "Code Quality", id: "code-quality" },
      { title: "Performance", id: "performance-best-practices" },
      { title: "Security", id: "security" },
      { title: "Testing", id: "testing" },
    ],
  },
};

export const DocumentationNavigation = [
  DocumentationSections.gettingStarted,
  DocumentationSections.features,
  DocumentationSections.components,
  DocumentationSections.apiReference,
  DocumentationSections.stateManagement,
  DocumentationSections.hooks,
  DocumentationSections.styling,
  DocumentationSections.projectStructure,
  DocumentationSections.deployment,
  DocumentationSections.troubleshooting,
  DocumentationSections.bestPractices,
];
