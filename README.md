# itil-demo-web

Landing page (React + Vite) used as a **test subject for ITIL Scanner**. It shows the product and calls the
single route of [itil-demo-api](../itil-demo-api) to display the API status.

## Run

```bash
npm install
npm run dev      # http://localhost:5173 (expects the API on http://localhost:3001)
npm run build
```

Set `VITE_API_URL` (see `.env.example`) to point to another API URL.
