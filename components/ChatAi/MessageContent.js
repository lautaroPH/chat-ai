import ReactMarkdown from 'react-markdown';

const MessageContent = ({ content }) => {
  return (
    <div className="z-20 flex flex-col mt-1">
      <ReactMarkdown className="mb-2 text-sm whitespace-pre-wrap content-message font-lato text-chenkster-blue">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MessageContent;
