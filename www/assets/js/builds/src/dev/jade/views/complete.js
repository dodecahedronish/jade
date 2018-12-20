// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.complete');
goog.require('cljs.core');
goog.require('jade.components.dheader');
goog.require('jade.components.input');
goog.require('jade.components.review');
goog.require('jade.components.header');
goog.require('jade.utils');
goog.require('jade.components.footer');
goog.require('jade.components.panel');
goog.require('jade.components.dispensary');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.components.dispensary');
goog.require('jade.config');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('jade.components.footer');
goog.require('om_tools.core');
goog.require('jade.components.review');
goog.require('jade.components.input');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('jade.components.dheader');
goog.require('goog.dom');
goog.require('jade.components.review');
goog.require('jade.components.header');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___16958 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16944 = schema.core.Any;
var input_schema16945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16943","map16943",-925529133,null))], null);
var input_checker16946 = schema.core.checker.call(null,input_schema16945);
var output_checker16947 = schema.core.checker.call(null,output_schema16944);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function constructor16941(G__16948){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16948], null);
var temp__4388__auto___16960 = input_checker16946.call(null,args__5938__auto___16959);
if(cljs.core.truth_(temp__4388__auto___16960)){
var error__5939__auto___16961 = temp__4388__auto___16960;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16941","constructor16941",-1146158462,null),cljs.core.pr_str.call(null,error__5939__auto___16961)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16945,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16959,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16961], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16943 = G__16948;
while(true){
if(cljs.core.map_QMARK_.call(null,map16943)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16943)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16943,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16943,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16943,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16943,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.complete.t16952 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.complete.t16952 = (function (constructor16941,validate__5937__auto__,owner,data,G__16948,map16943,state,input_schema16945,output_schema16944,input_checker16946,opts,ufv__,output_checker16947,meta16953){
this.constructor16941 = constructor16941;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.G__16948 = G__16948;
this.map16943 = map16943;
this.state = state;
this.input_schema16945 = input_schema16945;
this.output_schema16944 = output_schema16944;
this.input_checker16946 = input_checker16946;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker16947 = output_checker16947;
this.meta16953 = meta16953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.complete.t16952.prototype.om$core$IDisplayName$ = true;

jade.views.complete.t16952.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function (_){
var self__ = this;
var ___$1 = this;
return "copy";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

jade.views.complete.t16952.prototype.om$core$IRender$ = true;

jade.views.complete.t16952.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.section,{"style": {"height": om_tools.dom.format_opts.call(null,jade.utils._PERCENT_str.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.data))), "fontSize": "1.6rem", "width": "100%"}, "className": "flex column bert"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Your order should arrive  ",cljs.core.apply.call(null,React.DOM.div,{"className": "flex bert"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["around",React.DOM.span({"className": "large gothic", "style": {"color": "#009372", "marginLeft": "5px"}},"10:30pm")],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

jade.views.complete.t16952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function (_16954){
var self__ = this;
var _16954__$1 = this;
return self__.meta16953;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

jade.views.complete.t16952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function (_16954,meta16953__$1){
var self__ = this;
var _16954__$1 = this;
return (new jade.views.complete.t16952(self__.constructor16941,self__.validate__5937__auto__,self__.owner,self__.data,self__.G__16948,self__.map16943,self__.state,self__.input_schema16945,self__.output_schema16944,self__.input_checker16946,self__.opts,self__.ufv__,self__.output_checker16947,meta16953__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

jade.views.complete.t16952.cljs$lang$type = true;

jade.views.complete.t16952.cljs$lang$ctorStr = "jade.views.complete/t16952";

jade.views.complete.t16952.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.complete/t16952");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

jade.views.complete.__GT_t16952 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947){
return (function __GT_t16952(constructor16941__$1,validate__5937__auto____$1,owner__$1,data__$1,G__16948__$1,map16943__$1,state__$1,input_schema16945__$1,output_schema16944__$1,input_checker16946__$1,opts__$1,ufv____$1,output_checker16947__$1,meta16953){
return (new jade.views.complete.t16952(constructor16941__$1,validate__5937__auto____$1,owner__$1,data__$1,G__16948__$1,map16943__$1,state__$1,input_schema16945__$1,output_schema16944__$1,input_checker16946__$1,opts__$1,ufv____$1,output_checker16947__$1,meta16953));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
;

}

return (new jade.views.complete.t16952(constructor16941,validate__5937__auto__,owner,data,G__16948,map16943,state,input_schema16945,output_schema16944,input_checker16946,opts,ufv__,output_checker16947,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16962 = output_checker16947.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16962)){
var error__5939__auto___16963 = temp__4388__auto___16962;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16941","constructor16941",-1146158462,null),cljs.core.pr_str.call(null,error__5939__auto___16963)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16944,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16963], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16944,input_schema16945,input_checker16946,output_checker16947))
,schema.core.make_fn_schema.call(null,output_schema16944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16945], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.complete.copy = ((function (component_fnk__7745__auto___16958){
return (function() { 
var copy__delegate = function (data__7746__auto__,owner16940,p__16955){
var vec__16957 = p__16955;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16957,(0),null);
return component_fnk__7745__auto___16958.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16940),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16940,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var copy = function (data__7746__auto__,owner16940,var_args){
var p__16955 = null;
if (arguments.length > 2) {
  p__16955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return copy__delegate.call(this,data__7746__auto__,owner16940,p__16955);};
copy.cljs$lang$maxFixedArity = 2;
copy.cljs$lang$applyTo = (function (arglist__16964){
var data__7746__auto__ = cljs.core.first(arglist__16964);
arglist__16964 = cljs.core.next(arglist__16964);
var owner16940 = cljs.core.first(arglist__16964);
var p__16955 = cljs.core.rest(arglist__16964);
return copy__delegate(data__7746__auto__,owner16940,p__16955);
});
copy.cljs$core$IFn$_invoke$arity$variadic = copy__delegate;
return copy;
})()
;})(component_fnk__7745__auto___16958))
;

jade.views.complete.__GT_copy = (function() {
var __GT_copy = null;
var __GT_copy__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.complete.copy,cursor__7714__auto__);
});
var __GT_copy__2 = (function (cursor__7714__auto__,m16942){
return om.core.build.call(null,jade.views.complete.copy,cursor__7714__auto__,m16942);
});
__GT_copy = function(cursor__7714__auto__,m16942){
switch(arguments.length){
case 1:
return __GT_copy__1.call(this,cursor__7714__auto__);
case 2:
return __GT_copy__2.call(this,cursor__7714__auto__,m16942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_copy.cljs$core$IFn$_invoke$arity$1 = __GT_copy__1;
__GT_copy.cljs$core$IFn$_invoke$arity$2 = __GT_copy__2;
return __GT_copy;
})()
;

var component_fnk__7745__auto___16984 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16970 = schema.core.Any;
var input_schema16971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16969","map16969",-115691869,null))], null);
var input_checker16972 = schema.core.checker.call(null,input_schema16971);
var output_checker16973 = schema.core.checker.call(null,output_schema16970);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function constructor16967(G__16974){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___16985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16974], null);
var temp__4388__auto___16986 = input_checker16972.call(null,args__5938__auto___16985);
if(cljs.core.truth_(temp__4388__auto___16986)){
var error__5939__auto___16987 = temp__4388__auto___16986;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16967","constructor16967",-1035084884,null),cljs.core.pr_str.call(null,error__5939__auto___16987)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16971,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___16985,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16987], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16969 = G__16974;
while(true){
if(cljs.core.map_QMARK_.call(null,map16969)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16969)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16969,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16969,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16969,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16969,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.complete.t16978 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.complete.t16978 = (function (validate__5937__auto__,map16969,owner,data,G__16974,constructor16967,state,output_schema16970,input_schema16971,opts,output_checker16973,input_checker16972,ufv__,meta16979){
this.validate__5937__auto__ = validate__5937__auto__;
this.map16969 = map16969;
this.owner = owner;
this.data = data;
this.G__16974 = G__16974;
this.constructor16967 = constructor16967;
this.state = state;
this.output_schema16970 = output_schema16970;
this.input_schema16971 = input_schema16971;
this.opts = opts;
this.output_checker16973 = output_checker16973;
this.input_checker16972 = input_checker16972;
this.ufv__ = ufv__;
this.meta16979 = meta16979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.complete.t16978.prototype.om$core$IDisplayName$ = true;

jade.views.complete.t16978.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (_){
var self__ = this;
var ___$1 = this;
return "complete*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

jade.views.complete.t16978.prototype.om$core$IRender$ = true;

jade.views.complete.t16978.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.section,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.header.__GT_header.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"chevron-left",new cljs.core.Keyword(null,"left-behavior","left-behavior",1093525646),jade.utils.c_lambda_panel.call(null,self__.opts,self__.owner,self__.state),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"prompt","prompt",-78109487),"ORDER SUCCESSFUL"], null)),jade.views.complete.__GT_copy.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(12)], null)),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "8%", "borderBottom": "1px solid rgb( 195, 214, 206 )", "width": "90%"}, "className": "flex gothic regular"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span(null,"YOUR ORDER")],null)))),cljs.core.map.call(null,((function (___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (p1__16965_SHARP_){
return jade.components.review.__GT_r_content.call(null,p1__16965_SHARP_);
});})(___$1,state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
,jade.components.review.order_c.call(null,63.5)),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": "15%", "marginTop": "5.5%", "width": "90%"}, "className": "flex column gothic large"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span(null,"Geoffrey Thorpe"),React.DOM.span({"className": "bert"},"241 Taaffe Pl. Apt. 704"),React.DOM.span({"className": "bert"},"Mastercard ... 1234")],null))))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

jade.views.complete.t16978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (_16980){
var self__ = this;
var _16980__$1 = this;
return self__.meta16979;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

jade.views.complete.t16978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (_16980,meta16979__$1){
var self__ = this;
var _16980__$1 = this;
return (new jade.views.complete.t16978(self__.validate__5937__auto__,self__.map16969,self__.owner,self__.data,self__.G__16974,self__.constructor16967,self__.state,self__.output_schema16970,self__.input_schema16971,self__.opts,self__.output_checker16973,self__.input_checker16972,self__.ufv__,meta16979__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

jade.views.complete.t16978.cljs$lang$type = true;

jade.views.complete.t16978.cljs$lang$ctorStr = "jade.views.complete/t16978";

jade.views.complete.t16978.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.complete/t16978");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

jade.views.complete.__GT_t16978 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973){
return (function __GT_t16978(validate__5937__auto____$1,map16969__$1,owner__$1,data__$1,G__16974__$1,constructor16967__$1,state__$1,output_schema16970__$1,input_schema16971__$1,opts__$1,output_checker16973__$1,input_checker16972__$1,ufv____$1,meta16979){
return (new jade.views.complete.t16978(validate__5937__auto____$1,map16969__$1,owner__$1,data__$1,G__16974__$1,constructor16967__$1,state__$1,output_schema16970__$1,input_schema16971__$1,opts__$1,output_checker16973__$1,input_checker16972__$1,ufv____$1,meta16979));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
;

}

return (new jade.views.complete.t16978(validate__5937__auto__,map16969,owner,data,G__16974,constructor16967,state,output_schema16970,input_schema16971,opts,output_checker16973,input_checker16972,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___16988 = output_checker16973.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___16988)){
var error__5939__auto___16989 = temp__4388__auto___16988;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16967","constructor16967",-1035084884,null),cljs.core.pr_str.call(null,error__5939__auto___16989)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16970,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___16989], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16970,input_schema16971,input_checker16972,output_checker16973))
,schema.core.make_fn_schema.call(null,output_schema16970,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16971], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.complete.complete_STAR_ = ((function (component_fnk__7745__auto___16984){
return (function() { 
var complete_STAR___delegate = function (data__7746__auto__,owner16966,p__16981){
var vec__16983 = p__16981;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__16983,(0),null);
return component_fnk__7745__auto___16984.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16966),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16966,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var complete_STAR_ = function (data__7746__auto__,owner16966,var_args){
var p__16981 = null;
if (arguments.length > 2) {
  p__16981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return complete_STAR___delegate.call(this,data__7746__auto__,owner16966,p__16981);};
complete_STAR_.cljs$lang$maxFixedArity = 2;
complete_STAR_.cljs$lang$applyTo = (function (arglist__16990){
var data__7746__auto__ = cljs.core.first(arglist__16990);
arglist__16990 = cljs.core.next(arglist__16990);
var owner16966 = cljs.core.first(arglist__16990);
var p__16981 = cljs.core.rest(arglist__16990);
return complete_STAR___delegate(data__7746__auto__,owner16966,p__16981);
});
complete_STAR_.cljs$core$IFn$_invoke$arity$variadic = complete_STAR___delegate;
return complete_STAR_;
})()
;})(component_fnk__7745__auto___16984))
;

jade.views.complete.__GT_complete_STAR_ = (function() {
var __GT_complete_STAR_ = null;
var __GT_complete_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.complete.complete_STAR_,cursor__7714__auto__);
});
var __GT_complete_STAR___2 = (function (cursor__7714__auto__,m16968){
return om.core.build.call(null,jade.views.complete.complete_STAR_,cursor__7714__auto__,m16968);
});
__GT_complete_STAR_ = function(cursor__7714__auto__,m16968){
switch(arguments.length){
case 1:
return __GT_complete_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_complete_STAR___2.call(this,cursor__7714__auto__,m16968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_complete_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_complete_STAR___1;
__GT_complete_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_complete_STAR___2;
return __GT_complete_STAR_;
})()
;

var component_fnk__7745__auto___17009 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16995 = schema.core.Any;
var input_schema16996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16994","map16994",2035309194,null))], null);
var input_checker16997 = schema.core.checker.call(null,input_schema16996);
var output_checker16998 = schema.core.checker.call(null,output_schema16995);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function constructor16992(G__16999){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___17010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16999], null);
var temp__4388__auto___17011 = input_checker16997.call(null,args__5938__auto___17010);
if(cljs.core.truth_(temp__4388__auto___17011)){
var error__5939__auto___17012 = temp__4388__auto___17011;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16992","constructor16992",-182308675,null),cljs.core.pr_str.call(null,error__5939__auto___17012)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16996,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___17010,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17012], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map16994 = G__16999;
while(true){
if(cljs.core.map_QMARK_.call(null,map16994)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16994)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map16994,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map16994,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map16994,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16994,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.complete.t17003 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.complete.t17003 = (function (validate__5937__auto__,owner,data,G__16999,input_schema16996,map16994,input_checker16997,state,output_checker16998,opts,constructor16992,ufv__,output_schema16995,meta17004){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.G__16999 = G__16999;
this.input_schema16996 = input_schema16996;
this.map16994 = map16994;
this.input_checker16997 = input_checker16997;
this.state = state;
this.output_checker16998 = output_checker16998;
this.opts = opts;
this.constructor16992 = constructor16992;
this.ufv__ = ufv__;
this.output_schema16995 = output_schema16995;
this.meta17004 = meta17004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.complete.t17003.prototype.om$core$IDisplayName$ = true;

jade.views.complete.t17003.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function (_){
var self__ = this;
var ___$1 = this;
return "complete";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

jade.views.complete.t17003.prototype.om$core$IRender$ = true;

jade.views.complete.t17003.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.complete.complete_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null)], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

jade.views.complete.t17003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function (_17005){
var self__ = this;
var _17005__$1 = this;
return self__.meta17004;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

jade.views.complete.t17003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function (_17005,meta17004__$1){
var self__ = this;
var _17005__$1 = this;
return (new jade.views.complete.t17003(self__.validate__5937__auto__,self__.owner,self__.data,self__.G__16999,self__.input_schema16996,self__.map16994,self__.input_checker16997,self__.state,self__.output_checker16998,self__.opts,self__.constructor16992,self__.ufv__,self__.output_schema16995,meta17004__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

jade.views.complete.t17003.cljs$lang$type = true;

jade.views.complete.t17003.cljs$lang$ctorStr = "jade.views.complete/t17003";

jade.views.complete.t17003.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.complete/t17003");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

jade.views.complete.__GT_t17003 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998){
return (function __GT_t17003(validate__5937__auto____$1,owner__$1,data__$1,G__16999__$1,input_schema16996__$1,map16994__$1,input_checker16997__$1,state__$1,output_checker16998__$1,opts__$1,constructor16992__$1,ufv____$1,output_schema16995__$1,meta17004){
return (new jade.views.complete.t17003(validate__5937__auto____$1,owner__$1,data__$1,G__16999__$1,input_schema16996__$1,map16994__$1,input_checker16997__$1,state__$1,output_checker16998__$1,opts__$1,constructor16992__$1,ufv____$1,output_schema16995__$1,meta17004));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
;

}

return (new jade.views.complete.t17003(validate__5937__auto__,owner,data,G__16999,input_schema16996,map16994,input_checker16997,state,output_checker16998,opts,constructor16992,ufv__,output_schema16995,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___17013 = output_checker16998.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___17013)){
var error__5939__auto___17014 = temp__4388__auto___17013;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16992","constructor16992",-182308675,null),cljs.core.pr_str.call(null,error__5939__auto___17014)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16995,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___17014], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema16995,input_schema16996,input_checker16997,output_checker16998))
,schema.core.make_fn_schema.call(null,output_schema16995,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16996], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.complete.complete = ((function (component_fnk__7745__auto___17009){
return (function() { 
var complete__delegate = function (data__7746__auto__,owner16991,p__17006){
var vec__17008 = p__17006;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__17008,(0),null);
return component_fnk__7745__auto___17009.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16991),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16991,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var complete = function (data__7746__auto__,owner16991,var_args){
var p__17006 = null;
if (arguments.length > 2) {
  p__17006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return complete__delegate.call(this,data__7746__auto__,owner16991,p__17006);};
complete.cljs$lang$maxFixedArity = 2;
complete.cljs$lang$applyTo = (function (arglist__17015){
var data__7746__auto__ = cljs.core.first(arglist__17015);
arglist__17015 = cljs.core.next(arglist__17015);
var owner16991 = cljs.core.first(arglist__17015);
var p__17006 = cljs.core.rest(arglist__17015);
return complete__delegate(data__7746__auto__,owner16991,p__17006);
});
complete.cljs$core$IFn$_invoke$arity$variadic = complete__delegate;
return complete;
})()
;})(component_fnk__7745__auto___17009))
;

jade.views.complete.__GT_complete = (function() {
var __GT_complete = null;
var __GT_complete__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.complete.complete,cursor__7714__auto__);
});
var __GT_complete__2 = (function (cursor__7714__auto__,m16993){
return om.core.build.call(null,jade.views.complete.complete,cursor__7714__auto__,m16993);
});
__GT_complete = function(cursor__7714__auto__,m16993){
switch(arguments.length){
case 1:
return __GT_complete__1.call(this,cursor__7714__auto__);
case 2:
return __GT_complete__2.call(this,cursor__7714__auto__,m16993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_complete.cljs$core$IFn$_invoke$arity$1 = __GT_complete__1;
__GT_complete.cljs$core$IFn$_invoke$arity$2 = __GT_complete__2;
return __GT_complete;
})()
;

//# sourceMappingURL=complete.js.map?rel=1545283548014