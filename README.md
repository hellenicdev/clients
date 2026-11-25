# HellenicDev — Client Portfolio

[![Website](https://img.shields.io/badge/by-HellenicDev-19336e?style=flat-square)](https://hellenicdev.eu) [![Deploy](https://github.com/hellenicdev/clients/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/hellenicdev/clients/actions/workflows/deploy-pages.yml)

Websites built by HellenicDev for restaurants, bars and local businesses in Thessaloniki and Halkidiki, Greece. Each folder is a self-contained static site.

## Sites

| Site | Business | Live |
| --- | --- | --- |
| `antheon/` | Ουζερί Ανθέων, a traditional ouzeri in Thessaloniki since 1982 | [Open](https://hellenicdev.eu/clients/antheon/) |
| `dentro-sto-bar/` | Δέντρο στο μπαρ (Dentro sto Bar) | [Open](https://hellenicdev.eu/clients/dentro-sto-bar/) |
| `encore/` | Encore Beach Bar, Posidi, Halkidiki | [Open](https://hellenicdev.eu/clients/encore/) |
| `fate-skaste/` | Φάτε Σκάστε, grill & steakhouse | [Open](https://hellenicdev.eu/clients/fate-skaste/) |
| `galini/` | Γαλήνη, fish tavern in Mola Kalyva | [Open](https://hellenicdev.eu/clients/galini/) |
| `jamaica/` | Jamaica Ντισκοκαφενείο | [Open](https://hellenicdev.eu/clients/jamaica/) |
| `lama/` | LaMa μεζεδοπωλείο, Thessaloniki | [Open](https://hellenicdev.eu/clients/lama/) |
| `pansea/` | Pansea Exclusive Suites, Thessaloniki | [Open](https://hellenicdev.eu/clients/pansea/) |
| `raki-ouzeri/` | Ρακί Ουζερί / Μεζεδοπωλείον | [Open](https://hellenicdev.eu/clients/raki-ouzeri/) |
| `thessnostima/` | ThessNostima, fresh fruit & vegetables in Thessaloniki | [Open](https://hellenicdev.eu/clients/thessnostima/) |

## Features

- Responsive, mobile-first layouts in each business's own style
- Photo galleries (most with a lightbox), menus, contact details and embedded maps
- Greek content, with a language switcher on many sites
- Consent-gated Google Analytics: GA only loads after Cookiebot consent, through the shared [`consent-analytics.js`](https://hellenicdev.eu/js/consent-analytics.js) snippet

## Run locally

```sh
git clone https://github.com/hellenicdev/clients.git
cd clients
python3 -m http.server 8000
```

Then open, for example, <http://localhost:8000/antheon/>.

## Deployment

Every push to `main` deploys the whole repository to GitHub Pages through [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Tech

- HTML5, CSS3 and vanilla JavaScript, no build step
- Google Fonts, Google Maps embeds
- GitHub Pages

## License and content

The code is by HellenicDev. Names, logos, photos and menus belong to each business. Please don't reuse them.

## Credits

Made by [HellenicDev](https://hellenicdev.eu). Need a website for your business? Get in touch at [hellenicdev.eu](https://hellenicdev.eu).

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S31XB030)
