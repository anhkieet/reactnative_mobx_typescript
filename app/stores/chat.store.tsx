import { action, observable } from "mobx";
import { FlatList } from "react-native";
import { MessageModel, UserModel } from "../models";
import { jsonService } from "../services";
import { RootStore } from "./root.store";
import { delay } from "../utils";

export class ChatStore {
  messageList: FlatList<MessageModel> | null = null;

  @observable
  message: string = "";

  @observable
  messages: MessageModel[] = [];

  constructor(private rootStore: RootStore) {}

  @action.bound
  setMessageInput(value: string): void {
    this.message = value;
  }

  @action
  async loadMessages(): Promise<void> {
    const messages = await jsonService.getChatMessages();
    this.messages = messages.sort((a, b) => a.position - b.position);
  }

  @action.bound
  async sendMessage(): Promise<void> {
    const { authUser } = this.rootStore;
    const model = new MessageModel();
    model.content.text = this.message;
    model.sender = authUser.clone();
    model.createdAt = new Date();
    model.updatedAt = new Date();
    this.messages = this.messages.concat([model]);
    await delay(500);

    this.message = "";
    this.messageList && this.messageList.scrollToEnd();
  }

  isSameUser(message: MessageModel, index: number): boolean {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      const prevMessage = this.messages[prevIndex];
      return prevMessage.senderId === message.senderId;
    }
    return false;
  }
}
