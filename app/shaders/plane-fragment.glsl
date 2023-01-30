precision highp float;

uniform vec2 u_imageSizes;
uniform vec2 u_planeSizes;
uniform float u_offset;
uniform sampler2D tMap;

varying vec2 v_uv;

void main()
{
  vec2 ratio = vec2(
    min((u_planeSizes.x / u_planeSizes.y) / (u_imageSizes.x / u_imageSizes.y), 1.0),
    min((u_planeSizes.y / u_planeSizes.x) / (u_imageSizes.y / u_imageSizes.x), 1.0)
  );

  vec2 uv = vec2(
    v_uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    v_uv.y * ratio.y + (1.0 - ratio.y) * 0.5 + u_offset
  );

  vec4 texture = texture2D(tMap, uv);

  gl_FragColor = texture;
}
