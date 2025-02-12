import React from 'react'; 
import RestaurantImage from '../assets/images/restaurant.jpg';
const RestaurantIntro: React.FC = () => {
    return (
        <div> 
            {/* Nội dung chính */}
            <div className="relative mt-12 flex flex-col md:flex-row items-center max-w-5xl mx-auto">
                {/* Hình ảnh */}
                <div className="w-full md:w-4/5 md:min-w-lg h-[520px] p-4">
                    <img
                        src={RestaurantImage} // Thay bằng ảnh thực tế
                        alt="Nhà hàng Solstice"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Nội dung text */}
                <div className="w-full lg:absolute md:-right-[12%] bottom-[10%] lg:w-1/2 px-6 py-4 lg:px-20 lg:py-12 bg-white text-start">
                    <h3 className="text-xl font-semibold italic text-[#c49a6c]">
                        Nhà hàng Solstice
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-800">BÌNH TÂN</h4>
                    <p className="text-sm text-gray-500 mt-2">
                        14 Einstein, Bình Tân, TP.HCM
                    </p>
                    <p className="mt-4 text-gray-600">
                        Nhà hàng Solstice Bình Tân là bản hợp ca của kiến trúc Champa và vẻ đẹp
                        trầm hùng của chốn đại ngàn Tây Nguyên trong chất liệu gỗ, đá và
                        gạch nung.
                    </p>

                    {/* Nút bấm */}
                    <button className="mt-4 px-5 py-2 bg-black text-white text-sm font-semibold hover:bg-gray-800">
                        HÌNH ẢNH
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RestaurantIntro