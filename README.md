# Quiz App

A modern, responsive React quiz application with a beautiful UI and excellent user experience.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Timer Functionality**: 10-minute countdown timer with automatic quiz completion
- **Progress Tracking**: Visual progress bar and question counter
- **Interactive UI**: Smooth animations and hover effects
- **Score Calculation**: Instant results with percentage and performance feedback
- **Component Architecture**: Well-organized, reusable components
- **Modern Styling**: Beautiful gradient backgrounds and card-based design

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.jsx    # Welcome/landing page component
│   ├── QuizQuestion.jsx     # Individual question component
│   └── QuizResults.jsx      # Results display component
├── App.jsx                  # Main application component
├── index.css               # Global styles (Tailwind CSS)
└── main.jsx                # Application entry point
```

## 🎯 How It Works

### 1. Welcome Screen

- Displays quiz information (number of questions, time limit)
- Beautiful gradient background with modern card design
- Start button with hover animations

### 2. Quiz Interface

- **Header**: Shows current question number, timer, and progress
- **Progress Bar**: Visual indication of quiz completion
- **Question Display**: Clean, readable question format
- **Answer Options**: Interactive radio buttons with hover effects
- **Navigation**: Previous/Next buttons with proper state management

### 3. Results Screen

- **Score Display**: Large percentage with color-coded feedback
- **Performance Stats**: Correct vs incorrect answers
- **Motivational Messages**: Different messages based on performance
- **Restart Option**: Easy way to take the quiz again

## 🎨 Design Features

### Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Flexible Layout**: Adapts to different screen sizes
- **Touch Friendly**: Large touch targets for mobile users

### Visual Elements

- **Gradient Backgrounds**: Beautiful color transitions
- **Card-based Layout**: Clean, modern card design
- **Smooth Animations**: Hover effects and transitions
- **Color Coding**: Intuitive color scheme for different states

### Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **High Contrast**: Readable text and color combinations

## 🔧 Customization

### Adding Questions

Edit the `quizData` array in `App.jsx`:

```javascript
{
  id: 6,
  question: "Your question here?",
  options: [
    { id: "A", text: "Option A" },
    { id: "B", text: "Option B" },
    { id: "C", text: "Option C" },
    { id: "D", text: "Option D" }
  ],
  correctAnswer: "B"
}
```

### Styling

The app uses Tailwind CSS for styling. You can customize:

- Colors in the gradient backgrounds
- Card designs and shadows
- Button styles and animations
- Typography and spacing

### Timer Settings

Modify the timer duration by changing the `timeLeft` state initialization:

```javascript
const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **ES6+**: Modern JavaScript features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Built with React and Tailwind CSS
- Icons from Heroicons
- Inspired by modern web design principles
