# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React applications: an infinite loop caused by an improperly used `useEffect` hook.  The `useEffect` hook is powerful but requires careful attention to dependencies to avoid unintended side effects.

The `bug.js` file contains the problematic code, while `bugSolution.js` shows the corrected version.

**Problem:** The `useEffect` hook in `bug.js` attempts to update the `count` state within its own callback.  This creates an infinite loop because each update triggers a re-render, which in turn re-executes the `useEffect` hook, triggering another update, and so on.

**Solution:** The `bugSolution.js` file demonstrates the correct approach. A dependency array is used to control when the `useEffect` hook runs. Adding a condition to prevent updates is another effective solution. The key is to avoid updating state within the useEffect's callback unless the effect requires it in its logic. 