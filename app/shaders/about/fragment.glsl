precision highp float;

uniform vec2 u_imageSize;
uniform vec2 u_planeSize;
uniform vec2 u_viewportSize;
uniform float u_alpha;
uniform sampler2D tMap;

varying vec2 v_uv;
varying float v_ele;

void main()
{
  vec2 ratio = vec2(
    min((u_planeSize.x / u_planeSize.y) / (u_imageSize.x / u_imageSize.y), 1.0),
    min((u_planeSize.y / u_planeSize.x) / (u_imageSize.y / u_imageSize.x), 1.0)
  );

  vec2 uv = vec2(
    v_uv.x * ratio.x + (1.0 - ratio.x) * .5,
    v_uv.y * ratio.y + (1.0 - ratio.y) * .5
  );

  vec4 texture = texture2D(tMap, uv);
  texture.rgb *= v_ele * 2.0 + .5;

  gl_FragColor = texture;
  gl_FragColor.a = u_alpha;
}
