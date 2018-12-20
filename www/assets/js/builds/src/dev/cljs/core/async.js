// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t21129 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21129 = (function (f,fn_handler,meta21130){
this.f = f;
this.fn_handler = fn_handler;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){
var self__ = this;
var _21131__$1 = this;
return self__.meta21130;
});

cljs.core.async.t21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){
var self__ = this;
var _21131__$1 = this;
return (new cljs.core.async.t21129(self__.f,self__.fn_handler,meta21130__$1));
});

cljs.core.async.t21129.cljs$lang$type = true;

cljs.core.async.t21129.cljs$lang$ctorStr = "cljs.core.async/t21129";

cljs.core.async.t21129.cljs$lang$ctorPrWriter = (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t21129");
});

cljs.core.async.__GT_t21129 = (function __GT_t21129(f__$1,fn_handler__$1,meta21130){
return (new cljs.core.async.t21129(f__$1,fn_handler__$1,meta21130));
});

}

return (new cljs.core.async.t21129(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__21133 = buff;
if(G__21133){
var bit__4298__auto__ = null;
if(cljs.core.truth_((function (){var or__3622__auto__ = bit__4298__auto__;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return G__21133.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21133.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21133);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21133);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21134 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21134);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21134,ret){
return (function (){
return fn1.call(null,val_21134);
});})(val_21134,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4386__auto__)){
var ret = temp__4386__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4386__auto__)){
var retb = temp__4386__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4386__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4386__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4504__auto___21135 = n;
var x_21136 = (0);
while(true){
if((x_21136 < n__4504__auto___21135)){
(a[x_21136] = (0));

var G__21137 = (x_21136 + (1));
x_21136 = G__21137;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21138 = (i + (1));
i = G__21138;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21142 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21142 = (function (flag,alt_flag,meta21143){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21143 = meta21143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21144){
var self__ = this;
var _21144__$1 = this;
return self__.meta21143;
});})(flag))
;

cljs.core.async.t21142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21144,meta21143__$1){
var self__ = this;
var _21144__$1 = this;
return (new cljs.core.async.t21142(self__.flag,self__.alt_flag,meta21143__$1));
});})(flag))
;

cljs.core.async.t21142.cljs$lang$type = true;

cljs.core.async.t21142.cljs$lang$ctorStr = "cljs.core.async/t21142";

cljs.core.async.t21142.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t21142");
});})(flag))
;

cljs.core.async.__GT_t21142 = ((function (flag){
return (function __GT_t21142(flag__$1,alt_flag__$1,meta21143){
return (new cljs.core.async.t21142(flag__$1,alt_flag__$1,meta21143));
});})(flag))
;

}

return (new cljs.core.async.t21142(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21148 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21148 = (function (cb,flag,alt_handler,meta21149){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21149 = meta21149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21150){
var self__ = this;
var _21150__$1 = this;
return self__.meta21149;
});

cljs.core.async.t21148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21150,meta21149__$1){
var self__ = this;
var _21150__$1 = this;
return (new cljs.core.async.t21148(self__.cb,self__.flag,self__.alt_handler,meta21149__$1));
});

cljs.core.async.t21148.cljs$lang$type = true;

cljs.core.async.t21148.cljs$lang$ctorStr = "cljs.core.async/t21148";

cljs.core.async.t21148.cljs$lang$ctorPrWriter = (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t21148");
});

cljs.core.async.__GT_t21148 = (function __GT_t21148(cb__$1,flag__$1,alt_handler__$1,meta21149){
return (new cljs.core.async.t21148(cb__$1,flag__$1,alt_handler__$1,meta21149));
});

}

