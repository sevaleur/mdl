attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float u_time;

varying vec2 v_uv;
varying float v_ele;

void main()
{
  vec4 new_pos = modelViewMatrix * vec4(position, 1.0);

  float ele = sin(new_pos.x * .3 + u_time) * .1 + sin(new_pos.y * .2 - u_time) * .1;
  new_pos.z += ele;

  gl_Position = projectionMatrix * new_pos;

  v_uv = uv;
  v_ele = ele;
}
