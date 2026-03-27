import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// In production, use a strong environment variable. For demo:
const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-super-secret-key-for-demo-purposes"
);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d") // Default 1 week session
    .sign(SECRET_KEY);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, SECRET_KEY, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function setAuthCookie(payload: { id: string; email: string; name: string | null; role: string }) {
  const token = await encrypt(payload);
  const cookieStore = await cookies();
  
  cookieStore.set("auth_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_session");
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_session")?.value;
  if (!token) return null;
  try {
    return await decrypt(token);
  } catch (err) {
    return null; // Invalid or expired token
  }
}

export async function updateSession(request: NextRequest) {
  const token = request.cookies.get("auth_session")?.value;
  if (!token) return;

  try {
    const payload = await decrypt(token);
    const res = NextResponse.next();
    // extend token life
    res.cookies.set({
      name: "auth_session",
      value: await encrypt(payload),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err) {
    // If invalid, clear it
    const res = NextResponse.next();
    res.cookies.delete("auth_session");
    return res;
  }
}
