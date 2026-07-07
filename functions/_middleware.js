const APEX_HOST = "offlinemapsguide.com";

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === `www.${APEX_HOST}`) {
    url.hostname = APEX_HOST;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
