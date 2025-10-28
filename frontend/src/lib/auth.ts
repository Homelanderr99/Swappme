import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  exp?: number;
  [key: string]: unknown;
};

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("access_token");
  } catch {
    return null;
  }
}

export function decodeToken<T extends DecodedToken = DecodedToken>(token: string | null): T | null {
  if (!token) return null;
  try {
    return jwtDecode<T>(token);
  } catch {
    return null;
  }
}

export function isTokenExpired(token: string | null): boolean {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return false;
  const nowSec = Math.floor(Date.now() / 1000);
  return decoded.exp < nowSec;
}