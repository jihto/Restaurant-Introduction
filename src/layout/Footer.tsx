import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">SESAN THỦ DỤC</h3>
                    <p>0 -14 Einstein, P. Bình Thọ, Q. Thủ Đức, TP. HCM</p>
                    <p>Điện thoại: 0988 100 100 - 0988 20 60 80</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">SESAN THỦ DỤC MỘT</h3>
                    <p>0 -333 Đại Lộ Bình Dương, P. Chánh Nghĩa, TP. TDM</p>
                    <p>Điện thoại: 0972 200 500 - 0945 220 270</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">THÔNG TIN LIÊN HỆ</h3>
                    <p>Email: info@sensan.com</p>
                    <p>Website: www.sensan.com</p>
                </div>
                </div>
                <div className="text-center mt-8">
                <p>&copy; 2021 SESAN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;