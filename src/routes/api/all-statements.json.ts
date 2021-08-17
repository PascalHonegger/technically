import fs from 'fs';
import type { RequestHandler } from '@sveltejs/kit';
import type { FileSystemStatement, Statement } from '$lib/Statement';

export const get: RequestHandler = async () => {
	const statements = await fs.promises.readdir('src/statements');

	const statementOverview: Statement[] = [];
	for (const fileName of statements) {
		if (fileName.endsWith('.json')) {
			const fileContent = await fs.promises.readFile(`src/statements/${fileName}`);
			const statement: FileSystemStatement = JSON.parse(fileContent.toString('utf-8'));
			const identifier = fileName.slice(0, -5);
			statementOverview.push({
				identifier,
				...statement
			});
		}
	}
	return {
		body: JSON.stringify(statementOverview)
	};
};
