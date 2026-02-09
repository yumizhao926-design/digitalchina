'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 背景图片层 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-background.jpg")',
        }}
      />

      {/* 遮罩层 - 深色遮罩让文字更清晰 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(245,245,245,0.9) 100%)',
        }}
      />

      {/* 淡色几何装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 大圆光晕1 - 右上角 */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,59,48,0.04) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        {/* 大圆光晕2 - 左下角 */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(51,51,51,0.03) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* 淡线条装饰 - 水平 */}
        <div
          className="absolute top-1/4 left-10 w-32 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(51,51,51,0.1), transparent)',
          }}
        />
        <div
          className="absolute top-1/4 right-10 w-24 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(51,51,51,0.08), transparent)',
          }}
        />

        {/* 淡线条装饰 - 垂直 */}
        <div
          className="absolute top-20 left-1/4 w-px h-20"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(51,51,51,0.08), transparent)',
          }}
        />
        <div
          className="absolute bottom-32 right-1/3 w-px h-16"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(51,51,51,0.1), transparent)',
          }}
        />

        {/* 小圆点装饰 */}
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full"
          style={{
            background: 'rgba(255,59,48,0.25)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full"
          style={{
            background: 'rgba(51,51,51,0.2)',
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />

        {/* 几何方块装饰 */}
        <div
          className="absolute top-1/2 left-16 w-4 h-4 border rotate-45"
          style={{
            borderColor: 'rgba(51,51,51,0.08)',
            animation: 'rotateSlow 20s linear infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-20 w-3 h-3 border rotate-12"
          style={{
            borderColor: 'rgba(255,59,48,0.12)',
            animation: 'rotateSlow 25s linear infinite reverse',
          }}
        />
      </div>

      {/* 中央内容 */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
        {/* 主标题 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[48px] font-bold mb-8 leading-tight"
          style={{
            color: '#333333',
          }}
        >
          AI for Process 重构企业核心流程
        </h1>

        {/* 副标题 */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-normal mb-12 leading-relaxed max-w-3xl mx-auto"
          style={{
            color: '#666666',
          }}
        >
          让AI成为业务流程原生能力，驱动企业数智化深水区变革
        </p>

        {/* 主CTA按钮 */}
        <button
          className="px-12 py-4 text-base font-medium text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
        <p
          className="text-sm"
          style={{
            color: '#999999',
          }}
        >
          神州数码·企业数智化转型合作伙伴
        </p>
      </div>

      {/* 添加CSS动画 */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -10px) scale(1.05);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
