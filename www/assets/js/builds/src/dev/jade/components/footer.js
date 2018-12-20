// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.footer');
goog.require('cljs.core');
goog.require('jade.components.dheader');
goog.require('jade.components.panel');
goog.require('jade.components.dispensary');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.dispensary');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('jade.components.dheader');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18456 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18442 = schema.core.Any;
var input_schema18443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18441","map18441",-157370416,null))], null);
var input_checker18444 = schema.core.checker.call(null,input_schema18443);
var output_checker18445 = schema.core.checker.call(null,output_schema18442);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function constructor18439(G__18446){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18446], null);
var temp__4388__auto___18458 = input_checker18444.call(null,args__5938__auto___18457);
if(cljs.core.truth_(temp__4388__auto___18458)){
var error__5939__auto___18459 = temp__4388__auto___18458;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18439","constructor18439",257579529,null),cljs.core.pr_str.call(null,error__5939__auto___18459)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18443,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18457,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18459], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18441 = G__18446;
while(true){
if(cljs.core.map_QMARK_.call(null,map18441)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18441)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18441,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18441,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18441,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18441,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.footer.t18450 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.footer.t18450 = (function (output_checker18445,validate__5937__auto__,owner,data,G__18446,constructor18439,input_checker18444,map18441,state,output_schema18442,input_schema18443,opts,ufv__,meta18451){
this.output_checker18445 = output_checker18445;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.G__18446 = G__18446;
this.constructor18439 = constructor18439;
this.input_checker18444 = input_checker18444;
this.map18441 = map18441;
this.state = state;
this.output_schema18442 = output_schema18442;
this.input_schema18443 = input_schema18443;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18451 = meta18451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.footer.t18450.prototype.om$core$IDisplayName$ = true;

jade.components.footer.t18450.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function (_){
var self__ = this;
var ___$1 = this;
return "footer";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

jade.components.footer.t18450.prototype.om$core$IRender$ = true;

jade.components.footer.t18450.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function (_){
var self__ = this;
var ___$1 = this;
var panel_BANG_ = jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state);
return cljs.core.apply.call(null,React.DOM.section,{"style": {"height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"c-height","c-height",557519589).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("%")].join('')), "width": "100%", "left": (0), "bottom": (0), "position": "absolute"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "100%", "backgroundColor": "white", "color": "white", "position": "relative", "width": "100%"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "90%", "height": "100%", "left": "5%", "top": ".5%", "WebkitBoxShadow": "0 -6px 11px -6px rgba(0,0,0,.25)", "borderTop": "1px solid rgb( 195, 214, 206 )", "position": "absolute"}, "onTouchStart": om_tools.dom.format_opts.call(null,panel_BANG_), "onClick": om_tools.dom.format_opts.call(null,panel_BANG_), "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"height": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.data)), "width": "100%", "color": "white", "transition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str((new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)) / (2))),cljs.core.str("s "),cljs.core.str(cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state))))].join('')), "WebkitTransition": om_tools.dom.format_opts.call(null,[cljs.core.str("all "),cljs.core.str(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"tween","tween",1743568853).cljs$core$IFn$_invoke$arity$1(self__.state))].join('')), "fontSize": om_tools.dom.format_opts.call(null,(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"fsize","fsize",2076263474).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "24px";
}
})()), "background": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"clicked","clicked",114423720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?(function (){var or__3622__auto__ = new cljs.core.Keyword(null,"delta-color","delta-color",235677635).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return "gray";
}
})():"rgb( 36, 42, 43 )"))}, "className": "flex gothic large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"copy","copy",-1077617309).cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

jade.components.footer.t18450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function (_18452){
var self__ = this;
var _18452__$1 = this;
return self__.meta18451;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

jade.components.footer.t18450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function (_18452,meta18451__$1){
var self__ = this;
var _18452__$1 = this;
return (new jade.components.footer.t18450(self__.output_checker18445,self__.validate__5937__auto__,self__.owner,self__.data,self__.G__18446,self__.constructor18439,self__.input_checker18444,self__.map18441,self__.state,self__.output_schema18442,self__.input_schema18443,self__.opts,self__.ufv__,meta18451__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

jade.components.footer.t18450.cljs$lang$type = true;

jade.components.footer.t18450.cljs$lang$ctorStr = "jade.components.footer/t18450";

jade.components.footer.t18450.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.footer/t18450");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

jade.components.footer.__GT_t18450 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445){
return (function __GT_t18450(output_checker18445__$1,validate__5937__auto____$1,owner__$1,data__$1,G__18446__$1,constructor18439__$1,input_checker18444__$1,map18441__$1,state__$1,output_schema18442__$1,input_schema18443__$1,opts__$1,ufv____$1,meta18451){
return (new jade.components.footer.t18450(output_checker18445__$1,validate__5937__auto____$1,owner__$1,data__$1,G__18446__$1,constructor18439__$1,input_checker18444__$1,map18441__$1,state__$1,output_schema18442__$1,input_schema18443__$1,opts__$1,ufv____$1,meta18451));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
;

}

return (new jade.components.footer.t18450(output_checker18445,validate__5937__auto__,owner,data,G__18446,constructor18439,input_checker18444,map18441,state,output_schema18442,input_schema18443,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18460 = output_checker18445.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18460)){
var error__5939__auto___18461 = temp__4388__auto___18460;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18439","constructor18439",257579529,null),cljs.core.pr_str.call(null,error__5939__auto___18461)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18442,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18461], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18442,input_schema18443,input_checker18444,output_checker18445))
,schema.core.make_fn_schema.call(null,output_schema18442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18443], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.footer.footer = ((function (component_fnk__7745__auto___18456){
return (function() { 
var footer__delegate = function (data__7746__auto__,owner18438,p__18453){
var vec__18455 = p__18453;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18455,(0),null);
return component_fnk__7745__auto___18456.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18438),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18438,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var footer = function (data__7746__auto__,owner18438,var_args){
var p__18453 = null;
if (arguments.length > 2) {
  p__18453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return footer__delegate.call(this,data__7746__auto__,owner18438,p__18453);};
footer.cljs$lang$maxFixedArity = 2;
footer.cljs$lang$applyTo = (function (arglist__18462){
var data__7746__auto__ = cljs.core.first(arglist__18462);
arglist__18462 = cljs.core.next(arglist__18462);
var owner18438 = cljs.core.first(arglist__18462);
var p__18453 = cljs.core.rest(arglist__18462);
return footer__delegate(data__7746__auto__,owner18438,p__18453);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;})(component_fnk__7745__auto___18456))
;

jade.components.footer.__GT_footer = (function() {
var __GT_footer = null;
var __GT_footer__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.footer.footer,cursor__7714__auto__);
});
var __GT_footer__2 = (function (cursor__7714__auto__,m18440){
return om.core.build.call(null,jade.components.footer.footer,cursor__7714__auto__,m18440);
});
__GT_footer = function(cursor__7714__auto__,m18440){
switch(arguments.length){
case 1:
return __GT_footer__1.call(this,cursor__7714__auto__);
case 2:
return __GT_footer__2.call(this,cursor__7714__auto__,m18440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_footer.cljs$core$IFn$_invoke$arity$1 = __GT_footer__1;
__GT_footer.cljs$core$IFn$_invoke$arity$2 = __GT_footer__2;
return __GT_footer;
})()
;

//# sourceMappingURL=footer.js.map?rel=1545283550110