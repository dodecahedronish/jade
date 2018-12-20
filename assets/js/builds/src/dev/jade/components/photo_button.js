// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.photo_button');
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

var component_fnk__7745__auto___18535 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18519 = schema.core.Any;
var input_schema18520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18518","map18518",-856829690,null))], null);
var input_checker18521 = schema.core.checker.call(null,input_schema18520);
var output_checker18522 = schema.core.checker.call(null,output_schema18519);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function constructor18516(G__18523){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18523], null);
var temp__4388__auto___18537 = input_checker18521.call(null,args__5938__auto___18536);
if(cljs.core.truth_(temp__4388__auto___18537)){
var error__5939__auto___18538 = temp__4388__auto___18537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18516","constructor18516",-905561085,null),cljs.core.pr_str.call(null,error__5939__auto___18538)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18520,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18536,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18538], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18518 = G__18523;
while(true){
if(cljs.core.map_QMARK_.call(null,map18518)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18518)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18518,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18518,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18518,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18518,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.photo_button.t18528 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.photo_button.t18528 = (function (constructor18516,validate__5937__auto__,owner,map18518,data,input_checker18521,state,input_schema18520,opts,ufv__,output_schema18519,G__18523,output_checker18522,meta18529){
this.constructor18516 = constructor18516;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.map18518 = map18518;
this.data = data;
this.input_checker18521 = input_checker18521;
this.state = state;
this.input_schema18520 = input_schema18520;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema18519 = output_schema18519;
this.G__18523 = G__18523;
this.output_checker18522 = output_checker18522;
this.meta18529 = meta18529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.photo_button.t18528.prototype.om$core$IDisplayName$ = true;

jade.components.photo_button.t18528.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (_){
var self__ = this;
var ___$1 = this;
return "photo-button";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

jade.components.photo_button.t18528.prototype.om$core$IRender$ = true;

jade.components.photo_button.t18528.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__18531 = new cljs.core.Keyword(null,"click-states","click-states",-610995480).cljs$core$IFn$_invoke$arity$1(self__.opts);
var clicked = cljs.core.nth.call(null,vec__18531,(0),null);
var unclicked = cljs.core.nth.call(null,vec__18531,(1),null);
var panel_BANG_ = jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"border": "1px solid gray", "borderRadius": "50%", "height": "85px", "width": "85px"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"background": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"clicked","clicked",114423720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?clicked:unclicked)), "borderRadius": "50%", "transition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str((new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)) / (2))),cljs.core.str("s "),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))].join('')), "WebkitTransition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(self__.state))].join('')), "height": "75px", "width": "75px"}, "onTouchStart": om_tools.dom.format_opts.call(null,cljs.core.comp.call(null,panel_BANG_,((function (vec__18531,clicked,unclicked,panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (e){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked","clicked",114423720),true);

return e;
});})(vec__18531,clicked,unclicked,panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
)), "onClick": om_tools.dom.format_opts.call(null,((function (vec__18531,clicked,unclicked,panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (e){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked","clicked",114423720),true);

return panel_BANG_.call(null,e);
});})(vec__18531,clicked,unclicked,panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
), "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"style": {"WebkitFilter": "invert()", "height": "45%"}, "src": "img/camera.png"})],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

jade.components.photo_button.t18528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (_18530){
var self__ = this;
var _18530__$1 = this;
return self__.meta18529;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

jade.components.photo_button.t18528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (_18530,meta18529__$1){
var self__ = this;
var _18530__$1 = this;
return (new jade.components.photo_button.t18528(self__.constructor18516,self__.validate__5937__auto__,self__.owner,self__.map18518,self__.data,self__.input_checker18521,self__.state,self__.input_schema18520,self__.opts,self__.ufv__,self__.output_schema18519,self__.G__18523,self__.output_checker18522,meta18529__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

jade.components.photo_button.t18528.cljs$lang$type = true;

jade.components.photo_button.t18528.cljs$lang$ctorStr = "jade.components.photo-button/t18528";

jade.components.photo_button.t18528.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.photo-button/t18528");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

jade.components.photo_button.__GT_t18528 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522){
return (function __GT_t18528(constructor18516__$1,validate__5937__auto____$1,owner__$1,map18518__$1,data__$1,input_checker18521__$1,state__$1,input_schema18520__$1,opts__$1,ufv____$1,output_schema18519__$1,G__18523__$1,output_checker18522__$1,meta18529){
return (new jade.components.photo_button.t18528(constructor18516__$1,validate__5937__auto____$1,owner__$1,map18518__$1,data__$1,input_checker18521__$1,state__$1,input_schema18520__$1,opts__$1,ufv____$1,output_schema18519__$1,G__18523__$1,output_checker18522__$1,meta18529));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
;

}

return (new jade.components.photo_button.t18528(constructor18516,validate__5937__auto__,owner,map18518,data,input_checker18521,state,input_schema18520,opts,ufv__,output_schema18519,G__18523,output_checker18522,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18539 = output_checker18522.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18539)){
var error__5939__auto___18540 = temp__4388__auto___18539;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18516","constructor18516",-905561085,null),cljs.core.pr_str.call(null,error__5939__auto___18540)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18519,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18540], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18519,input_schema18520,input_checker18521,output_checker18522))
,schema.core.make_fn_schema.call(null,output_schema18519,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18520], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.photo_button.photo_button = ((function (component_fnk__7745__auto___18535){
return (function() { 
var photo_button__delegate = function (data__7746__auto__,owner18515,p__18532){
var vec__18534 = p__18532;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18534,(0),null);
return component_fnk__7745__auto___18535.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18515),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18515,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var photo_button = function (data__7746__auto__,owner18515,var_args){
var p__18532 = null;
if (arguments.length > 2) {
  p__18532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return photo_button__delegate.call(this,data__7746__auto__,owner18515,p__18532);};
photo_button.cljs$lang$maxFixedArity = 2;
photo_button.cljs$lang$applyTo = (function (arglist__18541){
var data__7746__auto__ = cljs.core.first(arglist__18541);
arglist__18541 = cljs.core.next(arglist__18541);
var owner18515 = cljs.core.first(arglist__18541);
var p__18532 = cljs.core.rest(arglist__18541);
return photo_button__delegate(data__7746__auto__,owner18515,p__18532);
});
photo_button.cljs$core$IFn$_invoke$arity$variadic = photo_button__delegate;
return photo_button;
})()
;})(component_fnk__7745__auto___18535))
;

jade.components.photo_button.__GT_photo_button = (function() {
var __GT_photo_button = null;
var __GT_photo_button__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.photo_button.photo_button,cursor__7714__auto__);
});
var __GT_photo_button__2 = (function (cursor__7714__auto__,m18517){
return om.core.build.call(null,jade.components.photo_button.photo_button,cursor__7714__auto__,m18517);
});
__GT_photo_button = function(cursor__7714__auto__,m18517){
switch(arguments.length){
case 1:
return __GT_photo_button__1.call(this,cursor__7714__auto__);
case 2:
return __GT_photo_button__2.call(this,cursor__7714__auto__,m18517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_photo_button.cljs$core$IFn$_invoke$arity$1 = __GT_photo_button__1;
__GT_photo_button.cljs$core$IFn$_invoke$arity$2 = __GT_photo_button__2;
return __GT_photo_button;
})()
;

//# sourceMappingURL=photo_button.js.map?rel=1545283550298