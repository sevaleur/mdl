/*! For license information please see main.513b01dcfc9628ee6e80.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/shaders/about/vertex.glsl":(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float u_time;\n\nvarying vec2 v_uv;\nvarying float v_ele;\n\nvoid main()\n{\n  vec4 new_pos = modelViewMatrix * vec4(position, 1.0);\n\n  float ele = sin(new_pos.x * .3 + u_time) * .1 + sin(new_pos.y * .2 - u_time) * .1;\n  new_pos.z += ele;\n\n  gl_Position = projectionMatrix * new_pos;\n\n  v_uv = uv;\n  v_ele = ele;\n}\n"}},(function(n){n.h=()=>"466f3324a30f924b98d3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MTNiMDFkY2ZjOTYyOGVlNmU4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aUlBQUEsMmVDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vLi9hcHAvc2hhZGVycy9hYm91dC92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbnZhcnlpbmcgdmVjMiB2X3V2O1xcbnZhcnlpbmcgZmxvYXQgdl9lbGU7XFxuXFxudm9pZCBtYWluKClcXG57XFxuICB2ZWM0IG5ld19wb3MgPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcblxcbiAgZmxvYXQgZWxlID0gc2luKG5ld19wb3MueCAqIC4zICsgdV90aW1lKSAqIC4xICsgc2luKG5ld19wb3MueSAqIC4yIC0gdV90aW1lKSAqIC4xO1xcbiAgbmV3X3Bvcy56ICs9IGVsZTtcXG5cXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld19wb3M7XFxuXFxuICB2X3V2ID0gdXY7XFxuICB2X2VsZSA9IGVsZTtcXG59XFxuXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDY2ZjMzMjRhMzBmOTI0Yjk4ZDNcIikiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9