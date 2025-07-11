

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve((_req) => {
  return new Response("アプリが動いています ✅", {
    headers: { "Content-Type": "text/plain" }
  });
}, { verify: false });
