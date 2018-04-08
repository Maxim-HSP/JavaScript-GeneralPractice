// CODE BY MAXIM3244_LiuMingSong

// ------------------------基础处理逻辑函数--------------------------------
// 取出菜单数组
import store from "store2";
const menu = store.session.get("menu");

// 对应菜单的权限对象(固定二级菜单所进入的列表)
const authorityMap = (router) => {
  let path = "";
  // 参数防错兼容
  if (typeof router === "string") {
    path = router;
  } else {
    path = router.history && router.history.location.pathname;
  }
  const pathArr = path.split("/");
  const firPath = menu.filter(first => first.path.split("/")[1] === pathArr[1])[0];
  const secPath = firPath.children.filter(sec => sec.path === path)[0];

  // 模拟数据，有正式接口后注意更改这里
  secPath.authority = {
    table: { supplierName: "HIDE" },
    button: { edit: "HIDE", check: "HIDE" }
  };
  return secPath.authority;
};

// 表格列字段权限
const colAuth = (router, columns, options) => {
  let authority = {};
  if (history.hasOwnProperty("history")) {
    authority = authorityMap(router);
  } else {
    authority = router;
  }
  // 隐藏表格列
  columns = columns.filter(col => authority.table[col.dataIndex] !== "HIDE");
  // 额外隐藏
  if (options) {
    console.log(options);
  }
  return columns;
};

// 替换按钮render函数
const btnAuth = (router, columns, renderFn) => {
  console.log(router, columns, renderFn);
};


// ---------------------------权限插件类封装---------------------------------
// 以下封装主要用以支持链式调用及权限传参、作用域隔离的优雅实现

// 工厂函数(由于是函数所以具有prototype，所以这里不能使用对象直接new)，用以返回$Auth类的实例。
const _$Auth = function (router) {
  // $Auth构造器的作用是通过new关键字隐式return新实例对象，从而具有独立的作用域，且分隔this。
  // 将$Auth类建立在原型上（即不直接将_$Auth写为构造函数），是为了避免调用_$Auth引起死循环。
  return new _$Auth.prototype.$Auth(router);
};

// 通过$Auth构造出_$Auth实例，在_$Auth实例的原型下添加对象（方法中返回this以支持链式调用）。
_$Auth.prototype = {
  // 基准构造器（类）
  $Auth: function (router) {
    if (!router) { console.log("缺少router对象！"); return; }
    // 实例需要初始化的对象必须在此处声明。
    this.origin = { router, menu };
    this.authority = authorityMap(router);
    this.columns = [];
    return this;
  },
  colAuth: function (columns, options) {
    const { authority } = this;
    this.columns = colAuth(authority, columns, options);
    return this;
  },
  btnAuth: function (renderFn) {
    const { columns, authority } = this;
    const colIndex = columns.findIndex(col => col.title === "操作");
    if (colIndex) {
      columns[colIndex].render = function (val, row, index) { return renderFn(authority, val, row, index); };
    }
    this.columns = columns;
    return this;
  },
  // result直接返回运算结果，不可再继续调用。
  result: function () {
    return this.columns;
  }
};

// 核心句，锁闭原型链，防止this分离，这样才能访问到_$Auth.prototype下的对象。
_$Auth.prototype.$Auth.prototype = _$Auth.prototype;

export default _$Auth;
// _$Auth参数：
// $Auth必须传入router，后用链式调用分别执行处理
// 例： $Auth(this.props.router).colAuth(columns).btnAuth((au) => (<span>{au}</span>))
export {
  authorityMap,
  // 返回对应模块菜单的权限对象
  // 参数：
  // 1（必须）- route(Object)，或path(String)
  colAuth,
  // 返回添加权限控制的表格列配置数组
  // 参数：
  // 1（必须）- route(Object)，或path(String)，或authority(Object)
  // 2（必须）- columns(Array)，Antd Table组件表格列配置
  // 3（选填）- Option (Object)，格式：{}
  btnAuth
};
