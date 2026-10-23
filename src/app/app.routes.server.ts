import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "overview",
    renderMode: RenderMode.Server,
  },
  {
    path: "users",
    renderMode: RenderMode.Server,
  },
  {
    path: "**",
    renderMode: RenderMode.Server,
  },
];
