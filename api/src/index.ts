import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";
import { swagger } from '@elysiajs/swagger';
import Elysia from "elysia";
import { auth } from "~modules/auth";
import { campaign } from "~modules/campaign";

const app = new Elysia()
  .use(
    swagger({
      path: '/v1/swagger', // endpoint which swagger will appear on
      documentation: {
        info: {
          title: 'Blood Donation API',
          version: '1.0.0',
        },
      },
    })
  )
  .group("/api", (app) =>
    app
      .use(
        jwt({
          name: "jwt",
          secret: Bun.env.JWT_SECRET!,
          exp: '1d'
        })
      )
      .use(cookie())
      .use(auth)
      .use(campaign)
  )
  .listen(8080);

console.log(
  `Server is running at http://${app.server?.hostname}:${app.server?.port}`
);
