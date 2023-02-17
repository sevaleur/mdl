/*! For license information please see main.3008352bde4db911e54c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Preloader.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n("./node_modules/lodash/each.js"),o=n.n(s),a=n("./node_modules/gsap/index.js"),r=n("./app/classes/Component.js");Object(function(){var e=new Error("Cannot find module 'utils/text'");throw e.code="MODULE_NOT_FOUND",e}());class i extends r.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),Object(function(){var e=new Error("Cannot find module 'utils/text'");throw e.code="MODULE_NOT_FOUND",e}())({element:this.elements.title,expression:"<br>"}),Object(function(){var e=new Error("Cannot find module 'utils/text'");throw e.code="MODULE_NOT_FOUND",e}())({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=document.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){o()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"0d01cb88a896c2e04894"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMDA4MzUyYmRlNGRiOTExZTU0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBT2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBRXJDQyxjQUVFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLG1DQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRixPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSxtQ0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksU0FHZEQsS0FBS1IsU0FBU1UsV0FBYUwsU0FBU0MsaUJBQWlCLGFBRXJERSxLQUFLRyxPQUFTLEVBRWRILEtBQUtJLGNBQ1AsQ0FFQUEsZUFFRUMsSUFBS0wsS0FBS1IsU0FBU0ksUUFBUUwsSUFFekJBLEVBQVFlLE9BQVNDLEdBQUtQLEtBQUtRLGNBQWNqQixHQUN6Q0EsRUFBUWtCLElBQU1sQixFQUFRbUIsYUFBYSxXQUFXLEdBRWxELENBRUFGLGNBQWNHLEdBRVpYLEtBQUtHLFFBQVUsRUFFZixNQUFNUyxFQUFVWixLQUFLRyxPQUFTSCxLQUFLUixTQUFTSSxPQUFPTyxPQUVuREgsS0FBS1IsU0FBU0csV0FBV2tCLFVBQWEsR0FBRUMsS0FBS0MsTUFBZ0IsSUFBVkgsTUFFcEMsSUFBWkEsR0FFRFosS0FBS2dCLFVBRVQsQ0FFQUEsV0FFRSxPQUFPLElBQUlDLFNBQVFDLElBRWZsQixLQUFLbUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxJQUdUckIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLUixTQUFTVSxXQUFZLENBQzNDcUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdMMUIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLUixTQUFTRyxXQUFZLENBQzNDNEIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUNGLFNBRUgxQixLQUFLbUIsV0FBV0csR0FBR3RCLEtBQUtULFFBQ3hCLENBQ0VnQyxTQUFVLElBQ1ZDLEtBQU0sV0FDTkcsT0FBUSxFQUNSQyxnQkFBaUIsYUFDaEIsT0FFSDVCLEtBQUttQixXQUFXVSxNQUFLdEIsSUFFbkJQLEtBQUs4QixLQUFLLFlBQVksR0FDdEIsR0FFUixDQUVBQyxVQUVFL0IsS0FBS1QsUUFBUXlDLFdBQVdDLFlBQVlqQyxLQUFLVCxRQUMzQyxrQkNyR0YyQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2l0c2ZvcmdvdGhhbS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiXG5cbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKClcbiAge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiAnLnByZWxvYWRlcl9fdGV4dCcsXG4gICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgIG51bWJlclRleHQ6ICcucHJlbG9hZGVyX19udW1iZXJfX3RleHQnLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xuICAgIH0pXG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKVxuICB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PlxuICAgIHtcbiAgICAgIGVsZW1lbnQub25sb2FkID0gXyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB9KVxuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSlcbiAge1xuICAgIHRoaXMubGVuZ3RoICs9IDFcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuICAgIGlmKHBlcmNlbnQgPT09IDEpXG4gICAge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkZWQoKVxuICB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgIHtcbiAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgZGVsYXk6IDJcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICB9LCAnLT0xLjQnKVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJSdcbiAgICAgICAgfSwgJy09MScpXG5cbiAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3koKVxuICB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZDAxY2I4OGE4OTZjMmUwNDg5NFwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BsaXQiLCJ0aGlzIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsImdzYXAiLCJkZWxheSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjYWxsIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=