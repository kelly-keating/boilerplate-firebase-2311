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

## Server side

```bash
npm i express-jwt jsonwebtoken jwks-rsa
```

Include the following in `server/auth0.ts`:

```ts
import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'
import type { Request } from 'express'
import type { ParamsDictionary } from 'express-serve-static-core'
import type { JwtPayload } from 'jsonwebtoken'
import jwks from 'jwks-rsa'

const domain = 'https://dev-kelly.au.auth0.com'
const audience = // 'https://the-app-url/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

export default checkJwt

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface JwtRequest<TReq = any, TRes = any>
  extends Request<ParamsDictionary, TRes, TReq> {
  auth?: JwtPayload
}
```

And import and use it in any route that needs to be protected:

```ts
import checkJwt, { JwtRequest } from '../auth0'

// ...

router.get('/protected', checkJwt, async (req: JwtRequest, res) => {
  // ...
})
```
