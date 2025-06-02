# Social Media Manager Dashboard (Redesigned)

This project is a frontend dashboard for social media management, focusing on LinkedIn trend-jacking. It features a three-column layout inspired by modern chat applications, with navigation on the left, main content in the middle, and a chat interface on the right.

## Features

- **Three-Column Layout:**
  - **Left Column:** Navigation menu and recent LinkedIn posts
  - **Middle Column:** Main dashboard content (trending posts, metrics, analytics)
  - **Right Column:** Chat interface for interacting with the trend-jacking assistant

- **Dashboard Homepage:** Displays trending LinkedIn posts, performance metrics, a scheduling calendar, and quick filters.
- **Post Discovery Panel:** Features trending algorithm visualization, industry-specific filters, engagement statistics preview, and full post content preview.
- **Repost Management Section:** Includes a queue of selected posts, customization options, and scheduling functionality with time optimization suggestions.
- **Analytics View:** Shows performance comparison, audience growth metrics, and engagement rate visualizations.

## Design

- **Color Scheme:** Black background (#121212), Gray elements (#2A2A2A), Orange accents/outlines (#FF6B00).
- **Inspiration:** Clean, minimal design inspired by Claude.ai and modern chat applications.
- **Logo:** Concitor TCG logo in the navigation bar.
- **Responsive:** Adapts to different screen sizes with appropriate column adjustments.

## Technical Specifications

- **Framework:** React.js with Vite (JavaScript template)
- **Styling:** styled-components
- **Data:** Mock data implemented for demonstration purposes.
- **Backend:** No backend implementation (frontend only).

## Project Structure

```
social-media-dashboard/
├── public/
├── src/
│   ├── assets/       # Static assets like images
│   ├── components/   # Reusable React components
│   │   ├── dashboard/      # Components for the main dashboard homepage
│   │   ├── post_discovery/ # Components for the post discovery panel
│   │   ├── repost_management/ # Components for the repost management section
│   │   ├── analytics/      # Components for the analytics view
│   │   ├── layout/         # Layout components (LeftNavigation, MainContent, ChatInterface)
│   │   └── Navbar.jsx
│   ├── data/         # Mock data files (e.g., mockData.js)
│   ├── styles/       # Global styles and themes (e.g., GlobalStyles.js)
│   ├── views/        # Top-level page components
│   ├── App.jsx       # Main application component with three-column layout
│   └── main.jsx      # Entry point for the React application
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md         # This file
└── vite.config.js
```

## Setup and Installation

1.  **Prerequisites:**
    *   Node.js (version 18+ or 20+ recommended)
    *   npm (usually comes with Node.js)

2.  **Clone the repository (or download the source code):**
    ```bash
    # If using git
    # git clone <repository_url>
    # cd social-media-dashboard
    ```
    If you received a zip file, extract it and navigate into the `social-media-dashboard` directory.

3.  **Install dependencies:**
    Open your terminal in the `social-media-dashboard` project root and run:
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically on `http://localhost:5173`.
    The application will automatically reload if you make changes to the code.

5.  **Replace Logo Placeholder:**
    *   Navigate to `src/components/layout/LeftNavigation.jsx`.
    *   Replace the `<Logo>concitor <span>TCG</span></Logo>` div with your actual logo image if needed.

## Building for Production

To create a production build, run:
```bash
npm run build
```
This will create a `dist` folder with the optimized static assets for your application.

## Layout Structure

The dashboard follows a three-column layout:

1. **Left Column (20% width):**
   - Contains the logo, main navigation menu, and recent posts section
   - Collapses to an icon-only navigation on smaller screens

2. **Middle Column (50% width):**
   - Contains the main dashboard content
   - Shows metrics, trending posts, analytics, and scheduled reposts
   - Adjusts to take more space on smaller screens

3. **Right Column (30% width):**
   - Contains the chat interface for interacting with the trend assistant
   - Shows conversation history and allows sending messages
   - Can be hidden on smaller screens

This layout structure provides clear separation between navigation, content, and interaction areas while maintaining a modern, clean aesthetic.
