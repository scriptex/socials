[![GitHub release](https://img.shields.io/github/release/scriptex/socials.svg)](https://github.com/scriptex/socials/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/socials.svg)](https://github.com/scriptex/socials/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/socials.svg)](https://github.com/scriptex/socials/commits/master)
[![Build Status](https://travis-ci.org/scriptex/socials.svg?branch=master)](https://travis-ci.org/scriptex/socials)
[![npm](https://img.shields.io/npm/dt/scriptex-socials.svg)](https://www.npmjs.com/package/scriptex-socials)
[![npm](https://img.shields.io/npm/v/scriptex-socials.svg)](https://www.npmjs.com/package/scriptex-socials)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/socials/README.md)](https://github.com/scriptex/socials/)

# Atanas Atanasov's Socials

> Links to various social media

This is a native web component built with TypeScript, with no dependencies, which lists links to various social medias.

## Install

```sh
npm i scriptex-socials

# or

yarn add scriptex-socials
```

## Usage

In your JavaScript/TypeScript entry point:

```javascript
import 'scriptex-socials';
```

You can also include the web component directly from **unpkg.com**:

```javascript
import('https://unpkg.com/scriptex-socials');
```

or

```html
<script async src="https://unpkg.com/scriptex-socials"></script>
```

Then add the component in your HTML/JSX markup:

```html
<social-links></social-links>

<!-- or with custom color -->

<social-links style="color: red;"></social-links>

<div style="background: black;">
	<social-links style="color: white;"></social-links>
</div>
```

## React with TypeScript

If you're using React with TypeScript, you need to extends the JSX `IntrinsicElements` interface so TypeScript knows that the `social-links` element exists.

You can do so in a `custom.d.ts` file in your project's root folder. Don't forget to add that file in your `tsconfig.json`!

```typescript
declare namespace JSX {
	interface IntrinsicElements {
		'social-links': any;
	}
}
```

## Contents

Currently it includes the following:

<div>
<a href="https://atanas.info" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" alt="Go to my website" width="24" align="top"> Go to my website</a>

<a href="mailto:hi@atanas.info" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" alt="Send me an email" width="24" align="top"> Send me an email</a>

<a href="https://www.linkedin.com/in/scriptex/" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" alt="Find me on LinkedIn" width="24" align="top"> Find me on LinkedIn</a>

<a href="https://github.com/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" alt="See my projects on Github" width="24" align="top"> See my projects on Github</a>

<a href="https://gitlab.com/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" alt="See my projects on Gitlab" width="24" align="top"> See my projects on Gitlab</a>

<a href="https://twitter.com/scriptexbg" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" alt="Follow me on Twitter" width="24" align="top"> Follow me on Twitter</a>

<a href="https://www.npmjs.com/~scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" alt="See my packages on NPM" width="24" align="top"> See my packages on NPM</a>

<a href="https://www.youtube.com/user/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" alt="See my videos on YouTube" width="24" align="top"> See my videos on YouTube</a>

<a href="https://stackoverflow.com/users/4140082/atanas-atanasov" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" alt="See my profile on StackOverflow" width="24" align="top"> See my profile on StackOverflow</a>

<a href="https://codepen.io/scriptex/" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" alt="See my work on Codepen" width="24" align="top"> See my work on Codepen</a>

<a href="https://profile.codersrank.io/user/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" alt="See my profile on Codersrank" width="24" align="top"> See my profile on Codersrank</a>
</div>

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fsocials&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate on PayPal](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/scriptex)
[![Donate on Liberapay](https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay)](https://liberapay.com/scriptex/)
[![Donate on Issuehunt](https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg)](https://issuehunt.io/r/scriptex/socials)

## LICENSE

MIT
