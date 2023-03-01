/*! For license information please see main.726d658d75a7624ccd08.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Home/menu/ImageEl.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),h=s("./node_modules/gsap/index.js"),r=s("./app/shaders/home/element/vertex.glsl"),n=s("./app/shaders/home/element/fragment.glsl");class o{constructor({element:e,index:t,geometry:s,gl:i,length:a,scene:h,screen:r,viewport:n}){this.element=e,this.index=t,this.geo=s,this.gl=i,this.length=a,this.scene=h,this.screen=r,this.viewport=n,this.createMesh(),this.createBounds()}createMesh(){this.texture=window.IMAGE_TEXTURES[this.element.getAttribute("data-src")],this.program=new i.Program(this.gl,{vertex:r.default,fragment:n.default,uniforms:{tMap:{value:this.texture},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_alpha:{value:0},u_offset:{value:0},u_scroll:{value:0},u_progress:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}}}),this.program.uniforms.u_imageSize.value=[this.texture.image.naturalWidth,this.texture.image.naturalHeight],this.plane=new a.Mesh(this.gl,{geometry:this.geo,program:this.program}),this.plane.setParent(this.scene)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}show(){h.default.fromTo(this.program.uniforms.u_alpha,{value:0},{value:1,duration:1})}hide(){h.default.to(this.program.uniforms.u_alpha,{value:0,duration:1})}onResize(e){if(e){const{screen:t,viewport:s}=e;t&&(this.screen=t),s&&(this.viewport=s,this.plane.program.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(e=0){this.x=(this.bounds.left+e)/this.screen.width;const t=this.plane.position.x-this.x/100;this.plane.program.uniforms.u_offset.value=h.default.utils.mapRange(-4,4,-.35,.35,t),this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x*this.viewport.width}updateY(){this.y=this.bounds.top/this.screen.height,this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y*this.viewport.height}update(e){this.bounds&&(this.updateScale(),this.updateX(e.current),this.updateY(),this.plane.program.uniforms.u_scroll.value=(e.current-e.last)/this.screen.width*30)}}}},(function(e){e.h=()=>"a55df9cfbc3bdf9a98fb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUsyQixNQUFNUSxNQUFNRSxFQUN4RixDQUVBSixRQUFRVyxFQUFRLEdBRWQ1QyxLQUFLb0MsR0FBS3BDLEtBQUs4QixPQUFPZSxLQUFPRCxHQUFXNUMsS0FBS0YsT0FBT3dCLE1BQ3BELE1BQU13QixFQUFlOUMsS0FBSzJCLE1BQU1vQixTQUFTWCxFQUFJcEMsS0FBS29DLEVBQUksSUFFdERwQyxLQUFLMkIsTUFBTW5CLFFBQVFJLFNBQVNNLFNBQVNKLE1BQVF5QixFQUFBQSxRQUFBQSxNQUFBQSxVQUFxQixFQUFHLEdBQUksSUFBSyxJQUFLTyxHQUVuRjlDLEtBQUsyQixNQUFNb0IsU0FBU1gsR0FBTXBDLEtBQUtELFNBQVN1QixNQUFRLEVBQU10QixLQUFLMkIsTUFBTVEsTUFBTUMsRUFBSSxFQUFNcEMsS0FBS29DLEVBQUlwQyxLQUFLRCxTQUFTdUIsS0FDMUcsQ0FFQVksVUFFRWxDLEtBQUtxQyxFQUFJckMsS0FBSzhCLE9BQU9rQixJQUFNaEQsS0FBS0YsT0FBT3lCLE9BRXZDdkIsS0FBSzJCLE1BQU1vQixTQUFTVixFQUFLckMsS0FBS0QsU0FBU3dCLE9BQVMsRUFBTXZCLEtBQUsyQixNQUFNUSxNQUFNRSxFQUFJLEVBQU1yQyxLQUFLcUMsRUFBSXJDLEtBQUtELFNBQVN3QixNQUMxRyxDQUVBMEIsT0FBT0MsR0FFRGxELEtBQUs4QixTQUVUOUIsS0FBS2dDLGNBQ0xoQyxLQUFLaUMsUUFBUWlCLEVBQU9OLFNBQ3BCNUMsS0FBS2tDLFVBRUxsQyxLQUFLMkIsTUFBTW5CLFFBQVFJLFNBQVNPLFNBQVNMLE9BQVVvQyxFQUFPTixRQUFVTSxFQUFPQyxNQUFRbkQsS0FBS0YsT0FBT3dCLE1BQVMsR0FDdEcsa0JDM0pGOEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2l0c2ZvcmdvdGhhbS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL21lbnUvSW1hZ2VFbC5qcyIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvaG9tZS9lbGVtZW50L3ZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvaG9tZS9lbGVtZW50L2ZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlRWxcbntcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBpbmRleCwgZ2VvbWV0cnksIGdsLCBsZW5ndGgsIHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0IH0pXG4gIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nZW8gPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGUuXG4gICovXG5cbiAgY3JlYXRlTWVzaCgpXG4gIHtcbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuSU1BR0VfVEVYVFVSRVNbdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsXG4gICAge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB1bmlmb3JtczpcbiAgICAgIHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVfaW1hZ2VTaXplOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgdV9wbGFuZVNpemU6IHsgdmFsdWU6IFswLCAwXSB9LFxuICAgICAgICB1X2FscGhhOiB7IHZhbHVlOiAwLjAgfSxcbiAgICAgICAgdV9vZmZzZXQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV9zY3JvbGw6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV9wcm9ncmVzczogeyB2YWx1ZTogMC4wIH0sXG4gICAgICAgIHVfdmlld3BvcnRTaXplOiB7IHZhbHVlOiBbdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHRdIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVfaW1hZ2VTaXplLnZhbHVlID0gW3RoaXMudGV4dHVyZS5pbWFnZS5uYXR1cmFsV2lkdGgsIHRoaXMudGV4dHVyZS5pbWFnZS5uYXR1cmFsSGVpZ2h0XVxuXG4gICAgdGhpcy5wbGFuZSA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbyxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLnBsYW5lLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKClcbiAge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG5cbiAgICB0aGlzLnBsYW5lLnByb2dyYW0udW5pZm9ybXMudV9wbGFuZVNpemUudmFsdWUgPSBbdGhpcy5wbGFuZS5zY2FsZS54LCB0aGlzLnBsYW5lLnNjYWxlLnldXG4gIH1cblxuICAvKlxuICAgIEFuaW1hdGlvbnMuXG4gICovXG5cbiAgc2hvdygpXG4gIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X2FscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMC4wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgIH0pXG4gIH1cblxuICBoaWRlKClcbiAge1xuICAgIGdzYXAudG8oXG4gICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudV9hbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDAuMCxcbiAgICAgICAgZHVyYXRpb246IDFcbiAgICAgIH0pXG4gIH1cblxuICAvKlxuICAgIEV2ZW50cy5cbiAgKi9cblxuICBvblJlc2l6ZShzaXplcylcbiAge1xuICAgIGlmKHNpemVzKVxuICAgIHtcbiAgICAgIGNvbnN0IHsgc2NyZWVuLCB2aWV3cG9ydCB9ID0gc2l6ZXNcblxuICAgICAgaWYoc2NyZWVuKSB0aGlzLnNjcmVlbiA9IHNjcmVlblxuICAgICAgaWYodmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0XG5cbiAgICAgICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfdmlld3BvcnRTaXplLnZhbHVlID0gW3RoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKClcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlLlxuICAqL1xuXG4gIHVwZGF0ZVNjYWxlKClcbiAge1xuICAgIHRoaXMucGxhbmUuc2NhbGUueCA9ICh0aGlzLnZpZXdwb3J0LndpZHRoICogdGhpcy5ib3VuZHMud2lkdGggLyB0aGlzLnNjcmVlbi53aWR0aClcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnkgPSB0aGlzLnZpZXdwb3J0LmhlaWdodCAqIHRoaXMuYm91bmRzLmhlaWdodCAvIHRoaXMuc2NyZWVuLmhlaWdodFxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgdXBkYXRlWChjdXJyZW50PTApXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIGN1cnJlbnQpIC8gdGhpcy5zY3JlZW4ud2lkdGhcbiAgICBjb25zdCBwb3Nfdmlld3BvcnQgPSB0aGlzLnBsYW5lLnBvc2l0aW9uLnggLSB0aGlzLnggLyAxMDBcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X29mZnNldC52YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoLTQsIDQsIC0uMzUsIC4zNSwgcG9zX3ZpZXdwb3J0KVxuXG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi54ID0gKC10aGlzLnZpZXdwb3J0LndpZHRoIC8gMikgKyAodGhpcy5wbGFuZS5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy52aWV3cG9ydC53aWR0aClcbiAgfVxuXG4gIHVwZGF0ZVkoKVxuICB7XG4gICAgdGhpcy55ID0gdGhpcy5ib3VuZHMudG9wIC8gdGhpcy5zY3JlZW4uaGVpZ2h0XG5cbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgPSAodGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKSAtICh0aGlzLnBsYW5lLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpXG4gIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbC5jdXJyZW50KVxuICAgIHRoaXMudXBkYXRlWSgpXG5cbiAgICB0aGlzLnBsYW5lLnByb2dyYW0udW5pZm9ybXMudV9zY3JvbGwudmFsdWUgPSAoKHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLmxhc3QpIC8gdGhpcy5zY3JlZW4ud2lkdGgpICogMzBcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTU1ZGY5Y2ZiYzNiZGY5YTk4ZmJcIikiXSwibmFtZXMiOlsiSW1hZ2VFbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImluZGV4IiwiZ2VvbWV0cnkiLCJnbCIsImxlbmd0aCIsInNjZW5lIiwic2NyZWVuIiwidmlld3BvcnQiLCJ0aGlzIiwiZ2VvIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsInRleHR1cmUiLCJ3aW5kb3ciLCJJTUFHRV9URVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVfaW1hZ2VTaXplIiwidV9wbGFuZVNpemUiLCJ1X2FscGhhIiwidV9vZmZzZXQiLCJ1X3Njcm9sbCIsInVfcHJvZ3Jlc3MiLCJ1X3ZpZXdwb3J0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGxhbmUiLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNjYWxlIiwieCIsInkiLCJzaG93IiwiZ3NhcCIsImR1cmF0aW9uIiwiaGlkZSIsIm9uUmVzaXplIiwic2l6ZXMiLCJjdXJyZW50IiwibGVmdCIsInBvc192aWV3cG9ydCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwibGFzdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==