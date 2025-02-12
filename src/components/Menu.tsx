import { Star } from "lucide-react";
import React from "react";

export interface MenuItemProps {
    name: string;
    description: string;
}

interface MenuProps {
    items: MenuItemProps[];
    title?: string;
}

const Menu: React.FC<MenuProps> = ({ items, title }) => {
    const isTwoColumns = items.length >= 20;  

    return (
        <div className="bg-white p-8 w-full">
        <h2 className="text-3xl uppercase font-bold text-center mb-8 underline">{title}</h2>
        <div className={`gap-6 ${isTwoColumns ? "grid grid-cols-2 gap-x-20" : "space-y-6"}`}>
            {items.map((item, index) => (
                <div key={index} className="flex w-full justify-between">
                    <div className="flex flex-col items-start justify-between">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="space-y-2 flex flex-col items-end min-w-[120px]">
                        <p className="font-semibold">Liên hệ </p>
                        <div className="bg-yellow-400 w-6 h-6 flex justify-center items-center rounded-lg">
                            <Star size={14} className="text-white" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Menu;
