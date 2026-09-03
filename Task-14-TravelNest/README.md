# Task 14 – TravelNest

TravelNest is a complete responsive React frontend application created for the Final Frontend Application Project.

## Project concept
Travel booking and trip discovery platform.

## Concepts demonstrated
- React components
- Props
- useState
- useEffect
- useRef
- useContext
- useReducer
- Conditional rendering
- List rendering
- API integration with JSONPlaceholder
- Custom hooks
- React Router DOM
- Nested routing
- useParams
- useSearchParams
- CRUD operations
- Form validation
- Redux Toolkit
- Responsive UI

## Pages
1. Home
2. Destinations
3. Destination Details
4. Bookings
5. Guides
6. About
7. Contact
8. Not Found

## Nested routing
`/destinations/*`
- `/destinations`
- `/destinations/:destinationId`

## Run locally

```bash
npm install
npm run dev
```

## Check lint and production build

```bash
npm run lint
npm run build
```

## Netlify deployment

1. Push the project to GitHub.
2. Open Netlify and choose **Add new project → Import an existing project**.
3. Select the GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

`netlify.toml` is included so React Router routes work after deployment.

## API
Travel guides are loaded from:
https://jsonplaceholder.typicode.com/users
