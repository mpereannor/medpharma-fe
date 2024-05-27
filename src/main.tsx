import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Auth0ProviderWithNavigate } from "./auth0provider.tsx"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./client/index.ts"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Auth0ProviderWithNavigate>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
        </Auth0ProviderWithNavigate>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
)
