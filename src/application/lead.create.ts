import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories: [LeadRepository, LeadExternal]) {
    const [leadRepository, leadExternal] = respositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  public async sendMessage({
    message,
    userList,
  }: {
    message: string;
    userList: [{ nombre: string; telefono: string }];
  }) {
    const sendMessageOperation = [];
    for (const user of userList) {
      const editedMesage = message.replace("{nombre}", user.nombre);
      sendMessageOperation.push(
        this.leadExternal.sendMsg({
          message: editedMesage,
          phone: user.telefono,
        })
      );
    }

    try {
      const responses = await Promise.all(sendMessageOperation);
      return responses;
    } catch (error) {
      return error;
    }
  }

  public async sendMessageToGroup({
    message,
    groupId,
  }: {
    message: string;
    groupId: string;
  }) {
    try {
      const response = await this.leadExternal.sendGroupMsg({
        message,
        groupId,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  public async sendImage({
    image,
    caption,
    userList,
  }: {
    image: string;
    caption: string;
    userList: [{ nombre: string; telefono: string }];
  }) {
    const sendImageOperation = [];
    for (const user of userList) {
      const editedCaption = caption.replace("{nombre}", user.nombre);
      sendImageOperation.push(
        this.leadExternal.sendImg({
          content: { image, caption: editedCaption },
          phone: user.telefono,
        })
      );
    }
    try {
      const responses = await Promise.all(sendImageOperation);
      return responses;
    } catch (error) {
      return error;
    }
  }
}
