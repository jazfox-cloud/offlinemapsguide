# OfflineMapsGuide focused Ahrefs technical SEO audit

Audit date: 2026-07-20 (America/Los_Angeles)

Scope: local remediation and read-only production verification only

Production: https://offlinemapsguide.com/

Final audited source revision: `5c7d1b94b20e44fb8504e3d0fda22c68b06a37c0` plus the uncommitted changes listed below

## 1. Safety baseline

- Working directory: `/Users/jazfox/Documents/offlinemapsguide`
- Initial branch: `main`
- Initial HEAD before fetch: `a93baa663e2854624063919cc44bc641fdac52bc`
- Initial recorded `origin/main`: `5c7d1b94b20e44fb8504e3d0fda22c68b06a37c0`
- Initial ahead/behind: `0/1`
- Initial `git status --short`: clean; no modified, staged, or untracked files
- `git fetch origin --prune`: completed; no additional remote commit beyond `5c7d1b9`
- Fast-forward safety: `HEAD` was an ancestor of `origin/main`; the clean branch was fast-forwarded to `5c7d1b9` without a merge commit. The remote commit added `EmailLink.astro` and changed only `contact.astro` and `privacy.astro`.
- No pre-existing local work was overwritten, moved, deleted, cleaned, or stashed.
- No `git add`, commit, push, deployment, Ahrefs validation, GSC operation, or Cloudflare configuration change was performed.

Package scripts:

- `dev`: `ASTRO_TELEMETRY_DISABLED=1 astro dev`
- `build`: `ASTRO_TELEMETRY_DISABLED=1 astro build`
- `preview`: `ASTRO_TELEMETRY_DISABLED=1 astro preview`
- `check`: `ASTRO_TELEMETRY_DISABLED=1 astro check`
- No lint or test script exists.

Architecture and relevant files:

- Astro 5 static output, configured by `astro.config.mjs` with `site: "https://offlinemapsguide.com"` and `output: "static"`.
- Cloudflare Pages output is `dist`, configured in `wrangler.toml`.
- Shared metadata/layout: `src/layouts/BaseLayout.astro`.
- Routes: `src/pages/**/*.astro`; guide routes come from `src/data/guides.ts` through `src/pages/guides/[slug].astro`.
- Sitemap: `src/pages/sitemap.xml.ts`.
- Robots: `public/robots.txt`.
- Pages middleware: `functions/_middleware.js`; it performs only `www` to apex 301 canonicalization and preserves path/query through `URL` mutation.
- No `_redirects`, `_headers`, Astro middleware, or historical `.html` redirect rules exist.

## 2. Ahrefs issue reproduction and remediation status

| Ahrefs category | Source/build reproduction before changes | Local build after changes | Status |
|---|---:|---:|---|
| Incomplete Open Graph | 21/21 canonical HTML pages lacked `og:image`; the other four baseline fields existed | 21/21 include title, description, canonical URL, type, image, dimensions, MIME type, and image alt text | Remediated |
| Missing Twitter Card | 21/21 canonical HTML pages had no Twitter tags | 21/21 include `twitter:card=summary_large_image`, title, description, image, and image alt text | Remediated |
| Title too long | 12 guide pages were 87–103 characters | 0 titles over 60; all titles present and unique | Remediated |
| Description too short | Exactly 6 pages were 36–97 characters | The 6 are now 133–144; one unchanged, accurate guide-library description is 106 | Remediated without padding unrelated copy |
| Redirect chain | `http://www` produced two redirects | Unchanged locally because the first hop is a Cloudflare edge setting | Confirmed; Cloudflare follow-up required |

The exact 21-page counts were reproduced from the current build; no noindex, 404, parameter, or error pages were used to match the email totals.

## 3. Complete local page inventory after remediation

There are 21 canonical, indexable HTML pages and one intentional noindex 404 page. The sitemap has 21 unique URLs and exactly matches the canonical indexable set. In the table, `=title`, `=description`, and `=canonical` mean the social field uses the exact value shown in that row. The default image is `https://offlinemapsguide.com/images/offline-maps-guide-social.png`; every Open Graph row also includes width 1200, height 630, type `image/png`, and alt text, and every Twitter row includes image alt text. All canonical rows have local/production-intended status 200; production currently returns 200 with zero redirects for every sitemap URL.

