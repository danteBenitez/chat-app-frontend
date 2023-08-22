import { IMessage } from "./interface";

const mockMessages: IMessage[] = [
    {
       author: {
        name: "User321",
        slug: "@User321",
        email: "user321@gmail.com",
       },
       receiver: {
        user: {
            name: "Current_user_31",
            email: "currentuser321@gmail.com",
            slug: "@nothing"
        }
       },
       body: "One must imagine Sisyphus happy",
       meta: {
        time: {
            createdAt: new Date(),
        }
       }
    }
]
type ChatScreenProps = {
    messages?: IMessage[]
}

export default function ChatScreen({ messages = mockMessages }: ChatScreenProps) {
   return (
     <div>
       {messages.map((m) => (
         <Message message={m} />
       ))}
     </div>
   );
}

type MessageProps = {
    message: IMessage
}


export function Message({ message }: MessageProps) {
   return (
    <div className="rounded-md text-slate-200 overflow-hidden text-lg shadow-sm shadow-gray-700">
        <div className="p-3 w-100 border-bottom border-gray-400 bg-blue-700 hover:bg-blue-800">
            <span className="text-lg">Author: { message.author.slug }</span>
        </div>
        <div className="text-black p-4">
           {
            message.body
           }      
        </div> 
    </div>
   );

}