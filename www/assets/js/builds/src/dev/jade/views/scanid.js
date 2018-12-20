// Compiled by ClojureScript 0.0-2411
goog.provide('jade.views.scanid');
goog.require('cljs.core');
goog.require('jade.components.photo_prompt');
goog.require('jade.components.image_view');
goog.require('jade.components.panel');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('jade.config');
goog.require('jade.components.photo_prompt');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('jade.components.image_view');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jade.config');
goog.require('jade.utils');
goog.require('jade.components.panel');

var component_fnk__7745__auto___18020 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18006 = schema.core.Any;
var input_schema18007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18005","map18005",-2093662174,null))], null);
var input_checker18008 = schema.core.checker.call(null,input_schema18007);
var output_checker18009 = schema.core.checker.call(null,output_schema18006);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function constructor18003(G__18010){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18010], null);
var temp__4388__auto___18022 = input_checker18008.call(null,args__5938__auto___18021);
if(cljs.core.truth_(temp__4388__auto___18022)){
var error__5939__auto___18023 = temp__4388__auto___18022;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18003","constructor18003",-488603272,null),cljs.core.pr_str.call(null,error__5939__auto___18023)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18007,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18021,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18023], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18005 = G__18010;
while(true){
if(cljs.core.map_QMARK_.call(null,map18005)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18005)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18005,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18005,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18005,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18005,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.scanid.t18014 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.scanid.t18014 = (function (map18005,validate__5937__auto__,owner,data,output_checker18009,G__18010,state,input_checker18008,constructor18003,output_schema18006,input_schema18007,opts,ufv__,meta18015){
this.map18005 = map18005;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_checker18009 = output_checker18009;
this.G__18010 = G__18010;
this.state = state;
this.input_checker18008 = input_checker18008;
this.constructor18003 = constructor18003;
this.output_schema18006 = output_schema18006;
this.input_schema18007 = input_schema18007;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18015 = meta18015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.scanid.t18014.prototype.om$core$IDisplayName$ = true;

jade.views.scanid.t18014.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function (_){
var self__ = this;
var ___$1 = this;
return "scanid*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

jade.views.scanid.t18014.prototype.om$core$IRender$ = true;

jade.views.scanid.t18014.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.image_view.__GT_image_view.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"img","img",1442687358),"img/id.png",new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"glyphicons chevron-left",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"prompt","prompt",-78109487),"SCAN YOUR ID"], null),p_opts),jade.components.photo_prompt.__GT_photo_prompt.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.merge.call(null,self__.opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please scan your","Government Issued ID"], null),new cljs.core.Keyword(null,"click-states","click-states",-610995480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","rgb( 36, 42, 43 )"], null)], null)),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

