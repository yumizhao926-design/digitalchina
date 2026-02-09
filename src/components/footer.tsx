import { Mail, Phone, MapPin, QrCode } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2A2A2A', color: '#FFFFFF' }}>
      {/* 四栏布局 */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 第一栏：关于我们 */}
          <div>
            <h3
              className="mb-6"
              style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}
            >
              关于我们
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  公司简介
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  企业资讯
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  招贤纳士
                </a>
              </li>
            </ul>
          </div>

          {/* 第二栏：产品服务 */}
          <div>
            <h3
              className="mb-6"
              style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}
            >
              产品服务
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  智能平台
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  智算底座
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  行业方案
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  技术服务
                </a>
              </li>
            </ul>
          </div>

          {/* 第三栏：生态合作 */}
          <div>
            <h3
              className="mb-6"
              style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}
            >
              生态合作
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  技术伙伴
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  生态计划
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ color: '#999999', fontSize: '14px' }}
                >
                  合作申请
                </a>
              </li>
            </ul>
          </div>

          {/* 第四栏：联系我们 */}
          <div>
            <h3
              className="mb-6"
              style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}
            >
              联系我们
            </h3>
            <div className="space-y-4">
              {/* 地址 */}
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: 'rgb(215, 0, 29)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: '#999999', fontSize: '14px', lineHeight: '1.6' }}>
                  北京市海淀区上地信息产业基地<br />
                  上地九街9号数码科技广场
                </p>
              </div>

              {/* 电话 */}
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'rgb(215, 0, 29)', flexShrink: 0 }} />
                <p style={{ color: '#999999', fontSize: '14px' }}>
                  400-810-8888
                </p>
              </div>

              {/* 邮箱 */}
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'rgb(215, 0, 29)', flexShrink: 0 }} />
                <p style={{ color: '#999999', fontSize: '14px' }}>
                  contact@digitalchina.com
                </p>
              </div>

              {/* 二维码 */}
              <div className="mt-6">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#FFFFFF',
                    padding: '8px'
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{ color: 'rgb(215, 0, 29)' }}
                  >
                    <QrCode size={80} />
                  </div>
                </div>
                <p
                  className="text-center mt-2"
                  style={{ color: '#999999', fontSize: '12px' }}
                >
                  扫码关注公众号
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权区域 */}
      <div
        className="border-t"
        style={{
          borderColor: 'rgba(255, 59, 48, 0.2)',
          paddingTop: '24px',
          paddingBottom: '24px'
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* 版权信息 */}
            <p
              className="text-center md:text-left"
              style={{ color: '#999999', fontSize: '14px' }}
            >
              © 2024 神州数码集团股份有限公司 保留所有权利
            </p>

            {/* 辅助链接 */}
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
                style={{ color: '#999999', fontSize: '14px' }}
              >
                隐私政策
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                style={{ color: '#999999', fontSize: '14px' }}
              >
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
