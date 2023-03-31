import {comments} from '$lib/comments.js';
import {json} from '@sveltejs/kit'

export const load = async () => {
    const heading = "list of available recipes";
    return { heading };
};