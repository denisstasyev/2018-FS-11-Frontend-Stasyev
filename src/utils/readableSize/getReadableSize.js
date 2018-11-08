/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const units = ['байт', 'Кбайт', 'Мбайт', 'Гбайт', 'Тбайт'];

function getReadableSize(size) {
  let newSize = size;
  for (const item in units) {
    if (newSize < 1024) {
      return `${Math.ceil(newSize)} ${units[item]}`;
    }
    newSize /= 1024;
  }
  return `${Math.ceil(size)} байт`;
}

export default getReadableSize;
