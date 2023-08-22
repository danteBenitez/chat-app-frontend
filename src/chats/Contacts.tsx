import { IMessage, IUser } from "./interface";

type ContactPanelProps = {
  contacts: IUser[];
  messages: IMessage[];
};

export default function Contacts({ contacts, messages }: ContactPanelProps) {
  return (
    <div className="h-screen w-[20rem] bg-slate-100 border  border-slate-400 pt-8 mb-4">
      {contacts.map((c) => (
        <ContactItem contact={c} messages={messages} key={c.slug} />
      ))}
    </div>
  );
}

type ContactItemProps = {
  contact: IUser;
  messages: IMessage[];
};

function ContactItem({ contact, messages }: ContactItemProps) {
  return (
    <div>
      <ProfilePreview
        user={contact}
        messages={messages.filter((m) => m.author.slug == contact.slug)}
      />
    </div>
  );
}

type ProfilePreviewProps = {
  user: IUser;
  messages: IMessage[];
};

function ProfilePreview({ user, messages }: ProfilePreviewProps) {
  return (
    <div className="border-y border-slate-400 p-4 flex gap-3 justify-start">
      <div className="border border-slate-300 overflow-hidden w-[2.9rem] h-[2.9rem] flex justify-center items-center rounded-full ">
        <img
          src={user.image_url}
          srcSet="/vite.svg"
          alt={`${user.slug}'s Profile photo`}
        />
      </div>
      <div>
        <h6 className="font-sans font-bold text-blue-800">{user.name}</h6>
        <span className="text-slate-600">{messages[0]?.body ?? "There was not last message..."} </span>
      </div>
    </div>
  );
}
