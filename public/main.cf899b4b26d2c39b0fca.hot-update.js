/*! For license information please see main.cf899b4b26d2c39b0fca.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateitsforgotham("main",{"./app/components/Canvas/utils/Raycast.js":(t,s,i)=>{i.r(s),i.d(s,{default:()=>h});var e=i("./node_modules/ogl/src/extras/Raycast.js"),n=i("./node_modules/ogl/src/math/Vec2.js");Object(function(){var t=new Error("Cannot find module 'app/index'");throw t.code="MODULE_NOT_FOUND",t}());class h{constructor({gl:t,camera:s,screen:i,objects:e}){this.app=new Object(function(){var t=new Error("Cannot find module 'app/index'");throw t.code="MODULE_NOT_FOUND",t}())(),this.gl=t,this.camera=s,this.screen=i,this.obj=e,this.link=null,this.hit_img=[],this.init()}init(){this.raycast=new e.Raycast,this.mouse=new n.Vec2,this.r_o=[],this.obj.forEach((t=>{this.r_o.push(t.plane)})),this.addEventListeners()}addEventListeners(){window.addEventListener("load",(()=>{window.addEventListener("mousemove",(t=>{this.handleMouse(t)})),window.addEventListener("touchmove",(t=>{this.handleMouse(t)})),window.addEventListener("click",(t=>{this.handleClick(t)}))}))}handleMouse(t){this.casting(t)}handleClick(t){this.casting(t),this.hit_img&&(this.link=this.obj[this.hit_img.id].onClick(),this.app.onChange(this.link),console.log(this.link))}casting(t){this.mouse.x=t.x/this.screen.width*2-1,this.mouse.y=-(t.y/this.screen.height*2-1),this.raycast.castMouse(this.camera,this.mouse),this.obj.forEach((t=>t.isHit=!1));const s=this.raycast.intersectBounds(this.r_o);s.forEach((t=>{t.isHit=!0})),s.length?this.hit_img=s[0]:this.hit_img=null}}}},(function(t){t.h=()=>"51273f9f6de6de6825ca"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZjg5OWI0YjI2ZDJjMzliMGZjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVZBSWUsTUFBTUEsRUFFbkJDLGFBQVksR0FBRUMsRUFBRSxPQUFFQyxFQUFNLE9BQUVDLEVBQU0sUUFBRUMsSUFFaENDLEtBQUtDLElBQU0sSUFBSUMsT0FBQUEsV0FBQUEsSUFBQUEsRUFBQUEsSUFBQUEsTUFBQUEsa0NBQUFBLE1BQUFBLEVBQUFBLEtBQUFBLG1CQUFBQSxDQUFBQSxDQUFBQSxHQUFKLEdBRVhGLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtILE9BQVNBLEVBQ2RHLEtBQUtGLE9BQVNBLEVBQ2RFLEtBQUtHLElBQU1KLEVBRVhDLEtBQUtJLEtBQU8sS0FFWkosS0FBS0ssUUFBVSxHQUVmTCxLQUFLTSxNQUNQLENBRUFBLE9BRUVOLEtBQUtPLFFBQVUsSUFBSUMsRUFBQUEsUUFDbkJSLEtBQUtTLE1BQVEsSUFBSUMsRUFBQUEsS0FFakJWLEtBQUtXLElBQU0sR0FFWFgsS0FBS0csSUFBSVMsU0FBUUMsSUFFZmIsS0FBS1csSUFBSUcsS0FBS0QsRUFBRUUsTUFBTSxJQUd4QmYsS0FBS2dCLG1CQUNQLENBRUFBLG9CQUVFQyxPQUFPQyxpQkFBaUIsUUFBUSxLQUU5QkQsT0FBT0MsaUJBQWlCLGFBQWNDLElBRXBDbkIsS0FBS29CLFlBQVlELEVBQUUsSUFHckJGLE9BQU9DLGlCQUFpQixhQUFjQyxJQUVwQ25CLEtBQUtvQixZQUFZRCxFQUFFLElBR3JCRixPQUFPQyxpQkFBaUIsU0FBVUMsSUFFaENuQixLQUFLcUIsWUFBWUYsRUFBRSxHQUNuQixHQUVOLENBRUFDLFlBQVlELEdBRVZuQixLQUFLc0IsUUFBUUgsRUFDZixDQUVBRSxZQUFZRixHQUVWbkIsS0FBS3NCLFFBQVFILEdBQ1ZuQixLQUFLSyxVQUVOTCxLQUFLSSxLQUFPSixLQUFLRyxJQUFJSCxLQUFLSyxRQUFRa0IsSUFBSUMsVUFFdEN4QixLQUFLQyxJQUFJd0IsU0FBU3pCLEtBQUtJLE1BQ3ZCc0IsUUFBUUMsSUFBSTNCLEtBQUtJLE1BRXJCLENBRUFrQixRQUFRSCxHQUVObkIsS0FBS1MsTUFBTW1CLEVBQUtULEVBQUVTLEVBQUk1QixLQUFLRixPQUFPK0IsTUFBUyxFQUFNLEVBQ2pEN0IsS0FBS1MsTUFBTXFCLElBQU1YLEVBQUVXLEVBQUk5QixLQUFLRixPQUFPaUMsT0FBUyxFQUFNLEdBRWxEL0IsS0FBS08sUUFBUXlCLFVBQVVoQyxLQUFLSCxPQUFRRyxLQUFLUyxPQUV6Q1QsS0FBS0csSUFBSVMsU0FBU0MsR0FBS0EsRUFBRW9CLE9BQVEsSUFFakMsTUFBTUMsRUFBT2xDLEtBQUtPLFFBQVE0QixnQkFBZ0JuQyxLQUFLVyxLQUUvQ3VCLEVBQUt0QixTQUFRVCxJQUVYQSxFQUFJOEIsT0FBUSxDQUFJLElBR2ZDLEVBQUtFLE9BRU5wQyxLQUFLSyxRQUFVNkIsRUFBSyxHQUlwQmxDLEtBQUtLLFFBQVUsSUFFbkIsa0JDbkdGZ0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2l0c2ZvcmdvdGhhbS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy91dGlscy9SYXljYXN0LmpzIiwid2VicGFjazovL2l0c2ZvcmdvdGhhbS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjMiwgUmF5Y2FzdCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEFwcCBmcm9tICdhcHAvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJheVxue1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBjYW1lcmEsIHNjcmVlbiwgb2JqZWN0cyB9KVxuICB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwKClcblxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICB0aGlzLm9iaiA9IG9iamVjdHNcblxuICAgIHRoaXMubGluayA9IG51bGxcblxuICAgIHRoaXMuaGl0X2ltZyA9IFtdXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpXG4gIHtcbiAgICB0aGlzLnJheWNhc3QgPSBuZXcgUmF5Y2FzdCgpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMyKClcblxuICAgIHRoaXMucl9vID0gW11cblxuICAgIHRoaXMub2JqLmZvckVhY2gobyA9PlxuICAgIHtcbiAgICAgIHRoaXMucl9vLnB1c2goby5wbGFuZSlcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpXG4gIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+XG4gICAge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PlxuICAgICAge1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlKGUpXG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+XG4gICAgICB7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2UoZSlcbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVNb3VzZShlKVxuICB7XG4gICAgdGhpcy5jYXN0aW5nKGUpXG4gIH1cblxuICBoYW5kbGVDbGljayhlKVxuICB7XG4gICAgdGhpcy5jYXN0aW5nKGUpXG4gICAgaWYodGhpcy5oaXRfaW1nKVxuICAgIHtcbiAgICAgIHRoaXMubGluayA9IHRoaXMub2JqW3RoaXMuaGl0X2ltZy5pZF0ub25DbGljaygpXG5cbiAgICAgIHRoaXMuYXBwLm9uQ2hhbmdlKHRoaXMubGluaylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGluaylcbiAgICB9XG4gIH1cblxuICBjYXN0aW5nKGUpXG4gIHtcbiAgICB0aGlzLm1vdXNlLnggPSAoZS54IC8gdGhpcy5zY3JlZW4ud2lkdGgpICogMi4wIC0gMS4wXG4gICAgdGhpcy5tb3VzZS55ID0gLShlLnkgLyB0aGlzLnNjcmVlbi5oZWlnaHQgKiAyLjAgLSAxLjApXG5cbiAgICB0aGlzLnJheWNhc3QuY2FzdE1vdXNlKHRoaXMuY2FtZXJhLCB0aGlzLm1vdXNlKVxuXG4gICAgdGhpcy5vYmouZm9yRWFjaCggbyA9PiBvLmlzSGl0ID0gZmFsc2UgKVxuXG4gICAgY29uc3QgaGl0cyA9IHRoaXMucmF5Y2FzdC5pbnRlcnNlY3RCb3VuZHModGhpcy5yX28pXG5cbiAgICBoaXRzLmZvckVhY2gob2JqID0+XG4gICAge1xuICAgICAgb2JqLmlzSGl0ID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBpZihoaXRzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmhpdF9pbWcgPSBoaXRzWzBdXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICB0aGlzLmhpdF9pbWcgPSBudWxsXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MTI3M2Y5ZjZkZTZkZTY4MjVjYVwiKSJdLCJuYW1lcyI6WyJSYXkiLCJjb25zdHJ1Y3RvciIsImdsIiwiY2FtZXJhIiwic2NyZWVuIiwib2JqZWN0cyIsInRoaXMiLCJhcHAiLCJBcHAiLCJvYmoiLCJsaW5rIiwiaGl0X2ltZyIsImluaXQiLCJyYXljYXN0IiwiUmF5Y2FzdCIsIm1vdXNlIiwiVmVjMiIsInJfbyIsImZvckVhY2giLCJvIiwicHVzaCIsInBsYW5lIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZU1vdXNlIiwiaGFuZGxlQ2xpY2siLCJjYXN0aW5nIiwiaWQiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsImNhc3RNb3VzZSIsImlzSGl0IiwiaGl0cyIsImludGVyc2VjdEJvdW5kcyIsImxlbmd0aCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==