attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 v_uv;

void main()
{
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  v_uv = uv;
}
