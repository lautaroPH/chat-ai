import NavbarBottom from '@/components/NavbarBottom';
import WorldLightSvg from '@/components/Svg/WorldLightSvg';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProfileTop from '@/components/ChatAi/ProfileTop';
import Messages from '@/components/ChatAi/Messages';
import SendMessage from '@/components/ChatAi/SendMessage';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { getChatCompletion } from '@/services/get/getChatCompletion';
import { roles } from '@/utils/roles';
import { getCity } from '@/services/get/getCity';
import { getCities } from '@/services/get/getCities';
import ModalSelectCity from '@/components/ChatAi/ModalSelectCity';

export async function getServerSideProps(ctx) {
  const { message, city } = ctx.query;
  const supabase = createServerSupabaseClient(ctx);

  const { data: currentUser } = await supabase.auth.getUser();

  if (!currentUser.user)
    return {
      redirect: {
        destination: `/login?callbackUrl=/chat-ai/${city}${
          message ? `?message=${message}` : ''
        }`,
        permanent: false,
      },
    };

  const { user } = currentUser;
  const { city: cityData } = await getCity(city);

  return {
    props: {
      user: user,
      messageLoaded: message ?? '',
      messagesLoaded: [],
      city,
      cityId: cityData.id,
    },
  };
}

export default function Chat({
  user,
  messageLoaded,
  messagesLoaded,
  city,
  cityId,
}) {
  const [messages, setMessages] = useState(
    messagesLoaded.length > 0
      ? messagesLoaded
      : [
          {
            role: 'assistant',
            content: 'Hi there! I’m your personal travel assistant.',
          },
        ],
  );
  const [message, setmessage] = useState(messageLoaded);
  const [loading, setLoading] = useState(false);
  const [messagesCompletion, setMessagesCompletion] = useState(
    messagesLoaded.slice(0, 4).reverse(),
  );
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);

  const endRef = useRef();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleNewMessages = (newMessages) => {
    setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    const scrollHeight = endRef.current.scrollHeight;
    const clientHeight = endRef.current.clientHeight;
    const scrollPosition = -(scrollHeight - clientHeight) / 2;

    endRef.current.scrollTop = scrollPosition;
  };

  const handleLoading = (value) => {
    setLoading(value);
  };

  const handleMessagesCompletion = (newMessages) => {
    setMessagesCompletion((state) => [...state, newMessages]);
  };

  const resetMessages = useCallback(() => {
    const lastTwoMessages = messages.slice(0, 2).reverse();
    setMessagesCompletion(lastTwoMessages);
  }, [messages]);

  const updateMessages = useCallback(
    async (question, removeQuestion) => {
      const userMessage = {
        role: roles.user,
        content: question,
      };
      if (messagesCompletion.length === 8) {
        resetMessages();
      }
      setMessages((state) => [
        { ...userMessage, count: messages.length + 1 },
        ...state,
      ]);
      setMessagesCompletion((state) => [...state, userMessage]);
      setLoading(true);
      removeQuestion();

      await getChatCompletion({
        question,
        messages: [...messagesCompletion, userMessage],
        handleLoading,
        supabase,
        userId: user.id,
        city,
        cityId,
        allMessages: messages,
        handleMessagesCompletion,
        setMessages,
      });
    },
    [
      messagesLoaded,
      supabase,
      user,
      messagesCompletion,
      resetMessages,
      city,
      cityId,
    ],
  );

  const handleOpenModal = async () => {
    const { cities } = await getCities();

    setCities(cities);
    setIsOpen(true);
  };

  useEffect(() => {
    if (message) {
      updateMessages(message, () => setmessage('')).then(() => {});
      router.push(`/chat-ai/${city}`);
    }
  }, [message, updateMessages, router, city]);

  return (
    <div className="relative flex flex-col items-center w-full h-screen max-w-2xl m-auto">
      <Head>
        <title>{`Chat with Chenkster AI - Chenkster`}</title>
        <meta
          name="description"
          content={`Chat with Chenkster AI and get help with your projects`}
        />
        <link
          rel="icon"
          sizes="192x192"
          href="https://static.wixstatic.com/media/6f6395_7b5556b986c74a7f83b46ebc70934117%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/6f6395_7b5556b986c74a7f83b46ebc70934117%7Emv2.png"
        ></link>
      </Head>
      <div className="flex flex-col h-[83%] md:h-[90%] max-w-2xl w-full">
        <ProfileTop
          avatar={'/images/logoChat.webp'}
          username={`Chenkster AI - ${city}`}
          handleOpenModal={handleOpenModal}
        />
        <Messages
          messages={messages}
          endRef={endRef}
          supabase={supabase}
          handleChangeMessage={handleNewMessages}
          userId={user.id}
          loading={loading}
        />
        <SendMessage
          endRef={endRef}
          updateMessages={updateMessages}
          loading={loading}
        />
      </div>
      <NavbarBottom
        username={user?.user_metadata?.username}
        role={user?.user_metadata?.role}
        userId={user?.id}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center m-auto -z-30">
        <WorldLightSvg />
      </div>
      <ModalSelectCity isOpen={isOpen} setIsOpen={setIsOpen} cities={cities} />
    </div>
  );
}
