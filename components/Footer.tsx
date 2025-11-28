import React from 'react';
import { Facebook, Youtube, MessageCircle, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 py-8 border-t border-brand-blueLight bg-brand-blueLight/50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
        
        {/* Info Column */}
        <div className="space-y-4">
          <h3 className="text-brand-gold font-bold text-lg flex items-center gap-2">
            <Info size={20} />
            Thông tin & Mục tiêu
          </h3>
          <p className="text-sm">
            Nhà phát triển: <strong>AI Studio Developer</strong>
          </p>
          <p className="text-sm leading-relaxed">
            Ứng dụng được xây dựng nhằm hỗ trợ Content Creator, Giáo viên, và Marketer tạo ra các file giọng đọc AI chất lượng cao hoàn toàn miễn phí, phục vụ cho video, bài giảng và quảng cáo.
          </p>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h3 className="text-brand-gold font-bold text-lg flex items-center gap-2">
            <MessageCircle size={20} />
            Liên hệ & Cộng đồng
          </h3>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
              <span className="bg-blue-600 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                Z
              </span>
              <span>Nhóm Zalo Hỗ Trợ</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
              <span className="bg-blue-700 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Facebook size={16} />
              </span>
              <span>Cộng đồng Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
              <span className="bg-red-600 p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Youtube size={16} />
              </span>
              <span>Kênh YouTube Hướng Dẫn</span>
            </a>
          </div>
        </div>

      </div>
      <div className="text-center mt-8 text-xs text-gray-600">
        © 2024 Text To Speech Master. Powered by Google Gemini.
      </div>
    </footer>
  );
};

export default Footer;