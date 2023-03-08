/*! For license information please see main.660cbaa3f559e9ea7a95.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),r=s("./node_modules/lodash/map.js"),n=s.n(r),h=s("./node_modules/prefix/index.js"),c=s.n(h),_=s("./app/components/Canvas/Home/menu/ImageEl.js");Object(function(){var e=new Error("Cannot find module './MenuTitle'");throw e.code="MODULE_NOT_FOUND",e}());class a{constructor({gl:e,scene:t,screen:s,viewport:l,renderer:o,camera:r}){this.gl=e,this.scene=t,this.screen=s,this.viewport=l,this.camera=r,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,speed:.1,ease:.05},this.show_animation=!1,this.t_prefix=c()("transform"),this.createGeometry(),this.getElements(),this.createMenu(o),this.createMenuSelector(),this.onResize(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geo=new l.Plane(this.gl,{heightSegments:10,widthSegments:10})}getElements(){this.gallery_element=document.querySelector(".home__gallery"),this.gallery_wrapper=document.querySelector(".home__gallery__wrapper"),this.selector_videos=document.querySelector(".selectors__videos"),this.selector_photos=document.querySelector(".selectors__photos"),this.img_el=document.querySelectorAll("img.home__gallery__image__media__image"),this.vid_el=document.querySelectorAll("img.home__gallery__video__media__image"),this.vid_links=document.querySelectorAll(".home__gallery__video__link"),this.img_links=document.querySelectorAll(".home__gallery__image__link"),this.vid_titles=document.querySelectorAll(".home__content__videos__title__text"),this.img_titles=document.querySelectorAll(".home__content__images__title__text"),this.img_length=this.img_el.length,this.vid_length=this.vid_el.length}createMenu(e){this.video_elements=n()(this.vid_el,((e,t)=>new _.default({element:e,index:t,link:this.vid_links[t],geometry:this.geo,gl:this.gl,length:this.vid_length,scene:this.group,screen:this.screen,viewport:this.viewport}))),this.video_elements.forEach(((t,s)=>new Object(function(){var e=new Error("Cannot find module './MenuTitle'");throw e.code="MODULE_NOT_FOUND",e}())({renderer:e,gl:this.gl,plane:t.plane,title:this.vid_titles[s],viewport:this.viewport,screen:this.screen}))),this.image_elements=n()(this.img_el,((e,t)=>new _.default({element:e,index:t,link:this.img_links[t],geometry:this.geo,gl:this.gl,length:this.img_length,scene:this.group,screen:this.screen,viewport:this.viewport}))),this.image_elements.forEach(((t,s)=>new Object(function(){var e=new Error("Cannot find module './MenuTitle'");throw e.code="MODULE_NOT_FOUND",e}())({renderer:e,gl:this.gl,plane:t.plane,title:this.img_titles[s],viewport:this.viewport,screen:this.screen})))}createMenuSelector(){this.selector_videos.setAttribute("class","selectors__videos--active"),this.selector_photos.addEventListener("click",(()=>{o.default.timeline().to(this.scroll,{target:-this.scroll.limit,duration:1},0),this.selector_videos.setAttribute("class","selectors__videos"),this.selector_photos.setAttribute("class","selectors__photos--active")})),this.selector_videos.addEventListener("click",(()=>{o.default.timeline().to(this.scroll,{target:0,duration:1}),this.selector_photos.setAttribute("class","selectors__photos"),this.selector_videos.setAttribute("class","selectors__videos--active")}))}show(){let e=o.default.timeline({onComplete:()=>{this.show_animation=!0}});e.set(this.scroll,{current:this.scroll.limit}),e.to(this.scroll,{taget:0,duration:1}),n()(this.image_elements,(e=>e.show())),n()(this.video_elements,(e=>e.show()))}hide(){n()(this.image_elements,(e=>e.hide())),n()(this.video_elements,(e=>e.hide()))}onResize(){this.bounds=this.gallery_wrapper.getBoundingClientRect(),n()(this.image_elements,(e=>e.onResize({screen:this.screen,viewport:this.viewport}))),n()(this.video_elements,(e=>e.onResize({screen:this.screen,viewport:this.viewport}))),this.scroll.limit=this.bounds.width-this.image_elements[0].element.clientWidth}onTouchDown({y:e,x:t}){this.scroll.position=this.scroll.current}onTouchMove({y:e,x:t}){const s=t.start-t.end;this.scroll.target=this.scroll.position-s}onTouchUp({y:e,x:t}){}onWheel({pixelY:e,pixelX:t}){}update(){this.show_animation&&(this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.ease)),this.gallery_element.style[this.t_prefix]=`translateX(${this.scroll.current}px)`,n()(this.image_elements,(e=>e.update(this.scroll))),n()(this.video_elements,(e=>e.update(this.scroll))),this.scroll.last=this.scroll.current}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"e061b34b4712ef6685c0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxLQUFLVSxVQUFhLGNBQWFWLEtBQUtHLE9BQU9DLGFBRXRFb0MsSUFBSXhDLEtBQUtrRCxnQkFBZ0JULEdBQVdBLEVBQVFxQyxPQUFPOUUsS0FBS0csVUFDeERxQyxJQUFJeEMsS0FBS3VDLGdCQUFnQkUsR0FBV0EsRUFBUXFDLE9BQU85RSxLQUFLRyxVQUV4REgsS0FBS0csT0FBT0csS0FBT04sS0FBS0csT0FBT0MsT0FDakMsQ0FNQTRFLFVBRUVoRixLQUFLTCxNQUFNc0YsWUFBWWpGLEtBQUtDLE1BQzlCLGtCQzVRRmlGLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IEltYWdlRWwgZnJvbSAnLi9tZW51L0ltYWdlRWwnXG5pbXBvcnQgTWVudVRpdGxlIGZyb20gJy4vTWVudVRpdGxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5XG57XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0LCByZW5kZXJlciwgY2FtZXJhIH0pXG4gIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblxuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydFxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgc3BlZWQ6IDAuMSxcbiAgICAgIGVhc2U6IDAuMDVcbiAgICB9XG5cbiAgICB0aGlzLnNob3dfYW5pbWF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMudF9wcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmdldEVsZW1lbnRzKClcbiAgICB0aGlzLmNyZWF0ZU1lbnUocmVuZGVyZXIpXG4gICAgdGhpcy5jcmVhdGVNZW51U2VsZWN0b3IoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KClcbiAge1xuICAgIHRoaXMuZ2VvID0gbmV3IFBsYW5lKHRoaXMuZ2wsXG4gICAge1xuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEwLFxuICAgICAgd2lkdGhTZWdtZW50czogMTBcbiAgICB9KVxuICB9XG5cbiAgZ2V0RWxlbWVudHMoKVxuICB7XG4gICAgdGhpcy5nYWxsZXJ5X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG4gICAgdGhpcy5nYWxsZXJ5X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cbiAgICB0aGlzLnNlbGVjdG9yX3ZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcnNfX3ZpZGVvcycpXG4gICAgdGhpcy5zZWxlY3Rvcl9waG90b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0b3JzX19waG90b3MnKVxuXG4gICAgdGhpcy5pbWdfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaG9tZV9fZ2FsbGVyeV9faW1hZ2VfX21lZGlhX19pbWFnZScpXG4gICAgdGhpcy52aWRfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaG9tZV9fZ2FsbGVyeV9fdmlkZW9fX21lZGlhX19pbWFnZScpXG5cbiAgICB0aGlzLnZpZF9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X192aWRlb19fbGluaycpXG4gICAgdGhpcy5pbWdfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9faW1hZ2VfX2xpbmsnKVxuXG4gICAgdGhpcy52aWRfdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2NvbnRlbnRfX3ZpZGVvc19fdGl0bGVfX3RleHQnKVxuICAgIHRoaXMuaW1nX3RpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19jb250ZW50X19pbWFnZXNfX3RpdGxlX190ZXh0JylcblxuICAgIHRoaXMuaW1nX2xlbmd0aCA9IHRoaXMuaW1nX2VsLmxlbmd0aFxuICAgIHRoaXMudmlkX2xlbmd0aCA9IHRoaXMudmlkX2VsLmxlbmd0aFxuICB9XG5cbiAgY3JlYXRlTWVudShyZW5kZXJlcilcbiAge1xuICAgIHRoaXMudmlkZW9fZWxlbWVudHMgPSBtYXAodGhpcy52aWRfZWwsIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICB7XG4gICAgICByZXR1cm4gbmV3IEltYWdlRWwoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgbGluazogdGhpcy52aWRfbGlua3NbaW5kZXhdLFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW8sXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBsZW5ndGg6IHRoaXMudmlkX2xlbmd0aCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0LFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy52aWRlb19lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT5cbiAgICB7XG4gICAgICByZXR1cm4gbmV3IE1lbnVUaXRsZSh7XG4gICAgICAgIHJlbmRlcmVyLFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgcGxhbmU6IGVsZW1lbnQucGxhbmUsXG4gICAgICAgIHRpdGxlOiB0aGlzLnZpZF90aXRsZXNbaW5kZXhdLFxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlblxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pbWFnZV9lbGVtZW50cyA9IG1hcCh0aGlzLmltZ19lbCwgKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgIHtcbiAgICAgIHJldHVybiBuZXcgSW1hZ2VFbCh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBsaW5rOiB0aGlzLmltZ19saW5rc1tpbmRleF0sXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbyxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIGxlbmd0aDogdGhpcy5pbWdfbGVuZ3RoLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcbiAgICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnQsXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmltYWdlX2VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgIHtcbiAgICAgIHJldHVybiBuZXcgTWVudVRpdGxlKHtcbiAgICAgICAgcmVuZGVyZXIsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBwbGFuZTogZWxlbWVudC5wbGFuZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuaW1nX3RpdGxlc1tpbmRleF0sXG4gICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0LFxuICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZW51U2VsZWN0b3IoKVxuICB7XG4gICAgdGhpcy5zZWxlY3Rvcl92aWRlb3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWxlY3RvcnNfX3ZpZGVvcy0tYWN0aXZlJylcblxuICAgIHRoaXMuc2VsZWN0b3JfcGhvdG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICB7XG4gICAgICBjb25zdCBwaG90b190bCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICBwaG90b190bC50byh0aGlzLnNjcm9sbCxcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0OiAtdGhpcy5zY3JvbGwubGltaXQsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgfSwgMClcblxuICAgICAgdGhpcy5zZWxlY3Rvcl92aWRlb3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWxlY3RvcnNfX3ZpZGVvcycpXG4gICAgICB0aGlzLnNlbGVjdG9yX3Bob3Rvcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlbGVjdG9yc19fcGhvdG9zLS1hY3RpdmUnKVxuICAgIH0pXG5cbiAgICB0aGlzLnNlbGVjdG9yX3ZpZGVvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgY29uc3QgdmlkX3RsID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIHZpZF90bC50byh0aGlzLnNjcm9sbCxcbiAgICAgICAge1xuICAgICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5zZWxlY3Rvcl9waG90b3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWxlY3RvcnNfX3Bob3RvcycpXG4gICAgICB0aGlzLnNlbGVjdG9yX3ZpZGVvcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlbGVjdG9yc19fdmlkZW9zLS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cblxuICAvKlxuICAgIEFuaW1hdGlvbnMuXG4gICovXG5cbiAgc2hvdygpXG4gIHtcbiAgICBsZXQgc2hvd190bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgb25Db21wbGV0ZTogKCkgPT5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5zaG93X2FuaW1hdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2hvd190bC5zZXQodGhpcy5zY3JvbGwsIHsgY3VycmVudDogdGhpcy5zY3JvbGwubGltaXQgfSlcblxuICAgIHNob3dfdGwudG8oXG4gICAgICB0aGlzLnNjcm9sbCxcbiAgICAgIHtcbiAgICAgICAgdGFnZXQ6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICB9KVxuXG4gICAgbWFwKHRoaXMuaW1hZ2VfZWxlbWVudHMsIGVsZW1lbnQgPT4gZWxlbWVudC5zaG93KCkpXG4gICAgbWFwKHRoaXMudmlkZW9fZWxlbWVudHMsIGVsZW1lbnQgPT4gZWxlbWVudC5zaG93KCkpXG4gIH1cblxuICBoaWRlKClcbiAge1xuICAgIG1hcCh0aGlzLmltYWdlX2VsZW1lbnRzLCBlbGVtZW50ID0+IGVsZW1lbnQuaGlkZSgpKVxuICAgIG1hcCh0aGlzLnZpZGVvX2VsZW1lbnRzLCBlbGVtZW50ID0+IGVsZW1lbnQuaGlkZSgpKVxuICB9XG5cbiAgLypcbiAgICBFdmVudHMuXG4gICovXG5cbiAgb25SZXNpemUoKVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlfd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgbWFwKHRoaXMuaW1hZ2VfZWxlbWVudHMsIGVsZW1lbnQgPT4gZWxlbWVudC5vblJlc2l6ZSh7XG4gICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnQsXG4gICAgfSkpXG5cbiAgICBtYXAodGhpcy52aWRlb19lbGVtZW50cywgZWxlbWVudCA9PiBlbGVtZW50Lm9uUmVzaXplKHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICB9KSlcblxuICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLmltYWdlX2VsZW1lbnRzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeSwgeCB9KVxuICB7XG4gICAgdGhpcy5zY3JvbGwucG9zaXRpb24gPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHksIHggfSlcbiAge1xuICAgIGNvbnN0IHhfZGlzdCA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gLSB4X2Rpc3RcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHksIHggfSlcbiAge1xuXG4gIH1cblxuICBvbldoZWVsKHsgcGl4ZWxZLCBwaXhlbFggfSlcbiAge1xuICAgIC8vdGhpcy5zY3JvbGwudGFyZ2V0IC09IHBpeGVsWCAqIDAuNVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGUuXG4gICovXG5cbiAgdXBkYXRlKClcbiAge1xuXG4gICAgaWYodGhpcy5zaG93X2FuaW1hdGlvbilcbiAgICB7XG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBnc2FwLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5lYXNlKVxuICAgIH1cblxuICAgIHRoaXMuZ2FsbGVyeV9lbGVtZW50LnN0eWxlW3RoaXMudF9wcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuICAgIG1hcCh0aGlzLmltYWdlX2VsZW1lbnRzLCBlbGVtZW50ID0+IGVsZW1lbnQudXBkYXRlKHRoaXMuc2Nyb2xsKSlcbiAgICBtYXAodGhpcy52aWRlb19lbGVtZW50cywgZWxlbWVudCA9PiBlbGVtZW50LnVwZGF0ZSh0aGlzLnNjcm9sbCkpXG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgLypcbiAgICBEZXN0cm95LlxuICAqL1xuXG4gIGRlc3Ryb3koKVxuICB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDYxYjM0YjQ3MTJlZjY2ODVjMFwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2NyZWVuIiwidmlld3BvcnQiLCJyZW5kZXJlciIsImNhbWVyYSIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0Iiwic3BlZWQiLCJlYXNlIiwic2hvd19hbmltYXRpb24iLCJ0X3ByZWZpeCIsIlByZWZpeCIsImNyZWF0ZUdlb21ldHJ5IiwiZ2V0RWxlbWVudHMiLCJjcmVhdGVNZW51IiwiY3JlYXRlTWVudVNlbGVjdG9yIiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvIiwiUGxhbmUiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJnYWxsZXJ5X2VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5X3dyYXBwZXIiLCJzZWxlY3Rvcl92aWRlb3MiLCJzZWxlY3Rvcl9waG90b3MiLCJpbWdfZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmlkX2VsIiwidmlkX2xpbmtzIiwiaW1nX2xpbmtzIiwidmlkX3RpdGxlcyIsImltZ190aXRsZXMiLCJpbWdfbGVuZ3RoIiwibGVuZ3RoIiwidmlkX2xlbmd0aCIsInZpZGVvX2VsZW1lbnRzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiSW1hZ2VFbCIsImxpbmsiLCJnZW9tZXRyeSIsImZvckVhY2giLCJNZW51VGl0bGUiLCJwbGFuZSIsInRpdGxlIiwiaW1hZ2VfZWxlbWVudHMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ3NhcCIsInRvIiwibGltaXQiLCJkdXJhdGlvbiIsInNob3dfdGwiLCJvbkNvbXBsZXRlIiwic2V0IiwidGFnZXQiLCJoaWRlIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwieSIsIngiLCJwb3NpdGlvbiIsIm9uVG91Y2hNb3ZlIiwieF9kaXN0Iiwic3RhcnQiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwicGl4ZWxYIiwidXBkYXRlIiwic3R5bGUiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=