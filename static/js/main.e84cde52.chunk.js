(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{27:function(t,e,n){t.exports=n(40)},32:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(13),c=n.n(i),a=(n(32),n(11)),l=n(1),s=n(2),u=n(5),d=n(3),p=n(6),f=n(4),b=n(19),O=n(8),h="SET_FILTER",m="SET_TODOS",v="ADD_TODO",j="REMOVE_TODO",y="SHOW_NOTIFICATION",g="HIDE_NOTIFICATION";function T(t){return function(e){e({type:y,text:t}),setTimeout((function(){e({type:g})}),2e3)}}function k(){var t=Object(b.a)(["\n    background: red;\n    position: relative;\n    > span {\n        position: absolute;\n    } \n"]);return k=function(){return t},t}var E=n(21).a.div(k());var w=Object(O.b)(null,(function(t){return{removeTodo:function(e){t(function(t){return{type:j,id:t}}(e))}}}))((function(t){var e=t.content,n=t.id,o="todo-item";return t.checked&&(o+=" checked"),r.a.createElement(E,{className:o,onClick:function(){t.onCheckedToggle(n)}},e,r.a.createElement("span",{className:"remove-todo",onClick:function(e){e.stopPropagation(),t.removeTodo(n)}},"X"))})),S=function(t){function e(t){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).call(this,t))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"todo-list"},r.a.createElement("h3",null,this.props.title," ",r.a.createElement("span",null,this.props.todos.length)),this.props.todos.map((function(e){return r.a.createElement(w,Object.assign({},e,{key:e.id,onCheckedToggle:t.props.onCheckedToggle}))})))}}]),e}(r.a.Component);S.defaultProps={title:"Ba\u015fl\u0131k"};var P=S,D=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={inputVal:""},n.changeInput=n.changeInput.bind(Object(p.a)(n)),n.addTodo=n.addTodo.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"changeInput",value:function(t){var e=t.target.value;this.setState({inputVal:e})}},{key:"addTodo",value:function(t){t.preventDefault(),this.props.onTodoAdd(this.state.inputVal),this.setState({inputVal:""})}},{key:"render",value:function(){this.props.onAdd;return r.a.createElement("form",{onSubmit:this.addTodo},r.a.createElement("input",{type:"text",value:this.state.inputVal,onChange:this.changeInput}),r.a.createElement("button",null,"Ekle"))}}]),e}(r.a.Component),C=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("button",{className:"remove-all",onClick:function(){t.props.onRemoveAll()}},"T\xfcm\xfcn\xfc Sil")}}]),e}(r.a.Component),I=(n(39),[{label:"Hepsi",labelKey:"all"},{label:"Tamamlanm\u0131\u015f",labelKey:"completed"},{label:"Tamamlanmam\u0131\u015f",labelKey:"uncompleted"}]),N=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props),r.a.createElement("div",null,I.map((function(e){return r.a.createElement("div",{onClick:function(){t.props.changeFilter(e.labelKey)}},e.label)})))}}]),e}(o.Component),A=Object(O.b)((function(t){return{activeFilter:t.activeFilter}}),(function(t){return{changeFilter:function(e){t(function(t){return{type:h,activeFilter:t}}(e))}}}))(N);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var x=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).filterTodos=function(t,e){return"all"===e?t:"completed"===e?t.filter((function(t){return t.checked})):t.filter((function(t){return!t.checked}))},n.addTodo=n.addTodo.bind(Object(p.a)(n)),n.removeAllTodos=n.removeAllTodos.bind(Object(p.a)(n)),n.toggleCompleteStatus=n.toggleCompleteStatus.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log("G\xdcncel proplar",this.props);var t=window.localStorage.getItem("todos");t&&(t=JSON.parse(t)),this.props.addTodos(t||[])}},{key:"componentDidUpdate",value:function(t,e,n){JSON.stringify(t.todos)!==JSON.stringify(this.props.todos)&&window.localStorage.setItem("todos",JSON.stringify(this.props.todos))}},{key:"addTodo",value:function(t){this.props.addTodo({content:t,id:Math.random(),checked:!1})}},{key:"removeAllTodos",value:function(){this.setState({todos:[]},(function(){window.localStorage.removeItem("todos")}))}},{key:"toggleCompleteStatus",value:function(t){var e=this,n=this.state.todos.map((function(e){if(t===e.id){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e);return n.checked=!n.checked,n}return e}));this.setState({todos:n},(function(){window.localStorage.setItem("todos",JSON.stringify(e.state.todos))}))}},{key:"render",value:function(){return console.log("App props",this.props),r.a.createElement("div",{className:"App",id:"todo"},this.props.notificationVisibility&&r.a.createElement("div",{style:{background:"black",color:"white",padding:"15px",fontSize:"20px"}},this.props.notificationText),r.a.createElement("div",{className:"todo-list todo-list-add"},r.a.createElement("h3",null,"Todo Ekle / Sil"),r.a.createElement("div",null,r.a.createElement(D,{onTodoAdd:this.addTodo}),r.a.createElement(C,{onRemoveAll:this.removeAllTodos}),r.a.createElement(A,null))),r.a.createElement(P,{todos:this.filterTodos(this.props.todos,this.props.activeFilter),onCheckedToggle:this.toggleCompleteStatus}))}}]),e}(o.Component),V=Object(O.b)((function(t){return console.log(t),{activeFilter:t.todosReducer.activeFilter,todos:t.todosReducer.todos,notificationVisibility:t.notificationReducer.notificationVisibility,notificationText:t.notificationReducer.notificationText}}),(function(t){return{addTodos:function(e){t(function(t){return{type:m,todos:t}}(e))},addTodo:function(e){t(function(t){return function(e){t.content?(e({type:v,todo:t}),e(T("".concat(t.content," Eklendi")))):e(T("Bo\u015f eklenemez !!!!"))}}(e))}}}))(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(9),J=n(24);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M=Object(R.c)({todosReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activeFilter:"all",todos:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return H({},t,{activeFilter:e.activeFilter});case m:return H({},t,{todos:e.todos});case v:return H({},t,{todos:t.todos.concat([e.todo])});case j:var n=t.todos.filter((function(t){return t.id!==e.id}));return H({},t,{todos:n});default:return t}},notificationReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notificationVisibility:!1,notificationText:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return B({},t,{notificationVisibility:!0,notificationText:e.text});case g:return B({},t,{notificationVisibility:!1});default:return t}}}),W=Object(R.e)(M,Object(R.d)(Object(R.a)(J.a),window.devToolsExtension?window.devToolsExtension():function(t){return t}));c.a.render(r.a.createElement((function(t){return r.a.createElement(O.a,{store:W},r.a.createElement(V,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e84cde52.chunk.js.map