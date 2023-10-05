import MessageFormUI from '@/components/customMessageForms/MessageFormUI.jsx';
import { useState } from 'react';
import { usePostAiTextMutation } from '@/state/api.js';

function Ai({ props, activeChat }) {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [triger] = usePostAiTextMutation();

  function handleChange(e) {
    setMessage(e.target.value);
  }

  async function handleSubmit() {
    const date = new Date()
      .toISOString()
      .replace('T', '')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);
    const att = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: att,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    triger(form);
    setMessage('');
    setAttachment('');
  }

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default Ai;
