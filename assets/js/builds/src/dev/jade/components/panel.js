// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.panel');
goog.require('cljs.core');
goog.require('jade.mixins.gohub');
goog.require('jade.utils');
goog.require('jade.mixins.transin');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.mixins.transin');
goog.require('om_tools.dom');
goog.require('jade.mixins.gohub');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('goog.dom');
goog.require('goog.debug');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
jade.components.panel.panel$descriptor = (function (){var descriptor__7716__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__7716__auto__["mixins"] = [jade.mixins.gohub.go_hub,jade.mixins.transin.trans_in]);

return descriptor__7716__auto__;
})();

var component_fnk__7745__auto___18610 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18596 = schema.core.Any;
var input_schema18597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18595","map18595",-259427797,null))], null);
var input_checker18598 = schema.core.checker.call(null,input_schema18597);
var output_checker18599 = schema.core.checker.call(null,output_schema18596);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function constructor18593(G__18600){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18600], null);
var temp__4388__auto___18612 = input_checker18598.call(null,args__5938__auto___18611);
if(cljs.core.truth_(temp__4388__auto___18612)){
var error__5939__auto___18613 = temp__4388__auto___18612;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18593","constructor18593",2035829064,null),cljs.core.pr_str.call(null,error__5939__auto___18613)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18597,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18611,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18613], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18595 = G__18600;
while(true){
if(cljs.core.map_QMARK_.call(null,map18595)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18595)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18595,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18595,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18595,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18595,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.panel.t18604 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.panel.t18604 = (function (validate__5937__auto__,owner,data,constructor18593,map18595,input_checker18598,state,input_schema18597,output_checker18599,G__18600,output_schema18596,opts,ufv__,meta18605){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.constructor18593 = constructor18593;
this.map18595 = map18595;
this.input_checker18598 = input_checker18598;
this.state = state;
this.input_schema18597 = input_schema18597;
this.output_checker18599 = output_checker18599;
this.G__18600 = G__18600;
this.output_schema18596 = output_schema18596;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18605 = meta18605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.panel.t18604.prototype.om$core$IDisplayName$ = true;

jade.components.panel.t18604.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function (_){
var self__ = this;
var ___$1 = this;
return "panel";
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

jade.components.panel.t18604.prototype.om$core$IRenderState$ = true;

jade.components.panel.t18604.prototype.om$core$IRenderState$render_state$arity$2 = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function (_,state__$1){
var self__ = this;
var ___$1 = this;
var transstr = jade.utils.transform_str.call(null,new cljs.core.Keyword(null,"trans","trans",-1318503851).cljs$core$IFn$_invoke$arity$1(state__$1),(cljs.core.truth_(new cljs.core.Keyword(null,"no-transition-in","no-transition-in",820626142).cljs$core$IFn$_invoke$arity$1(state__$1))?new cljs.core.Keyword(null,"trans-in","trans-in",2057477780).cljs$core$IFn$_invoke$arity$1(state__$1):jade.utils.direct_trans.call(null,new cljs.core.Keyword(null,"trans-init","trans-init",-1550871321).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(self__.data))));
return cljs.core.apply.call(null,React.DOM.section,{"style": {"WebkitTransform": om_tools.dom.format_opts.call(null,transstr), "backfaceVisibility": "hidden", "transform": om_tools.dom.format_opts.call(null,transstr), "transition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(state__$1)),cljs.core.str("s "),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(state__$1)))].join('')), "width": om_tools.dom.format_opts.call(null,[cljs.core.str((function (){var or__3622__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.opts);
}
})()),cljs.core.str("%")].join('')), "background": om_tools.dom.format_opts.call(null,[cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state__$1))].join('')), "opacity": om_tools.dom.format_opts.call(null,(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (1);
}
})()), "zIndex": om_tools.dom.format_opts.call(null,(function (){var or__3622__auto__ = (function (){var or__3622__auto__ = new cljs.core.Keyword(null,"z-index","z-index",1892827090).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return new cljs.core.Keyword(null,"z-index","z-index",1892827090).cljs$core$IFn$_invoke$arity$1(self__.opts);
}
})();
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return (0);
}
})()), "position": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"absolute","absolute",1655386478).cljs$core$IFn$_invoke$arity$1(state__$1))?"absolute":null)), "WebkitTransition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(state__$1)),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(state__$1))].join('')), "height": "100%"}, "className": "flex preserve-3d"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(state__$1)),(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(state__$1));
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.identity;
}
})().call(null,self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.merge.call(null,self__.opts,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(state__$1))),new cljs.core.Keyword(null,"state","state",-1988618099),state__$1], null))],null))));
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

