# minimal-rwsdk-rsc
Minimal RedwoodSDK starter for testing realtime sync and [client-side navigation](https://docs.rwsdk.com/guides/frontend/client-side-nav/) (SPA mode.) 

Includes tailwindcss, minimal pnpm scripts (no DB), no lockfile (see `.npmrc`), no runtime types in worker-configuration.d.ts (too noisy).

Deployed at https://minimal-rwsdk-rsc.jldec.workers.dev/

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
