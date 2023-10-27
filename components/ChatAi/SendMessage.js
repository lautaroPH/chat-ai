import { useState } from 'react';
import SendSvg from '../Svg/SendSvg';
import TextareaAutosize from 'react-textarea-autosize';

const SendMessage = ({ endRef, updateMessages, loading }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleRemoveMessage = () => {
    setNewMessage('');
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() && !loading) {
      await updateMessages(newMessage.trim(), handleRemoveMessage);

      setTimeout(() => {
        endRef.current.scrollTo(0, endRef.current.scrollHeight);
      }, 300);
      setNewMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(event);
    }
  };

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <section className="order-4 w-full">
      <form
        className="relative flex gap-2 px-2 pt-2 xs:px-4"
        onSubmit={sendMessage}
      >
        <TextareaAutosize
          value={newMessage}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          minRows={1}
          maxRows={6}
          className="pl-4 pr-9 xs:pr-14 border-none bg-[#0973e11c] shadow outline-none rounded-2xl w-44 grow py-4 font-lato resize-none"
          autoComplete="off"
          placeholder="Type something"
          name="message"
        />
        <button
          disabled={loading}
          className="absolute right-3 xs:right-10 bottom-4"
          type="submit"
        >
          <SendSvg />
        </button>
      </form>
    </section>
  );
};

export default SendMessage;
