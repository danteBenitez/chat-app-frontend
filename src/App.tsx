import ChatScreen from './chats/ChatScreen';

export default function App() {

  return (
    <div className='flex justify-center items-center p-5 bg-slate-100'>
      <ChatScreen /> 
    </div>
  );
}

/*
      <button onClick={() => setCount(i => i+1)} className='bg-slate-200 flex gap-2 p-5 hover:bg-slate-300 rounded-md border-spacing-1 '>
        <span className='text-xl font-sans'>The count is: { count }</span>
          <PlusIcon width="2rem" height="2rem" />
      </button>
*/