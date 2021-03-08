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
