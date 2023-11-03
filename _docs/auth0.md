# Auth0

## Client side

```bash
npm i -D @auth0/auth0-react
```

Include the `Auth0Provider` in `client/index.tsx`:

```tsx
import { Auth0Provider } from '@auth0/auth0-react'

// ...

createRoot(document.getElementById('app')).render(
  <Auth0Provider
    domain="dev-kelly.au.auth0.com"
    {/* clientId="someclientidgoeshere" */}
    authorizationParams={{
      redirect_uri: window.location.origin,
      {/* audience: 'https://the-app-url/api', */}
      scope: 'openid profile email offline_access',
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
)
```

The auth0 hook can then be used in any component:

```tsx
import { useAuth0 } from '@auth0/auth0-react'

// ...

const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

// ...
```

The user object contains a unique `sub` property, essentially the user's id to auth0, which will not change and can be used to identify unique data in firebase if included.
