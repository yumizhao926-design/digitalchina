'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 背景渐变 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #1A1A1A, #333333)',
        }}
      />

      {/* 白色线条流动动画 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 线条1 */}
        <div
          className="absolute top-1/4 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'flowLine 8s linear infinite',
          }}
        />
        {/* 线条2 */}
        <div
          className="absolute top-1/3 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            animation: 'flowLine 10s linear infinite',
            animationDelay: '2s',
          }}
        />
        {/* 线条3 */}
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
            animation: 'flowLine 12s linear infinite',
            animationDelay: '4s',
          }}
        />
        {/* 线条4 */}
        <div
          className="absolute top-2/3 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
            animation: 'flowLine 9s linear infinite',
            animationDelay: '1s',
          }}
        />
        {/* 线条5 */}
        <div
          className="absolute top-3/4 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)',
            animation: 'flowLine 11s linear infinite',
            animationDelay: '3s',
          }}
        />

        {/* 垂直线条 */}
        <div
          className="absolute top-0 left-1/4 h-full w-px"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)',
            animation: 'flowLineVertical 15s linear infinite',
          }}
        />
        <div
          className="absolute top-0 left-1/2 h-full w-px"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'flowLineVertical 18s linear infinite',
            animationDelay: '5s',
          }}
        />
        <div
          className="absolute top-0 left-3/4 h-full w-px"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)',
            animation: 'flowLineVertical 20s linear infinite',
            animationDelay: '8s',
          }}
        />
      </div>

      {/* 中央内容 */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
        {/* 主标题 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[48px] font-bold text-white mb-8 leading-tight">
          AI for Process 重构企业核心流程
        </h1>

        {/* 副标题 */}
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          让AI成为业务流程原生能力，驱动企业数智化深水区变革
        </p>

        {/* 主CTA按钮 */}
        <button
          className="px-12 py-4 text-base font-medium text-white rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: '#FF3B30',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D70015';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF3B30';
          }}
        >
          下载AI for Process蓝皮书
        </button>
      </div>

      {/* 底部小字 */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-sm text-gray-400">
          神州数码·企业数智化转型合作伙伴
        </p>
      </div>

      {/* 添加CSS动画 */}
      <style jsx>{`
        @keyframes flowLine {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes flowLineVertical {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
