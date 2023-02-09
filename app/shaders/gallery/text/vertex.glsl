#define PI 3.1415

attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float u_scroll;
uniform vec2 u_viewportSize;

varying vec2 v_uv;

void main()
{
  vec3 new_pos = position;

  float x_ease = -new_pos.x * 1.5;
  new_pos.y -= sin((new_pos.x / u_viewportSize.x) * (PI + PI / 2.0)) * (u_scroll) * x_ease;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(new_pos, 1.0);

  v_uv = uv;
}
