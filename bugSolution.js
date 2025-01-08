```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only update the count when needed 
    // Example of updating only after 1 second. 
    const id = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearTimeout(id); // cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```