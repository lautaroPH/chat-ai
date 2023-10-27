import MessageAi from './MessageAi';
import MessageAuthor from './MessageAuthor';

const Message = ({ isMine, content, index, messageCount }) => {
  return (
    <>
      {isMine ? (
        <MessageAuthor content={content} />
      ) : (
        <MessageAi
          content={content}
          index={index}
          messageCount={messageCount}
        />
      )}
    </>
  );
};

export default Message;
