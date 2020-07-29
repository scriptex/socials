#!/usr/bin/env ts-node-script

import { join } from 'path';
import { readFile, readFileSync, writeFile } from 'fs';

type Link = {
	url: string;
	svg: boolean;
	icon: string;
	title: string;
};

const startFile: string = join(__dirname, '..', 'data', 'README-start.md');
const endFile: string = join(__dirname, '..', 'data', 'README-end.md');
const readmeFile: string = join(__dirname, '..', 'README.md');
const linksFile: string = join(__dirname, '..', 'data', 'links.json');

const fromBufferToString = (data: Buffer): string => data.toString('ascii', 0, data.length);

const start: string = fromBufferToString(readFileSync(startFile));
const end: string = fromBufferToString(readFileSync(endFile));
const links: Link[] = JSON.parse(fromBufferToString(readFileSync(linksFile)));

const socials = links
	.map((link: Link) => {
		const src = link.svg ? `./assets/${link.icon}.svg` : link.icon;

		return `<a href="${link.url}" target="_blank"><img src="${src}" alt="${link.title}" width="24" align="top"> ${link.title}</a>`;
	})
	.join('\n\n');

const result = `${start}\n<div>\n${socials}\n</div>\n\n${end}`;

writeFile(readmeFile, result, 'utf8', (e: NodeJS.ErrnoException | null) => {
	if (e) {
		return console.log(e);
	}
});
