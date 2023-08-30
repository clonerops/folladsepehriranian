import React, { useState, useEffect } from 'react';

interface MessageProps {
  type: 'success' | 'error';
  message: string;
}

const Message: React.FC<MessageProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getMessageTypeClass = () => {
    switch (type) {
      case 'success':
        return 'tw-bg-green-500';
      case 'error':
        return 'tw-bg-red-500';
      default:
        return '';
    }
  };

  return (
    <div
      className={`tw-p-4 tw-text-white ${getMessageTypeClass()} ${
        isVisible ? 'tw-opacity-100' : 'tw-opacity-0 tw-pointer-events-none'
      } tw-transition-opacity tw-duration-500 tw-ease-in-out`}
    >
      {message}
    </div>
  );
};

export default Message;
