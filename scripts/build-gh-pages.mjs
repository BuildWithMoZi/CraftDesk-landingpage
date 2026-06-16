import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  STATIC_EXPORT: "true",
  NEXT_PUBLIC_BASE_PATH: "/CraftDesk-landingpage",
  NEXT_PUBLIC_SITE_URL: "https://buildwithmozi.github.io/CraftDesk-landingpage",
};

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env,
  shell: true,
});

process.exit(result.status ?? 1);
