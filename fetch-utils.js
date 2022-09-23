const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//export async functions that fetch data
export async function getBeanies(name, astrologySign) {
    let query = client
        .from('beanie_babies')
        .select('*', { count: 'exact' })
        .order('releaseYear')
        .limit(100);

    if (name) {
        query = query.ilike('title', `%${name}%`);
    }

    if (astrologySign) {
        query = query.eq('astrsologySign', astrologySign);
    }

    const response = await query;

    return response;
}

export async function getAstrologySigns() {
    const response = await client.from('beanie_baby_astro_signs').select();
    return response;
}
