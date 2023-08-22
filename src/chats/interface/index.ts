export interface IMessage {
  author: IUser;
  receiver: {
    group?: IGroup;
    user?: IUser;
    deliveredAt?: Date;
  };
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
}

export interface IGroup {
  name: string;
  membersId: number[];
  imageUrl: string;
}
