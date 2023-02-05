/*! For license information please see main.d4d7c15a7949268ea799.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Project/Media.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i("./node_modules/ogl/src/core/Texture.js"),h=i("./node_modules/ogl/src/core/Program.js"),a=i("./node_modules/ogl/src/core/Mesh.js"),n=i("./node_modules/gsap/index.js"),o=i("./app/shaders/plane-vertex.glsl");Object(function(){var e=new Error("Cannot find module 'shaders/plane-fragment.glsl'");throw e.code="MODULE_NOT_FOUND",e}());class l{constructor({element:e,index:t,geometry:i,gl:s,length:h,scene:a,screen:n,viewport:o}){this.element=e,this.index=t,this.geo=i,this.gl=s,this.length=h,this.scene=a,this.screen=n,this.viewport=o,this.new_pos=0,this.createMesh(),this.half={_scale:{x:this.plane.scale.x/2,y:this.plane.scale.y/2},_viewport:{width:this.viewport.width/2,height:this.viewport.height/2},_screen:{width:this.screen.width/2,height:this.screen.height/2}},this.createBounds()}createMesh(){const e=new Image,t=new s.Texture(this.gl,{generateMipmaps:!1}),i=new h.Program(this.gl,{vertex:o.default,fragment:Object(function(){var e=new Error("Cannot find module 'shaders/plane-fragment.glsl'");throw e.code="MODULE_NOT_FOUND",e}()),uniforms:{tMap:{value:t},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_offset:{value:0},u_strength:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}}});e.crossOrigin="anonymous",e.src=this.element.getAttribute("data-src"),e.onload=()=>{i.uniforms.u_imageSize.value=[e.naturalWidth,e.naturalHeight],t.image=e},this.plane=new a.Mesh(this.gl,{geometry:this.geo,program:i}),this.plane.setParent(this.scene)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y],this.gallery_height=this.length*this.bounds.height,this.full_height=this.gallery_height/this.screen.height*this.viewport.height,this.pos_x=Math.cos(this.index)*(this.half._screen.width/this.bounds.height)}onResize(e){if(this.new_pos=0,e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.program.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.program.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(){this.x=this.bounds.left/this.screen.width,this.plane.position.x=-this.half._viewport.width+this.half._scale.x+this.x*this.viewport.width+this.pos_x}updateY(e=0){this.y=(this.bounds.top-e)/this.screen.height;const t=this.plane.position.y-this.y/100;this.plane.program.uniforms.u_offset.value=n.default.utils.mapRange(-4,4,-.35,.35,t),this.plane.position.y=this.half._viewport.height-this.half._scale.y-this.y*this.viewport.height+this.new_pos}update(e,t,i){if(this.bounds){if(this.updateScale(),this.updateX(),this.updateY(e),this.plane.program.uniforms.u_strength.value=(e-t)/this.screen.height*15,"up"===i){this.plane.position.y+this.plane.scale.y<-this.half._viewport.height&&(this.new_pos+=this.full_height)}if("down"===i){this.plane.position.y-this.plane.scale.y>this.half._viewport.height&&(this.new_pos-=this.full_height)}}}}}},(function(e){e.h=()=>"e40be469ff29205fa435"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3dDLE9BQVQsQ0FRQSxHQU5BeEMsS0FBSzBDLGNBQ0wxQyxLQUFLMkMsVUFDTDNDLEtBQUs0QyxRQUFRVSxHQUVidEQsS0FBS08sTUFBTWEsUUFBUUksU0FBU00sV0FBV0osT0FBVTRCLEVBQVVLLEdBQVEzRCxLQUFLRixPQUFPYyxPQUFVLEdBRXhFLE9BQWRnRCxFQUNILENBQ1k1RCxLQUFLTyxNQUFNOEMsU0FBUzVDLEVBQUlULEtBQUtPLE1BQU1DLE1BQU1DLEdBRTNDVCxLQUFLSSxLQUFLTSxVQUFVRSxTQUUxQlosS0FBS0UsU0FBV0YsS0FBSzhDLFlBRXpCLENBRUEsR0FBaUIsU0FBZGMsRUFDSCxDQUNZNUQsS0FBS08sTUFBTThDLFNBQVM1QyxFQUFJVCxLQUFLTyxNQUFNQyxNQUFNQyxFQUU1Q1QsS0FBS0ksS0FBS00sVUFBVUUsU0FFekJaLEtBQUtFLFNBQVdGLEtBQUs4QyxZQUV6QixDQTFCdUIsQ0EyQnpCLGtCQ3BMRmUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2l0c2ZvcmdvdGhhbS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Qcm9qZWN0L01lZGlhLmpzIiwid2VicGFjazovL2l0c2ZvcmdvdGhhbS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhXG57XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgaW5kZXgsIGdlb21ldHJ5LCBnbCwgbGVuZ3RoLCBzY2VuZSwgc2NyZWVuLCB2aWV3cG9ydCB9KVxuICB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2VvID0gZ2VvbWV0cnlcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0XG5cbiAgICB0aGlzLm5ld19wb3MgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuXG4gICAgdGhpcy5oYWxmID0ge1xuICAgICAgX3NjYWxlOiB7XG4gICAgICAgIHg6IHRoaXMucGxhbmUuc2NhbGUueCAvIDIsXG4gICAgICAgIHk6IHRoaXMucGxhbmUuc2NhbGUueSAvIDJcbiAgICAgIH0sXG4gICAgICBfdmlld3BvcnQ6IHtcbiAgICAgICAgd2lkdGg6IHRoaXMudmlld3BvcnQud2lkdGggLyAyLFxuICAgICAgICBoZWlnaHQ6IHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMlxuICAgICAgfSxcbiAgICAgIF9zY3JlZW46IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuc2NyZWVuLndpZHRoIC8gMixcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnNjcmVlbi5oZWlnaHQgLyAyXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGUuXG4gICovXG5cbiAgY3JlYXRlTWVzaCgpXG4gIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHtcbiAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsXG4gICAge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB1bmlmb3JtczpcbiAgICAgIHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9LFxuICAgICAgICB1X2ltYWdlU2l6ZTogeyB2YWx1ZTogWzAsIDBdIH0sXG4gICAgICAgIHVfcGxhbmVTaXplOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgdV9vZmZzZXQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdV9zdHJlbmd0aDogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1X3ZpZXdwb3J0U2l6ZTogeyB2YWx1ZTogW3RoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0XSB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT5cbiAgICB7XG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfaW1hZ2VTaXplLnZhbHVlID0gW2ltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodF1cbiAgICAgIHRleHR1cmUuaW1hZ2UgPSBpbWFnZVxuICAgIH1cblxuICAgIHRoaXMucGxhbmUgPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW8sXG4gICAgICBwcm9ncmFtOiBwcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMucGxhbmUuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoKVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3BsYW5lU2l6ZS52YWx1ZSA9IFt0aGlzLnBsYW5lLnNjYWxlLngsIHRoaXMucGxhbmUuc2NhbGUueV1cblxuICAgIHRoaXMuZ2FsbGVyeV9oZWlnaHQgPSB0aGlzLmxlbmd0aCAqIHRoaXMuYm91bmRzLmhlaWdodFxuICAgIHRoaXMuZnVsbF9oZWlnaHQgPSAoKHRoaXMuZ2FsbGVyeV9oZWlnaHQgLyB0aGlzLnNjcmVlbi5oZWlnaHQpICogdGhpcy52aWV3cG9ydC5oZWlnaHQpXG5cbiAgICB0aGlzLnBvc194ID0gTWF0aC5jb3ModGhpcy5pbmRleCkgKiAodGhpcy5oYWxmLl9zY3JlZW4ud2lkdGggLyB0aGlzLmJvdW5kcy5oZWlnaHQpXG4gIH1cblxuICAvKlxuICAgIEV2ZW50cy5cbiAgKi9cblxuICBvblJlc2l6ZShzaXplcylcbiAge1xuICAgIHRoaXMubmV3X3BvcyA9IDBcblxuICAgIGlmKHNpemVzKVxuICAgIHtcbiAgICAgIGNvbnN0IHsgc2NyZWVuLCB2aWV3cG9ydCB9ID0gc2l6ZXNcblxuICAgICAgaWYoc2NyZWVuKSB0aGlzLnNjcmVlbiA9IHNjcmVlblxuICAgICAgaWYodmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0XG5cbiAgICAgICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfdmlld3BvcnRTaXplLnZhbHVlID0gW3RoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKClcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlLlxuICAqL1xuXG4gIHVwZGF0ZVNjYWxlKClcbiAge1xuICAgIHRoaXMucGxhbmUuc2NhbGUueCA9IHRoaXMudmlld3BvcnQud2lkdGggKiB0aGlzLmJvdW5kcy53aWR0aCAvIHRoaXMuc2NyZWVuLndpZHRoXG4gICAgdGhpcy5wbGFuZS5zY2FsZS55ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQgKiB0aGlzLmJvdW5kcy5oZWlnaHQgLyB0aGlzLnNjcmVlbi5oZWlnaHRcblxuICAgIHRoaXMucGxhbmUucHJvZ3JhbS51bmlmb3Jtcy51X3BsYW5lU2l6ZS52YWx1ZSA9IFt0aGlzLnBsYW5lLnNjYWxlLngsIHRoaXMucGxhbmUuc2NhbGUueV1cbiAgfVxuXG4gIHVwZGF0ZVgoKVxuICB7XG4gICAgdGhpcy54ID0gdGhpcy5ib3VuZHMubGVmdCAvIHRoaXMuc2NyZWVuLndpZHRoXG5cbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnggPSAoLXRoaXMuaGFsZi5fdmlld3BvcnQud2lkdGgpICsgKHRoaXMuaGFsZi5fc2NhbGUueCkgKyAodGhpcy54ICogdGhpcy52aWV3cG9ydC53aWR0aCkgKyB0aGlzLnBvc194XG4gIH1cblxuICB1cGRhdGVZKGN1cnJlbnQ9MClcbiAge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgLSBjdXJyZW50KSAvIHRoaXMuc2NyZWVuLmhlaWdodFxuICAgIGNvbnN0IHBvc192aWV3cG9ydCA9IHRoaXMucGxhbmUucG9zaXRpb24ueSAtIHRoaXMueSAvIDEwMFxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfb2Zmc2V0LnZhbHVlID0gZ3NhcC51dGlscy5tYXBSYW5nZSgtNCwgNCwgLTAuMzUsIDAuMzUsIHBvc192aWV3cG9ydClcblxuICAgIHRoaXMucGxhbmUucG9zaXRpb24ueSA9IHRoaXMuaGFsZi5fdmlld3BvcnQuaGVpZ2h0IC0gdGhpcy5oYWxmLl9zY2FsZS55IC0gKHRoaXMueSAqIHRoaXMudmlld3BvcnQuaGVpZ2h0KSArIHRoaXMubmV3X3Bvc1xuICB9XG5cbiAgdXBkYXRlKGN1cnJlbnQsIGxhc3QsIGRpcmVjdGlvbilcbiAge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWShjdXJyZW50KVxuXG4gICAgdGhpcy5wbGFuZS5wcm9ncmFtLnVuaWZvcm1zLnVfc3RyZW5ndGgudmFsdWUgPSAoKGN1cnJlbnQgLSBsYXN0KSAvIHRoaXMuc2NyZWVuLmhlaWdodCkgKiAxNVxuXG4gICAgaWYoZGlyZWN0aW9uID09PSAndXAnKVxuICAgIHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgKyB0aGlzLnBsYW5lLnNjYWxlLnlcblxuICAgICAgaWYoeSA8IC10aGlzLmhhbGYuX3ZpZXdwb3J0LmhlaWdodClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5uZXdfcG9zICs9IHRoaXMuZnVsbF9oZWlnaHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihkaXJlY3Rpb24gPT09ICdkb3duJylcbiAgICB7XG4gICAgICBjb25zdCB5ID0gdGhpcy5wbGFuZS5wb3NpdGlvbi55IC0gdGhpcy5wbGFuZS5zY2FsZS55XG5cbiAgICAgIGlmKHkgPiB0aGlzLmhhbGYuX3ZpZXdwb3J0LmhlaWdodClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5uZXdfcG9zIC09IHRoaXMuZnVsbF9oZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0MGJlNDY5ZmYyOTIwNWZhNDM1XCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW5kZXgiLCJnZW9tZXRyeSIsImdsIiwibGVuZ3RoIiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsInRoaXMiLCJnZW8iLCJuZXdfcG9zIiwiY3JlYXRlTWVzaCIsImhhbGYiLCJfc2NhbGUiLCJ4IiwicGxhbmUiLCJzY2FsZSIsInkiLCJfdmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsIl9zY3JlZW4iLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsIkltYWdlIiwidGV4dHVyZSIsIlRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1X2ltYWdlU2l6ZSIsInVfcGxhbmVTaXplIiwidV9vZmZzZXQiLCJ1X3N0cmVuZ3RoIiwidV92aWV3cG9ydFNpemUiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImdhbGxlcnlfaGVpZ2h0IiwiZnVsbF9oZWlnaHQiLCJwb3NfeCIsIk1hdGgiLCJjb3MiLCJvblJlc2l6ZSIsInNpemVzIiwibGVmdCIsInBvc2l0aW9uIiwiY3VycmVudCIsInRvcCIsInBvc192aWV3cG9ydCIsImdzYXAiLCJ1cGRhdGUiLCJsYXN0IiwiZGlyZWN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9