'use client';

import { useState } from 'react';
import { X, Download, ArrowRight, Brain, Zap, Target, BookOpen, CheckCircle2 } from 'lucide-react';

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
            className="max-w-3xl mx-auto"
            style={{ color: '#666666', fontSize: '16px', lineHeight: '1.7' }}
          >
            将AI与企业全层级核心业务流程深度耦合，实现从单一环节优化到全链路智能的质变
          </p>
        </div>

        {/* 完整模块 */}
        <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#F8F9FA' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* 左侧内容区 */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              {/* 核心理念 */}
              <div className="mb-12">
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#FF3B30' }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: '#333333', fontSize: '22px' }}
                    >
                      从工具级应用到流程级重构
                    </h3>
                    <p
                      style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
                    >
                      让AI成为业务流程的原生能力，驱动企业数智化深水区变革
                    </p>
                  </div>
                </div>
              </div>

              {/* 三大变革 */}
              <div>
                <h3
                  className="font-semibold mb-6"
                  style={{ color: '#333333', fontSize: '20px' }}
                >
                  三大核心变革
                </h3>

                <div className="space-y-5">
                  {/* 变革1 */}
                  <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 59, 48, 0.1)' }}
                    >
                      <Zap className="w-6 h-6" style={{ color: '#FF3B30' }} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: '#333333', fontSize: '16px' }}
                      >
                        流程自动化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.7', fontSize: '14px' }}
                      >
                        AI驱动端到端业务流程自动流转，实现智能化的流程编排
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#FF3B30' }} />
                  </div>

                  {/* 变革2 */}
                  <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(102, 102, 102, 0.1)' }}
                    >
                      <Target className="w-6 h-6" style={{ color: '#666666' }} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: '#333333', fontSize: '16px' }}
                      >
                        决策智能化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.7', fontSize: '14px' }}
                      >
                        基于实时数据的智能决策支持，提升决策效率与准确性
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#666666' }} />
                  </div>

                  {/* 变革3 */}
                  <div className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 59, 48, 0.1)' }}
                    >
                      <Brain className="w-6 h-6" style={{ color: '#FF3B30' }} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: '#333333', fontSize: '16px' }}
                      >
                        价值最大化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.7', fontSize: '14px' }}
                      >
                        从降本增效到业务模式创新，实现持续价值释放
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#FF3B30' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧下载区 - 图片风格 */}
            <div className="lg:col-span-2 p-0 relative overflow-hidden" style={{ backgroundColor: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
              {/* 装饰背景 */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #FF3B30 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #FF3B30 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}></div>
              </div>

              {/* 内容 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
                {/* 书本封面 */}
                <div className="relative mb-8">
                  <div
                    className="w-48 h-64 rounded-lg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, #FF3B30 0%, #C42520 100%)',
                    }}
                  >
                    {/* 封面装饰线条 */}
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'rgba(255,255,255,0.2)' }}></div>

                    {/* 图标 */}
                    <BookOpen className="w-14 h-14 text-white mb-4" />

                    {/* 文字 */}
                    <div className="text-white font-bold text-xl mb-1">AI FOR PROCESS</div>
                    <div className="text-white text-base mb-4" style={{ opacity: 0.9 }}>方法论白皮书</div>

                    {/* 分割线 */}
                    <div className="w-12 h-0.5 mb-4" style={{ background: 'rgba(255,255,255,0.5)' }}></div>

                    {/* 年份 */}
                    <div className="text-white text-sm" style={{ opacity: 0.7 }}>2024</div>
                  </div>

                  {/* 书脊阴影 */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-4 rounded-l-lg"
                    style={{
                      background: 'linear-gradient(90deg, #8B1A15 0%, #FF3B30 100%)',
                      transform: 'translateX(-2px)',
                    }}
                  ></div>
                </div>

                {/* 标题 */}
                <h3
                  className="font-semibold mb-3"
                  style={{ color: '#FFFFFF', fontSize: '24px' }}
                >
                  获取完整白皮书
                </h3>

                {/* 描述 */}
                <p
                  className="mb-6"
                  style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7', fontSize: '14px' }}
                >
                  30页深度解读AI for Process方法论<br />
                  包含企业级应用案例和实施指南
                </p>

                {/* 按钮组 */}
                <div className="space-y-3 w-full max-w-xs">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full px-8 py-3.5 font-medium text-white transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: '#FF3B30',
                      borderRadius: '8px',
                    }}
                  >
                    <Download className="w-4 h-4" />
                    立即下载
                  </button>
                  <button
                    onClick={handleScrollToEngine}
                    className="w-full px-8 py-3.5 font-medium transition-all duration-300 hover:shadow-md inline-flex items-center justify-center gap-2"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                    }}
                  >
                    查看完整方法论
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
              下载白皮书
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
          提交成功！白皮书下载链接已发送至您的邮箱
        </div>
      )}
    </section>
  );
}
