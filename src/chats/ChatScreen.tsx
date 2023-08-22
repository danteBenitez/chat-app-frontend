import { IMessage } from "./interface";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useInput } from "../hooks/useInput";

export const mockMessages: IMessage[] = [
  {
    author: {
      name: "User321",
      slug: "@User321",
      email: "user321@gmail.com",
    },
    body: "One must imagine Sisyphus happy",
    meta: {
      time: {
        createdAt: new Date(),
      },
    },
    id: 1
  },
  {
    id: 2,
    author: {
      name: "User123",
      slug: "@User123",
      email: "user123@gmail.com",
    },
    body: "Yes, I do",
    meta: {
      time: {
        createdAt: new Date(),
      },
    },
  },
];

type ChatScreenProps = {
  messages?: IMessage[];
  onNewMessage: (m: IMessage) => void
};

export default function ChatScreen({
  messages = mockMessages,
  onNewMessage
}: ChatScreenProps) {

  const submitHandler = (m: IMessage) => {
    onNewMessage(m);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full pt-10 flex flex-col gap-5 h-screen border border-slate-300 p-4">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
      </div>
      <ChatInput onSubmit={submitHandler} />
    </div>
  );
}

type ChatInputProps = {
  onSubmit: (message: IMessage) => void,
}
let lastId = 3;

export function ChatInput({ onSubmit }: ChatInputProps) {
  const { input: messageBody, onChange } = useInput('');
  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: ++lastId,
      author: user,
      body: messageBody,
      meta: {
        time: {
          createdAt: new Date()
        }
      }
    })
  };

  const isEmpty = messageBody.length == 0;

  return (
      <form className="w-full flex flex-row overflow-hidden mb-2 rounded-sm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className="w-full border-2 h-13 p-3 border-slate-300 focus:border-blue-600 focus:caret-blue-600 hover:border-blue-600 hover:caret-blue-600 rounded-sm"
          placeholder="Write a message..."
          onChange={onChange}
        ></input>
        <button type="submit" className={`text-white p-3 ${isEmpty ? "bg-slate-500" : "bg-blue-700"}`} disabled={isEmpty}>
            <PaperAirplaneIcon width={"1.4rem"} height={"1.4rem"} className="rotate-[-45deg]" />
        </button>
      </form>
  );
}


type MessageProps = {
  message: IMessage;
};

import { useUser } from "../hooks/useUser";

export function Message({ message }: MessageProps) {
  const { user } = useUser();
  const itsOwnMessage = user.slug == message.author.slug;

  return (
    <div
      className={`rounded-md text-slate-200 ${
        itsOwnMessage ? "ms-10" : "me-10"
      } overflow-hidden text-lg shadow-sm shadow-gray-700`}
    >
      {!itsOwnMessage && (
        <div className="p-3 w-100 border-bottom border-gray-400 bg-blue-700 hover:bg-blue-800">
          <span className="text-lg">{message.author.slug}</span>
        </div>
      )}
      <div
        className={`p-4 ${
          itsOwnMessage ? "text-white bg-blue-700" : "text-black"
        }`}
      >
        {message.body}
      </div>
    </div>
  );
}
