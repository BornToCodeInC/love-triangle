/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]) {
    let spichonee1, spichonee2, spichonee3, pos = 0, count = 0;
    preferences.forEach((item) => {
        ++pos;
        spichonee1 = item - 1;
        spichonee2 = preferences[spichonee1] - 1;
        spichonee3 = preferences[spichonee2];
        if(spichonee3 === pos){
            if(item > pos && preferences[spichonee1] > pos){
                count++;
            }
        }
    });
    return count;
};
