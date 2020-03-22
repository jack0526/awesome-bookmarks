(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{190:function(e,t,o){"use strict";o.r(t);var n=o(0),l=Object(n.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h2",{attrs:{id:"nodelist-和-htmlcollection-之间的关系？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-和-htmlcollection-之间的关系？","aria-hidden":"true"}},[e._v("#")]),e._v(" NodeList 和 HTMLCollection 之间的关系？")]),e._v(" "),o("blockquote",[o("p",[e._v("2018-07-04")])]),e._v(" "),o("p",[e._v("历史上的 DOM 集合接口。主要不同在于 "),o("code",[e._v("HTMLCollection")]),e._v("是元素集合而 NodeList 是节点集合（即可以包含元素，也可以包含文本节点）。所以 "),o("code",[e._v("node.childNodes")]),e._v(" 返回 "),o("code",[e._v("NodeList")]),e._v("，而 "),o("code",[e._v("node.children")]),e._v(" 和 "),o("code",[e._v("node.getElementsByXXX")]),e._v(" 返回 "),o("code",[e._v("HTMLCollection")]),e._v(" 。")]),e._v(" "),o("p",[e._v("唯一要注意的是 "),o("code",[e._v("querySelectorAll")]),e._v(" 返回的虽然是 "),o("code",[e._v("NodeList")]),e._v(" ，但是实际上是元素集合，并且是静态的（其他接口返回的 "),o("code",[e._v("HTMLCollection")]),e._v(" 和 "),o("code",[e._v("NodeList")]),e._v(" 都是 live 的）。")]),e._v(" "),o("p",[e._v("Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. While a NodeList can contain any node type, an HTMLCollection is supposed to only contain Element nodes.\nAn HTMLCollection provides the same methods as a NodeList and additionally a method called namedItem.")]),e._v(" "),o("p",[e._v("Collections are always used when access has to be provided to multiple nodes, e.g. most selector methods (such as getElementsByTagName) return multiple nodes or getting a reference to all children (element.childNodes).")])])}],!1,null,null,null);t.default=l.exports}}]);