#!/bin/bash

# Navigate to src directory
cd src || exit

# Create folders
mkdir -p components pages

# Create component files
touch components/Navbar.jsx components/Footer.jsx

# Create page files
touch pages/Home.jsx pages/Chess.jsx pages/Language.jsx

# Create root-level files
touch App.jsx main.jsx

echo "✅ Directory structure and files created successfully."

