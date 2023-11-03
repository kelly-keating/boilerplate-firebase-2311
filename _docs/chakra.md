# Chakra UI

## Installation

```bash
  npm i -D @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Provider

In `client/index.tsx`:

```tsx
import { ChakraProvider } from '@chakra-ui/react'

// ...

createRoot(document.getElementById('app')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
```

## Example components

Since chakra uses components for styling, but these come from multiple imports, we can create a file to import the components we want to use and export them from this one file. This also gives us a place to add any custom components we want to use (such as the Link below).

```tsx
import * as rrd from 'react-router-dom'
import * as chakra from '@chakra-ui/react'
import * as icons from '@chakra-ui/icons'

interface LinkProps {
  children: React.ReactNode
  to: string
  color?: string
}
export function Link({ children, to, color = 'teal.500' }: LinkProps) {
  return (
    <chakra.Link as={rrd.Link} to={to} color={color}>
      {children}
    </chakra.Link>
  )
}

export const Tile = chakra.Card
export const TileHeader = chakra.CardHeader
export const TileBody = chakra.CardBody
export const TileFooter = chakra.CardFooter

export const CheckCircle = icons.CheckCircleIcon
export const Star = icons.StarIcon
export const ChevronDown = icons.ChevronDownIcon
export const ArrowLeft = icons.ArrowLeftIcon
export const ArrowRight = icons.ArrowRightIcon
```
