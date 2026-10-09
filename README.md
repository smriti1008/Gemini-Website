# Gemini AI Clone

A responsive AI chatbot inspired by Google Gemini, built using React and the Gemini API. The application allows users to submit prompts, view AI-generated responses, and access their recent prompts through a sidebar.

## Features

* **AI-Powered Conversations:** Generate responses using the Gemini API.
* **Recent Prompts:** View previously submitted questions in the sidebar.
* **Dynamic Response Rendering:** Display AI responses with formatted text.
* **Loading Animation:** Show a loading indicator while waiting for responses.
* **Interactive User Interface:** Clean and intuitive chatbot layout.
* **React Context API:** Manage application state and share data across components.
* **Responsive Design:** Designed for a smooth user experience across screen sizes.

## Tech Stack

* **Frontend:** React.js, JavaScript, HTML5, CSS3
* **Build Tool:** Vite
* **AI Integration:** Google Gemini API
* **State Management:** React Context API
* **Version Control:** Git and GitHub

## Project Structure

```text
gemini-clone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   └── Sidebar/
│   ├── config/
│   │   └── gemini.js
│   ├── context/
│   │   └── context.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

*The folder structure may vary depending on your implementation.*

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd gemini-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Gemini API

Obtain an API key from [Google AI Studio](https://aistudio.google.com/).

Create a `.env` file in the project's root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Ensure that your `gemini.js` file reads the environment variable correctly.

**Security:** Never commit your API key to GitHub. Add `.env` to your `.gitignore` file. For a publicly deployed application, use a backend to protect your API key.

### 4. Run the Application

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## How It Works

1. The user enters a question in the chat input.
2. React Context manages the prompt, recent prompts, loading state, and response data.
3. The prompt is sent to the Gemini API through the `runChat` function.
4. The API response is processed and displayed in the chat interface.
5. Previously submitted prompts are stored in application state and displayed in the sidebar.

## Future Improvements

* Persistent chat history using local storage or a database.
* Markdown rendering and syntax highlighting for code responses.
* Error handling and retry functionality for failed API requests.
* Multiple conversation support.
* Dark mode and additional UI customization.
* Secure backend integration for API requests.

## Learning Outcomes

This project helped me practice React component architecture, Context API, asynchronous JavaScript, API integration, state management, and dynamic UI rendering.

## Author

**Smriti Singh**

* GitHub: [smriti1008](https://github.com/smriti1008)

---

If you found this project useful, consider giving the repository a star!

