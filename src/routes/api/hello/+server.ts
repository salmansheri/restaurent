export function GET() {
	return new Response(JSON.stringify({ mesage: 'hello world' }));
}
