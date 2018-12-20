// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.svg');
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

var component_fnk__7745__auto___18431 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18417 = schema.core.Any;
var input_schema18418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18416","map18416",-658946838,null))], null);
var input_checker18419 = schema.core.checker.call(null,input_schema18418);
var output_checker18420 = schema.core.checker.call(null,output_schema18417);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function constructor18414(G__18421){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18421], null);
var temp__4388__auto___18433 = input_checker18419.call(null,args__5938__auto___18432);
if(cljs.core.truth_(temp__4388__auto___18433)){
var error__5939__auto___18434 = temp__4388__auto___18433;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18414","constructor18414",-893133889,null),cljs.core.pr_str.call(null,error__5939__auto___18434)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18418,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18432,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18434], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18416 = G__18421;
while(true){
if(cljs.core.map_QMARK_.call(null,map18416)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18416)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18416,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18416,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18416,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18416,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.svg.t18425 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.svg.t18425 = (function (validate__5937__auto__,owner,data,map18416,output_schema18417,state,input_schema18418,output_checker18420,G__18421,opts,ufv__,input_checker18419,constructor18414,meta18426){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.map18416 = map18416;
this.output_schema18417 = output_schema18417;
this.state = state;
this.input_schema18418 = input_schema18418;
this.output_checker18420 = output_checker18420;
this.G__18421 = G__18421;
this.opts = opts;
this.ufv__ = ufv__;
this.input_checker18419 = input_checker18419;
this.constructor18414 = constructor18414;
this.meta18426 = meta18426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.svg.t18425.prototype.om$core$IDisplayName$ = true;

jade.components.svg.t18425.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function (_){
var self__ = this;
var ___$1 = this;
return "svg";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

jade.components.svg.t18425.prototype.om$core$IRender$ = true;

jade.components.svg.t18425.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.svg({"dangerouslySetInnerHtml": om_tools.dom.format_opts.call(null,[cljs.core.str("<use xlink:href='"),cljs.core.str(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("'></use>")].join('')), "className": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(self__.data)), "viewBox": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"vb","vb",-975054337).cljs$core$IFn$_invoke$arity$1(self__.data))});
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

jade.components.svg.t18425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function (_18427){
var self__ = this;
var _18427__$1 = this;
return self__.meta18426;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

jade.components.svg.t18425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function (_18427,meta18426__$1){
var self__ = this;
var _18427__$1 = this;
return (new jade.components.svg.t18425(self__.validate__5937__auto__,self__.owner,self__.data,self__.map18416,self__.output_schema18417,self__.state,self__.input_schema18418,self__.output_checker18420,self__.G__18421,self__.opts,self__.ufv__,self__.input_checker18419,self__.constructor18414,meta18426__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

jade.components.svg.t18425.cljs$lang$type = true;

jade.components.svg.t18425.cljs$lang$ctorStr = "jade.components.svg/t18425";

jade.components.svg.t18425.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.svg/t18425");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

jade.components.svg.__GT_t18425 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420){
return (function __GT_t18425(validate__5937__auto____$1,owner__$1,data__$1,map18416__$1,output_schema18417__$1,state__$1,input_schema18418__$1,output_checker18420__$1,G__18421__$1,opts__$1,ufv____$1,input_checker18419__$1,constructor18414__$1,meta18426){
return (new jade.components.svg.t18425(validate__5937__auto____$1,owner__$1,data__$1,map18416__$1,output_schema18417__$1,state__$1,input_schema18418__$1,output_checker18420__$1,G__18421__$1,opts__$1,ufv____$1,input_checker18419__$1,constructor18414__$1,meta18426));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
;

}

return (new jade.components.svg.t18425(validate__5937__auto__,owner,data,map18416,output_schema18417,state,input_schema18418,output_checker18420,G__18421,opts,ufv__,input_checker18419,constructor18414,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18435 = output_checker18420.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18435)){
var error__5939__auto___18436 = temp__4388__auto___18435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18414","constructor18414",-893133889,null),cljs.core.pr_str.call(null,error__5939__auto___18436)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18417,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18436], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18417,input_schema18418,input_checker18419,output_checker18420))
,schema.core.make_fn_schema.call(null,output_schema18417,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18418], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.svg.svg = ((function (component_fnk__7745__auto___18431){
return (function() { 
var svg__delegate = function (data__7746__auto__,owner18413,p__18428){
var vec__18430 = p__18428;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18430,(0),null);
return component_fnk__7745__auto___18431.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18413),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18413,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var svg = function (data__7746__auto__,owner18413,var_args){
var p__18428 = null;
if (arguments.length > 2) {
  p__18428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return svg__delegate.call(this,data__7746__auto__,owner18413,p__18428);};
svg.cljs$lang$maxFixedArity = 2;
svg.cljs$lang$applyTo = (function (arglist__18437){
var data__7746__auto__ = cljs.core.first(arglist__18437);
arglist__18437 = cljs.core.next(arglist__18437);
var owner18413 = cljs.core.first(arglist__18437);
var p__18428 = cljs.core.rest(arglist__18437);
return svg__delegate(data__7746__auto__,owner18413,p__18428);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;})(component_fnk__7745__auto___18431))
;

jade.components.svg.__GT_svg = (function() {
var __GT_svg = null;
var __GT_svg__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.svg.svg,cursor__7714__auto__);
});
var __GT_svg__2 = (function (cursor__7714__auto__,m18415){
return om.core.build.call(null,jade.components.svg.svg,cursor__7714__auto__,m18415);
});
__GT_svg = function(cursor__7714__auto__,m18415){
switch(arguments.length){
case 1:
return __GT_svg__1.call(this,cursor__7714__auto__);
case 2:
return __GT_svg__2.call(this,cursor__7714__auto__,m18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_svg.cljs$core$IFn$_invoke$arity$1 = __GT_svg__1;
__GT_svg.cljs$core$IFn$_invoke$arity$2 = __GT_svg__2;
return __GT_svg;
})()
;

//# sourceMappingURL=svg.js.map?rel=1545283550053