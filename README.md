# Asylum Data Dashboard

This project is a web app for visualizing asylum application data.  
Built with **React**, uses **Axios** for API calls, **Cypress** for e2e tests, and is deployed on **Netlify**.

---

## 🚀 Deployment

**Demo:** [https://asylum-fe.netlify.app/](https://asylum-fe.netlify.app/)

---

## 💡 Tech Stack

- **Languages:** HTML5, JavaScript, CSS
- **Framework:** React (with Vite)
- **Routing:** React Router DOM
- **Authentication:** Auth0 React SDK
- **HTTP Requests:** Axios
- **Data Visualization:** React Plotly.js, capitalizr
- **Testing:** Jest, React Testing Library, Cypress (end-to-end)
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Linting & Formatting:** ESLint (with plugins), Prettier

---

**Author:** Arkadiusz Rak (BloomTech Graduate)  
**Portfolio:** [kornet.dev](https://kornet.dev)  
**GitHub:** [github.com/Kornetas](https://github.com/Kornetas)  
**LinkedIn:** [arkadiusz-rak-807272306](https://www.linkedin.com/in/arkadiusz-rak-807272306/)

---

## ✅✅✅✅ What was done

### Finished tickets:

✅ **Completed Ticket 1: Landing Page Implementation**

What I did?

- Implemented full structure and layout of the Landing Page based on the provided reference screenshot.
- Used provided assets and React component imports (`barGraph`, `pieChart`, `lineGraph`, `paperStack`, etc.).
- Applied Tailwind CSS for styling with a custom design to avoid visual duplication of the sample project.
- Ensured all text content, headers, and sections match the original reference exactly.
- Added functional buttons:
  - "View the Data" navigates to the data page.
  - "Download the Data" triggers CSV export via custom hook.
  - "Read More" opens Human Rights First homepage in a new tab.
  - "Back to Top" smoothly scrolls to top.
- Component is fully functional and visually distinct from the reference version.

✅ **Completed Ticket 2: API Integration & Graphs Page Activation**

- Replaced test data with real API integration using Axios in AppContext.jsx.
- Implemented `getFiscalData`, `getCitizenshipResults`, and `fetchData` to pull data from:
  - /fiscalSummary
  - /citizenshipSummary
- Ensured `graphData` is correctly shaped with `yearResults` and `citizenshipResults` arrays.
- Added fallbacks for error handling (empty arrays or testData fallback in case of failure).
- Fixed access to the /graphs route by setting `isAuthenticated = true` in `Header.jsx`, which allowed protected components to render properly.
- Graph components now successfully display live data after API integration.

✅ **Completed Ticket 3: Auth0 Authentication & Profile Page**

- Integrated Auth0 authentication via @auth0/auth0-react
- Configured Auth0Provider with environment variables (.env)
- Implemented login/logout functionality with Auth0's useAuth0() hook
- Created LoggingButtons component for auth actions
- Navigation now conditionally displays "Profile" only when user is authenticated
- Built protected /profile page to show logged-in user’s name, email, and avatar
- Proper loading and not-authenticated states handled
- Everything works locally on http://localhost:5173 as expected

---

## ✅ Additional Testing

All main features have been tested with both unit and end-to-end tests to ensure reliability and stability.  
I have also performed manual tests to check the user experience and handle potential edge cases.

## 🧪 Tests

### Unit tests (Jest + React Testing Library)

- Components:
  - **GraphButtons**: rendering, click handlers, context integration.
  - **Loading**: loader visibility during API calls.
- Context:
  - **AppContext**: provides and consumes context, initial state.

### End-to-end tests (Cypress)

- **/graphs** page:
  - Switching between graphs with buttons, checking disabled/enabled state.
  - Loader appears during data loading.
  - Update Query fetches new data.
  - Clear Query wipes graph data and shows "No data" message.
  - Header changes when the graph type changes.
- **/home** page:
  - Buttons "View The Data", "Download The Data", "Read More", and "Back To Top" work as expected.
  - "Download The Data" starts a file download.
  - "Read More" reveals additional content or scrolls the page.

#### How to run tests

## 📌 Running Tests

````bash
  npm test

### Single Unit Test

To run a specific unit test file, use:

```bash
npx npx jest src/hooks/__tests__/useDownloadData.test.js

npx npx jest src/hooks/__tests__/useLocalStorage.test.js

````

### Watch Mode

Automatically rerun tests when files change:

```bash
npm run test:watch
```

### Cypress End-to-End Tests

**GUI Mode:**

```bash
npx cypress open
```

**Headless (CLI):**

```bash
npx cypress run
```

---

# Human Rights First: Asylum Report Generator

## Problem Statement

The Human Rights First (HRF) organization currently has a limited ability to provide user-friendly insights into their large dataset of asylum case decisions. Existing tools like the TRAC database have significant limitations, such as the inability to visualize trends over time or compare grant rates across different regions. This makes it difficult for journalists, researchers, and the general public (including asylum seekers and activists) to effectively analyze and draw insights from the data.

## North Star

The goal of this project is to create a search tool that gives users a more interactive and visual way to explore the asylum case data. Key features include:

- Generating real-time visualizations and graphs to represent trends over time
- Providing a heatmap to easily identify regions with high or low grant rates
- Allowing users to download the search results for further analysis

## Audiences

- Journalists
- Researchers
- General public (asylum seekers, activists, etc.)

## Users

- Administrators
  - Engineers who interact directly with infrastructure (no user authentication needed)
  - Add/manage data
- Public Users
  - Don't need to log in - just view and use the public web app
  - Display calendar dates vs. fiscal years in data (separate search options)
  - View pre-populated geographic regions based on sets of countries
  - View percentage of cases that were granted based on current search results
  - Save or print reports, charts, and/or graphs generated from a query

## Tickets

Here are summaries of the three tickets in the `tickets` directory, with links to the full ticket descriptions:

1. **Build Sprint 1: Landing Page**

   - [Ticket Description](tickets/1_firstTicket.md)
   - Deliver a landing page that matches the provided design screenshot, with a focus on the browser experience.

2. **Build Sprint 2: API Integration**

   - [Ticket Description](tickets/2_secondTicket.md)
   - Integrate the frontend application with an API to fetch data, and update the data visualizations to use the API data instead of the test data.

3. **Build Sprint 3: Authentication**
   - [Ticket Description](tickets/3_thirdTicket.md)
   - Integrate the Auth0 microservice to provide user authentication, and create a profile page that displays basic information about the logged-in user.

## Stretch Ticket

In addition to the three main tickets, there is also a stretch ticket available:

- **Stretch Ticket: Migrate to Next.js**
  - [Ticket Description](tickets/4_stretchTicketNEXTjs.md)
  - Migrate the current React application to Next.js to leverage server-side rendering, better performance, and routing capabilities.

## Resources

**The Setup for this project will require a new LTS Version of NodeJS to be installed. Node Version 20.x works well for this purpose.**

The following deployed site shows the exact deliverable and what you should be building:

- [Asylum Front End](https://asylum-fe.vercel.app)

## Getting Started

### Fork the Repository

First, fork this repository to your own GitHub account.

### Clone the Repository

Next, clone your forked repository to your local machine:

```
git clone https://github.com/{INSERT YOUR GITHUB USERNAME}/asylum-hrf-fe-starter.git
```

### Install Dependencies

Navigate to the project directory and install the dependencies:

```
cd asylum-hrf-fe-starter
npm install
```

### Start the Development Server

To start the development server, run:

```
npm run dev
```

This will start the development server then open the app in your web browser. Any changes you make to the code will automatically reload the page.

### Build the App

To create a production build of the app, run:

```
npm run build
```

This will create an optimized production build in the `dist` folder.