jade.components.panel.t18604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function (_18606){
var self__ = this;
var _18606__$1 = this;
return self__.meta18605;
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

jade.components.panel.t18604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function (_18606,meta18605__$1){
var self__ = this;
var _18606__$1 = this;
return (new jade.components.panel.t18604(self__.validate__5937__auto__,self__.owner,self__.data,self__.constructor18593,self__.map18595,self__.input_checker18598,self__.state,self__.input_schema18597,self__.output_checker18599,self__.G__18600,self__.output_schema18596,self__.opts,self__.ufv__,meta18605__$1));
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

jade.components.panel.t18604.cljs$lang$type = true;

jade.components.panel.t18604.cljs$lang$ctorStr = "jade.components.panel/t18604";

jade.components.panel.t18604.cljs$lang$ctorPrWriter = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.panel/t18604");
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

jade.components.panel.__GT_t18604 = ((function (opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599){
return (function __GT_t18604(validate__5937__auto____$1,owner__$1,data__$1,constructor18593__$1,map18595__$1,input_checker18598__$1,state__$1,input_schema18597__$1,output_checker18599__$1,G__18600__$1,output_schema18596__$1,opts__$1,ufv____$1,meta18605){
return (new jade.components.panel.t18604(validate__5937__auto____$1,owner__$1,data__$1,constructor18593__$1,map18595__$1,input_checker18598__$1,state__$1,input_schema18597__$1,output_checker18599__$1,G__18600__$1,output_schema18596__$1,opts__$1,ufv____$1,meta18605));
});})(opts,state,owner,data,validate__5937__auto__,ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
;

}

return (new jade.components.panel.t18604(validate__5937__auto__,owner,data,constructor18593,map18595,input_checker18598,state,input_schema18597,output_checker18599,G__18600,output_schema18596,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18614 = output_checker18599.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18614)){
var error__5939__auto___18615 = temp__4388__auto___18614;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18593","constructor18593",2035829064,null),cljs.core.pr_str.call(null,error__5939__auto___18615)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18596,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18615], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18596,input_schema18597,input_checker18598,output_checker18599))
,schema.core.make_fn_schema.call(null,output_schema18596,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18597], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.panel.panel = ((function (component_fnk__7745__auto___18610){
return (function() { 
var panel__delegate = function (data__7746__auto__,owner18592,p__18607){
var vec__18609 = p__18607;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18609,(0),null);
return component_fnk__7745__auto___18610.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18592),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18592,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var panel = function (data__7746__auto__,owner18592,var_args){
var p__18607 = null;
if (arguments.length > 2) {
  p__18607 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return panel__delegate.call(this,data__7746__auto__,owner18592,p__18607);};
panel.cljs$lang$maxFixedArity = 2;
panel.cljs$lang$applyTo = (function (arglist__18616){
var data__7746__auto__ = cljs.core.first(arglist__18616);
arglist__18616 = cljs.core.next(arglist__18616);
var owner18592 = cljs.core.first(arglist__18616);
var p__18607 = cljs.core.rest(arglist__18616);
return panel__delegate(data__7746__auto__,owner18592,p__18607);
});
panel.cljs$core$IFn$_invoke$arity$variadic = panel__delegate;
return panel;
})()
;})(component_fnk__7745__auto___18610))
;

jade.components.panel.__GT_panel = (function() {
var __GT_panel = null;
var __GT_panel__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.panel.panel,cursor__7714__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),jade.components.panel.panel$descriptor], null));
});
var __GT_panel__2 = (function (cursor__7714__auto__,m18594){
return om.core.build.call(null,jade.components.panel.panel,cursor__7714__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),jade.components.panel.panel$descriptor], null),m18594));
});
__GT_panel = function(cursor__7714__auto__,m18594){
switch(arguments.length){
case 1:
return __GT_panel__1.call(this,cursor__7714__auto__);
case 2:
return __GT_panel__2.call(this,cursor__7714__auto__,m18594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_panel.cljs$core$IFn$_invoke$arity$1 = __GT_panel__1;
__GT_panel.cljs$core$IFn$_invoke$arity$2 = __GT_panel__2;
return __GT_panel;
})()
;

//# sourceMappingURL=panel.js.map?rel=1545283550502