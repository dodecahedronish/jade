// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.input');
goog.require('cljs.core');
goog.require('jade.components.header');
goog.require('jade.components.image_view');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.components.image_view');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18585 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18571 = schema.core.Any;
var input_schema18572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18570","map18570",-1336678802,null))], null);
var input_checker18573 = schema.core.checker.call(null,input_schema18572);
var output_checker18574 = schema.core.checker.call(null,output_schema18571);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function constructor18568(G__18575){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18575], null);
var temp__4388__auto___18587 = input_checker18573.call(null,args__5938__auto___18586);
if(cljs.core.truth_(temp__4388__auto___18587)){
var error__5939__auto___18588 = temp__4388__auto___18587;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18568","constructor18568",-785658235,null),cljs.core.pr_str.call(null,error__5939__auto___18588)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18572,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18586,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18588], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18570 = G__18575;
while(true){
if(cljs.core.map_QMARK_.call(null,map18570)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18570)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18570,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18570,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18570,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18570,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.input.t18579 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.input.t18579 = (function (validate__5937__auto__,owner,output_schema18571,constructor18568,data,output_checker18574,map18570,G__18575,state,input_schema18572,input_checker18573,opts,ufv__,meta18580){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.output_schema18571 = output_schema18571;
this.constructor18568 = constructor18568;
this.data = data;
this.output_checker18574 = output_checker18574;
this.map18570 = map18570;
this.G__18575 = G__18575;
this.state = state;
this.input_schema18572 = input_schema18572;
this.input_checker18573 = input_checker18573;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18580 = meta18580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.input.t18579.prototype.om$core$IDisplayName$ = true;

jade.components.input.t18579.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

jade.components.input.t18579.prototype.om$core$IRender$ = true;

jade.components.input.t18579.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.section,{"style": {"height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join('')), "backgroundColor": "white", "marginTop": "1.5%", "position": "relative", "width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join(''))}, "className": "flex bert input-space large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"cwidth","cwidth",-1141631471).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join('')), "height": "100%", "left": "5%", "top": ".5%", "borderTop": "1px solid rgb( 195, 214, 206 )", "position": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"hor-stack","hor-stack",-521302244).cljs$core$IFn$_invoke$arity$1(self__.data))?null:"absolute"))}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"placeholder": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(self__.data)), "style": {"textAlign": "center", "fontSize": "24px", "outlineWidth": "0", "marginTop": "8px", "border": "none"}, "className": "flex bert"})],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

jade.components.input.t18579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function (_18581){
var self__ = this;
var _18581__$1 = this;
return self__.meta18580;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

jade.components.input.t18579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function (_18581,meta18580__$1){
var self__ = this;
var _18581__$1 = this;
return (new jade.components.input.t18579(self__.validate__5937__auto__,self__.owner,self__.output_schema18571,self__.constructor18568,self__.data,self__.output_checker18574,self__.map18570,self__.G__18575,self__.state,self__.input_schema18572,self__.input_checker18573,self__.opts,self__.ufv__,meta18580__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

jade.components.input.t18579.cljs$lang$type = true;

jade.components.input.t18579.cljs$lang$ctorStr = "jade.components.input/t18579";

jade.components.input.t18579.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.input/t18579");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

jade.components.input.__GT_t18579 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574){
return (function __GT_t18579(validate__5937__auto____$1,owner__$1,output_schema18571__$1,constructor18568__$1,data__$1,output_checker18574__$1,map18570__$1,G__18575__$1,state__$1,input_schema18572__$1,input_checker18573__$1,opts__$1,ufv____$1,meta18580){
return (new jade.components.input.t18579(validate__5937__auto____$1,owner__$1,output_schema18571__$1,constructor18568__$1,data__$1,output_checker18574__$1,map18570__$1,G__18575__$1,state__$1,input_schema18572__$1,input_checker18573__$1,opts__$1,ufv____$1,meta18580));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
;

}

return (new jade.components.input.t18579(validate__5937__auto__,owner,output_schema18571,constructor18568,data,output_checker18574,map18570,G__18575,state,input_schema18572,input_checker18573,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18589 = output_checker18574.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18589)){
var error__5939__auto___18590 = temp__4388__auto___18589;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18568","constructor18568",-785658235,null),cljs.core.pr_str.call(null,error__5939__auto___18590)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18571,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18590], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18571,input_schema18572,input_checker18573,output_checker18574))
,schema.core.make_fn_schema.call(null,output_schema18571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18572], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.input.input = ((function (component_fnk__7745__auto___18585){
return (function() { 
var input__delegate = function (data__7746__auto__,owner18567,p__18582){
var vec__18584 = p__18582;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18584,(0),null);
return component_fnk__7745__auto___18585.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18567),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18567,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var input = function (data__7746__auto__,owner18567,var_args){
var p__18582 = null;
if (arguments.length > 2) {
  p__18582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return input__delegate.call(this,data__7746__auto__,owner18567,p__18582);};
input.cljs$lang$maxFixedArity = 2;
input.cljs$lang$applyTo = (function (arglist__18591){
var data__7746__auto__ = cljs.core.first(arglist__18591);
arglist__18591 = cljs.core.next(arglist__18591);
var owner18567 = cljs.core.first(arglist__18591);
var p__18582 = cljs.core.rest(arglist__18591);
return input__delegate(data__7746__auto__,owner18567,p__18582);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(component_fnk__7745__auto___18585))
;

jade.components.input.__GT_input = (function() {
var __GT_input = null;
var __GT_input__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.input.input,cursor__7714__auto__);
});
var __GT_input__2 = (function (cursor__7714__auto__,m18569){
return om.core.build.call(null,jade.components.input.input,cursor__7714__auto__,m18569);
});
__GT_input = function(cursor__7714__auto__,m18569){
switch(arguments.length){
case 1:
return __GT_input__1.call(this,cursor__7714__auto__);
case 2:
return __GT_input__2.call(this,cursor__7714__auto__,m18569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_input.cljs$core$IFn$_invoke$arity$1 = __GT_input__1;
__GT_input.cljs$core$IFn$_invoke$arity$2 = __GT_input__2;
return __GT_input;
})()
;

//# sourceMappingURL=input.js.map?rel=1545283550433