import express, { request } from 'express';
import { OpenAI } from 'openai';
import cors from 'cors';
import { getMenuItems, foodSystemContent, tags } from './foodLogic.js';
import { AdviceSystemContent } from './userLogic.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (request, res) => {
    // za testiranje na spinner
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // return res.json([]);
    console.log(request)
    console.log(request.body)
    const {message, type} = request.body;
    let systemContent = ''
    if (type === 'food') systemContent = foodSystemContent
    else if (type === 'user_help') systemContent = AdviceSystemContent
    // else if (type === 'blog') systemContent = null;
    console.log(message);
    const query = [
        ...systemContent,
        {
            role: 'user',
            content: message
        }
    ];
    const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: query,
        max_tokens: 300,
        temperature: 0, 
    });
    console.log(completion.choices[0])
    console.log(completion.choices[0].message)
    console.log(completion.choices[0].message.content)
    // const items = getMenuItems(completion.choices[0].message.content);
    // res.json(items.length > 0 ? items : []);
    res.json(completion.choices[0].message.content)
});

app.listen(3002, () => console.log('Server running on port 3002'));