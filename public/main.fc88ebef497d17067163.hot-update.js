/*! For license information please see main.fc88ebef497d17067163.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/Project/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/lodash/map.js"),h=s.n(o),n=s("./app/components/Canvas/Project/Media.js");class c{constructor({gl:e,scene:t,screen:s,viewport:l}){this.gl=e,this.screen=s,this.viewport=l,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,speed:.1,ease:.05},this.createGeometry(),this.createGallery(),this.onResize(),this.createMedias(),this.group.setParent(t)}createGeometry(){this.geo=new l.Plane(this.gl,{heightSegments:10})}createGallery(){this.gallery=document.querySelector(".project__gallery__left"),this.leftElements=document.querySelectorAll("img.project__gallery__left__media__image"),this.rightElements=document.querySelectorAll("img.project__gallery__right__media__image")}createMedias(){this.leftColumn=h()(this.leftElements,((e,t)=>new n.default({element:e,index:t,geometry:this.geo,gl:this.gl,height:this.galleryHeight,scene:this.group,screen:this.screen,viewport:this.viewport}))),this.rightColumn=h()(this.rightElements,((e,t)=>new n.default({element:e,index:t,geometry:this.geo,gl:this.gl,height:this.galleryHeight,scene:this.group,screen:this.screen,viewport:this.viewport})))}onResize(){this.galleryBounds=this.gallery.getBoundingClientRect(),this.galleryHeight=this.viewport.height*this.galleryBounds.height/this.screen.height,this.leftColumn&&h()(this.leftColumn,(e=>e.onResize({height:this.galleryHeight,screen:this.screen,viewport:this.viewport}))),this.rightColumn&&h()(this.rightColumn,(e=>e.onResize({height:this.galleryHeight,screen:this.screen,viewport:this.viewport})))}onTouchDown({y:e}){this.scroll.position=this.scroll.current}onTouchMove({y:e}){const t=2*(e.start-e.end);this.scroll.target=this.scroll.position+t}onTouchUp({y:e}){}onWheel({pixelY:e}){this.scroll.target+=.5*e}update(){this.scroll.target+=this.scroll.speed,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.ease),this.scroll.current<this.scroll.last?(this.direction="up",this.scroll.speed=-.1):this.scroll.current>this.scroll.last&&(this.direction="down",this.scroll.speed=.1);const{current:e,last:t}=this.scroll;this.leftColumn&&h()(this.leftColumn,(s=>s.update(e,t,this.direction))),this.rightColumn&&h()(this.rightColumn,(s=>s.update(-e,t,this.direction))),this.scroll.last=this.scroll.current}}}},(function(e){e.h=()=>"ec27e7e356aef7717266"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYzg4ZWJlZjQ5N2QxNzA2NzE2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NldBTWUsTUFBTUEsRUFFbkJDLGFBQVksR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE9BQUVDLEVBQU0sU0FBRUMsSUFFL0JDLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtGLE9BQVNBLEVBQ2RFLEtBQUtELFNBQVdBLEVBQ2hCQyxLQUFLQyxNQUFRLElBQUlDLEVBQUFBLFVBRWpCRixLQUFLRyxPQUFTLENBQ1pDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEVBQ05DLE1BQU8sR0FDUEMsS0FBTSxLQUdSUixLQUFLUyxpQkFDTFQsS0FBS1UsZ0JBRUxWLEtBQUtXLFdBRUxYLEtBQUtZLGVBR0xaLEtBQUtDLE1BQU1ZLFVBQVVoQixFQUN2QixDQUVBWSxpQkFFRVQsS0FBS2MsSUFBTSxJQUFJQyxFQUFBQSxNQUFNZixLQUFLSixHQUMxQixDQUNFb0IsZUFBZ0IsSUFFcEIsQ0FFQU4sZ0JBRUVWLEtBQUtpQixRQUFVQyxTQUFTQyxjQUFjLDJCQUN0Q25CLEtBQUtvQixhQUFlRixTQUFTRyxpQkFBaUIsNENBQzlDckIsS0FBS3NCLGNBQWdCSixTQUFTRyxpQkFBaUIsNENBQ2pELENBRUFULGVBRUVaLEtBQUt1QixXQUFhQyxJQUFJeEIsS0FBS29CLGNBQWMsQ0FBQ0ssRUFBU0MsSUFFMUMsSUFBSUMsRUFBQUEsUUFBTSxDQUNmRixVQUNBQyxRQUNBRSxTQUFVNUIsS0FBS2MsSUFDZmxCLEdBQUlJLEtBQUtKLEdBQ1RpQyxPQUFRN0IsS0FBSzhCLGNBQ2JqQyxNQUFPRyxLQUFLQyxNQUNaSCxPQUFRRSxLQUFLRixPQUNiQyxTQUFVQyxLQUFLRCxhQUluQkMsS0FBSytCLFlBQWNQLElBQUl4QixLQUFLc0IsZUFBZSxDQUFDRyxFQUFTQyxJQUU1QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2ZGLFVBQ0FDLFFBQ0FFLFNBQVU1QixLQUFLYyxJQUNmbEIsR0FBSUksS0FBS0osR0FDVGlDLE9BQVE3QixLQUFLOEIsY0FDYmpDLE1BQU9HLEtBQUtDLE1BQ1pILE9BQVFFLEtBQUtGLE9BQ2JDLFNBQVVDLEtBQUtELFlBR3JCLENBTUFZLFdBRUVYLEtBQUtnQyxjQUFnQmhDLEtBQUtpQixRQUFRZ0Isd0JBQ2xDakMsS0FBSzhCLGNBQWdCOUIsS0FBS0QsU0FBUzhCLE9BQVM3QixLQUFLZ0MsY0FBY0gsT0FBUzdCLEtBQUtGLE9BQU8rQixPQUVqRjdCLEtBQUt1QixZQUVOQyxJQUFJeEIsS0FBS3VCLFlBQVlXLEdBQVNBLEVBQU12QixTQUFTLENBQzNDa0IsT0FBUTdCLEtBQUs4QixjQUNiaEMsT0FBUUUsS0FBS0YsT0FDYkMsU0FBVUMsS0FBS0QsYUFJaEJDLEtBQUsrQixhQUVOUCxJQUFJeEIsS0FBSytCLGFBQWFHLEdBQVNBLEVBQU12QixTQUFTLENBQzVDa0IsT0FBUTdCLEtBQUs4QixjQUNiaEMsT0FBUUUsS0FBS0YsT0FDYkMsU0FBVUMsS0FBS0QsWUFHckIsQ0FFQW9DLGFBQVksRUFBRUMsSUFFWnBDLEtBQUtHLE9BQU9rQyxTQUFXckMsS0FBS0csT0FBT0MsT0FDckMsQ0FFQWtDLGFBQVksRUFBRUYsSUFFWixNQUFNRyxFQUE2QixHQUFuQkgsRUFBRUksTUFBUUosRUFBRUssS0FFNUJ6QyxLQUFLRyxPQUFPRSxPQUFTTCxLQUFLRyxPQUFPa0MsU0FBV0UsQ0FDOUMsQ0FFQUcsV0FBVSxFQUFFTixJQUdaLENBRUFPLFNBQVEsT0FBRUMsSUFFUjVDLEtBQUtHLE9BQU9FLFFBQW1CLEdBQVR1QyxDQUN4QixDQU1BQyxTQUVFN0MsS0FBS0csT0FBT0UsUUFBVUwsS0FBS0csT0FBT0ksTUFDbENQLEtBQUtHLE9BQU9DLFFBQVUwQyxFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QjlDLEtBQUtHLE9BQU9DLFFBQVNKLEtBQUtHLE9BQU9FLE9BQVFMLEtBQUtHLE9BQU9LLE1BRS9GUixLQUFLRyxPQUFPQyxRQUFVSixLQUFLRyxPQUFPRyxNQUVuQ04sS0FBSytDLFVBQVksS0FDakIvQyxLQUFLRyxPQUFPSSxPQUFTLElBRWZQLEtBQUtHLE9BQU9DLFFBQVVKLEtBQUtHLE9BQU9HLE9BRXhDTixLQUFLK0MsVUFBWSxPQUNqQi9DLEtBQUtHLE9BQU9JLE1BQVEsSUFHdEIsTUFBTSxRQUFFSCxFQUFPLEtBQUVFLEdBQVNOLEtBQUtHLE9BRTVCSCxLQUFLdUIsWUFFTkMsSUFBSXhCLEtBQUt1QixZQUFZVyxHQUFTQSxFQUFNVyxPQUFPekMsRUFBU0UsRUFBTU4sS0FBSytDLGFBRzlEL0MsS0FBSytCLGFBRU5QLElBQUl4QixLQUFLK0IsYUFBYUcsR0FBU0EsRUFBTVcsUUFBUXpDLEVBQVNFLEVBQU1OLEtBQUsrQyxhQUduRS9DLEtBQUtHLE9BQU9HLEtBQU9OLEtBQUtHLE9BQU9DLE9BQ2pDLGtCQ25LRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vLi9hcHAvY29tcG9uZW50cy9DYW52YXMvUHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdFxue1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2NyZWVuLCB2aWV3cG9ydCB9KVxuICB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgc3BlZWQ6IDAuMSxcbiAgICAgIGVhc2U6IDAuMDUsXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpXG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KClcbiAge1xuICAgIHRoaXMuZ2VvID0gbmV3IFBsYW5lKHRoaXMuZ2wsXG4gICAge1xuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEwXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKVxuICB7XG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2dhbGxlcnlfX2xlZnQnKVxuICAgIHRoaXMubGVmdEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLnByb2plY3RfX2dhbGxlcnlfX2xlZnRfX21lZGlhX19pbWFnZScpXG4gICAgdGhpcy5yaWdodEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLnByb2plY3RfX2dhbGxlcnlfX3JpZ2h0X19tZWRpYV9faW1hZ2UnKVxuICB9XG5cbiAgY3JlYXRlTWVkaWFzKClcbiAge1xuICAgIHRoaXMubGVmdENvbHVtbiA9IG1hcCh0aGlzLmxlZnRFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgIHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvLFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbGxlcnlIZWlnaHQsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMucmlnaHRDb2x1bW4gPSBtYXAodGhpcy5yaWdodEVsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW8sXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FsbGVyeUhlaWdodCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0LFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLypcbiAgICBFdmVudHMuXG4gICovXG5cbiAgb25SZXNpemUoKVxuICB7XG4gICAgdGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5nYWxsZXJ5SGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQgKiB0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gdGhpcy5zY3JlZW4uaGVpZ2h0XG5cbiAgICBpZih0aGlzLmxlZnRDb2x1bW4pXG4gICAge1xuICAgICAgbWFwKHRoaXMubGVmdENvbHVtbiwgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoe1xuICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FsbGVyeUhlaWdodCxcbiAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcbiAgICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIGlmKHRoaXMucmlnaHRDb2x1bW4pXG4gICAge1xuICAgICAgbWFwKHRoaXMucmlnaHRDb2x1bW4sIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbGxlcnlIZWlnaHQsXG4gICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bih7IHkgfSlcbiAge1xuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB5IH0pXG4gIHtcbiAgICBjb25zdCB5X2Rpc3QgPSAoeS5zdGFydCAtIHkuZW5kKSAqIDJcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnBvc2l0aW9uICsgeV9kaXN0XG4gIH1cblxuICBvblRvdWNoVXAoeyB5IH0pXG4gIHtcblxuICB9XG5cbiAgb25XaGVlbCh7IHBpeGVsWSB9KVxuICB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWSAqIDAuNVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGUuXG4gICovXG5cbiAgdXBkYXRlKClcbiAge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSB0aGlzLnNjcm9sbC5zcGVlZFxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuZWFzZSlcblxuICAgIGlmKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC5sYXN0KVxuICAgIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJ1xuICAgICAgdGhpcy5zY3JvbGwuc3BlZWQgPSAtMC4xXG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLmxhc3QpXG4gICAge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bidcbiAgICAgIHRoaXMuc2Nyb2xsLnNwZWVkID0gMC4xXG4gICAgfVxuXG4gICAgY29uc3QgeyBjdXJyZW50LCBsYXN0IH0gPSB0aGlzLnNjcm9sbFxuXG4gICAgaWYodGhpcy5sZWZ0Q29sdW1uKVxuICAgIHtcbiAgICAgIG1hcCh0aGlzLmxlZnRDb2x1bW4sIG1lZGlhID0+IG1lZGlhLnVwZGF0ZShjdXJyZW50LCBsYXN0LCB0aGlzLmRpcmVjdGlvbikpXG4gICAgfVxuXG4gICAgaWYodGhpcy5yaWdodENvbHVtbilcbiAgICB7XG4gICAgICBtYXAodGhpcy5yaWdodENvbHVtbiwgbWVkaWEgPT4gbWVkaWEudXBkYXRlKC1jdXJyZW50LCBsYXN0LCB0aGlzLmRpcmVjdGlvbikpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWMyN2U3ZTM1NmFlZjc3MTcyNjZcIikiXSwibmFtZXMiOlsiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNjcmVlbiIsInZpZXdwb3J0IiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJzcGVlZCIsImVhc2UiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJvblJlc2l6ZSIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsImdlbyIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVmdEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJpZ2h0RWxlbWVudHMiLCJsZWZ0Q29sdW1uIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJnZW9tZXRyeSIsImhlaWdodCIsImdhbGxlcnlIZWlnaHQiLCJyaWdodENvbHVtbiIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwieSIsInBvc2l0aW9uIiwib25Ub3VjaE1vdmUiLCJ5X2Rpc3QiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJ1cGRhdGUiLCJnc2FwIiwiZGlyZWN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9