'use client';

export default function Hero() {
  const HERO_IMAGE_URL = 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_9d0724bf-342c-49eb-9ad8-5aa217e04406.jpeg?sign=1802157853-761803b2d3-0-a58ff3e49c99e2a3a7c6cf2265d090ff0adb2c2df902f8ee20c32968559237a9';

  return (
    <section className="relative w-full overflow-hidden py-36 sm:py-44 md:py-52">
      {/* 背景图片层 - 固定图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${HERO_IMAGE_URL}")`,
        }}
      />

      {/* 淡色几何装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 大圆光晕1 - 右上角 */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,59,48,0.04) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        {/* 大圆光晕2 - 左下角 */}
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(51,51,51,0.03) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* 淡线条装饰 - 水平 */}
        <div
          className="absolute top-1/4 left-10 w-24 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(51,51,51,0.1), transparent)',
          }}
        />
        <div
          className="absolute top-1/4 right-10 w-20 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(51,51,51,0.08), transparent)',
          }}
        />

        {/* 淡线条装饰 - 垂直 */}
        <div
          className="absolute top-20 left-1/4 w-px h-16"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(51,51,51,0.08), transparent)',
          }}
        />
        <div
          className="absolute bottom-24 right-1/3 w-px h-12"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(51,51,51,0.1), transparent)',
          }}
        />

        {/* 小圆点装饰 */}
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full"
          style={{
            background: 'rgba(255,59,48,0.25)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full"
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
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* 主标题 */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up"
          style={{
            color: '#333333',
            animationDelay: '0s',
          }}
        >
          AI for Process 重构企业核心流程
        </h1>

        {/* 副标题 */}
        <p
          className="text-base sm:text-lg md:text-xl font-normal mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
          style={{
            color: '#666666',
            animationDelay: '0.2s',
          }}
        >
          让AI成为业务流程原生能力，驱动企业数智化深水区变革
        </p>

        {/* CTA按钮组 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* 按钮1 */}
          <button
            className="px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: '#FF3B30',
              color: '#FF3B30',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF3B30';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#FF3B30';
            }}
          >
            发现企业智能
          </button>

          {/* 按钮2 */}
          <button
            className="px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: '#FF3B30',
              color: '#FF3B30',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF3B30';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#FF3B30';
            }}
          >
            预约专家演示
          </button>
        </div>
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

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
