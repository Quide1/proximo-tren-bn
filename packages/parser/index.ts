import * as cheerio from 'cheerio';
import { readFile, } from 'node:fs/promises';
import path from 'node:path';


(async function main() {
	const ruta = path.join(import.meta.dirname, 'resources', 'horarios-tren-belgrano-norte.html');
	const contenido = await readFile(ruta, 'utf-8');
	const cheerioConfig: cheerio.CheerioOptions = {
		xml: true
	}
	const $ = cheerio.load(contenido, cheerioConfig)
	const pages = $('page')
})()