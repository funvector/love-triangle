/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  preferences.forEach(function(value, index, arr){
    if(arr[value-1] != index+1 && arr[arr[value-1]-1] && arr[arr[value-1]-1] == index+1 ){
      count++;
      arr[value-1] = undefined;
      arr[arr[value-1]-1] = undefined;
      arr[index] = undefined;
        }
    })

  return count;
};
