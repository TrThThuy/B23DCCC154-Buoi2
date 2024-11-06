import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themHangHoa, suaHangHoa } from '../redux/hangHoaSlice';
import { useNavigate, useParams } from 'react-router-dom';

const FormHangHoa = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const danhSach = useSelector((state) => state.hangHoa.danhSach);
  const hangHoaHienTai = danhSach.find((hangHoa) => hangHoa.id === id);

  const [ten, setTen] = useState(hangHoaHienTai ? hangHoaHienTai.ten : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hangHoaHienTai) {
      dispatch(suaHangHoa({ id, ten }));
    } else {
      dispatch(themHangHoa({ id: Date.now().toString(), ten }));
    }
    navigate('/');
  };

  return (
    <form className="form-hang-hoa" onSubmit={handleSubmit}>
      <label className="ten-hang-hoa">Tên hàng hóa:</label>
      <input className="nhap-ten-hang-hoa" value={ten} onChange={(e) => setTen(e.target.value)} />
      <button className="nut-luu" type="submit">{hangHoaHienTai ? 'Cập Nhật' : 'Thêm Hàng Hóa'}</button>
    </form>
  );
};

export default FormHangHoa;
