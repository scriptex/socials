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
<a href="https://atanas.info" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/logo.svg" alt="Go to my website" width="24" align="top"> Go to my website</a>

<a href="mailto:hi@atanas.info" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/email.svg" alt="Send me an email" width="24" align="top"> Send me an email</a>

<a href="https://www.linkedin.com/in/scriptex/" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/linkedin.svg" alt="Find me on LinkedIn" width="24" align="top"> Find me on LinkedIn</a>

<a href="https://github.com/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/github.svg" alt="See my projects on Github" width="24" align="top"> See my projects on Github</a>

<a href="https://gitlab.com/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/gitlab.svg" alt="See my projects on Gitlab" width="24" align="top"> See my projects on Gitlab</a>

<a href="https://twitter.com/scriptexbg" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/twitter.svg" alt="Follow me on Twitter" width="24" align="top"> Follow me on Twitter</a>

<a href="https://www.npmjs.com/~scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/npm.svg" alt="See my packages on NPM" width="24" align="top"> See my packages on NPM</a>

<a href="https://www.youtube.com/user/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/youtube.svg" alt="See my videos on YouTube" width="24" align="top"> See my videos on YouTube</a>

<a href="https://stackoverflow.com/users/4140082/atanas-atanasov" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/stackoverflow.svg" alt="See my profile on StackOverflow" width="24" align="top"> See my profile on StackOverflow</a>

<a href="https://codepen.io/scriptex/" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/codepen.svg" alt="See my work on Codepen" width="24" align="top"> See my work on Codepen</a>

<a href="https://profile.codersrank.io/user/scriptex" target="_blank"><img src="https://raw.githubusercontent.com/scriptex/socials/master/assets/codersrank.svg" alt="See my profile on Codersrank" width="24" align="top"> See my profile on Codersrank</a>

<a href="https://sourcerer.io/scriptex" target="_blank"><img src="https://sourcerer.io/icons/logo-sharing.svg" alt="See my profile on Sourcerer" width="24" align="top"> See my profile on Sourcerer</a>
</div>

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fsocials&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