return (new cljs.core.async.t21148(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21151_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21151_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21152_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21152_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3622__auto__ = wport;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21153 = (i + (1));
i = G__21153;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3622__auto__ = ret;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4388__auto__ = (function (){var and__3610__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3610__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3610__auto__;
}
})();
if(cljs.core.truth_(temp__4388__auto__)){
var got = temp__4388__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21154){
var map__21156 = p__21154;
var map__21156__$1 = ((cljs.core.seq_QMARK_.call(null,map__21156))?cljs.core.apply.call(null,cljs.core.hash_map,map__21156):map__21156);
var opts = map__21156__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21154 = null;
if (arguments.length > 1) {
  p__21154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__21154);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21157){
var ports = cljs.core.first(arglist__21157);
var p__21154 = cljs.core.rest(arglist__21157);
return alts_BANG___delegate(ports,p__21154);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__12311__auto___21252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___21252){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___21252){
return (function (state_21228){
var state_val_21229 = (state_21228[(1)]);
if((state_val_21229 === (7))){
var inst_21224 = (state_21228[(2)]);
var state_21228__$1 = state_21228;
var statearr_21230_21253 = state_21228__$1;
(statearr_21230_21253[(2)] = inst_21224);

(statearr_21230_21253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (1))){
var state_21228__$1 = state_21228;
var statearr_21231_21254 = state_21228__$1;
(statearr_21231_21254[(2)] = null);

(statearr_21231_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (4))){
var inst_21207 = (state_21228[(7)]);
var inst_21207__$1 = (state_21228[(2)]);
var inst_21208 = (inst_21207__$1 == null);
var state_21228__$1 = (function (){var statearr_21232 = state_21228;
(statearr_21232[(7)] = inst_21207__$1);

return statearr_21232;
})();
if(cljs.core.truth_(inst_21208)){
var statearr_21233_21255 = state_21228__$1;
(statearr_21233_21255[(1)] = (5));

} else {
var statearr_21234_21256 = state_21228__$1;
(statearr_21234_21256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (13))){
var state_21228__$1 = state_21228;
var statearr_21235_21257 = state_21228__$1;
(statearr_21235_21257[(2)] = null);

(statearr_21235_21257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (6))){
var inst_21207 = (state_21228[(7)]);
var state_21228__$1 = state_21228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21228__$1,(11),to,inst_21207);
} else {
if((state_val_21229 === (3))){
var inst_21226 = (state_21228[(2)]);
var state_21228__$1 = state_21228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21228__$1,inst_21226);
} else {
if((state_val_21229 === (12))){
var state_21228__$1 = state_21228;
var statearr_21236_21258 = state_21228__$1;
(statearr_21236_21258[(2)] = null);

(statearr_21236_21258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (2))){
var state_21228__$1 = state_21228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21228__$1,(4),from);
} else {
if((state_val_21229 === (11))){
var inst_21217 = (state_21228[(2)]);
var state_21228__$1 = state_21228;
if(cljs.core.truth_(inst_21217)){
var statearr_21237_21259 = state_21228__$1;
(statearr_21237_21259[(1)] = (12));

} else {
var statearr_21238_21260 = state_21228__$1;
(statearr_21238_21260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (9))){
var state_21228__$1 = state_21228;
var statearr_21239_21261 = state_21228__$1;
(statearr_21239_21261[(2)] = null);

(statearr_21239_21261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (5))){
var state_21228__$1 = state_21228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21240_21262 = state_21228__$1;
(statearr_21240_21262[(1)] = (8));

} else {
var statearr_21241_21263 = state_21228__$1;
(statearr_21241_21263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (14))){
var inst_21222 = (state_21228[(2)]);
var state_21228__$1 = state_21228;
var statearr_21242_21264 = state_21228__$1;
(statearr_21242_21264[(2)] = inst_21222);

(statearr_21242_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (10))){
var inst_21214 = (state_21228[(2)]);
var state_21228__$1 = state_21228;
var statearr_21243_21265 = state_21228__$1;
(statearr_21243_21265[(2)] = inst_21214);

(statearr_21243_21265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21229 === (8))){
var inst_21211 = cljs.core.async.close_BANG_.call(null,to);
var state_21228__$1 = state_21228;
var statearr_21244_21266 = state_21228__$1;
(statearr_21244_21266[(2)] = inst_21211);

(statearr_21244_21266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___21252))
;
return ((function (switch__12255__auto__,c__12311__auto___21252){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21248 = [null,null,null,null,null,null,null,null];
(statearr_21248[(0)] = state_machine__12256__auto__);

(statearr_21248[(1)] = (1));

return statearr_21248;
});
var state_machine__12256__auto____1 = (function (state_21228){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21249){if((e21249 instanceof Object)){
var ex__12259__auto__ = e21249;
var statearr_21250_21267 = state_21228;
(statearr_21250_21267[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21268 = state_21228;
state_21228 = G__21268;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21228){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___21252))
})();
var state__12313__auto__ = (function (){var statearr_21251 = f__12312__auto__.call(null);
(statearr_21251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21252);

return statearr_21251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___21252))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21452){
var vec__21453 = p__21452;
var v = cljs.core.nth.call(null,vec__21453,(0),null);
var p = cljs.core.nth.call(null,vec__21453,(1),null);
var job = vec__21453;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12311__auto___21635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results){
return (function (state_21458){
var state_val_21459 = (state_21458[(1)]);
if((state_val_21459 === (2))){
var inst_21455 = (state_21458[(2)]);
var inst_21456 = cljs.core.async.close_BANG_.call(null,res);
var state_21458__$1 = (function (){var statearr_21460 = state_21458;
(statearr_21460[(7)] = inst_21455);

return statearr_21460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21458__$1,inst_21456);
} else {
if((state_val_21459 === (1))){
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21458__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results))
;
return ((function (switch__12255__auto__,c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21464 = [null,null,null,null,null,null,null,null];
(statearr_21464[(0)] = state_machine__12256__auto__);

(statearr_21464[(1)] = (1));

return statearr_21464;
});
var state_machine__12256__auto____1 = (function (state_21458){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21465){if((e21465 instanceof Object)){
var ex__12259__auto__ = e21465;
var statearr_21466_21636 = state_21458;
(statearr_21466_21636[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21637 = state_21458;
state_21458 = G__21637;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21458){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results))
})();
var state__12313__auto__ = (function (){var statearr_21467 = f__12312__auto__.call(null);
(statearr_21467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21635);

return statearr_21467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___21635,res,vec__21453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21468){
var vec__21469 = p__21468;
var v = cljs.core.nth.call(null,vec__21469,(0),null);
var p = cljs.core.nth.call(null,vec__21469,(1),null);
var job = vec__21469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4504__auto___21638 = n;
var __21639 = (0);
while(true){
if((__21639 < n__4504__auto___21638)){
var G__21470_21640 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21470_21640) {
case "async":
var c__12311__auto___21642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21639,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (__21639,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function (state_21483){
var state_val_21484 = (state_21483[(1)]);
if((state_val_21484 === (7))){
var inst_21479 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
var statearr_21485_21643 = state_21483__$1;
(statearr_21485_21643[(2)] = inst_21479);

(statearr_21485_21643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (6))){
var state_21483__$1 = state_21483;
var statearr_21486_21644 = state_21483__$1;
(statearr_21486_21644[(2)] = null);

(statearr_21486_21644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (5))){
var state_21483__$1 = state_21483;
var statearr_21487_21645 = state_21483__$1;
(statearr_21487_21645[(2)] = null);

(statearr_21487_21645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (4))){
var inst_21473 = (state_21483[(2)]);
var inst_21474 = async.call(null,inst_21473);
var state_21483__$1 = state_21483;
if(cljs.core.truth_(inst_21474)){
var statearr_21488_21646 = state_21483__$1;
(statearr_21488_21646[(1)] = (5));

} else {
var statearr_21489_21647 = state_21483__$1;
(statearr_21489_21647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (3))){
var inst_21481 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21483__$1,inst_21481);
} else {
if((state_val_21484 === (2))){
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21483__$1,(4),jobs);
} else {
if((state_val_21484 === (1))){
var state_21483__$1 = state_21483;
var statearr_21490_21648 = state_21483__$1;
(statearr_21490_21648[(2)] = null);

(statearr_21490_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21639,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
;
return ((function (__21639,switch__12255__auto__,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21494 = [null,null,null,null,null,null,null];
(statearr_21494[(0)] = state_machine__12256__auto__);

(statearr_21494[(1)] = (1));

return statearr_21494;
});
var state_machine__12256__auto____1 = (function (state_21483){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21495){if((e21495 instanceof Object)){
var ex__12259__auto__ = e21495;
var statearr_21496_21649 = state_21483;
(statearr_21496_21649[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21650 = state_21483;
state_21483 = G__21650;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21483){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(__21639,switch__12255__auto__,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
})();
var state__12313__auto__ = (function (){var statearr_21497 = f__12312__auto__.call(null);
(statearr_21497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21642);

return statearr_21497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(__21639,c__12311__auto___21642,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
);


break;
case "compute":
var c__12311__auto___21651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21639,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (__21639,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function (state_21510){
var state_val_21511 = (state_21510[(1)]);
if((state_val_21511 === (7))){
var inst_21506 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
var statearr_21512_21652 = state_21510__$1;
(statearr_21512_21652[(2)] = inst_21506);

(statearr_21512_21652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (6))){
var state_21510__$1 = state_21510;
var statearr_21513_21653 = state_21510__$1;
(statearr_21513_21653[(2)] = null);

(statearr_21513_21653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (5))){
var state_21510__$1 = state_21510;
var statearr_21514_21654 = state_21510__$1;
(statearr_21514_21654[(2)] = null);

(statearr_21514_21654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (4))){
var inst_21500 = (state_21510[(2)]);
var inst_21501 = process.call(null,inst_21500);
var state_21510__$1 = state_21510;
if(cljs.core.truth_(inst_21501)){
var statearr_21515_21655 = state_21510__$1;
(statearr_21515_21655[(1)] = (5));

} else {
var statearr_21516_21656 = state_21510__$1;
(statearr_21516_21656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (3))){
var inst_21508 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21510__$1,inst_21508);
} else {
if((state_val_21511 === (2))){
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21510__$1,(4),jobs);
} else {
if((state_val_21511 === (1))){
var state_21510__$1 = state_21510;
var statearr_21517_21657 = state_21510__$1;
(statearr_21517_21657[(2)] = null);

(statearr_21517_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21639,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
;
return ((function (__21639,switch__12255__auto__,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21521 = [null,null,null,null,null,null,null];
(statearr_21521[(0)] = state_machine__12256__auto__);

(statearr_21521[(1)] = (1));

return statearr_21521;
});
var state_machine__12256__auto____1 = (function (state_21510){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21522){if((e21522 instanceof Object)){
var ex__12259__auto__ = e21522;
var statearr_21523_21658 = state_21510;
(statearr_21523_21658[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21659 = state_21510;
state_21510 = G__21659;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21510){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(__21639,switch__12255__auto__,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
})();
var state__12313__auto__ = (function (){var statearr_21524 = f__12312__auto__.call(null);
(statearr_21524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21651);

return statearr_21524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(__21639,c__12311__auto___21651,G__21470_21640,n__4504__auto___21638,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21660 = (__21639 + (1));
__21639 = G__21660;
continue;
} else {
}
break;
}

var c__12311__auto___21661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___21661,jobs,results,process,async){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___21661,jobs,results,process,async){
return (function (state_21546){
var state_val_21547 = (state_21546[(1)]);
if((state_val_21547 === (9))){
var inst_21539 = (state_21546[(2)]);
var state_21546__$1 = (function (){var statearr_21548 = state_21546;
(statearr_21548[(7)] = inst_21539);

return statearr_21548;
})();
var statearr_21549_21662 = state_21546__$1;
(statearr_21549_21662[(2)] = null);

(statearr_21549_21662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (8))){
var inst_21532 = (state_21546[(8)]);
var inst_21537 = (state_21546[(2)]);
var state_21546__$1 = (function (){var statearr_21550 = state_21546;
(statearr_21550[(9)] = inst_21537);

return statearr_21550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21546__$1,(9),results,inst_21532);
} else {
if((state_val_21547 === (7))){
var inst_21542 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21551_21663 = state_21546__$1;
(statearr_21551_21663[(2)] = inst_21542);

(statearr_21551_21663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (6))){
var inst_21532 = (state_21546[(8)]);
var inst_21527 = (state_21546[(10)]);
var inst_21532__$1 = cljs.core.async.chan.call(null,(1));
var inst_21533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21534 = [inst_21527,inst_21532__$1];
var inst_21535 = (new cljs.core.PersistentVector(null,2,(5),inst_21533,inst_21534,null));
var state_21546__$1 = (function (){var statearr_21552 = state_21546;
(statearr_21552[(8)] = inst_21532__$1);

return statearr_21552;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21546__$1,(8),jobs,inst_21535);
} else {
if((state_val_21547 === (5))){
var inst_21530 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21546__$1 = state_21546;
var statearr_21553_21664 = state_21546__$1;
(statearr_21553_21664[(2)] = inst_21530);

(statearr_21553_21664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (4))){
var inst_21527 = (state_21546[(10)]);
var inst_21527__$1 = (state_21546[(2)]);
var inst_21528 = (inst_21527__$1 == null);
var state_21546__$1 = (function (){var statearr_21554 = state_21546;
(statearr_21554[(10)] = inst_21527__$1);

return statearr_21554;
})();
if(cljs.core.truth_(inst_21528)){
var statearr_21555_21665 = state_21546__$1;
(statearr_21555_21665[(1)] = (5));

} else {
var statearr_21556_21666 = state_21546__$1;
(statearr_21556_21666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (3))){
var inst_21544 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21546__$1,inst_21544);
} else {
if((state_val_21547 === (2))){
var state_21546__$1 = state_21546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21546__$1,(4),from);
} else {
if((state_val_21547 === (1))){
var state_21546__$1 = state_21546;
var statearr_21557_21667 = state_21546__$1;
(statearr_21557_21667[(2)] = null);

(statearr_21557_21667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___21661,jobs,results,process,async))
;
return ((function (switch__12255__auto__,c__12311__auto___21661,jobs,results,process,async){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21561[(0)] = state_machine__12256__auto__);

(statearr_21561[(1)] = (1));

return statearr_21561;
});
var state_machine__12256__auto____1 = (function (state_21546){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21562){if((e21562 instanceof Object)){
var ex__12259__auto__ = e21562;
var statearr_21563_21668 = state_21546;
(statearr_21563_21668[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21669 = state_21546;
state_21546 = G__21669;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21546){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___21661,jobs,results,process,async))
})();
var state__12313__auto__ = (function (){var statearr_21564 = f__12312__auto__.call(null);
(statearr_21564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21661);

return statearr_21564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___21661,jobs,results,process,async))
);


var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__,jobs,results,process,async){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__,jobs,results,process,async){
return (function (state_21602){
var state_val_21603 = (state_21602[(1)]);
if((state_val_21603 === (7))){
var inst_21598 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21604_21670 = state_21602__$1;
(statearr_21604_21670[(2)] = inst_21598);

(statearr_21604_21670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (20))){
var state_21602__$1 = state_21602;
var statearr_21605_21671 = state_21602__$1;
(statearr_21605_21671[(2)] = null);

(statearr_21605_21671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (1))){
var state_21602__$1 = state_21602;
var statearr_21606_21672 = state_21602__$1;
(statearr_21606_21672[(2)] = null);

(statearr_21606_21672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (4))){
var inst_21567 = (state_21602[(7)]);
var inst_21567__$1 = (state_21602[(2)]);
var inst_21568 = (inst_21567__$1 == null);
var state_21602__$1 = (function (){var statearr_21607 = state_21602;
(statearr_21607[(7)] = inst_21567__$1);

return statearr_21607;
})();
if(cljs.core.truth_(inst_21568)){
var statearr_21608_21673 = state_21602__$1;
(statearr_21608_21673[(1)] = (5));

} else {
var statearr_21609_21674 = state_21602__$1;
(statearr_21609_21674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (15))){
var inst_21580 = (state_21602[(8)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21602__$1,(18),to,inst_21580);
} else {
if((state_val_21603 === (21))){
var inst_21593 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21610_21675 = state_21602__$1;
(statearr_21610_21675[(2)] = inst_21593);

(statearr_21610_21675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (13))){
var inst_21595 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21611 = state_21602;
(statearr_21611[(9)] = inst_21595);

return statearr_21611;
})();
var statearr_21612_21676 = state_21602__$1;
(statearr_21612_21676[(2)] = null);

(statearr_21612_21676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (6))){
var inst_21567 = (state_21602[(7)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(11),inst_21567);
} else {
if((state_val_21603 === (17))){
var inst_21588 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
if(cljs.core.truth_(inst_21588)){
var statearr_21613_21677 = state_21602__$1;
(statearr_21613_21677[(1)] = (19));

} else {
var statearr_21614_21678 = state_21602__$1;
(statearr_21614_21678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (3))){
var inst_21600 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21602__$1,inst_21600);
} else {
if((state_val_21603 === (12))){
var inst_21577 = (state_21602[(10)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(14),inst_21577);
} else {
if((state_val_21603 === (2))){
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(4),results);
} else {
if((state_val_21603 === (19))){
var state_21602__$1 = state_21602;
var statearr_21615_21679 = state_21602__$1;
(statearr_21615_21679[(2)] = null);

(statearr_21615_21679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (11))){
var inst_21577 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21616 = state_21602;
(statearr_21616[(10)] = inst_21577);

return statearr_21616;
})();
var statearr_21617_21680 = state_21602__$1;
(statearr_21617_21680[(2)] = null);

(statearr_21617_21680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (9))){
var state_21602__$1 = state_21602;
var statearr_21618_21681 = state_21602__$1;
(statearr_21618_21681[(2)] = null);

(statearr_21618_21681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (5))){
var state_21602__$1 = state_21602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21619_21682 = state_21602__$1;
(statearr_21619_21682[(1)] = (8));

} else {
var statearr_21620_21683 = state_21602__$1;
(statearr_21620_21683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (14))){
var inst_21580 = (state_21602[(8)]);
var inst_21582 = (state_21602[(11)]);
var inst_21580__$1 = (state_21602[(2)]);
var inst_21581 = (inst_21580__$1 == null);
var inst_21582__$1 = cljs.core.not.call(null,inst_21581);
var state_21602__$1 = (function (){var statearr_21621 = state_21602;
(statearr_21621[(8)] = inst_21580__$1);

(statearr_21621[(11)] = inst_21582__$1);

return statearr_21621;
})();
if(inst_21582__$1){
var statearr_21622_21684 = state_21602__$1;
(statearr_21622_21684[(1)] = (15));

} else {
var statearr_21623_21685 = state_21602__$1;
(statearr_21623_21685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (16))){
var inst_21582 = (state_21602[(11)]);
var state_21602__$1 = state_21602;
var statearr_21624_21686 = state_21602__$1;
(statearr_21624_21686[(2)] = inst_21582);

(statearr_21624_21686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (10))){
var inst_21574 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21625_21687 = state_21602__$1;
(statearr_21625_21687[(2)] = inst_21574);

(statearr_21625_21687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (18))){
var inst_21585 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21626_21688 = state_21602__$1;
(statearr_21626_21688[(2)] = inst_21585);

(statearr_21626_21688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (8))){
var inst_21571 = cljs.core.async.close_BANG_.call(null,to);
var state_21602__$1 = state_21602;
var statearr_21627_21689 = state_21602__$1;
(statearr_21627_21689[(2)] = inst_21571);

(statearr_21627_21689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto__,jobs,results,process,async))
;
return ((function (switch__12255__auto__,c__12311__auto__,jobs,results,process,async){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21631[(0)] = state_machine__12256__auto__);

(statearr_21631[(1)] = (1));

return statearr_21631;
});
var state_machine__12256__auto____1 = (function (state_21602){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21632){if((e21632 instanceof Object)){
var ex__12259__auto__ = e21632;
var statearr_21633_21690 = state_21602;
(statearr_21633_21690[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21691 = state_21602;
state_21602 = G__21691;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21602){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__,jobs,results,process,async))
})();
var state__12313__auto__ = (function (){var statearr_21634 = f__12312__auto__.call(null);
(statearr_21634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_21634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__,jobs,results,process,async))
);

return c__12311__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12311__auto___21792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___21792,tc,fc){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___21792,tc,fc){
return (function (state_21767){
var state_val_21768 = (state_21767[(1)]);
if((state_val_21768 === (7))){
var inst_21763 = (state_21767[(2)]);
var state_21767__$1 = state_21767;
var statearr_21769_21793 = state_21767__$1;
(statearr_21769_21793[(2)] = inst_21763);

(statearr_21769_21793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (1))){
var state_21767__$1 = state_21767;
var statearr_21770_21794 = state_21767__$1;
(statearr_21770_21794[(2)] = null);

(statearr_21770_21794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (4))){
var inst_21744 = (state_21767[(7)]);
var inst_21744__$1 = (state_21767[(2)]);
var inst_21745 = (inst_21744__$1 == null);
var state_21767__$1 = (function (){var statearr_21771 = state_21767;
(statearr_21771[(7)] = inst_21744__$1);

return statearr_21771;
})();
if(cljs.core.truth_(inst_21745)){
var statearr_21772_21795 = state_21767__$1;
(statearr_21772_21795[(1)] = (5));

} else {
var statearr_21773_21796 = state_21767__$1;
(statearr_21773_21796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (13))){
var state_21767__$1 = state_21767;
var statearr_21774_21797 = state_21767__$1;
(statearr_21774_21797[(2)] = null);

(statearr_21774_21797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (6))){
var inst_21744 = (state_21767[(7)]);
var inst_21750 = p.call(null,inst_21744);
var state_21767__$1 = state_21767;
if(cljs.core.truth_(inst_21750)){
var statearr_21775_21798 = state_21767__$1;
(statearr_21775_21798[(1)] = (9));

} else {
var statearr_21776_21799 = state_21767__$1;
(statearr_21776_21799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (3))){
var inst_21765 = (state_21767[(2)]);
var state_21767__$1 = state_21767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21767__$1,inst_21765);
} else {
if((state_val_21768 === (12))){
var state_21767__$1 = state_21767;
var statearr_21777_21800 = state_21767__$1;
(statearr_21777_21800[(2)] = null);

(statearr_21777_21800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (2))){
var state_21767__$1 = state_21767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21767__$1,(4),ch);
} else {
if((state_val_21768 === (11))){
var inst_21744 = (state_21767[(7)]);
var inst_21754 = (state_21767[(2)]);
var state_21767__$1 = state_21767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21767__$1,(8),inst_21754,inst_21744);
} else {
if((state_val_21768 === (9))){
var state_21767__$1 = state_21767;
var statearr_21778_21801 = state_21767__$1;
(statearr_21778_21801[(2)] = tc);

(statearr_21778_21801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (5))){
var inst_21747 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21748 = cljs.core.async.close_BANG_.call(null,fc);
var state_21767__$1 = (function (){var statearr_21779 = state_21767;
(statearr_21779[(8)] = inst_21747);

return statearr_21779;
})();
var statearr_21780_21802 = state_21767__$1;
(statearr_21780_21802[(2)] = inst_21748);

(statearr_21780_21802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (14))){
var inst_21761 = (state_21767[(2)]);
var state_21767__$1 = state_21767;
var statearr_21781_21803 = state_21767__$1;
(statearr_21781_21803[(2)] = inst_21761);

(statearr_21781_21803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (10))){
var state_21767__$1 = state_21767;
var statearr_21782_21804 = state_21767__$1;
(statearr_21782_21804[(2)] = fc);

(statearr_21782_21804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21768 === (8))){
var inst_21756 = (state_21767[(2)]);
var state_21767__$1 = state_21767;
if(cljs.core.truth_(inst_21756)){
var statearr_21783_21805 = state_21767__$1;
(statearr_21783_21805[(1)] = (12));

} else {
var statearr_21784_21806 = state_21767__$1;
(statearr_21784_21806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___21792,tc,fc))
;
return ((function (switch__12255__auto__,c__12311__auto___21792,tc,fc){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21788 = [null,null,null,null,null,null,null,null,null];
(statearr_21788[(0)] = state_machine__12256__auto__);

(statearr_21788[(1)] = (1));

return statearr_21788;
});
var state_machine__12256__auto____1 = (function (state_21767){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21789){if((e21789 instanceof Object)){
var ex__12259__auto__ = e21789;
var statearr_21790_21807 = state_21767;
(statearr_21790_21807[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21808 = state_21767;
state_21767 = G__21808;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21767){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___21792,tc,fc))
})();
var state__12313__auto__ = (function (){var statearr_21791 = f__12312__auto__.call(null);
(statearr_21791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___21792);

return statearr_21791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___21792,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_21855){
var state_val_21856 = (state_21855[(1)]);
if((state_val_21856 === (7))){
var inst_21851 = (state_21855[(2)]);
var state_21855__$1 = state_21855;
var statearr_21857_21873 = state_21855__$1;
(statearr_21857_21873[(2)] = inst_21851);

(statearr_21857_21873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21856 === (6))){
var inst_21841 = (state_21855[(7)]);
var inst_21844 = (state_21855[(8)]);
var inst_21848 = f.call(null,inst_21841,inst_21844);
var inst_21841__$1 = inst_21848;
var state_21855__$1 = (function (){var statearr_21858 = state_21855;
(statearr_21858[(7)] = inst_21841__$1);

return statearr_21858;
})();
var statearr_21859_21874 = state_21855__$1;
(statearr_21859_21874[(2)] = null);

(statearr_21859_21874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21856 === (5))){
var inst_21841 = (state_21855[(7)]);
var state_21855__$1 = state_21855;
var statearr_21860_21875 = state_21855__$1;
(statearr_21860_21875[(2)] = inst_21841);

(statearr_21860_21875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21856 === (4))){
var inst_21844 = (state_21855[(8)]);
var inst_21844__$1 = (state_21855[(2)]);
var inst_21845 = (inst_21844__$1 == null);
var state_21855__$1 = (function (){var statearr_21861 = state_21855;
(statearr_21861[(8)] = inst_21844__$1);

return statearr_21861;
})();
if(cljs.core.truth_(inst_21845)){
var statearr_21862_21876 = state_21855__$1;
(statearr_21862_21876[(1)] = (5));

} else {
var statearr_21863_21877 = state_21855__$1;
(statearr_21863_21877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21856 === (3))){
var inst_21853 = (state_21855[(2)]);
var state_21855__$1 = state_21855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21855__$1,inst_21853);
} else {
if((state_val_21856 === (2))){
var state_21855__$1 = state_21855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21855__$1,(4),ch);
} else {
if((state_val_21856 === (1))){
var inst_21841 = init;
var state_21855__$1 = (function (){var statearr_21864 = state_21855;
(statearr_21864[(7)] = inst_21841);

return statearr_21864;
})();
var statearr_21865_21878 = state_21855__$1;
(statearr_21865_21878[(2)] = null);

(statearr_21865_21878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21869 = [null,null,null,null,null,null,null,null,null];
(statearr_21869[(0)] = state_machine__12256__auto__);

(statearr_21869[(1)] = (1));

return statearr_21869;
});
var state_machine__12256__auto____1 = (function (state_21855){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21870){if((e21870 instanceof Object)){
var ex__12259__auto__ = e21870;
var statearr_21871_21879 = state_21855;
(statearr_21871_21879[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21880 = state_21855;
state_21855 = G__21880;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21855){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_21872 = f__12312__auto__.call(null);
(statearr_21872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_21872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_21954){
var state_val_21955 = (state_21954[(1)]);
if((state_val_21955 === (7))){
var inst_21936 = (state_21954[(2)]);
var state_21954__$1 = state_21954;
var statearr_21956_21979 = state_21954__$1;
(statearr_21956_21979[(2)] = inst_21936);

(statearr_21956_21979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (1))){
var inst_21930 = cljs.core.seq.call(null,coll);
var inst_21931 = inst_21930;
var state_21954__$1 = (function (){var statearr_21957 = state_21954;
(statearr_21957[(7)] = inst_21931);

return statearr_21957;
})();
var statearr_21958_21980 = state_21954__$1;
(statearr_21958_21980[(2)] = null);

(statearr_21958_21980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (4))){
var inst_21931 = (state_21954[(7)]);
var inst_21934 = cljs.core.first.call(null,inst_21931);
var state_21954__$1 = state_21954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21954__$1,(7),ch,inst_21934);
} else {
if((state_val_21955 === (13))){
var inst_21948 = (state_21954[(2)]);
var state_21954__$1 = state_21954;
var statearr_21959_21981 = state_21954__$1;
(statearr_21959_21981[(2)] = inst_21948);

(statearr_21959_21981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (6))){
var inst_21939 = (state_21954[(2)]);
var state_21954__$1 = state_21954;
if(cljs.core.truth_(inst_21939)){
var statearr_21960_21982 = state_21954__$1;
(statearr_21960_21982[(1)] = (8));

} else {
var statearr_21961_21983 = state_21954__$1;
(statearr_21961_21983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (3))){
var inst_21952 = (state_21954[(2)]);
var state_21954__$1 = state_21954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21954__$1,inst_21952);
} else {
if((state_val_21955 === (12))){
var state_21954__$1 = state_21954;
var statearr_21962_21984 = state_21954__$1;
(statearr_21962_21984[(2)] = null);

(statearr_21962_21984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (2))){
var inst_21931 = (state_21954[(7)]);
var state_21954__$1 = state_21954;
if(cljs.core.truth_(inst_21931)){
var statearr_21963_21985 = state_21954__$1;
(statearr_21963_21985[(1)] = (4));

} else {
var statearr_21964_21986 = state_21954__$1;
(statearr_21964_21986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (11))){
var inst_21945 = cljs.core.async.close_BANG_.call(null,ch);
var state_21954__$1 = state_21954;
var statearr_21965_21987 = state_21954__$1;
(statearr_21965_21987[(2)] = inst_21945);

(statearr_21965_21987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (9))){
var state_21954__$1 = state_21954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21966_21988 = state_21954__$1;
(statearr_21966_21988[(1)] = (11));

} else {
var statearr_21967_21989 = state_21954__$1;
(statearr_21967_21989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (5))){
var inst_21931 = (state_21954[(7)]);
var state_21954__$1 = state_21954;
var statearr_21968_21990 = state_21954__$1;
(statearr_21968_21990[(2)] = inst_21931);

(statearr_21968_21990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (10))){
var inst_21950 = (state_21954[(2)]);
var state_21954__$1 = state_21954;
var statearr_21969_21991 = state_21954__$1;
(statearr_21969_21991[(2)] = inst_21950);

(statearr_21969_21991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21955 === (8))){
var inst_21931 = (state_21954[(7)]);
var inst_21941 = cljs.core.next.call(null,inst_21931);
var inst_21931__$1 = inst_21941;
var state_21954__$1 = (function (){var statearr_21970 = state_21954;
(statearr_21970[(7)] = inst_21931__$1);

return statearr_21970;
})();
var statearr_21971_21992 = state_21954__$1;
(statearr_21971_21992[(2)] = null);

(statearr_21971_21992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_21975 = [null,null,null,null,null,null,null,null];
(statearr_21975[(0)] = state_machine__12256__auto__);

(statearr_21975[(1)] = (1));

return statearr_21975;
});
var state_machine__12256__auto____1 = (function (state_21954){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_21954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e21976){if((e21976 instanceof Object)){
var ex__12259__auto__ = e21976;
var statearr_21977_21993 = state_21954;
(statearr_21977_21993[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21994 = state_21954;
state_21954 = G__21994;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_21954){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_21954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_21978 = f__12312__auto__.call(null);
(statearr_21978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_21978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj21996 = {};
return obj21996;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3610__auto__ = _;
if(and__3610__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4261__auto__ = (((_ == null))?null:_);
return (function (){var or__3622__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21998 = {};
return obj21998;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t22220 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22220 = (function (cs,ch,mult,meta22221){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22221 = meta22221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22220.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22220.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22220.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22220.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22222){
var self__ = this;
var _22222__$1 = this;
return self__.meta22221;
});})(cs))
;

cljs.core.async.t22220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22222,meta22221__$1){
var self__ = this;
var _22222__$1 = this;
return (new cljs.core.async.t22220(self__.cs,self__.ch,self__.mult,meta22221__$1));
});})(cs))
;

cljs.core.async.t22220.cljs$lang$type = true;

cljs.core.async.t22220.cljs$lang$ctorStr = "cljs.core.async/t22220";

cljs.core.async.t22220.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t22220");
});})(cs))
;

cljs.core.async.__GT_t22220 = ((function (cs){
return (function __GT_t22220(cs__$1,ch__$1,mult__$1,meta22221){
return (new cljs.core.async.t22220(cs__$1,ch__$1,mult__$1,meta22221));
});})(cs))
;

}

return (new cljs.core.async.t22220(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12311__auto___22441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___22441,cs,m,dchan,dctr,done){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___22441,cs,m,dchan,dctr,done){
return (function (state_22353){
var state_val_22354 = (state_22353[(1)]);
if((state_val_22354 === (7))){
var inst_22349 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22355_22442 = state_22353__$1;
(statearr_22355_22442[(2)] = inst_22349);

(statearr_22355_22442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (20))){
var inst_22254 = (state_22353[(7)]);
var inst_22264 = cljs.core.first.call(null,inst_22254);
var inst_22265 = cljs.core.nth.call(null,inst_22264,(0),null);
var inst_22266 = cljs.core.nth.call(null,inst_22264,(1),null);
var state_22353__$1 = (function (){var statearr_22356 = state_22353;
(statearr_22356[(8)] = inst_22265);

return statearr_22356;
})();
if(cljs.core.truth_(inst_22266)){
var statearr_22357_22443 = state_22353__$1;
(statearr_22357_22443[(1)] = (22));

} else {
var statearr_22358_22444 = state_22353__$1;
(statearr_22358_22444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (27))){
var inst_22296 = (state_22353[(9)]);
var inst_22301 = (state_22353[(10)]);
var inst_22225 = (state_22353[(11)]);
var inst_22294 = (state_22353[(12)]);
var inst_22301__$1 = cljs.core._nth.call(null,inst_22294,inst_22296);
var inst_22302 = cljs.core.async.put_BANG_.call(null,inst_22301__$1,inst_22225,done);
var state_22353__$1 = (function (){var statearr_22359 = state_22353;
(statearr_22359[(10)] = inst_22301__$1);

return statearr_22359;
})();
if(cljs.core.truth_(inst_22302)){
var statearr_22360_22445 = state_22353__$1;
(statearr_22360_22445[(1)] = (30));

} else {
var statearr_22361_22446 = state_22353__$1;
(statearr_22361_22446[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (1))){
var state_22353__$1 = state_22353;
var statearr_22362_22447 = state_22353__$1;
(statearr_22362_22447[(2)] = null);

(statearr_22362_22447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (24))){
var inst_22254 = (state_22353[(7)]);
var inst_22271 = (state_22353[(2)]);
var inst_22272 = cljs.core.next.call(null,inst_22254);
var inst_22234 = inst_22272;
var inst_22235 = null;
var inst_22236 = (0);
var inst_22237 = (0);
var state_22353__$1 = (function (){var statearr_22363 = state_22353;
(statearr_22363[(13)] = inst_22271);

(statearr_22363[(14)] = inst_22237);

(statearr_22363[(15)] = inst_22236);

(statearr_22363[(16)] = inst_22235);

(statearr_22363[(17)] = inst_22234);

return statearr_22363;
})();
var statearr_22364_22448 = state_22353__$1;
(statearr_22364_22448[(2)] = null);

(statearr_22364_22448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (39))){
var state_22353__$1 = state_22353;
var statearr_22368_22449 = state_22353__$1;
(statearr_22368_22449[(2)] = null);

(statearr_22368_22449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (4))){
var inst_22225 = (state_22353[(11)]);
var inst_22225__$1 = (state_22353[(2)]);
var inst_22226 = (inst_22225__$1 == null);
var state_22353__$1 = (function (){var statearr_22369 = state_22353;
(statearr_22369[(11)] = inst_22225__$1);

return statearr_22369;
})();
if(cljs.core.truth_(inst_22226)){
var statearr_22370_22450 = state_22353__$1;
(statearr_22370_22450[(1)] = (5));

} else {
var statearr_22371_22451 = state_22353__$1;
(statearr_22371_22451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (15))){
var inst_22237 = (state_22353[(14)]);
var inst_22236 = (state_22353[(15)]);
var inst_22235 = (state_22353[(16)]);
var inst_22234 = (state_22353[(17)]);
var inst_22250 = (state_22353[(2)]);
var inst_22251 = (inst_22237 + (1));
var tmp22365 = inst_22236;
var tmp22366 = inst_22235;
var tmp22367 = inst_22234;
var inst_22234__$1 = tmp22367;
var inst_22235__$1 = tmp22366;
var inst_22236__$1 = tmp22365;
var inst_22237__$1 = inst_22251;
var state_22353__$1 = (function (){var statearr_22372 = state_22353;
(statearr_22372[(14)] = inst_22237__$1);

(statearr_22372[(18)] = inst_22250);

(statearr_22372[(15)] = inst_22236__$1);

(statearr_22372[(16)] = inst_22235__$1);

(statearr_22372[(17)] = inst_22234__$1);

return statearr_22372;
})();
var statearr_22373_22452 = state_22353__$1;
(statearr_22373_22452[(2)] = null);

(statearr_22373_22452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (21))){
var inst_22275 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22377_22453 = state_22353__$1;
(statearr_22377_22453[(2)] = inst_22275);

(statearr_22377_22453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (31))){
var inst_22301 = (state_22353[(10)]);
var inst_22305 = done.call(null,null);
var inst_22306 = cljs.core.async.untap_STAR_.call(null,m,inst_22301);
var state_22353__$1 = (function (){var statearr_22378 = state_22353;
(statearr_22378[(19)] = inst_22305);

return statearr_22378;
})();
var statearr_22379_22454 = state_22353__$1;
(statearr_22379_22454[(2)] = inst_22306);

(statearr_22379_22454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (32))){
var inst_22293 = (state_22353[(20)]);
var inst_22296 = (state_22353[(9)]);
var inst_22294 = (state_22353[(12)]);
var inst_22295 = (state_22353[(21)]);
var inst_22308 = (state_22353[(2)]);
var inst_22309 = (inst_22296 + (1));
var tmp22374 = inst_22293;
var tmp22375 = inst_22294;
var tmp22376 = inst_22295;
var inst_22293__$1 = tmp22374;
var inst_22294__$1 = tmp22375;
var inst_22295__$1 = tmp22376;
var inst_22296__$1 = inst_22309;
var state_22353__$1 = (function (){var statearr_22380 = state_22353;
(statearr_22380[(20)] = inst_22293__$1);

(statearr_22380[(22)] = inst_22308);

(statearr_22380[(9)] = inst_22296__$1);

(statearr_22380[(12)] = inst_22294__$1);

(statearr_22380[(21)] = inst_22295__$1);

return statearr_22380;
})();
var statearr_22381_22455 = state_22353__$1;
(statearr_22381_22455[(2)] = null);

(statearr_22381_22455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (40))){
var inst_22321 = (state_22353[(23)]);
var inst_22325 = done.call(null,null);
var inst_22326 = cljs.core.async.untap_STAR_.call(null,m,inst_22321);
var state_22353__$1 = (function (){var statearr_22382 = state_22353;
(statearr_22382[(24)] = inst_22325);

return statearr_22382;
})();
var statearr_22383_22456 = state_22353__$1;
(statearr_22383_22456[(2)] = inst_22326);

(statearr_22383_22456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (33))){
var inst_22312 = (state_22353[(25)]);
var inst_22314 = cljs.core.chunked_seq_QMARK_.call(null,inst_22312);
var state_22353__$1 = state_22353;
if(inst_22314){
var statearr_22384_22457 = state_22353__$1;
(statearr_22384_22457[(1)] = (36));

} else {
var statearr_22385_22458 = state_22353__$1;
(statearr_22385_22458[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (13))){
var inst_22244 = (state_22353[(26)]);
var inst_22247 = cljs.core.async.close_BANG_.call(null,inst_22244);
var state_22353__$1 = state_22353;
var statearr_22386_22459 = state_22353__$1;
(statearr_22386_22459[(2)] = inst_22247);

(statearr_22386_22459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (22))){
var inst_22265 = (state_22353[(8)]);
var inst_22268 = cljs.core.async.close_BANG_.call(null,inst_22265);
var state_22353__$1 = state_22353;
var statearr_22387_22460 = state_22353__$1;
(statearr_22387_22460[(2)] = inst_22268);

(statearr_22387_22460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (36))){
var inst_22312 = (state_22353[(25)]);
var inst_22316 = cljs.core.chunk_first.call(null,inst_22312);
var inst_22317 = cljs.core.chunk_rest.call(null,inst_22312);
var inst_22318 = cljs.core.count.call(null,inst_22316);
var inst_22293 = inst_22317;
var inst_22294 = inst_22316;
var inst_22295 = inst_22318;
var inst_22296 = (0);
var state_22353__$1 = (function (){var statearr_22388 = state_22353;
(statearr_22388[(20)] = inst_22293);

(statearr_22388[(9)] = inst_22296);

(statearr_22388[(12)] = inst_22294);

(statearr_22388[(21)] = inst_22295);

return statearr_22388;
})();
var statearr_22389_22461 = state_22353__$1;
(statearr_22389_22461[(2)] = null);

(statearr_22389_22461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (41))){
var inst_22312 = (state_22353[(25)]);
var inst_22328 = (state_22353[(2)]);
var inst_22329 = cljs.core.next.call(null,inst_22312);
var inst_22293 = inst_22329;
var inst_22294 = null;
var inst_22295 = (0);
var inst_22296 = (0);
var state_22353__$1 = (function (){var statearr_22390 = state_22353;
(statearr_22390[(20)] = inst_22293);

(statearr_22390[(9)] = inst_22296);

(statearr_22390[(12)] = inst_22294);

(statearr_22390[(27)] = inst_22328);

(statearr_22390[(21)] = inst_22295);

return statearr_22390;
})();
var statearr_22391_22462 = state_22353__$1;
(statearr_22391_22462[(2)] = null);

(statearr_22391_22462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (43))){
var state_22353__$1 = state_22353;
var statearr_22392_22463 = state_22353__$1;
(statearr_22392_22463[(2)] = null);

(statearr_22392_22463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (29))){
var inst_22337 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22393_22464 = state_22353__$1;
(statearr_22393_22464[(2)] = inst_22337);

(statearr_22393_22464[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (44))){
var inst_22346 = (state_22353[(2)]);
var state_22353__$1 = (function (){var statearr_22394 = state_22353;
(statearr_22394[(28)] = inst_22346);

return statearr_22394;
})();
var statearr_22395_22465 = state_22353__$1;
(statearr_22395_22465[(2)] = null);

(statearr_22395_22465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (6))){
var inst_22285 = (state_22353[(29)]);
var inst_22284 = cljs.core.deref.call(null,cs);
var inst_22285__$1 = cljs.core.keys.call(null,inst_22284);
var inst_22286 = cljs.core.count.call(null,inst_22285__$1);
var inst_22287 = cljs.core.reset_BANG_.call(null,dctr,inst_22286);
var inst_22292 = cljs.core.seq.call(null,inst_22285__$1);
var inst_22293 = inst_22292;
var inst_22294 = null;
var inst_22295 = (0);
var inst_22296 = (0);
var state_22353__$1 = (function (){var statearr_22396 = state_22353;
(statearr_22396[(20)] = inst_22293);

(statearr_22396[(29)] = inst_22285__$1);

(statearr_22396[(30)] = inst_22287);

(statearr_22396[(9)] = inst_22296);

(statearr_22396[(12)] = inst_22294);

(statearr_22396[(21)] = inst_22295);

return statearr_22396;
})();
var statearr_22397_22466 = state_22353__$1;
(statearr_22397_22466[(2)] = null);

(statearr_22397_22466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (28))){
var inst_22293 = (state_22353[(20)]);
var inst_22312 = (state_22353[(25)]);
var inst_22312__$1 = cljs.core.seq.call(null,inst_22293);
var state_22353__$1 = (function (){var statearr_22398 = state_22353;
(statearr_22398[(25)] = inst_22312__$1);

return statearr_22398;
})();
if(inst_22312__$1){
var statearr_22399_22467 = state_22353__$1;
(statearr_22399_22467[(1)] = (33));

} else {
var statearr_22400_22468 = state_22353__$1;
(statearr_22400_22468[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (25))){
var inst_22296 = (state_22353[(9)]);
var inst_22295 = (state_22353[(21)]);
var inst_22298 = (inst_22296 < inst_22295);
var inst_22299 = inst_22298;
var state_22353__$1 = state_22353;
if(cljs.core.truth_(inst_22299)){
var statearr_22401_22469 = state_22353__$1;
(statearr_22401_22469[(1)] = (27));

} else {
var statearr_22402_22470 = state_22353__$1;
(statearr_22402_22470[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (34))){
var state_22353__$1 = state_22353;
var statearr_22403_22471 = state_22353__$1;
(statearr_22403_22471[(2)] = null);

(statearr_22403_22471[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (17))){
var state_22353__$1 = state_22353;
var statearr_22404_22472 = state_22353__$1;
(statearr_22404_22472[(2)] = null);

(statearr_22404_22472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (3))){
var inst_22351 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22353__$1,inst_22351);
} else {
if((state_val_22354 === (12))){
var inst_22280 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22405_22473 = state_22353__$1;
(statearr_22405_22473[(2)] = inst_22280);

(statearr_22405_22473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (2))){
var state_22353__$1 = state_22353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22353__$1,(4),ch);
} else {
if((state_val_22354 === (23))){
var state_22353__$1 = state_22353;
var statearr_22406_22474 = state_22353__$1;
(statearr_22406_22474[(2)] = null);

(statearr_22406_22474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (35))){
var inst_22335 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22407_22475 = state_22353__$1;
(statearr_22407_22475[(2)] = inst_22335);

(statearr_22407_22475[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (19))){
var inst_22254 = (state_22353[(7)]);
var inst_22258 = cljs.core.chunk_first.call(null,inst_22254);
var inst_22259 = cljs.core.chunk_rest.call(null,inst_22254);
var inst_22260 = cljs.core.count.call(null,inst_22258);
var inst_22234 = inst_22259;
var inst_22235 = inst_22258;
var inst_22236 = inst_22260;
var inst_22237 = (0);
var state_22353__$1 = (function (){var statearr_22408 = state_22353;
(statearr_22408[(14)] = inst_22237);

(statearr_22408[(15)] = inst_22236);

(statearr_22408[(16)] = inst_22235);

(statearr_22408[(17)] = inst_22234);

return statearr_22408;
})();
var statearr_22409_22476 = state_22353__$1;
(statearr_22409_22476[(2)] = null);

(statearr_22409_22476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (11))){
var inst_22254 = (state_22353[(7)]);
var inst_22234 = (state_22353[(17)]);
var inst_22254__$1 = cljs.core.seq.call(null,inst_22234);
var state_22353__$1 = (function (){var statearr_22410 = state_22353;
(statearr_22410[(7)] = inst_22254__$1);

return statearr_22410;
})();
if(inst_22254__$1){
var statearr_22411_22477 = state_22353__$1;
(statearr_22411_22477[(1)] = (16));

} else {
var statearr_22412_22478 = state_22353__$1;
(statearr_22412_22478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (9))){
var inst_22282 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22413_22479 = state_22353__$1;
(statearr_22413_22479[(2)] = inst_22282);

(statearr_22413_22479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (5))){
var inst_22232 = cljs.core.deref.call(null,cs);
var inst_22233 = cljs.core.seq.call(null,inst_22232);
var inst_22234 = inst_22233;
var inst_22235 = null;
var inst_22236 = (0);
var inst_22237 = (0);
var state_22353__$1 = (function (){var statearr_22414 = state_22353;
(statearr_22414[(14)] = inst_22237);

(statearr_22414[(15)] = inst_22236);

(statearr_22414[(16)] = inst_22235);

(statearr_22414[(17)] = inst_22234);

return statearr_22414;
})();
var statearr_22415_22480 = state_22353__$1;
(statearr_22415_22480[(2)] = null);

(statearr_22415_22480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (14))){
var state_22353__$1 = state_22353;
var statearr_22416_22481 = state_22353__$1;
(statearr_22416_22481[(2)] = null);

(statearr_22416_22481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (45))){
var inst_22343 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22417_22482 = state_22353__$1;
(statearr_22417_22482[(2)] = inst_22343);

(statearr_22417_22482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (26))){
var inst_22285 = (state_22353[(29)]);
var inst_22339 = (state_22353[(2)]);
var inst_22340 = cljs.core.seq.call(null,inst_22285);
var state_22353__$1 = (function (){var statearr_22418 = state_22353;
(statearr_22418[(31)] = inst_22339);

return statearr_22418;
})();
if(inst_22340){
var statearr_22419_22483 = state_22353__$1;
(statearr_22419_22483[(1)] = (42));

} else {
var statearr_22420_22484 = state_22353__$1;
(statearr_22420_22484[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (16))){
var inst_22254 = (state_22353[(7)]);
var inst_22256 = cljs.core.chunked_seq_QMARK_.call(null,inst_22254);
var state_22353__$1 = state_22353;
if(inst_22256){
var statearr_22421_22485 = state_22353__$1;
(statearr_22421_22485[(1)] = (19));

} else {
var statearr_22422_22486 = state_22353__$1;
(statearr_22422_22486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (38))){
var inst_22332 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22423_22487 = state_22353__$1;
(statearr_22423_22487[(2)] = inst_22332);

(statearr_22423_22487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (30))){
var state_22353__$1 = state_22353;
var statearr_22424_22488 = state_22353__$1;
(statearr_22424_22488[(2)] = null);

(statearr_22424_22488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (10))){
var inst_22237 = (state_22353[(14)]);
var inst_22235 = (state_22353[(16)]);
var inst_22243 = cljs.core._nth.call(null,inst_22235,inst_22237);
var inst_22244 = cljs.core.nth.call(null,inst_22243,(0),null);
var inst_22245 = cljs.core.nth.call(null,inst_22243,(1),null);
var state_22353__$1 = (function (){var statearr_22425 = state_22353;
(statearr_22425[(26)] = inst_22244);

return statearr_22425;
})();
if(cljs.core.truth_(inst_22245)){
var statearr_22426_22489 = state_22353__$1;
(statearr_22426_22489[(1)] = (13));

} else {
var statearr_22427_22490 = state_22353__$1;
(statearr_22427_22490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (18))){
var inst_22278 = (state_22353[(2)]);
var state_22353__$1 = state_22353;
var statearr_22428_22491 = state_22353__$1;
(statearr_22428_22491[(2)] = inst_22278);

(statearr_22428_22491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (42))){
var state_22353__$1 = state_22353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22353__$1,(45),dchan);
} else {
if((state_val_22354 === (37))){
var inst_22312 = (state_22353[(25)]);
var inst_22225 = (state_22353[(11)]);
var inst_22321 = (state_22353[(23)]);
var inst_22321__$1 = cljs.core.first.call(null,inst_22312);
var inst_22322 = cljs.core.async.put_BANG_.call(null,inst_22321__$1,inst_22225,done);
var state_22353__$1 = (function (){var statearr_22429 = state_22353;
(statearr_22429[(23)] = inst_22321__$1);

return statearr_22429;
})();
if(cljs.core.truth_(inst_22322)){
var statearr_22430_22492 = state_22353__$1;
(statearr_22430_22492[(1)] = (39));

} else {
var statearr_22431_22493 = state_22353__$1;
(statearr_22431_22493[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22354 === (8))){
var inst_22237 = (state_22353[(14)]);
var inst_22236 = (state_22353[(15)]);
var inst_22239 = (inst_22237 < inst_22236);
var inst_22240 = inst_22239;
var state_22353__$1 = state_22353;
if(cljs.core.truth_(inst_22240)){
var statearr_22432_22494 = state_22353__$1;
(statearr_22432_22494[(1)] = (10));

} else {
var statearr_22433_22495 = state_22353__$1;
(statearr_22433_22495[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___22441,cs,m,dchan,dctr,done))
;
return ((function (switch__12255__auto__,c__12311__auto___22441,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_22437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22437[(0)] = state_machine__12256__auto__);

(statearr_22437[(1)] = (1));

return statearr_22437;
});
var state_machine__12256__auto____1 = (function (state_22353){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_22353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e22438){if((e22438 instanceof Object)){
var ex__12259__auto__ = e22438;
var statearr_22439_22496 = state_22353;
(statearr_22439_22496[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22497 = state_22353;
state_22353 = G__22497;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_22353){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_22353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___22441,cs,m,dchan,dctr,done))
})();
var state__12313__auto__ = (function (){var statearr_22440 = f__12312__auto__.call(null);
(statearr_22440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___22441);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___22441,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj22499 = {};
return obj22499;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3610__auto__ = m;
if(and__3610__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4261__auto__ = (((m == null))?null:m);
return (function (){var or__3622__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22500){
var map__22505 = p__22500;
var map__22505__$1 = ((cljs.core.seq_QMARK_.call(null,map__22505))?cljs.core.apply.call(null,cljs.core.hash_map,map__22505):map__22505);
var opts = map__22505__$1;
var statearr_22506_22509 = state;
(statearr_22506_22509[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__22505,map__22505__$1,opts){
return (function (val){
var statearr_22507_22510 = state;
(statearr_22507_22510[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22505,map__22505__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4388__auto__)){
var cb = temp__4388__auto__;
var statearr_22508_22511 = state;
(statearr_22508_22511[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22500 = null;
if (arguments.length > 3) {
  p__22500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22500);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22512){
var state = cljs.core.first(arglist__22512);
arglist__22512 = cljs.core.next(arglist__22512);
var cont_block = cljs.core.first(arglist__22512);
arglist__22512 = cljs.core.next(arglist__22512);
var ports = cljs.core.first(arglist__22512);
var p__22500 = cljs.core.rest(arglist__22512);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22500);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22632 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22632 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22633){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22633 = meta22633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22632.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22632.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22634){
var self__ = this;
var _22634__$1 = this;
return self__.meta22633;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22634,meta22633__$1){
var self__ = this;
var _22634__$1 = this;
return (new cljs.core.async.t22632(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22633__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22632.cljs$lang$type = true;

cljs.core.async.t22632.cljs$lang$ctorStr = "cljs.core.async/t22632";

cljs.core.async.t22632.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t22632");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22632 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22632(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22633){
return (new cljs.core.async.t22632(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22633));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22632(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
})()
;
var c__12311__auto___22751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22704){
var state_val_22705 = (state_22704[(1)]);
if((state_val_22705 === (7))){
var inst_22648 = (state_22704[(7)]);
var inst_22653 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22648);
var state_22704__$1 = state_22704;
var statearr_22706_22752 = state_22704__$1;
(statearr_22706_22752[(2)] = inst_22653);

(statearr_22706_22752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (20))){
var inst_22663 = (state_22704[(8)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22704__$1,(23),out,inst_22663);
} else {
if((state_val_22705 === (1))){
var inst_22638 = (state_22704[(9)]);
var inst_22638__$1 = calc_state.call(null);
var inst_22639 = cljs.core.seq_QMARK_.call(null,inst_22638__$1);
var state_22704__$1 = (function (){var statearr_22707 = state_22704;
(statearr_22707[(9)] = inst_22638__$1);

return statearr_22707;
})();
if(inst_22639){
var statearr_22708_22753 = state_22704__$1;
(statearr_22708_22753[(1)] = (2));

} else {
var statearr_22709_22754 = state_22704__$1;
(statearr_22709_22754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (24))){
var inst_22656 = (state_22704[(10)]);
var inst_22648 = inst_22656;
var state_22704__$1 = (function (){var statearr_22710 = state_22704;
(statearr_22710[(7)] = inst_22648);

return statearr_22710;
})();
var statearr_22711_22755 = state_22704__$1;
(statearr_22711_22755[(2)] = null);

(statearr_22711_22755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (4))){
var inst_22638 = (state_22704[(9)]);
var inst_22644 = (state_22704[(2)]);
var inst_22645 = cljs.core.get.call(null,inst_22644,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22646 = cljs.core.get.call(null,inst_22644,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22647 = cljs.core.get.call(null,inst_22644,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22648 = inst_22638;
var state_22704__$1 = (function (){var statearr_22712 = state_22704;
(statearr_22712[(11)] = inst_22646);

(statearr_22712[(12)] = inst_22647);

(statearr_22712[(7)] = inst_22648);

(statearr_22712[(13)] = inst_22645);

return statearr_22712;
})();
var statearr_22713_22756 = state_22704__$1;
(statearr_22713_22756[(2)] = null);

(statearr_22713_22756[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (15))){
var state_22704__$1 = state_22704;
var statearr_22714_22757 = state_22704__$1;
(statearr_22714_22757[(2)] = null);

(statearr_22714_22757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (21))){
var inst_22656 = (state_22704[(10)]);
var inst_22648 = inst_22656;
var state_22704__$1 = (function (){var statearr_22715 = state_22704;
(statearr_22715[(7)] = inst_22648);

return statearr_22715;
})();
var statearr_22716_22758 = state_22704__$1;
(statearr_22716_22758[(2)] = null);

(statearr_22716_22758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (13))){
var inst_22700 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22717_22759 = state_22704__$1;
(statearr_22717_22759[(2)] = inst_22700);

(statearr_22717_22759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (22))){
var inst_22698 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22718_22760 = state_22704__$1;
(statearr_22718_22760[(2)] = inst_22698);

(statearr_22718_22760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (6))){
var inst_22702 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22704__$1,inst_22702);
} else {
if((state_val_22705 === (25))){
var state_22704__$1 = state_22704;
var statearr_22719_22761 = state_22704__$1;
(statearr_22719_22761[(2)] = null);

(statearr_22719_22761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (17))){
var inst_22678 = (state_22704[(14)]);
var state_22704__$1 = state_22704;
var statearr_22720_22762 = state_22704__$1;
(statearr_22720_22762[(2)] = inst_22678);

(statearr_22720_22762[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (3))){
var inst_22638 = (state_22704[(9)]);
var state_22704__$1 = state_22704;
var statearr_22721_22763 = state_22704__$1;
(statearr_22721_22763[(2)] = inst_22638);

(statearr_22721_22763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (12))){
var inst_22659 = (state_22704[(15)]);
var inst_22678 = (state_22704[(14)]);
var inst_22664 = (state_22704[(16)]);
var inst_22678__$1 = inst_22659.call(null,inst_22664);
var state_22704__$1 = (function (){var statearr_22722 = state_22704;
(statearr_22722[(14)] = inst_22678__$1);

return statearr_22722;
})();
if(cljs.core.truth_(inst_22678__$1)){
var statearr_22723_22764 = state_22704__$1;
(statearr_22723_22764[(1)] = (17));

} else {
var statearr_22724_22765 = state_22704__$1;
(statearr_22724_22765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (2))){
var inst_22638 = (state_22704[(9)]);
var inst_22641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22638);
var state_22704__$1 = state_22704;
var statearr_22725_22766 = state_22704__$1;
(statearr_22725_22766[(2)] = inst_22641);

(statearr_22725_22766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (23))){
var inst_22689 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22689)){
var statearr_22726_22767 = state_22704__$1;
(statearr_22726_22767[(1)] = (24));

} else {
var statearr_22727_22768 = state_22704__$1;
(statearr_22727_22768[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (19))){
var inst_22686 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22686)){
var statearr_22728_22769 = state_22704__$1;
(statearr_22728_22769[(1)] = (20));

} else {
var statearr_22729_22770 = state_22704__$1;
(statearr_22729_22770[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (11))){
var inst_22663 = (state_22704[(8)]);
var inst_22669 = (inst_22663 == null);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22669)){
var statearr_22730_22771 = state_22704__$1;
(statearr_22730_22771[(1)] = (14));

} else {
var statearr_22731_22772 = state_22704__$1;
(statearr_22731_22772[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (9))){
var inst_22656 = (state_22704[(10)]);
var inst_22656__$1 = (state_22704[(2)]);
var inst_22657 = cljs.core.get.call(null,inst_22656__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22658 = cljs.core.get.call(null,inst_22656__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22659 = cljs.core.get.call(null,inst_22656__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_22704__$1 = (function (){var statearr_22732 = state_22704;
(statearr_22732[(15)] = inst_22659);

(statearr_22732[(10)] = inst_22656__$1);

(statearr_22732[(17)] = inst_22658);

return statearr_22732;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22704__$1,(10),inst_22657);
} else {
if((state_val_22705 === (5))){
var inst_22648 = (state_22704[(7)]);
var inst_22651 = cljs.core.seq_QMARK_.call(null,inst_22648);
var state_22704__$1 = state_22704;
if(inst_22651){
var statearr_22733_22773 = state_22704__$1;
(statearr_22733_22773[(1)] = (7));

} else {
var statearr_22734_22774 = state_22704__$1;
(statearr_22734_22774[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (14))){
var inst_22664 = (state_22704[(16)]);
var inst_22671 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22664);
var state_22704__$1 = state_22704;
var statearr_22735_22775 = state_22704__$1;
(statearr_22735_22775[(2)] = inst_22671);

(statearr_22735_22775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (26))){
var inst_22694 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22736_22776 = state_22704__$1;
(statearr_22736_22776[(2)] = inst_22694);

(statearr_22736_22776[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (16))){
var inst_22674 = (state_22704[(2)]);
var inst_22675 = calc_state.call(null);
var inst_22648 = inst_22675;
var state_22704__$1 = (function (){var statearr_22737 = state_22704;
(statearr_22737[(18)] = inst_22674);

(statearr_22737[(7)] = inst_22648);

return statearr_22737;
})();
var statearr_22738_22777 = state_22704__$1;
(statearr_22738_22777[(2)] = null);

(statearr_22738_22777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (10))){
var inst_22664 = (state_22704[(16)]);
var inst_22663 = (state_22704[(8)]);
var inst_22662 = (state_22704[(2)]);
var inst_22663__$1 = cljs.core.nth.call(null,inst_22662,(0),null);
var inst_22664__$1 = cljs.core.nth.call(null,inst_22662,(1),null);
var inst_22665 = (inst_22663__$1 == null);
var inst_22666 = cljs.core._EQ_.call(null,inst_22664__$1,change);
var inst_22667 = (inst_22665) || (inst_22666);
var state_22704__$1 = (function (){var statearr_22739 = state_22704;
(statearr_22739[(16)] = inst_22664__$1);

(statearr_22739[(8)] = inst_22663__$1);

return statearr_22739;
})();
if(cljs.core.truth_(inst_22667)){
var statearr_22740_22778 = state_22704__$1;
(statearr_22740_22778[(1)] = (11));

} else {
var statearr_22741_22779 = state_22704__$1;
(statearr_22741_22779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (18))){
var inst_22659 = (state_22704[(15)]);
var inst_22664 = (state_22704[(16)]);
var inst_22658 = (state_22704[(17)]);
var inst_22681 = cljs.core.empty_QMARK_.call(null,inst_22659);
var inst_22682 = inst_22658.call(null,inst_22664);
var inst_22683 = cljs.core.not.call(null,inst_22682);
var inst_22684 = (inst_22681) && (inst_22683);
var state_22704__$1 = state_22704;
var statearr_22742_22780 = state_22704__$1;
(statearr_22742_22780[(2)] = inst_22684);

(statearr_22742_22780[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (8))){
var inst_22648 = (state_22704[(7)]);
var state_22704__$1 = state_22704;
var statearr_22743_22781 = state_22704__$1;
(statearr_22743_22781[(2)] = inst_22648);

(statearr_22743_22781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12255__auto__,c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_22747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22747[(0)] = state_machine__12256__auto__);

(statearr_22747[(1)] = (1));

return statearr_22747;
});
var state_machine__12256__auto____1 = (function (state_22704){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_22704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e22748){if((e22748 instanceof Object)){
var ex__12259__auto__ = e22748;
var statearr_22749_22782 = state_22704;
(statearr_22749_22782[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22783 = state_22704;
state_22704 = G__22783;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_22704){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_22704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12313__auto__ = (function (){var statearr_22750 = f__12312__auto__.call(null);
(statearr_22750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___22751);

return statearr_22750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___22751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj22785 = {};
return obj22785;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4261__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4261__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4261__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3610__auto__ = p;
if(and__3610__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3610__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4261__auto__ = (((p == null))?null:p);
return (function (){var or__3622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4261__auto__)]);
if(or__3622__auto__){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3622__auto____$1){
return or__3622__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3622__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3622__auto__,mults){
return (function (p1__22786_SHARP_){
if(cljs.core.truth_(p1__22786_SHARP_.call(null,topic))){
return p1__22786_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22786_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3622__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22909 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22909 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22910){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22910 = meta22910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22909.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22909.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4388__auto__)){
var m = temp__4388__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22911){
var self__ = this;
var _22911__$1 = this;
return self__.meta22910;
});})(mults,ensure_mult))
;

cljs.core.async.t22909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22911,meta22910__$1){
var self__ = this;
var _22911__$1 = this;
return (new cljs.core.async.t22909(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22910__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22909.cljs$lang$type = true;

cljs.core.async.t22909.cljs$lang$ctorStr = "cljs.core.async/t22909";

cljs.core.async.t22909.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t22909");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22909 = ((function (mults,ensure_mult){
return (function __GT_t22909(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22910){
return (new cljs.core.async.t22909(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22910));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22909(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
})()
;
var c__12311__auto___23031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23031,mults,ensure_mult,p){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23031,mults,ensure_mult,p){
return (function (state_22983){
var state_val_22984 = (state_22983[(1)]);
if((state_val_22984 === (7))){
var inst_22979 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_22985_23032 = state_22983__$1;
(statearr_22985_23032[(2)] = inst_22979);

(statearr_22985_23032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (20))){
var state_22983__$1 = state_22983;
var statearr_22986_23033 = state_22983__$1;
(statearr_22986_23033[(2)] = null);

(statearr_22986_23033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (1))){
var state_22983__$1 = state_22983;
var statearr_22987_23034 = state_22983__$1;
(statearr_22987_23034[(2)] = null);

(statearr_22987_23034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (24))){
var inst_22962 = (state_22983[(7)]);
var inst_22971 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22962);
var state_22983__$1 = state_22983;
var statearr_22988_23035 = state_22983__$1;
(statearr_22988_23035[(2)] = inst_22971);

(statearr_22988_23035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (4))){
var inst_22914 = (state_22983[(8)]);
var inst_22914__$1 = (state_22983[(2)]);
var inst_22915 = (inst_22914__$1 == null);
var state_22983__$1 = (function (){var statearr_22989 = state_22983;
(statearr_22989[(8)] = inst_22914__$1);

return statearr_22989;
})();
if(cljs.core.truth_(inst_22915)){
var statearr_22990_23036 = state_22983__$1;
(statearr_22990_23036[(1)] = (5));

} else {
var statearr_22991_23037 = state_22983__$1;
(statearr_22991_23037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (15))){
var inst_22956 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_22992_23038 = state_22983__$1;
(statearr_22992_23038[(2)] = inst_22956);

(statearr_22992_23038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (21))){
var inst_22976 = (state_22983[(2)]);
var state_22983__$1 = (function (){var statearr_22993 = state_22983;
(statearr_22993[(9)] = inst_22976);

return statearr_22993;
})();
var statearr_22994_23039 = state_22983__$1;
(statearr_22994_23039[(2)] = null);

(statearr_22994_23039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (13))){
var inst_22938 = (state_22983[(10)]);
var inst_22940 = cljs.core.chunked_seq_QMARK_.call(null,inst_22938);
var state_22983__$1 = state_22983;
if(inst_22940){
var statearr_22995_23040 = state_22983__$1;
(statearr_22995_23040[(1)] = (16));

} else {
var statearr_22996_23041 = state_22983__$1;
(statearr_22996_23041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (22))){
var inst_22968 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
if(cljs.core.truth_(inst_22968)){
var statearr_22997_23042 = state_22983__$1;
(statearr_22997_23042[(1)] = (23));

} else {
var statearr_22998_23043 = state_22983__$1;
(statearr_22998_23043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (6))){
var inst_22914 = (state_22983[(8)]);
var inst_22962 = (state_22983[(7)]);
var inst_22964 = (state_22983[(11)]);
var inst_22962__$1 = topic_fn.call(null,inst_22914);
var inst_22963 = cljs.core.deref.call(null,mults);
var inst_22964__$1 = cljs.core.get.call(null,inst_22963,inst_22962__$1);
var state_22983__$1 = (function (){var statearr_22999 = state_22983;
(statearr_22999[(7)] = inst_22962__$1);

(statearr_22999[(11)] = inst_22964__$1);

return statearr_22999;
})();
if(cljs.core.truth_(inst_22964__$1)){
var statearr_23000_23044 = state_22983__$1;
(statearr_23000_23044[(1)] = (19));

} else {
var statearr_23001_23045 = state_22983__$1;
(statearr_23001_23045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (25))){
var inst_22973 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_23002_23046 = state_22983__$1;
(statearr_23002_23046[(2)] = inst_22973);

(statearr_23002_23046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (17))){
var inst_22938 = (state_22983[(10)]);
var inst_22947 = cljs.core.first.call(null,inst_22938);
var inst_22948 = cljs.core.async.muxch_STAR_.call(null,inst_22947);
var inst_22949 = cljs.core.async.close_BANG_.call(null,inst_22948);
var inst_22950 = cljs.core.next.call(null,inst_22938);
var inst_22924 = inst_22950;
var inst_22925 = null;
var inst_22926 = (0);
var inst_22927 = (0);
var state_22983__$1 = (function (){var statearr_23003 = state_22983;
(statearr_23003[(12)] = inst_22925);

(statearr_23003[(13)] = inst_22926);

(statearr_23003[(14)] = inst_22927);

(statearr_23003[(15)] = inst_22924);

(statearr_23003[(16)] = inst_22949);

return statearr_23003;
})();
var statearr_23004_23047 = state_22983__$1;
(statearr_23004_23047[(2)] = null);

(statearr_23004_23047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (3))){
var inst_22981 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22983__$1,inst_22981);
} else {
if((state_val_22984 === (12))){
var inst_22958 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_23005_23048 = state_22983__$1;
(statearr_23005_23048[(2)] = inst_22958);

(statearr_23005_23048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (2))){
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22983__$1,(4),ch);
} else {
if((state_val_22984 === (23))){
var state_22983__$1 = state_22983;
var statearr_23006_23049 = state_22983__$1;
(statearr_23006_23049[(2)] = null);

(statearr_23006_23049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (19))){
var inst_22914 = (state_22983[(8)]);
var inst_22964 = (state_22983[(11)]);
var inst_22966 = cljs.core.async.muxch_STAR_.call(null,inst_22964);
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22983__$1,(22),inst_22966,inst_22914);
} else {
if((state_val_22984 === (11))){
var inst_22938 = (state_22983[(10)]);
var inst_22924 = (state_22983[(15)]);
var inst_22938__$1 = cljs.core.seq.call(null,inst_22924);
var state_22983__$1 = (function (){var statearr_23007 = state_22983;
(statearr_23007[(10)] = inst_22938__$1);

return statearr_23007;
})();
if(inst_22938__$1){
var statearr_23008_23050 = state_22983__$1;
(statearr_23008_23050[(1)] = (13));

} else {
var statearr_23009_23051 = state_22983__$1;
(statearr_23009_23051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (9))){
var inst_22960 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_23010_23052 = state_22983__$1;
(statearr_23010_23052[(2)] = inst_22960);

(statearr_23010_23052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (5))){
var inst_22921 = cljs.core.deref.call(null,mults);
var inst_22922 = cljs.core.vals.call(null,inst_22921);
var inst_22923 = cljs.core.seq.call(null,inst_22922);
var inst_22924 = inst_22923;
var inst_22925 = null;
var inst_22926 = (0);
var inst_22927 = (0);
var state_22983__$1 = (function (){var statearr_23011 = state_22983;
(statearr_23011[(12)] = inst_22925);

(statearr_23011[(13)] = inst_22926);

(statearr_23011[(14)] = inst_22927);

(statearr_23011[(15)] = inst_22924);

return statearr_23011;
})();
var statearr_23012_23053 = state_22983__$1;
(statearr_23012_23053[(2)] = null);

(statearr_23012_23053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (14))){
var state_22983__$1 = state_22983;
var statearr_23016_23054 = state_22983__$1;
(statearr_23016_23054[(2)] = null);

(statearr_23016_23054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (16))){
var inst_22938 = (state_22983[(10)]);
var inst_22942 = cljs.core.chunk_first.call(null,inst_22938);
var inst_22943 = cljs.core.chunk_rest.call(null,inst_22938);
var inst_22944 = cljs.core.count.call(null,inst_22942);
var inst_22924 = inst_22943;
var inst_22925 = inst_22942;
var inst_22926 = inst_22944;
var inst_22927 = (0);
var state_22983__$1 = (function (){var statearr_23017 = state_22983;
(statearr_23017[(12)] = inst_22925);

(statearr_23017[(13)] = inst_22926);

(statearr_23017[(14)] = inst_22927);

(statearr_23017[(15)] = inst_22924);

return statearr_23017;
})();
var statearr_23018_23055 = state_22983__$1;
(statearr_23018_23055[(2)] = null);

(statearr_23018_23055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (10))){
var inst_22925 = (state_22983[(12)]);
var inst_22926 = (state_22983[(13)]);
var inst_22927 = (state_22983[(14)]);
var inst_22924 = (state_22983[(15)]);
var inst_22932 = cljs.core._nth.call(null,inst_22925,inst_22927);
var inst_22933 = cljs.core.async.muxch_STAR_.call(null,inst_22932);
var inst_22934 = cljs.core.async.close_BANG_.call(null,inst_22933);
var inst_22935 = (inst_22927 + (1));
var tmp23013 = inst_22925;
var tmp23014 = inst_22926;
var tmp23015 = inst_22924;
var inst_22924__$1 = tmp23015;
var inst_22925__$1 = tmp23013;
var inst_22926__$1 = tmp23014;
var inst_22927__$1 = inst_22935;
var state_22983__$1 = (function (){var statearr_23019 = state_22983;
(statearr_23019[(17)] = inst_22934);

(statearr_23019[(12)] = inst_22925__$1);

(statearr_23019[(13)] = inst_22926__$1);

(statearr_23019[(14)] = inst_22927__$1);

(statearr_23019[(15)] = inst_22924__$1);

return statearr_23019;
})();
var statearr_23020_23056 = state_22983__$1;
(statearr_23020_23056[(2)] = null);

(statearr_23020_23056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (18))){
var inst_22953 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_23021_23057 = state_22983__$1;
(statearr_23021_23057[(2)] = inst_22953);

(statearr_23021_23057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (8))){
var inst_22926 = (state_22983[(13)]);
var inst_22927 = (state_22983[(14)]);
var inst_22929 = (inst_22927 < inst_22926);
var inst_22930 = inst_22929;
var state_22983__$1 = state_22983;
if(cljs.core.truth_(inst_22930)){
var statearr_23022_23058 = state_22983__$1;
(statearr_23022_23058[(1)] = (10));

} else {
var statearr_23023_23059 = state_22983__$1;
(statearr_23023_23059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23031,mults,ensure_mult,p))
;
return ((function (switch__12255__auto__,c__12311__auto___23031,mults,ensure_mult,p){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23027[(0)] = state_machine__12256__auto__);

(statearr_23027[(1)] = (1));

return statearr_23027;
});
var state_machine__12256__auto____1 = (function (state_22983){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_22983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23028){if((e23028 instanceof Object)){
var ex__12259__auto__ = e23028;
var statearr_23029_23060 = state_22983;
(statearr_23029_23060[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23061 = state_22983;
state_22983 = G__23061;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_22983){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_22983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23031,mults,ensure_mult,p))
})();
var state__12313__auto__ = (function (){var statearr_23030 = f__12312__auto__.call(null);
(statearr_23030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23031);

return statearr_23030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23031,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12311__auto___23198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23168){
var state_val_23169 = (state_23168[(1)]);
if((state_val_23169 === (7))){
var state_23168__$1 = state_23168;
var statearr_23170_23199 = state_23168__$1;
(statearr_23170_23199[(2)] = null);

(statearr_23170_23199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (1))){
var state_23168__$1 = state_23168;
var statearr_23171_23200 = state_23168__$1;
(statearr_23171_23200[(2)] = null);

(statearr_23171_23200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (4))){
var inst_23132 = (state_23168[(7)]);
var inst_23134 = (inst_23132 < cnt);
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23134)){
var statearr_23172_23201 = state_23168__$1;
(statearr_23172_23201[(1)] = (6));

} else {
var statearr_23173_23202 = state_23168__$1;
(statearr_23173_23202[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (15))){
var inst_23164 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23174_23203 = state_23168__$1;
(statearr_23174_23203[(2)] = inst_23164);

(statearr_23174_23203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (13))){
var inst_23157 = cljs.core.async.close_BANG_.call(null,out);
var state_23168__$1 = state_23168;
var statearr_23175_23204 = state_23168__$1;
(statearr_23175_23204[(2)] = inst_23157);

(statearr_23175_23204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (6))){
var state_23168__$1 = state_23168;
var statearr_23176_23205 = state_23168__$1;
(statearr_23176_23205[(2)] = null);

(statearr_23176_23205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (3))){
var inst_23166 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23168__$1,inst_23166);
} else {
if((state_val_23169 === (12))){
var inst_23154 = (state_23168[(8)]);
var inst_23154__$1 = (state_23168[(2)]);
var inst_23155 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23154__$1);
var state_23168__$1 = (function (){var statearr_23177 = state_23168;
(statearr_23177[(8)] = inst_23154__$1);

return statearr_23177;
})();
if(cljs.core.truth_(inst_23155)){
var statearr_23178_23206 = state_23168__$1;
(statearr_23178_23206[(1)] = (13));

} else {
var statearr_23179_23207 = state_23168__$1;
(statearr_23179_23207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (2))){
var inst_23131 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23132 = (0);
var state_23168__$1 = (function (){var statearr_23180 = state_23168;
(statearr_23180[(9)] = inst_23131);

(statearr_23180[(7)] = inst_23132);

return statearr_23180;
})();
var statearr_23181_23208 = state_23168__$1;
(statearr_23181_23208[(2)] = null);

(statearr_23181_23208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (11))){
var inst_23132 = (state_23168[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23168,(10),Object,null,(9));
var inst_23141 = chs__$1.call(null,inst_23132);
var inst_23142 = done.call(null,inst_23132);
var inst_23143 = cljs.core.async.take_BANG_.call(null,inst_23141,inst_23142);
var state_23168__$1 = state_23168;
var statearr_23182_23209 = state_23168__$1;
(statearr_23182_23209[(2)] = inst_23143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (9))){
var inst_23132 = (state_23168[(7)]);
var inst_23145 = (state_23168[(2)]);
var inst_23146 = (inst_23132 + (1));
var inst_23132__$1 = inst_23146;
var state_23168__$1 = (function (){var statearr_23183 = state_23168;
(statearr_23183[(10)] = inst_23145);

(statearr_23183[(7)] = inst_23132__$1);

return statearr_23183;
})();
var statearr_23184_23210 = state_23168__$1;
(statearr_23184_23210[(2)] = null);

(statearr_23184_23210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (5))){
var inst_23152 = (state_23168[(2)]);
var state_23168__$1 = (function (){var statearr_23185 = state_23168;
(statearr_23185[(11)] = inst_23152);

return statearr_23185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23168__$1,(12),dchan);
} else {
if((state_val_23169 === (14))){
var inst_23154 = (state_23168[(8)]);
var inst_23159 = cljs.core.apply.call(null,f,inst_23154);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23168__$1,(16),out,inst_23159);
} else {
if((state_val_23169 === (16))){
var inst_23161 = (state_23168[(2)]);
var state_23168__$1 = (function (){var statearr_23186 = state_23168;
(statearr_23186[(12)] = inst_23161);

return statearr_23186;
})();
var statearr_23187_23211 = state_23168__$1;
(statearr_23187_23211[(2)] = null);

(statearr_23187_23211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (10))){
var inst_23136 = (state_23168[(2)]);
var inst_23137 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23168__$1 = (function (){var statearr_23188 = state_23168;
(statearr_23188[(13)] = inst_23136);

return statearr_23188;
})();
var statearr_23189_23212 = state_23168__$1;
(statearr_23189_23212[(2)] = inst_23137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (8))){
var inst_23150 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23190_23213 = state_23168__$1;
(statearr_23190_23213[(2)] = inst_23150);

(statearr_23190_23213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12255__auto__,c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23194[(0)] = state_machine__12256__auto__);

(statearr_23194[(1)] = (1));

return statearr_23194;
});
var state_machine__12256__auto____1 = (function (state_23168){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23195){if((e23195 instanceof Object)){
var ex__12259__auto__ = e23195;
var statearr_23196_23214 = state_23168;
(statearr_23196_23214[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23215 = state_23168;
state_23168 = G__23215;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23168){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12313__auto__ = (function (){var statearr_23197 = f__12312__auto__.call(null);
(statearr_23197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23198);

return statearr_23197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23198,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___23323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23323,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23323,out){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23279 = (state_23299[(7)]);
var inst_23278 = (state_23299[(8)]);
var inst_23278__$1 = (state_23299[(2)]);
var inst_23279__$1 = cljs.core.nth.call(null,inst_23278__$1,(0),null);
var inst_23280 = cljs.core.nth.call(null,inst_23278__$1,(1),null);
var inst_23281 = (inst_23279__$1 == null);
var state_23299__$1 = (function (){var statearr_23301 = state_23299;
(statearr_23301[(9)] = inst_23280);

(statearr_23301[(7)] = inst_23279__$1);

(statearr_23301[(8)] = inst_23278__$1);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23281)){
var statearr_23302_23324 = state_23299__$1;
(statearr_23302_23324[(1)] = (8));

} else {
var statearr_23303_23325 = state_23299__$1;
(statearr_23303_23325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (1))){
var inst_23270 = cljs.core.vec.call(null,chs);
var inst_23271 = inst_23270;
var state_23299__$1 = (function (){var statearr_23304 = state_23299;
(statearr_23304[(10)] = inst_23271);

return statearr_23304;
})();
var statearr_23305_23326 = state_23299__$1;
(statearr_23305_23326[(2)] = null);

(statearr_23305_23326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (4))){
var inst_23271 = (state_23299[(10)]);
var state_23299__$1 = state_23299;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23299__$1,(7),inst_23271);
} else {
if((state_val_23300 === (6))){
var inst_23295 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23306_23327 = state_23299__$1;
(statearr_23306_23327[(2)] = inst_23295);

(statearr_23306_23327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (3))){
var inst_23297 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (2))){
var inst_23271 = (state_23299[(10)]);
var inst_23273 = cljs.core.count.call(null,inst_23271);
var inst_23274 = (inst_23273 > (0));
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23274)){
var statearr_23308_23328 = state_23299__$1;
(statearr_23308_23328[(1)] = (4));

} else {
var statearr_23309_23329 = state_23299__$1;
(statearr_23309_23329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (11))){
var inst_23271 = (state_23299[(10)]);
var inst_23288 = (state_23299[(2)]);
var tmp23307 = inst_23271;
var inst_23271__$1 = tmp23307;
var state_23299__$1 = (function (){var statearr_23310 = state_23299;
(statearr_23310[(11)] = inst_23288);

(statearr_23310[(10)] = inst_23271__$1);

return statearr_23310;
})();
var statearr_23311_23330 = state_23299__$1;
(statearr_23311_23330[(2)] = null);

(statearr_23311_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (9))){
var inst_23279 = (state_23299[(7)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23299__$1,(11),out,inst_23279);
} else {
if((state_val_23300 === (5))){
var inst_23293 = cljs.core.async.close_BANG_.call(null,out);
var state_23299__$1 = state_23299;
var statearr_23312_23331 = state_23299__$1;
(statearr_23312_23331[(2)] = inst_23293);

(statearr_23312_23331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (10))){
var inst_23291 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23313_23332 = state_23299__$1;
(statearr_23313_23332[(2)] = inst_23291);

(statearr_23313_23332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (8))){
var inst_23280 = (state_23299[(9)]);
var inst_23279 = (state_23299[(7)]);
var inst_23271 = (state_23299[(10)]);
var inst_23278 = (state_23299[(8)]);
var inst_23283 = (function (){var c = inst_23280;
var v = inst_23279;
var vec__23276 = inst_23278;
var cs = inst_23271;
return ((function (c,v,vec__23276,cs,inst_23280,inst_23279,inst_23271,inst_23278,state_val_23300,c__12311__auto___23323,out){
return (function (p1__23216_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23216_SHARP_);
});
;})(c,v,vec__23276,cs,inst_23280,inst_23279,inst_23271,inst_23278,state_val_23300,c__12311__auto___23323,out))
})();
var inst_23284 = cljs.core.filterv.call(null,inst_23283,inst_23271);
var inst_23271__$1 = inst_23284;
var state_23299__$1 = (function (){var statearr_23314 = state_23299;
(statearr_23314[(10)] = inst_23271__$1);

return statearr_23314;
})();
var statearr_23315_23333 = state_23299__$1;
(statearr_23315_23333[(2)] = null);

(statearr_23315_23333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23323,out))
;
return ((function (switch__12255__auto__,c__12311__auto___23323,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23319[(0)] = state_machine__12256__auto__);

(statearr_23319[(1)] = (1));

return statearr_23319;
});
var state_machine__12256__auto____1 = (function (state_23299){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23320){if((e23320 instanceof Object)){
var ex__12259__auto__ = e23320;
var statearr_23321_23334 = state_23299;
(statearr_23321_23334[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23335 = state_23299;
state_23299 = G__23335;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23323,out))
})();
var state__12313__auto__ = (function (){var statearr_23322 = f__12312__auto__.call(null);
(statearr_23322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23323);

return statearr_23322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23323,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___23428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23428,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23428,out){
return (function (state_23405){
var state_val_23406 = (state_23405[(1)]);
if((state_val_23406 === (7))){
var inst_23387 = (state_23405[(7)]);
var inst_23387__$1 = (state_23405[(2)]);
var inst_23388 = (inst_23387__$1 == null);
var inst_23389 = cljs.core.not.call(null,inst_23388);
var state_23405__$1 = (function (){var statearr_23407 = state_23405;
(statearr_23407[(7)] = inst_23387__$1);

return statearr_23407;
})();
if(inst_23389){
var statearr_23408_23429 = state_23405__$1;
(statearr_23408_23429[(1)] = (8));

} else {
var statearr_23409_23430 = state_23405__$1;
(statearr_23409_23430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (1))){
var inst_23382 = (0);
var state_23405__$1 = (function (){var statearr_23410 = state_23405;
(statearr_23410[(8)] = inst_23382);

return statearr_23410;
})();
var statearr_23411_23431 = state_23405__$1;
(statearr_23411_23431[(2)] = null);

(statearr_23411_23431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (4))){
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23405__$1,(7),ch);
} else {
if((state_val_23406 === (6))){
var inst_23400 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23412_23432 = state_23405__$1;
(statearr_23412_23432[(2)] = inst_23400);

(statearr_23412_23432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (3))){
var inst_23402 = (state_23405[(2)]);
var inst_23403 = cljs.core.async.close_BANG_.call(null,out);
var state_23405__$1 = (function (){var statearr_23413 = state_23405;
(statearr_23413[(9)] = inst_23402);

return statearr_23413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23405__$1,inst_23403);
} else {
if((state_val_23406 === (2))){
var inst_23382 = (state_23405[(8)]);
var inst_23384 = (inst_23382 < n);
var state_23405__$1 = state_23405;
if(cljs.core.truth_(inst_23384)){
var statearr_23414_23433 = state_23405__$1;
(statearr_23414_23433[(1)] = (4));

} else {
var statearr_23415_23434 = state_23405__$1;
(statearr_23415_23434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (11))){
var inst_23382 = (state_23405[(8)]);
var inst_23392 = (state_23405[(2)]);
var inst_23393 = (inst_23382 + (1));
var inst_23382__$1 = inst_23393;
var state_23405__$1 = (function (){var statearr_23416 = state_23405;
(statearr_23416[(10)] = inst_23392);

(statearr_23416[(8)] = inst_23382__$1);

return statearr_23416;
})();
var statearr_23417_23435 = state_23405__$1;
(statearr_23417_23435[(2)] = null);

(statearr_23417_23435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (9))){
var state_23405__$1 = state_23405;
var statearr_23418_23436 = state_23405__$1;
(statearr_23418_23436[(2)] = null);

(statearr_23418_23436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (5))){
var state_23405__$1 = state_23405;
var statearr_23419_23437 = state_23405__$1;
(statearr_23419_23437[(2)] = null);

(statearr_23419_23437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (10))){
var inst_23397 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23420_23438 = state_23405__$1;
(statearr_23420_23438[(2)] = inst_23397);

(statearr_23420_23438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (8))){
var inst_23387 = (state_23405[(7)]);
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(11),out,inst_23387);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23428,out))
;
return ((function (switch__12255__auto__,c__12311__auto___23428,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = state_machine__12256__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var state_machine__12256__auto____1 = (function (state_23405){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__12259__auto__ = e23425;
var statearr_23426_23439 = state_23405;
(statearr_23426_23439[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23440 = state_23405;
state_23405 = G__23440;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23405){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23428,out))
})();
var state__12313__auto__ = (function (){var statearr_23427 = f__12312__auto__.call(null);
(statearr_23427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23428);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23428,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t23448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23448 = (function (ch,f,map_LT_,meta23449){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23449 = meta23449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23451 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23451 = (function (fn1,_,meta23449,map_LT_,f,ch,meta23452){
this.fn1 = fn1;
this._ = _;
this.meta23449 = meta23449;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23452 = meta23452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23441_SHARP_){
return f1.call(null,(((p1__23441_SHARP_ == null))?null:self__.f.call(null,p1__23441_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23453){
var self__ = this;
var _23453__$1 = this;
return self__.meta23452;
});})(___$1))
;

cljs.core.async.t23451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23453,meta23452__$1){
var self__ = this;
var _23453__$1 = this;
return (new cljs.core.async.t23451(self__.fn1,self__._,self__.meta23449,self__.map_LT_,self__.f,self__.ch,meta23452__$1));
});})(___$1))
;

cljs.core.async.t23451.cljs$lang$type = true;

cljs.core.async.t23451.cljs$lang$ctorStr = "cljs.core.async/t23451";

cljs.core.async.t23451.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t23451");
});})(___$1))
;

cljs.core.async.__GT_t23451 = ((function (___$1){
return (function __GT_t23451(fn1__$1,___$2,meta23449__$1,map_LT___$1,f__$1,ch__$1,meta23452){
return (new cljs.core.async.t23451(fn1__$1,___$2,meta23449__$1,map_LT___$1,f__$1,ch__$1,meta23452));
});})(___$1))
;

}

return (new cljs.core.async.t23451(fn1,___$1,self__.meta23449,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3610__auto__ = ret;
if(cljs.core.truth_(and__3610__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3610__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23450){
var self__ = this;
var _23450__$1 = this;
return self__.meta23449;
});

cljs.core.async.t23448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23450,meta23449__$1){
var self__ = this;
var _23450__$1 = this;
return (new cljs.core.async.t23448(self__.ch,self__.f,self__.map_LT_,meta23449__$1));
});

cljs.core.async.t23448.cljs$lang$type = true;

cljs.core.async.t23448.cljs$lang$ctorStr = "cljs.core.async/t23448";

cljs.core.async.t23448.cljs$lang$ctorPrWriter = (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t23448");
});

cljs.core.async.__GT_t23448 = (function __GT_t23448(ch__$1,f__$1,map_LT___$1,meta23449){
return (new cljs.core.async.t23448(ch__$1,f__$1,map_LT___$1,meta23449));
});

}

return (new cljs.core.async.t23448(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23457 = (function (ch,f,map_GT_,meta23458){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23458 = meta23458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23459){
var self__ = this;
var _23459__$1 = this;
return self__.meta23458;
});

cljs.core.async.t23457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23459,meta23458__$1){
var self__ = this;
var _23459__$1 = this;
return (new cljs.core.async.t23457(self__.ch,self__.f,self__.map_GT_,meta23458__$1));
});

cljs.core.async.t23457.cljs$lang$type = true;

cljs.core.async.t23457.cljs$lang$ctorStr = "cljs.core.async/t23457";

cljs.core.async.t23457.cljs$lang$ctorPrWriter = (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t23457");
});

cljs.core.async.__GT_t23457 = (function __GT_t23457(ch__$1,f__$1,map_GT___$1,meta23458){
return (new cljs.core.async.t23457(ch__$1,f__$1,map_GT___$1,meta23458));
});

}

return (new cljs.core.async.t23457(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23463 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23463 = (function (ch,p,filter_GT_,meta23464){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23464 = meta23464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23465){
var self__ = this;
var _23465__$1 = this;
return self__.meta23464;
});

cljs.core.async.t23463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23465,meta23464__$1){
var self__ = this;
var _23465__$1 = this;
return (new cljs.core.async.t23463(self__.ch,self__.p,self__.filter_GT_,meta23464__$1));
});

cljs.core.async.t23463.cljs$lang$type = true;

cljs.core.async.t23463.cljs$lang$ctorStr = "cljs.core.async/t23463";

cljs.core.async.t23463.cljs$lang$ctorPrWriter = (function (this__4204__auto__,writer__4205__auto__,opt__4206__auto__){
return cljs.core._write.call(null,writer__4205__auto__,"cljs.core.async/t23463");
});

cljs.core.async.__GT_t23463 = (function __GT_t23463(ch__$1,p__$1,filter_GT___$1,meta23464){
return (new cljs.core.async.t23463(ch__$1,p__$1,filter_GT___$1,meta23464));
});

}

return (new cljs.core.async.t23463(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/galin/Work/platformis/git/Jade/jade-gap/www/assets/js/builds/src/dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___23548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23548,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23548,out){
return (function (state_23527){
var state_val_23528 = (state_23527[(1)]);
if((state_val_23528 === (7))){
var inst_23523 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
var statearr_23529_23549 = state_23527__$1;
(statearr_23529_23549[(2)] = inst_23523);

(statearr_23529_23549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (1))){
var state_23527__$1 = state_23527;
var statearr_23530_23550 = state_23527__$1;
(statearr_23530_23550[(2)] = null);

(statearr_23530_23550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (4))){
var inst_23509 = (state_23527[(7)]);
var inst_23509__$1 = (state_23527[(2)]);
var inst_23510 = (inst_23509__$1 == null);
var state_23527__$1 = (function (){var statearr_23531 = state_23527;
(statearr_23531[(7)] = inst_23509__$1);

return statearr_23531;
})();
if(cljs.core.truth_(inst_23510)){
var statearr_23532_23551 = state_23527__$1;
(statearr_23532_23551[(1)] = (5));

} else {
var statearr_23533_23552 = state_23527__$1;
(statearr_23533_23552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (6))){
var inst_23509 = (state_23527[(7)]);
var inst_23514 = p.call(null,inst_23509);
var state_23527__$1 = state_23527;
if(cljs.core.truth_(inst_23514)){
var statearr_23534_23553 = state_23527__$1;
(statearr_23534_23553[(1)] = (8));

} else {
var statearr_23535_23554 = state_23527__$1;
(statearr_23535_23554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (3))){
var inst_23525 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23527__$1,inst_23525);
} else {
if((state_val_23528 === (2))){
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23527__$1,(4),ch);
} else {
if((state_val_23528 === (11))){
var inst_23517 = (state_23527[(2)]);
var state_23527__$1 = state_23527;
var statearr_23536_23555 = state_23527__$1;
(statearr_23536_23555[(2)] = inst_23517);

(statearr_23536_23555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (9))){
var state_23527__$1 = state_23527;
var statearr_23537_23556 = state_23527__$1;
(statearr_23537_23556[(2)] = null);

(statearr_23537_23556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (5))){
var inst_23512 = cljs.core.async.close_BANG_.call(null,out);
var state_23527__$1 = state_23527;
var statearr_23538_23557 = state_23527__$1;
(statearr_23538_23557[(2)] = inst_23512);

(statearr_23538_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (10))){
var inst_23520 = (state_23527[(2)]);
var state_23527__$1 = (function (){var statearr_23539 = state_23527;
(statearr_23539[(8)] = inst_23520);

return statearr_23539;
})();
var statearr_23540_23558 = state_23527__$1;
(statearr_23540_23558[(2)] = null);

(statearr_23540_23558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23528 === (8))){
var inst_23509 = (state_23527[(7)]);
var state_23527__$1 = state_23527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23527__$1,(11),out,inst_23509);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23548,out))
;
return ((function (switch__12255__auto__,c__12311__auto___23548,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23544 = [null,null,null,null,null,null,null,null,null];
(statearr_23544[(0)] = state_machine__12256__auto__);

(statearr_23544[(1)] = (1));

return statearr_23544;
});
var state_machine__12256__auto____1 = (function (state_23527){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23545){if((e23545 instanceof Object)){
var ex__12259__auto__ = e23545;
var statearr_23546_23559 = state_23527;
(statearr_23546_23559[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23560 = state_23527;
state_23527 = G__23560;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23527){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23548,out))
})();
var state__12313__auto__ = (function (){var statearr_23547 = f__12312__auto__.call(null);
(statearr_23547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23548);

return statearr_23547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23548,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__12311__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto__){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto__){
return (function (state_23726){
var state_val_23727 = (state_23726[(1)]);
if((state_val_23727 === (7))){
var inst_23722 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
var statearr_23728_23769 = state_23726__$1;
(statearr_23728_23769[(2)] = inst_23722);

(statearr_23728_23769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (20))){
var inst_23692 = (state_23726[(7)]);
var inst_23703 = (state_23726[(2)]);
var inst_23704 = cljs.core.next.call(null,inst_23692);
var inst_23678 = inst_23704;
var inst_23679 = null;
var inst_23680 = (0);
var inst_23681 = (0);
var state_23726__$1 = (function (){var statearr_23729 = state_23726;
(statearr_23729[(8)] = inst_23679);

(statearr_23729[(9)] = inst_23678);

(statearr_23729[(10)] = inst_23681);

(statearr_23729[(11)] = inst_23703);

(statearr_23729[(12)] = inst_23680);

return statearr_23729;
})();
var statearr_23730_23770 = state_23726__$1;
(statearr_23730_23770[(2)] = null);

(statearr_23730_23770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (1))){
var state_23726__$1 = state_23726;
var statearr_23731_23771 = state_23726__$1;
(statearr_23731_23771[(2)] = null);

(statearr_23731_23771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (4))){
var inst_23667 = (state_23726[(13)]);
var inst_23667__$1 = (state_23726[(2)]);
var inst_23668 = (inst_23667__$1 == null);
var state_23726__$1 = (function (){var statearr_23732 = state_23726;
(statearr_23732[(13)] = inst_23667__$1);

return statearr_23732;
})();
if(cljs.core.truth_(inst_23668)){
var statearr_23733_23772 = state_23726__$1;
(statearr_23733_23772[(1)] = (5));

} else {
var statearr_23734_23773 = state_23726__$1;
(statearr_23734_23773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (15))){
var state_23726__$1 = state_23726;
var statearr_23738_23774 = state_23726__$1;
(statearr_23738_23774[(2)] = null);

(statearr_23738_23774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (21))){
var state_23726__$1 = state_23726;
var statearr_23739_23775 = state_23726__$1;
(statearr_23739_23775[(2)] = null);

(statearr_23739_23775[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (13))){
var inst_23679 = (state_23726[(8)]);
var inst_23678 = (state_23726[(9)]);
var inst_23681 = (state_23726[(10)]);
var inst_23680 = (state_23726[(12)]);
var inst_23688 = (state_23726[(2)]);
var inst_23689 = (inst_23681 + (1));
var tmp23735 = inst_23679;
var tmp23736 = inst_23678;
var tmp23737 = inst_23680;
var inst_23678__$1 = tmp23736;
var inst_23679__$1 = tmp23735;
var inst_23680__$1 = tmp23737;
var inst_23681__$1 = inst_23689;
var state_23726__$1 = (function (){var statearr_23740 = state_23726;
(statearr_23740[(14)] = inst_23688);

(statearr_23740[(8)] = inst_23679__$1);

(statearr_23740[(9)] = inst_23678__$1);

(statearr_23740[(10)] = inst_23681__$1);

(statearr_23740[(12)] = inst_23680__$1);

return statearr_23740;
})();
var statearr_23741_23776 = state_23726__$1;
(statearr_23741_23776[(2)] = null);

(statearr_23741_23776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (22))){
var state_23726__$1 = state_23726;
var statearr_23742_23777 = state_23726__$1;
(statearr_23742_23777[(2)] = null);

(statearr_23742_23777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (6))){
var inst_23667 = (state_23726[(13)]);
var inst_23676 = f.call(null,inst_23667);
var inst_23677 = cljs.core.seq.call(null,inst_23676);
var inst_23678 = inst_23677;
var inst_23679 = null;
var inst_23680 = (0);
var inst_23681 = (0);
var state_23726__$1 = (function (){var statearr_23743 = state_23726;
(statearr_23743[(8)] = inst_23679);

(statearr_23743[(9)] = inst_23678);

(statearr_23743[(10)] = inst_23681);

(statearr_23743[(12)] = inst_23680);

return statearr_23743;
})();
var statearr_23744_23778 = state_23726__$1;
(statearr_23744_23778[(2)] = null);

(statearr_23744_23778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (17))){
var inst_23692 = (state_23726[(7)]);
var inst_23696 = cljs.core.chunk_first.call(null,inst_23692);
var inst_23697 = cljs.core.chunk_rest.call(null,inst_23692);
var inst_23698 = cljs.core.count.call(null,inst_23696);
var inst_23678 = inst_23697;
var inst_23679 = inst_23696;
var inst_23680 = inst_23698;
var inst_23681 = (0);
var state_23726__$1 = (function (){var statearr_23745 = state_23726;
(statearr_23745[(8)] = inst_23679);

(statearr_23745[(9)] = inst_23678);

(statearr_23745[(10)] = inst_23681);

(statearr_23745[(12)] = inst_23680);

return statearr_23745;
})();
var statearr_23746_23779 = state_23726__$1;
(statearr_23746_23779[(2)] = null);

(statearr_23746_23779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (3))){
var inst_23724 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23726__$1,inst_23724);
} else {
if((state_val_23727 === (12))){
var inst_23712 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
var statearr_23747_23780 = state_23726__$1;
(statearr_23747_23780[(2)] = inst_23712);

(statearr_23747_23780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (2))){
var state_23726__$1 = state_23726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23726__$1,(4),in$);
} else {
if((state_val_23727 === (23))){
var inst_23720 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
var statearr_23748_23781 = state_23726__$1;
(statearr_23748_23781[(2)] = inst_23720);

(statearr_23748_23781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (19))){
var inst_23707 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
var statearr_23749_23782 = state_23726__$1;
(statearr_23749_23782[(2)] = inst_23707);

(statearr_23749_23782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (11))){
var inst_23678 = (state_23726[(9)]);
var inst_23692 = (state_23726[(7)]);
var inst_23692__$1 = cljs.core.seq.call(null,inst_23678);
var state_23726__$1 = (function (){var statearr_23750 = state_23726;
(statearr_23750[(7)] = inst_23692__$1);

return statearr_23750;
})();
if(inst_23692__$1){
var statearr_23751_23783 = state_23726__$1;
(statearr_23751_23783[(1)] = (14));

} else {
var statearr_23752_23784 = state_23726__$1;
(statearr_23752_23784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (9))){
var inst_23714 = (state_23726[(2)]);
var inst_23715 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23726__$1 = (function (){var statearr_23753 = state_23726;
(statearr_23753[(15)] = inst_23714);

return statearr_23753;
})();
if(cljs.core.truth_(inst_23715)){
var statearr_23754_23785 = state_23726__$1;
(statearr_23754_23785[(1)] = (21));

} else {
var statearr_23755_23786 = state_23726__$1;
(statearr_23755_23786[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (5))){
var inst_23670 = cljs.core.async.close_BANG_.call(null,out);
var state_23726__$1 = state_23726;
var statearr_23756_23787 = state_23726__$1;
(statearr_23756_23787[(2)] = inst_23670);

(statearr_23756_23787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (14))){
var inst_23692 = (state_23726[(7)]);
var inst_23694 = cljs.core.chunked_seq_QMARK_.call(null,inst_23692);
var state_23726__$1 = state_23726;
if(inst_23694){
var statearr_23757_23788 = state_23726__$1;
(statearr_23757_23788[(1)] = (17));

} else {
var statearr_23758_23789 = state_23726__$1;
(statearr_23758_23789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (16))){
var inst_23710 = (state_23726[(2)]);
var state_23726__$1 = state_23726;
var statearr_23759_23790 = state_23726__$1;
(statearr_23759_23790[(2)] = inst_23710);

(statearr_23759_23790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23727 === (10))){
var inst_23679 = (state_23726[(8)]);
var inst_23681 = (state_23726[(10)]);
var inst_23686 = cljs.core._nth.call(null,inst_23679,inst_23681);
var state_23726__$1 = state_23726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23726__$1,(13),out,inst_23686);
} else {
if((state_val_23727 === (18))){
var inst_23692 = (state_23726[(7)]);
var inst_23701 = cljs.core.first.call(null,inst_23692);
var state_23726__$1 = state_23726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23726__$1,(20),out,inst_23701);
} else {
if((state_val_23727 === (8))){
var inst_23681 = (state_23726[(10)]);
var inst_23680 = (state_23726[(12)]);
var inst_23683 = (inst_23681 < inst_23680);
var inst_23684 = inst_23683;
var state_23726__$1 = state_23726;
if(cljs.core.truth_(inst_23684)){
var statearr_23760_23791 = state_23726__$1;
(statearr_23760_23791[(1)] = (10));

} else {
var statearr_23761_23792 = state_23726__$1;
(statearr_23761_23792[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto__))
;
return ((function (switch__12255__auto__,c__12311__auto__){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23765[(0)] = state_machine__12256__auto__);

(statearr_23765[(1)] = (1));

return statearr_23765;
});
var state_machine__12256__auto____1 = (function (state_23726){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23766){if((e23766 instanceof Object)){
var ex__12259__auto__ = e23766;
var statearr_23767_23793 = state_23726;
(statearr_23767_23793[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23794 = state_23726;
state_23726 = G__23794;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23726){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto__))
})();
var state__12313__auto__ = (function (){var statearr_23768 = f__12312__auto__.call(null);
(statearr_23768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto__);

return statearr_23768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto__))
);

return c__12311__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___23891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___23891,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___23891,out){
return (function (state_23866){
var state_val_23867 = (state_23866[(1)]);
if((state_val_23867 === (7))){
var inst_23861 = (state_23866[(2)]);
var state_23866__$1 = state_23866;
var statearr_23868_23892 = state_23866__$1;
(statearr_23868_23892[(2)] = inst_23861);

(statearr_23868_23892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (1))){
var inst_23843 = null;
var state_23866__$1 = (function (){var statearr_23869 = state_23866;
(statearr_23869[(7)] = inst_23843);

return statearr_23869;
})();
var statearr_23870_23893 = state_23866__$1;
(statearr_23870_23893[(2)] = null);

(statearr_23870_23893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (4))){
var inst_23846 = (state_23866[(8)]);
var inst_23846__$1 = (state_23866[(2)]);
var inst_23847 = (inst_23846__$1 == null);
var inst_23848 = cljs.core.not.call(null,inst_23847);
var state_23866__$1 = (function (){var statearr_23871 = state_23866;
(statearr_23871[(8)] = inst_23846__$1);

return statearr_23871;
})();
if(inst_23848){
var statearr_23872_23894 = state_23866__$1;
(statearr_23872_23894[(1)] = (5));

} else {
var statearr_23873_23895 = state_23866__$1;
(statearr_23873_23895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (6))){
var state_23866__$1 = state_23866;
var statearr_23874_23896 = state_23866__$1;
(statearr_23874_23896[(2)] = null);

(statearr_23874_23896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (3))){
var inst_23863 = (state_23866[(2)]);
var inst_23864 = cljs.core.async.close_BANG_.call(null,out);
var state_23866__$1 = (function (){var statearr_23875 = state_23866;
(statearr_23875[(9)] = inst_23863);

return statearr_23875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23866__$1,inst_23864);
} else {
if((state_val_23867 === (2))){
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(4),ch);
} else {
if((state_val_23867 === (11))){
var inst_23846 = (state_23866[(8)]);
var inst_23855 = (state_23866[(2)]);
var inst_23843 = inst_23846;
var state_23866__$1 = (function (){var statearr_23876 = state_23866;
(statearr_23876[(7)] = inst_23843);

(statearr_23876[(10)] = inst_23855);

return statearr_23876;
})();
var statearr_23877_23897 = state_23866__$1;
(statearr_23877_23897[(2)] = null);

(statearr_23877_23897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (9))){
var inst_23846 = (state_23866[(8)]);
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23866__$1,(11),out,inst_23846);
} else {
if((state_val_23867 === (5))){
var inst_23843 = (state_23866[(7)]);
var inst_23846 = (state_23866[(8)]);
var inst_23850 = cljs.core._EQ_.call(null,inst_23846,inst_23843);
var state_23866__$1 = state_23866;
if(inst_23850){
var statearr_23879_23898 = state_23866__$1;
(statearr_23879_23898[(1)] = (8));

} else {
var statearr_23880_23899 = state_23866__$1;
(statearr_23880_23899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (10))){
var inst_23858 = (state_23866[(2)]);
var state_23866__$1 = state_23866;
var statearr_23881_23900 = state_23866__$1;
(statearr_23881_23900[(2)] = inst_23858);

(statearr_23881_23900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (8))){
var inst_23843 = (state_23866[(7)]);
var tmp23878 = inst_23843;
var inst_23843__$1 = tmp23878;
var state_23866__$1 = (function (){var statearr_23882 = state_23866;
(statearr_23882[(7)] = inst_23843__$1);

return statearr_23882;
})();
var statearr_23883_23901 = state_23866__$1;
(statearr_23883_23901[(2)] = null);

(statearr_23883_23901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___23891,out))
;
return ((function (switch__12255__auto__,c__12311__auto___23891,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_23887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23887[(0)] = state_machine__12256__auto__);

(statearr_23887[(1)] = (1));

return statearr_23887;
});
var state_machine__12256__auto____1 = (function (state_23866){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_23866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e23888){if((e23888 instanceof Object)){
var ex__12259__auto__ = e23888;
var statearr_23889_23902 = state_23866;
(statearr_23889_23902[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23903 = state_23866;
state_23866 = G__23903;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_23866){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_23866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___23891,out))
})();
var state__12313__auto__ = (function (){var statearr_23890 = f__12312__auto__.call(null);
(statearr_23890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___23891);

return statearr_23890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___23891,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___24038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___24038,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___24038,out){
return (function (state_24008){
var state_val_24009 = (state_24008[(1)]);
if((state_val_24009 === (7))){
var inst_24004 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24010_24039 = state_24008__$1;
(statearr_24010_24039[(2)] = inst_24004);

(statearr_24010_24039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (1))){
var inst_23971 = (new Array(n));
var inst_23972 = inst_23971;
var inst_23973 = (0);
var state_24008__$1 = (function (){var statearr_24011 = state_24008;
(statearr_24011[(7)] = inst_23972);

(statearr_24011[(8)] = inst_23973);

return statearr_24011;
})();
var statearr_24012_24040 = state_24008__$1;
(statearr_24012_24040[(2)] = null);

(statearr_24012_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (4))){
var inst_23976 = (state_24008[(9)]);
var inst_23976__$1 = (state_24008[(2)]);
var inst_23977 = (inst_23976__$1 == null);
var inst_23978 = cljs.core.not.call(null,inst_23977);
var state_24008__$1 = (function (){var statearr_24013 = state_24008;
(statearr_24013[(9)] = inst_23976__$1);

return statearr_24013;
})();
if(inst_23978){
var statearr_24014_24041 = state_24008__$1;
(statearr_24014_24041[(1)] = (5));

} else {
var statearr_24015_24042 = state_24008__$1;
(statearr_24015_24042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (15))){
var inst_23998 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24016_24043 = state_24008__$1;
(statearr_24016_24043[(2)] = inst_23998);

(statearr_24016_24043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (13))){
var state_24008__$1 = state_24008;
var statearr_24017_24044 = state_24008__$1;
(statearr_24017_24044[(2)] = null);

(statearr_24017_24044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (6))){
var inst_23973 = (state_24008[(8)]);
var inst_23994 = (inst_23973 > (0));
var state_24008__$1 = state_24008;
if(cljs.core.truth_(inst_23994)){
var statearr_24018_24045 = state_24008__$1;
(statearr_24018_24045[(1)] = (12));

} else {
var statearr_24019_24046 = state_24008__$1;
(statearr_24019_24046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (3))){
var inst_24006 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24008__$1,inst_24006);
} else {
if((state_val_24009 === (12))){
var inst_23972 = (state_24008[(7)]);
var inst_23996 = cljs.core.vec.call(null,inst_23972);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24008__$1,(15),out,inst_23996);
} else {
if((state_val_24009 === (2))){
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24008__$1,(4),ch);
} else {
if((state_val_24009 === (11))){
var inst_23988 = (state_24008[(2)]);
var inst_23989 = (new Array(n));
var inst_23972 = inst_23989;
var inst_23973 = (0);
var state_24008__$1 = (function (){var statearr_24020 = state_24008;
(statearr_24020[(7)] = inst_23972);

(statearr_24020[(10)] = inst_23988);

(statearr_24020[(8)] = inst_23973);

return statearr_24020;
})();
var statearr_24021_24047 = state_24008__$1;
(statearr_24021_24047[(2)] = null);

(statearr_24021_24047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (9))){
var inst_23972 = (state_24008[(7)]);
var inst_23986 = cljs.core.vec.call(null,inst_23972);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24008__$1,(11),out,inst_23986);
} else {
if((state_val_24009 === (5))){
var inst_23972 = (state_24008[(7)]);
var inst_23973 = (state_24008[(8)]);
var inst_23976 = (state_24008[(9)]);
var inst_23981 = (state_24008[(11)]);
var inst_23980 = (inst_23972[inst_23973] = inst_23976);
var inst_23981__$1 = (inst_23973 + (1));
var inst_23982 = (inst_23981__$1 < n);
var state_24008__$1 = (function (){var statearr_24022 = state_24008;
(statearr_24022[(12)] = inst_23980);

(statearr_24022[(11)] = inst_23981__$1);

return statearr_24022;
})();
if(cljs.core.truth_(inst_23982)){
var statearr_24023_24048 = state_24008__$1;
(statearr_24023_24048[(1)] = (8));

} else {
var statearr_24024_24049 = state_24008__$1;
(statearr_24024_24049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (14))){
var inst_24001 = (state_24008[(2)]);
var inst_24002 = cljs.core.async.close_BANG_.call(null,out);
var state_24008__$1 = (function (){var statearr_24026 = state_24008;
(statearr_24026[(13)] = inst_24001);

return statearr_24026;
})();
var statearr_24027_24050 = state_24008__$1;
(statearr_24027_24050[(2)] = inst_24002);

(statearr_24027_24050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (10))){
var inst_23992 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24028_24051 = state_24008__$1;
(statearr_24028_24051[(2)] = inst_23992);

(statearr_24028_24051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (8))){
var inst_23972 = (state_24008[(7)]);
var inst_23981 = (state_24008[(11)]);
var tmp24025 = inst_23972;
var inst_23972__$1 = tmp24025;
var inst_23973 = inst_23981;
var state_24008__$1 = (function (){var statearr_24029 = state_24008;
(statearr_24029[(7)] = inst_23972__$1);

(statearr_24029[(8)] = inst_23973);

return statearr_24029;
})();
var statearr_24030_24052 = state_24008__$1;
(statearr_24030_24052[(2)] = null);

(statearr_24030_24052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___24038,out))
;
return ((function (switch__12255__auto__,c__12311__auto___24038,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_24034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24034[(0)] = state_machine__12256__auto__);

(statearr_24034[(1)] = (1));

return statearr_24034;
});
var state_machine__12256__auto____1 = (function (state_24008){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_24008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object)){
var ex__12259__auto__ = e24035;
var statearr_24036_24053 = state_24008;
(statearr_24036_24053[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24054 = state_24008;
state_24008 = G__24054;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_24008){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_24008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___24038,out))
})();
var state__12313__auto__ = (function (){var statearr_24037 = f__12312__auto__.call(null);
(statearr_24037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___24038);

return statearr_24037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___24038,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12311__auto___24197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12311__auto___24197,out){
return (function (){
var f__12312__auto__ = (function (){var switch__12255__auto__ = ((function (c__12311__auto___24197,out){
return (function (state_24167){
var state_val_24168 = (state_24167[(1)]);
if((state_val_24168 === (7))){
var inst_24163 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24169_24198 = state_24167__$1;
(statearr_24169_24198[(2)] = inst_24163);

(statearr_24169_24198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (1))){
var inst_24126 = [];
var inst_24127 = inst_24126;
var inst_24128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24167__$1 = (function (){var statearr_24170 = state_24167;
(statearr_24170[(7)] = inst_24127);

(statearr_24170[(8)] = inst_24128);

return statearr_24170;
})();
var statearr_24171_24199 = state_24167__$1;
(statearr_24171_24199[(2)] = null);

(statearr_24171_24199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (4))){
var inst_24131 = (state_24167[(9)]);
var inst_24131__$1 = (state_24167[(2)]);
var inst_24132 = (inst_24131__$1 == null);
var inst_24133 = cljs.core.not.call(null,inst_24132);
var state_24167__$1 = (function (){var statearr_24172 = state_24167;
(statearr_24172[(9)] = inst_24131__$1);

return statearr_24172;
})();
if(inst_24133){
var statearr_24173_24200 = state_24167__$1;
(statearr_24173_24200[(1)] = (5));

} else {
var statearr_24174_24201 = state_24167__$1;
(statearr_24174_24201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (15))){
var inst_24157 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24175_24202 = state_24167__$1;
(statearr_24175_24202[(2)] = inst_24157);

(statearr_24175_24202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (13))){
var state_24167__$1 = state_24167;
var statearr_24176_24203 = state_24167__$1;
(statearr_24176_24203[(2)] = null);

(statearr_24176_24203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (6))){
var inst_24127 = (state_24167[(7)]);
var inst_24152 = inst_24127.length;
var inst_24153 = (inst_24152 > (0));
var state_24167__$1 = state_24167;
if(cljs.core.truth_(inst_24153)){
var statearr_24177_24204 = state_24167__$1;
(statearr_24177_24204[(1)] = (12));

} else {
var statearr_24178_24205 = state_24167__$1;
(statearr_24178_24205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (3))){
var inst_24165 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24167__$1,inst_24165);
} else {
if((state_val_24168 === (12))){
var inst_24127 = (state_24167[(7)]);
var inst_24155 = cljs.core.vec.call(null,inst_24127);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24167__$1,(15),out,inst_24155);
} else {
if((state_val_24168 === (2))){
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24167__$1,(4),ch);
} else {
if((state_val_24168 === (11))){
var inst_24135 = (state_24167[(10)]);
var inst_24131 = (state_24167[(9)]);
var inst_24145 = (state_24167[(2)]);
var inst_24146 = [];
var inst_24147 = inst_24146.push(inst_24131);
var inst_24127 = inst_24146;
var inst_24128 = inst_24135;
var state_24167__$1 = (function (){var statearr_24179 = state_24167;
(statearr_24179[(7)] = inst_24127);

(statearr_24179[(8)] = inst_24128);

(statearr_24179[(11)] = inst_24145);

(statearr_24179[(12)] = inst_24147);

return statearr_24179;
})();
var statearr_24180_24206 = state_24167__$1;
(statearr_24180_24206[(2)] = null);

(statearr_24180_24206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (9))){
var inst_24127 = (state_24167[(7)]);
var inst_24143 = cljs.core.vec.call(null,inst_24127);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24167__$1,(11),out,inst_24143);
} else {
if((state_val_24168 === (5))){
var inst_24135 = (state_24167[(10)]);
var inst_24128 = (state_24167[(8)]);
var inst_24131 = (state_24167[(9)]);
var inst_24135__$1 = f.call(null,inst_24131);
var inst_24136 = cljs.core._EQ_.call(null,inst_24135__$1,inst_24128);
var inst_24137 = cljs.core.keyword_identical_QMARK_.call(null,inst_24128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24138 = (inst_24136) || (inst_24137);
var state_24167__$1 = (function (){var statearr_24181 = state_24167;
(statearr_24181[(10)] = inst_24135__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24138)){
var statearr_24182_24207 = state_24167__$1;
(statearr_24182_24207[(1)] = (8));

} else {
var statearr_24183_24208 = state_24167__$1;
(statearr_24183_24208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (14))){
var inst_24160 = (state_24167[(2)]);
var inst_24161 = cljs.core.async.close_BANG_.call(null,out);
var state_24167__$1 = (function (){var statearr_24185 = state_24167;
(statearr_24185[(13)] = inst_24160);

return statearr_24185;
})();
var statearr_24186_24209 = state_24167__$1;
(statearr_24186_24209[(2)] = inst_24161);

(statearr_24186_24209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (10))){
var inst_24150 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24187_24210 = state_24167__$1;
(statearr_24187_24210[(2)] = inst_24150);

(statearr_24187_24210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (8))){
var inst_24135 = (state_24167[(10)]);
var inst_24127 = (state_24167[(7)]);
var inst_24131 = (state_24167[(9)]);
var inst_24140 = inst_24127.push(inst_24131);
var tmp24184 = inst_24127;
var inst_24127__$1 = tmp24184;
var inst_24128 = inst_24135;
var state_24167__$1 = (function (){var statearr_24188 = state_24167;
(statearr_24188[(7)] = inst_24127__$1);

(statearr_24188[(8)] = inst_24128);

(statearr_24188[(14)] = inst_24140);

return statearr_24188;
})();
var statearr_24189_24211 = state_24167__$1;
(statearr_24189_24211[(2)] = null);

(statearr_24189_24211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12311__auto___24197,out))
;
return ((function (switch__12255__auto__,c__12311__auto___24197,out){
return (function() {
var state_machine__12256__auto__ = null;
var state_machine__12256__auto____0 = (function (){
var statearr_24193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24193[(0)] = state_machine__12256__auto__);

(statearr_24193[(1)] = (1));

return statearr_24193;
});
var state_machine__12256__auto____1 = (function (state_24167){
while(true){
var ret_value__12257__auto__ = (function (){try{while(true){
var result__12258__auto__ = switch__12255__auto__.call(null,state_24167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12258__auto__;
}
break;
}
}catch (e24194){if((e24194 instanceof Object)){
var ex__12259__auto__ = e24194;
var statearr_24195_24212 = state_24167;
(statearr_24195_24212[(5)] = ex__12259__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24213 = state_24167;
state_24167 = G__24213;
continue;
} else {
return ret_value__12257__auto__;
}
break;
}
});
state_machine__12256__auto__ = function(state_24167){
switch(arguments.length){
case 0:
return state_machine__12256__auto____0.call(this);
case 1:
return state_machine__12256__auto____1.call(this,state_24167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12256__auto____0;
state_machine__12256__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12256__auto____1;
return state_machine__12256__auto__;
})()
;})(switch__12255__auto__,c__12311__auto___24197,out))
})();
var state__12313__auto__ = (function (){var statearr_24196 = f__12312__auto__.call(null);
(statearr_24196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12311__auto___24197);

return statearr_24196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12313__auto__);
});})(c__12311__auto___24197,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1545283558809