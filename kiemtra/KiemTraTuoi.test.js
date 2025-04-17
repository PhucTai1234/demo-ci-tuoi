const { tinhTuoi, laNguoiLon } = require('../TinhTuoi');

describe('Kiểm tra tuổi', () => {
  test('tính tuổi cho người sinh năm 2000', () => {
    expect(tinhTuoi(2000)).toBe(25);
  });

  test('tính tuổi cho người sinh năm 2010', () => {
    expect(tinhTuoi(2010)).toBe(15);
  });

  test('kiểm tra người sinh năm 2000 là người lớn', () => {
    expect(laNguoiLon(2000)).toBe(true);
  });
});
