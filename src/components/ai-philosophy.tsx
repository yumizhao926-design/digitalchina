'use client';

import { useState } from 'react';
import { X, ArrowRight, Brain, Zap, Target, CheckCircle2 } from 'lucide-react';

export default function AIPhilosophy() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    position: '',
  });

  // 固定的背景图片URL - 灰色系带红色点缀
  const WHITEPAPER_BG_URL = 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_20b2fe6b-ce92-49ea-a2e5-d5816df963f6.jpeg?sign=1802162703-b6feb48a41-0-1e7deae0ddd5e2449043a0955f9d55913029f2181e7e6e0c4bcedd608cef01f8';

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
              <div className="mb-16">
                <h3
                  className="font-bold mb-4"
                  style={{ color: '#333333', fontSize: '28px', letterSpacing: '0.5px' }}
                >
                  从工具级应用到流程级重构
                </h3>
                <p
                  style={{ color: '#666666', lineHeight: '1.9', fontSize: '16px', maxWidth: '600px' }}
                >
                  让AI成为业务流程的原生能力，驱动企业数智化深水区变革
                </p>
              </div>

              {/* 三大变革 */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-1 h-6"
                    style={{ backgroundColor: 'rgb(215, 0, 29)' }}
                  ></div>
                  <h3
                    className="font-semibold"
                    style={{ color: '#333333', fontSize: '20px', letterSpacing: '0.5px' }}
                  >
                    三大核心变革
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* 变革1 */}
                  <div className="pl-4 relative">
                    <div
                      className="absolute left-0 top-1 font-bold"
                      style={{ color: 'rgb(215, 0, 29)', fontSize: '18px', width: '40px' }}
                    >
                      01
                    </div>
                    <div className="pl-10">
                      <h4
                        className="font-bold mb-2"
                        style={{ color: '#333333', fontSize: '18px' }}
                      >
                        流程自动化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
                      >
                        AI驱动端到端业务流程自动流转，实现智能化的流程编排
                      </p>
                    </div>
                  </div>

                  {/* 变革2 */}
                  <div className="pl-4 relative">
                    <div
                      className="absolute left-0 top-1 font-bold"
                      style={{ color: '#666666', fontSize: '18px', width: '40px' }}
                    >
                      02
                    </div>
                    <div className="pl-10">
                      <h4
                        className="font-bold mb-2"
                        style={{ color: '#333333', fontSize: '18px' }}
                      >
                        决策智能化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
                      >
                        基于实时数据的智能决策支持，提升决策效率与准确性
                      </p>
                    </div>
                  </div>

                  {/* 变革3 */}
                  <div className="pl-4 relative">
                    <div
                      className="absolute left-0 top-1 font-bold"
                      style={{ color: 'rgb(215, 0, 29)', fontSize: '18px', width: '40px' }}
                    >
                      03
                    </div>
                    <div className="pl-10">
                      <h4
                        className="font-bold mb-2"
                        style={{ color: '#333333', fontSize: '18px' }}
                      >
                        价值最大化
                      </h4>
                      <p
                        style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
                      >
                        从降本增效到业务模式创新，实现持续价值释放
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧下载区 - 图片背景 */}
            <div className="lg:col-span-2 p-0 relative overflow-hidden min-h-[500px]">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${WHITEPAPER_BG_URL}")`,
                }}
              />

              {/* 渐变遮罩，确保文字可读 */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>

              {/* 内容 - 文字CTA在左下角 */}
              <div className="relative z-10 h-full flex flex-col items-start justify-end p-10">
                {/* CTA文字链接 */}
                <button
                  onClick={handleScrollToEngine}
                  className="text-base font-medium transition-all duration-300 hover:underline inline-flex items-center gap-2"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  查看完整方法论
                  <ArrowRight className="w-4 h-4" />
                </button>
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
                    backgroundColor: 'rgb(215, 0, 29)',
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