| URL | Type / class | Status / index / sitemap | Title (characters) | Meta description (characters) | Canonical / robots / H1 | Open Graph | Twitter |
|---|---|---|---|---|---|---|---|
| `/` | Home / canonical | 200 / yes / yes | `Offline Maps Guide` (18) | `Practical offline map setup guides for international travel, hiking, privacy, and reliable navigation when mobile data or signal is unavailable.` (144) | `https://offlinemapsguide.com/`; default robots; H1 `Offline Maps Guide` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/` | Guide library / canonical | 200 / yes / yes | `Offline Map Guides \| Offline Maps Guide` (39) | `Scenario-based offline map setup guides for travel, hiking, road trips, privacy, and no-signal navigation.` (106) | self-canonical; default robots; H1 `Offline map guides by travel problem` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/apps/` | App information / canonical | 200 / yes / yes | `Offline Map Apps \| Offline Maps Guide` (37) | `A practical offline map app shortlist for travelers, hikers, privacy-focused users, and no-signal backup planning.` (114) | self-canonical; default robots; H1 `Offline map apps by use case` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/about/` | Information / canonical | 200 / yes / yes | `About \| Offline Maps Guide` (26) | `Learn how Offline Maps Guide researches practical navigation workflows, defines testing boundaries, and maintains editorial independence.` (137) | self-canonical; default robots; H1 `About Offline Maps Guide` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/contact/` | Information / canonical | 200 / yes / yes | `Contact \| Offline Maps Guide` (28) | `Contact Offline Maps Guide to report corrections, app feature changes, source suggestions, privacy requests, or accessibility issues.` (133) | self-canonical; default robots; H1 `Contact Offline Maps Guide` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/methodology/` | Information / canonical | 200 / yes / yes | `Methodology \| Offline Maps Guide` (32) | `How Offline Maps Guide researches and updates practical offline navigation guides without inventing first-person field tests.` (125) | self-canonical; default robots; H1 `How we research offline map guides` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/editorial-policy/` | Policy / canonical | 200 / yes / yes | `Editorial Policy \| Offline Maps Guide` (37) | `Read the Offline Maps Guide standards for sourcing, practical travel guidance, affiliate independence, corrections, and content updates.` (136) | self-canonical; default robots; H1 `Editorial Policy` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/privacy/` | Legal / canonical | 200 / yes / yes | `Privacy Policy \| Offline Maps Guide` (35) | `Read how Offline Maps Guide addresses accounts, analytics, advertising cookies, external links, and privacy questions on this static website.` (141) | self-canonical; default robots; H1 `Privacy Policy` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/terms/` | Legal / canonical | 200 / yes / yes | `Terms of Use \| Offline Maps Guide` (33) | `Read the Offline Maps Guide terms covering informational travel content, navigation and safety limitations, and changes to published guides.` (140) | self-canonical; default robots; H1 `Terms of Use` | title=title; description=description; url=canonical; type=website; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/organic-maps-tokyo-subway-offline/` | Guide / canonical | 200 / yes / yes | `Organic Maps: Tokyo Subway Offline \| Offline Maps Guide` (55) | `A practical setup guide for using Organic Maps around Tokyo stations without mobile data, with realistic limits around indoor routing and rail transfers.` (153) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/hiking-gps-no-signal-europe/` | Guide / canonical | 200 / yes / yes | `Hiking GPS Offline in Europe \| Offline Maps Guide` (49) | `How to prepare offline trail maps, GPX files, battery backups, and map app fallbacks for European hikes where cellular coverage is unreliable.` (142) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/privacy-map-app-no-data-collection/` | Guide / canonical | 200 / yes / yes | `Private Offline Map Apps Compared \| Offline Maps Guide` (54) | `A practical comparison framework for travelers who want offline navigation with minimal tracking, fewer account requirements, and open map data.` (144) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/google-maps-offline-japan-travel/` | Guide / canonical | 200 / yes / yes | `Google Maps Offline in Japan \| Offline Maps Guide` (49) | `How to use Google Maps offline areas in Japan for saved places and walking backup, while avoiding common assumptions about transit and live data.` (145) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/best-offline-map-app-international-travel/` | Guide / canonical | 200 / yes / yes | `Best Offline Map Apps for Travel \| Offline Maps Guide` (53) | `A short, non-hyped comparison of offline map apps for travelers, with use cases for cities, road trips, hiking, and privacy.` (124) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/offline-maps-southeast-asia-backpacking/` | Guide / canonical | 200 / yes / yes | `Offline Maps for Southeast Asia \| Offline Maps Guide` (52) | `How to prepare offline maps for Southeast Asia routes where islands, buses, ferries, and border crossings make navigation less predictable.` (139) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/offline-road-trip-maps-usa-national-parks/` | Guide / canonical | 200 / yes / yes | `Offline Maps for U.S. National Parks \| Offline Maps Guide` (57) | `A road trip preparation guide for national parks, scenic highways, trailheads, and lodging areas with weak or no mobile coverage.` (129) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/kiwix-travel-wiki-offline/` | Guide / canonical | 200 / yes / yes | `Kiwix for Offline Travel Research \| Offline Maps Guide` (54) | `How Kiwix can complement offline maps by saving travel reference material, destination context, and practical notes for no-signal trips.` (136) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/offline-maps-apple-watch-travel/` | Guide / canonical | 200 / yes / yes | `Offline Maps on Apple Watch \| Offline Maps Guide` (48) | `A realistic planning guide for travelers considering watch-based navigation when phone signal, battery, or pocket access is limited.` (132) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/organic-maps-vs-osmand-travel/` | Guide / canonical | 200 / yes / yes | `Organic Maps vs. OsmAnd for Travel \| Offline Maps Guide` (55) | `A travel-focused comparison of two OpenStreetMap-based apps, emphasizing setup effort, offline search, hiking features, and privacy tradeoffs.` (142) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/offline-maps-esim-backup-travel/` | Guide / canonical | 200 / yes / yes | `Offline Maps and eSIM Travel Backup \| Offline Maps Guide` (56) | `How to combine eSIM data with offline maps so navigation still works when activation, roaming, underground stations, or remote coverage fail.` (141) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| `/guides/offline-map-storage-phone-space/` | Guide / canonical | 200 / yes / yes | `Offline Map Storage for Travel \| Offline Maps Guide` (51) | `A storage planning guide for offline map downloads, reference files, GPX routes, photos, translation packs, and eSIM apps.` (122) | self-canonical; default robots; H1 retains full guide heading | title=title; description=description; url=canonical; type=article; image=default 1200x630 PNG | card=summary_large_image; title=title; description=description; image=default PNG |
| Unknown path / `404.html` | Error / intentional noindex | 404 / no / no | `Page Not Found \| Offline Maps Guide` (35) | `The requested page could not be found. Browse the Offline Maps Guide library for practical no-signal navigation advice.` (116) | no canonical; `noindex, follow`; H1 `Page not found` | intentionally omitted | intentionally omitted |

Parameter URLs are not independent landing pages: a query string is preserved through host redirects but canonical remains the query-free page URL. Slashless URLs are redirect inputs, not sitemap pages.

## 4. Open Graph and Twitter findings

Root cause: the shared `BaseLayout.astro` emitted four Open Graph fields but no image and emitted no Twitter metadata. This affected every one of the 21 canonical pages.

Local remediation:

- Centralized `og:type`: `article` for the 12 guide detail pages; `website` for home, library, app, informational, policy, and legal pages.
- Preserved page-specific title, description, and canonical values in social tags.
- Added shared `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, and `twitter:image:alt` to all 21 canonical pages.
- Added `og:image`, `og:image:width`, `og:image:height`, `og:image:type`, and `og:image:alt` to all 21 canonical pages.
- Intentionally omitted canonical, Open Graph, and Twitter fields on the noindex 404.

