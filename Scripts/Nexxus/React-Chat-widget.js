import React, { useState } from 'react';

const NexxusChat = ({ idProfile, userId, color = '#007bff', position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Construir la URL del iframe con los parámetros
  const chatUrl = new URL('http://localhost:3000');
  chatUrl.searchParams.append('id_profile', idProfile);
  chatUrl.searchParams.append('user_id', userId);

  // Manejar el toggle del chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Estilos dinámicos basados en la posición
  const getPositionStyle = () => {
    switch (position) {
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'top-left':
        return { top: '20px', left: '20px' };
      default:
        return { bottom: '20px', right: '20px' };
    }
  };

  return (
    <div
      className="widget-chat-container"
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 999999,
        ...getPositionStyle(),
      }}
    >
      {/* Iframe del chat */}
      <iframe
        src={chatUrl.toString()}
        title="Nexxus Chat"
        className="widget-chat-frame"
        style={{
          width: '380px',
          height: '600px',
          border: 'none',
          borderRadius: '15px',
          marginBottom: '20px',
          transition: 'all 0.3s ease',
          transformOrigin: 'bottom right',
          transform: isOpen ? 'scale(1)' : 'scale(0)',
          opacity: isOpen ? '1' : '0',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* Botón toggle */}
      <button
        className="widget-chat-toggle"
        onClick={toggleChat}
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: color,
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 4px 12px ${color}33`,
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default NexxusChat;
