attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 v_uv;

void main()
{
  vec4 new_pos = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * new_pos;

  v_uv = uv;
}
