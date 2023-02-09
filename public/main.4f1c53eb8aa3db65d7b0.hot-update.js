/*! For license information please see main.4f1c53eb8aa3db65d7b0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Home/menu/MenuElement.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i("./node_modules/ogl/src/core/Texture.js"),h=i("./node_modules/ogl/src/core/Program.js"),a=i("./node_modules/ogl/src/core/Mesh.js"),n=i("./node_modules/gsap/index.js"),o=i("./app/shaders/home/element/vertex.glsl"),r=i("./app/shaders/home/element/fragment.glsl");Object(function(){var e=new Error("Cannot find module './Title'");throw e.code="MODULE_NOT_FOUND",e}());class l{constructor({element:e,index:t,renderer:i,text:s,geometry:h,gl:a,length:n,scene:o,screen:r,viewport:l}){this.element=e,this.index=t,this.text=s,this.geo=h,this.gl=a,this.length=n,this.scene=o,this.screen=r,this.viewport=l,this.new_pos=0,this.createMesh(),this.createBounds()}createMesh(){const e=new Image,t=new s.Texture(this.gl,{generateMipmaps:!1});this.program=new h.Program(this.gl,{vertex:o.default,fragment:r.default,uniforms:{tMap:{value:t},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_alpha:{value:0},u_offset:{value:0},u_scroll:{value:0},u_progress:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}}}),e.crossOrigin="anonymous",e.src=this.element.getAttribute("data-src"),e.onload=()=>{this.program.uniforms.u_imageSize.value=[e.naturalWidth,e.naturalHeight],t.image=e},this.plane=new a.Mesh(this.gl,{geometry:this.geo,program:this.program}),this.plane.setParent(this.scene)}createTitle(e){this.title=new Object(function(){var e=new Error("Cannot find module './Title'");throw e.code="MODULE_NOT_FOUND",e}())({renderer:e,gl:this.gl,plane:this.plane,text:this.text,viewport:this.viewport})}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.wrap=document.querySelector(".home__gallery__wrapper"),this.wrap_bounds=this.wrap.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y],this.full_width=this.wrap_bounds.width/this.screen.width*this.viewport.width}show(){n.default.fromTo(this.program.uniforms.u_alpha,{value:0,duration:1},{value:1,duration:1})}hide(){n.default.to(this.program.uniforms.u_alpha,{value:0,duration:1})}onResize(e){if(this.new_pos=0,e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.program.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width/2,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(e=0){this.x=(this.bounds.left-e)/this.screen.width;const t=this.plane.position.x-this.x/100;this.plane.program.uniforms.u_offset.value=n.default.utils.mapRange(-4,4,-.35,.35,t),this.plane.position.x=this.viewport.width/2-this.plane.scale.x/2-this.x*this.viewport.width+this.new_pos}updateY(){this.y=this.bounds.top/this.screen.height,this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y*this.viewport.height,this.plane.position.y+=.5*Math.cos(this.plane.position.x/this.viewport.width*Math.PI)-.5}update(e,t){if(this.bounds){if(this.updateScale(),this.updateX(e.current),this.updateY(),this.plane.program.uniforms.u_scroll.value=(e.current-e.last)/this.screen.width*30,"up"===t){this.plane.position.x+this.plane.scale.x<-this.viewport.width/2&&(this.new_pos+=this.full_width)}if("down"===t){this.plane.position.x-this.plane.scale.x>this.viewport.width/2&&(this.new_pos-=this.full_width)}}}}}},(function(e){e.h=()=>"7afe584ed7ff32d936d4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvQ2FudmFzL0hvbWUvbWVudS9NZW51RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvaG9tZS9lbGVtZW50L3ZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvaG9tZS9lbGVtZW50L2ZyYWdtZW50Lmdsc2wnXG5cbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RWxlbWVudFxue1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGluZGV4LCByZW5kZXJlciwgdGV4dCwgZ2VvbWV0cnksIGdsLCBsZW5ndGgsIHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0IH0pXG4gIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuICAgIHRoaXMuZ2VvID0gZ2VvbWV0cnlcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0XG5cbiAgICB0aGlzLm5ld19wb3MgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIC8qIHRoaXMuY3JlYXRlVGl0bGUocmVuZGVyZXIpICovXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGUuXG4gICovXG5cbiAgY3JlYXRlTWVzaCgpXG4gIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHtcbiAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2VcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCxcbiAgICB7XG4gICAgICB2ZXJ0ZXgsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHVuaWZvcm1zOlxuICAgICAge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXG4gICAgICAgIHVfaW1hZ2VTaXplOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgdV9wbGFuZVNpemU6IHsgdmFsdWU6IFswLCAwXSB9LFxuICAgICAgICB1X2FscGhhOiB7IHZhbHVlOiAwLjAgfSxcbiAgICAgICAgdV9vZmZzZXQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV9zY3JvbGw6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV9wcm9ncmVzczogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHVfdmlld3BvcnRTaXplOiB7IHZhbHVlOiBbdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHRdIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIGltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PlxuICAgIHtcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X2ltYWdlU2l6ZS52YWx1ZSA9IFtpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHRdXG4gICAgICB0ZXh0dXJlLmltYWdlID0gaW1hZ2VcbiAgICB9XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvLFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMucGxhbmUuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVUaXRsZShyZW5kZXJlcikge1xuICAgIHRoaXMudGl0bGUgPSBuZXcgVGl0bGUoe1xuICAgICAgcmVuZGVyZXIsXG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLnBsYW5lLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKClcbiAge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLndyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlcicpXG4gICAgdGhpcy53cmFwX2JvdW5kcyA9IHRoaXMud3JhcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuXG4gICAgdGhpcy5mdWxsX3dpZHRoID0gKCh0aGlzLndyYXBfYm91bmRzLndpZHRoIC8gdGhpcy5zY3JlZW4ud2lkdGgpICogdGhpcy52aWV3cG9ydC53aWR0aClcbiAgfVxuXG4gIC8qXG4gICAgQW5pbWF0aW9ucy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIGdzYXAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X2FscGhhLFxuICAgIHtcbiAgICAgIHZhbHVlOiAwLjAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IDEuMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcblxuICAgIC8vdGhpcy50aXRsZS5zaG93KClcbiAgfVxuXG4gIGhpZGUoKVxuICB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudV9hbHBoYSxcbiAgICB7XG4gICAgICB2YWx1ZTogMC4wLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuXG4gICAgLy90aGlzLnRpdGxlLmhpZGUoKVxuICB9XG5cbiAgLypcbiAgICBFdmVudHMuXG4gICovXG5cbiAgb25SZXNpemUoc2l6ZXMpXG4gIHtcbiAgICB0aGlzLm5ld19wb3MgPSAwXG5cbiAgICBpZihzaXplcylcbiAgICB7XG4gICAgICBjb25zdCB7IHNjcmVlbiwgdmlld3BvcnQgfSA9IHNpemVzXG5cbiAgICAgIGlmKHNjcmVlbikgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICAgIGlmKHZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydFxuXG4gICAgICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3ZpZXdwb3J0U2l6ZS52YWx1ZSA9IFt0aGlzLnZpZXdwb3J0LndpZHRoLCB0aGlzLnZpZXdwb3J0LmhlaWdodF1cbiAgICAgICAgLy90aGlzLnRpdGxlLnByb2dyYW0udW5pZm9ybXMudV92aWV3cG9ydFNpemUudmFsdWUgPSBbdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHRdXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGUuXG4gICovXG5cbiAgdXBkYXRlU2NhbGUoKVxuICB7XG4gICAgdGhpcy5wbGFuZS5zY2FsZS54ID0gKHRoaXMudmlld3BvcnQud2lkdGggKiB0aGlzLmJvdW5kcy53aWR0aCAvIHRoaXMuc2NyZWVuLndpZHRoKSAvIDJcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnkgPSB0aGlzLnZpZXdwb3J0LmhlaWdodCAqIHRoaXMuYm91bmRzLmhlaWdodCAvIHRoaXMuc2NyZWVuLmhlaWdodFxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgdXBkYXRlWChjdXJyZW50PTApXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCAtIGN1cnJlbnQpIC8gdGhpcy5zY3JlZW4ud2lkdGhcbiAgICBjb25zdCBwb3Nfdmlld3BvcnQgPSB0aGlzLnBsYW5lLnBvc2l0aW9uLnggLSB0aGlzLnggLyAxMDBcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X29mZnNldC52YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoLTQsIDQsIC0uMzUsIC4zNSwgcG9zX3ZpZXdwb3J0KVxuXG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi54ID0gKHRoaXMudmlld3BvcnQud2lkdGggLyAyKSAtICh0aGlzLnBsYW5lLnNjYWxlLnggLyAyKSAtICh0aGlzLnggKiB0aGlzLnZpZXdwb3J0LndpZHRoKSArIHRoaXMubmV3X3Bvc1xuICB9XG5cbiAgdXBkYXRlWSgpXG4gIHtcbiAgICB0aGlzLnkgPSB0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnNjcmVlbi5oZWlnaHRcblxuICAgIHRoaXMucGxhbmUucG9zaXRpb24ueSA9ICh0aGlzLnZpZXdwb3J0LmhlaWdodCAvIDIpIC0gKHRoaXMucGxhbmUuc2NhbGUueSAvIDIpIC0gKHRoaXMueSAqIHRoaXMudmlld3BvcnQuaGVpZ2h0KVxuICAgIHRoaXMucGxhbmUucG9zaXRpb24ueSArPSBNYXRoLmNvcygodGhpcy5wbGFuZS5wb3NpdGlvbi54IC8gdGhpcy52aWV3cG9ydC53aWR0aCkgKiBNYXRoLlBJKSAqIDAuNSAtIDAuNTtcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIGRpcmVjdGlvbilcbiAge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsLmN1cnJlbnQpXG4gICAgdGhpcy51cGRhdGVZKClcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3Njcm9sbC52YWx1ZSA9ICgoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwubGFzdCkgLyB0aGlzLnNjcmVlbi53aWR0aCkgKiAzMFxuICAgIC8vdGhpcy50aXRsZS5wcm9ncmFtLnVuaWZvcm1zLnVfc2Nyb2xsLnZhbHVlID0gKChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC5sYXN0KSAvIHRoaXMuc2NyZWVuLndpZHRoKSAqIDMwXG5cbiAgICBpZihkaXJlY3Rpb24gPT09ICd1cCcpXG4gICAge1xuICAgICAgY29uc3QgeCA9IHRoaXMucGxhbmUucG9zaXRpb24ueCArIHRoaXMucGxhbmUuc2NhbGUueFxuXG4gICAgICBpZih4IDwgLXRoaXMudmlld3BvcnQud2lkdGggLyAyKVxuICAgICAge1xuICAgICAgICB0aGlzLm5ld19wb3MgKz0gdGhpcy5mdWxsX3dpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoZGlyZWN0aW9uID09PSAnZG93bicpXG4gICAge1xuICAgICAgY29uc3QgeCA9IHRoaXMucGxhbmUucG9zaXRpb24ueCAtIHRoaXMucGxhbmUuc2NhbGUueFxuXG4gICAgICBpZih4ID4gdGhpcy52aWV3cG9ydC53aWR0aCAvIDIpXG4gICAgICB7XG4gICAgICAgIHRoaXMubmV3X3BvcyAtPSB0aGlzLmZ1bGxfd2lkdGhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdhZmU1ODRlZDdmZjMyZDkzNmQ0XCIpIl0sIm5hbWVzIjpbIk1lbnVFbGVtZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW5kZXgiLCJyZW5kZXJlciIsInRleHQiLCJnZW9tZXRyeSIsImdsIiwibGVuZ3RoIiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsInRoaXMiLCJnZW8iLCJuZXdfcG9zIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsImltYWdlIiwiSW1hZ2UiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImdlbmVyYXRlTWlwbWFwcyIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVfaW1hZ2VTaXplIiwidV9wbGFuZVNpemUiLCJ1X2FscGhhIiwidV9vZmZzZXQiLCJ1X3Njcm9sbCIsInVfcHJvZ3Jlc3MiLCJ1X3ZpZXdwb3J0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGxhbmUiLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlVGl0bGUiLCJ0aXRsZSIsIlRpdGxlIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid3JhcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndyYXBfYm91bmRzIiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNjYWxlIiwieCIsInkiLCJmdWxsX3dpZHRoIiwic2hvdyIsImdzYXAiLCJkdXJhdGlvbiIsImhpZGUiLCJvblJlc2l6ZSIsInNpemVzIiwiY3VycmVudCIsImxlZnQiLCJwb3Nfdmlld3BvcnQiLCJwb3NpdGlvbiIsInRvcCIsIk1hdGgiLCJjb3MiLCJQSSIsInVwZGF0ZSIsInNjcm9sbCIsImRpcmVjdGlvbiIsImxhc3QiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=