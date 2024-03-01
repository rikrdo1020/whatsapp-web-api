export default interface LeadExternal {
  sendMsg({ message, phone }: { message: string; phone: string }): Promise<any>;
  sendImg({ content, phone }: { content: object; phone: string }): Promise<any>;
  sendGroupMsg({
    message,
    groupId,
  }: {
    message: string;
    groupId: string;
  }): Promise<any>;
}
