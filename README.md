# Sherwood Sports

This is source for the [Sherwood Sports](https://sports.kalafut.net) website.

Feel free to open issues here for data additions, corrections, or website bugs and improvement requests. If you ended up here and aren't familiar with GitHub, you can also simply write us at jim@kalafut.net with your question or suggestion.

## App Details

If you're more technically inclined and want to submit PRs, here is some background to get you started:

- The app is written using [Svelte](https://svelte.dev), [TypeScript](https://www.typescriptlang.org) and [Bootstrap](https://getbootstrap.com)
- **All** sports data for the site is in [data.ts](https://github.com/kalafut/sherwood-sports/blob/main/src/data.ts). PR against that file if you want to directly make data updates.
- The site is built and deployed using GitHub pages against the `gh-pages` branch. This is currently done manually, but I want to get GitHub Actions set up soon.

## Local Development

### Clone repo and install deps

```
git clone git@github.com:kalafut/sherwood-sports.git
cd sherwood-sports
npm install
```

### Run dev build

```
npm run dev -- --host  # the `-- --host` is optional but allows for easy testing with a mobile device on the LAN
```

### Build/publish

```
npm run publish        # alternatively, `npm run build` will just build
```
