#!/usr/bin/env ts-node-script

import { join } from 'path';
import { readFile, readFileSync, writeFile } from 'fs';

const svgFile: string = join(__dirname, '..', 'data', 'sprite.svg');
const cssFile: string = join(__dirname, '..', 'data', 'style.css');
const indexFile: string = join(__dirname, '..', 'src', 'index.ts');
const linksFile: string = join(__dirname, '..', 'data', 'links.json');
const templateFile: string = join(__dirname, '..', 'data', 'template.ts');

const replace = (input: string, find: string, replace: string): string => input.replace(find, replace);
const fromBufferToString = (data: Buffer): string => data.toString('ascii', 0, data.length);

const svg: string = fromBufferToString(readFileSync(svgFile));
const links: string = fromBufferToString(readFileSync(linksFile));
const style: string = fromBufferToString(readFileSync(cssFile));

readFile(templateFile, 'utf8', (err: NodeJS.ErrnoException | null, data: string): void => {
	if (err) {
		return console.log(err);
	}

	let result: string = data;

	result = replace(result, '__links__', links);
	result = replace(result, '__style__', `\`${style}\``);
	result = replace(result, '__sprite__', `'${svg}'`);
	result = replace(result, '// @ts-nocheck', '');

	writeFile(indexFile, result, 'utf8', (e: NodeJS.ErrnoException | null) => {
		if (e) {
			return console.log(e);
		}
	});
});
