import { NextResponse } from "next/server";

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
];

export function middleware(request) {
  const ua = request.headers.get("user-agent")?.toLowerCase() || "";

  // لو الي داخل Bot
  if (BOT_USER_AGENTS.some((bot) => ua.includes(bot))) {
    const prerenderToken = process.env.PRERENDER_TOKEN;
    const prerenderUrl = `https://service.prerender.io/${request.nextUrl.pathname}${request.nextUrl.search}`;

    return NextResponse.rewrite(prerenderUrl, {
      headers: {
        "X-Prerender-Token": prerenderToken,
      },
    });
  }

  return NextResponse.next();
}
