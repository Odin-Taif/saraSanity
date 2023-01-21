# Next.js & Sanity CMS

#### Template Preview

## Quick Start

To setup one click deployment, click the above link below and follow the steps.

## Local Development

Again, we recommend you to use the one-click deploy first which will create a github repo. You can then clone the github repo to your local system and change following `.env` variables.

1. ~root/`.env.local`

Change `.env.local.example` placed in the root folder and rename it to `.env.local` and add your sanity project ID. Get it from https://sanity.io/manage

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxyyzz
```

2. `/studio/.env.development` or `/studio/sanity.json`

To develop sanity cms locally, you also need to add the Project ID and Dataset in either `.env` or in `sanity.json` file.

```
# .env.development
SANITY_STUDIO_API_PROJECT_ID=xxyyzz
SANITY_STUDIO_API_DATASET=production

```

or you can directly replace the project ID in the `/studio/sanity.json`

```js
// sanity.json
  // ...
  "api": {
    "projectId": "xxyyzz",
    "dataset": "production"
  },
  // ...
```

### Run Next.js frontend

You can use the normal Next.js method to run the frontend. Just run the following command and a live server will open on `http://localhost:3000`

```
yarn dev
```

### Run Sanity Studio CMS

1. Install Sanity CLI globally (if not already)

```
npm install -g @sanity/cli
```

2. Run

To run sanity studio server, run the following command in your terminal. It will open a live server on `http://localhost:3333`

```
yarn sanity
# or
cd studio && sanity start
```
# saraportfiliSanity
# saraSanity
# saraSanity
