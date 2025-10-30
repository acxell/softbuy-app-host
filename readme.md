# Softbuy - React E-commerce Website

A modern e-commerce website built with React, Redux, and Tailwind CSS.

## Features

- 🛒 Shopping cart functionality
- 🔍 Product search
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 State management with Redux
- 📦 Product categories
- 🖼️ Image slider
- 🚀 Fast performance with Vite

## Tech Stack

- React
- Redux for state management
- Tailwind CSS for styling
- Vite as build tool
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/acxell/softbuy-app.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## Project Structure

```
softbuy-react/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── redux/         # Redux store, actions, and reducers
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── public/            # Public assets
└── index.html         # HTML template
```

## Components

- `Navbar`: Navigation bar with cart and menu
- `Cart`: Shopping cart component
- `Categories`: Product categories display
- `ProductItems`: Product listing
- `Searchbar`: Product search functionality
- `Slider`: Image carousel
- `Footer`: Website footer

## State Management

Redux is used for state management with the following features:
- Cart state management
- Product filtering
- Search functionality
- Drawer/modal state

## Styling

The project uses Tailwind CSS for styling with custom configuration:
- Custom color schemes
- Responsive design
- Custom fonts (IBM Plex Serif, Poppins)

## License

This project is licensed under the MIT License - see the LICENSE file for details.