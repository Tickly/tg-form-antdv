(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{723:function(e,n,c){"use strict";c.r(n);var r={data:function(){return{checkNick:!1,form:{name:"",nickname:""}}},computed:{rules:function(){return[["required",["name",this.checkNick&&"nickname"]]]}},methods:{check:function(){this.$refs.form.validate()}}},t=c(103),a=Object(t.a)(r,(function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("tg-form",{ref:"form",attrs:{form:e.form,rules:e.rules}},[c("tg-form-item",{attrs:{prop:"name"}},[c("a-input",{attrs:{placeholder:"Please input your name"},model:{value:e.form.name,callback:function(n){e.$set(e.form,"name",n)},expression:"form.name"}})],1),e._v(" "),c("tg-form-item",{attrs:{prop:"nickname"}},[c("a-input",{attrs:{placeholder:"Please input your nickname"},model:{value:e.form.nickname,callback:function(n){e.$set(e.form,"nickname",n)},expression:"form.nickname"}})],1),e._v(" "),c("a-form-item",[c("a-checkbox",{model:{value:e.checkNick,callback:function(n){e.checkNick=n},expression:"checkNick"}},[e._v("Nickname is required")])],1),e._v(" "),c("a-form-item",[c("a-button",{attrs:{type:"primary"},on:{click:e.check}},[e._v("Check")])],1)],1)}),[],!1,null,null,null);n.default=a.exports}}]);