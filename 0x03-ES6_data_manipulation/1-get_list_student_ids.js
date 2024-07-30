export default function getListStudentIds(arr) {
  let newarr = [];
  if (arr instanceof Array) {
    newarr = arr.map((item) => item.id);
  }
  return newarr;
}
