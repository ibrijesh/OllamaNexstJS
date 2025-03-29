import { Injectable } from "@nestjs/common";
import axios from "axios";
import ollama from 'ollama';

@Injectable()
export class OllamaService {

    private readonly OLLAMA_API_URL = 'http://localhost:11434/api/generate';

    constructor() { }

    async getPromptResult<String>(prompt: string, model: string): Promise<any> {

        try {

            const payload = {
                model,
                prompt,
                stream: false, // Set to true for streaming
            };

            const response = await axios.post(this.OLLAMA_API_URL, payload);

            return response.data.response; // AI-generated response

        } catch (error) {
            console.error('Axios error:', error.message);
            throw new Error('Failed to fetch data');
        }

    }

    async getPromptUsingOllamPackage<String>(prompt: string, model: string): Promise<any> {

        try {

            const response = await ollama.chat({
                model: model,
                messages: [{ role: 'user', content: prompt }],
            })
            console.log(response.message.content)

            return response.message.content;

        }
        catch (error) {
            console.error("Ollama package error");
            throw new Error("Failed to fetch error");
        }

    }

}