Default social image:

- Editable source: `public/images/offline-maps-guide-social.svg`.
- Rendered asset: `public/images/offline-maps-guide-social.png`.
- Production URL: `https://offlinemapsguide.com/images/offline-maps-guide-social.png`.
- PNG: 1200×630, `image/png`, 46,951 bytes, 3 channels with no alpha/transparency.
- Accurate image text: `PRACTICAL TRAVEL NAVIGATION`, `Offline Maps Guide`, `Practical setup guides for reliable navigation when mobile data or signal is unavailable.`, `No-signal ready`, `SIGNAL / NO SERVICE`, and `TRIP NOTES / SAVED LOCALLY`.
- The original visual uses the site's cream, ink, green, orange, and blue palette; abstract grid/routes, a download-style location marker, and an offline-status card. It contains no third-party logo, real map tile, platform screenshot, external image, rating, download count, or invented certification.
- The shared layout provides page-level overrides for image path, alt text, dimensions, and MIME type without changing the default.

Consequently, local Open Graph completeness is 21/21 across all required fields and Twitter Card completeness is 21/21 across all required fields.

## 5. Title changes

All 12 long titles were generated by combining already-long guide H1 text with the 21-character brand suffix. A separate `seoTitle` field now controls `<title>` and social title while the original H1, URL, content, and search intent remain unchanged.

