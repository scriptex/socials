<!--
```
<custom-element-demo>
  <template>
  	<base href="https://raw-dot-custom-elements.appspot.com/scriptex/socials/1.7.0/socials/">
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<script src="https://unpkg.com/scriptex-socials"></script>
	<social-links></social-links>
  </template>
</custom-element-demo>
```
-->

[![Travis CI](https://travis-ci.com/scriptex/socials.svg?branch=master)](https://travis-ci.com/scriptex/socials)
[![Github Build](https://github.com/scriptex/socials/workflows/Build/badge.svg)](https://github.com/scriptex/socials/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/socials/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/socials&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-socials-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/socials/badge)](https://www.codefactor.io/repository/github/scriptex/socials)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/socials/README.md?pixel)](https://github.com/scriptex/socials/)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/scriptex-socials)

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
