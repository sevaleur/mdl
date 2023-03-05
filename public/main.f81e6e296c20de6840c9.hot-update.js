/*! For license information please see main.f81e6e296c20de6840c9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Home/menu/ImageEl.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var s=i("./node_modules/ogl/src/core/Program.js"),a=i("./node_modules/ogl/src/core/Mesh.js"),h=i("./node_modules/gsap/index.js"),r=i("./node_modules/prefix/index.js"),n=i.n(r),l=i("./app/shaders/home/element/vertex.glsl"),o=i("./app/shaders/home/element/fragment.glsl");class p{constructor({element:e,index:t,link:i,geometry:s,gl:a,length:h,scene:r,screen:l,viewport:o}){this.element=e,this.index=t,this.link=i,this.geo=s,this.gl=a,this.length=h,this.scene=r,this.screen=l,this.viewport=o,this.l_prefix=n()("top"),this.createMesh(),this.createBounds()}createMesh(){this.texture=window.IMAGE_TEXTURES[this.element.getAttribute("data-src")],this.program=new s.Program(this.gl,{vertex:l.default,fragment:o.default,uniforms:{tMap:{value:this.texture},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_alpha:{value:0},u_offset:{value:0},u_scroll:{value:0},u_progress:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}}}),this.program.uniforms.u_imageSize.value=[this.texture.image.naturalWidth,this.texture.image.naturalHeight],this.plane=new a.Mesh(this.gl,{geometry:this.geo,program:this.program}),this.plane.setParent(this.scene)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}show(){h.default.fromTo(this.program.uniforms.u_alpha,{value:0},{value:1,duration:1})}hide(){h.default.to(this.program.uniforms.u_alpha,{value:0,duration:1})}onResize(e){if(e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.program.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(e=0){this.x=(this.bounds.left+e)/this.screen.width;const t=this.plane.position.x+this.x/100;this.plane.program.uniforms.u_offset.value=h.default.utils.mapRange(-4,4,-.35,.35,t),this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x*this.viewport.width}updateY(){this.plane.position.y=h.default.utils.mapRange(-this.viewport.width,this.viewport.width,-Math.PI,Math.PI,this.plane.position.x),this.y=this.plane.position.y,this.link_pos=this.viewport.height+this.plane.scale.y+this.y*this.viewport.height,this.link.style[this.l_prefix]=`${this.link_pos}%`}update(e){this.bounds&&(this.updateScale(),this.updateX(e.current),this.updateY(),this.plane.program.uniforms.u_scroll.value=(e.current-e.last)/this.screen.width*30)}}}},(function(e){e.h=()=>"0fccab6762daee9dfdbc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mODFlNmUyOTZjMjBkZTY4NDBjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFpBUWUsTUFBTUEsRUFFbkJDLGFBQVksUUFBRUMsRUFBTyxNQUFFQyxFQUFLLEtBQUVDLEVBQUksU0FBRUMsRUFBUSxHQUFFQyxFQUFFLE9BQUVDLEVBQU0sTUFBRUMsRUFBSyxPQUFFQyxFQUFNLFNBQUVDLElBRXZFQyxLQUFLVCxRQUFVQSxFQUNmUyxLQUFLUixNQUFRQSxFQUNiUSxLQUFLUCxLQUFPQSxFQUNaTyxLQUFLQyxJQUFNUCxFQUNYTSxLQUFLTCxHQUFLQSxFQUNWSyxLQUFLSixPQUFTQSxFQUNkSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixPQUFTQSxFQUNkRSxLQUFLRCxTQUFXQSxFQUdoQkMsS0FBS0UsU0FBV0MsSUFBTyxPQUV2QkgsS0FBS0ksYUFDTEosS0FBS0ssY0FDUCxDQU1BRCxhQUVFSixLQUFLTSxRQUFVQyxPQUFPQyxlQUFlUixLQUFLVCxRQUFRa0IsYUFBYSxhQUUvRFQsS0FBS1UsUUFBVSxJQUFJQyxFQUFBQSxRQUFRWCxLQUFLTCxHQUNoQyxDQUNFaUIsT0FBTSxVQUNOQyxTQUFRLFVBQ1JDLFNBQ0EsQ0FDRUMsS0FBTSxDQUFFQyxNQUFPaEIsS0FBS00sU0FDcEJXLFlBQWEsQ0FBRUQsTUFBTyxDQUFDLEVBQUcsSUFDMUJFLFlBQWEsQ0FBRUYsTUFBTyxDQUFDLEVBQUcsSUFDMUJHLFFBQVMsQ0FBRUgsTUFBTyxHQUNsQkksU0FBVSxDQUFFSixNQUFPLEdBQ25CSyxTQUFVLENBQUVMLE1BQU8sR0FDbkJNLFdBQVksQ0FBRU4sTUFBTyxHQUNyQk8sZUFBZ0IsQ0FBRVAsTUFBTyxDQUFDaEIsS0FBS0QsU0FBU3lCLE1BQU94QixLQUFLRCxTQUFTMEIsWUFJakV6QixLQUFLVSxRQUFRSSxTQUFTRyxZQUFZRCxNQUFRLENBQUNoQixLQUFLTSxRQUFRb0IsTUFBTUMsYUFBYzNCLEtBQUtNLFFBQVFvQixNQUFNRSxlQUUvRjVCLEtBQUs2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QUFTTCxPQUFVdUMsRUFBT1QsUUFBVVMsRUFBT0MsTUFBUXhELEtBQUtGLE9BQU8wQixNQUFTLEdBQ3RHLGtCQ3ZLRmlDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9tZW51L0ltYWdlRWwuanMiLCJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lL2VsZW1lbnQvdmVydGV4Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9ob21lL2VsZW1lbnQvZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VFbFxue1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGluZGV4LCBsaW5rLCBnZW9tZXRyeSwgZ2wsIGxlbmd0aCwgc2NlbmUsIHNjcmVlbiwgdmlld3BvcnQgfSlcbiAge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmxpbmsgPSBsaW5rXG4gICAgdGhpcy5nZW8gPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgIC8vdGhpcy5sX3ByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcbiAgICB0aGlzLmxfcHJlZml4ID0gUHJlZml4KCd0b3AnKVxuXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcygpXG4gIH1cblxuICAvKlxuICAgIENyZWF0ZS5cbiAgKi9cblxuICBjcmVhdGVNZXNoKClcbiAge1xuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5JTUFHRV9URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCxcbiAgICB7XG4gICAgICB2ZXJ0ZXgsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHVuaWZvcm1zOlxuICAgICAge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgICAgdV9pbWFnZVNpemU6IHsgdmFsdWU6IFswLCAwXSB9LFxuICAgICAgICB1X3BsYW5lU2l6ZTogeyB2YWx1ZTogWzAsIDBdIH0sXG4gICAgICAgIHVfYWxwaGE6IHsgdmFsdWU6IDAuMCB9LFxuICAgICAgICB1X29mZnNldDogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1X3Njcm9sbDogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1X3Byb2dyZXNzOiB7IHZhbHVlOiAwLjAgfSxcbiAgICAgICAgdV92aWV3cG9ydFNpemU6IHsgdmFsdWU6IFt0aGlzLnZpZXdwb3J0LndpZHRoLCB0aGlzLnZpZXdwb3J0LmhlaWdodF0gfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudV9pbWFnZVNpemUudmFsdWUgPSBbdGhpcy50ZXh0dXJlLmltYWdlLm5hdHVyYWxXaWR0aCwgdGhpcy50ZXh0dXJlLmltYWdlLm5hdHVyYWxIZWlnaHRdXG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvLFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMucGxhbmUuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoKVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3BsYW5lU2l6ZS52YWx1ZSA9IFt0aGlzLnBsYW5lLnNjYWxlLngsIHRoaXMucGxhbmUuc2NhbGUueV1cbiAgfVxuXG4gIC8qXG4gICAgQW5pbWF0aW9ucy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVfYWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLjBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgfSlcbiAgfVxuXG4gIGhpZGUoKVxuICB7XG4gICAgZ3NhcC50byhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X2FscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMC4wLFxuICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgfSlcbiAgfVxuXG4gIC8qXG4gICAgRXZlbnRzLlxuICAqL1xuXG4gIG9uUmVzaXplKHNpemVzKVxuICB7XG4gICAgaWYoc2l6ZXMpXG4gICAge1xuICAgICAgY29uc3QgeyBzY3JlZW4sIHZpZXdwb3J0IH0gPSBzaXplc1xuXG4gICAgICBpZihzY3JlZW4pIHRoaXMuc2NyZWVuID0gc2NyZWVuXG4gICAgICBpZih2aWV3cG9ydCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgICAgICB0aGlzLnBsYW5lLnByb2dyYW0udW5pZm9ybXMudV92aWV3cG9ydFNpemUudmFsdWUgPSBbdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHRdXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGUuXG4gICovXG5cbiAgdXBkYXRlU2NhbGUoKVxuICB7XG4gICAgdGhpcy5wbGFuZS5zY2FsZS54ID0gdGhpcy52aWV3cG9ydC53aWR0aCAqIHRoaXMuYm91bmRzLndpZHRoIC8gdGhpcy5zY3JlZW4ud2lkdGhcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnkgPSB0aGlzLnZpZXdwb3J0LmhlaWdodCAqIHRoaXMuYm91bmRzLmhlaWdodCAvIHRoaXMuc2NyZWVuLmhlaWdodFxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgdXBkYXRlWChjdXJyZW50PTApXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIGN1cnJlbnQpIC8gdGhpcy5zY3JlZW4ud2lkdGhcbiAgICBjb25zdCBwb3Nfdmlld3BvcnQgPSB0aGlzLnBsYW5lLnBvc2l0aW9uLnggKyB0aGlzLnggLyAxMDBcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X29mZnNldC52YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoLTQsIDQsIC0uMzUsIC4zNSwgcG9zX3ZpZXdwb3J0KVxuXG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi54ID0gKC10aGlzLnZpZXdwb3J0LndpZHRoIC8gMikgKyAodGhpcy5wbGFuZS5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy52aWV3cG9ydC53aWR0aClcbiAgfVxuXG4gIHVwZGF0ZVkoKVxuICB7XG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi55ID0gZ3NhcC51dGlscy5tYXBSYW5nZSgtdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC53aWR0aCwgLU1hdGguUEksIE1hdGguUEksIHRoaXMucGxhbmUucG9zaXRpb24ueClcblxuICAgIHRoaXMueSA9IHRoaXMucGxhbmUucG9zaXRpb24ueVxuICAgIHRoaXMubGlua19wb3MgPSB0aGlzLnZpZXdwb3J0LmhlaWdodCArIHRoaXMucGxhbmUuc2NhbGUueSArICh0aGlzLnkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodClcblxuICAgIC8vdGhpcy5saW5rLnN0eWxlW3RoaXMubF9wcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7KHRoaXMubGlua19wb3MpfSUpYFxuICAgIHRoaXMubGluay5zdHlsZVt0aGlzLmxfcHJlZml4XSA9IGAke3RoaXMubGlua19wb3N9JWBcblxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbClcbiAge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsLmN1cnJlbnQpXG4gICAgdGhpcy51cGRhdGVZKClcbiAgICAvKiB0aGlzLmNyZWF0ZUJvdW5kcygpICovXG5cbiAgICB0aGlzLnBsYW5lLnByb2dyYW0udW5pZm9ybXMudV9zY3JvbGwudmFsdWUgPSAoKHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLmxhc3QpIC8gdGhpcy5zY3JlZW4ud2lkdGgpICogMzBcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGZjY2FiNjc2MmRhZWU5ZGZkYmNcIikiXSwibmFtZXMiOlsiSW1hZ2VFbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImluZGV4IiwibGluayIsImdlb21ldHJ5IiwiZ2wiLCJsZW5ndGgiLCJzY2VuZSIsInNjcmVlbiIsInZpZXdwb3J0IiwidGhpcyIsImdlbyIsImxfcHJlZml4IiwiUHJlZml4IiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsInRleHR1cmUiLCJ3aW5kb3ciLCJJTUFHRV9URVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVfaW1hZ2VTaXplIiwidV9wbGFuZVNpemUiLCJ1X2FscGhhIiwidV9vZmZzZXQiLCJ1X3Njcm9sbCIsInVfcHJvZ3Jlc3MiLCJ1X3ZpZXdwb3J0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGxhbmUiLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNjYWxlIiwieCIsInkiLCJzaG93IiwiZ3NhcCIsImR1cmF0aW9uIiwiaGlkZSIsIm9uUmVzaXplIiwic2l6ZXMiLCJjdXJyZW50IiwibGVmdCIsInBvc192aWV3cG9ydCIsInBvc2l0aW9uIiwiTWF0aCIsIlBJIiwibGlua19wb3MiLCJzdHlsZSIsInVwZGF0ZSIsInNjcm9sbCIsImxhc3QiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=