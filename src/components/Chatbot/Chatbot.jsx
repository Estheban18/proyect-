import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Respuestas predefinidas del bot
  const botResponses = {
    saludo: ["¡Hola! 😊", "¡Hola! ¿Cómo estás?", "¡Hola! ¿En qué puedo ayudarte?"],
    ayuda: ["Puedo ayudarte con información sobre nuestros servicios.", "Estoy aquí para responder tus preguntas."],
    servicios: ["Ofrecemos desarrollo web, aplicaciones móviles y consultoría tecnológica.", "Nuestros servicios incluyen diseño UX/UI, desarrollo frontend y backend."],
    contacto: ["Puedes contactarnos en info@empresa.com o al +1 (555) 123-4567.", "Nuestro horario de atención es de 9:00 a 18:00 de lunes a viernes."],
    default: ["Lo siento, no entendí tu pregunta. ¿Podrías reformularla?", "Interesante pregunta. Déjame consultar esa información."]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular respuesta del bot después de un delay
    setTimeout(() => {
      generateBotResponse(inputText.toLowerCase());
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    let responseText = '';
    
    if (userInput.includes('hola') || userInput.includes('buenos días') || userInput.includes('buenas tardes')) {
      responseText = botResponses.saludo[Math.floor(Math.random() * botResponses.saludo.length)];
    } else if (userInput.includes('ayuda') || userInput.includes('asistencia')) {
      responseText = botResponses.ayuda[Math.floor(Math.random() * botResponses.ayuda.length)];
    } else if (userInput.includes('servicio') || userInput.includes('producto')) {
      responseText = botResponses.servicios[Math.floor(Math.random() * botResponses.servicios.length)];
    } else if (userInput.includes('contacto') || userInput.includes('email') || userInput.includes('teléfono')) {
      responseText = botResponses.contacto[Math.floor(Math.random() * botResponses.contacto.length)];
    } else {
      responseText = botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }

    const botMessage = {
      id: Date.now() + 1,
      text: responseText,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleQuickReply = (reply) => {
    setInputText(reply);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  };

  return (
    <div className="chatbot-container-left">
      {/* Botón flotante del chatbot en lado izquierdo */}
      <button 
        className={`chatbot-toggle-left ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Abrir chat de asistencia"
      >
        <div className="chatbot-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="chatbot-notification"></span>
      </button>

      {/* Ventana del chatbot en lado izquierdo */}
      <div className={`chatbot-window-left ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-info">
            <div className="chatbot-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="chatbot-details">
              <h3>Asistente Virtual</h3>
              <p>En línea • Responde al instante</p>
            </div>
          </div>
          <button 
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar chat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-quick-replies">
          <button onClick={() => handleQuickReply('¿Qué servicios ofrecen?')} className="quick-reply">
            Servicios
          </button>
          <button onClick={() => handleQuickReply('¿Cómo los contacto?')} className="quick-reply">
            Contacto
          </button>
          <button onClick={() => handleQuickReply('Necesito ayuda')} className="quick-reply">
            Ayuda
          </button>
        </div>

        <form onSubmit={handleSendMessage} className="chatbot-input">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isTyping}
            />
            <button 
              type="submit" 
              disabled={!inputText.trim() || isTyping}
              className="send-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot; 