import { roles } from '@/utils/roles';

export const getChatCompletion = async ({
  messages,
  userId,
  handleMessagesCompletion,
  handleLoading,
  city = 'Milan',
  setMessages,
  allMessages,
  question,
}) => {
  const res = await fetch('/api/chat-streaming', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      userId,
      city,
      question,
    }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let done = false;
  let allAnswer = '';
  handleLoading(false);

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);

    setMessages((prev) => {
      const lastMessage = prev.find(
        (message) =>
          message.role === roles.assistant &&
          message.count === allMessages.length + 2,
      );
      if (lastMessage) {
        const newMessages = [...prev];
        newMessages[0] = {
          ...lastMessage,
          content: `${lastMessage?.content ?? ''}${chunkValue}`,
        };
        allAnswer = `${lastMessage?.content ?? ''}${chunkValue}`;
        return newMessages;
      }

      allAnswer = chunkValue;

      return [
        {
          role: roles.assistant,
          content: chunkValue,
          count: allMessages.length + 2,
        },
        ...prev,
      ];
    });
  }

  handleMessagesCompletion({ role: roles.assistant, content: allAnswer });
};
