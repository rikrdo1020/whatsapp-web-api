import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, userList } = body;
    const response = await this.leadCreator.sendMessage({ message, userList });
    res.send(response);
  };

  public sendMsgGroupCtrl = async ({ body }: Request, res: Response) => {
    const { message, groupId } = body;
    const response = await this.leadCreator.sendMessageToGroup({
      message,
      groupId,
    });
    res.send(response);
  };

  public sendImgCtrl = async ({ body }: Request, res: Response) => {
    const { image, caption, userList } = body;
    console.log(body);
    const response = await this.leadCreator.sendImage({
      image,
      caption,
      userList,
    });
    res.send(response);
  };
}

export default LeadCtrl;
