[![Travis CI](https://travis-ci.com/scriptex/socials.svg?branch=master)](https://travis-ci.com/scriptex/socials)
[![Github Build](https://github.com/scriptex/socials/workflows/Build/badge.svg)](https://github.com/scriptex/socials/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/socials/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/socials&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-socials-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/socials/badge)](https://www.codefactor.io/repository/github/scriptex/socials)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/socials/README.md?pixel)](https://github.com/scriptex/socials/)

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

<a href="https://linktr.ee/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" alt="See the rest of my links on Linktree" width="24" align="top"> See the rest of my links on Linktree</a>
</div>

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
