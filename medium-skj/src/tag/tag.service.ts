// src/tag/tag.service.ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class TagService {
  findAll():string[] {
    return ['dragons', 'coffee', 'vikings', 'weather'];
  }
}

