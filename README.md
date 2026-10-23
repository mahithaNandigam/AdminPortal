# Northstar Admin Portal

A responsive Angular administration workspace for reviewing team activity and managing member access.

## Requirements and setup

Use Node.js 22.22.3 or newer. Install dependencies and start the local server:

```bash
npm ci
npm start
```

Open `http://localhost:4200/`. Build for production with `npm run build`; run unit tests with `npm test -- --watch=false`. After building, run the Node SSR server with `npm run serve:ssr:AdminPortal` (defaults to port 4000).

## Angular patterns in the app

- Standalone components with lazy-loaded routes and route links.
- Signal state and computed values in the injectable `UserStore`.
- Signal inputs and outputs in the reusable member row.
- Built-in template control flow (`@if`, `@for`, `@empty`) and property/event bindings.
- Reactive forms with typed controls and validation for member invitations.
- A custom status pipe and focus directive, plus Angular's built-in decimal pipe.
- Functional route guards with an interactive demo-access selector.
- `HttpClient`, typed API services, functional interceptors, and RxJS observables.
- Lifecycle hooks (`OnInit`/`OnDestroy`) for status polling/subscription cleanup.
- Content projection with named `ng-content` slots in the shared page header.
- Server-side rendering and hydration, with request-time rendering for admin routes.
- Production and development builds with bundle budgets and unit tests.

The role selector, health endpoint, chart, and member records are demonstrations. Invitations and access changes update in-memory state only; the demo interceptor answers only the health endpoint. The SSR host allowlist currently permits localhost and loopback for development. Replace these adapters with your identity provider and API, configure deployed hostnames explicitly, and enforce authorization on the server before deploying for real users.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
