export interface IMessage {
  id: number;
  author: IUser;
  body: string;
  meta: {
    time: {
      createdAt: Date;
      updatedAt?: Date;
      deletedAt?: Date;
    };
  };
}

export interface IUser {
  name: string;
  slug: string;
  email: string;
  image_url?: string;
}

export interface IGroup {
  name: string;
  membersId: number[];
  imageUrl: string;
}
