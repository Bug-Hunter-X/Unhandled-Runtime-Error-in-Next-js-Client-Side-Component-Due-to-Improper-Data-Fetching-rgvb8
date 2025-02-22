# Unhandled Runtime Error in Next.js Client-Side Component

This repository demonstrates a common error in Next.js applications where developers attempt to directly use `fetch` within a client-side component to retrieve data.  This results in a runtime error because data fetching should primarily happen on the server-side.

## Problem

The `about.js` file contains a `fetch` call within the component's body.  This is incorrect because client-side components execute in the user's browser, and network requests made directly within these components can lead to unexpected errors and poor performance.

## Solution

The `aboutSolution.js` demonstrates the proper way to fetch data. Instead of making the API call directly within the component, we utilize Next.js's `getStaticProps` or `getServerSideProps` functions to fetch the data on the server before rendering the page.