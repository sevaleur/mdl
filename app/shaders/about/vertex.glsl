precision highp float;

#define PI 3.1415926535897932384626433832795

attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float u_time;

varying vec2 v_uv;
varying float v_ele;

void main()
{
  vec3 new_pos = position;

  float ele = sin((new_pos.x - u_time / 30. + new_pos.y / 4.) * PI * 3.) * .1;
  new_pos.z += ele;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(new_pos, 1.0);

  v_uv = uv;
  v_ele = ele;
}
