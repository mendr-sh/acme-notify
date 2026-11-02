# acme-notify

A small notification worker used to demonstrate [Mendr](https://www.mendr.sh).

> **This repository started with vulnerable dependencies on purpose.** They
> were pinned to releases from early 2021, so it has real, published
> advisories for Mendr to fix. Some can still be open. Do not deploy this code.

## What it does

- `src/templates.js` renders email bodies with **handlebars**.
- `src/schedule.js` picks the next digest time with **moment**.
- `src/mailer.js` sends the digest with **nodemailer**.
- `src/live.js` pushes alerts to dashboards with **ws** and **socket.io**.

Each module has tests in `test/`, so a fix that breaks one of them fails CI.

```sh
npm ci
npm test        # node --test
```