| URL | Old title (length) | New title (length) | Preserved intent / reason |
|---|---|---|---|
| `/guides/organic-maps-tokyo-subway-offline/` | `Organic Maps for Tokyo Subway Offline: Setup, Transfers, and Common Gaps \| Offline Maps Guide` (93) | `Organic Maps: Tokyo Subway Offline \| Offline Maps Guide` (55) | Organic Maps + Tokyo subway + offline; removed secondary H1 clauses only |
| `/guides/hiking-gps-no-signal-europe/` | `Hiking GPS With No Signal in Europe: Offline Map Stack for Safer Trails \| Offline Maps Guide` (92) | `Hiking GPS Offline in Europe \| Offline Maps Guide` (49) | Europe hiking GPS without signal |
| `/guides/privacy-map-app-no-data-collection/` | `Privacy Map Apps With Less Data Collection: Offline Options Compared \| Offline Maps Guide` (89) | `Private Offline Map Apps Compared \| Offline Maps Guide` (54) | Privacy-focused offline app comparison |
| `/guides/google-maps-offline-japan-travel/` | `Google Maps Offline for Japan Travel: What Works and What Does Not \| Offline Maps Guide` (87) | `Google Maps Offline in Japan \| Offline Maps Guide` (49) | Google Maps offline in Japan |
| `/guides/best-offline-map-app-international-travel/` | `Best Offline Map App for International Travel: A Practical Shortlist \| Offline Maps Guide` (89) | `Best Offline Map Apps for Travel \| Offline Maps Guide` (53) | Best offline map apps for travel |
| `/guides/offline-maps-southeast-asia-backpacking/` | `Offline Maps for Southeast Asia Backpacking: Cities, Islands, and Border Crossings \| Offline Maps Guide` (103) | `Offline Maps for Southeast Asia \| Offline Maps Guide` (52) | Southeast Asia offline map preparation |
| `/guides/offline-road-trip-maps-usa-national-parks/` | `Offline Road Trip Maps for U.S. National Parks: Navigation Without Cell Service \| Offline Maps Guide` (100) | `Offline Maps for U.S. National Parks \| Offline Maps Guide` (57) | Offline maps for U.S. national parks |
| `/guides/kiwix-travel-wiki-offline/` | `Kiwix for Offline Travel Research: Pairing Wiki Guides With Offline Maps \| Offline Maps Guide` (93) | `Kiwix for Offline Travel Research \| Offline Maps Guide` (54) | Kiwix offline travel research |
| `/guides/offline-maps-apple-watch-travel/` | `Offline Maps on Apple Watch for Travel: Useful Backup or Battery Trap? \| Offline Maps Guide` (91) | `Offline Maps on Apple Watch \| Offline Maps Guide` (48) | Apple Watch offline maps |
| `/guides/organic-maps-vs-osmand-travel/` | `Organic Maps vs OsmAnd for Travel: Which Offline Map Fits Your Trip? \| Offline Maps Guide` (89) | `Organic Maps vs. OsmAnd for Travel \| Offline Maps Guide` (55) | Organic Maps versus OsmAnd for travel |
| `/guides/offline-maps-esim-backup-travel/` | `Offline Maps and eSIMs: The Travel Backup Setup That Actually Works \| Offline Maps Guide` (88) | `Offline Maps and eSIM Travel Backup \| Offline Maps Guide` (56) | Offline maps + eSIM travel backup |
| `/guides/offline-map-storage-phone-space/` | `How Much Phone Storage Do Offline Maps Need? A Traveler's Planning Guide \| Offline Maps Guide` (93) | `Offline Map Storage for Travel \| Offline Maps Guide` (51) | Travel storage planning for offline maps |

Additional low-risk cleanup: About and Contact no longer produce `About Offline Maps Guide | Offline Maps Guide` or `Contact Offline Maps Guide | Offline Maps Guide`; their H1s retain the full names.

Post-build: 21/21 canonical titles exist, are unique, contain no double brand, and none exceeds 60 characters. The 404 was not included in these counts.

