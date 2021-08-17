export type ProgrammingLanguage = 'javascript' | 'typescript';

export interface StatementSpecification {
	title: readonly string;
	statement: readonly string;
	code?: readonly string[];
	solution?: readonly string;
}

export interface Statement {
	identifier: string;
	language: ProgrammingLanguage;
	en: Required<StatementSpecification>;
	de?: StatementSpecification;
}

export type FileSystemStatement = Omit<Statement, 'identifier'>
