const { tinhTuoi, laNguoiLon } = require('../TinhTuoi');

describe('Kiểm tra tuổi', () => {
  test('tính tuổi cho người sinh năm 2000', () => {
    expect(tinhTuoi(2000)).toBe(26);
  });

  test('tính tuổi cho người sinh năm 2010', () => {
    expect(tinhTuoi(2015)).toBe(17);
  });

  test('kiểm tra người sinh năm 2000 là người lớn', () => {
    expect(laNguoiLon(2000)).toBe(true);
  });
});
