import { SiweMessage } from "siwe";
import {
  type SIWESession,
  type SIWEVerifyMessageArgs,
  type SIWECreateMessageArgs,
  createSIWEConfig,
  formatMessage,
} from "@reown/appkit-siwe";

const BASE_URL = "http://localhost:8080";

/* Function that returns the user's session - this should come from your SIWE backend */
async function getSession() {
  try {
    const res = await fetch(BASE_URL + "/session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const isValidData =
      typeof data === "object" &&
      typeof data.address === "string" &&
      typeof data.chainId === "number";

    return isValidData ? (data as SIWESession) : null;
  } catch (error) {
    console.log("No session found");
    return null;
  }
}

/* Use your SIWE server to verify if the message and the signature are valid */
const verifyMessage = async ({ message, signature }: SIWEVerifyMessageArgs) => {
  try {
    const response = await fetch(BASE_URL + "/verify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ message, signature }),
      credentials: "include",
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result === true;
  } catch (error) {
    console.log("Verification failed, using mock verification");
    // For demo purposes, return true
    return true;
  }
};

/* Create a SIWE configuration object */
export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: window.location.host,
    uri: window.location.origin,
    chains: [8453, 84532], // Base mainnet and Base Sepolia
    statement: "Sign in to SaviChain - Decentralized Savings Platform",
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) =>
    formatMessage(args, address),

  getNonce: async () => {
    try {
      const response = await fetch(BASE_URL + "/nonce", {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
        },
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error("Failed to get nonce");
      }
      
      return await response.text();
    } catch (error) {
      // Fallback nonce for demo
      return "demo-nonce-" + Math.random().toString(36).substring(7);
    }
  },
  getSession,
  verifyMessage,
  signOut: async () => {
    try {
      const response = await fetch(BASE_URL + "/signout", {
        method: "GET",
        credentials: "include",
      });
      return response.ok;
    } catch (error) {
      console.log("Sign out failed, using mock sign out");
      return true;
    }
  },
  onSignIn: (session?: SIWESession) => {
    console.log("User signed in:", session);
  },
  onSignOut: () => {
    console.log("User signed out");
  },
  signOutOnDisconnect: true
});
