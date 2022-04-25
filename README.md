# docs.musicfox.io

This is a [Next.js](https://nextjs.org) application hosted on the Tincre Vercel project. 

It does a **permanent 308 redirect for all slugs** after docs.musicfox.io/ to the [b00st.com community site](https://community.b00st.com).

## Getting started 

After cloning this repo install dependencies via:

```bash
yarn install -D
``` 

or 

```
npm install --save-dev 
```

## Running the development server 

```bash 
yarn run dev
```

or 

```bash 
npm run dev
``` 

## What this application does

This app serves as a simple redirect from our previous documentation created and hosted at
[Gitbook](https://gitbook.com) to our [docs/community Discourse](https://community.b00st.com).

### `next.config.js`

To add or remove redirection functionality simply edit the route configuration within
`next.config.js` under the `async redirects()` function return block.

## Contributions 

At [Tincre](https://tincre.com) we ❤️  contributions. Please writeup an issue if you'd like to make or request an improvement.
