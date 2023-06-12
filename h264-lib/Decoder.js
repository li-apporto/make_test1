/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// universal module definition
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Decoder = factory();
    }
}(this, function () {

    var global;

    function initglobal() {
        global = this;
        if (!global) {
            if (typeof window != "undefined") {
                global = window;
            } else if (typeof self != "undefined") {
                global = self;
            };
        };
    };
    initglobal();

    function error(message) {
        console.error(message);
        console.trace();
    };

    function assert(condition, message) {
        if (!condition) {
            error(message);
        };
    };

    var getModule = function (par_broadwayOnHeadersDecoded, par_broadwayOnPictureDecoded) {
var Module=typeof Module!="undefined"?Module:{};var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;function logExceptionOnExit(e){if(e instanceof ExitStatus)return;let toLog=e;err("exiting due to exception: "+toLog)}if(ENVIRONMENT_IS_NODE){var fs=(null)("fs");var nodePath=(null)("path");if(ENVIRONMENT_IS_WORKER){scriptDirectory=nodePath.dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=(filename,binary)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=(filename,onload,onerror)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);fs.readFile(filename,function(err,data){if(err)onerror(err);else onload(data.buffer)})};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",function(reason){throw reason});quit_=(status,toThrow)=>{if(keepRuntimeAlive()){process["exitCode"]=status;throw toThrow}logExceptionOnExit(toThrow);process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||52428800;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="avc.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["f"];updateMemoryViews();wasmTable=Module["asm"]["n"];addOnInit(Module["asm"]["g"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function _broadwayOnHeadersDecoded(){par_broadwayOnHeadersDecoded()}Module["_broadwayOnHeadersDecoded"]=_broadwayOnHeadersDecoded;function _broadwayOnPictureDecoded($buffer,width,height){par_broadwayOnPictureDecoded($buffer,width,height)}Module["_broadwayOnPictureDecoded"]=_broadwayOnPictureDecoded;function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function abortOnCannotGrowMemory(requestedSize){abort("OOM")}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;abortOnCannotGrowMemory(requestedSize)}var printCharBuffers=[null,[],[]];function printChar(stream,curr){var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}var SYSCALLS={varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0}var asmLibraryArg={"e":_broadwayOnHeadersDecoded,"d":_broadwayOnPictureDecoded,"c":_emscripten_memcpy_big,"b":_emscripten_resize_heap,"a":_fd_write};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["g"]).apply(null,arguments)};var _broadwayCreateStream=Module["_broadwayCreateStream"]=function(){return(_broadwayCreateStream=Module["_broadwayCreateStream"]=Module["asm"]["h"]).apply(null,arguments)};var _broadwayPlayStream=Module["_broadwayPlayStream"]=function(){return(_broadwayPlayStream=Module["_broadwayPlayStream"]=Module["asm"]["i"]).apply(null,arguments)};var _broadwayInit=Module["_broadwayInit"]=function(){return(_broadwayInit=Module["_broadwayInit"]=Module["asm"]["j"]).apply(null,arguments)};var _broadwayExit=Module["_broadwayExit"]=function(){return(_broadwayExit=Module["_broadwayExit"]=Module["asm"]["k"]).apply(null,arguments)};var _broadwayGetMajorVersion=Module["_broadwayGetMajorVersion"]=function(){return(_broadwayGetMajorVersion=Module["_broadwayGetMajorVersion"]=Module["asm"]["l"]).apply(null,arguments)};var _broadwayGetMinorVersion=Module["_broadwayGetMinorVersion"]=function(){return(_broadwayGetMinorVersion=Module["_broadwayGetMinorVersion"]=Module["asm"]["m"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();
    
        var resultModule;
        if (typeof global !== "undefined") {
            if (global.Module) {
                resultModule = global.Module;
            };
        };

        if (typeof Module != "undefined") {
            resultModule = Module;
        };

        resultModule._broadwayOnHeadersDecoded = par_broadwayOnHeadersDecoded;
        resultModule._broadwayOnPictureDecoded = par_broadwayOnPictureDecoded;

        var moduleIsReady = false;
        var cbFun;
        var moduleReady = function () {
            moduleIsReady = true;
            if (cbFun) {
                cbFun(resultModule);
            }
        };

        resultModule.onRuntimeInitialized = function () {
            moduleReady(resultModule);
        };

        return function (callback) {
            if (moduleIsReady) {
                callback(resultModule);
            } else {
                cbFun = callback;
            };
        };
    };

    return (function () {
        "use strict";

        var nowValue = function () {
            return (new Date()).getTime();
        };

        if (typeof performance != "undefined") {
            if (performance.now) {
                nowValue = function () {
                    return performance.now();
                };
            };
        };

        var Decoder = function (parOptions) {

            this.options = parOptions || {};
            this.now = nowValue;

            var asmInstance;
            var fakeWindow = {};
            var toU8Array;
            var toU32Array;

            var onPicFun = function ($buffer, width, height) {
                var buffer = this.pictureBuffers[$buffer];
                if (!buffer) {
                    buffer = this.pictureBuffers[$buffer] = toU8Array($buffer, (width * height * 3) / 2);
                };

                var infos;
                var doInfo = false;
                if (this.infoAr.length) {
                    doInfo = true;
                    infos = this.infoAr;
                };

                this.infoAr = [];

                if (this.options.rgb) {
                    if (!asmInstance) {
                        asmInstance = getAsm(width, height);
                    };
                    asmInstance.inp.set(buffer);
                    asmInstance.doit();

                    var copyU8 = new Uint8Array(asmInstance.outSize);
                    copyU8.set(asmInstance.out);

                    if (doInfo) {
                        infos[0].finishDecoding = nowValue();
                    };

                    this.onPictureDecoded(copyU8, width, height, infos);
                    return;
                };

                if (doInfo) {
                    infos[0].finishDecoding = nowValue();
                };

                this.onPictureDecoded(buffer, width, height, infos);

            }.bind(this);

            var ignore = false;

            if (this.options.sliceMode) {
                onPicFun = function ($buffer, width, height, $sliceInfo) {
                    if (ignore) {
                        return;
                    };

                    var buffer = this.pictureBuffers[$buffer];
                    if (!buffer) {
                        buffer = this.pictureBuffers[$buffer] = toU8Array($buffer, (width * height * 3) / 2);
                    };

                    var sliceInfo = this.pictureBuffers[$sliceInfo];
                    if (!sliceInfo) {
                        sliceInfo = this.pictureBuffers[$sliceInfo] = toU32Array($sliceInfo, 18);
                    };

                    var infos;
                    var doInfo = false;
                    if (this.infoAr.length) {
                        doInfo = true;
                        infos = this.infoAr;
                    };

                    this.infoAr = [];
                    infos[0].finishDecoding = nowValue();
                    var sliceInfoAr = [];
                    for (var i = 0; i < 20; ++i) {
                        sliceInfoAr.push(sliceInfo[i]);
                    };

                    infos[0].sliceInfoAr = sliceInfoAr;
                    this.onPictureDecoded(buffer, width, height, infos);
                }.bind(this);
            };

            var ModuleCallback = getModule.apply(fakeWindow, [function () {}, onPicFun]);
            var MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
            var instance = this;
            this.onPictureDecoded = function (buffer, width, height, infos) {};
            this.onDecoderReady = function () {};

            var bufferedCalls = [];
            this.decode = function decode(typedAr, parInfo, copyDoneFun) {
                bufferedCalls.push([typedAr, parInfo, copyDoneFun]);
            };

            ModuleCallback(function (Module) {
                var HEAP8 = Module.HEAP8;
                var HEAPU8 = Module.HEAPU8;
                var HEAP16 = Module.HEAP16;
                var HEAP32 = Module.HEAP32;
                // from old constructor
                Module._broadwayInit();

                /**
                 * Creates a typed array from a HEAP8 pointer. 
                 */
                toU8Array = function (ptr, length) {
                    return HEAPU8.subarray(ptr, ptr + length);
                };
                toU32Array = function (ptr, length) {
                    //var tmp = HEAPU8.subarray(ptr, ptr + (length * 4));
                    return new Uint32Array(HEAPU8.buffer, ptr, length);
                };
                instance.streamBuffer = toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
                instance.pictureBuffers = {};
                // collect extra infos that are provided with the nal units
                instance.infoAr = [];

                /**
                 * Decodes a stream buffer. This may be one single (unframed) NAL unit without the
                 * start code, or a sequence of NAL units with framing start code prefixes. This
                 * function overwrites stream buffer allocated by the codec with the supplied buffer.
                 */

                var sliceNum = 0;
                if (instance.options.sliceMode) {
                    sliceNum = instance.options.sliceNum;

                    instance.decode = function decode(typedAr, parInfo, copyDoneFun) {
                        instance.infoAr.push(parInfo);
                        parInfo.startDecoding = nowValue();
                        var nals = parInfo.nals;
                        var i;
                        if (!nals) {
                            nals = [];
                            parInfo.nals = nals;
                            var l = typedAr.length;
                            var foundSomething = false;
                            var lastFound = 0;
                            var lastStart = 0;
                            for (i = 0; i < l; ++i) {
                                if (typedAr[i] === 1) {
                                    if (typedAr[i - 1] === 0 && typedAr[i - 2] === 0) {
                                        var startPos = i - 2;
                                        if (typedAr[i - 3] === 0) {
                                            startPos = i - 3;
                                        };

                                        // its a nal;
                                        if (foundSomething) {
                                            nals.push({
                                                offset: lastFound,
                                                end: startPos,
                                                type: typedAr[lastStart] & 31
                                            });
                                        };

                                        lastFound = startPos;
                                        lastStart = startPos + 3;

                                        if (typedAr[i - 3] === 0) {
                                            lastStart = startPos + 4;
                                        };

                                        foundSomething = true;
                                    };
                                };
                            };

                            if (foundSomething) {
                                nals.push({
                                    offset: lastFound,
                                    end: i,
                                    type: typedAr[lastStart] & 31
                                });
                            };
                        };

                        var currentSlice = 0;
                        var playAr;
                        var offset = 0;
                        for (i = 0; i < nals.length; ++i) {
                            if (nals[i].type === 1 || nals[i].type === 5) {
                                if (currentSlice === sliceNum) {
                                    playAr = typedAr.subarray(nals[i].offset, nals[i].end);
                                    instance.streamBuffer[offset] = 0;
                                    offset += 1;
                                    instance.streamBuffer.set(playAr, offset);
                                    offset += playAr.length;
                                };
                                currentSlice += 1;
                            } else {
                                playAr = typedAr.subarray(nals[i].offset, nals[i].end);
                                instance.streamBuffer[offset] = 0;
                                offset += 1;
                                instance.streamBuffer.set(playAr, offset);
                                offset += playAr.length;
                                Module._broadwayPlayStream(offset);
                                offset = 0;
                            };
                        };

                        copyDoneFun();
                        Module._broadwayPlayStream(offset);
                    };
                } else {
                    instance.decode = function decode(typedAr, parInfo) {
                        // console.info("Decoding: " + buffer.length);
                        // collect infos
                        if (parInfo) {
                            instance.infoAr.push(parInfo);
                            parInfo.startDecoding = nowValue();
                        };

                        instance.streamBuffer.set(typedAr);
                        Module._broadwayPlayStream(typedAr.length);
                    };
                };

                if (bufferedCalls.length) {
                    var bi = 0;
                    for (bi = 0; bi < bufferedCalls.length; ++bi) {
                        instance.decode(bufferedCalls[bi][0], bufferedCalls[bi][1], bufferedCalls[bi][2]);
                    };
                    bufferedCalls = [];
                };

                instance.onDecoderReady(instance);
            });
        };

        Decoder.prototype = {};

        /*

            asm.js implementation of a yuv to rgb convertor
            provided by @soliton4

            based on
            http://www.wordsaretoys.com/2013/10/18/making-yuv-conversion-a-little-faster/

        */
        // factory to create asm.js yuv -> rgb convertor for a given resolution
        var asmInstances = {};
        var getAsm = function (parWidth, parHeight) {
            var idStr = "" + parWidth + "x" + parHeight;
            if (asmInstances[idStr]) {
                return asmInstances[idStr];
            };

            var lumaSize = parWidth * parHeight;
            var chromaSize = (lumaSize | 0) >> 2;

            var inpSize = lumaSize + chromaSize + chromaSize;
            var outSize = parWidth * parHeight * 4;
            var cacheSize = Math.pow(2, 24) * 4;
            var size = inpSize + outSize + cacheSize;

            var chunkSize = Math.pow(2, 24);
            var heapSize = chunkSize;
            while (heapSize < size) {
                heapSize += chunkSize;
            };
            var heap = new ArrayBuffer(heapSize);

            var res = asmFactory(global, {}, heap);
            res.init(parWidth, parHeight);
            asmInstances[idStr] = res;

            res.heap = heap;
            res.out = new Uint8Array(heap, 0, outSize);
            res.inp = new Uint8Array(heap, outSize, inpSize);
            res.outSize = outSize;

            return res;
        };

        function asmFactory(stdlib, foreign, heap) {
            "use asm";

            var imul = stdlib.Math.imul;
            var min = stdlib.Math.min;
            var max = stdlib.Math.max;
            var pow = stdlib.Math.pow;
            var out = new stdlib.Uint8Array(heap);
            var out32 = new stdlib.Uint32Array(heap);
            var inp = new stdlib.Uint8Array(heap);
            var mem = new stdlib.Uint8Array(heap);
            var mem32 = new stdlib.Uint32Array(heap);

            // for double algo
            /*var vt = 1.370705;
            var gt = 0.698001;
            var gt2 = 0.337633;
            var bt = 1.732446;*/

            var width = 0;
            var height = 0;
            var lumaSize = 0;
            var chromaSize = 0;
            var inpSize = 0;
            var outSize = 0;

            var inpStart = 0;
            var outStart = 0;

            var widthFour = 0;
            var cacheStart = 0;

            function init(parWidth, parHeight) {
                parWidth = parWidth | 0;
                parHeight = parHeight | 0;

                var i = 0;
                var s = 0;

                width = parWidth;
                widthFour = imul(parWidth, 4) | 0;
                height = parHeight;
                lumaSize = imul(width | 0, height | 0) | 0;
                chromaSize = (lumaSize | 0) >> 2;
                outSize = imul(imul(width, height) | 0, 4) | 0;
                inpSize = ((lumaSize + chromaSize) | 0 + chromaSize) | 0;

                outStart = 0;
                inpStart = (outStart + outSize) | 0;
                cacheStart = (inpStart + inpSize) | 0;

                // initializing memory (to be on the safe side)
                s = ~~(+pow(+2, +24));
                s = imul(s, 4) | 0;

                for (i = 0 | 0;
                    ((i | 0) < (s | 0)) | 0; i = (i + 4) | 0) {
                    mem32[((cacheStart + i) | 0) >> 2] = 0;
                };
            };

            function doit() {
                var ystart = 0;
                var ustart = 0;
                var vstart = 0;

                var y = 0;
                var yn = 0;
                var u = 0;
                var v = 0;

                var o = 0;

                var line = 0;
                var col = 0;

                var usave = 0;
                var vsave = 0;

                var ostart = 0;
                var cacheAdr = 0;

                ostart = outStart | 0;

                ystart = inpStart | 0;
                ustart = (ystart + lumaSize | 0) | 0;
                vstart = (ustart + chromaSize) | 0;

                for (line = 0;
                    (line | 0) < (height | 0); line = (line + 2) | 0) {
                    usave = ustart;
                    vsave = vstart;

                    for (col = 0;
                        (col | 0) < (width | 0); col = (col + 2) | 0) {
                        y = inp[ystart >> 0] | 0;
                        yn = inp[((ystart + width) | 0) >> 0] | 0;

                        u = inp[ustart >> 0] | 0;
                        v = inp[vstart >> 0] | 0;

                        cacheAdr = (((((y << 16) | 0) + ((u << 8) | 0)) | 0) + v) | 0;
                        o = mem32[((cacheStart + cacheAdr) | 0) >> 2] | 0;
                        if (o) {} else {
                            o = yuv2rgbcalc(y, u, v) | 0;
                            mem32[((cacheStart + cacheAdr) | 0) >> 2] = o | 0;
                        };
                        mem32[ostart >> 2] = o;

                        cacheAdr = (((((yn << 16) | 0) + ((u << 8) | 0)) | 0) + v) | 0;
                        o = mem32[((cacheStart + cacheAdr) | 0) >> 2] | 0;
                        if (o) {} else {
                            o = yuv2rgbcalc(yn, u, v) | 0;
                            mem32[((cacheStart + cacheAdr) | 0) >> 2] = o | 0;
                        };
                        mem32[((ostart + widthFour) | 0) >> 2] = o;

                        //yuv2rgb5(y, u, v, ostart);
                        //yuv2rgb5(yn, u, v, (ostart + widthFour)|0);
                        ostart = (ostart + 4) | 0;

                        // next step only for y. u and v stay the same
                        ystart = (ystart + 1) | 0;
                        y = inp[ystart >> 0] | 0;
                        yn = inp[((ystart + width) | 0) >> 0] | 0;

                        //yuv2rgb5(y, u, v, ostart);
                        cacheAdr = (((((y << 16) | 0) + ((u << 8) | 0)) | 0) + v) | 0;
                        o = mem32[((cacheStart + cacheAdr) | 0) >> 2] | 0;
                        if (o) {} else {
                            o = yuv2rgbcalc(y, u, v) | 0;
                            mem32[((cacheStart + cacheAdr) | 0) >> 2] = o | 0;
                        };
                        mem32[ostart >> 2] = o;

                        //yuv2rgb5(yn, u, v, (ostart + widthFour)|0);
                        cacheAdr = (((((yn << 16) | 0) + ((u << 8) | 0)) | 0) + v) | 0;
                        o = mem32[((cacheStart + cacheAdr) | 0) >> 2] | 0;
                        if (o) {} else {
                            o = yuv2rgbcalc(yn, u, v) | 0;
                            mem32[((cacheStart + cacheAdr) | 0) >> 2] = o | 0;
                        };

                        mem32[((ostart + widthFour) | 0) >> 2] = o;
                        ostart = (ostart + 4) | 0;

                        //all positions inc 1
                        ystart = (ystart + 1) | 0;
                        ustart = (ustart + 1) | 0;
                        vstart = (vstart + 1) | 0;
                    };

                    ostart = (ostart + widthFour) | 0;
                    ystart = (ystart + width) | 0;
                };
            };

            function yuv2rgbcalc(y, u, v) {
                y = y | 0;
                u = u | 0;
                v = v | 0;

                var r = 0;
                var g = 0;
                var b = 0;

                var o = 0;

                var a0 = 0;
                var a1 = 0;
                var a2 = 0;
                var a3 = 0;
                var a4 = 0;

                a0 = imul(1192, (y - 16) | 0) | 0;
                a1 = imul(1634, (v - 128) | 0) | 0;
                a2 = imul(832, (v - 128) | 0) | 0;
                a3 = imul(400, (u - 128) | 0) | 0;
                a4 = imul(2066, (u - 128) | 0) | 0;

                r = (((a0 + a1) | 0) >> 10) | 0;
                g = (((((a0 - a2) | 0) - a3) | 0) >> 10) | 0;
                b = (((a0 + a4) | 0) >> 10) | 0;

                if ((((r & 255) | 0) != (r | 0)) | 0) {
                    r = min(255, max(0, r | 0) | 0) | 0;
                };
                if ((((g & 255) | 0) != (g | 0)) | 0) {
                    g = min(255, max(0, g | 0) | 0) | 0;
                };
                if ((((b & 255) | 0) != (b | 0)) | 0) {
                    b = min(255, max(0, b | 0) | 0) | 0;
                };

                o = 255;
                o = (o << 8) | 0;
                o = (o + b) | 0;
                o = (o << 8) | 0;
                o = (o + g) | 0;
                o = (o << 8) | 0;
                o = (o + r) | 0;

                return o | 0;
            };

            return {
                init: init,
                doit: doit
            };
        };

        /*
            potential worker initialization
        */

        if (typeof self != "undefined") {
            var isWorker = false;
            var decoder;
            var reuseMemory = false;
            var sliceMode = false;
            var sliceNum = 0;
            var sliceCnt = 0;
            var lastSliceNum = 0;
            var sliceInfoAr;
            var lastBuf;
            var awaiting = 0;
            var pile = [];
            var startDecoding;
            var finishDecoding;
            var timeDecoding;

            var memAr = [];
            var getMem = function (length) {
                if (memAr.length) {
                    var u = memAr.shift();
                    while (u && u.byteLength !== length) {
                        u = memAr.shift();
                    };
                    if (u) {
                        return u;
                    };
                };

                return new ArrayBuffer(length);
            };

            var copySlice = function (source, target, infoAr, width, height) {

                var length = width * height;
                var length4 = length / 4
                var plane2 = length;
                var plane3 = length + length4;

                var copy16 = function (parBegin, parEnd) {
                    var i = 0;
                    for (i = 0; i < 16; ++i) {
                        var begin = parBegin + (width * i);
                        var end = parEnd + (width * i)
                        target.set(source.subarray(begin, end), begin);
                    };
                };

                var copy8 = function (parBegin, parEnd) {
                    var i = 0;
                    for (i = 0; i < 8; ++i) {
                        var begin = parBegin + ((width / 2) * i);
                        var end = parEnd + ((width / 2) * i)
                        target.set(source.subarray(begin, end), begin);
                    };
                };

                var copyChunk = function (begin, end) {
                    target.set(source.subarray(begin, end), begin);
                };

                var begin = infoAr[0];
                var end = infoAr[1];
                if (end > 0) {
                    copy16(begin, end);
                    copy8(infoAr[2], infoAr[3]);
                    copy8(infoAr[4], infoAr[5]);
                };

                begin = infoAr[6];
                end = infoAr[7];

                if (end > 0) {
                    copy16(begin, end);
                    copy8(infoAr[8], infoAr[9]);
                    copy8(infoAr[10], infoAr[11]);
                };

                begin = infoAr[12];
                end = infoAr[15];
                if (end > 0) {
                    copyChunk(begin, end);
                    copyChunk(infoAr[13], infoAr[16]);
                    copyChunk(infoAr[14], infoAr[17]);
                };
            };

            var sliceMsgFun = function () {};
            var setSliceCnt = function (parSliceCnt) {
                sliceCnt = parSliceCnt;
                lastSliceNum = sliceCnt - 1;
            };

            self.addEventListener('message', function (e) {

                if (isWorker) {
                    if (reuseMemory) {
                        if (e.data.reuse) {
                            memAr.push(e.data.reuse);
                        };
                    };

                    if (e.data.buf) {
                        if (sliceMode && awaiting !== 0) {
                            pile.push(e.data);
                        } else {
                            decoder.decode(
                                new Uint8Array(e.data.buf, e.data.offset || 0, e.data.length),
                                e.data.info,
                                function () {
                                    if (sliceMode && sliceNum !== lastSliceNum) {
                                        postMessage(e.data, [e.data.buf]);
                                    };
                                }
                            );
                        };
                        return;
                    };

                    if (e.data.slice) {
                        // update ref pic
                        var copyStart = nowValue();
                        copySlice(new Uint8Array(e.data.slice), lastBuf, e.data.infos[0].sliceInfoAr, e.data.width, e.data.height);

                        // is it the one? then we need to update it
                        if (e.data.theOne) {
                            copySlice(lastBuf, new Uint8Array(e.data.slice), sliceInfoAr, e.data.width, e.data.height);
                            if (timeDecoding > e.data.infos[0].timeDecoding) {
                                e.data.infos[0].timeDecoding = timeDecoding;
                            };
                            e.data.infos[0].timeCopy += (nowValue() - copyStart);
                        };
                        // move on
                        postMessage(e.data, [e.data.slice]);

                        // next frame in the pipe?
                        awaiting -= 1;
                        if (awaiting === 0 && pile.length) {
                            var data = pile.shift();
                            decoder.decode(
                                new Uint8Array(data.buf, data.offset || 0, data.length),
                                data.info,
                                function () {
                                    if (sliceMode && sliceNum !== lastSliceNum) {
                                        postMessage(data, [data.buf]);
                                    };
                                }
                            );
                        };

                        return;
                    };

                    if (e.data.setSliceCnt) {
                        setSliceCnt(e.data.sliceCnt);
                        return;
                    };

                } else {
                    if (e.data && e.data.type === "Broadway.js - Worker init") {
                        isWorker = true;
                        decoder = new Decoder(e.data.options);

                        if (e.data.options.sliceMode) {
                            reuseMemory = true;
                            sliceMode = true;
                            sliceNum = e.data.options.sliceNum;
                            setSliceCnt(e.data.options.sliceCnt);

                            decoder.onPictureDecoded = function (buffer, width, height, infos) {

                                // buffer needs to be copied because we give up ownership
                                var copyU8 = new Uint8Array(getMem(buffer.length));
                                copySlice(buffer, copyU8, infos[0].sliceInfoAr, width, height);

                                startDecoding = infos[0].startDecoding;
                                finishDecoding = infos[0].finishDecoding;
                                timeDecoding = finishDecoding - startDecoding;
                                infos[0].timeDecoding = timeDecoding;
                                infos[0].timeCopy = 0;

                                postMessage({
                                    slice: copyU8.buffer,
                                    sliceNum: sliceNum,
                                    width: width,
                                    height: height,
                                    infos: infos
                                }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership

                                awaiting = sliceCnt - 1;
                                lastBuf = buffer;
                                sliceInfoAr = infos[0].sliceInfoAr;

                            };
                        } else if (e.data.options.reuseMemory) {
                            reuseMemory = true;
                            decoder.onPictureDecoded = function (buffer, width, height, infos) {

                                // buffer needs to be copied because we give up ownership
                                var copyU8 = new Uint8Array(getMem(buffer.length));
                                copyU8.set(buffer, 0, buffer.length);

                                postMessage({
                                    buf: copyU8.buffer,
                                    length: buffer.length,
                                    width: width,
                                    height: height,
                                    infos: infos
                                }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership

                            };

                        } else {
                            decoder.onPictureDecoded = function (buffer, width, height, infos) {
                                if (buffer) {
                                    buffer = new Uint8Array(buffer);
                                };

                                // buffer needs to be copied because we give up ownership
                                var copyU8 = new Uint8Array(buffer.length);
                                copyU8.set(buffer, 0, buffer.length);

                                postMessage({
                                    buf: copyU8.buffer,
                                    length: buffer.length,
                                    width: width,
                                    height: height,
                                    infos: infos
                                }, [copyU8.buffer]); // 2nd parameter is used to indicate transfer of ownership

                            };
                        };

                        postMessage({
                            consoleLog: "broadway worker initialized"
                        });
                    };
                };
            }, false);
        };

        Decoder.nowValue = nowValue;

        return Decoder;

    })();

}));
