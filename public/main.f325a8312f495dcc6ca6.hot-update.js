/*! For license information please see main.f325a8312f495dcc6ca6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Gallery/GalleryElement.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./node_modules/gsap/index.js"),o=s("./app/shaders/gallery/vertex.glsl"),l=s("./app/shaders/gallery/fragment.glsl");class r{constructor({element:e,index:t,geometry:s,gl:i,length:h,scene:a,screen:n,viewport:o}){this.element=e,this.index=t,this.geo=s,this.gl=i,this.length=h,this.scene=a,this.screen=n,this.viewport=o,this.new_pos=0,this.createMesh(),this.createBounds()}createMesh(){const e=new Image,t=new i.Texture(this.gl,{generateMipmaps:!1});this.program=new h.Program(this.gl,{vertex:o.default,fragment:l.default,uniforms:{tMap:{value:t},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_alpha:{value:0},u_offset:{value:0},u_strength:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}}}),e.crossOrigin="anonymous",e.src=this.element.getAttribute("data-src"),e.onload=()=>{this.program.uniforms.u_imageSize.value=[e.naturalWidth,e.naturalHeight],t.image=e},this.plane=new a.Mesh(this.gl,{geometry:this.geo,program:this.program}),this.plane.setParent(this.scene)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y],this.gallery_height=this.length*this.bounds.height,this.full_height=this.gallery_height/this.screen.height*this.viewport.height,this.pos_x=Math.cos(this.index)*(this.screen.width/2/this.bounds.height)}show(){n.default.fromTo(this.program.uniforms.u_alpha,{value:0,duration:1},{value:1,duration:1})}hide(){n.default.to(this.program.uniforms.u_alpha,{value:0,duration:1})}onResize(e){if(this.new_pos=0,e){const{screen:t,viewport:s}=e;t&&(this.screen=t),s&&(this.viewport=s,this.plane.program.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(){this.x=this.bounds.left/this.screen.width,this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x*this.viewport.width+this.pos_x}updateY(e=0){this.y=(this.bounds.top-e)/this.screen.height;const t=this.plane.position.y-this.y/100;this.plane.program.uniforms.u_offset.value=n.default.utils.mapRange(-4,4,-.35,.35,t),this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y*this.viewport.height+this.new_pos}update(e,t,s){if(this.bounds){if(this.updateScale(),this.updateX(),this.updateY(e),this.plane.program.uniforms.u_strength.value=(e-t)/this.screen.height*15,"up"===s){this.plane.position.y+this.plane.scale.y<-this.viewport.height/2&&(this.new_pos+=this.full_height)}if("down"===s){this.plane.position.y-this.plane.scale.y>this.viewport.height/2&&(this.new_pos-=this.full_height)}}}}}},(function(e){e.h=()=>"a0a6c8f797b697013856"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMzI1YTgzMTJmNDk1ZGNjNmNhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c1pBTWUsTUFBTUEsRUFFbkJDLGFBQVksUUFBRUMsRUFBTyxNQUFFQyxFQUFLLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxPQUFFQyxFQUFNLE1BQUVDLEVBQUssT0FBRUMsRUFBTSxTQUFFQyxJQUVqRUMsS0FBS1IsUUFBVUEsRUFDZlEsS0FBS1AsTUFBUUEsRUFDYk8sS0FBS0MsSUFBTVAsRUFDWE0sS0FBS0wsR0FBS0EsRUFDVkssS0FBS0osT0FBU0EsRUFDZEksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsT0FBU0EsRUFDZEUsS0FBS0QsU0FBV0EsRUFFaEJDLEtBQUtFLFFBQVUsRUFFZkYsS0FBS0csYUFFTEgsS0FBS0ksY0FDUCxDQU1BRCxhQUVFLE1BQU1FLEVBQVEsSUFBSUMsTUFDWkMsRUFBVSxJQUFJQyxFQUFBQSxRQUFRUixLQUFLTCxHQUFJLENBQ25DYyxpQkFBaUIsSUFHbkJULEtBQUtVLFFBQVUsSUFBSUMsRUFBQUEsUUFBUVgsS0FBS0wsR0FDaEMsQ0FDRWlCLE9BQU0sVUFDTkMsU0FBUSxVQUNSQyxTQUNBLENBQ0VDLEtBQU0sQ0FBRUMsTUFBT1QsR0FDZlUsWUFBYSxDQUFFRCxNQUFPLENBQUMsRUFBRyxJQUMxQkUsWUFBYSxDQUFFRixNQUFPLENBQUMsRUFBRyxJQUMxQkcsUUFBUyxDQUFFSCxNQUFPLEdBQ2xCSSxTQUFVLENBQUVKLE1BQU8sR0FDbkJLLFdBQVksQ0FBRUwsTUFBTyxHQUNyQk0sZUFBZ0IsQ0FBRU4sTUFBTyxDQUFDaEIsS0FBS0QsU0FBU3dCLE1BQU92QixLQUFLRCxTQUFTeUIsWUFJakVuQixFQUFNb0IsWUFBYyxZQUNwQnBCLEVBQU1xQixJQUFNMUIsS0FBS1IsUUFBUW1DLGFBQWEsWUFDdEN0QixFQUFNdUIsT0FBUyxLQUViNUIsS0FBS1UsUUFBUUksU0FBU0csWUFBWUQsTUFBUSxDQUFDWCxFQUFNd0IsYUFBY3hCLEVBQU15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U0FBU3lCLE9BQVV4QixLQUFLRSxPQUN6SCxDQUVBd0QsT0FBT0gsRUFBU0ksRUFBTUMsR0FFcEIsR0FBSTVELEtBQUtrQyxPQUFULENBUUEsR0FOQWxDLEtBQUtvQyxjQUNMcEMsS0FBS3FDLFVBQ0xyQyxLQUFLc0MsUUFBUWlCLEdBRWJ2RCxLQUFLK0IsTUFBTXJCLFFBQVFJLFNBQVNPLFdBQVdMLE9BQVV1QyxFQUFVSSxHQUFRM0QsS0FBS0YsT0FBTzBCLE9BQVUsR0FFeEUsT0FBZG9DLEVBQ0gsQ0FDWTVELEtBQUsrQixNQUFNdUIsU0FBU2IsRUFBSXpDLEtBQUsrQixNQUFNUSxNQUFNRSxHQUUzQ3pDLEtBQUtELFNBQVN5QixPQUFTLElBRTdCeEIsS0FBS0UsU0FBV0YsS0FBSzJDLFlBRXpCLENBRUEsR0FBaUIsU0FBZGlCLEVBQ0gsQ0FDWTVELEtBQUsrQixNQUFNdUIsU0FBU2IsRUFBSXpDLEtBQUsrQixNQUFNUSxNQUFNRSxFQUU1Q3pDLEtBQUtELFNBQVN5QixPQUFTLElBRTVCeEIsS0FBS0UsU0FBV0YsS0FBSzJDLFlBRXpCLENBMUJ1QixDQTJCekIsa0JDaE1Ga0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2l0c2ZvcmdvdGhhbS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9HYWxsZXJ5L0dhbGxlcnlFbGVtZW50LmpzIiwid2VicGFjazovL2l0c2ZvcmdvdGhhbS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9nYWxsZXJ5L3ZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvZ2FsbGVyeS9mcmFnbWVudC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5RWxlbWVudFxue1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGluZGV4LCBnZW9tZXRyeSwgZ2wsIGxlbmd0aCwgc2NlbmUsIHNjcmVlbiwgdmlld3BvcnQgfSlcbiAge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmdlbyA9IGdlb21ldHJ5XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblxuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydFxuXG4gICAgdGhpcy5uZXdfcG9zID0gMFxuXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKClcbiAgfVxuXG4gIC8qXG4gICAgQ3JlYXRlLlxuICAqL1xuXG4gIGNyZWF0ZU1lc2goKVxuICB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsLCB7XG4gICAgICBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsXG4gICAge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB1bmlmb3JtczpcbiAgICAgIHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9LFxuICAgICAgICB1X2ltYWdlU2l6ZTogeyB2YWx1ZTogWzAsIDBdIH0sXG4gICAgICAgIHVfcGxhbmVTaXplOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgdV9hbHBoYTogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHVfb2Zmc2V0OiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHVfc3RyZW5ndGg6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV92aWV3cG9ydFNpemU6IHsgdmFsdWU6IFt0aGlzLnZpZXdwb3J0LndpZHRoLCB0aGlzLnZpZXdwb3J0LmhlaWdodF0gfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+XG4gICAge1xuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVfaW1hZ2VTaXplLnZhbHVlID0gW2ltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodF1cbiAgICAgIHRleHR1cmUuaW1hZ2UgPSBpbWFnZVxuICAgIH1cblxuICAgIHRoaXMucGxhbmUgPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW8sXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5wbGFuZS5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcygpXG4gIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuXG4gICAgdGhpcy5nYWxsZXJ5X2hlaWdodCA9IHRoaXMubGVuZ3RoICogdGhpcy5ib3VuZHMuaGVpZ2h0XG4gICAgdGhpcy5mdWxsX2hlaWdodCA9ICgodGhpcy5nYWxsZXJ5X2hlaWdodCAvIHRoaXMuc2NyZWVuLmhlaWdodCkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodClcblxuICAgIHRoaXMucG9zX3ggPSBNYXRoLmNvcyh0aGlzLmluZGV4KSAqICgodGhpcy5zY3JlZW4ud2lkdGggLyAyKSAvIHRoaXMuYm91bmRzLmhlaWdodClcbiAgfVxuXG4gIC8qXG4gICAgQW5pbWF0aW9ucy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIGdzYXAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X2FscGhhLFxuICAgIHtcbiAgICAgIHZhbHVlOiAwLjAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6IDEuMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKVxuICB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudV9hbHBoYSxcbiAgICB7XG4gICAgICB2YWx1ZTogMC4wLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuICB9XG5cbiAgLypcbiAgICBFdmVudHMuXG4gICovXG5cbiAgb25SZXNpemUoc2l6ZXMpXG4gIHtcbiAgICB0aGlzLm5ld19wb3MgPSAwXG5cbiAgICBpZihzaXplcylcbiAgICB7XG4gICAgICBjb25zdCB7IHNjcmVlbiwgdmlld3BvcnQgfSA9IHNpemVzXG5cbiAgICAgIGlmKHNjcmVlbikgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICAgIGlmKHZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydFxuXG4gICAgICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3ZpZXdwb3J0U2l6ZS52YWx1ZSA9IFt0aGlzLnZpZXdwb3J0LndpZHRoLCB0aGlzLnZpZXdwb3J0LmhlaWdodF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcygpXG4gIH1cblxuICAvKlxuICAgIFVwZGF0ZS5cbiAgKi9cblxuICB1cGRhdGVTY2FsZSgpXG4gIHtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnZpZXdwb3J0LndpZHRoICogdGhpcy5ib3VuZHMud2lkdGggLyB0aGlzLnNjcmVlbi53aWR0aFxuICAgIHRoaXMucGxhbmUuc2NhbGUueSA9IHRoaXMudmlld3BvcnQuaGVpZ2h0ICogdGhpcy5ib3VuZHMuaGVpZ2h0IC8gdGhpcy5zY3JlZW4uaGVpZ2h0XG5cbiAgICB0aGlzLnBsYW5lLnByb2dyYW0udW5pZm9ybXMudV9wbGFuZVNpemUudmFsdWUgPSBbdGhpcy5wbGFuZS5zY2FsZS54LCB0aGlzLnBsYW5lLnNjYWxlLnldXG4gIH1cblxuICB1cGRhdGVYKClcbiAge1xuICAgIHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB0aGlzLnNjcmVlbi53aWR0aFxuXG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi54ID0gKC10aGlzLnZpZXdwb3J0LndpZHRoIC8gMikgKyAodGhpcy5wbGFuZS5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy52aWV3cG9ydC53aWR0aCkgKyB0aGlzLnBvc194XG4gIH1cblxuICB1cGRhdGVZKGN1cnJlbnQ9MClcbiAge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgLSBjdXJyZW50KSAvIHRoaXMuc2NyZWVuLmhlaWdodFxuICAgIGNvbnN0IHBvc192aWV3cG9ydCA9IHRoaXMucGxhbmUucG9zaXRpb24ueSAtIHRoaXMueSAvIDEwMFxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfb2Zmc2V0LnZhbHVlID0gZ3NhcC51dGlscy5tYXBSYW5nZSgtNCwgNCwgLS4zNSwgLjM1LCBwb3Nfdmlld3BvcnQpXG5cbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgPSAodGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKSAtICh0aGlzLnBsYW5lLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodCkgKyB0aGlzLm5ld19wb3NcbiAgfVxuXG4gIHVwZGF0ZShjdXJyZW50LCBsYXN0LCBkaXJlY3Rpb24pXG4gIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoY3VycmVudClcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3N0cmVuZ3RoLnZhbHVlID0gKChjdXJyZW50IC0gbGFzdCkgLyB0aGlzLnNjcmVlbi5oZWlnaHQpICogMTVcblxuICAgIGlmKGRpcmVjdGlvbiA9PT0gJ3VwJylcbiAgICB7XG4gICAgICBjb25zdCB5ID0gdGhpcy5wbGFuZS5wb3NpdGlvbi55ICsgdGhpcy5wbGFuZS5zY2FsZS55XG5cbiAgICAgIGlmKHkgPCAtdGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKVxuICAgICAge1xuICAgICAgICB0aGlzLm5ld19wb3MgKz0gdGhpcy5mdWxsX2hlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKVxuICAgIHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgLSB0aGlzLnBsYW5lLnNjYWxlLnlcblxuICAgICAgaWYoeSA+IHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMilcbiAgICAgIHtcbiAgICAgICAgdGhpcy5uZXdfcG9zIC09IHRoaXMuZnVsbF9oZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEwYTZjOGY3OTdiNjk3MDEzODU2XCIpIl0sIm5hbWVzIjpbIkdhbGxlcnlFbGVtZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW5kZXgiLCJnZW9tZXRyeSIsImdsIiwibGVuZ3RoIiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsInRoaXMiLCJnZW8iLCJuZXdfcG9zIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsImltYWdlIiwiSW1hZ2UiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImdlbmVyYXRlTWlwbWFwcyIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVfaW1hZ2VTaXplIiwidV9wbGFuZVNpemUiLCJ1X2FscGhhIiwidV9vZmZzZXQiLCJ1X3N0cmVuZ3RoIiwidV92aWV3cG9ydFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInBsYW5lIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzY2FsZSIsIngiLCJ5IiwiZ2FsbGVyeV9oZWlnaHQiLCJmdWxsX2hlaWdodCIsInBvc194IiwiTWF0aCIsImNvcyIsInNob3ciLCJnc2FwIiwiZHVyYXRpb24iLCJoaWRlIiwib25SZXNpemUiLCJzaXplcyIsImxlZnQiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJ0b3AiLCJwb3Nfdmlld3BvcnQiLCJ1cGRhdGUiLCJsYXN0IiwiZGlyZWN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9