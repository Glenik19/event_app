import { createConnection } from '$lib/db/mysql';

export async function load({ locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM events LIMIT 10');
	let [categories] = await connection.execute('SELECT * FROM categories');

	return {
		events: rows,
		categories: categories,
		user: locals.user
	};
}
