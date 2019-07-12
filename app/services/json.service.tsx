import { MessageModel } from "../models";
import { plainToClass } from "class-transformer";

class JsonService {
  async getChatMessages(): Promise<MessageModel[]> {
    const rawData = await this.getJSON(
      require("../../assets/jsons/chats.json"),
      1000
    );
    const messagesData = rawData["messages"] as [];
    return plainToClass(MessageModel, messagesData);
  }

  private getJSON(json: any, timeout: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(json), timeout);
      } catch (ex) {
        reject(ex);
      }
    });
  }
}

export const jsonService = new JsonService();
