import InfiniteScroll from 'react-infinite-scroll-component';
import LoaderMessages from './LoaderMessages.js';
import Message from './Message';
import { useState } from 'react';
import { roles } from '@/utils/roles';
import Loader from './Loader';
import NoMessages from './NoMessages';

const Messages = ({
  messages,
  endRef,
  handleChangeMessage,
  supabase,
  userId,
  loading,
}) => {
  const [hasMore, setHasMore] = useState(messages.length === 30);

  return (
    <div
      id="scrollableDiv"
      ref={endRef}
      className="relative flex flex-col-reverse order-2 w-full h-screen overflow-x-hidden overflow-y-auto"
    >
      <div className="flex-auto min-h-[12px] " />
      {loading && <Loader />}
      {messages.length === 0 && <NoMessages />}
      <InfiniteScroll
        dataLength={messages.length}
        next={() => {}}
        inverse={true}
        hasMore={hasMore}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        loader={<LoaderMessages />}
        scrollableTarget="scrollableDiv"
      >
        {messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isMine={message.role === roles.user}
            index={i}
            messageCount={message?.count}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Messages;
