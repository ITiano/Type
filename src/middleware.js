import routes from "@routes/routes";
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req) {
  const res = NextResponse.next();

  // To create supabase client based on request and response
  const supabase = createMiddlewareClient({ req, res });

  // To get user session base on its cookie
  const session = await supabase.auth.getSession();

  // The navigate url that user will be redirected to if its session is empty
  const navigateUrl = NextResponse.redirect(new URL(routes.home.path, req.url));

  // All routes that needs protection
  const protectedRoutes = [routes.profile.path, routes.courseId.path("")];

  // Conditions
  if (!session.data.session) {
    for (const routeIndex in protectedRoutes) {
      if (req.nextUrl.pathname.startsWith(protectedRoutes[routeIndex])) return navigateUrl;
    }
  } else {
    if (req.nextUrl.pathname.startsWith(routes.auth.path)) return navigateUrl;
    else return res;
  }
}
