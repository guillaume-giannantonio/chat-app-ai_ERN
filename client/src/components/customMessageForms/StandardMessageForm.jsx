import { useState } from 'react';
import MessageFormUI from '@/components/customMessageForms/MessageFormUI.jsx';

function StandardMessageForm({ props, activeChat }) {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');

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

export default StandardMessageForm;
