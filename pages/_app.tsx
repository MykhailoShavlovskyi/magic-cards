import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React from "react"
import { withBlitz } from "app/blitz-client"

const RootErrorFallback = ({ error }: ErrorFallbackProps) => {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error?.statusCode || 400} title={error.message || error.name} />
    )
  }
}

const GlobalStyle = () => (
  <style global jsx>{`
    body {
      margin: 0;
    }
  `}</style>
)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary FallbackComponent={RootErrorFallback}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ErrorBoundary>
)

export default withBlitz(MyApp)
