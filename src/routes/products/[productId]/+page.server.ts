import { DATABASE_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    console.log(DATABASE_URL)
}
