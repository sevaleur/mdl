/*! For license information please see main.51273f9f6de6de6825ca.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var s=n("./node_modules/lodash/each.js"),a=n.n(s),i=n("./node_modules/normalize-wheel/index.js"),o=n.n(i),h=n("./app/components/Canvas/index.js"),d=n("./app/components/Preloader.js"),c=n("./app/components/Navigation.js"),r=n("./app/pages/home/index.js"),p=n("./app/pages/about/index.js"),l=n("./app/pages/gallery/index.js");class u{static instance;constructor(){if(u.instance)return u.instance;u.instance=this,this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createNavigation(){this.navigation=new c.default({template:this.template})}createCanvas(){this.canvas=new h.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new r.default,about:new p.default,gallery:new l.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){this.canvas.onChangeStart(),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),n=document.createElement("div");n.innerHTML=e;const s=n.querySelector(".content");this.template=s.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.canvas.onChange(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("error")}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((()=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=o()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");a()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}}new u}},(function(e){e.h=()=>"3fa0674428c5d8a86ddb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9pdHNmb3Jnb3RoYW0vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBub3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9ob21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL2Fib3V0J1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAncGFnZXMvZ2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwXG57XG4gIHN0YXRpYyBpbnN0YW5jZVxuXG4gIGNvbnN0cnVjdG9yKClcbiAge1xuICAgIGlmKEFwcC5pbnN0YW5jZSlcbiAgICAgIHJldHVybiBBcHAuaW5zdGFuY2VcblxuICAgIEFwcC5pbnN0YW5jZSA9IHRoaXNcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG5cbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcbiAgICB0aGlzLmNyZWF0ZUNhbnZhcygpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGUuXG4gICovXG5cbiAgY3JlYXRlUHJlbG9hZGVyKClcbiAge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY3JlYXRlTmF2aWdhdGlvbigpXG4gIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKVxuICB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKVxuICB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzKClcbiAge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgZ2FsbGVyeTogbmV3IEdhbGxlcnkoKVxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgfVxuXG4gIC8qXG4gICAgRXZlbnRzLlxuICAqL1xuXG4gIG9uUHJlbG9hZGVkKClcbiAge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKVxuICB7XG4gICAgdGhpcy5jYW52YXMub25DaGFuZ2VTdGFydCgpXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG4gICAgY29uc3QgcmVxID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuICAgIGlmKHJlcS5zdGF0dXMgPT09IDIwMClcbiAgICB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxLnRleHQoKVxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKClcbiAge1xuICAgIGlmKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpXG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgIHtcbiAgICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKVxuICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGUpXG4gIHtcbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bilcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGUpXG4gIH1cblxuICBvblRvdWNoTW92ZShlKVxuICB7XG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpXG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShlKVxuICB9XG5cbiAgb25Ub3VjaFVwKGUpXG4gIHtcbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApXG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZSlcbiAgfVxuXG4gIG9uV2hlZWwoZSlcbiAge1xuICAgIGNvbnN0IG5vcm1fd2hlZWwgPSBub3JtYWxpemVXaGVlbChlKVxuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbClcbiAgICAgIHRoaXMuY2FudmFzLm9uV2hlZWwobm9ybV93aGVlbClcblxuICAgIGlmKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbClcbiAgICAgIHRoaXMucGFnZS5vbldoZWVsKG5vcm1fd2hlZWwpXG4gIH1cblxuICAvKlxuICAgIExvb3AuXG4gICovXG5cbiAgdXBkYXRlKClcbiAge1xuICAgIGlmKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKVxuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpXG4gICAgICB0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gIH1cblxuICAvKlxuICAgIExpc3RlbmVycy5cbiAgKi9cblxuICBhZGRFdmVudExpc3RlbmVycygpXG4gIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKClcbiAge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+XG4gICAge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT5cbiAgICAgIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNmYTA2NzQ0MjhjNWQ4YTg2ZGRiXCIpIl0sIm5hbWVzIjpbIkFwcCIsInN0YXRpYyIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwiY2FudmFzIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiaG9tZSIsIkhvbWUiLCJhYm91dCIsIkFib3V0IiwiZ2FsbGVyeSIsIkdhbGxlcnkiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsImFzeW5jIiwidXJsIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJyZXEiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJvbkNoYW5nZSIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvblRvdWNoRG93biIsImUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtX3doZWVsIiwibm9ybWFsaXplV2hlZWwiLCJzY3JvbGwiLCJmcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==