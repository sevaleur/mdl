/*! For license information please see main.c97f4b071caeb33e3255.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Project/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./node_modules/gsap/index.js"),n=t("./app/shaders/plane-vertex.glsl"),o=t("./app/shaders/plane-fragment.glsl");class u{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geo=s,this.gl=t,this.index=i,this.scene=h,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>{this.texture.image=this.image}}createProgram(){this.program=new h.Program(this.gl,{vertex:n.default,fragment:o.default,uniforms:{tMap:{value:this.texture},u_imageSize:{value:[this.image.naturalWidth,this.image.naturalHeight]},u_planeSizes:{value:[0,0]},u_offset:{value:0}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geo,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}onResize(e){this.createBounds(e)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height,this.targetScaleX=.83,this.targetScaleY=1.3,this.program.uniforms.u_planeSizes.value=[this.mesh.scale.x,this.mesh.scale.y]}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight;const s=this.mesh.position.y-this.y/100;this.program.uniforms.u_offset.value=r.default.utils.mapRange(-4,4,-.35,.35,s),this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e,s){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"2517af6118a3efb8263b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxHQUUvRWpELEtBQUswQixLQUFLcUIsU0FBU0osRUFBSzNDLEtBQUtELE1BQU1xQyxPQUFTLEVBQU1wQyxLQUFLMEIsS0FBS2UsTUFBTUUsRUFBSSxFQUFNM0MsS0FBSzJDLEVBQUkzQyxLQUFLRCxNQUFNcUMsTUFDbEcsQ0FFQWUsT0FBT0MsRUFBUVQsR0FFVDNDLEtBQUs4QixTQUVUOUIsS0FBS2lDLFFBQVFtQixFQUFPVixHQUNwQjFDLEtBQUtrQyxRQUFRa0IsRUFBT1QsR0FDdEIsa0JDMUhGVSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1Byb2plY3QvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFcbntcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSlcbiAge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdlbyA9IGdlb21ldHJ5XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuXG4gIC8qXG4gICAgQ3JlYXRlLlxuICAqL1xuXG4gIGNyZWF0ZVRleHR1cmUoKVxuICB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiB7IHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UgfVxuXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKClcbiAge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsXG4gICAge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB1bmlmb3JtczpcbiAgICAgIHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVfaW1hZ2VTaXplOiB7IHZhbHVlOiBbdGhpcy5pbWFnZS5uYXR1cmFsV2lkdGgsIHRoaXMuaW1hZ2UubmF0dXJhbEhlaWdodF0gfSxcbiAgICAgICAgdV9wbGFuZVNpemVzOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgdV9vZmZzZXQ6IHsgdmFsdWU6IDAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKClcbiAge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbyxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgLypcbiAgICBFdmVudHMuXG4gICovXG5cbiAgb25SZXNpemUoc2l6ZXMpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlLlxuICAqL1xuXG4gIHVwZGF0ZVNjYWxlKClcbiAge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblxuICAgIHRoaXMudGFyZ2V0U2NhbGVYID0gMC44MztcbiAgICB0aGlzLnRhcmdldFNjYWxlWSA9IDEuMztcblxuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51X3BsYW5lU2l6ZXMudmFsdWUgPSBbdGhpcy5tZXNoLnNjYWxlLngsIHRoaXMubWVzaC5zY2FsZS55XTtcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMClcbiAge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgY29uc3QgcG9zX3ZpZXdwb3J0ID0gdGhpcy5tZXNoLnBvc2l0aW9uLnkgLSB0aGlzLnkgLyAxMDBcbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudV9vZmZzZXQudmFsdWUgPSBnc2FwLnV0aWxzLm1hcFJhbmdlKC00LCA0LCAtMC4zNSwgMC4zNSwgcG9zX3ZpZXdwb3J0KVxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0KVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCwgeSlcbiAge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG4gICAgdGhpcy51cGRhdGVZKHNjcm9sbC55KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNTE3YWY2MTE4YTNlZmI4MjYzYlwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ2VvIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwidV9pbWFnZVNpemUiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwidV9wbGFuZVNpemVzIiwidV9vZmZzZXQiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJvblJlc2l6ZSIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsInRhcmdldFNjYWxlWCIsInRhcmdldFNjYWxlWSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInBvc192aWV3cG9ydCIsImdzYXAiLCJ1cGRhdGUiLCJzY3JvbGwiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=