import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { OllamaService } from "./ollama.service";

@Controller("ollama")
export class OllamaController {

    constructor(private readonly ollamaService: OllamaService) { }

    @Get()
    sayHello() {
        return "Hello, From Ollama"
    }


    @Post("generate")
    async generateResponse(@Body() body) {
        var prompt = body.prompt;
        var model = body.model;

        return await this.ollamaService.getPromptUsingOllamPackage(prompt, model);
    }

}