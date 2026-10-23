import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { demoApiInterceptor, requestIdInterceptor } from "./core/http.interceptors";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestIdInterceptor, demoApiInterceptor])),
    provideClientHydration(),
  ],
};