## 6. Description changes

| URL | Old description (length) | New description (length) | Basis |
|---|---|---|---|
| `/` | `Practical offline map guides for international travel, hiking, privacy, and no-signal navigation.` (97) | `Practical offline map setup guides for international travel, hiking, privacy, and reliable navigation when mobile data or signal is unavailable.` (144) | Existing homepage scope and no-signal positioning |
| `/about/` | `About Offline Maps Guide, its travel research, testing boundaries, and editorial independence.` (94) | `Learn how Offline Maps Guide researches practical navigation workflows, defines testing boundaries, and maintains editorial independence.` (137) | Existing research, testing-boundary, and independence sections |
| `/contact/` | `Contact Offline Maps Guide about corrections, app changes, privacy, or accessibility.` (85) | `Contact Offline Maps Guide to report corrections, app feature changes, source suggestions, privacy requests, or accessibility issues.` (133) | Existing contact reasons in page body |
| `/editorial-policy/` | `Offline Maps Guide editorial standards.` (39) | `Read the Offline Maps Guide standards for sourcing, practical travel guidance, affiliate independence, corrections, and content updates.` (136) | Existing policy sections and disclosure language |
| `/privacy/` | `Privacy policy for Offline Maps Guide.` (38) | `Read how Offline Maps Guide addresses accounts, analytics, advertising cookies, external links, and privacy questions on this static website.` (141) | Existing privacy headings and static-site statement |
| `/terms/` | `Terms of use for Offline Maps Guide.` (36) | `Read the Offline Maps Guide terms covering informational travel content, navigation and safety limitations, and changes to published guides.` (140) | Existing terms sections |

Post-build: all 21 canonical pages have unique descriptions; none is over 160. The guide-library description remains 106 characters because it is accurate and distinct; it was not padded merely to cross an arbitrary threshold.

## 7. Redirect investigation

Production evidence collected with read-only HEAD requests:

| Request | Hop 1 | Hop 2 | Final | Redirect count | Assessment |
|---|---|---|---|---:|---|
| `http://offlinemapsguide.com/` | 301 → `https://offlinemapsguide.com/` | — | 200 | 1 | Normal HTTP→HTTPS |
| `https://offlinemapsguide.com/` | — | — | 200 | 0 | Canonical |
| `http://www.offlinemapsguide.com/` | 301 → `https://www.offlinemapsguide.com/` | 301 → `https://offlinemapsguide.com/` | 200 | 2 | True chain |
| `https://www.offlinemapsguide.com/` | 301 → `https://offlinemapsguide.com/` | — | 200 | 1 | Normal www→apex |
| `https://offlinemapsguide.com/apps` | 308 → `/apps/` | — | 200 | 1 | Normal trailing-slash normalization |
| `https://offlinemapsguide.com/guides/google-maps-offline-japan-travel` | 308 → slash URL | — | 200 | 1 | Normal nested-path normalization |
| `https://www.offlinemapsguide.com/guides/google-maps-offline-japan-travel/?ref=a` | 301 → same path/query on apex HTTPS | — | 200 | 1 | Middleware preserves path and query |
| `http://www.offlinemapsguide.com/guides/google-maps-offline-japan-travel/?ref=a` | 301 → HTTPS www, then middleware 301 → HTTPS apex | second Location preserves path/query | 200 | 2 | Same real chain with query preservation |

Every one of the 21 production sitemap URLs returns 200 directly with zero redirects. Internal links, canonicals, OG URLs, and sitemap entries all target final HTTPS apex trailing-slash URLs.

Root cause: Cloudflare's HTTP→HTTPS edge redirect runs before the repository's Pages middleware can normalize `www`, so HTTP+www takes two independent canonicalization hops. This cannot be fixed safely by a repository-only change.

Recommended Cloudflare follow-up (not applied): create a highest-priority Single Redirect with custom filter `(http.host eq "www.offlinemapsguide.com") or (http.host eq "offlinemapsguide.com" and not ssl)`, dynamic target `concat("https://offlinemapsguide.com", http.request.uri.path)`, status 301, and Preserve query string enabled. Keep Always Use HTTPS enabled. Place this above other redirect rules so the first terminating redirect wins, then verify all eight scheme/host/path/query combinations with Cloudflare Trace and `curl` before considering removal of the repository middleware. Cloudflare documents dynamic path construction, explicit query preservation, and first-match redirect priority:

