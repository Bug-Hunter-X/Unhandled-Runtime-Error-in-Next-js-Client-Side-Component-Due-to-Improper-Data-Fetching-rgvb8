```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because `fetch` is not allowed in the client-side component
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us.</p>
      {/* Error will occur when trying to display json data */}
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}
```