jade.views.scanid.t18014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function (_18016){
var self__ = this;
var _18016__$1 = this;
return self__.meta18015;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

jade.views.scanid.t18014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function (_18016,meta18015__$1){
var self__ = this;
var _18016__$1 = this;
return (new jade.views.scanid.t18014(self__.map18005,self__.validate__5937__auto__,self__.owner,self__.data,self__.output_checker18009,self__.G__18010,self__.state,self__.input_checker18008,self__.constructor18003,self__.output_schema18006,self__.input_schema18007,self__.opts,self__.ufv__,meta18015__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

jade.views.scanid.t18014.cljs$lang$type = true;

jade.views.scanid.t18014.cljs$lang$ctorStr = "jade.views.scanid/t18014";

jade.views.scanid.t18014.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.scanid/t18014");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

jade.views.scanid.__GT_t18014 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009){
return (function __GT_t18014(map18005__$1,validate__5937__auto____$1,owner__$1,data__$1,output_checker18009__$1,G__18010__$1,state__$1,input_checker18008__$1,constructor18003__$1,output_schema18006__$1,input_schema18007__$1,opts__$1,ufv____$1,meta18015){
return (new jade.views.scanid.t18014(map18005__$1,validate__5937__auto____$1,owner__$1,data__$1,output_checker18009__$1,G__18010__$1,state__$1,input_checker18008__$1,constructor18003__$1,output_schema18006__$1,input_schema18007__$1,opts__$1,ufv____$1,meta18015));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
;

}

return (new jade.views.scanid.t18014(map18005,validate__5937__auto__,owner,data,output_checker18009,G__18010,state,input_checker18008,constructor18003,output_schema18006,input_schema18007,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18024 = output_checker18009.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18024)){
var error__5939__auto___18025 = temp__4388__auto___18024;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18003","constructor18003",-488603272,null),cljs.core.pr_str.call(null,error__5939__auto___18025)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18006,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18025], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18006,input_schema18007,input_checker18008,output_checker18009))
,schema.core.make_fn_schema.call(null,output_schema18006,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18007], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.scanid.scanid_STAR_ = ((function (component_fnk__7745__auto___18020){
return (function() { 
var scanid_STAR___delegate = function (data__7746__auto__,owner18002,p__18017){
var vec__18019 = p__18017;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18019,(0),null);
return component_fnk__7745__auto___18020.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18002),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18002,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var scanid_STAR_ = function (data__7746__auto__,owner18002,var_args){
var p__18017 = null;
if (arguments.length > 2) {
  p__18017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return scanid_STAR___delegate.call(this,data__7746__auto__,owner18002,p__18017);};
scanid_STAR_.cljs$lang$maxFixedArity = 2;
scanid_STAR_.cljs$lang$applyTo = (function (arglist__18026){
var data__7746__auto__ = cljs.core.first(arglist__18026);
arglist__18026 = cljs.core.next(arglist__18026);
var owner18002 = cljs.core.first(arglist__18026);
var p__18017 = cljs.core.rest(arglist__18026);
return scanid_STAR___delegate(data__7746__auto__,owner18002,p__18017);
});
scanid_STAR_.cljs$core$IFn$_invoke$arity$variadic = scanid_STAR___delegate;
return scanid_STAR_;
})()
;})(component_fnk__7745__auto___18020))
;

jade.views.scanid.__GT_scanid_STAR_ = (function() {
var __GT_scanid_STAR_ = null;
var __GT_scanid_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.scanid.scanid_STAR_,cursor__7714__auto__);
});
var __GT_scanid_STAR___2 = (function (cursor__7714__auto__,m18004){
return om.core.build.call(null,jade.views.scanid.scanid_STAR_,cursor__7714__auto__,m18004);
});
__GT_scanid_STAR_ = function(cursor__7714__auto__,m18004){
switch(arguments.length){
case 1:
return __GT_scanid_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_scanid_STAR___2.call(this,cursor__7714__auto__,m18004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_scanid_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_scanid_STAR___1;
__GT_scanid_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_scanid_STAR___2;
return __GT_scanid_STAR_;
})()
;

var component_fnk__7745__auto___18045 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18031 = schema.core.Any;
var input_schema18032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18030","map18030",987280911,null))], null);
var input_checker18033 = schema.core.checker.call(null,input_schema18032);
var output_checker18034 = schema.core.checker.call(null,output_schema18031);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function constructor18028(G__18035){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18035], null);
var temp__4388__auto___18047 = input_checker18033.call(null,args__5938__auto___18046);
if(cljs.core.truth_(temp__4388__auto___18047)){
var error__5939__auto___18048 = temp__4388__auto___18047;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18028","constructor18028",660985736,null),cljs.core.pr_str.call(null,error__5939__auto___18048)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18032,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18046,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18048], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18030 = G__18035;
while(true){
if(cljs.core.map_QMARK_.call(null,map18030)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18030)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18030,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18030,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18030,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18030,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.scanid.t18039 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.scanid.t18039 = (function (G__18035,validate__5937__auto__,owner,output_schema18031,data,constructor18028,input_checker18033,map18030,state,input_schema18032,opts,output_checker18034,ufv__,meta18040){
this.G__18035 = G__18035;
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.output_schema18031 = output_schema18031;
this.data = data;
this.constructor18028 = constructor18028;
this.input_checker18033 = input_checker18033;
this.map18030 = map18030;
this.state = state;
this.input_schema18032 = input_schema18032;
this.opts = opts;
this.output_checker18034 = output_checker18034;
this.ufv__ = ufv__;
this.meta18040 = meta18040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.scanid.t18039.prototype.om$core$IDisplayName$ = true;

jade.views.scanid.t18039.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function (_){
var self__ = this;
var ___$1 = this;
return "scanmid*";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

jade.views.scanid.t18039.prototype.om$core$IRender$ = true;

jade.views.scanid.t18039.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function (_){
var self__ = this;
var ___$1 = this;
var p_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.deref.call(null,self__.state)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex column"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[jade.components.image_view.__GT_image_view.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"img","img",1442687358),"img/mid.png",new cljs.core.Keyword(null,"left-icon","left-icon",769524213),"glyphicons chevron-left",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"prompt","prompt",-78109487),"Scan Your MMJ Card".toUpperCase()], null),p_opts),jade.components.photo_prompt.__GT_photo_prompt.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.merge.call(null,self__.opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please\n                                                        scan your","MMJ\n                                                        card for\n                                                        verification"], null),new cljs.core.Keyword(null,"click-states","click-states",-610995480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","rgb( 36, 42, 43 )"], null)], null)),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,self__.state)], null))],null))));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

jade.views.scanid.t18039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function (_18041){
var self__ = this;
var _18041__$1 = this;
return self__.meta18040;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

jade.views.scanid.t18039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function (_18041,meta18040__$1){
var self__ = this;
var _18041__$1 = this;
return (new jade.views.scanid.t18039(self__.G__18035,self__.validate__5937__auto__,self__.owner,self__.output_schema18031,self__.data,self__.constructor18028,self__.input_checker18033,self__.map18030,self__.state,self__.input_schema18032,self__.opts,self__.output_checker18034,self__.ufv__,meta18040__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

jade.views.scanid.t18039.cljs$lang$type = true;

jade.views.scanid.t18039.cljs$lang$ctorStr = "jade.views.scanid/t18039";

jade.views.scanid.t18039.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.scanid/t18039");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

jade.views.scanid.__GT_t18039 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034){
return (function __GT_t18039(G__18035__$1,validate__5937__auto____$1,owner__$1,output_schema18031__$1,data__$1,constructor18028__$1,input_checker18033__$1,map18030__$1,state__$1,input_schema18032__$1,opts__$1,output_checker18034__$1,ufv____$1,meta18040){
return (new jade.views.scanid.t18039(G__18035__$1,validate__5937__auto____$1,owner__$1,output_schema18031__$1,data__$1,constructor18028__$1,input_checker18033__$1,map18030__$1,state__$1,input_schema18032__$1,opts__$1,output_checker18034__$1,ufv____$1,meta18040));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
;

}

return (new jade.views.scanid.t18039(G__18035,validate__5937__auto__,owner,output_schema18031,data,constructor18028,input_checker18033,map18030,state,input_schema18032,opts,output_checker18034,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18049 = output_checker18034.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18049)){
var error__5939__auto___18050 = temp__4388__auto___18049;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18028","constructor18028",660985736,null),cljs.core.pr_str.call(null,error__5939__auto___18050)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18031,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18050], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18031,input_schema18032,input_checker18033,output_checker18034))
,schema.core.make_fn_schema.call(null,output_schema18031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18032], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.scanid.scanmid_STAR_ = ((function (component_fnk__7745__auto___18045){
return (function() { 
var scanmid_STAR___delegate = function (data__7746__auto__,owner18027,p__18042){
var vec__18044 = p__18042;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18044,(0),null);
return component_fnk__7745__auto___18045.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18027),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18027,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var scanmid_STAR_ = function (data__7746__auto__,owner18027,var_args){
var p__18042 = null;
if (arguments.length > 2) {
  p__18042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return scanmid_STAR___delegate.call(this,data__7746__auto__,owner18027,p__18042);};
scanmid_STAR_.cljs$lang$maxFixedArity = 2;
scanmid_STAR_.cljs$lang$applyTo = (function (arglist__18051){
var data__7746__auto__ = cljs.core.first(arglist__18051);
arglist__18051 = cljs.core.next(arglist__18051);
var owner18027 = cljs.core.first(arglist__18051);
var p__18042 = cljs.core.rest(arglist__18051);
return scanmid_STAR___delegate(data__7746__auto__,owner18027,p__18042);
});
scanmid_STAR_.cljs$core$IFn$_invoke$arity$variadic = scanmid_STAR___delegate;
return scanmid_STAR_;
})()
;})(component_fnk__7745__auto___18045))
;

jade.views.scanid.__GT_scanmid_STAR_ = (function() {
var __GT_scanmid_STAR_ = null;
var __GT_scanmid_STAR___1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.scanid.scanmid_STAR_,cursor__7714__auto__);
});
var __GT_scanmid_STAR___2 = (function (cursor__7714__auto__,m18029){
return om.core.build.call(null,jade.views.scanid.scanmid_STAR_,cursor__7714__auto__,m18029);
});
__GT_scanmid_STAR_ = function(cursor__7714__auto__,m18029){
switch(arguments.length){
case 1:
return __GT_scanmid_STAR___1.call(this,cursor__7714__auto__);
case 2:
return __GT_scanmid_STAR___2.call(this,cursor__7714__auto__,m18029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_scanmid_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_scanmid_STAR___1;
__GT_scanmid_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_scanmid_STAR___2;
return __GT_scanmid_STAR_;
})()
;

var component_fnk__7745__auto___18070 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18056 = schema.core.Any;
var input_schema18057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18055","map18055",-584534161,null))], null);
var input_checker18058 = schema.core.checker.call(null,input_schema18057);
var output_checker18059 = schema.core.checker.call(null,output_schema18056);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function constructor18053(G__18060){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18060], null);
var temp__4388__auto___18072 = input_checker18058.call(null,args__5938__auto___18071);
if(cljs.core.truth_(temp__4388__auto___18072)){
var error__5939__auto___18073 = temp__4388__auto___18072;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18053","constructor18053",-100775956,null),cljs.core.pr_str.call(null,error__5939__auto___18073)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18057,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18071,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18073], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18055 = G__18060;
while(true){
if(cljs.core.map_QMARK_.call(null,map18055)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18055)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18055,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18055,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18055,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18055,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.scanid.t18064 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.scanid.t18064 = (function (validate__5937__auto__,output_checker18059,owner,data,output_schema18056,input_checker18058,constructor18053,map18055,G__18060,state,input_schema18057,opts,ufv__,meta18065){
this.validate__5937__auto__ = validate__5937__auto__;
this.output_checker18059 = output_checker18059;
this.owner = owner;
this.data = data;
this.output_schema18056 = output_schema18056;
this.input_checker18058 = input_checker18058;
this.constructor18053 = constructor18053;
this.map18055 = map18055;
this.G__18060 = G__18060;
this.state = state;
this.input_schema18057 = input_schema18057;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18065 = meta18065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.scanid.t18064.prototype.om$core$IDisplayName$ = true;

jade.views.scanid.t18064.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function (_){
var self__ = this;
var ___$1 = this;
return "scanid";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

jade.views.scanid.t18064.prototype.om$core$IRender$ = true;

jade.views.scanid.t18064.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.scanid.scanid_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

jade.views.scanid.t18064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function (_18066){
var self__ = this;
var _18066__$1 = this;
return self__.meta18065;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

jade.views.scanid.t18064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function (_18066,meta18065__$1){
var self__ = this;
var _18066__$1 = this;
return (new jade.views.scanid.t18064(self__.validate__5937__auto__,self__.output_checker18059,self__.owner,self__.data,self__.output_schema18056,self__.input_checker18058,self__.constructor18053,self__.map18055,self__.G__18060,self__.state,self__.input_schema18057,self__.opts,self__.ufv__,meta18065__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

jade.views.scanid.t18064.cljs$lang$type = true;

jade.views.scanid.t18064.cljs$lang$ctorStr = "jade.views.scanid/t18064";

jade.views.scanid.t18064.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.scanid/t18064");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

jade.views.scanid.__GT_t18064 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059){
return (function __GT_t18064(validate__5937__auto____$1,output_checker18059__$1,owner__$1,data__$1,output_schema18056__$1,input_checker18058__$1,constructor18053__$1,map18055__$1,G__18060__$1,state__$1,input_schema18057__$1,opts__$1,ufv____$1,meta18065){
return (new jade.views.scanid.t18064(validate__5937__auto____$1,output_checker18059__$1,owner__$1,data__$1,output_schema18056__$1,input_checker18058__$1,constructor18053__$1,map18055__$1,G__18060__$1,state__$1,input_schema18057__$1,opts__$1,ufv____$1,meta18065));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
;

}

return (new jade.views.scanid.t18064(validate__5937__auto__,output_checker18059,owner,data,output_schema18056,input_checker18058,constructor18053,map18055,G__18060,state,input_schema18057,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18074 = output_checker18059.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18074)){
var error__5939__auto___18075 = temp__4388__auto___18074;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18053","constructor18053",-100775956,null),cljs.core.pr_str.call(null,error__5939__auto___18075)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18056,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18075], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18056,input_schema18057,input_checker18058,output_checker18059))
,schema.core.make_fn_schema.call(null,output_schema18056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18057], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.scanid.scanid = ((function (component_fnk__7745__auto___18070){
return (function() { 
var scanid__delegate = function (data__7746__auto__,owner18052,p__18067){
var vec__18069 = p__18067;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18069,(0),null);
return component_fnk__7745__auto___18070.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18052),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18052,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var scanid = function (data__7746__auto__,owner18052,var_args){
var p__18067 = null;
if (arguments.length > 2) {
  p__18067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return scanid__delegate.call(this,data__7746__auto__,owner18052,p__18067);};
scanid.cljs$lang$maxFixedArity = 2;
scanid.cljs$lang$applyTo = (function (arglist__18076){
var data__7746__auto__ = cljs.core.first(arglist__18076);
arglist__18076 = cljs.core.next(arglist__18076);
var owner18052 = cljs.core.first(arglist__18076);
var p__18067 = cljs.core.rest(arglist__18076);
return scanid__delegate(data__7746__auto__,owner18052,p__18067);
});
scanid.cljs$core$IFn$_invoke$arity$variadic = scanid__delegate;
return scanid;
})()
;})(component_fnk__7745__auto___18070))
;

jade.views.scanid.__GT_scanid = (function() {
var __GT_scanid = null;
var __GT_scanid__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.scanid.scanid,cursor__7714__auto__);
});
var __GT_scanid__2 = (function (cursor__7714__auto__,m18054){
return om.core.build.call(null,jade.views.scanid.scanid,cursor__7714__auto__,m18054);
});
__GT_scanid = function(cursor__7714__auto__,m18054){
switch(arguments.length){
case 1:
return __GT_scanid__1.call(this,cursor__7714__auto__);
case 2:
return __GT_scanid__2.call(this,cursor__7714__auto__,m18054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_scanid.cljs$core$IFn$_invoke$arity$1 = __GT_scanid__1;
__GT_scanid.cljs$core$IFn$_invoke$arity$2 = __GT_scanid__2;
return __GT_scanid;
})()
;

var component_fnk__7745__auto___18095 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema18081 = schema.core.Any;
var input_schema18082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map18080","map18080",-1082217223,null))], null);
var input_checker18083 = schema.core.checker.call(null,input_schema18082);
var output_checker18084 = schema.core.checker.call(null,output_schema18081);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function constructor18078(G__18085){
var validate__5937__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__5937__auto__)){
var args__5938__auto___18096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18085], null);
var temp__4388__auto___18097 = input_checker18083.call(null,args__5938__auto___18096);
if(cljs.core.truth_(temp__4388__auto___18097)){
var error__5939__auto___18098 = temp__4388__auto___18097;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18078","constructor18078",1288123667,null),cljs.core.pr_str.call(null,error__5939__auto___18098)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18082,new cljs.core.Keyword(null,"value","value",305978217),args__5938__auto___18096,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18098], null));
} else {
}
} else {
}

var o__5940__auto__ = (function (){var map18080 = G__18085;
while(true){
if(cljs.core.map_QMARK_.call(null,map18080)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map18080)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map18080,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var owner = plumbing.fnk.schema.safe_get.call(null,map18080,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map18080,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map18080,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof jade.views.scanid.t18089 !== 'undefined'){
} else {

/**
* @constructor
*/
jade.views.scanid.t18089 = (function (validate__5937__auto__,owner,data,output_checker18084,input_checker18083,G__18085,constructor18078,output_schema18081,state,input_schema18082,map18080,opts,ufv__,meta18090){
this.validate__5937__auto__ = validate__5937__auto__;
this.owner = owner;
this.data = data;
this.output_checker18084 = output_checker18084;
this.input_checker18083 = input_checker18083;
this.G__18085 = G__18085;
this.constructor18078 = constructor18078;
this.output_schema18081 = output_schema18081;
this.state = state;
this.input_schema18082 = input_schema18082;
this.map18080 = map18080;
this.opts = opts;
this.ufv__ = ufv__;
this.meta18090 = meta18090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
jade.views.scanid.t18089.prototype.om$core$IDisplayName$ = true;

jade.views.scanid.t18089.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function (_){
var self__ = this;
var ___$1 = this;
return "scanmid";
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

jade.views.scanid.t18089.prototype.om$core$IRender$ = true;

jade.views.scanid.t18089.prototype.om$core$IRender$render$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function (_){
var self__ = this;
var ___$1 = this;
var coord = cljs.core.async.chan.call(null);
var layout = jade.config.add_main_transition.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ease"], null),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),jade.views.scanid.scanmid_STAR_,new cljs.core.Keyword(null,"child-opts","child-opts",-659968704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null),new cljs.core.Keyword(null,"coord-process","coord-process",-979975093),jade.utils.coord_process], null));
return jade.components.panel.__GT_panel.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"init-state","init-state",1450863212),layout], null));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

jade.views.scanid.t18089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function (_18091){
var self__ = this;
var _18091__$1 = this;
return self__.meta18090;
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

jade.views.scanid.t18089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function (_18091,meta18090__$1){
var self__ = this;
var _18091__$1 = this;
return (new jade.views.scanid.t18089(self__.validate__5937__auto__,self__.owner,self__.data,self__.output_checker18084,self__.input_checker18083,self__.G__18085,self__.constructor18078,self__.output_schema18081,self__.state,self__.input_schema18082,self__.map18080,self__.opts,self__.ufv__,meta18090__$1));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

jade.views.scanid.t18089.cljs$lang$type = true;

jade.views.scanid.t18089.cljs$lang$ctorStr = "jade.views.scanid/t18089";

jade.views.scanid.t18089.cljs$lang$ctorPrWriter = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"jade.views.scanid/t18089");
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

jade.views.scanid.__GT_t18089 = ((function (state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084){
return (function __GT_t18089(validate__5937__auto____$1,owner__$1,data__$1,output_checker18084__$1,input_checker18083__$1,G__18085__$1,constructor18078__$1,output_schema18081__$1,state__$1,input_schema18082__$1,map18080__$1,opts__$1,ufv____$1,meta18090){
return (new jade.views.scanid.t18089(validate__5937__auto____$1,owner__$1,data__$1,output_checker18084__$1,input_checker18083__$1,G__18085__$1,constructor18078__$1,output_schema18081__$1,state__$1,input_schema18082__$1,map18080__$1,opts__$1,ufv____$1,meta18090));
});})(state,opts,owner,data,validate__5937__auto__,ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
;

}

return (new jade.views.scanid.t18089(validate__5937__auto__,owner,data,output_checker18084,input_checker18083,G__18085,constructor18078,output_schema18081,state,input_schema18082,map18080,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__5937__auto__)){
var temp__4388__auto___18099 = output_checker18084.call(null,o__5940__auto__);
if(cljs.core.truth_(temp__4388__auto___18099)){
var error__5939__auto___18100 = temp__4388__auto___18099;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor18078","constructor18078",1288123667,null),cljs.core.pr_str.call(null,error__5939__auto___18100)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18081,new cljs.core.Keyword(null,"value","value",305978217),o__5940__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5939__auto___18100], null));
} else {
}
} else {
}

return o__5940__auto__;
});})(ufv__,output_schema18081,input_schema18082,input_checker18083,output_checker18084))
,schema.core.make_fn_schema.call(null,output_schema18081,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18082], null)));
})();
/**
* @param {...*} var_args
*/
jade.views.scanid.scanmid = ((function (component_fnk__7745__auto___18095){
return (function() { 
var scanmid__delegate = function (data__7746__auto__,owner18077,p__18092){
var vec__18094 = p__18092;
var opts__7747__auto__ = cljs.core.nth.call(null,vec__18094,(0),null);
return component_fnk__7745__auto___18095.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner18077),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7747__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner18077,new cljs.core.Keyword(null,"data","data",-232669377),data__7746__auto__], null));
};
var scanmid = function (data__7746__auto__,owner18077,var_args){
var p__18092 = null;
if (arguments.length > 2) {
  p__18092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return scanmid__delegate.call(this,data__7746__auto__,owner18077,p__18092);};
scanmid.cljs$lang$maxFixedArity = 2;
scanmid.cljs$lang$applyTo = (function (arglist__18101){
var data__7746__auto__ = cljs.core.first(arglist__18101);
arglist__18101 = cljs.core.next(arglist__18101);
var owner18077 = cljs.core.first(arglist__18101);
var p__18092 = cljs.core.rest(arglist__18101);
return scanmid__delegate(data__7746__auto__,owner18077,p__18092);
});
scanmid.cljs$core$IFn$_invoke$arity$variadic = scanmid__delegate;
return scanmid;
})()
;})(component_fnk__7745__auto___18095))
;

jade.views.scanid.__GT_scanmid = (function() {
var __GT_scanmid = null;
var __GT_scanmid__1 = (function (cursor__7714__auto__){
return om.core.build.call(null,jade.views.scanid.scanmid,cursor__7714__auto__);
});
var __GT_scanmid__2 = (function (cursor__7714__auto__,m18079){
return om.core.build.call(null,jade.views.scanid.scanmid,cursor__7714__auto__,m18079);
});
__GT_scanmid = function(cursor__7714__auto__,m18079){
switch(arguments.length){
case 1:
return __GT_scanmid__1.call(this,cursor__7714__auto__);
case 2:
return __GT_scanmid__2.call(this,cursor__7714__auto__,m18079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_scanmid.cljs$core$IFn$_invoke$arity$1 = __GT_scanmid__1;
__GT_scanmid.cljs$core$IFn$_invoke$arity$2 = __GT_scanmid__2;
return __GT_scanmid;
})()
;

//# sourceMappingURL=scanid.js.map?rel=1545283549325