- https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/
- https://developers.cloudflare.com/rules/url-forwarding/examples/perform-mobile-redirects/
- https://developers.cloudflare.com/cache/how-to/cache-rules/order/
- https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/

## 8. Additional technical SEO regression

- Sitemap: 21 URLs, 21 unique; HTTPS apex only; no query, www, HTTP, redirect, noindex, or duplicate URLs.
- Canonical: 21/21 present, absolute, self-referencing, and equal to the final URL.
- Robots: allows crawling and declares the correct absolute sitemap URL.
- Sitemap/noindex conflict: 0.
- H1 missing: 0.
- Duplicate titles: 0. Duplicate descriptions: 0.
- Broken internal links: 0 across 237 rendered internal link references.
- Internal links to redirect URLs: 0.
- Indexable orphan pages: 0; every non-home sitemap page has at least one distinct internal source.
- Social image references: 42 metadata references across 21 pages, all resolving to the same existing absolute HTTPS PNG; missing image references: 0.
- Structured data: no JSON-LD exists in the project, so there were zero blocks to parse and zero parse errors. No unrelated schema expansion was added.
- Production soft 404: before deployment, an unknown path returns the homepage body with HTTP 200 (7,155 bytes), confirming a soft 404.
- Local 404 remediation: added top-level `404.html`; Astro preview returns a real HTTP 404, includes `noindex, follow`, and omits canonical/OG/Twitter fields.
- No `.html` or historical redirect rules exist, so arbitrary historical URL behavior was not invented or changed.

## 9. Verification and visual QA

Commands/results:

- `./node_modules/.bin/astro build`: pass; 22 rendered pages after adding 404 (21 canonical HTML pages plus 404; sitemap also generated).
- `./node_modules/.bin/tsc --noEmit`: pass.
- `CI=true ./node_modules/.bin/astro check`: not runnable because the declared `check` script lacks the required `@astrojs/check` dependency. Astro reports this explicitly. No dependency was added in this scoped remediation.
- `pnpm check`: the managed environment first attempted registry/package-manager resolution and could not run offline; the direct Astro check above exposed the underlying missing dependency.
- Lint: no script exists.
- Tests: no script exists.
- Post-build SEO checks: pass for sitemap equality/uniqueness, title/description existence and uniqueness, canonical equality, H1s, links, redirects, orphans, robots, 404 behavior, 21/21 Open Graph completeness, and 21/21 Twitter Card completeness.
- SVG XML parsing: pass. PNG signature/dimensions: pass at exactly 1200×630. PNG has no alpha and is 46,951 bytes. The built asset is byte-identical to the source asset.
- Local preview image response: HTTP 200 with `Content-Type: image/png`.

Visual checks used the local preview at the requested 1440×900 and 390×844 sizes:

- Pages inspected: home, Google Maps Japan guide, About, and the custom 404. The default 1200×630 PNG was also inspected directly at original resolution.
- Header, footer, cards, guide article/sidebar, buttons, and mobile navigation render normally.
- No horizontal document overflow: desktop document width equaled viewport width; mobile content width was 375px inside the 390px viewport, with 343px article/card containers.
- No overlapping elements or broken images were observed.
- H1 text remained unchanged on guide pages while the browser title changed as intended.
- Browser console warnings/errors attributable to this change: 0.

## 10. Files changed and remaining decisions

Changed source/report files:

- `src/layouts/BaseLayout.astro`
- `src/data/site.ts`
- `src/data/guides.ts`
- `src/pages/guides/[slug].astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/editorial-policy.astro`
- `src/pages/privacy.astro`
- `src/pages/terms.astro`
- `src/pages/404.astro` (new)
- `public/images/offline-maps-guide-social.svg` (new editable source)
- `public/images/offline-maps-guide-social.png` (new 1200×630 rendered asset)
- `reports/ahrefs-technical-seo-audit-2026-07-20.md` (this report)

Human decisions/follow-up required:

1. Decide whether to implement the proposed Cloudflare Single Redirect. No dashboard or DNS/SSL setting was changed in this audit.
2. Decide whether to add `@astrojs/check` as a development dependency in a separate dependency-maintenance change so the existing `check` script becomes executable.
3. Deploy the local metadata, image, and `404.html` changes before production can serve the new share image or resolve the soft 404.

The work stops locally at this point, with no staging, commit, push, deployment, or online mutation.
