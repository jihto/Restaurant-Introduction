import React from 'react';
import MenuUS from '../assets/images/menu-us.jpg'
import MenuViet from '../assets/images/menu-viet.jpg'
import ScrollReveal from '../components/ScrollReveal';
import Menu from '../components/Menu';
import { menuVietNameseFood, menuUSFood } from '../config';

const MenuFood: React.FC = () => {
    return (
        <div className=''> 
            <ScrollReveal
                id="wine-room"
                imageSrc={MenuUS}
                title="Ẩm thực đa dạng"
                subtitle=""
            />
            <div className='container gap-4'>
                <Menu 
                    title="Thực đơn ÂU"
                    items={menuUSFood}
                /> 
            </div>
            <ScrollReveal
                id="wine-room"
                imageSrc={MenuViet}
                title="Thực đơn Việt Nam"
                subtitle="Gia đình"
            />
            <div className='container gap-4'>
                <Menu  items={menuVietNameseFood}/> 
            </div>
        </div>
    )
}

export default MenuFood