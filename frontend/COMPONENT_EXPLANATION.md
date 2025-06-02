# Key Components and Functionality (Redesigned)

This document provides a brief explanation of the key React components used in the redesigned Social Media Manager Dashboard with its three-column layout.

## Core Layout Structure

1. **`src/App.jsx`**
   * **Functionality:** The main root component that implements the three-column layout structure.
   * **Key Features:**
     * Uses styled-components to create the three-column grid
     * Manages responsive behavior for different screen sizes
     * Renders the three main layout components: LeftNavigation, MainContent, and ChatInterface

## Layout Components

Located in `src/components/layout/`, these components represent the three main columns of the dashboard.

1. **`LeftNavigation.jsx`**
   * **Functionality:** Provides navigation and recent activity display in the left column (20% width).
   * **Key Features:**
     * Displays the Concitor TCG logo
     * Renders the main navigation menu with icons and labels
     * Shows a list of recent LinkedIn posts
     * Collapses to an icon-only navigation on mobile devices

2. **`MainContent.jsx`**
   * **Functionality:** Displays the main dashboard content in the middle column (50% width).
   * **Key Features:**
     * Shows the dashboard title and time period filters
     * Displays key performance metrics in a grid
     * Shows trending LinkedIn posts with engagement statistics
     * Includes an analytics visualization placeholder
     * Lists upcoming scheduled reposts
     * Adapts layout for different screen sizes

3. **`ChatInterface.jsx`**
   * **Functionality:** Provides a chat interface for interacting with the trend assistant in the right column (30% width).
   * **Key Features:**
     * Displays conversation history between user and AI assistant
     * Shows system messages with trending post information
     * Provides a message input field with send button
     * Uses avatar images to distinguish between user and assistant messages
     * Can be hidden on smaller screens

## Styling and Responsiveness

1. **`src/styles/GlobalStyles.js`**
   * **Functionality:** Defines global CSS styles using styled-components.
   * **Key Features:**
     * Sets the base color scheme (black background, gray elements, orange accents)
     * Implements custom scrollbars for a modern look
     * Provides responsive font sizing
     * Adds transition effects for smoother interactions
     * Improves focus styles for accessibility

## Responsive Behavior

The three-column layout adapts to different screen sizes as follows:

* **Desktop (>768px):** Full three-column layout with 20%/50%/30% width distribution
* **Tablet (576px-768px):** Left column collapses to icon-only navigation, middle column expands
* **Mobile (<576px):** Right column (chat) is hidden, left column remains as icon-only, middle column takes remaining space

## Mock Data Integration

The dashboard uses mock data from `src/data/mockData.js` to simulate:

* Trending LinkedIn posts
* Performance metrics
* Scheduled reposts
* User engagement statistics

This allows for a realistic demonstration of the dashboard's functionality without requiring a backend connection.

## Visual Design Elements

* **Cards and Panels:** Used throughout to group related information
* **Icons:** SVG icons for navigation and interaction elements
* **Color Coding:** Orange highlights for important information and active states
* **Avatar Images:** Used in the chat interface to distinguish between user and assistant
* **Responsive Typography:** Font sizes adjust based on screen size

The redesigned dashboard maintains all the LinkedIn trend-jacking functionality of the original implementation while adopting the three-column layout structure requested by the user, with clear separation between navigation, main content, and chat interaction areas.
