function tinhTuoi(namSinh) {
  const namHienTai = 2025;
  return namHienTai - namSinh;
}

function laNguoiLon(namSinh) {
  return tinhTuoi(namSinh) >= 18;
}

module.exports = { tinhTuoi, laNguoiLon };
