/*! For license information please see main.dec360c1d51a90446800.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s("./node_modules/gsap/index.js"),a=s("./node_modules/normalize-wheel/index.js"),n=s.n(a),l=s("./node_modules/lodash/each.js"),o=s.n(l),r=s("./node_modules/lodash/map.js"),h=s.n(r),m=s("./node_modules/prefix/index.js"),d=s.n(m),c=s("./app/animations/Title.js"),u=s("./app/animations/Paragraph.js"),p=s("./app/animations/Label.js"),g=s("./app/classes/Colors.js"),w=s("./app/classes/AsyncLoad.js");class f{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationTitles:'[data-animation="title"]',animationParagraphs:'[data-animation="paragraph"]',animationLabel:'[data-animation="label"]',images:"[data-src]"},this.id=s,this.transform_prefix=d()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},o()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.preloadImages()}createAnimations(){this.animations=[],this.animationTitles=h()(this.elements.animationTitles,(e=>new c.default({element:e}))),this.animations.push(...this.animationTitles),this.animationParagraphs=h()(this.elements.animationParagraphs,(e=>new u.default({element:e}))),this.animations.push(...this.animationParagraphs),this.animationLabel=h()(this.elements.animationLabel,(e=>new p.default({element:e}))),this.animations.push(...this.animationLabel)}preloadImages(){this.images=h()(this.elements.images,(e=>new w.default({image:e})))}show(){return new Promise((e=>{g.ColorManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animateIn=i.default.timeline(),this.animateIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e}),this.animateIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animateOut=i.default.timeline(),this.animateOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=n()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),o()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transform_prefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"2121b35aef10e978522a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT0ksTUFBUW5CLEtBQUtGLFNBQVNpRSxRQUFRQyxhQUFlekMsT0FBTzBDLGFBRWxFN0MsSUFBS3BCLEtBQUtnQyxZQUFZa0MsR0FBYUEsRUFBVUosWUFDL0MsQ0FNQUssU0FFRW5FLEtBQUtlLE9BQU9FLE9BQVMrQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHaEQsS0FBS2UsT0FBT0ksTUFBT25CLEtBQUtlLE9BQU9FLFFBRXhFakIsS0FBS2UsT0FBT0MsUUFBVWdDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCaEQsS0FBS2UsT0FBT0MsUUFBU2hCLEtBQUtlLE9BQU9FLE9BQVEsSUFFbkZqQixLQUFLZSxPQUFPQyxRQUFVLE1BQ3ZCaEIsS0FBS2UsT0FBT0MsUUFBVSxHQUVyQmhCLEtBQUtGLFNBQVNpRSxVQUNmL0QsS0FBS0YsU0FBU2lFLFFBQVFLLE1BQU1wRSxLQUFLTyxrQkFBcUIsZUFBY1AsS0FBS2UsT0FBT0MsYUFDcEYsQ0FNQXNDLG9CQUVFL0IsT0FBTzhDLGlCQUFpQixhQUFjckUsS0FBS1Msa0JBQzdDLENBRUErQyx1QkFFRWpDLE9BQU8rQyxvQkFBb0IsYUFBY3RFLEtBQUtTLGtCQUNoRCxrQkNwT0Y4RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pdHNmb3Jnb3RoYW0vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBub3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IFRpdGxlIGZyb20gJ2FuaW1hdGlvbnMvVGl0bGUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ2FuaW1hdGlvbnMvUGFyYWdyYXBoJ1xuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnXG5cbmltcG9ydCB7IENvbG9yTWFuYWdlciB9IGZyb20gJ2NsYXNzZXMvQ29sb3JzJ1xuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVxue1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KVxuICB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcbiAgICAgIGFuaW1hdGlvblRpdGxlczogYFtkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdYCxcbiAgICAgIGFuaW1hdGlvblBhcmFncmFwaHM6IGBbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl1gLFxuICAgICAgYW5pbWF0aW9uTGFiZWw6IGBbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXWAsXG5cbiAgICAgIGltYWdlczogYFtkYXRhLXNyY11gXG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGlkXG5cbiAgICB0aGlzLnRyYW5zZm9ybV9wcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGUuXG4gICovXG5cbiAgY3JlYXRlKClcbiAge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT5cbiAgICB7XG4gICAgICBpZihlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZih0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgICB0aGlzLnByZWxvYWRJbWFnZXMoKVxuICB9XG5cbiAgLypcbiAgICBDb250ZW50IGFuaW1hdGlvbnMuXG4gICovXG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpXG4gIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgLypcbiAgICAgIFRpdGxlcy5cbiAgICAqL1xuICAgIHRoaXMuYW5pbWF0aW9uVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzLCBlbGVtZW50ID0+XG4gICAge1xuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uVGl0bGVzKVxuXG4gICAgLypcbiAgICAgIFBhcmFncmFwaHMuXG4gICAgKi9cbiAgICB0aGlzLmFuaW1hdGlvblBhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25QYXJhZ3JhcGhzLCBlbGVtZW50ID0+XG4gICAge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuICAgICAgICBlbGVtZW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvblBhcmFncmFwaHMpXG5cbiAgICAvKlxuICAgICAgTGFiZWxzLlxuICAgICovXG4gICAgdGhpcy5hbmltYXRpb25MYWJlbCA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbkxhYmVsLCBlbGVtZW50ID0+XG4gICAge1xuICAgICAgcmV0dXJuIG5ldyBMYWJlbCh7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uTGFiZWwpXG4gIH1cblxuICAvKlxuICAgIFBhZ2UgYW5pbWF0aW9uLlxuICAqL1xuXG4gIHByZWxvYWRJbWFnZXMoKVxuICB7XG4gICAgdGhpcy5pbWFnZXMgPSBtYXAodGhpcy5lbGVtZW50cy5pbWFnZXMsIGltYWdlID0+XG4gICAge1xuICAgICAgcmV0dXJuIG5ldyBBc3luY0xvYWQoeyBpbWFnZSB9KVxuICAgIH0pXG4gIH1cblxuICBzaG93KClcbiAge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAge1xuICAgICAgQ29sb3JNYW5hZ2VyLmNoYW5nZSh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXG4gICAgICAgIGNvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZUluID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0ZUluLmZyb21Ubyh0aGlzLmVsZW1lbnQsXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVJbi5jYWxsKF8gPT5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlKClcbiAge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LFxuICAgICAge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAgRXZlbnRzLlxuICAqL1xuXG4gIG9uTW91c2VXaGVlbChlKVxuICB7XG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IG5vcm1hbGl6ZVdoZWVsKGUpXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG4gIH1cblxuICBvblJlc2l6ZSgpXG4gIHtcbiAgICBpZih0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpXG4gIH1cblxuICAvKlxuICAgIExvb3AuXG4gICovXG5cbiAgdXBkYXRlKClcbiAge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuXG4gICAgaWYodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuXG4gICAgaWYodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtX3ByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgfVxuXG4gIC8qXG4gICAgTGlzdGVuZXJzLlxuICAqL1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKClcbiAge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcbiAgfVxuXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTIxYjM1YWVmMTBlOTc4NTIyYVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25UaXRsZXMiLCJhbmltYXRpb25QYXJhZ3JhcGhzIiwiYW5pbWF0aW9uTGFiZWwiLCJpbWFnZXMiLCJ0cmFuc2Zvcm1fcHJlZml4IiwiUHJlZml4Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsInByZWxvYWRJbWFnZXMiLCJhbmltYXRpb25zIiwibWFwIiwiVGl0bGUiLCJwdXNoIiwiUGFyYWdyYXBoIiwiTGFiZWwiLCJpbWFnZSIsIkFzeW5jTG9hZCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkNvbG9yTWFuYWdlciIsImJhY2tncm91bmRDb2xvciIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwiYW5pbWF0ZUluIiwiZ3NhcCIsImZyb21UbyIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0ZU91dCIsInRvIiwiZSIsInBpeGVsWSIsIm5vcm1hbGl6ZVdoZWVsIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9