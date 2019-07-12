import { Type } from "class-transformer";
import { UserModel, I18nModel } from ".";
import moment from "moment";

type MessageType = "TEXT" | "SYSTEM" | "PHOTO";
type ContentType = "GROUP_PROFILE_UPDATED" | "GROUP_CREATED";

export class MessageModel {
  id: number = 0;
  groupId: number = 0;
  type: MessageType = "TEXT";
  position: number = 0;
  senderId?: number = 0;

  @Type(() => Date)
  createdAt: Date = new Date();

  @Type(() => Date)
  updatedAt: Date = new Date();

  @Type(() => UserModel)
  sender?: UserModel;

  @Type(() => MessageContentModel)
  content: MessageContentModel = new MessageContentModel();

  get displayTime(): string {
    return moment(this.updatedAt).format("LT");
  }

  get displaySystemDate(): string {
    return moment(this.createdAt)
      .format("ddd, MMM DD")
      .toUpperCase();
  }
}

export class MessageContentModel {
  url?: string;

  @Type(() => I18nModel)
  i18n?: I18nModel;

  text: string = "";
  subType?: ContentType;
}
