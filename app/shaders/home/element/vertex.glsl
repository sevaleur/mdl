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
  vec4 new_pos = modelViewMatrix * vec4(position, 1.0);

  new_pos.x += sin(new_pos.y / u_viewportSize.y * PI + PI / 2.0) * abs(u_scroll);
  new_pos.z -= sin(new_pos.x / u_viewportSize.x * PI + PI / 2.0) * abs(u_scroll);

  gl_Position = projectionMatrix * new_pos;

  v_uv = uv;
}
