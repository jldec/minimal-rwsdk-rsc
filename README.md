# minimal-rwsdk-rsc
Minimal starter for RedwoodSDK with realtime RSC

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
