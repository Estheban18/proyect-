import React, { useState, useRef, useEffect } from 'react';
import './Whatsappchat.css';

const Whatsappchat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 💬 ¿En qué puedo ayudarte hoy por WhatsApp?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Respuestas predefinidas para WhatsApp
  const whatsappResponses = {
    saludo: ["¡Hola! 😊 ¿Necesitas contactarnos por WhatsApp?", "¡Hola! Estamos aquí para ayudarte por WhatsApp.", "¡Hola! 👋 ¿En qué podemos ayudarte?"],
    contacto: ["Puedes escribirnos al +1 (555) 123-WAPP (9277)", "Nuestro WhatsApp: +1 (555) 987-6543", "Escríbenos al +1 (555) 123-4567 para atención inmediata"],
    horario: ["Atendemos por WhatsApp de 8:00 AM a 8:00 PM", "Estamos disponibles 24/7 para emergencias", "Horario de atención: Lunes a Viernes de 9:00 a 18:00"],
    default: ["Perfecto, te conectaremos con nuestro equipo por WhatsApp.", "Un agente se comunicará contigo shortly por WhatsApp.", "Gracias por contactarnos por WhatsApp. Te responderemos pronto."]
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

    // Simular respuesta después de un delay
    setTimeout(() => {
      generateWhatsappResponse(inputText.toLowerCase());
      setIsTyping(false);
    }, 1500);
  };

  const generateWhatsappResponse = (userInput) => {
    let responseText = '';
    
    if (userInput.includes('hola') || userInput.includes('buenos') || userInput.includes('buenas')) {
      responseText = whatsappResponses.saludo[Math.floor(Math.random() * whatsappResponses.saludo.length)];
    } else if (userInput.includes('número') || userInput.includes('telefono') || userInput.includes('contacto')) {
      responseText = whatsappResponses.contacto[Math.floor(Math.random() * whatsappResponses.contacto.length)];
    } else if (userInput.includes('horario') || userInput.includes('disponible') || userInput.includes('tiempo')) {
      responseText = whatsappResponses.horario[Math.floor(Math.random() * whatsappResponses.horario.length)];
    } else {
      responseText = whatsappResponses.default[Math.floor(Math.random() * whatsappResponses.default.length)];
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

  const openWhatsapp = () => {
    // Número de WhatsApp (cambiar por el número real)
    const phoneNumber = "15551234567";
    const message = "¡Hola! Me gustaría obtener más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsappchat-container">
      {/* Botón flotante de WhatsApp */}
      <button 
        className={`whatsappchat-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Abrir chat de WhatsApp"
      >
        <div className="whatsappchat-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" fill="currentColor"/>
          </svg>
        </div>
        <span className="whatsappchat-notification"></span>
      </button>

      {/* Ventana del chat de WhatsApp */}
      <div className={`whatsappchat-window ${isOpen ? 'active' : ''}`}>
        <div className="whatsappchat-header">
          <div className="whatsappchat-info">
            <div className="whatsappchat-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" fill="currentColor"/>
              </svg>
            </div>
            <div className="whatsappchat-details">
              <h3>WhatsApp Business</h3>
              <p>En línea • Responde rápidamente</p>
            </div>
          </div>
          <button 
            className="whatsappchat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar chat de WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="whatsappchat-messages">
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

        <div className="whatsappchat-quick-replies">
          <button onClick={() => handleQuickReply('¿Cuál es su número de WhatsApp?')} className="quick-reply">
            📞 Número
          </button>
          <button onClick={() => handleQuickReply('¿Qué horario tienen?')} className="quick-reply">
            🕒 Horario
          </button>
          <button onClick={() => handleQuickReply('Necesito ayuda urgente')} className="quick-reply">
            🚀 Urgencia
          </button>
        </div>

        <div className="whatsappchat-actions">
          <button onClick={openWhatsapp} className="whatsapp-action-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" fill="currentColor"/>
            </svg>
            Abrir WhatsApp
          </button>
        </div>

        <form onSubmit={handleSendMessage} className="whatsappchat-input">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu consulta..."
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

export default Whatsappchat; 