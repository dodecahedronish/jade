// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.header');
goog.require('cljs.core');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18222 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18208 = schema.core.Any;
var input_schema18209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18207","map18207",1667719359,null))], null);
var input_checker18210 = schema.core.checker.call(null,input_schema18209);
var output_checker18211 = schema.core.checker.call(null,output_schema18208);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function constructor18205(G__18212){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18212], null);
var temp__4388__auto___18224 = input_checker18210.call(null,args__5938__auto___18223);
if(cljs.core.truth_(temp__4388__auto___18224)){
var error__5939__auto___18225 = temp__4388__auto___18224;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18205","constructor18205",-1624231044,null),cljs.core.pr_str.call(null,error__5939__auto___18225)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18209,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18223,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18225], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18207 = G__18212;
while(true){
if(cljs.core.map_QMARK_.call(null,map18207)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18207)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18207,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18207,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18207,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18207,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.header.t18216 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.header.t18216 = (function (validate__5937__auto__,G__18212,input_schema18209,owner,data,output_checker18211,state,output_schema18208,opts,constructor18205,ufv__,map18207,input_checker18210,meta18217){
this.validate__5937__auto__ = validate__5937__auto__;
this.G__18212 = G__18212;
this.input_schema18209 = input_schema18209;
this.owner = owner;
this.data = data;
this.output_checker18211 = output_checker18211;
this.state = state;
this.output_schema18208 = output_schema18208;
this.opts = opts;
this.constructor18205 = constructor18205;
this.ufv__ = ufv__;
this.map18207 = map18207;
this.input_checker18210 = input_checker18210;
this.meta18217 = meta18217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.header.t18216.prototype.om$core$IDisplayName$ = true;

jade.components.header.t18216.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function (_){
var self__ = this;
var ___$1 = this;
return "header";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

jade.components.header.t18216.prototype.om$core$IRender$ = true;

jade.components.header.t18216.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function (_){
var self__ = this;
var ___$1 = this;
var spacer = ".35rem";
var class_str = "flex glyphicons base-color";
return cljs.core.apply.call(null,React.DOM.div,{"style": {"color": "white", "top": (0), "width": "100%", "background": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(self__.data)), "opacity": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(self__.data)), "zIndex": (1), "position": "absolute", "fontSize": om_tools.dom.format_opts.call(null,(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "1.85rem";
}
})()), "height": om_tools.dom.format_opts.call(null,[cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"h-height","h-height",158526209).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "8.75";
}
})()),cljs.core.str("%")].join('')), "left": (0)}, "className": "dark flex gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "98%"}, "className": "flex-between"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"style": {"zIndex": (1), "marginLeft": om_tools.dom.format_opts.call(null,spacer), "paddingLeft": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$1(self__.data)), "height": "50%"}, "className": om_tools.dom.format_opts.call(null,[cljs.core.str(class_str),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"left-icon","left-icon",769524213).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')), "onClick": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646).cljs$core$IFn$_invoke$arity$1(self__.data))}),cljs.core.apply.call(null,React.DOM.div,{"style": {"left": (0), "top": (0), "height": "100%", "width": "100%", "position": "absolute"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4386__auto__ = new cljs.core.Keyword(null,"prompt","prompt",-78109487).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(temp__4386__auto__)){
var prompt = temp__4386__auto__;
return cljs.core.apply.call(null,React.DOM.span,{"className": "goth large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[prompt],null))));
} else {
return React.DOM.img({"src": om_tools.dom.format_opts.call(null,[cljs.core.str("lotus/slices/"),cljs.core.str("logo_titlebar.png")].join('')), "style": {"width": "auto", "height": "60%"}});
}
})()],null)))),React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str(class_str),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"right-icon","right-icon",-707506540).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')), "onTouchStart": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"right-behavior","right-behavior",-660762046).cljs$core$IFn$_invoke$arity$1(self__.data)), "onClick": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"right-behavior","right-behavior",-660762046).cljs$core$IFn$_invoke$arity$1(self__.data)), "style": {"height": "50%", "zIndex": (1)}})],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

