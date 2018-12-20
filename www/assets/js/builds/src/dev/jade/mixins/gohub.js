// Compiled by ClojureScript 0.0-2411
goog.provide('jade.mixins.gohub');
goog.require('cljs.core');
goog.require('jade.utils');
goog.require('cljs.core.async');
goog.require('goog.debug');
goog.require('goog.debug');
goog.require('jade.utils');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om_tools.mixin');
jade.mixins.gohub.create_chan = (function create_chan(owner,state){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"coord","coord",-1453656639),cljs.core.async.chan.call(null));
} else {
return state;
}
});
jade.mixins.gohub.mnt_process = (function mnt_process(owner,state){
var temp__4388__auto__ = new cljs.core.Keyword(null,"coord-process","coord-process",-979975093).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4388__auto__)){
var coord_process = temp__4388__auto__;
var coord = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(state);
return coord_process.call(null,coord,owner,new cljs.core.Keyword(null,"trans-out","trans-out",-298682116).cljs$core$IFn$_invoke$arity$1(state),state);
} else {
return null;
}
});
jade.mixins.gohub.go_hub = {"componentWillMount": (function (){
var this18203 = this;
return ((function (this18203){
return (function (owner){
return jade.utils.hand_state.call(null,jade.mixins.gohub.mnt_process,owner);
});})(this18203))
.call(null,this18203);
})};

//# sourceMappingURL=gohub.js.map?rel=1545283549568