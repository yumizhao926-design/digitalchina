'use client';

export default function Hero() {
  const HERO_IMAGE_URL = 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_79ad0d41-78c7-43f9-86bc-47b96c1ee090.jpeg?sign=1802158024-26f883cea3-0-11ed9b328a181779c39698ff5c439259110eb9cab1548a497dafc2f231fe76cc';

  return (
    <section className="relative w-full overflow-hidden py-36 sm:py-44 md:py-52">
      {/* 背景图片层 - 固定图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${HERO_IMAGE_URL}")`,
        }}
      />

      {/* 中央内容 */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* 主标题 */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold leading-tight mb-4"
            style={{
              color: '#333333',
              letterSpacing: '2px',
            }}
          >
            AI for Process
          </h1>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold leading-tight"
            style={{
              color: '#333333',
              letterSpacing: '2px',
            }}
          >
            用AI重塑企业核心流程
          </h1>
        </div>

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
