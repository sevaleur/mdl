/*! For license information please see main.49893bc82ed7526c8720.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/pages/home/index.js":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var s=o("./app/classes/Page.js"),a=o("./app/animations/Hover.js");class r extends s.default{constructor(){super({id:"home",element:".home",elements:{logo:"svg"}})}create(){super.create(),this.getElements()}getElements(){const e=document.querySelectorAll(".home__gallery__video__link"),t=document.querySelectorAll(".home__gallery__image__link"),o=document.querySelectorAll(".home__content__images__title__text"),s=document.querySelectorAll(".home__content__videos__title__text"),a=document.querySelector(".selectors__videos"),r=document.querySelector(".selectors__photos");this.onMutation(a,s,e),this.onMutation(r,o,t)}onMutation(e,t,o){new MutationObserver((e=>{e.forEach((e=>{if("class"===e.attributeName){e.target.className.match(/(--active)(?![_a-zA-Z0-9-])/g)&&(this.hover=new a.default(t),this.onHover(o))}}))})).observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,characterData:!0})}onHover(e){e.forEach(((e,t)=>{e.addEventListener("mouseover",(()=>{this.hover.init(t)})),e.addEventListener("mouseleave",(()=>{this.hover.reset()}))}))}}}},(function(e){e.h=()=>"788521cf52924f07a0d2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40OTg5M2JjODJlZDc1MjZjODcyMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NkxBR2UsTUFBTUEsVUFBYUMsRUFBQUEsUUFFaENDLGNBRUVDLE1BQU0sQ0FDSkMsR0FBSSxPQUNKQyxRQUFTLFFBQ1RDLFNBQVUsQ0FDUkMsS0FBTSxRQUdaLENBRUFDLFNBRUVMLE1BQU1LLFNBRU5DLEtBQUtDLGFBQ1AsQ0FFQUEsY0FFRSxNQUFNQyxFQUFzQkMsU0FBU0MsaUJBQWlCLCtCQUNoREMsRUFBc0JGLFNBQVNDLGlCQUFpQiwrQkFFaERFLEVBQWVILFNBQVNDLGlCQUFpQix1Q0FDekNHLEVBQWVKLFNBQVNDLGlCQUFpQix1Q0FFekNJLEVBQWFMLFNBQVNNLGNBQWMsc0JBQ3BDQyxFQUFhUCxTQUFTTSxjQUFjLHNCQUUxQ1QsS0FBS1csV0FBV0gsRUFBWUQsRUFBY0wsR0FDMUNGLEtBQUtXLFdBQVdELEVBQVlKLEVBQWNELEVBQzVDLENBRUFNLFdBQVdDLEVBQVVDLEVBQVFDLEdBRUYsSUFBSUMsa0JBQWtCQyxJQUU3Q0EsRUFBVUMsU0FBUUMsSUFFaEIsR0FBOEIsVUFBM0JBLEVBQVNDLGNBQ1osQ0FDa0JELEVBQVNFLE9BQU9DLFVBQ3JCQyxNQUFNLGtDQUVmdEIsS0FBS3VCLE1BQVEsSUFBSUMsRUFBQUEsUUFBTVgsR0FDdkJiLEtBQUt5QixRQUFRWCxHQUVqQixJQUNBLElBR2FZLFFBQVFkLEVBQ3pCLENBQ0VlLFlBQVksRUFDWkMsZ0JBQWlCLENBQUMsU0FDbEJDLFdBQVcsRUFDWEMsZUFBZSxHQUVuQixDQUVBTCxRQUFRWCxHQUVOQSxFQUFNRyxTQUFRLENBQUNjLEVBQU1DLEtBRW5CRCxFQUFLRSxpQkFBaUIsYUFBYSxLQUVqQ2pDLEtBQUt1QixNQUFNVyxLQUFLRixFQUFNLElBR3hCRCxFQUFLRSxpQkFBaUIsY0FBYyxLQUVsQ2pDLEtBQUt1QixNQUFNWSxPQUFPLEdBQ2xCLEdBRU4sa0JDL0VGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtLy4vYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRzZm9yZ290aGFtL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5pbXBvcnQgSG92ZXIgZnJvbSAnYW5pbWF0aW9ucy9Ib3ZlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VcbntcbiAgY29uc3RydWN0b3IoKVxuICB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6ICdob21lJyxcbiAgICAgIGVsZW1lbnQ6ICcuaG9tZScsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsb2dvOiAnc3ZnJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGUoKVxuICB7XG4gICAgc3VwZXIuY3JlYXRlKClcblxuICAgIHRoaXMuZ2V0RWxlbWVudHMoKVxuICB9XG5cbiAgZ2V0RWxlbWVudHMoKVxuICB7XG4gICAgY29uc3QgdmlkZW9fbGlua19lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X192aWRlb19fbGluaycpXG4gICAgY29uc3QgaW1hZ2VfbGlua19lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19pbWFnZV9fbGluaycpXG5cbiAgICBjb25zdCBpbWFnZV90aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fY29udGVudF9faW1hZ2VzX190aXRsZV9fdGV4dCcpXG4gICAgY29uc3QgdmlkZW9fdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2NvbnRlbnRfX3ZpZGVvc19fdGl0bGVfX3RleHQnKVxuXG4gICAgY29uc3Qgc2VsZWN0b3JfdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcnNfX3ZpZGVvcycpXG4gICAgY29uc3Qgc2VsZWN0b3JfcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RvcnNfX3Bob3RvcycpXG5cbiAgICB0aGlzLm9uTXV0YXRpb24oc2VsZWN0b3JfdiwgdmlkZW9fdGl0bGVzLCB2aWRlb19saW5rX2VsZW1lbnRzKVxuICAgIHRoaXMub25NdXRhdGlvbihzZWxlY3Rvcl9wLCBpbWFnZV90aXRsZXMsIGltYWdlX2xpbmtfZWxlbWVudHMpXG4gIH1cblxuICBvbk11dGF0aW9uKHNlbGVjdG9yLCB0aXRsZXMsIGxpbmtzKVxuICB7XG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+XG4gICAge1xuICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT5cbiAgICAgIHtcbiAgICAgICAgaWYobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lXG4gICAgICAgICAgaWYoY3VycmVudC5tYXRjaCgvKC0tYWN0aXZlKSg/IVtfYS16QS1aMC05LV0pL2cpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXIgPSBuZXcgSG92ZXIodGl0bGVzKVxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyKGxpbmtzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHNlbGVjdG9yLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgICAgIGNoaWxkTGlzdDogZmFsc2UsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG9uSG92ZXIobGlua3MpXG4gIHtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT5cbiAgICB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+XG4gICAgICB7XG4gICAgICAgIHRoaXMuaG92ZXIuaW5pdChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+XG4gICAgICB7XG4gICAgICAgIHRoaXMuaG92ZXIucmVzZXQoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc4ODUyMWNmNTI5MjRmMDdhMGQyXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwibG9nbyIsImNyZWF0ZSIsInRoaXMiLCJnZXRFbGVtZW50cyIsInZpZGVvX2xpbmtfZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWFnZV9saW5rX2VsZW1lbnRzIiwiaW1hZ2VfdGl0bGVzIiwidmlkZW9fdGl0bGVzIiwic2VsZWN0b3JfdiIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3Rvcl9wIiwib25NdXRhdGlvbiIsInNlbGVjdG9yIiwidGl0bGVzIiwibGlua3MiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZm9yRWFjaCIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsInRhcmdldCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiaG92ZXIiLCJIb3ZlciIsIm9uSG92ZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUZpbHRlciIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJsaW5rIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsInJlc2V0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9