```javascript
// pages/aboutSolution.js

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```