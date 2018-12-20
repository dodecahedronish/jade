// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.order');
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

var component_fnk__7745__auto___18560 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18546 = schema.core.Any;
var input_schema18547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18545","map18545",-1536097048,null))], null);
var input_checker18548 = schema.core.checker.call(null,input_schema18547);
var output_checker18549 = schema.core.checker.call(null,output_schema18546);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function constructor18543(G__18550){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18550], null);
var temp__4388__auto___18562 = input_checker18548.call(null,args__5938__auto___18561);
if(cljs.core.truth_(temp__4388__auto___18562)){
var error__5939__auto___18563 = temp__4388__auto___18562;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18543","constructor18543",2054802726,null),cljs.core.pr_str.call(null,error__5939__auto___18563)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18547,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18561,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18563], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18545 = G__18550;
while(true){
if(cljs.core.map_QMARK_.call(null,map18545)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18545)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18545,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18545,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18545,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18545,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.order.t18554 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.order.t18554 = (function (validate__5937__auto__,owner,constructor18543,data,input_checker18548,map18545,input_schema18547,output_schema18546,state,output_checker18549,opts,G__18550,ufv__,meta18555){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.constructor18543 = constructor18543;
this.data = data;
this.input_checker18548 = input_checker18548;
this.map18545 = map18545;
this.input_schema18547 = input_schema18547;
this.output_schema18546 = output_schema18546;
this.state = state;
this.output_checker18549 = output_checker18549;
this.opts = opts;
this.G__18550 = G__18550;
this.ufv__ = ufv__;
this.meta18555 = meta18555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.order.t18554.prototype.om$core$IDisplayName$ = true;

jade.components.order.t18554.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (_){
var self__ = this;
var ___$1 = this;
return "order";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

jade.components.order.t18554.prototype.om$core$IRender$ = true;

jade.components.order.t18554.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (_){
var self__ = this;
var ___$1 = this;
var n_panel_BANG_ = jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state);
var activate_order_details_BANG_ = ((function (n_panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)),new cljs.core.Keyword(null,"order-details","order-details",582680591));
});})(n_panel_BANG_,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%", "left": (0), "bottom": (0), "position": "absolute", "transition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str((new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)) / (2))),cljs.core.str("s "),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))].join('')), "WebkitTransition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(self__.state))].join('')), "background": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"clicked","clicked",114423720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?new cljs.core.Keyword(null,"trans-bg","trans-bg",882644547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)):null)), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join(''))}, "onTouchStart": om_tools.dom.format_opts.call(null,activate_order_details_BANG_), "onClick": om_tools.dom.format_opts.call(null,activate_order_details_BANG_), "className": "dark flex order"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img(null),cljs.core.apply.call(null,React.DOM.span,{"style": {"color": "white"}, "className": "margin-right gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"copy","copy",-1077617309).cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),jade.utils.spacer,React.DOM.span({"className": "base-color gothic"},"$150")],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

jade.components.order.t18554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (_18556){
var self__ = this;
var _18556__$1 = this;
return self__.meta18555;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

jade.components.order.t18554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (_18556,meta18555__$1){
var self__ = this;
var _18556__$1 = this;
return (new jade.components.order.t18554(self__.validate__5937__auto__,self__.owner,self__.constructor18543,self__.data,self__.input_checker18548,self__.map18545,self__.input_schema18547,self__.output_schema18546,self__.state,self__.output_checker18549,self__.opts,self__.G__18550,self__.ufv__,meta18555__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

jade.components.order.t18554.cljs$lang$type = true;

jade.components.order.t18554.cljs$lang$ctorStr = "jade.components.order/t18554";

jade.components.order.t18554.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.order/t18554");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

jade.components.order.__GT_t18554 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549){
return (function __GT_t18554(validate__5937__auto____$1,owner__$1,constructor18543__$1,data__$1,input_checker18548__$1,map18545__$1,input_schema18547__$1,output_schema18546__$1,state__$1,output_checker18549__$1,opts__$1,G__18550__$1,ufv____$1,meta18555){
return (new jade.components.order.t18554(validate__5937__auto____$1,owner__$1,constructor18543__$1,data__$1,input_checker18548__$1,map18545__$1,input_schema18547__$1,output_schema18546__$1,state__$1,output_checker18549__$1,opts__$1,G__18550__$1,ufv____$1,meta18555));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
;

}

return (new jade.components.order.t18554(validate__5937__auto__,owner,constructor18543,data,input_checker18548,map18545,input_schema18547,output_schema18546,state,output_checker18549,opts,G__18550,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18564 = output_checker18549.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18564)){
var error__5939__auto___18565 = temp__4388__auto___18564;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18543","constructor18543",2054802726,null),cljs.core.pr_str.call(null,error__5939__auto___18565)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18546,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18565], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18546,input_schema18547,input_checker18548,output_checker18549))
,schema.core.make_fn_schema.call(null,output_schema18546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18547], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.order.order = ((function (component_fnk__7745__auto___18560){
return (function() { 
var order__delegate = function (data__7746__auto__,owner18542,p__18557){
var vec__18559 = p__18557;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18559,(0),null);
return component_fnk__7745__auto___18560.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18542),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18542,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var order = function (data__7746__auto__,owner18542,var_args){
var p__18557 = null;
if (arguments.length > 2) {
  p__18557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return order__delegate.call(this,data__7746__auto__,owner18542,p__18557);};
order.cljs$lang$maxFixedArity = 2;
order.cljs$lang$applyTo = (function (arglist__18566){
var data__7746__auto__ = cljs.core.first(arglist__18566);
arglist__18566 = cljs.core.next(arglist__18566);
var owner18542 = cljs.core.first(arglist__18566);
var p__18557 = cljs.core.rest(arglist__18566);
return order__delegate(data__7746__auto__,owner18542,p__18557);
});
order.cljs$core$IFn$_invoke$arity$variadic = order__delegate;
return order;
})()
;})(component_fnk__7745__auto___18560))
;

jade.components.order.__GT_order = (function() {
var __GT_order = null;
var __GT_order__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.order.order,cursor__7714__auto__);
});
var __GT_order__2 = (function (cursor__7714__auto__,m18544){
return om.core.build.call(null,jade.components.order.order,cursor__7714__auto__,m18544);
});
__GT_order = function(cursor__7714__auto__,m18544){
switch(arguments.length){
case 1:
return __GT_order__1.call(this,cursor__7714__auto__);
case 2:
return __GT_order__2.call(this,cursor__7714__auto__,m18544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_order.cljs$core$IFn$_invoke$arity$1 = __GT_order__1;
__GT_order.cljs$core$IFn$_invoke$arity$2 = __GT_order__2;
return __GT_order;
})()
;

//# sourceMappingURL=order.js.map?rel=1545283550379