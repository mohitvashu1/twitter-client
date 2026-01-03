import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <GoogleOAuthProvider clientId="199030499570-k4pn9u4srr8ccffmpgg47qeod9ioke0m.apps.googleusercontent.com">
    <Component {...pageProps} />
  </GoogleOAuthProvider>;
}
  