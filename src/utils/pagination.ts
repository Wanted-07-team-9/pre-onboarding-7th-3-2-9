const VIEW_PAGE_COUNT = 5;
const LIMIT = 10;

export function pagination(count: number) {
  let totalCount = Math.ceil(count / LIMIT);

  let originCntArr = [];
  let resultArr = [];
  for (let index = 1; index <= totalCount; index++) {
    originCntArr.push(index);
  }
  let totalPage = Math.ceil(originCntArr.length / VIEW_PAGE_COUNT);

  for (let index = 0; index < totalPage; index++) {
    let spliceArr = originCntArr.splice(0, 5);
    resultArr[index] = spliceArr;
  }
  return resultArr;
}
