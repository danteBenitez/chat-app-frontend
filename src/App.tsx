import { useState } from 'react';
import ChatScreen from './chats/ChatScreen';
import Contacts from './chats/Contacts';
import { mockMessages } from './chats/ChatScreen';
import { IUser } from './chats/interface';

const mockContacts: IUser[] = [
  {
    name: "Alice Johnson",
    slug: "alice-johnson",
    email: "alice@example.com",
    image_url: "https://example.com/alice.jpg"
  },
  {
    name: "Bob Smith",
    slug: "bob-smith",
    email: "bob@example.com",
    image_url: "https://example.com/bob.jpg"
  },
  {
    name: "Eve Williams",
    slug: "eve-williams",
    email: "eve@example.com"
  }
];


export default function App() {
  const [messages, setMessages] = useState(mockMessages);
  const [contacts] = useState(mockContacts);

  return (
    <div className='flex justify-center items-center p-5 bg-slate-100'>
      <Contacts contacts={contacts} messages={messages} />
      <ChatScreen onNewMessage={(newMessage) => setMessages([...messages, newMessage])} messages={messages} /> 
    </div>
  );
}
