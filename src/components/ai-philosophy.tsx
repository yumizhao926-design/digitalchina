'use client';

import { useState } from 'react';
import { X, Download, ArrowRight, Brain, Zap, Target, Factory, Laptop, TrendingUp } from 'lucide-react';

export default function AIPhilosophy() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    position: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleScrollToEngine = () => {
    const engineSection = document.getElementById('ai-engine');
    if (engineSection) {
      engineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: '流程自动化',
      description: 'AI驱动端到端业务流程自动流转',
      color: '#FF3B30',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '决策智能化',
      description: '基于实时数据的智能决策支持',
      color: '#666666',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '价值最大化',
      description: '从降本增效到业务模式创新',
      color: '#FF3B30',
    },
  ];

  const scenarios = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: '生产流程',
      subtitle: '智能制造优化',
      color: '#FF3B30',
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: '办公流程',
      subtitle: '智能协同提效',
      color: '#666666',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: '运营流程',
      subtitle: '数据智能运营',
      color: '#FF3B30',
    },
  ];

  return (
    <section id="ai-engine" className="py-24 px-4 sm:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4"
            style={{ color: '#333333', fontSize: '32px' }}
          >
            AI FOR PROCESS | 核心理念
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: '#666666', fontSize: '18px', lineHeight: '1.8' }}
          >
            将AI与企业全层级核心业务流程深度耦合，实现从单一环节优化到全链路智能的质变
          </p>
        </div>

        {/* 核心定义 */}
        <div className="mb-20">
          <div
            className="border-l-4 pl-8 py-6"
            style={{ borderColor: '#FF3B30' }}
          >
            <h3
              className="font-semibold mb-3"
              style={{ color: '#333333', fontSize: '24px' }}
            >
              从工具级应用到流程级重构
            </h3>
            <p
              style={{ color: '#666666', lineHeight: '1.8', fontSize: '16px' }}
            >
              让AI成为业务流程的原生能力，驱动企业数智化深水区变革，
              通过智能化的流程编排和决策支持，实现业务价值的持续释放。
            </p>
          </div>
        </div>

        {/* 三大变革 - 图文混排 */}
        <div className="mb-20">
          <h3
            className="font-semibold mb-12 text-center"
            style={{ color: '#333333', fontSize: '24px' }}
          >
            三大变革
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                {/* 图标 */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>

                {/* 标题 */}
                <h4
                  className="font-semibold mb-3"
                  style={{ color: '#333333', fontSize: '20px' }}
                >
                  {item.title}
                </h4>

                {/* 描述 */}
                <p
                  style={{ color: '#666666', lineHeight: '1.7', fontSize: '15px' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 落地场景 */}
        <div className="mb-20">
          <h3
            className="font-semibold mb-12 text-center"
            style={{ color: '#333333', fontSize: '24px' }}
          >
            落地场景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl text-center transition-all duration-300 hover:shadow-lg border border-gray-100"
              >
                {/* 图标 */}
                <div
                  className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: '#F5F5F5' }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>

                {/* 标题 */}
                <h4
                  className="font-medium mb-2"
                  style={{ color: '#333333', fontSize: '18px' }}
                >
                  {item.title}
                </h4>

                {/* 副标题 */}
                <p
                  style={{ color: '#666666', fontSize: '14px' }}
                >
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 蓝皮书介绍区 */}
        <div
          className="rounded-xl p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: '#F5F5F5' }}
        >
          {/* 左侧内容 */}
          <div className="flex-1">
            <h3
              className="font-bold mb-3"
              style={{ color: '#333333', fontSize: '24px' }}
            >
              获取完整蓝皮书
            </h3>
            <p
              className="mb-6"
              style={{ color: '#666666', lineHeight: '1.7', fontSize: '16px' }}
            >
              30页深度解读AI for Process方法论，包含企业级应用案例和实施指南
            </p>

            {/* 下载按钮 */}
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-md inline-flex items-center gap-2"
              style={{
                backgroundColor: '#FF3B30',
                borderRadius: '6px',
              }}
            >
              <Download className="w-4 h-4" />
              立即下载
            </button>
          </div>

          {/* 右侧书本图标 */}
          <div
            className="flex-shrink-0 relative"
            style={{ width: '160px', height: '200px' }}
          >
            <div
              className="absolute inset-0 rounded-lg shadow-2xl flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF3B30 0%, #E63928 100%)',
                transform: 'rotateY(-10deg)',
              }}
            >
              <Brain className="w-12 h-12 text-white mb-3" />
              <div className="text-white font-bold text-lg">AI for Process</div>
              <div className="text-white text-xs mt-2" style={{ opacity: 0.8 }}>蓝皮书</div>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="text-center">
          <button
            onClick={handleScrollToEngine}
            className="px-8 py-3 font-medium transition-all duration-300 hover:shadow-md inline-flex items-center gap-2"
            style={{
              border: '1px solid #666666',
              color: '#666666',
              borderRadius: '6px',
              backgroundColor: 'transparent',
            }}
          >
            查看完整方法论
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 表单弹窗 */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setShowForm(false)}
            >
              <X className="w-5 h-5" style={{ color: '#666666' }} />
            </button>

            {/* 标题 */}
            <h3
              className="text-xl font-semibold mb-6 text-center"
              style={{ color: '#333333' }}
            >
              下载蓝皮书
            </h3>

            {/* 表单 */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#333333' }}
                >
                  姓名
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  style={{ fontSize: '14px' }}
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#333333' }}
                >
                  公司
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  style={{ fontSize: '14px' }}
                  placeholder="请输入公司名称"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#333333' }}
                >
                  邮箱
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  style={{ fontSize: '14px' }}
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#333333' }}
                >
                  职位
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors bg-white"
                  style={{ fontSize: '14px' }}
                >
                  <option value="">请选择职位</option>
                  <option value="ceo">CEO/创始人</option>
                  <option value="cto">CTO/CIO</option>
                  <option value="vp">VP/总监</option>
                  <option value="manager">经理</option>
                  <option value="engineer">工程师</option>
                  <option value="other">其他</option>
                </select>
              </div>

              {/* 按钮组 */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 font-medium transition-all duration-300"
                  style={{
                    border: '1px solid #666666',
                    color: '#666666',
                    borderRadius: '6px',
                    backgroundColor: 'transparent',
                  }}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 font-medium text-white transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#FF3B30',
                    borderRadius: '6px',
                  }}
                >
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 成功提示 */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          提交成功！蓝皮书下载链接已发送至您的邮箱
        </div>
      )}
    </section>
  );
}
