"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Phone, Calendar } from 'lucide-react';
import { DemoBookingDialog } from '@/components/demo-booking-dialog';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface QuickQuestion {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [showFirstTimeAnimation, setShowFirstTimeAnimation] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 检查是否显示首次提示
  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem('chatbot_first_time_prompt');
    if (!hasSeenPrompt) {
      setShowFirstTimeAnimation(true);
      // 4秒后标记为已看过
      setTimeout(() => {
        localStorage.setItem('chatbot_first_time_prompt', 'true');
      }, 4000);
    }
  }, []);

  // 滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 添加消息
  const addMessage = (content: string, type: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // 处理用户输入
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    setIsTyping(true);

    // 模拟回复
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 简单的自动回复逻辑
    let botResponse = '';
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('产品') || lowerMessage.includes('服务')) {
      botResponse = '我们的核心产品包括：\n\n• 智能平台 - AI驱动的工作流程引擎\n• 智算底座 - 企业级AI基础设施\n• 行业方案 - 针对不同行业的定制化解决方案\n\n您可以点击下方"产品咨询"了解更多详情。';
    } else if (lowerMessage.includes('演示') || lowerMessage.includes('预约')) {
      botResponse = '您可以通过点击下方"演示预约"按钮来预约产品演示。我们会安排专业顾问为您详细介绍我们的解决方案。';
    } else if (lowerMessage.includes('技术') || lowerMessage.includes('支持') || lowerMessage.includes('帮助')) {
      botResponse = '我们的技术支持团队提供7x24小时服务。\n\n📞 电话：400-810-8888\n📧 邮箱：support@digitalchina.com\n\n您也可以选择"技术支持"了解更多信息。';
    } else if (lowerMessage.includes('价格') || lowerMessage.includes('费用') || lowerMessage.includes('报价')) {
      botResponse = '我们的产品方案根据企业规模和需求进行定制。建议您预约产品演示，我们的专业顾问会为您提供详细的方案和报价信息。';
    } else if (lowerMessage.includes('你好') || lowerMessage.includes('hi') || lowerMessage.includes('在吗')) {
      botResponse = '您好！我是神州数码AI助理，很高兴为您服务。请问有什么可以帮您的吗？';
    } else {
      botResponse = '感谢您的咨询。如果您需要了解更多产品信息、预约演示或获取技术支持，可以使用下方快捷按钮，或拨打我们的服务热线：400-810-8888';
    }

    addMessage(botResponse, 'bot');
    setIsTyping(false);
  };

  // 快捷问题
  const quickQuestions: QuickQuestion[] = [
    {
      id: 'products',
      label: '产品咨询',
      icon: <MessageCircle size={16} />,
      action: () => {
        addMessage('我想了解产品信息', 'user');
        setIsTyping(true);
        setTimeout(() => {
          addMessage('我们的核心产品包括：\n\n• 智能平台 - AI驱动的工作流程引擎\n• 智算底座 - 企业级AI基础设施\n• 行业方案 - 针对不同行业的定制化解决方案\n\n您可以通过页面导航栏查看各产品的详细介绍。', 'bot');
          setIsTyping(false);
        }, 1000);
      }
    },
    {
      id: 'booking',
      label: '演示预约',
      icon: <Calendar size={16} />,
      action: () => {
        setIsBookingDialogOpen(true);
        addMessage('我想预约产品演示', 'user');
        setIsTyping(true);
        setTimeout(() => {
          addMessage('预约表单已打开，请填写相关信息，我们会尽快与您联系安排演示。', 'bot');
          setIsTyping(false);
        }, 500);
      }
    },
    {
      id: 'support',
      label: '技术支持',
      icon: <Phone size={16} />,
      action: () => {
        addMessage('我需要技术支持', 'user');
        setIsTyping(true);
        setTimeout(() => {
          addMessage('我们的技术支持团队提供7x24小时服务。\n\n📞 电话：400-810-8888\n📧 邮箱：support@digitalchina.com\n\n您也可以在工作时间 9:00-18:00 联系我们的在线客服。', 'bot');
          setIsTyping(false);
        }, 1000);
      }
    }
  ];

  // 初始欢迎语
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage('您好，我是神州数码AI助理，很高兴为您服务！\n\n我可以帮您：\n• 了解产品信息\n• 预约产品演示\n• 获取技术支持\n\n请问有什么可以帮您的吗？', 'bot');
      }, 300);
    }
  }, [isOpen]);

  // 处理回车发送
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* 首次进入提示 */}
      {showFirstTimeAnimation && !isOpen && (
        <div
          className="fixed bottom-6 right-24 z-40 px-4 py-3 rounded-xl shadow-lg animate-fade-in-out"
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid rgb(215, 0, 29)',
            animation: 'fadeInOut 4s ease-in-out forwards'
          }}
        >
          <p className="text-sm font-medium" style={{ color: '#333333' }}>
            🤖 有什么可以帮您的吗？
          </p>
        </div>
      )}

      {/* 悬浮按钮 */}
      {!isOpen && (
        <>
          {/* 鼠标停留时的提示框 */}
          {isHovering && (
            <div
              className="fixed bottom-6 right-24 z-50 px-4 py-3 rounded-xl shadow-2xl animate-fade-in"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid rgb(215, 0, 29)',
                animation: 'fadeIn 0.3s ease-out',
                maxWidth: '280px'
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                🤖 神州数码AI助理
              </p>
              <p className="text-xs mb-3 leading-relaxed" style={{ color: '#666666' }}>
                我可以帮您：
                <br />• 了解产品信息
                <br />• 预约产品演示
                <br />• 获取技术支持
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="快速提问..."
                  className="flex-1 px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    setIsHovering(false);
                    setTimeout(() => {
                      inputRef.current?.focus();
                    }, 100);
                  }}
                />
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              setShowFirstTimeAnimation(false);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, rgb(215, 0, 29) 0%, #CC0000 100%)',
              boxShadow: '0 8px 32px rgba(230, 0, 18, 0.4)',
              animation: showFirstTimeAnimation ? 'bounceIn 0.8s ease-out, float 3s ease-in-out infinite 0.8s' : 'float 3s ease-in-out infinite'
            }}
          >
            <MessageCircle className="text-white" size={28} />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full"
              style={{ backgroundColor: '#FFFFFF' }}
            />
          </button>
        </>
      )}

      {/* 聊天窗口 */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[380px] sm:w-[420px] rounded-2xl shadow-2xl flex flex-col transition-all duration-300"
          style={{
            backgroundColor: '#FFFFFF',
            height: isMinimized ? 'auto' : '600px',
            maxHeight: 'calc(100vh - 120px)',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* 头部 */}
          <div
            className="px-6 py-4 flex items-center justify-between rounded-t-2xl"
            style={{
              background: 'linear-gradient(135deg, rgb(215, 0, 29) 0%, #CC0000 100%)'
            }}
          >
            <div className="flex items-center gap-3">
              {/* 公司Logo头像 */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-white font-bold text-sm">神州</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">神州数码AI助理</h3>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  在线服务
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isMinimized && (
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Minimize2 className="text-white" size={18} />
                </button>
              )}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="text-white" size={18} />
              </button>
            </div>
          </div>

          {/* 消息区域 */}
          {!isMinimized && (
            <>
              <div
                className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
                style={{ backgroundColor: '#F8F9FA' }}
              >
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'text-white'
                          : 'text-gray-800'
                      }`}
                      style={{
                        backgroundColor: message.type === 'user' ? 'rgb(215, 0, 29)' : '#FFFFFF',
                        border: message.type === 'bot' ? '1px solid #E5E7EB' : 'none',
                        borderRadius: message.type === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px'
                      }}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{
                          color: message.type === 'user' ? 'rgba(255,255,255,0.7)' : '#999999'
                        }}
                      >
                        {message.timestamp.toLocaleTimeString('zh-CN', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    <div
                      className="px-4 py-3 rounded-2xl"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '20px 20px 20px 4px'
                      }}
                    >
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: 'rgb(215, 0, 29)', animationDelay: '0ms' }}
                        />
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: 'rgb(215, 0, 29)', animationDelay: '150ms' }}
                        />
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ backgroundColor: 'rgb(215, 0, 29)', animationDelay: '300ms' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 快捷问题 */}
                {messages.length > 0 && messages[messages.length - 1].type === 'bot' && !isTyping && (
                  <div className="space-y-2 mt-4" style={{ animation: 'fadeInUp 0.3s ease-out' }}>
                    {quickQuestions.map((question, index) => (
                      <button
                        key={question.id}
                        onClick={question.action}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 text-left"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          color: '#333333',
                          animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                        }}
                      >
                        <span
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: 'rgba(215, 0, 29, 0.1)', color: 'rgb(215, 0, 29)' }}
                        >
                          {question.icon}
                        </span>
                        <span className="text-sm font-medium">{question.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* 输入区域 */}
              <div
                className="px-4 py-3 border-t"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
              >
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="请输入您的问题..."
                    className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    style={{
                      backgroundColor: '#F8F9FA',
                      border: '1px solid #E5E7EB'
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      backgroundColor: inputValue.trim() ? 'rgb(215, 0, 29)' : '#E5E7EB',
                      color: inputValue.trim() ? '#FFFFFF' : '#999999'
                    }}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* 预约演示对话框 */}
      <DemoBookingDialog
        open={isBookingDialogOpen}
        onOpenChange={setIsBookingDialogOpen}
      />

      {/* 动画样式 */}
      <style jsx global>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          10% {
            opacity: 1;
            transform: translateX(0);
          }
          90% {
            opacity: 1;
          transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
