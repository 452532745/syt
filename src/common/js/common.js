export const classify = (arr, item) => {
  let map = {},
    dest = [];
  for (let i = 0; i < arr.length; i++) {
    let ai = arr[i];
    if (!map[ai.classify]) {
      dest.push({
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
        classify: ai.classify,
        items: [ai]
      });
      map[ai.classify] = ai;
    } else {
      for (let j = 0; j < dest.length; j++) {
        let dj = dest[j];
        if (dj.classify == ai.classify) {
          dj.items.push(ai);
          break;
        }
      }
    }
  }
  return dest
}
