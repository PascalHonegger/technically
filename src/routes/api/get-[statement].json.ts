import fs from 'fs';
import { join, normalize } from 'path';
import type { RequestHandler } from '@sveltejs/kit';
import type { FileSystemStatement } from '$lib/Statement';

export const get: RequestHandler = async ({ params }) => {
	const { statement: identifier } = params;

	// https://nodejs.org/en/knowledge/file-system/security/introduction/
	if (!identifier || identifier.indexOf('\0') !== -1) {
		return {
			status: 500,
			body: { messaage: 'Illegal statement name' }
		};
	}

	const path = join('src/statements/', identifier + '.json');

	if (!path.startsWith(normalize('src/statements/'))) {
		return {
			status: 500,
			body: { messaage: 'Illegal statement name' }
		};
	}

	if (!fs.existsSync(path)) {
		return {
			status: 404,
			body: { messaage: 'Requested statement was not found' }
		};
	}

	const fileContent = await fs.promises.readFile(path);
	const statement: FileSystemStatement = JSON.parse(fileContent.toString('utf-8'));

	return {
		body: JSON.stringify({ ...statement, identifier })
	};
};
