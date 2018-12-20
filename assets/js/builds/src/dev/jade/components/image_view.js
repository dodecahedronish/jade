// Compiled by ClojureScript 0.0-2411
goog.provide('jade.components.image_view');
goog.require('cljs.core');
goog.require('jade.components.header');
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
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18381 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18365 = schema.core.Any;
var input_schema18366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18364","map18364",-1449437591,null))], null);
var input_checker18367 = schema.core.checker.call(null,input_schema18366);
var output_checker18368 = schema.core.checker.call(null,output_schema18365);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function constructor18362(G__18369){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18369], null);
var temp__4388__auto___18383 = input_checker18367.call(null,args__5938__auto___18382);
if(cljs.core.truth_(temp__4388__auto___18383)){
var error__5939__auto___18384 = temp__4388__auto___18383;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18362","constructor18362",-943911805,null),cljs.core.pr_str.call(null,error__5939__auto___18384)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18366,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18382,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18384], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18364 = G__18369;
while(true){
if(cljs.core.map_QMARK_.call(null,map18364)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18364)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18364,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18364,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18364,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18364,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.image_view.t18374 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.image_view.t18374 = (function (validate__5937__auto__,input_checker18367,constructor18362,input_schema18366,owner,data,map18364,state,G__18369,output_checker18368,output_schema18365,opts,ufv__,meta18375){
this.validate__5937__auto__ = validate__5937__auto__;
this.input_checker18367 = input_checker18367;
this.constructor18362 = constructor18362;
this.input_schema18366 = input_schema18366;
this.owner = owner;
this.data = data;
this.map18364 = map18364;
this.state = state;
this.G__18369 = G__18369;
this.output_checker18368 = output_checker18368;
this.output_schema18365 = output_schema18365;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18375 = meta18375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.image_view.t18374.prototype.om$core$IDisplayName$ = true;

jade.components.image_view.t18374.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (_){
var self__ = this;
var ___$1 = this;
return "product-view";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

jade.components.image_view.t18374.prototype.om$core$IRender$ = true;

jade.components.image_view.t18374.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__18377 = self__.data;
var map__18377__$1 = ((cljs.core.seq_QMARK_.call(null,map__18377))?cljs.core.apply.call(null,cljs.core.hash_map,map__18377):map__18377);
var price = cljs.core.get.call(null,map__18377__$1,new cljs.core.Keyword(null,"price","price",22129180));
var amount = cljs.core.get.call(null,map__18377__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var title = cljs.core.get.call(null,map__18377__$1,new cljs.core.Keyword(null,"title","title",636505583));
var filename = [cljs.core.str(clojure.string.replace.call(null,title," ","").toLowerCase()),cljs.core.str(".png")].join('');
var activate_details_BANG_ = ((function (map__18377,map__18377__$1,price,amount,title,filename,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details-on","details-on",-1820786976),self__.data], null));
});})(map__18377,map__18377__$1,price,amount,title,filename,___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"minHeight": "50%", "position": "relative", "left": "2.5%", "width": "95%"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"style": {"width": "100%", "backgroundPosition": "center center", "backgroundSize": "cover", "backgroundImage": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(self__.data),(0)))?null:"url('img/shadow_top.png')")), "height": "2.5%"}},""),React.DOM.div({"style": {"width": "100%", "height": "50%", "backgroundPosition": "center center", "backgroundSize": "cover", "backgroundImage": "url('img/weedasset.png')"}, "onClick": om_tools.dom.format_opts.call(null,activate_details_BANG_)}),cljs.core.apply.call(null,React.DOM.div,{"style": {"background": "white", "height": "14%", "width": "100%", "borderBottom": "1px solid #c3d6ce"}, "className": "flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "auto", "width": "100%"}, "onClick": om_tools.dom.format_opts.call(null,activate_details_BANG_), "className": "flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right2 gothic large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(title.toUpperCase()),cljs.core.str(" ")].join('')],null)))),jade.utils.spacer,cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right bert regular", "style": {"marginTop": ".35rem", "color": "#009372"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(" "),cljs.core.str(amount),cljs.core.str(" ")].join('')],null)))),cljs.core.apply.call(null,React.DOM.span,{"className": "margin-right gothic large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(" "),cljs.core.str(price),cljs.core.str(" ")].join('')],null))))],null)))),React.DOM.span({"className": ""},"")],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

