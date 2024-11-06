import React from 'react';
import DanhSachHangHoa from '../components/DanhSachHangHoa';
import FormHangHoa from '../components/FormHangHoa';

const TrangHangHoa = () => {
    return (
        <div className="trang-hang-hoa">
            <h1>Quản lý hàng hóa</h1>
            <FormHangHoa />
            <DanhSachHangHoa />
        </div>
    );
};

export default TrangHangHoa;
