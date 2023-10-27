export const getChatUrl = ({ cityId, city }) => {
  const cityName = cityId || city;
  const chatPath = cityName ? `/chat-ai/${cityName}` : '/chat';
  return chatPath;
};
