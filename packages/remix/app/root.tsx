import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import "@noah/vanilla/styles.css";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
