import MessageContent from './MessageContent';

const MessageAuthor = ({ content }) => {
  return (
    <div className="flex flex-col items-end mb-3 mr-3">
      <div className="rounded-3xl break-words bg-[#0977E140] max-w-[90%] min-w-[10%]  bg-opacity-95 relative px-4 py-[2px]  shadow-md">
        <MessageContent content={content} />
      </div>
    </div>
  );
};

export default MessageAuthor;
