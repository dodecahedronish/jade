// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.dheader');
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

var component_fnk__7745__auto___18481 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18467 = schema.core.Any;
var input_schema18468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18466","map18466",-1693727635,null))], null);
var input_checker18469 = schema.core.checker.call(null,input_schema18468);
var output_checker18470 = schema.core.checker.call(null,output_schema18467);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function constructor18464(G__18471){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18471], null);
var temp__4388__auto___18483 = input_checker18469.call(null,args__5938__auto___18482);
if(cljs.core.truth_(temp__4388__auto___18483)){
var error__5939__auto___18484 = temp__4388__auto___18483;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18464","constructor18464",1266987881,null),cljs.core.pr_str.call(null,error__5939__auto___18484)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18468,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18482,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18484], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18466 = G__18471;
while(true){
if(cljs.core.map_QMARK_.call(null,map18466)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18466)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18466,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18466,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18466,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18466,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.dheader.t18475 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.dheader.t18475 = (function (validate__5937__auto__,owner,data,G__18471,input_checker18469,constructor18464,map18466,state,output_checker18470,output_schema18467,opts,ufv__,input_schema18468,meta18476){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.G__18471 = G__18471;
this.input_checker18469 = input_checker18469;
this.constructor18464 = constructor18464;
this.map18466 = map18466;
this.state = state;
this.output_checker18470 = output_checker18470;
this.output_schema18467 = output_schema18467;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema18468 = input_schema18468;
this.meta18476 = meta18476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.dheader.t18475.prototype.om$core$IDisplayName$ = true;

jade.components.dheader.t18475.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dheader";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

jade.components.dheader.t18475.prototype.om$core$IRender$ = true;

jade.components.dheader.t18475.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (_){
var self__ = this;
var ___$1 = this;
var dactivate_order_details_BANG_ = ((function (___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)),new cljs.core.Keyword(null,"toggle-order-details","toggle-order-details",530165241));
});})(___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%", "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join('')), "fontSize": om_tools.dom.format_opts.call(null,(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "1.85rem";
}
})()), "transition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str((new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)) / (2))),cljs.core.str("s "),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))].join('')), "WebkitTransition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(self__.state))].join('')), "background": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"clicked","clicked",114423720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"gray":"rgb( 36, 42, 43 )")), "position": "relative"}, "onTouchEnd": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"no-listener","no-listener",879152998).cljs$core$IFn$_invoke$arity$1(self__.data))?null:dactivate_order_details_BANG_)), "className": "dark flex gothic"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"left-icon","left-icon",769524213).cljs$core$IFn$_invoke$arity$1(self__.data)), "style": {"transform": om_tools.dom.format_opts.call(null,[cljs.core.str("scale("),cljs.core.str(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))}, "className": "margin-right2"}),cljs.core.apply.call(null,React.DOM.span,{"style": {"color": "white"}, "className": "margin-right2 goth large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"copy","copy",-1077617309).cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),jade.utils.spacer,React.DOM.span({"style": {"color": "#009372"}, "className": "goth large"},"$150")],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

jade.components.dheader.t18475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (_18477){
var self__ = this;
var _18477__$1 = this;
return self__.meta18476;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

jade.components.dheader.t18475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (_18477,meta18476__$1){
var self__ = this;
var _18477__$1 = this;
return (new jade.components.dheader.t18475(self__.validate__5937__auto__,self__.owner,self__.data,self__.G__18471,self__.input_checker18469,self__.constructor18464,self__.map18466,self__.state,self__.output_checker18470,self__.output_schema18467,self__.opts,self__.ufv__,self__.input_schema18468,meta18476__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

jade.components.dheader.t18475.cljs$lang$type = true;

jade.components.dheader.t18475.cljs$lang$ctorStr = "jade.components.dheader/t18475";

jade.components.dheader.t18475.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.dheader/t18475");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

jade.components.dheader.__GT_t18475 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470){
return (function __GT_t18475(validate__5937__auto____$1,owner__$1,data__$1,G__18471__$1,input_checker18469__$1,constructor18464__$1,map18466__$1,state__$1,output_checker18470__$1,output_schema18467__$1,opts__$1,ufv____$1,input_schema18468__$1,meta18476){
return (new jade.components.dheader.t18475(validate__5937__auto____$1,owner__$1,data__$1,G__18471__$1,input_checker18469__$1,constructor18464__$1,map18466__$1,state__$1,output_checker18470__$1,output_schema18467__$1,opts__$1,ufv____$1,input_schema18468__$1,meta18476));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
;

}

return (new jade.components.dheader.t18475(validate__5937__auto__,owner,data,G__18471,input_checker18469,constructor18464,map18466,state,output_checker18470,output_schema18467,opts,ufv__,input_schema18468,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18485 = output_checker18470.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18485)){
var error__5939__auto___18486 = temp__4388__auto___18485;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18464","constructor18464",1266987881,null),cljs.core.pr_str.call(null,error__5939__auto___18486)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18467,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18486], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18467,input_schema18468,input_checker18469,output_checker18470))
,schema.core.make_fn_schema.call(null,output_schema18467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18468], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.dheader.dheader = ((function (component_fnk__7745__auto___18481){
return (function() { 
var dheader__delegate = function (data__7746__auto__,owner18463,p__18478){
var vec__18480 = p__18478;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18480,(0),null);
return component_fnk__7745__auto___18481.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18463),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18463,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var dheader = function (data__7746__auto__,owner18463,var_args){
var p__18478 = null;
if (arguments.length > 2) {
  p__18478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return dheader__delegate.call(this,data__7746__auto__,owner18463,p__18478);};
dheader.cljs$lang$maxFixedArity = 2;
dheader.cljs$lang$applyTo = (function (arglist__18487){
var data__7746__auto__ = cljs.core.first(arglist__18487);
arglist__18487 = cljs.core.next(arglist__18487);
var owner18463 = cljs.core.first(arglist__18487);
var p__18478 = cljs.core.rest(arglist__18487);
return dheader__delegate(data__7746__auto__,owner18463,p__18478);
});
dheader.cljs$core$IFn$_invoke$arity$variadic = dheader__delegate;
return dheader;
})()
;})(component_fnk__7745__auto___18481))
;

jade.components.dheader.__GT_dheader = (function() {
var __GT_dheader = null;
var __GT_dheader__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.dheader.dheader,cursor__7714__auto__);
});
var __GT_dheader__2 = (function (cursor__7714__auto__,m18465){
return om.core.build.call(null,jade.components.dheader.dheader,cursor__7714__auto__,m18465);
});
__GT_dheader = function(cursor__7714__auto__,m18465){
switch(arguments.length){
case 1:
return __GT_dheader__1.call(this,cursor__7714__auto__);
case 2:
return __GT_dheader__2.call(this,cursor__7714__auto__,m18465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dheader.cljs$core$IFn$_invoke$arity$1 = __GT_dheader__1;
__GT_dheader.cljs$core$IFn$_invoke$arity$2 = __GT_dheader__2;
return __GT_dheader;
})()
;

//# sourceMappingURL=dheader.js.map?rel=1545283550172