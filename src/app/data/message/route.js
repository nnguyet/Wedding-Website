'use server';

export async function POST(request) {
    try {
        const data = await request.json();
        const mess = await fetch(`https://api.jsonstorage.net/v1/json/
            ${process.env.JSON_DB_USER}/${process.env.JSON_DB_ITEM}?apiKey=${process.env.JSON_DB_API_KEY}`);
            
        const messages = await mess.json();
        messages.push(data);
        const res = await fetch(`https://api.jsonstorage.net/v1/json/
            ${process.env.JSON_DB_USER}/${process.env.JSON_DB_ITEM}?apiKey=${process.env.JSON_DB_API_KEY}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messages),
        });
        
        return res;
    }
    catch (error) {
        return Response.json({'message':'Cannot add data'}, {status: 500})
    }
}