import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { xoaHangHoa } from '../redux/hangHoaSlice';
import { useNavigate } from 'react-router-dom';

const DanhSachHangHoa = () => {
  const danhSach = useSelector((state) => state.hangHoa.danhSach);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="danh-sach-hang-hoa">
      <h2>Danh Sách Hàng Hóa</h2>
      {danhSach.length === 0 ? (
        <p>Không tìm thấy hàng hóa nào!</p>
      ) : (
        <ul>
          {danhSach.map((hangHoa) => (
            <li key={hangHoa.id} className="hang-hoa">
              {hangHoa.ten}
              <button className="nut-sua" onClick={() => navigate(`/sua/${hangHoa.id}`)}>Sửa</button>
              <button className="nut-xoa" onClick={() => dispatch(xoaHangHoa(hangHoa.id))}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DanhSachHangHoa;