jade.components.image_view.t18374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (_18376){
var self__ = this;
var _18376__$1 = this;
return self__.meta18375;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

jade.components.image_view.t18374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (_18376,meta18375__$1){
var self__ = this;
var _18376__$1 = this;
return (new jade.components.image_view.t18374(self__.validate__5937__auto__,self__.input_checker18367,self__.constructor18362,self__.input_schema18366,self__.owner,self__.data,self__.map18364,self__.state,self__.G__18369,self__.output_checker18368,self__.output_schema18365,self__.opts,self__.ufv__,meta18375__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

jade.components.image_view.t18374.cljs$lang$type = true;

jade.components.image_view.t18374.cljs$lang$ctorStr = "jade.components.image-view/t18374";

jade.components.image_view.t18374.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.image-view/t18374");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

jade.components.image_view.__GT_t18374 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368){
return (function __GT_t18374(validate__5937__auto____$1,input_checker18367__$1,constructor18362__$1,input_schema18366__$1,owner__$1,data__$1,map18364__$1,state__$1,G__18369__$1,output_checker18368__$1,output_schema18365__$1,opts__$1,ufv____$1,meta18375){
return (new jade.components.image_view.t18374(validate__5937__auto____$1,input_checker18367__$1,constructor18362__$1,input_schema18366__$1,owner__$1,data__$1,map18364__$1,state__$1,G__18369__$1,output_checker18368__$1,output_schema18365__$1,opts__$1,ufv____$1,meta18375));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
;

}

return (new jade.components.image_view.t18374(validate__5937__auto__,input_checker18367,constructor18362,input_schema18366,owner,data,map18364,state,G__18369,output_checker18368,output_schema18365,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18385 = output_checker18368.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18385)){
var error__5939__auto___18386 = temp__4388__auto___18385;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18362","constructor18362",-943911805,null),cljs.core.pr_str.call(null,error__5939__auto___18386)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18365,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18386], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18365,input_schema18366,input_checker18367,output_checker18368))
,schema.core.make_fn_schema.call(null,output_schema18365,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18366], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.image_view.product_view = ((function (component_fnk__7745__auto___18381){
return (function() { 
var product_view__delegate = function (data__7746__auto__,owner18361,p__18378){
var vec__18380 = p__18378;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18380,(0),null);
return component_fnk__7745__auto___18381.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18361),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18361,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var product_view = function (data__7746__auto__,owner18361,var_args){
var p__18378 = null;
if (arguments.length > 2) {
  p__18378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return product_view__delegate.call(this,data__7746__auto__,owner18361,p__18378);};
product_view.cljs$lang$maxFixedArity = 2;
product_view.cljs$lang$applyTo = (function (arglist__18387){
var data__7746__auto__ = cljs.core.first(arglist__18387);
arglist__18387 = cljs.core.next(arglist__18387);
var owner18361 = cljs.core.first(arglist__18387);
var p__18378 = cljs.core.rest(arglist__18387);
return product_view__delegate(data__7746__auto__,owner18361,p__18378);
});
product_view.cljs$core$IFn$_invoke$arity$variadic = product_view__delegate;
return product_view;
})()
;})(component_fnk__7745__auto___18381))
;

jade.components.image_view.__GT_product_view = (function() {
var __GT_product_view = null;
var __GT_product_view__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.image_view.product_view,cursor__7714__auto__);
});
var __GT_product_view__2 = (function (cursor__7714__auto__,m18363){
return om.core.build.call(null,jade.components.image_view.product_view,cursor__7714__auto__,m18363);
});
__GT_product_view = function(cursor__7714__auto__,m18363){
switch(arguments.length){
case 1:
return __GT_product_view__1.call(this,cursor__7714__auto__);
case 2:
return __GT_product_view__2.call(this,cursor__7714__auto__,m18363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_view.cljs$core$IFn$_invoke$arity$1 = __GT_product_view__1;
__GT_product_view.cljs$core$IFn$_invoke$arity$2 = __GT_product_view__2;
return __GT_product_view;
})()
;

var component_fnk__7745__auto___18406 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18392 = schema.core.Any;
var input_schema18393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18391","map18391",1667326657,null))], null);
var input_checker18394 = schema.core.checker.call(null,input_schema18393);
var output_checker18395 = schema.core.checker.call(null,output_schema18392);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function constructor18389(G__18396){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18396], null);
var temp__4388__auto___18408 = input_checker18394.call(null,args__5938__auto___18407);
if(cljs.core.truth_(temp__4388__auto___18408)){
var error__5939__auto___18409 = temp__4388__auto___18408;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18389","constructor18389",1673836834,null),cljs.core.pr_str.call(null,error__5939__auto___18409)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18393,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18407,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18409], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18391 = G__18396;
while(true){
if(cljs.core.map_QMARK_.call(null,map18391)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18391)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18391,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18391,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18391,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18391,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.components.image_view.t18400 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.components.image_view.t18400 = (function (map18391,constructor18389,validate__5937__auto__,owner,data,input_checker18394,G__18396,input_schema18393,output_schema18392,state,output_checker18395,opts,ufv__,meta18401){
this.map18391 = map18391;
this.constructor18389 = constructor18389;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.input_checker18394 = input_checker18394;
this.G__18396 = G__18396;
this.input_schema18393 = input_schema18393;
this.output_schema18392 = output_schema18392;
this.state = state;
this.output_checker18395 = output_checker18395;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18401 = meta18401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.components.image_view.t18400.prototype.om$core$IDisplayName$ = true;

jade.components.image_view.t18400.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image-view";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

jade.components.image_view.t18400.prototype.om$core$IRender$ = true;

jade.components.image_view.t18400.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "100%", "width": "100%"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,cljs.core.assoc.call(null,self__.data,new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"h-height","h-height",158526209),8.5),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"style": {"width": "100%%", "height": "66%", "backgroundPosition": "center center", "backgroundSize": "cover", "backgroundImage": om_tools.dom.format_opts.call(null,[cljs.core.str("url("),cljs.core.str(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))}, "onClick": om_tools.dom.format_opts.call(null,jade.components.image_view.activate_details_BANG_)})],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

jade.components.image_view.t18400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function (_18402){
var self__ = this;
var _18402__$1 = this;
return self__.meta18401;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

jade.components.image_view.t18400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function (_18402,meta18401__$1){
var self__ = this;
var _18402__$1 = this;
return (new jade.components.image_view.t18400(self__.map18391,self__.constructor18389,self__.validate__5937__auto__,self__.owner,self__.data,self__.input_checker18394,self__.G__18396,self__.input_schema18393,self__.output_schema18392,self__.state,self__.output_checker18395,self__.opts,self__.ufv__,meta18401__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

jade.components.image_view.t18400.cljs$lang$type = true;

jade.components.image_view.t18400.cljs$lang$ctorStr = "jade.components.image-view/t18400";

jade.components.image_view.t18400.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.components.image-view/t18400");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

jade.components.image_view.__GT_t18400 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395){
return (function __GT_t18400(map18391__$1,constructor18389__$1,validate__5937__auto____$1,owner__$1,data__$1,input_checker18394__$1,G__18396__$1,input_schema18393__$1,output_schema18392__$1,state__$1,output_checker18395__$1,opts__$1,ufv____$1,meta18401){
return (new jade.components.image_view.t18400(map18391__$1,constructor18389__$1,validate__5937__auto____$1,owner__$1,data__$1,input_checker18394__$1,G__18396__$1,input_schema18393__$1,output_schema18392__$1,state__$1,output_checker18395__$1,opts__$1,ufv____$1,meta18401));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
;

}

return (new jade.components.image_view.t18400(map18391,constructor18389,validate__5937__auto__,owner,data,input_checker18394,G__18396,input_schema18393,output_schema18392,state,output_checker18395,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18410 = output_checker18395.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18410)){
var error__5939__auto___18411 = temp__4388__auto___18410;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18389","constructor18389",1673836834,null),cljs.core.pr_str.call(null,error__5939__auto___18411)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18392,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18411], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18392,input_schema18393,input_checker18394,output_checker18395))
,schema.core.make_fn_schema.call(null,output_schema18392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18393], null)));
})();
/**
* @param {...*} var_args
*/
jade.components.image_view.image_view = ((function (component_fnk__7745__auto___18406){
return (function() { 
var image_view__delegate = function (data__7746__auto__,owner18388,p__18403){
var vec__18405 = p__18403;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18405,(0),null);
return component_fnk__7745__auto___18406.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18388),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18388,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var image_view = function (data__7746__auto__,owner18388,var_args){
var p__18403 = null;
if (arguments.length > 2) {
  p__18403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return image_view__delegate.call(this,data__7746__auto__,owner18388,p__18403);};
image_view.cljs$lang$maxFixedArity = 2;
image_view.cljs$lang$applyTo = (function (arglist__18412){
var data__7746__auto__ = cljs.core.first(arglist__18412);
arglist__18412 = cljs.core.next(arglist__18412);
var owner18388 = cljs.core.first(arglist__18412);
var p__18403 = cljs.core.rest(arglist__18412);
return image_view__delegate(data__7746__auto__,owner18388,p__18403);
});
image_view.cljs$core$IFn$_invoke$arity$variadic = image_view__delegate;
return image_view;
})()
;})(component_fnk__7745__auto___18406))
;

jade.components.image_view.__GT_image_view = (function() {
var __GT_image_view = null;
var __GT_image_view__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.components.image_view.image_view,cursor__7714__auto__);
});
var __GT_image_view__2 = (function (cursor__7714__auto__,m18390){
return om.core.build.call(null,jade.components.image_view.image_view,cursor__7714__auto__,m18390);
});
__GT_image_view = function(cursor__7714__auto__,m18390){
switch(arguments.length){
case 1:
return __GT_image_view__1.call(this,cursor__7714__auto__);
case 2:
return __GT_image_view__2.call(this,cursor__7714__auto__,m18390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_image_view.cljs$core$IFn$_invoke$arity$1 = __GT_image_view__1;
__GT_image_view.cljs$core$IFn$_invoke$arity$2 = __GT_image_view__2;
return __GT_image_view;
})()
;

//# sourceMappingURL=image_view.js.map?rel=1545283549992