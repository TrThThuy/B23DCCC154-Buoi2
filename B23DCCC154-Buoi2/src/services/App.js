import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DanhSachHangHoa from './components/DanhSachHangHoa';
import FormHangHoa from './components/FormHangHoa';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Quản lý hàng hóa</Link>
          <Link to="/them">Thêm Hàng Hóa</Link>
        </nav>
        <Routes>
          <Route path="/" element={<DanhSachHangHoa />} />
          <Route path="/them" element={<FormHangHoa />} />
          <Route path="/sua/:id" element={<FormHangHoa />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;