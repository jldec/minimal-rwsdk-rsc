# minimal-rwsdk-rsc
Minimal RedwoodSDK starter for testing [realtime sync](https://docs.rwsdk.com/core/realtime/) and [client-side navigation](https://docs.rwsdk.com/guides/frontend/client-side-nav/) (SPA mode.)  
Deployed at https://minimal-rwsdk-rsc.jldec.workers.dev/

![Screenshot 2025-06-29 at 21 13 49](https://github.com/user-attachments/assets/90fca05b-70dc-4184-b00f-46acccf8bc63)

Includes tailwindcss, minimal pnpm scripts (no DB), no lockfile (see `.npmrc`), no runtime types in worker-configuration.d.ts (too noisy).

### package.json scripts
```json
{
  "dev": "vite dev",
  "build": "vite build",
  "preview": "vite build && vite preview",
  "ship": "vite build && wrangler deploy",
  "types": "wrangler types --include-runtime false --strict-vars false",
  "tail": "wrangler tail"
}
```

### Further Reading
- [RedwoodSDK Docs](https://docs.rwsdk.com/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