jade.components.header.t18216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function (_18218){
var self__ = this;
var _18218__$1 = this;
return self__.meta18217;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

jade.components.header.t18216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function (_18218,meta18217__$1){
var self__ = this;
var _18218__$1 = this;
return (new jade.components.header.t18216(self__.validate__5937__auto__,self__.G__18212,self__.input_schema18209,self__.owner,self__.data,self__.output_checker18211,self__.state,self__.output_schema18208,self__.opts,self__.constructor18205,self__.ufv__,self__.map18207,self__.input_checker18210,meta18217__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

jade.components.header.t18216.cljs$lang$type = true;

jade.components.header.t18216.cljs$lang$ctorStr = "jade.components.header/t18216";

jade.components.header.t18216.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.header/t18216");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

jade.components.header.__GT_t18216 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211){
return (function __GT_t18216(validate__5937__auto____$1,G__18212__$1,input_schema18209__$1,owner__$1,data__$1,output_checker18211__$1,state__$1,output_schema18208__$1,opts__$1,constructor18205__$1,ufv____$1,map18207__$1,input_checker18210__$1,meta18217){
return (new jade.components.header.t18216(validate__5937__auto____$1,G__18212__$1,input_schema18209__$1,owner__$1,data__$1,output_checker18211__$1,state__$1,output_schema18208__$1,opts__$1,constructor18205__$1,ufv____$1,map18207__$1,input_checker18210__$1,meta18217));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
;

}

return (new jade.components.header.t18216(validate__5937__auto__,G__18212,input_schema18209,owner,data,output_checker18211,state,output_schema18208,opts,constructor18205,ufv__,map18207,input_checker18210,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18226 = output_checker18211.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18226)){
var error__5939__auto___18227 = temp__4388__auto___18226;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18205","constructor18205",-1624231044,null),cljs.core.pr_str.call(null,error__5939__auto___18227)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18208,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18227], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18208,input_schema18209,input_checker18210,output_checker18211))
,schema.core.make_fn_schema.call(null,output_schema18208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18209], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.header.header = ((function (component_fnk__7745__auto___18222){
return (function() { 
var header__delegate = function (data__7746__auto__,owner18204,p__18219){
var vec__18221 = p__18219;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18221,(0),null);
return component_fnk__7745__auto___18222.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18204),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18204,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var header = function (data__7746__auto__,owner18204,var_args){
var p__18219 = null;
if (arguments.length > 2) {
  p__18219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return header__delegate.call(this,data__7746__auto__,owner18204,p__18219);};
header.cljs$lang$maxFixedArity = 2;
header.cljs$lang$applyTo = (function (arglist__18228){
var data__7746__auto__ = cljs.core.first(arglist__18228);
arglist__18228 = cljs.core.next(arglist__18228);
var owner18204 = cljs.core.first(arglist__18228);
var p__18219 = cljs.core.rest(arglist__18228);
return header__delegate(data__7746__auto__,owner18204,p__18219);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;})(component_fnk__7745__auto___18222))
;

jade.components.header.__GT_header = (function() {
var __GT_header = null;
var __GT_header__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.header.header,cursor__7714__auto__);
});
var __GT_header__2 = (function (cursor__7714__auto__,m18206){
return om.core.build.call(null,jade.components.header.header,cursor__7714__auto__,m18206);
});
__GT_header = function(cursor__7714__auto__,m18206){
switch(arguments.length){
case 1:
return __GT_header__1.call(this,cursor__7714__auto__);
case 2:
return __GT_header__2.call(this,cursor__7714__auto__,m18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_header.cljs$core$IFn$_invoke$arity$1 = __GT_header__1;
__GT_header.cljs$core$IFn$_invoke$arity$2 = __GT_header__2;
return __GT_header;
})()
;

//# sourceMappingURL=header.js.map?rel=1545283549621