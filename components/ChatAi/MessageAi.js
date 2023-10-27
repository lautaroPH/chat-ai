import MessageContent from './MessageContent';
import ResponseAcurrate from './ResponseAcurrate';

const MessageAi = ({ content, index, messageCount }) => {
  return (
    <div className="flex flex-col items-start mb-3 ml-3">
      <div className="rounded-3xl break-words bg-[#55F65F40] px-4 py-[2px]  max-w-[80%] min-w-[10%]relative shadow-md">
        <MessageContent content={content} role={'assistant'} />
      </div>
      {messageCount >= 8 && messageCount - 8 === index && <ResponseAcurrate />}
    </div>
  );
};

export default MessageAi;
