const obj = {
  num: 2
};

const func = function (arg1, arg2, arg3) {
  return this.num + arg1 + arg2 + arg3;
};

func.call(obj, 1, 3, 4);      // 10
func.apply(obj, [5, 6, 7]);   // 20

const bound = func.bind(obj);
bound(8, 9, 11);              // 30
