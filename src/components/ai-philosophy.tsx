'use client';

import { useState } from 'react';
import { X, Download, BookOpen, ArrowRight } from 'lucide-react';

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
        {/* 主要内容区：左文右图 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* 左侧文字区 */}
          <div className="flex flex-col justify-center">
            {/* 标题 */}
            <h2
              className="font-bold mb-6"
              style={{ color: '#333333', fontSize: '32px' }}
            >
              AI FOR PROCESS | 核心理念
            </h2>

            {/* 核心定义 */}
            <div
              className="mb-4 pb-4 border-b-2"
              style={{ borderColor: '#FF3B30' }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: '#333333' }}
              >
                从工具级应用到流程级重构
              </h3>
            </div>

            {/* 描述 */}
            <p
              className="mb-8"
              style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
            >
              将AI与企业L1-L5全层级核心业务流程深度耦合，实现从单一环节优化到全链路智能的质变，
              让AI成为业务流程的原生能力，驱动企业数智化深水区变革。
            </p>

            {/* 三大变革 */}
            <div className="mb-8">
              <h4
                className="font-semibold mb-4"
                style={{ color: '#333333', fontSize: '18px' }}
              >
                三大变革
              </h4>
              <ul className="space-y-3">
                <li
                  className="flex items-start"
                  style={{ color: '#666666', fontSize: '15px' }}
                >
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#FF3B30' }}></span>
                  <div>
                    <span className="font-semibold" style={{ color: '#333333' }}>流程自动化：</span>
                    AI驱动端到端业务流程自动流转
                  </div>
                </li>
                <li
                  className="flex items-start"
                  style={{ color: '#666666', fontSize: '15px' }}
                >
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#FF3B30' }}></span>
                  <div>
                    <span className="font-semibold" style={{ color: '#333333' }}>决策智能化：</span>
                    基于实时数据的智能决策支持
                  </div>
                </li>
                <li
                  className="flex items-start"
                  style={{ color: '#666666', fontSize: '15px' }}
                >
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#FF3B30' }}></span>
                  <div>
                    <span className="font-semibold" style={{ color: '#333333' }}>价值最大化：</span>
                    从降本增效到业务模式创新
                  </div>
                </li>
              </ul>
            </div>

            {/* 落地场景 */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: '#333333', fontSize: '18px' }}
              >
                落地场景
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    <BookOpen className="w-6 h-6" style={{ color: '#FF3B30' }} />
                  </div>
                  <div
                    className="text-xs font-medium mb-1"
                    style={{ color: '#333333' }}
                  >
                    生产流程
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#666666' }}
                  >
                    智能制造优化
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    <BookOpen className="w-6 h-6" style={{ color: '#666666' }} />
                  </div>
                  <div
                    className="text-xs font-medium mb-1"
                    style={{ color: '#333333' }}
                  >
                    办公流程
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#666666' }}
                  >
                    智能协同提效
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    <BookOpen className="w-6 h-6" style={{ color: '#FF3B30' }} />
                  </div>
                  <div
                    className="text-xs font-medium mb-1"
                    style={{ color: '#333333' }}
                  >
                    运营流程
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#666666' }}
                  >
                    数据智能运营
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧蓝皮书区 */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-xl p-8 h-full flex flex-col items-center justify-center text-center"
              style={{ backgroundColor: '#F5F5F5', borderRadius: '12px' }}
            >
              {/* 蓝皮书封面 - 3D立体效果 */}
              <div
                className="relative mb-6 transition-transform duration-300 hover:scale-105"
                style={{
                  width: '200px',
                  height: '260px',
                  perspective: '1000px',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF3B30 0%, #E63928 100%)',
                    transform: 'rotateY(-15deg)',
                    transformOrigin: 'left center',
                  }}
                >
                  <div className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div
                        className="w-12 h-12 rounded-lg mb-4 mx-auto"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        <BookOpen className="w-6 h-6 text-white mx-auto" />
                      </div>
                      <h3
                        className="text-white font-bold text-lg mb-2"
                      >
                        AI for Process
                      </h3>
                      <p
                        className="text-white text-sm"
                        style={{ opacity: 0.9 }}
                      >
                        核心方法论
                      </p>
                    </div>
                    <div className="text-white text-xs" style={{ opacity: 0.8 }}>
                      2024年度报告
                    </div>
                  </div>
                </div>

                {/* 书脊 */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-4 rounded-l-lg"
                  style={{
                    background: 'linear-gradient(90deg, #C42520 0%, #E63928 100%)',
                    transform: 'rotateY(-15deg) translateX(-4px)',
                  }}
                />
              </div>

              {/* 标题 */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: '#333333' }}
              >
                获取完整蓝皮书
              </h3>

              {/* 描述 */}
              <p
                className="mb-6"
                style={{ color: '#666666', fontSize: '14px' }}
              >
                30页深度解读AI for Process方法论
              </p>

              {/* 红色按钮 */}
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-md flex items-center gap-2"
                style={{
                  backgroundColor: '#FF3B30',
                  borderRadius: '6px',
                }}
              >
                <Download className="w-4 h-4" />
                立即下载
              </button>
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
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
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
