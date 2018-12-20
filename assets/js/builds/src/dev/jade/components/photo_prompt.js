// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.photo_prompt');
goog.require('cljs.core');
goog.require('jade.components.photo_button');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.utils');
goog.require('jade.components.photo_button');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18508 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18492 = schema.core.Any;
var input_schema18493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18491","map18491",2004618652,null))], null);
var input_checker18494 = schema.core.checker.call(null,input_schema18493);
var output_checker18495 = schema.core.checker.call(null,output_schema18492);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function constructor18489(G__18496){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18496], null);
var temp__4388__auto___18510 = input_checker18494.call(null,args__5938__auto___18509);
if(cljs.core.truth_(temp__4388__auto___18510)){
var error__5939__auto___18511 = temp__4388__auto___18510;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18489","constructor18489",-1444129630,null),cljs.core.pr_str.call(null,error__5939__auto___18511)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18493,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18509,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18511], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18491 = G__18496;
while(true){
if(cljs.core.map_QMARK_.call(null,map18491)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18491)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18491,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18491,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18491,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18491,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.photo_prompt.t18501 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.photo_prompt.t18501 = (function (input_schema18493,constructor18489,validate__5937__auto__,owner,data,input_checker18494,G__18496,state,output_schema18492,map18491,output_checker18495,opts,ufv__,meta18502){
this.input_schema18493 = input_schema18493;
this.constructor18489 = constructor18489;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.input_checker18494 = input_checker18494;
this.G__18496 = G__18496;
this.state = state;
this.output_schema18492 = output_schema18492;
this.map18491 = map18491;
this.output_checker18495 = output_checker18495;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18502 = meta18502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.photo_prompt.t18501.prototype.om$core$IDisplayName$ = true;

jade.components.photo_prompt.t18501.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function (_){
var self__ = this;
var ___$1 = this;
return "photo-prompt";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

jade.components.photo_prompt.t18501.prototype.om$core$IRender$ = true;

jade.components.photo_prompt.t18501.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__18504 = new cljs.core.Keyword(null,"prompt","prompt",-78109487).cljs$core$IFn$_invoke$arity$1(self__.opts);
var l = cljs.core.nth.call(null,vec__18504,(0),null);
var ll = cljs.core.nth.call(null,vec__18504,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "100%", "height": "34%", "left": (0), "bottom": (0), "position": "absolute"}, "className": "flex column bert large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.section,{"style": {"height": "30%", "backgroundColor": "white", "marginTop": "1.5%", "fontSize": "24px", "marginBottom": "1.15rem", "position": "relative", "width": "100%"}, "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"width": "90%", "height": "100%", "marginBottom": "1rem", "marginTop": "1.75rem", "borderBottom": "1px solid rgb( 195, 214, 206 )"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,l,cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.span,{"style": {"marginBottom": "1rem"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ll],null))))],null))))],null)))),jade.components.photo_button.__GT_photo_button.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

jade.components.photo_prompt.t18501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function (_18503){
var self__ = this;
var _18503__$1 = this;
return self__.meta18502;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

jade.components.photo_prompt.t18501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function (_18503,meta18502__$1){
var self__ = this;
var _18503__$1 = this;
return (new jade.components.photo_prompt.t18501(self__.input_schema18493,self__.constructor18489,self__.validate__5937__auto__,self__.owner,self__.data,self__.input_checker18494,self__.G__18496,self__.state,self__.output_schema18492,self__.map18491,self__.output_checker18495,self__.opts,self__.ufv__,meta18502__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

jade.components.photo_prompt.t18501.cljs$lang$type = true;

jade.components.photo_prompt.t18501.cljs$lang$ctorStr = "jade.components.photo-prompt/t18501";

jade.components.photo_prompt.t18501.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.photo-prompt/t18501");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

jade.components.photo_prompt.__GT_t18501 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495){
return (function __GT_t18501(input_schema18493__$1,constructor18489__$1,validate__5937__auto____$1,owner__$1,data__$1,input_checker18494__$1,G__18496__$1,state__$1,output_schema18492__$1,map18491__$1,output_checker18495__$1,opts__$1,ufv____$1,meta18502){
return (new jade.components.photo_prompt.t18501(input_schema18493__$1,constructor18489__$1,validate__5937__auto____$1,owner__$1,data__$1,input_checker18494__$1,G__18496__$1,state__$1,output_schema18492__$1,map18491__$1,output_checker18495__$1,opts__$1,ufv____$1,meta18502));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
;

}

return (new jade.components.photo_prompt.t18501(input_schema18493,constructor18489,validate__5937__auto__,owner,data,input_checker18494,G__18496,state,output_schema18492,map18491,output_checker18495,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18512 = output_checker18495.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18512)){
var error__5939__auto___18513 = temp__4388__auto___18512;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18489","constructor18489",-1444129630,null),cljs.core.pr_str.call(null,error__5939__auto___18513)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18492,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18513], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18492,input_schema18493,input_checker18494,output_checker18495))
,schema.core.make_fn_schema.call(null,output_schema18492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18493], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.photo_prompt.photo_prompt = ((function (component_fnk__7745__auto___18508){
return (function() { 
var photo_prompt__delegate = function (data__7746__auto__,owner18488,p__18505){
var vec__18507 = p__18505;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18507,(0),null);
return component_fnk__7745__auto___18508.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18488),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18488,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var photo_prompt = function (data__7746__auto__,owner18488,var_args){
var p__18505 = null;
if (arguments.length > 2) {
  p__18505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return photo_prompt__delegate.call(this,data__7746__auto__,owner18488,p__18505);};
photo_prompt.cljs$lang$maxFixedArity = 2;
photo_prompt.cljs$lang$applyTo = (function (arglist__18514){
var data__7746__auto__ = cljs.core.first(arglist__18514);
arglist__18514 = cljs.core.next(arglist__18514);
var owner18488 = cljs.core.first(arglist__18514);
var p__18505 = cljs.core.rest(arglist__18514);
return photo_prompt__delegate(data__7746__auto__,owner18488,p__18505);
});
photo_prompt.cljs$core$IFn$_invoke$arity$variadic = photo_prompt__delegate;
return photo_prompt;
})()
;})(component_fnk__7745__auto___18508))
;

jade.components.photo_prompt.__GT_photo_prompt = (function() {
var __GT_photo_prompt = null;
var __GT_photo_prompt__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.photo_prompt.photo_prompt,cursor__7714__auto__);
});
var __GT_photo_prompt__2 = (function (cursor__7714__auto__,m18490){
return om.core.build.call(null,jade.components.photo_prompt.photo_prompt,cursor__7714__auto__,m18490);
});
__GT_photo_prompt = function(cursor__7714__auto__,m18490){
switch(arguments.length){
case 1:
return __GT_photo_prompt__1.call(this,cursor__7714__auto__);
case 2:
return __GT_photo_prompt__2.call(this,cursor__7714__auto__,m18490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_photo_prompt.cljs$core$IFn$_invoke$arity$1 = __GT_photo_prompt__1;
__GT_photo_prompt.cljs$core$IFn$_invoke$arity$2 = __GT_photo_prompt__2;
return __GT_photo_prompt;
})()
;

//# sourceMappingURL=photo_prompt.js.map?rel=1545283550234