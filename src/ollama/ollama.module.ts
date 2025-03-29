import { Module } from "@nestjs/common";
import { OllamaController } from "./ollama.controller";
import { HttpModule } from "@nestjs/axios";
import { OllamaService } from "./ollama.service";


@Module({
    controllers: [OllamaController],
    providers: [OllamaService]
})
export class OllamaModule { }