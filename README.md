# Pair Programming Lab: Client Side Fetch with React Hooks

## Objective

Work in teams of 2-3 using the driver-navigator method to build an interactive ingredient selector that fetches meal suggestions from the MealDB API. You'll practice async/await, fetch, useEffect, useState, and conditional rendering while styling your interface with Tailwind CSS.

### Style Guide

- Model your tailwind styling off of [Tailwind UI elements](https://tailwindcss.com/plus/ui-blocks) or any other component library that you like

---

## Overview & Timeline

- **Setup Phase:** 10 minutes (fork, discuss workflow, add collaborators)
- **Planning Phase:** 15 minutes (review requirements, API exploration, identify challenges)
- **Coding Cycles:** 3-4 cycles (12-15 minutes each + 3-5 minute transitions) _take breaks when needed_
- **Debrief:** 15 minutes

---

## Roles & Responsibilities

### Driver

- Controls the keyboard and types the code
- Focuses on implementation details (writing JSX, Tailwind classes, component props)
- Asks clarifying questions if implementation details are unclear
- Does NOT plan ahead—focuses on the current task
- **Pushes the commit** when the cycle is complete

### Navigator

- Guides the driver through the current task
- Provides specific, step-by-step instructions ("Create a new file called MealList.jsx in the components folder")
- Explains the "why" behind decisions ("We're using useEffect here to trigger the API call when the ingredient prop changes")
- Watches for logic errors, accessibility issues, and coding patterns
- Stays present and engaged—ask the driver clarifying questions to deepen understanding

### Next Navigator (Team of 3 only)

- Plans the high-level next steps after the current cycle
- Reviews the API documentation and response structure
- Researches solutions to potential challenges (e.g., "How do we handle loading states in React?")
- Prepares a 2-3 minute briefing on the next implementation step
- Asks clarifying questions to refine the team's approach

---

## Setup Phase (10 minutes)

### One team member (the **Repo Owner**):

1. Fork the provided starter repo to their GitHub account
2. Add all other team members as **Collaborators** (Settings → Collaborators → Add people)
3. Share the fork URL in your team chat
4. All team members clone the repo locally: `git clone <repo-url>`

### All team members:

- Verify that the starter Next.js project runs: `npm run dev`
- Test the API endpoint in your browser: `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
- Observe the JSON structure returned

---

## Phase 1: Planning (15 minutes)

**All team members participate.**

### Step 1: Understand the Data Flow

Review how the application will work:

(optional: draw this out on a piece of paper provided by your instructor)

1. User sees a list of ingredient buttons/cards
2. User clicks an ingredient
3. App fetches meals containing that ingredient from the API
4. App displays the meal suggestions
5. User can select a different ingredient to see new suggestions

The starter repo contains `app/data/ingredients.json` with common ingredients:

### Step 2: Explore the API

Test the API with different ingredients:

- `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
- `https://www.themealdb.com/api/json/v1/1/filter.php?i=beef`

Notice and discuss the response structure

### Step 3: Component Architecture Planning

Sketch your component hierarchy (for example):

1. **`IngredientSelector.jsx`** – Displays ingredient buttons/cards
   - Props: `ingredients` array, `onSelectIngredient` callback, `selectedIngredient`
   - Renders clickable elements for each ingredient
   - Shows visual feedback for selected state

2. **`MealList.jsx`** – Fetches and displays meals
   - Props: `ingredient` (string)
   - State: `meals` (array), `isLoading` (boolean), `error` (string)
   - Uses useEffect to fetch when ingredient changes
   - Handles loading, error, and empty states

3. **`MealCard.jsx`** – Displays a single meal
   - Props: meal object (strMeal, strMealThumb, idMeal)
   - Renders image, title, and any additional UI

4. **Main Page Component** – Orchestrates everything
   - State: `selectedIngredient` (string)
   - Passes data and callbacks to child components
   - Manages the overall layout

### Step 4: Plan Your Implementation Cycles

Document your plan:

TEAM PLAN:

- Cycle 1 (Driver: [name]): Set up state management and ingredient selection

- Cycle 2 (Driver: [name]): Implement API fetching logic

- Cycle 3 (Driver: [name]): Handle loading states and display meals

- Cycle 4 (Driver: [name]): Polish UI and error handling

---

## Phase 2: Coding Cycles (3-4 cycles of 12-15 minutes each)

### General Structure of Each Cycle

- 12-15 minutes: Driver + Navigator actively code
- 3-5 minutes: Transition, commit, and Next Navigator briefing
- Roles rotate

### Cycle Structure & Role Rotation

**Example for a team of 3:**

- Cycle 1: Alice (driver), Bob (navigator), Carol (next navigator)
- Cycle 2: Bob (driver), Carol (navigator), Alice (next navigator)
- Cycle 3: Carol (driver), Alice (navigator), Bob (next navigator)

**Example for a team of 2:**

- Cycle 1: Alex (driver), Jordan (navigator)
- Cycle 2: Jordan (driver), Alex (navigator)
- Cycle 3: Alex (driver), Jordan (navigator)

### During Each Coding Session

**Navigator:**

- Be specific with instructions: "Add `const [selectedIngredient, setSelectedIngredient] = useState(null)` at the top of the component"
- Explain the reasoning: "We're initializing with null because no ingredient is selected at the start"
- Reference the plan and API structure: "Remember, the API returns a meals array, so we need to check if it exists"
- Troubleshoot together: "Let's add a console.log to see what data we're getting back"
- Point out patterns: "This is where useEffect's dependency array prevents infinite loops"
- Be ok with asking if they have any ideas when you feel stuck or unsure

**Driver:**

- Type the code the Navigator is guiding you through
- Ask clarifying questions: "Should this be null or an empty string?"
- Work at a steady pace—accuracy over speed
- Read error messages aloud when they appear
- Keep the browser console open to catch issues early

**Next Navigator (Team of 3):**

- Review what's been accomplished and what's next
- Look up documentation for upcoming challenges
- Prepare specific implementation details for the next cycle
- Consider edge cases: "What happens if the API is down?"

### Transition Between Cycles

1. **Driver:** Stage and commit your work:

   ```bash
   git add .
   git commit -m "[Brief description]" -m "Contributor Name"
   git push origin main
   ```

2. IF USING GIT WORKFLOW: **All team members:** Pull the latest changes:

   ```bash
   git pull origin main
   ```

3. **Next Navigator:** Give a 2-3 minute briefing on the next cycle's objectives

4. **Rotate roles** and start the next cycle

---

## Commit Message Convention

Keep commit messages clear and descriptive:

- `Cycle 1: Add ingredient selector with state management`
- `Cycle 2: Implement API fetching with useEffect`
- `Cycle 3: Display meal cards with loading states`
- `Cycle 4: Add error handling and UI polish`

---

## Phase 3: Debrief (10 minutes)

### Technical Reflection

- **useEffect Dependencies:** How did the dependency array affect when your API calls were made?
- **Async in React:** What challenges did you face using async/await within useEffect?
- **State Timing:** How did you handle rapid clicking between ingredients?
- **Error Handling:** What types of errors did you encounter and how did you handle them?

### State Management

- **Lifting State:** Why did we keep `selectedIngredient` in the parent component?
- **Multiple States:** How did `isLoading`, `error`, and `meals` states work together?
- **State Updates:** Did you encounter any issues with stale state? How did you resolve them?

### API Integration

- **Response Handling:** How did you handle the API returning `null` vs an empty array?
- **Network Issues:** What happens if the user loses internet connection?
- **Performance:** Would caching previous results improve the user experience?

### Component Design

- **Separation of Concerns:** How did separating fetch logic from display logic help?
- **Props vs State:** When did you use props vs local state?
- **Reusability:** Could MealCard be reused in other parts of the app?

### Process Reflection

- Which role (driver/navigator) felt most natural to you?
- How did planning before coding affect your implementation?
- What would you do differently in the next pair programming session?
- Did committing after each cycle help track progress?

---

## Extension Challenges (If Time Permits)

1. **Search Input:** Add a text input to search for custom ingredients not in the list
2. **Multiple Selection:** Allow selecting multiple ingredients (requires different API endpoint)
3. **Favorite Meals:** Add ability to favorite meals and persist in localStorage
4. **Meal Details:** Fetch full recipe when clicking on a meal (requires second API call)
5. **Loading Skeletons:** Replace spinner with skeleton UI that matches card layout
6. **Intersection Observer:** Implement lazy loading for meal images
7. **URL State:** Sync selected ingredient with URL parameters for shareable links

---

## Common Gotchas & Tips

### useEffect Issues

- **Infinite loops:** Always include proper dependencies
- **Memory leaks:** Clean up async operations if component unmounts
- **Race conditions:** Handle rapid state changes with cleanup or AbortController

### API Handling

- **Null checks:** The API might return `null` instead of empty array
- **CORS:** The MealDB API should work from localhost without issues
- **Rate limiting:** Be mindful of making too many requests during development

### React Best Practices

- **Keys in lists:** Always use stable, unique keys (idMeal, not index)
- **Conditional rendering:** Check for null/undefined before accessing properties
- **Event handlers:** Use arrow functions or bind correctly to maintain context

### Tailwind Tips

- **Responsive design:** Use md: and lg: prefixes for breakpoints
- **Custom colors:** Stick to Tailwind's default palette for consistency
- **Utility conflicts:** Order matters when combining utilities

---

## Resources

### API Documentation

- **MealDB API:** https://www.themealdb.com/api.php
- **Test Endpoint:** https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken

### React Documentation

- **useEffect Hook:** https://react.dev/reference/react/useEffect
- **useState Hook:** https://react.dev/reference/react/useState
- **Synchronizing with Effects:** https://react.dev/learn/synchronizing-with-effects
- **You Might Not Need an Effect:** https://react.dev/learn/you-might-not-need-an-effect

### Tailwind CSS

- **Documentation:** https://tailwindcss.com/docs
- **Grid Layout:** https://tailwindcss.com/docs/grid-template-columns
- **Responsive Design:** https://tailwindcss.com/docs/responsive-design

### Additional Resources

- **Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Async/Await:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- **Git Collaboration:** https://docs.github.com/en/get-started/quickstart/github-flow

---

## Submission

1. **Code Submission:**
   - Ensure all code is committed and pushed to your team's GitHub fork
   - Update the README with team members' names and any setup instructions

2. **Individual Reflection:**
   - Write a point form reflection on your pair programming experience
   - Include: what you learned, challenges faced, and how you'll apply these concepts to Week 8
   - Post reflection in the teams channel thread with a link to your team's repository

---

## Tips for Success

### Communication

- **Be specific:** "Add useState at line 5" is better than "add state somewhere"
- **Explain why:** Share the reasoning behind your decisions
- **Ask questions:** If something isn't clear, speak up immediately
- **Stay engaged:** Even when not driving, actively participate

### Technical

- **Console first:** Use console.log liberally to understand data flow
- **Small steps:** Test each small change before moving on
- **Read errors:** Error messages often tell you exactly what's wrong
- **Use DevTools:** React DevTools and Network tab are your friends

### Collaboration

- **Respect roles:** Let the driver drive and navigator navigate
- **Be patient:** Everyone learns at different speeds
- **Share knowledge:** Explain concepts to deepen understanding
- **Celebrate wins:** Acknowledge when something works!

---

## Final Notes

This lab is designed to prepare you for Week 8's individual assignment. The patterns you practice here—useEffect for side effects, async/await for API calls, state management for UI updates, and conditional rendering—are exactly what you'll need for the shopping list meal suggestions feature.

Remember: The goal isn't just to finish the code, but to understand the patterns and be able to implement them independently. Take time to understand not just _what_ you're building, but _why_ each piece works the way it does.

Good luck, and happy coding! 🚀
