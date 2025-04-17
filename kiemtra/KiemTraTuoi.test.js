const { tinhTuoi } = require('../TinhTuoi');

describe('Kiểm tra tuổi', () => {
  test('tính tuổi cho người sinh năm 2000', () => {
    expect(tinhTuoi(2000)).toBe(25);
  });

  test('tính tuổi cho người sinh năm 2010', () => {
    expect(tinhTuoi(2010)).toBe(15);
  });
});
